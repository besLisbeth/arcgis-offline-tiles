(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/StreamLayer":"QiYT","esri/views/layers/support/FeatureFilter":"e4th"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[36,95],{QiYT:function(e,t,r){var i,n;i=[r.dj.c(e.i),r("H1tY"),r("rg9i"),r("qsST"),r("qMld"),r("Z4y+"),r("N7S/"),r("Zvuv"),r("8CIp"),r("e4th")],void 0===(n=function(e,t,i,n,o,s,l,a,p,u){var c=n.getLogger("esri.layers.StreamLayer");return a.createSubclass({declaredClass:"esri.layers.StreamLayer",constructor:function(e){this._set("type","stream"),this._set("operationalLayerType","ArcGISStreamLayer"),this.outFields=["*"],"WebSocket"in window||(this.loadError=new Error("WebSocket is not supported in this browser"))},normalizeCtorArgs:function(e,t){return"string"==typeof e?i.mixin({},{url:e},t):e&&e.layerDefinition?i.mixin({},{collectionLayer:e},t):(e&&e.filter&&(e.filter=this._makeFilter({where:e.filter.where||null,geometry:e.filter.geometry||null}),delete e.geometryDefinition,delete e.definitionExpression),e)},properties:{definitionExpression:{value:null,get:function(){return this.filter.where},set:function(e){var t=this._makeFilter({where:e});this._set("filter",t),this.notifyChange("definitionExpression")}},listMode:{type:["show","hide"]},geometryDefinition:{value:null,get:function(){return this.filter.geometry},set:function(e){var t=this._makeFilter({geometry:e});this._set("filter",t),this.notifyChange("geometryDefinition")}},filter:{value:null,type:u,constructOnly:!1},maxReconnectAttempts:10,maximumTrackPoints:1,operationalLayerType:{type:["ArcGISStreamLayer"],value:"ArcGISStreamLayer"},purgeOptions:{value:{},set:function(e){var t=this._get("purgeOptions"),r={},i=!1;if(e&&"object"==typeof e&&t!==e)return e.hasOwnProperty("displayCount")&&e.displayCount>0&&(r.displayCount=e.displayCount,i=!0),e.hasOwnProperty("age")&&e.age>=0&&(r.age=e.age,i=!0),i?this._set("purgeOptions",r):void 0}},socketDirection:"subscribe",spatialReference:{value:s.WGS84,type:s,json:{origins:{service:{read:{source:"spatialReference"}}}}},type:{value:"stream",json:{read:!1}},url:{set:function(e){var t=p.sanitizeUrlWithLayerId(this,e,c);this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}}},createGraphicsSource:function(){return o.create(function(e){Promise.all([r.e(5),r.e(81)]).then(function(){var t=[r("mtZs")];e.apply(null,t)}.bind(this)).catch(r.oe)}).then(function(e){var t=new e({layer:this});return t.when(function(){return this.emit("graphics-source-create",{graphicsSource:t}),t}.bind(this))}.bind(this))},loadFromPortal:function(e){return e=i.mixin(e,{supportedTypes:["Stream Service"]}),this.inherited(arguments,[e])},updateFilter:function(e){return o.create(function(t,r){try{var i=this._makeFilter(e);this._set("filter",i),t({filter:this.filter})}catch(e){r(e)}}.bind(this))},importLayerViewModule:function(e){switch(e.type){case"2d":return o.create(function(e){Promise.all([r.e(23),r.e(92)]).then(function(){var t=[r("rLOj")];e.apply(null,t)}.bind(this)).catch(r.oe)});case"3d":return o.create(function(e){Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(43)]).then(function(){var t=[r("2vyw")];e.apply(null,t)}.bind(this)).catch(r.oe)})}},_initLayerProperties:function(e){this.source=e;var r=this.source.relatedFeaturesInfo,n=i.mixin({},e.layerDefinition,r?{objectIdField:r.joinField}:{});r&&(this.source.relatedFeaturesInfo.outFields=this.outFields?this.outFields.splice(0):null),this.read(n,{origin:"service",url:this.parsedUrl}),r&&r.outFields&&"*"!==r.outFields[0]&&(r.outFields=r.outFields.map(function(e){return e.toLowerCase()})),n._ssl&&(this.url=this.url.replace(this.reHttp,"https:")),this._verifyFields(),this.useQueryTimestamp=t("ie")||t("safari")},_makeFilter:function(e){var t;if(e){var r,i=e.hasOwnProperty("where")?e.where:this.filter.where;if(e.hasOwnProperty("geometry")){if((r=e.geometry)&&!r.hasOwnProperty("xmin"))throw new Error("Cannot set filter. Only Extent is supported for the geometry filter");r&&!r.declaredClass&&(r=new l(r))}else r=this.filter&&this.filter.geometry||null;t={where:i,geometry:r}}else t={geometry:null,where:null};return t},_readObjectIdField:function(e){if(e.objectIdField)return e.objectIdField;if(e.fields){for(var t,r=e.fields,i=0,n=r.length;i<n;i++){var o=r[i];if("esriFieldTypeOID"===o.type){t=o.name;break}}if(!t){var s=1,l=[];if(r.forEach(function(e){"objectid"===e.name.split("_")[0]&&l.push(e.name)}),l.length)for(;-1!==l.indexOf("objectid_"+s);)s+=1;t="objectid_"+s}return t}},_verifyFields:function(){}})}.apply(null,i))||(e.exports=n)},e4th:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("qKT0"),r("9opi"),r("2Atf"),r("ll/V"),r("PND3"),r("TMur"),r("9gfz"),r("ycL1"),r("0+sO"),r("rg9i"),r("Vx27"),r("Lzvl"),r("IpeC")],void 0===(n=function(e,t,r,i,n,o,s,l,a,p,u,c,d,h,y){var f=new u.default({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),m=new u.default({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});return function(e){function t(t){var r=e.call(this,t)||this;return r.where=null,r.geometry=null,r.spatialRelationship="intersects",r.hiddenIds=new s.default,r.distance=void 0,r.objectIds=null,r.units=null,r.timeExtent=null,r.enabled=!1,r}var p;return i(t,e),p=t,t.prototype.writeWhere=function(e,t,r){t.where=e||"1=1"},t.prototype.enable=function(){this._set("enabled",!0)},t.prototype.createQuery=function(e){void 0===e&&(e={});var t=this,r=t.where,i=t.geometry,o=t.spatialRelationship,s=t.timeExtent,l=t.objectIds;return new y(n({geometry:c.clone(i),objectIds:c.clone(l),spatialRelationship:o,timeExtent:c.clone(s),where:r},e))},t.prototype.clone=function(){var e=this,t=e.where,r=e.geometry,i=e.spatialRelationship,n=e.hiddenIds,o=e.timeExtent,l=e.objectIds,a=new s.default;return n.forEach(function(e){return a.add(e)}),new p({geometry:c.clone(r),hiddenIds:a,objectIds:c.clone(l),spatialRelationship:i,timeExtent:c.clone(o),where:t})},r([d.property({type:String})],t.prototype,"where",void 0),r([d.writer("where")],t.prototype,"writeWhere",null),r([d.property({types:l.geometryTypes,json:{read:h.fromJSON,write:!0}})],t.prototype,"geometry",void 0),r([d.property({type:String,json:{read:{source:"spatialRel",reader:f.read},write:{target:"spatialRel",writer:f.write}}})],t.prototype,"spatialRelationship",void 0),r([d.property({json:{write:function(e,t,r){return t[r]=o.from(e)},read:function(e,t){return new s.default(e)}}})],t.prototype,"hiddenIds",void 0),r([d.property({type:Number,json:{write:{overridePolicy:function(e){return{enabled:e>0}}}}})],t.prototype,"distance",void 0),r([d.property({type:[Number],json:{write:!0}})],t.prototype,"objectIds",void 0),r([d.property({type:String,json:{read:m.read,write:{writer:m.write,overridePolicy:function(e){return{enabled:e&&this.distance>0}}}}})],t.prototype,"units",void 0),r([d.property({type:a,json:{write:!0}})],t.prototype,"timeExtent",void 0),r([d.property({readOnly:!0})],t.prototype,"enabled",void 0),p=r([d.subclass("esri.views.layers.support.FeatureFilter")],t)}(d.declared(p))}.apply(null,i))||(e.exports=n)}}]);