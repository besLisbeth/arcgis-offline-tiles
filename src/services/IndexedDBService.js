import { openDB } from 'idb';

function onError(error, rejectFN) {
    console.log(error);
    rejectFN(error);
}

export default class IndexedDBService {

    indexedDb = null;
    dbName;
    version = 1;

    constructor(dbName = 'db') {
        this.dbName = dbName;
    }

    getObjectStore(objectStoreName) {
        return this.indexedDb.transaction(objectStoreName).objectStore(objectStoreName);
    }

    async createObjectStore(objectStoreName) {
        this.version = ++this.version;
        try {
            this.indexedDb = await openDB(this.dbName, this.version, {
                upgrade(db) {
                    if (!db.objectStoreNames.contains(objectStoreName)) {
                        db.createObjectStore(objectStoreName);
                    }
                },
                blocking: () => {
                    this.indexedDb.close();
                }
            })
        }
        catch (e) {
            console.log(e);
        }
        return this.indexedDb;
    }

    addRecord(objectStoreName, value, key) {
        return this.indexedDb.put(objectStoreName, value, key);
    }

    async getRecord(objectStoreName, key) {
        const value = await this.indexedDb.get(objectStoreName, key);
        if (!value) {
            return Promise.reject(`Record with key ${key} is not existing`);
        }
        return value;
    }

    removeAll(objectStoreName) {
        return this.indexedDb.clear(objectStoreName);
    }

    removeRecord(objectStoreName, key) {
        return this.indexedDb.delete(objectStoreName, key);
    }

    async getAllRecords(objectStoreName) {
        let cursor = await this.getObjectStore(objectStoreName).openCursor();
        const records = [];

        while (cursor) {
            records.push([cursor.key, cursor.value]);
            cursor = await cursor.continue();
        }

        return records;
    }
}