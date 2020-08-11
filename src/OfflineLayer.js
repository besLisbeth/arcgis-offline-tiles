import WebTileLayer from 'esri/layers/WebTileLayer';
import TileLayer from 'esri/layers/TileLayer';
import esriRequest from 'esri/request';
import Point from 'esri/geometry/Point';
import * as watchUtils from 'esri/core/watchUtils';
import * as promiseUtils from 'esri/core/promiseUtils';
import FileSaver from 'file-saver';
import LZString from 'lz-string';
import { Base64String } from './utils/CompressionUtils';
import TileHelpers from './helpers/TileHelpers';
import IndexedDBService from './services/IndexedDBService';
import { webTileFullExtent, webTileInfo } from './helpers/staticTileOptions';
import OfflineLayerDBService from './services/OfflineLayerDBService';
import { isIndexedDBSupported } from './helpers/indexedDB';

const NO_TILE_ICON_BASE64 = 'data:image/png;base64,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pmk0TROPj48Hn3l4eIimaSJN06O3A4NJwDMxm82ibdtXo4D5fB6r1Sp+//4dz8/Pw5H+6ekpdrtdJEkS8/n8S/9f713ie3vaceo9x557QAB451Sgfyin34HKshweunk5HzAej2MymXz5+f9nbjJyI9L39Wu5XP55+XQZ39uxR4Z3u90wSXjqEV0wAjhjx47oaZq63Me/ZhIQBAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEAAbAJQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEAvqe/BwCeKjUweoA8pQAAAABJRU5ErkJggg==';
const DB_NAME = 'offline-layers';
const OBJECT_STORE_NAME = 'tiles';

let offlineConfig = {
    dbName: DB_NAME,
    objectStoreName: OBJECT_STORE_NAME,
    showNoTile: true,
    noTileIcon: NO_TILE_ICON_BASE64
};

let indexedDbService;

export async function initOfflineFeatures({ dbName = offlineConfig.dbName, objectStoreName = offlineConfig.objectStoreName, showNoTile = offlineConfig.showNoTile, noTileIcon = offlineConfig.noTileIcon } = offlineConfig) {
    offlineConfig = { dbName, objectStoreName, showNoTile, noTileIcon };
    indexedDbService = new IndexedDBService(offlineConfig.dbName);
    await indexedDbService.createObjectStore(offlineConfig.objectStoreName);
}

export default function OfflineLayer(Layer, props) {
    if (!isIndexedDBSupported()) {
        return new Layer(props);
    }
    if (Layer === TileLayer || Layer === WebTileLayer) {
        if (!indexedDbService) {
            throw new Error(`Init offline features once with 'initOfflineFeatures' function before creating OfflineLayer`)
        }
        const ExtendedLayer = OfflineLayerMixin(Layer);
        const offlineLayer = new ExtendedLayer(props);
        offlineLayer.init(indexedDbService);
        return offlineLayer;
    } else {
        throw new Error('Layer is not TileLayer or WebTileLayer');
    }
}

const OfflineLayerMixin = Layer => Layer.createSubclass({
    properties: {
        lastTileUrl: '',
        isOnline: true,
        fullExtent: webTileFullExtent, // options 'fullExtent' and 'tileInfo' are provided in 'esri/layers/WebTileLayer' but not provided in 'esri/layers/TileLayer'
        tileInfo: webTileInfo, // due to the fact, that they are needed for internal computation - 'esri/layers/TileLayer' is expanded with those static properties
        offlineKey: ''
    },

    init: function (indexedDbService) {
        watchUtils.whenTrue(this, 'loaded', () => {
            this.extendTileLOD();
            if (isIndexedDBSupported()) {
                this.offlineKey = this.title || this.id;
                OfflineLayerDBService.init(this.offlineKey, indexedDbService, OBJECT_STORE_NAME);
            }
        })
    },

    // This is an overwritten method from Layer which can be either 'esri/layers/TileLayer' or 'esri/layers/WebTileLayer'
    // and proposed only for internal usage
    fetchTile: function (level, row, col, options) {
        // call getTileUrl method from Layer is used for correct URL construction
        this.lastTileUrl = this.getTileUrl(level, row, col).split('?')[0];

        if (this.isOnline) {
            return esriRequest(this.lastTileUrl, { responseType: 'image' })
                .then(response => this.createCanvasImage(response.data, this.tileInfo.size[0]),
                    error => {
                        console.log(error);
                        return this.createCanvasImage(null, this.tileInfo.size[0]);
                    });
        } else {
            const image = document.createElement('img');
            return promiseUtils.create(resolve => {
                image.onload = () => resolve(image);
                OfflineLayerDBService.getTileImg(this.offlineKey, LZString.compressToUTF16(this.lastTileUrl))
                    .then(img => image.src = 'data:image/' + this.tileInfo.format.toLowerCase() + ';base64,' + Base64String.decompress(img))
                    .catch(() => {
                        if (offlineConfig.showNoTile) {
                            image.src = offlineConfig.noTileIcon;
                        }
                    });
            }).then(image => this.createCanvasImage(image, this.tileInfo.size[0]));
        }
    },

    createCanvasImage: function (img = null, size) {
        if (!img && offlineConfig.showNoTile) {
            img = document.createElement('img');
            img.src = offlineConfig.noTileIcon;
        }
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = size;
        canvas.height = size;

        context.drawImage(img, 0, 0, size, size);

        return canvas;
    },

    goOffline: function () {
        this.isOnline = false;
        this.refresh();
    },

    /**
     * This method puts the layer in online mode. When in online mode, the layer will
     * behave as regular layers, fetching all tiles from the remote server.
     * If there is no internet connectivity the tiles may appear thanks to the browsers cache,
     * but no attempt will be made to look up tiles in the local database.
     */
    goOnline: function () {
        this.isOnline = true;
        this.refresh();
    },

    /**
     * This method checks if there are any tiles saved to local cache.
     * @returns {Promise<boolean>}
     */
    isSavedToIndexedDB: async function () {
        let tiles = await OfflineLayerDBService.getAllTiles(this.offlineKey);
        return !!(tiles && tiles.length);
    },

    /**
     * Clears the local cache of tiles.
     * @returns {*|Promise<*>}
     */
    deleteAllTiles: function () {
        return OfflineLayerDBService.removeAllTiles(this.offlineKey);
    },

    /**
     * Saves tile cache into a csv format.
     * @param fileName
     */
    saveToFile: async function (fileName) {
        const records = await OfflineLayerDBService.getAllTiles(this.offlineKey);
        const csv = [];
        csv.push('url,img');
        records.forEach(({ url, img }) => csv.push(url + ',' + Base64String.decompress(img)));
        FileSaver.saveAs(new Blob([csv.join('\r\n')], { type: 'text/plain;charset=utf-16' }), fileName);
    },

    /**
     * This method is a generator for the possibility to stop the reading tiles from a csv file into local tile cache.
     * @param file
     * @param progressCallback
     * @returns {Promise<*>}
     */
    loadFromFile: async function (file, progressCallback) {
        return new Promise((resolve, reject) => {
            if ((window).File && (window).FileReader && (window).FileList && (window).Blob) {
                const reader = new FileReader();
                const offlineKey = this.offlineKey;
                reader.onload = evt => resolve(async function* () {
                    const tiles = evt.target.result.split('\r\n');
                    if (tiles[0] !== 'url,img') {
                        return Promise.reject('File ' + file.name + ' doesn\'t contain tiles that can be loaded');
                    }
                    await OfflineLayerDBService.removeAllTiles(offlineKey);
                    tiles.shift();
                    for (let i = 0; i < tiles.length; i++) {
                        const [url, img] = tiles[i].split(',');
                        yield await OfflineLayerDBService.addTile(offlineKey, {
                            url,
                            img: Base64String.compress(img)
                        }).catch(() => {})
                            .finally(() => {
                                progressCallback({
                                    percent: Math.round(tiles.length ? (i / tiles.length * 100) : 0).toFixed(1) + '%',
                                    done: i === tiles.length - 1
                                });
                            });
                    }
                }());
                reader.readAsText(file[0]);
            } else {
                return reject('The File APIs are not fully supported in this browser.');
            }
        })
    },

    uploadTile: function ({ level, row, col }) {
        return this.saveTileToDB(this.getTileUrl(level, row, col));
    },

    /**
     * This method is a generator for the possibility to stop the uploading of tiles to local cache
     * @param minLevel
     * @param maxLevel
     * @param extent
     * @param progressCallback
     * @returns {AsyncIterableIterator<any>}
     */
    uploadTilesToIndexedDb: async function* (minLevel, maxLevel, extent, progressCallback) {
        const cells = [];
        for (let level = minLevel; level <= maxLevel; level++) {
            TileHelpers.getCellsInExtent(this.tileInfo, extent, level).forEach(cell => {
                    cells.push({ level: level, row: cell[1], col: cell[0] })
                }
            )
        }
        await OfflineLayerDBService.removeAllTiles(this.offlineKey);
        for (let i = 0; i < cells.length; i++) {
            yield await this.uploadTile(cells[i])
                .catch(() => {})
                .finally(() => {
                    progressCallback({
                        percent: Math.round(cells.length ? (i / cells.length * 100) : 0).toFixed(1) + '%',
                        done: i === cells.length - 1
                    });
                });
        }
    },

    getContainingTileCoords: function (tileInfo, point, resolution) {
        return {
            row: Math.floor((tileInfo.origin.y - point.y) / (tileInfo.size[0] * resolution)),
            col: Math.floor((point.x - tileInfo.origin.x) / (tileInfo.size[1] * resolution))
        }
    },

    extendTileLOD: function () {
        const minExtentPoint = new Point({
            x: this.fullExtent.xmin,
            y: this.fullExtent.ymax,
            spatialReference: this.spatialReference
        });
        const maxExtentPoint = new Point({
            x: this.fullExtent.xmax,
            y: this.fullExtent.ymin,
            spatialReference: this.spatialReference
        });
        this.tileInfo.lods
            .forEach(lod => {
                const minExtCoords = this.getContainingTileCoords(this.tileInfo, minExtentPoint, lod.resolution);
                lod.startTileRow = 0 > minExtCoords.row ? 0 : minExtCoords.row;
                lod.startTileCol = 0 > minExtCoords.col ? 0 : minExtCoords.col;
                const maxExtCoords = this.getContainingTileCoords(this.tileInfo, maxExtentPoint, lod.resolution);
                lod.endTileRow = maxExtCoords.row;
                lod.endTileCol = maxExtCoords.col;
                lod.rows = 256;
                lod.cols = 256;
            });
        return this.tileInfo.lods;
    },

    saveTileToDB: function (url) {
        return new Promise((resolve, reject) => {
            const urlWithoutQuery = url.split('?')[0];
            const req = new XMLHttpRequest();
            req.open('GET', urlWithoutQuery, true);
            req.overrideMimeType('text/plain; charset=x-user-defined'); // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest?redirectlocale=en-US&redirectslug=DOM%2FXMLHttpRequest%2FUsing_XMLHttpRequest#Handling_binary_data

            req.onload = async () => {
                if (req.status === 200 && req.responseText !== '') {
                    await OfflineLayerDBService.addTile(this.offlineKey, {
                        url: LZString.compressToUTF16(urlWithoutQuery),
                        img: Base64String.compress(Base64String.wordToBase64(Base64String.stringToWord(req.responseText)))
                    });
                    resolve();
                } else {
                    console.log('xhr failed for', urlWithoutQuery);
                    reject(req.status + ' ' + req.statusText + ': ' + req.response + ' when downloading ' + urlWithoutQuery);
                }
            };
            req.onerror = (e) => {
                console.log('xhr failed for', urlWithoutQuery);
                reject(e);
            };
            req.send(null);
        })
    }
});