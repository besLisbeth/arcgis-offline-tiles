(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/layers/support/FeatureFilter":"e4th"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{e4th:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("qKT0"),r("9opi"),r("2Atf"),r("ll/V"),r("PND3"),r("TMur"),r("9gfz"),r("ycL1"),r("0+sO"),r("rg9i"),r("Vx27"),r("Lzvl"),r("IpeC")],void 0===(n=function(e,t,r,i,n,o,s,l,a,p,d,c,u,y,w){var h=new d.default({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),v=new d.default({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});return function(e){function t(t){var r=e.call(this,t)||this;return r.where=null,r.geometry=null,r.spatialRelationship="intersects",r.hiddenIds=new s.default,r.distance=void 0,r.objectIds=null,r.units=null,r.timeExtent=null,r.enabled=!1,r}var p;return i(t,e),p=t,t.prototype.writeWhere=function(e,t,r){t.where=e||"1=1"},t.prototype.enable=function(){this._set("enabled",!0)},t.prototype.createQuery=function(e){void 0===e&&(e={});var t=this,r=t.where,i=t.geometry,o=t.spatialRelationship,s=t.timeExtent,l=t.objectIds;return new w(n({geometry:c.clone(i),objectIds:c.clone(l),spatialRelationship:o,timeExtent:c.clone(s),where:r},e))},t.prototype.clone=function(){var e=this,t=e.where,r=e.geometry,i=e.spatialRelationship,n=e.hiddenIds,o=e.timeExtent,l=e.objectIds,a=new s.default;return n.forEach(function(e){return a.add(e)}),new p({geometry:c.clone(r),hiddenIds:a,objectIds:c.clone(l),spatialRelationship:i,timeExtent:c.clone(o),where:t})},r([u.property({type:String})],t.prototype,"where",void 0),r([u.writer("where")],t.prototype,"writeWhere",null),r([u.property({types:l.geometryTypes,json:{read:y.fromJSON,write:!0}})],t.prototype,"geometry",void 0),r([u.property({type:String,json:{read:{source:"spatialRel",reader:h.read},write:{target:"spatialRel",writer:h.write}}})],t.prototype,"spatialRelationship",void 0),r([u.property({json:{write:function(e,t,r){return t[r]=o.from(e)},read:function(e,t){return new s.default(e)}}})],t.prototype,"hiddenIds",void 0),r([u.property({type:Number,json:{write:{overridePolicy:function(e){return{enabled:e>0}}}}})],t.prototype,"distance",void 0),r([u.property({type:[Number],json:{write:!0}})],t.prototype,"objectIds",void 0),r([u.property({type:String,json:{read:v.read,write:{writer:v.write,overridePolicy:function(e){return{enabled:e&&this.distance>0}}}}})],t.prototype,"units",void 0),r([u.property({type:a,json:{write:!0}})],t.prototype,"timeExtent",void 0),r([u.property({readOnly:!0})],t.prototype,"enabled",void 0),p=r([u.subclass("esri.views.layers.support.FeatureFilter")],t)}(u.declared(p))}.apply(null,i))||(e.exports=n)}}]);