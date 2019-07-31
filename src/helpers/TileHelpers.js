import { Base64String } from '../utils/CompressionUtils';

const TileHelpers = {

    getTileSizeInBytes(tileUrl) {
        return new Promise((resolve, reject) => {
            if (tileUrl) {
                const req = new XMLHttpRequest();
                req.open('GET', tileUrl, true);
                req.overrideMimeType('text/plain; charset=x-user-defined'); // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest?redirectlocale=en-US&redirectslug=DOM%2FXMLHttpRequest%2FUsing_XMLHttpRequest#Handling_binary_data

                req.onload = () => {
                    if (req.status === 200 && req.responseText !== '') {
                        resolve((Base64String.wordToBase64(Base64String.stringToWord(req.responseText)).length + tileUrl.length))
                    } else {
                        reject('xhr failed for', tileUrl);
                    }
                };
                req.send(null);
            } else {
                resolve(NaN)
            }
        })
    },

    parseNum(url) {
        return url.match(/[\/]\d+/g).map(num => num.replace('/', ''))
    },

    getLevelRowColFromURL(type, url) {
        if (type === 'tile') {
            const [level = 0, row = 0, col = 0] = this.parseNum(url);
            return { level, row, col };
        }
        const [level = 0, col = 0, row = 0] = this.parseNum(url);
        return { level, row, col };
    },

    getTileSizeFromMinMaxLevels(layer, extent, minLevel, maxLevel) {
        return this.getTileSizeInBytes(layer.lastTileUrl)
            .then(tileSize => {
                let tileCount = 0;
                let sizeBytes = 0;
                for (let level = minLevel; level <= maxLevel; level++) {
                    tileCount += this.getCellsInExtent(layer.tileInfo, extent, level).length;
                    sizeBytes += tileCount * tileSize;
                }
                return {
                    tileCount,
                    sizeBytes
                };
            })
    },

    getCellsInExtent(tileInfo, extent, gridLevel) {
        const cellId0 = this.getCellFromXy(tileInfo, extent.xmin, extent.ymin, gridLevel);
        const cellId1 = this.getCellFromXy(tileInfo, extent.xmax, extent.ymax, gridLevel);

        const i0 = Math.max(Math.min(cellId0[0], cellId1[0]), tileInfo.lods[gridLevel].startTileCol);
        const i1 = Math.min(Math.max(cellId0[0], cellId1[0]), tileInfo.lods[gridLevel].endTileCol);
        const j0 = Math.max(Math.min(cellId0[1], cellId1[1]), tileInfo.lods[gridLevel].startTileRow);
        const j1 = Math.min(Math.max(cellId0[1], cellId1[1]), tileInfo.lods[gridLevel].endTileRow);

        const cellIds = [];

        for (let i = i0; i <= i1; i++) {
            for (let j = j0; j <= j1; j++) {
                cellIds.push([i, j]);
            }
        }
        return cellIds;
    },

    getCellFromXy(tileInfo, x, y, level) {
        const col = Math.floor((x - tileInfo.origin.x) / (tileInfo.lods[level].cols * tileInfo.lods[level].resolution));
        const row = Math.floor((tileInfo.origin.y - y) / (tileInfo.lods[level].rows * tileInfo.lods[level].resolution));
        return [col, row];
    }
};

export default TileHelpers;