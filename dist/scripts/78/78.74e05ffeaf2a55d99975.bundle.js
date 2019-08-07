(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/layers/support/popupUtils":"I6zq","esri/views/2d/layers/ImageryLayerView2D":"Zruw","esri/views/layers/ImageryLayerView":"yx9Y"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{I6zq:function(e,t,r){var i,a;i=[r.dj.c(e.i),t,r("Q2wQ"),r("HZ3d"),r("ll/V"),r("LxLY"),r("k7g7")],void 0===(a=function(e,t,r,i,a,n,o){Object.defineProperty(t,"__esModule",{value:!0}),t.getRequiredFields=function(e,t){return void 0===t&&(t=e.popupTemplate),i(this,void 0,void 0,function(){var i,p,s,u,l,d,c,h,y,f,w;return r(this,function(r){switch(r.label){case 0:return n.isSome(t)?[4,t.getRequiredFields(e.fields)]:[2,[]];case 1:return i=r.sent(),p=t.lastEditInfoEnabled,s=e.objectIdField,u=e.typeIdField,a.includes(i,"*")?[2,["*"]]:(d=o.fixFields,c=[e.fields],y=(h=i).concat,f=[[u]],(w=p)?[4,o.getFeatureEditFields(e)]:[3,3]);case 2:w=r.sent(),r.label=3;case 3:return(l=d.apply(void 0,c.concat([y.apply(h,f.concat([w||null]))])))&&s&&o.hasField(e.fields,s)&&-1===l.indexOf(s)&&l.push(s),[2,l]}})})},t.getFetchPopupTemplate=function(e,t){return e.popupTemplate?e.popupTemplate:n.isSome(t)&&t.defaultPopupTemplateEnabled&&n.isSome(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}}.apply(null,i))||(e.exports=a)},Zruw:function(e,t,r){var i,a;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("jZlN"),r("eIBl"),r("qMld"),r("jBNx"),r("8MXS"),r("Vx27"),r("bOAX"),r("6i4F"),r("wke2"),r("yx9Y")],void 0===(a=function(e,t,r,i,a,n,o,p,s,u,l,d,c,h){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new n,t.container=new l.BitmapContainer,t}return r(t,e),t.prototype.hitTest=function(e,t){if(this.suspended)return o.resolve(null);var r=this.view.toMap(p.createScreenPoint(e,t));return o.resolve(new a({attributes:{},geometry:r}))},t.prototype.update=function(e){this.strategy.update(e),this.notifyChange("updating")},t.prototype.attach=function(){var e=this;this.strategy=new c({container:this.container,fetchSource:this.fetchImage.bind(this),requestUpdate:function(){return e.requestUpdate()}}),this._handles.add([s.watch(this,"layer.exportImageServiceParameters.version",function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e.requestUpdate())}),this.layer.on("redraw",function(){e.strategy.updateExports(function(t){var r=t.source.getContext("2d");return e.pixelData=e.layer.applyFilter(e._rawPixelData),e._drawPixelData(r,e.pixelData,0,0),null})})])},t.prototype.detach=function(){this.strategy.destroy(),this._handles.removeAll(),this.container.removeAllChildren()},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.doRefresh=function(){this.requestUpdate()},t.prototype.isUpdating=function(){return this.attached&&(this.strategy.updating||this.updateRequested)},t.prototype.fetchImage=function(e,t,r,i){var a=this;return this._exportImageVersion=this.get("layer.exportImageServiceParameters.version"),this.layer.fetchImage(e,t,r,i).then(function(e){a._rawPixelData=e.pixelData,a.pixelData=a.layer.applyFilter(a._rawPixelData);var i=document.createElement("canvas");i.width=t,i.height=r;var n=i.getContext("2d");return a._drawPixelData(n,a.pixelData,0,0),a.notifyChange("updating"),i})},t.prototype._drawPixelData=function(e,t,r,i){if(t.pixelBlock){var a=t.pixelBlock,n=e.createImageData(a.width,a.height),o=a.getAsRGBA();n.data.set(o),e.putImageData(n,r,i)}},i([u.subclass("esri.views.2d.layers.ImageryLayerView2D")],t)}(u.declared(d,h))}.apply(null,i))||(e.exports=a)},yx9Y:function(e,t,r){var i,a;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("Q2wQ"),r("HZ3d"),r("ma1f"),r("LxLY"),r("qMld"),r("Vx27"),r("IpeC"),r("7XLS"),r("I6zq")],void 0===(a=function(e,t,r,i,a,n,o,p,s,u,l,d,c){return function(e){function t(t){return e.call(this,t)||this}return r(t,e),t.prototype.fetchPopupFeatures=function(e,t){return n(this,void 0,void 0,function(){var r,i,n,u,d,h;return a(this,function(a){switch(a.label){case 0:if(r=this.layer,!e)return[2,s.reject(new o("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r}))];if(i=r.popupEnabled,n=c.getFetchPopupTemplate(r,t),!i||!p.isSome(n))throw new o("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:i,popupTemplate:n});return[4,n.getRequiredFields()];case 1:return u=a.sent(),(d=new l).geometry=e,d.outFields=u,h={rasterAttributeTableFieldPrefix:"Raster.",returnDomainValues:!0,layerView:this,popupTemplate:n},[2,r.queryVisibleRasters(d,h).then(function(e){return e})]}})})},i([u.property()],t.prototype,"layer",void 0),i([u.subclass("esri.views.layers.ImageryLayerView")],t)}(u.declared(d))}.apply(null,i))||(e.exports=a)}}]);