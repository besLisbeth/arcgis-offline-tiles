(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/ElevationLayer":"GAgw","esri/views/3d/layers/VectorTileLayerView3D":"O17U","esri/layers/support/LercWorker":"S+mV"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{GAgw:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("2Atf"),r("9opi"),r("qKT0"),r("gyO4"),r("eMAb"),r("zp6E"),r("ma1f"),r("qMld"),r("Vx27"),r("MFVu"),r("0RER"),r("WhPF"),r("FEX1"),r("QJ8R"),r("EtsK"),r("S+mV")],void 0===(i=function(e,t,n,i,o,a,l,p,u,s,c,d,y,h,f,v,m,w){return function(e){function t(t){var r=e.call(this)||this;return r.copyright=null,r.heightModelInfo=null,r.path=null,r.opacity=1,r.operationalLayerType="ArcGISTiledElevationServiceLayer",r.type="elevation",r.url=null,r.version=null,r._lercWorker=w.acquireInstance(),r}return i(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?n({url:e},t):e},t.prototype.destroy=function(){w.releaseInstance(this._lercWorker),this._lercWorker=null},Object.defineProperty(t.prototype,"minScale",{get:function(){},set:function(e){this.constructed&&l.deprecated(this.declaredClass+".minScale support has been removed.","","4.5")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"maxScale",{get:function(){},set:function(e){this.constructed&&l.deprecated(this.declaredClass+".maxScale support has been removed.","","4.5")},enumerable:!0,configurable:!0}),t.prototype.readVersion=function(e,t){var r=t.currentVersion;return r||(r=9.3),r},t.prototype.load=function(){var e=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:function(e){for(var t=0;t<e.typeKeywords.length;t++)if("elevation 3d layer"===e.typeKeywords[t].toLowerCase())return!0;throw new u("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}}).then(function(){return e._fetchImageService()},function(){return e._fetchImageService()})),this.when()},t.prototype.fetchTile=function(e,t,r,n){var i=this;return void 0===n&&(n=0),this.load().then(function(){return i._fetchTileAvailability(e,t,r)}).then(function(){return p(i.getTileUrl(e,t,r),{responseType:"array-buffer"})}).then(function(e){return i._lercWorker.decode(e.data,{noDataValue:n,returnFileInfo:!0})}).then(function(e){return{values:e.pixelData,width:e.width,height:e.height,maxZError:e.fileInfo.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue}})},t.prototype.getTileUrl=function(e,t,r){var i=!this.tilemapCache&&this.supportsBlankTile,o=a.objectToQuery(n({},this.parsedUrl.query,{blankTile:!i&&null}));return this.parsedUrl.path+"/tile/"+e+"/"+t+"/"+r+(o?"?"+o:"")},t.prototype.queryElevation=function(e,t){var r=this;return this._importElevationQuery().then(function(n){return(new n.ElevationQuery).query(r,e,t)})},t.prototype.createElevationSampler=function(e,t){var r=this;return this._importElevationQuery().then(function(n){return(new n.ElevationQuery).createSampler(r,e,t)})},t.prototype.importLayerViewModule=function(e){switch(e.type){case"2d":return s.reject(new u("elevation-layer:view-not-supported","ElevationLayer is only supported in 3D"));case"3d":return s.create(function(e){return Promise.all([r.e(0),r.e(6),r.e(9),r.e(72)]).then(function(){var t=[r("ujdx")];e.apply(null,t)}.bind(this)).catch(r.oe)})}},t.prototype._fetchTileAvailability=function(e,t,r){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,t,r):s.resolve("unknown")},t.prototype._fetchImageService=function(){var e=this;return s.resolve().then(function(){if(e.resourceInfo)return e.resourceInfo;var t={query:n({f:"json"},e.parsedUrl.query),responseType:"json"};return p(e.parsedUrl.path,t)}).then(function(t){t.ssl&&(e.url=e.url.replace(/^http:/i,"https:")),e.read(t.data,{origin:"service",url:e.parsedUrl})})},t.prototype._importElevationQuery=function(){return s.create(function(e){r.e(34).then(function(){var t=[r("T16p")];e.apply(null,t)}.bind(this)).catch(r.oe)})},o([c.property({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),o([c.property({readOnly:!0,type:d})],t.prototype,"heightModelInfo",void 0),o([c.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],t.prototype,"path",void 0),o([c.property({type:["show","hide"]})],t.prototype,"listMode",void 0),o([c.property({json:{read:!1,write:!1}})],t.prototype,"minScale",null),o([c.property({json:{read:!1,write:!1}})],t.prototype,"maxScale",null),o([c.property({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],t.prototype,"opacity",void 0),o([c.property({type:["ArcGISTiledElevationServiceLayer"]})],t.prototype,"operationalLayerType",void 0),o([c.property()],t.prototype,"resourceInfo",void 0),o([c.property({json:{read:!1},value:"elevation",readOnly:!0})],t.prototype,"type",void 0),o([c.property(m.url)],t.prototype,"url",void 0),o([c.property()],t.prototype,"version",void 0),o([c.reader("version",["currentVersion"])],t.prototype,"readVersion",null),o([c.subclass("esri.layers.ElevationLayer")],t)}(c.declared(y,h,f,v))}.apply(null,n))||(e.exports=i)},O17U:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("qMld"),r("8MXS"),r("Vx27"),r("T4YA"),r("tkHB"),r("U6PA"),r("5iPT")],void 0===(i=function(e,t,r,n,i,o,a,l,p,u,s){return function(e){function t(t){return e.call(this)||this}return r(t,e),t.prototype.initialize=function(){var e,t,r=this,n=this.layer.compatibleTileInfo256,a=this._getTileInfoSupportError(n,this.layer.fullExtent);a?this.addResolvingPromise(i.reject(a)):t=o.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then(function(){var e,t=r.view.basemapTerrain.tilingScheme,n=t.pixelSize[0];r.schemaHelper=new p(n,r.view.spatialReference.isWGS84),e=256===n?r.layer.compatibleTileInfo256:r.view.spatialReference.isWGS84?r.layer.compatibleTileInfo512:r.layer.tileInfo;var i=r._getTileInfoCompatibilityError(e,t);if(i)throw i;r.tileInfo=e,r._updateMinMaxDataLevel()});var l=null;e=this._initializeTileHandler(),this.tileHandler=e[0],this.renderer=e[1],l=e[2],this.watch(["layer.currentStyleInfo","view.pixelRatio"],function(){var e,t,n;l.isFulfilled()||l.cancel(),e=r._initializeTileHandler(),t=e[0],n=e[1],(l=e[2]).then(function(){var e=r.tileHandler;r.renderer=n,r.tileHandler=t,r.emit("data-changed"),e.destroy()})});var u=i.all([t,l]);this.addResolvingPromise(u)},t.prototype.destroy=function(){this.renderer=null,this.tileHandler.destroy(),this.tileHandler=null},t.prototype._initializeTileHandler=function(){var e=new u(this.layer,this.view.pixelRatio,!1,null),t=new s,r=e.start();return r.then(function(){t.initialize(e.spriteMosaic,e.glyphMosaic,!1)}),[e,t,r]},n([a.property({aliasOf:"layer.fullExtent"})],t.prototype,"fullExtent",void 0),n([a.property()],t.prototype,"layer",void 0),n([a.property()],t.prototype,"updatingPercentageValue",void 0),n([a.subclass("esri.views.3d.layers.VectorTileLayerView3D")],t)}(a.declared(l))}.apply(null,n))||(e.exports=i)},"S+mV":function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r("xhoE"),r("qMld"),r("ADZV"),r("8V7H"),r.dj.m(e)],void 0===(i=function(e,t,n,i,o,a,l){function p(){return i.create(function(e){r.e(89).then(function(){var t=[r("Rc7o")];e.apply(null,t)}.bind(this)).catch(r.oe)})}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(){}return e.prototype._decode=function(e){return p().then(function(t){var r=(0,t.decode)(e.buffer,e.options);return{result:r,transferList:[r.pixelData.buffer]}})},e}(),s=function(t){function r(r){var n=t.call(this)||this;return n.scheduler=r,n._thread=void 0,a.open(o.getAbsMid("./LercWorker",e,l),{strategy:"dedicated",scheduler:r}).then(function(e){void 0===n._thread?n._thread=e:e.close()}),n}return n(r,t),r.prototype.destroy=function(){this._thread&&this._thread.close(),this._thread=null},r.prototype.decode=function(e,t){return e&&0!==e.byteLength?this._thread?this._thread.invoke("_decode",{buffer:e,options:t},{transferList:[e]}):p().then(function(r){return(0,r.decode)(e,t)}):i.resolve(null)},r}(u),c=new Map;t.acquireInstance=function(e){var t=c.get(e);return t||(t={instance:new s(e),ref:0},c.set(e,t)),++t.ref,t.instance},t.releaseInstance=function(e){if(null!=e){var t=e.scheduler,r=c.get(t);r&&--r.ref<=0&&(r.instance.destroy(),c.delete(t))}},t.default=function(){return new u}}.apply(null,n))||(e.exports=i)}}]);