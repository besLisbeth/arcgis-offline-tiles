(function(){(this||window).webpackJsonp.registerAbsMids({"esri/renderers/support/clickToleranceUtils":"/E+R","esri/views/layers/support/Path":"20TT","esri/views/2d/layers/LayerView2D":"6i4F","esri/views/layers/support/ClipRect":"7MXx","esri/views/2d/layers/ImageryTileLayerView2D":"DDmr","esri/geometry/geometryAdapters/json":"H9Hv","esri/views/layers/support/popupUtils":"I6zq","esri/views/support/drapedUtils":"NbdF","esri/layers/graphics/data/projectionSupport":"Q2Em","esri/views/layers/LayerView":"WsO6","esri/views/layers/support/ClipArea":"ZMIQ","esri/views/layers/ImageryTileLayerView":"tbSi","esri/views/layers/support/Geometry":"ts8o"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"/E+R":function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=function(e,t){function r(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function i(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){for(var t=0,r=0,i=0;i<e.length;i++){var n=e[i].size;"number"==typeof n&&(t+=n,r++)}return t/r}(e.stops):t}Object.defineProperty(t,"__esModule",{value:!0}),t.calculateTolerance=function(e){var t=e&&e.renderer,n="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return n;var s="visualVariables"in t?function(e,t){if(!t)return e;var r=t.filter((function(e){return"size"===e.type})).map((function(t){var r=t.maxSize,n=t.minSize;return(i(r,e)+i(n,e))/2})),n=0,s=r.length;if(0===s)return e;for(var o=0;o<s;o++)n+=r[o];var a=Math.floor(n/s);return Math.max(a,e)}(n,t.visualVariables):n;if("simple"===t.type)return r(s,t.symbol);if("unique-value"===t.type){var o=s;return t.uniqueValueInfos.forEach((function(e){o=r(o,e.symbol)})),o}if("class-breaks"===t.type){var a=s;return t.classBreakInfos.forEach((function(e){a=r(a,e.symbol)})),a}return t.type,s}}.apply(null,i))||(e.exports=n)},"20TT":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("Vx27"),r("ZMIQ")],void 0===(n=function(e,t,r,i,n){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="path",t.path=[],t}return r.__extends(t,e),Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r.__decorate([i.property({type:[[[Number]]],json:{write:!0}})],t.prototype,"path",void 0),r.__decorate([i.property({readOnly:!0,dependsOn:["path"]})],t.prototype,"version",null),r.__decorate([i.subclass("esri.views.layers.support.Path")],t)}(n)}.apply(null,i))||(e.exports=n)},"6i4F":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("y4WC"),r("K2Kz"),r("8MXS"),r("Vx27"),r("YaB4"),r("ZMIQ"),r("7MXx"),r("ts8o"),r("20TT")],void 0===(n=function(e,t,r,i,n,s,o,a,l,u,p,c){Object.defineProperty(t,"__esModule",{value:!0});var h=i.ofType({key:"type",base:l,typeMap:{rect:u,path:c,geometry:p}});t.LayerView2DMixin=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.clips=new h,t.moving=!1,t.attached=!1,t.lastUpdateId=-1,t.updateRequested=!1,t}return r.__extends(t,e),t.prototype.initialize=function(){var e,t=this;this.container||(this.container=new a.Container),this.handles.add([s.init(this,"suspended",(function(e){t.container&&(t.container.visible=!e),t.view&&!e&&t.updateRequested&&t.view.requestUpdate()}),!0),s.init(this,["layer.opacity","container"],(function(){var e,r;t.container&&(t.container.opacity=null!==(r=null===(e=t.layer)||void 0===e?void 0:e.opacity)&&void 0!==r?r:1)}),!0),s.init(this,["layer.blendMode"],(function(e){t.container&&(t.container.blendMode=e)}),!0),this.clips.on("change",(function(){t.container.clips=t.clips,t.notifyChange("clips")}))]),this.container.clips=this.clips,(null===(e=this.view)||void 0===e?void 0:e.whenLayerView)?this.view.whenLayerView(this.layer).then((function(e){e!==t||t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){})):this.when().then((function(){t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){}))},t.prototype.destroy=function(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1,this.layer=null,this.view=null},Object.defineProperty(t.prototype,"updating",{get:function(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.isVisibleAtScale=function(e){var t=!0,r=this.layer,i=r.minScale,n=r.maxScale;if(null!=i&&null!=n){var s=!i,o=!n;!s&&e<=i&&(s=!0),!o&&e>=n&&(o=!0),t=s&&o}return t},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())},t.prototype.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return!1},t.prototype.canResume=function(){return!!e.prototype.canResume.call(this)&&this.isVisibleAtScale(this.view.scale)},r.__decorate([o.property({type:h,set:function(e){var t=n.referenceSetter(e,this._get("clips"),h);this._set("clips",t)}})],t.prototype,"clips",void 0),r.__decorate([o.property()],t.prototype,"moving",void 0),r.__decorate([o.property()],t.prototype,"attached",void 0),r.__decorate([o.property()],t.prototype,"container",void 0),r.__decorate([o.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),r.__decorate([o.property({readOnly:!0})],t.prototype,"updateParameters",void 0),r.__decorate([o.property()],t.prototype,"updateRequested",void 0),r.__decorate([o.property({dependsOn:["attached","updateRequested","suspended"]})],t.prototype,"updating",null),r.__decorate([o.property()],t.prototype,"view",void 0),r.__decorate([o.subclass("esri.views.2d.layers.LayerView2D")],t)}(e)}}.apply(null,i))||(e.exports=n)},"7MXx":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("Vx27"),r("ZMIQ")],void 0===(n=function(e,t,r,i,n){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="rect",t.left=null,t.right=null,t.top=null,t.bottom=null,t}var n;return r.__extends(t,e),n=t,t.prototype.clone=function(){return new n({left:this.left,right:this.right,top:this.top,bottom:this.bottom})},Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r.__decorate([i.property({type:[Number,String],json:{write:!0}})],t.prototype,"left",void 0),r.__decorate([i.property({type:[Number,String],json:{write:!0}})],t.prototype,"right",void 0),r.__decorate([i.property({type:[Number,String],json:{write:!0}})],t.prototype,"top",void 0),r.__decorate([i.property({type:[Number,String],json:{write:!0}})],t.prototype,"bottom",void 0),r.__decorate([i.property({readOnly:!0,dependsOn:["left","right","top","bottom"]})],t.prototype,"version",null),n=r.__decorate([i.subclass("esri.views.layers.support.ClipRect")],t)}(n)}.apply(null,i))||(e.exports=n)},DDmr:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("TMur"),r("jZlN"),r("H1tY"),r("qsST"),r("LxLY"),r("qMld"),r("jBNx"),r("8MXS"),r("Vx27"),r("dXLH"),r("pMLx"),r("XOvD"),r("SAwq"),r("mnow"),r("YaB4"),r("6i4F"),r("M3W5"),r("EBSo"),r("ovos"),r("tbSi"),r("WsO6"),r("7XLS"),r("NbdF")],void 0===(n=function(e,t,r,i,n,s,o,a,l,u,p,c,h,d,y,f,m,v,_,g,b,w,x,P,R,S){var I=o.getLogger("esri.views.2d.layers.ImageryTileLayerView2D"),T=[0,0];return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._tileStrategy=null,t._tileInfoView=null,t._fetchQueue=null,t._blockCacheRegistryUrl=null,t._blockCacheRegistryId=null,t._bitmapView=null,t._emptyTilePixelBlock=null,t._previousSrcResolution=null,t._needBlockCacheUpdate=!1,t._globalSymbolizerParams=null,t._symbolizerParams=null,t._abortController=null,t._globalUpdateRequested=!1,t.useWebGLForProcessing=null,t.datumTransformation=null,t.layer=null,t._redrawDebounced=l.debounce((function(e){return t._redrawImage(e)}),2e3),t}return r.__extends(t,e),t.prototype.initialize=function(){var e=this.updateFullExtent();this.addResolvingPromise(e)},Object.defineProperty(t.prototype,"useProgressiveUpdate",{get:function(){return null==this._get("useProgressiveUpdate")||this._get("useProgressiveUpdate")},set:function(e){var t=this;this._tileStrategy&&this.useProgressiveUpdate!==e&&(this._tileStrategy.destroy(),this._bitmapView.removeAllChildren(),this._tileStrategy=new w({cachePolicy:e?"keep":"purge",resampling:!1,acquireTile:function(e){return t.acquireTile(e)},releaseTile:function(e){return t.releaseTile(e)},cacheSize:e?40:0,tileInfoView:this._tileInfoView}),this._set("useProgressiveUpdate",e),this.requestUpdate())},enumerable:!0,configurable:!0}),t.prototype.hitTest=function(e,t){if(this.suspended)return l.resolve(null);var r=this.view.toMap(u.createScreenPoint(e,t));return l.resolve(new n({attributes:{},geometry:r}))},t.prototype.update=function(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume();var t=!this.useProgressiveUpdate||this._needBlockCacheUpdate;if(this.layer.raster&&t){var r=e.state,n=r.extent,s=r.resolution,o=this._previousViewResolution===s?this._previousSrcResolution:m.projectResolution(new i.Point({x:s,y:s,spatialReference:this.view.spatialReference}),this.layer.spatialReference,this.fullExtent,this.datumTransformation),a=n.toJSON?n:i.Extent.fromJSON(n);y.update(this._blockCacheRegistryUrl,this._blockCacheRegistryId,a,s,o,this.layer.raster.ioConfig.sampling),this._previousViewResolution!==s&&(this._previousViewResolution=s,null!=this._symbolizerParams&&this._updateSymbolizerParams()),this._previousSrcResolution=o,this._needBlockCacheUpdate=!1}this.notifyChange("updating")},t.prototype.attach=function(){var e=this;this.layer.increaseRasterJobHandlerUsage(),null==this.useWebGLForProcessing&&(this.useWebGLForProcessing=this.layer.symbolizer.canRenderInWebGL),s("esri-webgl-texture-float")&&s("esri-webgl-color-buffer-float")||(this.useWebGLForProcessing=!1),this.layer.raster&&(this.layer.raster.ioConfig.allowPartialFill=!0);var t=this._createTileInfo();this._set("tileInfo",t),this._tileInfoView=new g(t,this.fullExtent),this._fetchQueue=new b({tileInfoView:this._tileInfoView,concurrency:10,process:function(t,r){return e.fetchTile(t,r)}}),this._tileStrategy=new w({cachePolicy:this.useProgressiveUpdate?"keep":"purge",resampling:!1,acquireTile:function(t){return e.acquireTile(t)},releaseTile:function(t){return e.releaseTile(t)},cacheSize:this.useProgressiveUpdate?40:0,tileInfoView:this._tileInfoView}),this._bitmapView=new v.RasterTileContainer(this._tileInfoView),this.container.addChild(this._bitmapView),this.handles.add([p.watch(this,["layer.interpolation","layer.bandIds","layer.renderer"],(function(){return e._redrawDebounced().catch((function(e){l.isAbortError(e)||I.error(e)}))})),p.watch(this,["layer.multidimensionalDefinition"],this.refreshDebounced)],"attach"),this._updateBlockCacheRegistry()},t.prototype.detach=function(){this.handles.remove("attach"),this.layer.decreaseRasterJobHandlerUsage(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null,y.unregister(this._blockCacheRegistryUrl,this._blockCacheRegistryId)},t.prototype.moveStart=function(){this.requestUpdate()},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){var e=this;!this.hasTilingEffects&&this.useProgressiveUpdate||(this._abortController&&this._abortController.abort(),this._abortController=l.createAbortController(),0===this._fetchQueue.length&&this._redrawImage(this._abortController.signal).then((function(){e._globalUpdateRequested=!1,e.requestUpdate()}))),this.requestUpdate()},t.prototype.createFetchPopupFeaturesQueryGeometry=function(e,t){return S.createQueryGeometry(e,t,this.view)},t.prototype.doRefresh=function(){return r.__awaiter(this,void 0,void 0,(function(){var e=this;return r.__generator(this,(function(t){return this.updateRequested||this.suspended||(this._updateSymbolizerParams(),this._updateBlockCacheRegistry(),this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((function(t){return e._enqueueTileFetch(t)})),this.notifyChange("updating")),[2]}))}))},t.prototype.isUpdating=function(){return this._fetchQueue.length>0||this._globalUpdateRequested},t.prototype.acquireTile=function(e){var t,r,i=this._bitmapView.createTile(e),n=i.bitmap;return t=this._tileInfoView.getTileCoords(T,i.key),n.x=t[0],n.y=t[1],n.resolution=this._tileInfoView.getTileResolution(i.key),r=this._tileInfoView.tileInfo.size,n.width=r[0],n.height=r[1],this._enqueueTileFetch(i),this.requestUpdate(),this._needBlockCacheUpdate=!0,this._globalUpdateRequested=this.hasTilingEffects||!this.useProgressiveUpdate,i},t.prototype.releaseTile=function(e){var t=this;this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(function(){e.destroy(),t.requestUpdate()})),this.requestUpdate()},t.prototype.fetchTile=function(e,t){var r=!a.isNone(t)&&t.signal,i={tileInfo:this.tileInfo,signal:a.unwrap(r),registryId:this._blockCacheRegistryId,requestRawData:this.useWebGLForProcessing,srcResolution:this._previousSrcResolution,datumTransformation:this.datumTransformation};return this.layer.fetchTile(e.level,e.row,e.col,i)},t.prototype._createTileInfo=function(){var e=this.view.spatialReference,t=new i.Point({x:this.fullExtent.xmin,y:this.fullExtent.ymax,spatialReference:e}),r=d.create({spatialReference:e,size:512});return(0===r.origin.x||r.origin.x>t.x)&&(r.origin=t),r},t.prototype._enqueueTileFetch=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var t,i,n,s,o,a,u,p,c=this;return r.__generator(this,(function(r){switch(r.label){case 0:if(this._fetchQueue.has(e.key.id))return[2];r.label=1;case 1:return r.trys.push([1,13,,14]),[4,this._fetchQueue.push(e.key)];case 2:if(t=r.sent(),i=this.layer.bandIds,n=!this.useProgressiveUpdate||this.hasTilingEffects&&!this._globalSymbolizerParams,!this._globalUpdateRequested||this.moving||0!==this._fetchQueue.length)return[3,7];n=!1,r.label=3;case 3:return r.trys.push([3,5,,6]),[4,this._redrawImage(this._abortController&&this._abortController.signal)];case 4:return r.sent(),[3,6];case 5:return s=r.sent(),l.isAbortError(s)&&I.error(s),[3,6];case 6:this._globalUpdateRequested=!1,r.label=7;case 7:return this.useWebGLForProcessing&&!this.hasTilingEffects&&null==this._symbolizerParams&&this._updateSymbolizerParams(),t&&t.pixelBlock?this.useWebGLForProcessing?[3,9]:(o={extent:t.extent,pixelBlock:t.pixelBlock},[4,this.layer.applyRenderer(o,this.hasTilingEffects&&this._globalSymbolizerParams&&"stretch"===this._globalSymbolizerParams.type?this._globalSymbolizerParams:null)]):[3,11];case 8:return a=r.sent(),e.bitmap.rawPixelData=o,e.bitmap.source=a,[3,10];case 9:e.bitmap.source=t.pixelBlock,r.label=10;case 10:return e.bitmap.symbolizerParameters=this.useWebGLForProcessing?this._globalSymbolizerParams||this._symbolizerParams:null,!e.bitmap.transformGrid&&this.useWebGLForProcessing&&(e.bitmap.transformGrid=t.transformGrid),[3,12];case 11:u=this._createEmptyTilePixelBlock(),e.bitmap.source=u,e.bitmap.symbolizerParameters=this.useWebGLForProcessing?this._symbolizerParams:null,e.bitmap.transformGrid=null,r.label=12;case 12:return e.bitmap.bandIds=i,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.bitmap.interpolation=this._getLayerInterpolation(),e.bitmap.suspended=n,e.bitmap.invalidateTexture(),e.once("attach",(function(){return c.requestUpdate()})),this._bitmapView.addChild(e),[3,14];case 13:return p=r.sent(),l.isAbortError(p)||I.error(p),[3,14];case 14:return this.requestUpdate(),[2]}}))}))},t.prototype._redrawImage=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,i,n=this;return r.__generator(this,(function(s){switch(s.label){case 0:return this.layer.updateRenderer(),this.hasTilingEffects?[4,this._updateGlobalSymbolizerParams(e)]:[3,2];case 1:return s.sent(),[3,3];case 2:this._updateSymbolizerParams(),this._globalSymbolizerParams=null,s.label=3;case 3:return t=this.layer.bandIds,i=this._bitmapView.children.map((function(e){return r.__awaiter(n,void 0,void 0,(function(){var i;return r.__generator(this,(function(r){switch(r.label){case 0:return this.useWebGLForProcessing?[3,2]:(i=e.bitmap,[4,this.layer.applyRenderer(e.bitmap.rawPixelData,this.hasTilingEffects&&this._globalSymbolizerParams&&"stretch"===this._globalSymbolizerParams.type?this._globalSymbolizerParams:null)]);case 1:i.source=r.sent(),r.label=2;case 2:return e.bitmap.symbolizerParameters=this.useWebGLForProcessing?this._globalSymbolizerParams||this._symbolizerParams:null,e.bitmap.bandIds=t,e.bitmap.interpolation=this._getLayerInterpolation(),e.bitmap.suspended=!1,[2]}}))}))})),[4,l.eachAlways(i)];case 4:return s.sent(),this.container.requestRender(),[2]}}))}))},t.prototype._createEmptyTilePixelBlock=function(){if(!this._emptyTilePixelBlock){var e=this._tileInfoView.tileInfo.size[0],t=this._tileInfoView.tileInfo.size[1];this._emptyTilePixelBlock=new h({width:e,height:t,pixels:[new Uint8Array(e*t)],mask:new Uint8Array(e*t),pixelType:"u8"})}return this._emptyTilePixelBlock},t.prototype._updateGlobalSymbolizerParams=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,i,n;return r.__generator(this,(function(r){switch(r.label){case 0:return t={srcResolution:this._previousSrcResolution,registryId:this._blockCacheRegistryId,signal:e},[4,this.layer.fetchPixels(this.view.extent,this.view.width,this.view.height,t)];case 1:return(i=r.sent())&&i.pixelBlock?(n=this.layer.symbolizer.generateWebGLParameters({pixelBlock:f.extractBands(i.pixelBlock,this.layer.bandIds),isGCS:this.view.spatialReference.isGeographic,resolution:{x:this._previousViewResolution,y:this._previousViewResolution},bandIds:this.layer.bandIds}),!this.useWebGLForProcessing&&n&&"stretch"===n.type&&this.layer.renderer&&"raster-stretch"===this.layer.renderer.type&&(n.factor=n.factor.map((function(e){return 255*e})),n.outMin=Math.round(255*n.outMin),n.outMax=Math.round(255*n.outMax)),this._globalSymbolizerParams=n,[2]):[2]}}))}))},t.prototype._updateSymbolizerParams=function(){this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null,isGCS:this.view.spatialReference.isGeographic,resolution:{x:this._previousViewResolution,y:this._previousViewResolution},bandIds:this.layer.bandIds})},t.prototype._updateBlockCacheRegistry=function(){var e=this.layer,t=e.url,r=e.rasterInfo,i=e.multidimensionalDefinition,n=e.raster,s=i&&r&&r.multidimensionalInfo?t+"?sliceId="+n.getSliceIndex(i):t;s!==this._blockCacheRegistryUrl&&(null==this._blockCacheRegistryUrl&&y.unregister(this._blockCacheRegistryUrl,this._blockCacheRegistryId),this._blockCacheRegistryId=y.register(s,this.layer.raster.rasterInfo),this._blockCacheRegistryUrl=s)},t.prototype._getLayerInterpolation=function(){var e=this.layer.renderer.type;return"raster-colormap"===e||"unique-value"===e||"class-breaks"===e?"nearest":this.layer.interpolation},r.__decorate([c.property()],t.prototype,"useProgressiveUpdate",null),r.__decorate([c.subclass("esri.views.2d.layers.ImageryTileLayerView2D")],t)}(x.ImageryTileLayerView(R.RefreshableLayerView(_.LayerView2DMixin(P))))}.apply(null,i))||(e.exports=n)},H9Hv:function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.jsonAdapter={convertToGEGeometry:function(e,t){return null==t?null:e.convertJSONToGeometry(t)},exportPoint:function(e,t,i){var n=new r(e.getPointX(t),e.getPointY(t),i),s=e.hasZ(t),o=e.hasM(t);return s&&(n.z=e.getPointZ(t)),o&&(n.m=e.getPointM(t)),n},exportPolygon:function(e,t,r){return new i(e.exportPaths(t),r,e.hasZ(t),e.hasM(t))},exportPolyline:function(e,t,r){return new n(e.exportPaths(t),r,e.hasZ(t),e.hasM(t))},exportMultipoint:function(e,t,r){return new s(e.exportPoints(t),r,e.hasZ(t),e.hasM(t))},exportExtent:function(e,t,r){var i=e.hasZ(t),n=e.hasM(t),s=new o(e.getXMin(t),e.getYMin(t),e.getXMax(t),e.getYMax(t),r);if(i){var a=e.getZExtent(t);s.zmin=a.vmin,s.zmax=a.vmax}if(n){var l=e.getMExtent(t);s.mmin=l.vmin,s.mmax=l.vmax}return s}};var r=function(e,t,r){this.x=e,this.y=t,this.spatialReference=r,this.z=void 0,this.m=void 0},i=function(e,t,r,i){this.rings=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,r&&(this.hasZ=r),i&&(this.hasM=i)},n=function(e,t,r,i){this.paths=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,r&&(this.hasZ=r),i&&(this.hasM=i)},s=function(e,t,r,i){this.points=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,r&&(this.hasZ=r),i&&(this.hasM=i)},o=function(e,t,r,i,n){this.xmin=e,this.ymin=t,this.xmax=r,this.ymax=i,this.spatialReference=n,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}.apply(null,i))||(e.exports=n)},I6zq:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("ll/V"),r("LxLY"),r("k7g7")],void 0===(n=function(e,t,r,i,n,s){Object.defineProperty(t,"__esModule",{value:!0}),t.getRequiredFields=function(e,t){return void 0===t&&(t=e.popupTemplate),r.__awaiter(this,void 0,void 0,(function(){var o,a,l,u,p,c,h,d,y;return r.__generator(this,(function(f){switch(f.label){case 0:return n.isSome(t)?[4,t.getRequiredFields(e.fields)]:[2,[]];case 1:return o=f.sent(),a=t.lastEditInfoEnabled,l=e.objectIdField,u=e.typeIdField,p=e.globalIdField,c=e.relationships,i.includes(o,"*")?[2,["*"]]:a?[4,s.getFeatureEditFields(e)]:[3,3];case 2:return d=f.sent(),[3,4];case 3:d=[],f.label=4;case 4:return h=d,y=s.fixFields(e.fields,r.__spreadArrays(o,h)),u&&y.push(u),y&&l&&s.hasField(e.fields,l)&&-1===y.indexOf(l)&&y.push(l),y&&p&&s.hasField(e.fields,p)&&-1===y.indexOf(p)&&y.push(p),c&&c.forEach((function(t){var r=t.keyField;y&&r&&s.hasField(e.fields,r)&&-1===y.indexOf(r)&&y.push(r)})),[2,y]}}))}))},t.getFetchPopupTemplate=function(e,t){return e.popupTemplate?e.popupTemplate:n.isSome(t)&&t.defaultPopupTemplateEnabled&&n.isSome(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}}.apply(null,i))||(e.exports=n)},NbdF:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("TMur"),r("LxLY"),r("8uEs"),r("/E+R")],void 0===(n=function(e,t,r,i,n,s){function o(e,t,i,s){var o;if(void 0===s&&(s=new r.Extent),"2d"===i.type)o=t*i.resolution;else if("3d"===i.type){var a=i.basemapTerrain,l=a.overlayManager,u=l?l.overlayPixelSizeInMapUnits(e):1;o=a&&!a.spatialReference.equals(i.spatialReference)?n.getMetersPerUnitForSR(a.spatialReference)/n.getMetersPerUnitForSR(i.spatialReference):t*u}var p=e.x-o,c=e.y-o,h=e.x+o,d=e.y+o,y=i.spatialReference;return s.xmin=Math.min(p,h),s.ymin=Math.min(c,d),s.xmax=Math.max(p,h),s.ymax=Math.max(c,d),s.spatialReference=y,s}Object.defineProperty(t,"__esModule",{value:!0}),t.createQueryGeometry=o,t.intersectsDrapedGeometry=function(e,t,r){var n=r.toMap(e);return i.isNone(n)?null:o(n,s.calculateTolerance(),r,a).intersects(t)?n:null};var a=new r.Extent}.apply(null,i))||(e.exports=n)},Q2Em:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("ma1f"),r("qMld"),r("wIC5"),r("H9Hv"),r("nrlZ"),r("vtMp")],void 0===(n=function(e,t,r,i,n,s,o,a,l){Object.defineProperty(t,"__esModule",{value:!0});var u=[0,0];function p(e,t){var r,i,n;if(!t)return null;if("x"in t){var s={x:0,y:0};return r=e(t.x,t.y,u),s.x=r[0],s.y=r[1],null!=t.z&&(s.z=t.z),null!=t.m&&(s.m=t.m),s}return"xmin"in t?(s={xmin:0,ymin:0,xmax:0,ymax:0},i=e(t.xmin,t.ymin,u),s.xmin=i[0],s.ymin=i[1],n=e(t.xmax,t.ymax,u),s.xmax=n[0],s.ymax=n[1],t.hasZ&&(s.zmin=t.zmin,s.zmax=t.zmax,s.hasZ=!0),t.hasM&&(s.mmin=t.mmin,s.mmax=t.mmax,s.hasM=!0),s):"rings"in t?{rings:c(t.rings,e),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:c(t.paths,e),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:h(t.points,e),hasM:t.hasM,hasZ:t.hasZ}:void 0}function c(e,t){for(var r=[],i=0,n=e;i<n.length;i++){var s=n[i];r.push(h(s,t))}return r}function h(e,t){for(var r=[],i=0,n=e;i<n.length;i++){var s=n[i],o=t(s[0],s[1],[0,0]);r.push(o),s.length>2&&o.push(s[2]),s.length>3&&o.push(s[3])}return r}function d(e,t){return!(!a.isValid(e)||!a.isValid(t)||a.equals(e,t)||l.canProject(e,t))}t.doesBrowserSupportProjection=function(e,t){return!d(e,t)||s.isSupported()},t.checkProjectionSupport=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var n,o,a;return r.__generator(this,(function(r){if(!t)return[2];if(Array.isArray(e)){for(n=0,o=e;n<o.length;n++)if(d((a=o[n]).geometry&&a.geometry.spatialReference,t)){if(s.isSupported())return[2,s.load()];throw new i("feature-store:unsupported-query","projection not supported",{inSpatialReference:e,outSpatialReference:t})}return[2]}if(!d(e,t))return[2];if(s.isSupported())return[2,s.load()];throw new i("feature-store:unsupported-query","projection not supported",{inSpatialReference:e,outSpatialReference:t})}))}))};var y=p.bind(null,l.lngLatToXY),f=p.bind(null,l.xyToLngLat);t.project=function(e,t,r){return e?(r||(r=t,t=e.spatialReference),a.isValid(t)&&a.isValid(r)&&!a.equals(t,r)?l.canProject(t,r)?a.isWebMercator(r)?y(e):f(e):s.projectMany(o.jsonAdapter,[e],t,r,null)[0]:e):e};var m=new(function(){function e(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}return e.prototype.push=function(e,t,i){return r.__awaiter(this,void 0,void 0,(function(){var s,o=this;return r.__generator(this,(function(r){return e&&e.length&&t&&i&&!a.equals(t,i)||n.resolve(e),s={geometries:e,inSpatialReference:t,outSpatialReference:i,resolve:null},this._jobs.push(s),[2,n.create((function(e){s.resolve=e,null===o._timer&&(o._timer=setTimeout(o._process,10))}))]}))}))},e.prototype._process=function(){this._timer=null;var e=this._jobs.shift();if(e){var t=e.geometries,r=e.inSpatialReference,i=e.outSpatialReference,n=e.resolve;l.canProject(r,i)?a.isWebMercator(i)?n(t.map(y)):n(t.map(f)):n(s.projectMany(o.jsonAdapter,t,r,i,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}},e}());t.projectMany=function(e,t,i){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(r){return[2,m.push(e,t,i)]}))}))}}.apply(null,i))||(e.exports=n)},WsO6:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("Gtr7"),r("BcWh"),r("7MDj"),r("NfRO"),r("qsST"),r("SZNs"),r("Vx27")],void 0===(n=function(e,t,r,i,n,s,o,a,l,u){return function(e){function t(t){var r=e.call(this,t)||this;return r.layer=null,r.parent=null,r}return r.__extends(t,e),t.prototype.initialize=function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var r=e.layer&&e.layer.id||"no id",i=e.layer&&e.layer.title||"no title";throw a.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+i+"', id: '"+r+"')",t),t}}))},t.prototype.destroy=function(){this.layer=this.parent=null},Object.defineProperty(t.prototype,"fullOpacity",{get:function(){var e=function(e){return null==e?1:e};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"suspendInfo",{get:function(){return this.getSuspendInfo()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),t.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},t.prototype.getSuspendInfo=function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e},t.prototype.isUpdating=function(){return!1},r.__decorate([u.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],t.prototype,"fullOpacity",null),r.__decorate([u.property()],t.prototype,"layer",void 0),r.__decorate([u.property()],t.prototype,"parent",void 0),r.__decorate([u.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],t.prototype,"suspended",null),r.__decorate([u.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],t.prototype,"suspendInfo",null),r.__decorate([u.property({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],t.prototype,"updating",null),r.__decorate([u.property({dependsOn:["layer.visible"]})],t.prototype,"visible",null),r.__decorate([u.subclass("esri.views.layers.LayerView")],t)}(s.HandleOwnerMixin(o.IdentifiableMixin(l.EsriPromiseMixin(n.EventedMixin(i)))))}.apply(null,i))||(e.exports=n)},ZMIQ:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("ycL1"),r("Vx27")],void 0===(n=function(e,t,r,i,n){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),r.__decorate([n.subclass("esri.views.layers.support.ClipArea")],t)}(i.JSONSupport)}.apply(null,i))||(e.exports=n)},tbSi:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("jZlN"),r("ma1f"),r("LxLY"),r("qMld"),r("Vx27"),r("Q2Em"),r("mnow"),r("I6zq")],void 0===(n=function(e,t,r,i,n,s,o,a,l,u,p){Object.defineProperty(t,"__esModule",{value:!0}),t.ImageryTileLayerView=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.layer=null,t.view=null,t.fullExtent=null,t.tileInfo=null,t._rasterFieldPrefix="Raster.",t.datumTransformation=null,t}return r.__extends(t,e),Object.defineProperty(t.prototype,"hasTilingEffects",{get:function(){return this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment},enumerable:!0,configurable:!0}),t.prototype.fetchPopupFeatures=function(e,t){var a,l;return r.__awaiter(this,void 0,void 0,(function(){var u,c,h,d,y,f,m,v,_,g,b,w,x;return r.__generator(this,(function(r){switch(r.label){case 0:if(u=this.layer,!e)return[2,o.reject(new n("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:u}))];if(c=u.popupEnabled,h=p.getFetchPopupTemplate(u,t),!c||!s.isSome(h))throw new n("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:c,popupTemplate:h});return d=[],[4,u.identify(e)];case 1:if(y=r.sent().value){if(f=y.join(", "),(m={ObjectId:0})["Raster.ServicePixelValue"]=this._formatAttributeValue(f,"Raster.ServicePixelValue"),(v=null===(l=null===(a=u.rasterInfo)||void 0===a?void 0:a.attributeTable)||void 0===l?void 0:l.features)&&v.length>0&&(_=v.filter((function(e){var t=e.attributes.value||e.attributes.Value||e.attributes.VALUE;return String(t)===f}))).length>0&&(g=_[0]))for(b in g.attributes)g.attributes.hasOwnProperty(b)&&(w=this._rasterFieldPrefix+b,m[w]=this._formatAttributeValue(g.attributes[b],w));(x=new i(this.fullExtent.clone(),null,m)).layer=u,x.sourceLayer=x.layer,d.push(x)}return[2,d]}}))}))},t.prototype.updateFullExtent=function(){var e,t=this.layer.tileInfo;t&&t.spatialReference||(e=new n("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer}));var r=this.view.spatialReference;if(l.doesBrowserSupportProjection(r,this.layer.spatialReference)){var i=u.projectExtent(this.layer.fullExtent,r,this.datumTransformation);null==i&&(e=new n("layerview:projection-not-supported","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer})),this._set("fullExtent",i)}else e=new n("layerview:projection-not-supported","The layer requires projection engine, which is not supported in current browser",{layer:this.layer});return e?o.reject(e):o.resolve()},t.prototype._formatAttributeValue=function(e,t){if("string"==typeof e){var r=this.layer.popupTemplate&&this.layer.popupTemplate.fieldInfos,i=this._getFieldInfo(r,t),n=i&&i.format;if(n){var s=void 0,o=void 0;return e.trim().indexOf(",")>-1?(o=(s=",")+" ",this._formatDelimitedString(e,s,o,n)):e.trim().indexOf(" ")>-1?(s=o=" ",this._formatDelimitedString(e,s,o,n)):this._formatNumberFromString(e,n)}}return e},t.prototype._getFieldInfo=function(e,t){if(e&&e.length&&t){var r=t.toLowerCase(),i=void 0;return e.some((function(e){return!(!e.fieldName||e.fieldName.toLowerCase()!==r&&e.fieldName.toLowerCase()!==r.replace(/ /g,"_")||(i=e,0))})),i}},t.prototype._formatDelimitedString=function(e,t,r,i){var n=this;return e&&t&&r&&i?e.trim().split(t).map((function(e){return n._formatNumberFromString(e,i)})).join(r):e},t.prototype._formatNumberFromString=function(e,t){if(!e||!t)return e;var r=Number(e);return isNaN(r)?e:t.format(r)},r.__decorate([a.property()],t.prototype,"layer",void 0),r.__decorate([a.property()],t.prototype,"view",void 0),r.__decorate([a.property()],t.prototype,"fullExtent",void 0),r.__decorate([a.property()],t.prototype,"tileInfo",void 0),r.__decorate([a.property()],t.prototype,"_rasterFieldPrefix",void 0),r.__decorate([a.property({readOnly:!0,dependsOn:["layer.renderer"]})],t.prototype,"hasTilingEffects",null),r.__decorate([a.subclass("esri.views.layers.ImageryTileLayerView")],t)}(e)}}.apply(null,i))||(e.exports=n)},ts8o:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("zOht"),r("TMur"),r("Vx27"),r("YADd"),r("Lzvl"),r("ZMIQ")],void 0===(n=function(e,t,r,i,n,s,o,a){var l={base:s,key:"type",typeMap:{extent:i.Extent,polygon:i.Polygon}};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="geometry",t.geometry=null,t}var i;return r.__extends(t,e),i=t,Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new i({geometry:this.geometry.clone()})},r.__decorate([n.property({types:l,json:{read:o.fromJSON,write:!0}})],t.prototype,"geometry",void 0),r.__decorate([n.property({readOnly:!0,dependsOn:["geometry"]})],t.prototype,"version",null),i=r.__decorate([n.subclass("esri.views.layers.support.Geometry")],t)}(a)}.apply(null,i))||(e.exports=n)}}]);