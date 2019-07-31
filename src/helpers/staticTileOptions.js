import TileInfo from 'esri/layers/support/TileInfo';
import LOD from 'esri/layers/support/LOD';
import Extent from 'esri/geometry/Extent';
import SpatialReference from 'esri/geometry/SpatialReference';
import Point from 'esri/geometry/Point';

// options are taken from the constructor of 'esri/layers/WebTileLayer'
export const webTileFullExtent = new Extent(-20037508.342787, -20037508.34278, 20037508.34278, 20037508.342787, SpatialReference.WebMercator);
export const webTileInfo = new TileInfo({
    size: 256,
    dpi: 96,
    format: 'PNG8',
    compressionQuality: 0,
    origin: new Point({
        x: -20037508.342787,
        y: 20037508.342787,
        spatialReference: SpatialReference.WebMercator
    }),
    spatialReference: SpatialReference.WebMercator,
    lods: [new LOD({
        level: 0,
        scale: 591657527.591555,
        resolution: 156543.033928
    }), new LOD({
        level: 1,
        scale: 295828763.795777,
        resolution: 78271.5169639999
    }), new LOD({
        level: 2,
        scale: 147914381.897889,
        resolution: 39135.7584820001
    }), new LOD({
        level: 3,
        scale: 73957190.948944,
        resolution: 19567.8792409999
    }), new LOD({
        level: 4,
        scale: 36978595.474472,
        resolution: 9783.93962049996
    }), new LOD({
        level: 5,
        scale: 18489297.737236,
        resolution: 4891.96981024998
    }), new LOD({
        level: 6,
        scale: 9244648.868618,
        resolution: 2445.98490512499
    }), new LOD({
        level: 7,
        scale: 4622324.434309,
        resolution: 1222.99245256249
    }), new LOD({
        level: 8,
        scale: 2311162.217155,
        resolution: 611.49622628138
    }), new LOD({
        level: 9,
        scale: 1155581.108577,
        resolution: 305.748113140558
    }), new LOD({
        level: 10,
        scale: 577790.554289,
        resolution: 152.874056570411
    }), new LOD({
        level: 11,
        scale: 288895.277144,
        resolution: 76.4370282850732
    }), new LOD({
        level: 12,
        scale: 144447.638572,
        resolution: 38.2185141425366
    }), new LOD({
        level: 13,
        scale: 72223.819286,
        resolution: 19.1092570712683
    }), new LOD({
        level: 14,
        scale: 36111.909643,
        resolution: 9.55462853563415
    }), new LOD({
        level: 15,
        scale: 18055.954822,
        resolution: 4.77731426794937
    }), new LOD({
        level: 16,
        scale: 9027.977411,
        resolution: 2.38865713397468
    }), new LOD({
        level: 17,
        scale: 4513.988705,
        resolution: 1.19432856685505
    }), new LOD({
        level: 18,
        scale: 2256.994353,
        resolution: .597164283559817
    }), new LOD({
        level: 19,
        scale: 1128.497176,
        resolution: .298582141647617
    })]
});