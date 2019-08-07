arcgis-offline-tiles
=================
![npm](https://img.shields.io/npm/v/arcgis-offline-tiles)

An extension for saving tiles in the compressed format to the indexedDB and .csv files which enables a feature of using tiles offline in ArcGIS JS API of version 4+.
This project is based on the **[offline-editor-js](https://github.com/Esri/offline-editor-js)** which is currently not adding new functionality.

# Foreword

This project is built as an extension tool which uses an API of version 4+ bundled into the source repo, doesn't depending on whether it will be
**[an online resource](https://js.arcgis.com/4.12/)** or custom build. That excludes the possibility of ArcGIS code duplication.

For the ArcGIS SDK of version 3+, please, have a look at the **[original GitHub repo](https://github.com/Esri/offline-editor-js)** build by Esri developers.

# Demo 

Demo page is available here: **[https://beslisbeth.github.io/arcgis-offline-tiles/]()**. 
For the source code of the demo page, please switch to the branch **[demo-sources](https://github.com/besLisbeth/arcgis-offline-tiles/tree/demo-sources)**.


# Installation
```
$ npm install --save arcgis-offline-tiles
```
Then, if you're using a module-compatible system (webpack, etc):
```
import { initOfflineFeatures, OfflineLayer, TileHelpers, IndexedDBHelpers } from 'arcgis-offline-tiles';
```

# Dependencies  
It's important to include ArcGIS JS API to the project, cause given extension, not imports any of the version of API but rely on the dependencies of the project where it will be included.

#####  Included dependencies: 
```
 "file-saver": "^2.0.2", 
 "idb": "^4.0.3",
 "lz-string": "^1.4.4"
``` 

1. **[file-saver](https://github.com/eligrey/FileSaver.js)** is used for saving .csv files with compressed downloaded tiles to the file system.
2. **[idb](https://github.com/jakearchibald/idb)** - as a wrapper for convenient usage of indexedDB API;
3. **[lz-string](https://github.com/pieroxy/lz-string)** is used for tiles compression before saving it to indexedDB and, consequently, the .csv file. 

# API

### async `initOfflineFeatures`
**Important:** This asynchronous function should be called once in the project before any usage of `arcgis-offline-tiles`.
It creates the indexedDB, the object store for tiles and sets the initial parameters to the extension, such as `dbName`, `objectStoreName`, `showNoTile` and `noTileIcon`. 
* `dbName` - indexedDB name;
* `objectStoreName` - object store name inside indexedDB;
* `showNoTile` - a boolean property which indicates whether to show the icon with the `NO TILE` pattern, when there is no tile in the local cache (indexedDB);
* `noTileIcon` - you can set custom base64 icon for showing when no tiles are available in the maps on the current location.
```
await initOfflineFeatures({ dbName: 'demo-test', objectStoreName = 'tiles', showNoTile = true, noTileIcon = base64Icon }  });
```

### `OfflineLayer`

The wrapper function for TileLayer or WebTileLayer which enables the offline functionality. It takes two options: 
1. The class of Layer - it can be whether TileLayer or WebTileLayer currently.
2. Layer properties which usually passed to TileLayer or WebTileLayer.
```
import TileLayer from 'esri/layers/TileLayer';

const offlineLayer = OfflineLayer(TileLayer, {
    title: 'dark-gray',
    url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer',
    visible: true
});
this.map.layers.add(offlineLayer);
```

#### `OfflineLayer` methods: 

##### 1. async `isSavedToIndexedDB()`
A method which indicates if any of the tiles are saved to indexedDB.

##### 2. `goOffline()`
This method puts the layer in offline mode. When in offline mode, the layer will fetching all tiles from the indexedDB or local cache.
If there are no tiles saved to indexedDB on the current level, then `noTileIcon` will be showed if `showNoTile` is set to `true`.
##### 3. `goOnline()`
Switching to online mode. When in online mode, the layer will behave as regular layers, fetching all tiles from the remote server.
If there is no internet connectivity the tiles may appear thanks to the browser's cache, but no attempt will be made to look up tiles in the local database.
##### 4. `deleteAllTiles()`
Removing all the saved tiles from indexedDB for the current layer.
##### 5. `saveToFile(fileName)`
Downloads tiles saved into indexedDB to the filesystem in the compressed .csv format in UTF-16.
##### 6. async* `loadFromFile(file, progressCallback)`
Loads previously saved .csv file. 
The generator method that enables the possibility to stop the reading tiles from a csv file into local tile cache.
```
 const gen = await offlineLayer.loadFromFile(file, progress => console.log(progress.percent));
 let result = await gen.next();
 while (!this.stopRequest && !result.done) {
    result = await gen.next();
 }
 if (result.done) {
    console.log('Successfully loaded into indexedDB')
 }
```
##### 7. async* `uploadTilesToIndexedDb(minLevel, maxLevel, extent, progressCallback)`
The generator method that saves chosen extent from minLevel (zoom) to maxLevel. Returns progress object and can be stopped via generator.
```
const gen = offlineLayer.uploadTilesToIndexedDb(3, 8, this.view.extent, progress => console.log(progress.percent));
let result = await gen.next();
while (!this.stopRequest && !result.done) {
    result = await gen.next();
}
if (result.done) {
    console.log('Successfully loaded into indexedDB')
}
```

### `TileHelpers`
TileHelpers is the object which combine helper utilities. They are mainly used internally, but some can be used externally, such as: 
 
#### 1. `getTileSizeFromMinMaxLevels(layer, extent, minLevel, maxLevel)`
Returns { tileCount, sizeBytes } object.

#### 2. `getTileSizeInBytes(tileUrl) `

### `IndexedDBHelpers`
Object which includes two helper methods: 

#### 1. async `isIndexedDBSupported()` 
checks whether indexedDB functionality is enabled in current version of the browser;
#### 2. async `getAvailableStorageSpace`() 
which returns { usage, quota, left } object for the current browser.

For the detailed usage of any of the upper functionality, please refer to the **[source code of the demo page](https://github.com/besLisbeth/arcgis-offline-tiles/tree/gh-pages)**

## Supported browsers
 
Only the versions of browsers which support the indexedDB. Please, check the compatibility **[there](https://caniuse.com/#search=indexeddb)** or on any similar websites.

## Licensing
Copyright 2017 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [LICENSE-2.0.txt](LICENSE-2.0.txt) file.