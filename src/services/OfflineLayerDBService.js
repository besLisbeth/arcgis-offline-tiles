const OfflineLayerDBService = {

    async init(layerKey, indexedDbService, objectStoreName = 'tiles') {
        this.indexedDbService = indexedDbService;
        this.objectStoreName = objectStoreName;
        await this.getAllTiles(layerKey).catch(async () => {
            await this.createRecord(layerKey)
        });
    },

    async createRecord(layerKey) {
        return await this.indexedDbService.addRecord(this.objectStoreName, [], layerKey);
    },

    async addTile(layerKey, { url, img }) {
        const values = await this.getAllTiles(layerKey);
        values.push({ url, img });
        await this.indexedDbService.addRecord(this.objectStoreName, values, layerKey);
        return values;
    },

    async getTileImg(layerKey, url) {
        const values = await this.getAllTiles(layerKey);
        if (values) {
            const tile = values.find(tile => tile.url === url);
            if (tile) {
                return tile.img;
            }
            return Promise.reject('Not Found');
        }
    },

    async removeAllTiles(layerKey) {
        return await this.createRecord(layerKey);
    },

    getAllTiles(layerKey) {
        return this.indexedDbService.getRecord(this.objectStoreName, layerKey);
    }
};

export default OfflineLayerDBService;