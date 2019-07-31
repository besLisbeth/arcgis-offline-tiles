export function isIndexedDBSupported() {
    return !!window.indexedDB;
}

export async function getAvailableStorageSpace() {
    if ('storage' in navigator && 'estimate' in navigator.storage) {
        const { usage, quota } = await navigator.storage.estimate();
        const percent = Math.round(usage / quota * 100);
        return { percent, usage, quota, left: quota - usage }
    }
    return { usage: NaN, quota: NaN, left: NaN }
}

