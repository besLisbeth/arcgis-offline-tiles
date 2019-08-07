(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/graphics/sources/support/clientSideDefaults":"DaHD","esri/layers/graphics/sources/support/CSVSourceWorker":"P0Wv","dstore/Csv":"oigr","esri/geometry/support/quantizationUtils":"u90+"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{DaHD:function(e,t,n){var i,r;i=[n.dj.c(e.i),t,n("2Atf"),n("H1tY"),n("rg9i")],void 0===(r=function(e,t,n,i,r){Object.defineProperty(t,"__esModule",{value:!0});var a={type:"esriSMS",style:"esriSMSCircle",size:6,color:[252,146,31,255],outline:{width:.75,color:[153,153,153,255]}},o={type:"esriSLS",style:"esriSLSSolid",width:1,color:[252,146,31,255]},l={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{width:.75,color:[255,255,255,191]}};t.createDrawingInfo=function(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?a:"esriGeometryPolyline"===e?o:l}}},t.createDefaultAttributesFunction=function(e,t){if(i("csp-restrictions"))return function(){var i;return n(((i={})[t]=null,i),e)};try{var r="this."+t+" = null;";for(var a in e)r+="this."+a+" = "+JSON.stringify(e[a])+";";var o=new Function(r);return function(){return new o}}catch(i){return function(){var i;return n(((i={})[t]=null,i),e)}}},t.createDefaultTemplate=function(e){return void 0===e&&(e={}),[{name:"New Feature",description:"",prototype:{attributes:r.clone(e)}}]}}.apply(null,i))||(e.exports=r)},P0Wv:function(e,t,n){var i,r;i=[n.dj.c(e.i),t,n("Q2wQ"),n("PND3"),n("Xfn2"),n("oigr"),n("TMur"),n("zp6E"),n("ma1f"),n("H1tY"),n("rg9i"),n("qMld"),n("jfWY"),n("wIC5"),n("nrlZ"),n("vtMp"),n("/COu"),n("Jvs9"),n("rfv1"),n("Q2Em"),n("ZooB"),n("DaHD")],void 0===(r=function(e,t,n,i,r,a,o,l,u,s,d,f,c,p,m,y,h,g,v,x,F,N){Object.defineProperty(t,"__esModule",{value:!0});var I=N.createDrawingInfo("esriGeometryPoint"),_=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong"];t.csvLatitudeFieldNames=["lat","latitude","y","ycenter","latitude83","latdecdeg","point-y"],t.csvLongitudeFieldNames=["lon","lng","long","longitude","x","xcenter","longitude83","longdecdeg","point-x"],t.csvDetectedDelimiters=[","," ",";","|","\t"];var w=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,b=[0,0],T=function(e,t){this.x=e,this.y=t},D=function(){var e=r._parseInfo(),t=new RegExp("^"+e.regexp+"$"),n=new RegExp("["+e.group+"\\s\\xa0]","g"),i=e.factor;return function(r){var a=t.exec(r);if(e.factor=i,!a)return NaN;var o=a[1];if(!a[1]){if(!a[2])return NaN;o=a[2],e.factor*=-1}return+(o=o.replace(n,"").replace(e.decimal,"."))*e.factor}}(),E="isInteger"in Number?Number.isInteger:function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},S=function(){function e(){this._fieldsMap=new Map,this._queryEngine=null}return e.prototype.destroy=function(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=null},e.prototype.load=function(e){var t=this;return f.all([this._fetch(e.url),this._checkProjection(e&&e.parsing&&e.parsing.spatialReference)]).then(function(n){var i=n[0],r=t._parse(i,e.parsing);if(t._queryEngine=t._createQueryEngine(i,r),r.layerDefinition.extent=t._queryEngine.fullExtent,r.layerDefinition.timeInfo){var a=t._queryEngine.timeExtent,o=a.start,l=a.end;r.layerDefinition.timeInfo.timeExtent=[o,l]}return r})},e.prototype.applyEdits=function(e){return f.reject(new u("csv-source:editing-not-supported","applyEdits() is not supported on CSVLayer"))},e.prototype.queryFeatures=function(e){return void 0===e&&(e={}),this._queryEngine.executeQuery(e)},e.prototype.queryFeatureCount=function(e){return void 0===e&&(e={}),this._queryEngine.executeQueryForCount(e)},e.prototype.queryObjectIds=function(e){return void 0===e&&(e={}),this._queryEngine.executeQueryForIds(e)},e.prototype.queryExtent=function(e){return void 0===e&&(e={}),this._queryEngine.executeQueryForExtent(e)},e.prototype._fetch=function(e){if(!e)return f.reject(new u("csv-source:invalid-source","url not defined"));var t=c.urlToObject(e);return l(t.path,{query:t.query,responseType:"text"}).then(function(e){return e.data})},e.prototype._parse=function(e,t){void 0===t&&(t={});for(var n={columnDelimiter:t.columnDelimiter,layerDefinition:null,locationInfo:{latitudeFieldName:t.latitudeField,longitudeFieldName:t.longitudeField}};e&&"\n"===e[0];)e=e.slice(1);"\n"!==e[e.length-1]&&(e+="\n");var i=this._readFirstLine(e);if(!i)throw new u("csv","CSV is empty",{csv:e});if(!t.columnDelimiter){var r=this._inferDelimiter(i);if(!r)throw new u("csv-source:invalid-delimiter","Unable to detect the delimiter from CSV");n.columnDelimiter=r}var a=i.split(n.columnDelimiter),o=n.layerDefinition={name:"csv",drawingInfo:I,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:t.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:t.spatialReference||{wkid:102100}}};if(!t.latitudeField||!t.longitudeField){var l=this._inferLocationInfo(a);if(!t.longitudeField&&!l.longitudeFieldName||!t.latitudeField&&!l.latitudeFieldName)throw new u("csv","Unable to identify latitudeField and/or longitudeField from CSV");n.locationInfo={longitudeFieldName:t.longitudeField||l.longitudeFieldName,latitudeFieldName:t.latitudeField||l.latitudeFieldName}}var s=this._inferFields(e,n.columnDelimiter,a,n.locationInfo);if(t.fields&&t.fields.length){for(var f=new Map,c=0,p=t.fields;c<p.length;c++){var m=p[c];f.set(m.name.toLowerCase(),m)}for(var y=0,h=s;y<h.length;y++){m=h[y];var g=f.get(m.name.toLowerCase());if(g){var v=m.name;d.mixin(m,g),m.name=v}this._fieldsMap.set(m.name.trim(),m),this._fieldsMap.set(m.name.trim().toLowerCase(),m)}}if(o.fields=s,!o.fields.some(function(e){return"esriFieldTypeOID"===e.type&&(o.objectIdField=e.name,!0)})){m={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};o.objectIdField=m.name,o.fields.unshift(m),this._fieldsMap.set(m.name,m),this._fieldsMap.set(m.name.toLowerCase(),m)}if(o.timeInfo){var x=o.timeInfo;if(x.startTimeField){var F=this._fieldsMap.get(x.startTimeField.toLowerCase());F?(x.startTimeField=F.name,F.type="esriFieldTypeDate"):x.startTimeField=null}if(x.endTimeField){var N=this._fieldsMap.get(x.endTimeField.toLowerCase());N?(x.endTimeField=N.name,N.type="esriFieldTypeDate"):x.endTimeField=null}if(x.trackIdField){var _=this._fieldsMap.get(x.trackIdField.toLowerCase());x.trackIdField=_?_.name:null}x.startTimeField||x.endTimeField||(o.timeInfo=null)}return n},e.prototype._inferLocationInfo=function(e){var n=null,i=null;return e.forEach(function(e){var r=e.toLowerCase();-1===t.csvLatitudeFieldNames.indexOf(r)||i||(i=e),-1===t.csvLongitudeFieldNames.indexOf(r)||n||(n=e)}),{longitudeFieldName:n,latitudeFieldName:i}},e.prototype._inferFields=function(e,t,n,i){for(var r=[],a=this._sampleLines(e).map(function(e){return e.split(t).map(function(e){return e.trim()})}),o=this,l=0;l<n.length;l++)!function(e){var t=n[e];if(t===i.longitudeFieldName||t===i.latitudeFieldName)r.push({name:t,type:"esriFieldTypeDouble",alias:t});else{var l=a.map(function(t){return t[e]}),u=o._inferFieldType(l),s={name:t.replace(/[\s\'’‘\.\-\/\(\)]+/g,"_"),type:null,alias:t};switch(u){case"integer":s.type="esriFieldTypeInteger";break;case"double":s.type="esriFieldTypeDouble";break;case"date":s.type="esriFieldTypeDate",s.length=36;break;default:s.type="esriFieldTypeString",s.length=255}r.push(s)}}(l);return r},e.prototype._inferFieldType=function(e){var t=this;if(!e.length)return"string";var n=/[^+-.,0-9]/;return e.map(function(e){var i=!1;if(""===e||n.test(e))i=!0;else{var r=D(e);if(!isNaN(r))return/[.,]/.test(e)?"double":!E(r)||r>214783647||r<-214783648?"double":"integer";if(-1===e.indexOf("E"))i=!0;else{if(r=Number(e),!isNaN(r))return"double";if(-1===e.indexOf(","))i=!0;else{if(e=e.replace(",","."),r=Number(e),!isNaN(r))return"double";i=!0}}}if(i){if(!/^[-]?\d*[.,]?\d*$/.test(e)){var a=new Date(e);return t._isValidDate(a,e)?"date":"string"}return"string"}return"string"}).reduce(function(e,t){return e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0})},e.prototype._isValidDate=function(e,t){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return!1;var n=!0;if(s("chrome")&&/\d+\W*$/.test(t)){var i=t.match(/[a-zA-Z]{2,}/);if(i){for(var r=!1,a=0;!r&&a<=i.length;)r=!w.test(i[a]),a++;n=!r}}return n},e.prototype._readFirstLine=function(e){return e.substring(0,e.indexOf("\n")).trim()},e.prototype._sampleLines=function(e,t){void 0===t&&(t=10);for(var n=!1,i=[],r=e.indexOf("\n")+1;!n&&i.length<t;){var a=e.indexOf("\n",r);if(-1!==a){var o;(o=-1===a&&r<e.length-1?e.substring(r).trim():e.substring(r,a).trim())&&i.push(o),r=a+1}else n=!0}return i},e.prototype._inferDelimiter=function(e){var n=0,i="";return t.csvDetectedDelimiters.forEach(function(t){var r=e.split(t).length;r>n&&(n=r,i=t)}),""===i?null:i},e.prototype._createQueryEngine=function(e,t){for(var n,r=t.locationInfo,l=r.latitudeFieldName,u=r.longitudeFieldName,s=t.layerDefinition,d=s.objectIdField,f=s.fields,c=s.extent,x=s.timeInfo,N=[],I=[],w=new i.Set,E=new i.Set,S=[],M=0,P=f;M<P.length;M++){var q=P[M],z=q.name,C=q.type;"esriFieldTypeDate"===C?w.add(z):_.indexOf(C)>-1&&E.add(z),z!==d&&S.push(z)}var O=new a;O.delimiter=t.columnDelimiter,O.fieldNames=S,O.newline="\n";var j=O.parse(e),L=0;j.shift();for(var V=0,A=j;V<A.length;V++){var Q=A[V],k=this._parseCoordinateValue(Q[l]),G=this._parseCoordinateValue(Q[u]);if(null!=G&&null!=k&&!isNaN(k)&&!isNaN(G)){for(var Y in Q[l]=k,Q[u]=G,Q)if(Y!==l&&Y!==u)if(w.has(Y)){var R=new Date(Q[Y]);Q[Y]=this._isValidDate(R,Q[Y])?R.getTime():null}else if(E.has(Y)){var B=D(Q[Y]);isNaN(B)?Q[Y]=null:Q[Y]=B}Q[d]=L,L++,N.push(new T(G,k)),I.push(Q)}}if(!m.equals({wkid:4326},c.spatialReference))if(m.isWebMercator(c.spatialReference))for(var W=0,J=N;W<J.length;W++){var H=J[W];n=y.lngLatToXY(H.x,H.y,b),H.x=n[0],H.y=n[1]}else N=p.projectMany(N,o.SpatialReference.WGS84,c.spatialReference,null,!0);for(var Z=new v.default({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1}),$=new F.default({fields:t.layerDefinition.fields,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:x,objectIdField:d,spatialReference:c.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:Z}),X=[],U=0;U<N.length;U++){var K=N[U],ee=K.x,te=K.y,ne=I[U];ne[d]=U+1,X.push(new h.default(new g.default([],[ee,te]),ne,null,ne[d]))}return Z.addMany(X),$},e.prototype._parseCoordinateValue=function(e){if(null==e||""===e)return null;var t=D(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t},e.prototype._checkProjection=function(e){return x.checkProjectionSupport(m.WGS84,e).catch(function(){throw new u("csv-layer","Projection not supported")})},e}();t.default=S}.apply(null,i))||(e.exports=r)},oigr:function(e,t,n){var i,r;i=[n("G/ag"),n("ajsq")],void 0===(r=function(e,t){var n=/^\s*"([\S\s]*)"\s*$/,i=/""/g,r=/"/g;function a(e,t){var n,i={},r=e.length;for(n=0;n<r;n++)i[e[n]]=t[n];return i}return t(null,{fieldNames:null,delimiter:",",newline:"\r\n",trim:!1,parse:function(t){var r,o,l,u,s,d,f,c,p=[],m=t.split(this.newline),y=this.fieldNames,h=0,g=[],v="",x="";e:for(d=0,l=m.length;d<l;d++)if(e.trim(m[d])){for(f=0,u=(r=m[d].split(this.delimiter)).length;f<u;f++){for(c=-1,v+=x+(o=r[f]),x="";(c=o.indexOf('"',c+1))>=0;)h++;if(h%2==0){if(h>0){if(!(s=n.exec(v))){g=[],v="",h=0;continue e}g.push(s[1].replace(i,'"'))}else g.push(this.trim||!y?e.trim(v):v);v="",h=0}else x=this.delimiter}0===h?(y?p.push(a(y,g)):y=this.fieldNames=g,g=[]):x=this.newline}return p},toCsv:function(e){return this.stringify(this.data,e)},stringify:function(e,t){var n,i,a,o=(t=t||{}).alwaysQuote,l=this.fieldNames,u=this.delimiter,s=this.newline,d="";for(n=-1;n<e.length;n++)for(n>-1&&(d+=s),i=0;i<l.length;i++)null==(a=n<0?l[i]:e[n][l[i]])&&(a=""),"string"!=typeof a&&(a=a.toString()),d+=(i>0?u:"")+(o||a.indexOf('"')>=0||a.indexOf(u)>=0?'"'+a.replace(r,'""')+'"':a);return t.trailingNewline&&(d+=s),d}})}.apply(null,i))||(e.exports=r)},"u90+":function(e,t,n){var i,r;i=[n.dj.c(e.i),t,n("Lzvl")],void 0===(r=function(e,t,n){function i(e){return e&&"upperLeft"===e.originPosition}function r(e,t){var n=e.scale,i=e.translate;return Math.round((t-i[0])/n[0])}function a(e,t){var n=e.scale,i=e.translate;return Math.round((i[1]-t)/n[1])}function o(e,t,n){for(var i,o,l,u,s=[],d=0;d<n.length;d++){var f=n[d];d>0?(l=r(e,f[0]),u=a(e,f[1]),l===i&&u===o||(s.push(t(f,l-i,u-o)),i=l,o=u)):(i=r(e,f[0]),o=a(e,f[1]),s.push(t(f,i,o)))}return s.length>0?s:null}function l(e,t,n,i){return o(e,n?i?T:b:i?b:w,t)}function u(e,t,n,i){for(var r=[],a=n?i?T:b:i?b:w,l=0;l<t.length;l++){var u=o(e,a,t[l]);u&&u.length>=3&&r.push(u)}return r.length?r:null}function s(e,t,n,i){for(var r=[],a=n?i?T:b:i?b:w,l=0;l<t.length;l++){var u=o(e,a,t[l]);u&&u.length>=2&&r.push(u)}return r.length?r:null}function d(e,t){var n=e.scale,i=e.translate;return t*n[0]+i[0]}function f(e,t){var n=e.scale;return e.translate[1]-t*n[1]}function c(e,t,n){var i=new Array(n.length);if(!n.length)return i;var r=e.scale,a=r[0],o=r[1],l=d(e,n[0][0]),u=f(e,n[0][1]);i[0]=t(n[0],l,u);for(var s=1;s<n.length;s++){var c=n[s];l+=c[0]*a,u-=c[1]*o,i[s]=t(c,l,u)}return i}function p(e,t,n){for(var i=new Array(n.length),r=0;r<n.length;r++)i[r]=c(e,t,n[r]);return i}function m(e,t,n,i){return c(e,n?i?T:b:i?b:w,t)}function y(e,t,n,i){return p(e,n?i?T:b:i?b:w,t)}function h(e,t,n,i){return p(e,n?i?T:b:i?b:w,t)}function g(e,t,n){for(var i=n[0],r=i[0],a=i[1],o=Math.min(r,t[0]),l=Math.min(a,t[1]),u=Math.max(r,t[2]),s=Math.max(a,t[3]),d=1;d<n.length;d++){var f=n[d],c=f[0],p=f[1];r+=c,a+=p,c<0&&(o=Math.min(o,r)),c>0&&(u=Math.max(u,r)),p<0?l=Math.min(l,a):p>0&&(s=Math.max(s,a))}return e[0]=o,e[1]=l,e[2]=u,e[3]=s,e}function v(e,t){if(!t.length)return null;e[0]=e[1]=Number.POSITIVE_INFINITY,e[2]=e[3]=Number.NEGATIVE_INFINITY;for(var n=0;n<t.length;n++)g(e,e,t[n]);return e}function x(e,t,n,i,o){return t.xmin=r(e,n.xmin),t.ymin=a(e,n.ymin),t.xmax=r(e,n.xmax),t.ymax=a(e,n.ymax),t!==n&&(i&&(t.zmin=n.zmin,t.zmax=n.zmax),o&&(t.mmin=n.mmin,t.mmax=n.mmax)),t}function F(e,t,n,i,r){return t.points=l(e,n.points,i,r),t}function N(e,t,n,i,o){return t.x=r(e,n.x),t.y=a(e,n.y),t!==n&&(i&&(t.z=n.z),o&&(t.m=n.m)),t}function I(e,t,n,i,r){var a=u(e,n.rings,i,r);return a?(t.rings=a,t):null}function _(e,t,n,i,r){var a=s(e,n.paths,i,r);return a?(t.paths=a,t):null}Object.defineProperty(t,"__esModule",{value:!0});var w=function(e,t,n){return[t,n]},b=function(e,t,n){return[t,n,e[2]]},T=function(e,t,n){return[t,n,e[2],e[3]]};t.toQuantizationTransform=function(e){return e?{originPosition:"upperLeft",scale:[e.tolerance,e.tolerance],translate:[e.extent.xmin,e.extent.ymax]}:null},t.equals=function(e,t){return e===t||null==e&&null==t||null!=e&&null!=t&&(i(e)?(n=e.translate[0],r=e.translate[1],a=e.scale[0]):(n=e.extent.xmin,r=e.extent.ymax,a=e.tolerance),i(t)?(o=t.translate[0],l=t.translate[1],u=t.scale[0]):(o=t.extent.xmin,l=t.extent.ymax,u=t.tolerance),n===o&&r===l&&a===u);var n,r,a,o,l,u},t.quantizeX=r,t.quantizeY=a,t.quantizeBounds=function(e,t,n){return t[0]=r(e,n[0]),t[3]=a(e,n[1]),t[2]=r(e,n[2]),t[1]=a(e,n[3]),t},t.quantizePoints=l,t.quantizeRings=u,t.quantizePaths=s,t.hydrateX=d,t.hydrateY=f,t.hydrateCoordsArray=c,t.hydrateCoordsArrayArray=p,t.hydrateBounds=function(e,t,n){return n?(t[0]=d(e,n[0]),t[1]=f(e,n[3]),t[2]=d(e,n[2]),t[3]=f(e,n[1]),t):[d(e,t[0]),f(e,t[3]),d(e,t[2]),f(e,t[1])]},t.hydratePoints=m,t.hydratePaths=y,t.hydrateRings=h,t.getQuantizedBoundsCoordsArray=g,t.getQuantizedBoundsCoordsArrayArray=v,t.getQuantizedBoundsPoints=function(e){var t=[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY];return g(t,t,e)},t.getQuantizedBoundsPaths=function(e){return v([0,0,0,0],e)},t.getQuantizedBoundsRings=function(e){return v([0,0,0,0],e)},t.quantizeExtent=x,t.quantizeMultipoint=F,t.quantizePoint=N,t.quantizePolygon=I,t.quantizePolyline=_,t.quantizeGeometry=function(e,t){return e&&t?n.isPoint(t)?N(e,{},t,!1,!1):n.isPolyline(t)?_(e,{},t,!1,!1):n.isPolygon(t)?I(e,{},t,!1,!1):n.isMultipoint(t)?F(e,{},t,!1,!1):n.isExtent(t)?x(e,{},t,!1,!1):null:null},t.hydrateExtent=function(e,t,n,i,r){return t.xmin=d(e,n.xmin),t.ymin=f(e,n.ymin),t.xmax=d(e,n.xmax),t.ymax=f(e,n.ymax),t!==n&&(i&&(t.zmin=n.zmin,t.zmax=n.zmax),r&&(t.mmin=n.mmin,t.mmax=n.mmax)),t},t.hydrateMultipoint=function(e,t,n,i,r){return t.points=m(e,n.points,i,r),t},t.hydratePoint=function(e,t,n,i,r){return t.x=d(e,n.x),t.y=f(e,n.y),t!==n&&(i&&(t.z=n.z),r&&(t.m=n.m)),t},t.hydratePolygon=function(e,t,n,i,r){return t.rings=h(e,n.rings,i,r),t},t.hydratePolyline=function(e,t,n,i,r){return t.paths=y(e,n.paths,i,r),t}}.apply(null,i))||(e.exports=r)}}]);