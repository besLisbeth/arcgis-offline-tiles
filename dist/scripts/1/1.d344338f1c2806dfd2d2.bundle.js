(function(){(this||window).webpackJsonp.registerAbsMids({"esri/core/HandleOwner":"7MDj","esri/core/libs/gl-matrix-2/factories/mat4f32":"7Yqx","esri/views/webgl/lib/glsl-tokenizer/lib/builtins":"9E9H","esri/views/webgl/lib/glsl-tokenizer/lib/operators":"CJs7","esri/views/webgl/Program":"G0ER","esri/views/webgl/lib/glsl-tokenizer/lib/literals":"Gc7o","esri/views/webgl/lib/glsl-tokenizer/string":"HXXw","esri/views/webgl/ShaderCompiler":"IROT","esri/views/webgl/Util":"Kfys","esri/views/webgl/BufferObject":"QFi0","esri/views/webgl/programUtils":"U+8K","esri/views/webgl/lib/glsl-tokenizer/index":"Ysiz","esri/views/webgl/ShaderTranspiler":"Zn9k","esri/core/libs/gl-matrix-2/factories/vec3f32":"iHt0","esri/core/libs/gl-matrix-2/mat4f32":"oZZu","esri/views/webgl/reservedWordsGLSL3":"tOQU","esri/core/libs/gl-matrix-2/vec3f32":"vlC2","esri/views/webgl/VertexArrayObject":"z2+Q"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"7MDj":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("Gtr7"),r("eIBl"),r("Vx27")],void 0===(n=function(e,t,r,i,n,o,a){return function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i=e.call(this)||this;return i.handles=new o,i}return r(t,e),t.prototype.destroy=function(){this.handles.destroy()},i([a.property({readOnly:!0})],t.prototype,"handles",void 0),i([a.subclass("esri.core.HandleOwner")],t)}(a.declared(n))}.apply(null,i))||(e.exports=n)},"7Yqx":function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.create=function(){var e=new Float32Array(16);return e[0]=1,e[5]=1,e[10]=1,e[15]=1,e},t.clone=function(e){var t=new Float32Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},t.fromValues=function(e,t,r,i,n,o,a,s,l,u,f,c,d,h,p,g){var m=new Float32Array(16);return m[0]=e,m[1]=t,m[2]=r,m[3]=i,m[4]=n,m[5]=o,m[6]=a,m[7]=s,m[8]=l,m[9]=u,m[10]=f,m[11]=c,m[12]=d,m[13]=h,m[14]=p,m[15]=g,m},t.createView=function(e,t){return new Float32Array(e,t,16)}}.apply(null,i))||(e.exports=n)},"9E9H":function(e,t,r){var i;void 0===(i=function(){"use strict";return["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"]}.apply(null,[]))||(e.exports=i)},CJs7:function(e,t,r){var i;void 0===(i=function(){return["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"]}.apply(null,[]))||(e.exports=i)},G0ER:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("H1tY"),r("Zn9k")],void 0===(n=function(e,t,r,i){var n=r("dojo-debug-messages");return function(){function e(t,i,n,o,a){if(void 0===a&&(a={}),this._context=null,this._glName=null,this._locations={},this._id=void 0,this._initialized=!1,this._vShader=null,this._fShader=null,this._defines={},this._nameToUniformLocation={},this._nameToAttribLocation={},this._nameToUniform1={},this._nameToUniform1v={},this._nameToUniform2={},this._nameToUniform3={},this._nameToUniform4={},this._nameToUniformMatrix3={},this._nameToUniformMatrix4={},i.length,this._context=t,this._vertexShaderSource=i,this._fragmentShaderSource=n,Array.isArray(a))for(var s=0,l=a;s<l.length;s++){var u=l[s];this._defines[u]="1"}else this._defines=a;this._id=e._nextId++,this._locations=o,r("esri-webgl-debug")&&t.instanceCounter.incrementCount(3)}return Object.defineProperty(e.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"glName",{get:function(){return this._glName},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"locations",{get:function(){return this._locations},enumerable:!0,configurable:!0}),e.prototype.getDefine=function(e){return this._defines[e]},e.prototype.dispose=function(){if(this._context){var e=this._context.gl;if(this._vShader){var t=this._vShader;e.deleteShader(t),this._vShader=null}if(this._fShader){var i=this._fShader;e.deleteShader(i),this._fShader=null}this._glName&&(e.deleteProgram(this._glName),this._glName=null),r("esri-webgl-debug")&&this._context.instanceCounter.decrementCount(3),this._context=null}},e.prototype.initialize=function(){if(!this._initialized){this._vShader=this._loadShader(35633),this._fShader=this._loadShader(35632),this._vShader&&this._fShader;var e=this._context.gl,t=e.createProgram();for(var r in e.attachShader(t,this._vShader),e.attachShader(t,this._fShader),this._locations){var i=this._locations[r];e.bindAttribLocation(t,i,r)}e.linkProgram(t),e.getProgramParameter(t,e.LINK_STATUS),this._glName=t,this._initialized=!0}},e.prototype.getUniformLocation=function(e){return this.initialize(),void 0===this._nameToUniformLocation[e]&&(this._nameToUniformLocation[e]=this._context.gl.getUniformLocation(this._glName,e)),this._nameToUniformLocation[e]},e.prototype.hasUniform=function(e){return null!==this.getUniformLocation(e)},e.prototype.getAttribLocation=function(e){return this.initialize(),void 0===this._nameToAttribLocation[e]&&(this._nameToAttribLocation[e]=this._context.gl.getAttribLocation(this._glName,e)),this._nameToAttribLocation[e]},e.prototype.setUniform1i=function(e,t){var r=this._nameToUniform1[e];void 0!==r&&t===r||(this._context.bindProgram(this),this._context.gl.uniform1i(this.getUniformLocation(e),t),this._nameToUniform1[e]=t)},e.prototype.setUniform1iv=function(t,r){var i=this._nameToUniform1v[t];void 0!==i&&e._arraysEqual(r,i)||(this._context.bindProgram(this),this._context.gl.uniform1iv(this.getUniformLocation(t),r),void 0===i?this._nameToUniform1v[t]=e._arrayCopy(r):e._arrayAssign(r,i))},e.prototype.setUniform1f=function(e,t){var r=this._nameToUniform1[e];void 0!==r&&t===r||(this._context.bindProgram(this),this._context.gl.uniform1f(this.getUniformLocation(e),t),this._nameToUniform1[e]=t)},e.prototype.setUniform1fv=function(t,r){var i=this._nameToUniform1v[t];void 0!==i&&e._arraysEqual(r,i)||(this._context.bindProgram(this),this._context.gl.uniform1fv(this.getUniformLocation(t),r),void 0===i?this._nameToUniform1v[t]=e._arrayCopy(r):e._arrayAssign(r,i))},e.prototype.setUniform2f=function(e,t,r){var i=this._nameToUniform2[e];void 0!==i&&t===i[0]&&r===i[1]||(this._context.bindProgram(this),this._context.gl.uniform2f(this.getUniformLocation(e),t,r),void 0===i?this._nameToUniform2[e]=[t,r]:(i[0]=t,i[1]=r))},e.prototype.setUniform2fv=function(t,r){n&&r.length;var i=this._nameToUniform2[t];void 0!==i&&e._arraysEqual(r,i)||(this._context.bindProgram(this),this._context.gl.uniform2fv(this.getUniformLocation(t),r),void 0===i?this._nameToUniform2[t]=e._arrayCopy(r):e._arrayAssign(r,i))},e.prototype.setUniform3f=function(e,t,r,i){var n=this._nameToUniform3[e];void 0!==n&&t===n[0]&&r===n[1]&&i===n[2]||(this._context.bindProgram(this),this._context.gl.uniform3f(this.getUniformLocation(e),t,r,i),void 0===n?this._nameToUniform3[e]=[t,r,i]:(n[0]=t,n[1]=r,n[2]=i))},e.prototype.setUniform3fv=function(t,r){n&&r.length;var i=this._nameToUniform3[t];void 0!==i&&e._arraysEqual(r,i)||(this._context.bindProgram(this),this._context.gl.uniform3fv(this.getUniformLocation(t),r),void 0===i?this._nameToUniform3[t]=e._arrayCopy(r):e._arrayAssign(r,i))},e.prototype.setUniform4f=function(e,t,r,i,n){var o=this._nameToUniform4[e];void 0!==o&&t===o[0]&&r===o[1]&&i===o[2]&&n===o[3]||(this._context.bindProgram(this),this._context.gl.uniform4f(this.getUniformLocation(e),t,r,i,n),void 0===o?this._nameToUniform4[e]=[t,r,i,n]:(o[0]=t,o[1]=r,o[2]=i,o[3]=n))},e.prototype.setUniform4fv=function(t,r){n&&r.length;var i=this._nameToUniform4[t];void 0!==i&&e._arraysEqual(r,i)||(this._context.bindProgram(this),this._context.gl.uniform4fv(this.getUniformLocation(t),r),void 0===i?this._nameToUniform4[t]=e._arrayCopy(r):e._arrayAssign(r,i))},e.prototype.setUniformMatrix3fv=function(t,r,i){void 0===i&&(i=!1),n&&r.length;var o=this._nameToUniformMatrix3[t];void 0!==o&&(9===o.length?e._matrix3Equal(o,r):e._arraysEqual(r,o))||(this._context.bindProgram(this),this._context.gl.uniformMatrix3fv(this.getUniformLocation(t),i,r),void 0===o?this._nameToUniformMatrix3[t]=e._arrayCopy(r):e._arrayAssign(r,o))},e.prototype.setUniformMatrix4fv=function(t,r,i){void 0===i&&(i=!1),n&&r.length;var o=this._nameToUniformMatrix4[t];void 0!==o&&(16===o.length?e._matrix4Equal(o,r):e._arraysEqual(r,o))||(this._context.bindProgram(this),this._context.gl.uniformMatrix4fv(this.getUniformLocation(t),i,r),void 0===o?this._nameToUniformMatrix4[t]=e._arrayCopy(r):e._arrayAssign(r,o))},e._padToThree=function(e){var t=e.toString();return e<1e3&&(t=("  "+e).slice(-3)),t},e.prototype._addLineNumbers=function(t){var r=2;return t.replace(/\n/g,function(){return"\n"+e._padToThree(r++)+":"})},e.prototype._loadShader=function(e){var t=35633===e,r=t?this._vertexShaderSource:this._fragmentShaderSource,n="";for(var o in this._defines)n+="#define "+o+" "+this._defines[o]+"\n";r=n+r,"webgl2"===this._context.contextVersion&&(r=i.transpileShader(r,t?"vertex":"fragment"));var a=this._context.gl,s=a.createShader(e);return a.shaderSource(s,r),a.compileShader(s),a.getShaderParameter(s,a.COMPILE_STATUS)||this._context.contextVersion,s},e._matrix4Equal=function(e,t){return n&&(16===e.length&&t.length),e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]&&e[11]===t[11]&&e[12]===t[12]&&e[13]===t[13]&&e[14]===t[14]&&e[15]===t[15]},e._matrix3Equal=function(e,t){return n&&(9===e.length&&t.length),e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]},e._arraysEqual=function(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;++r)if(e[r]!==t[r])return!1;return!0},e._arrayCopy=function(e){for(var t=[],r=0;r<e.length;++r)t.push(e[r]);return t},e._arrayAssign=function(e,t){for(var r=0;r<e.length;++r)t[r]=e[r]},e._nextId=0,e}()}.apply(null,i))||(e.exports=n)},Gc7o:function(e,t,r){var i;void 0===(i=function(){"use strict";return["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"]}.apply(null,[]))||(e.exports=i)},HXXw:function(e,t,r){var i,n;i=[r("Ysiz")],void 0===(n=function(e){return function(t){var r=e(),i=[];return(i=i.concat(r(t))).concat(r(null))}}.apply(null,i))||(e.exports=n)},IROT:function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=function(e,t){return function(){function e(e){this.readFile=e}return e.prototype.resolveIncludes=function(e){return this.resolve(e)},e.prototype.resolve=function(e,t){var r=this;if(void 0===t&&(t=new Map),t.has(e))return t.get(e);var i=this.read(e);if(!i)throw new Error("cannot find shader file "+e);for(var n=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm,o=n.exec(i),a=[];null!=o;)a.push({path:o[1],start:o.index,length:o[0].length}),o=n.exec(i);var s=0,l="";return a.forEach(function(e){l+=i.slice(s,e.start),l+=t.has(e.path)?"":r.resolve(e.path,t),s=e.start+e.length}),l+=i.slice(s),t.set(e,l),l},e.prototype.read=function(e){return this.readFile(e)},e}()}.apply(null,i))||(e.exports=n)},Kfys:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("2Atf"),r("pcDC"),r("ma1f")],void 0===(n=function(e,t,r,i,n){function o(e){return e[0].stride}function a(e){switch(e){case 5126:case 5124:case 5125:return 4;case 5122:case 5123:return 2;case 5120:case 5121:return 1;default:throw new Error("Unknown data type")}}function s(e){switch(e){case 6406:case 6409:return 1;case 6410:return 2;case 6407:return 3;case 6408:case 34041:return 4;case 33325:return 2;case 33326:case 35898:case 33327:return 4;case 33328:case 34842:return 8;case 34836:return 16;case 33189:return 2;case 34041:return 4;case 32854:return 2;case 36168:return 1;default:i.neverReached(e)}return 0}Object.defineProperty(t,"__esModule",{value:!0}),t.vertexCount=function(e,t){return e.vertexBuffers[t].size/o(e.layout[t])},t.getStride=o,t.getBytesPerElement=a,t.addDescriptor=function(e,t,r,i,n,o){var s=a(i);if(e.length>0){var l=e[0].stride,u=l+s*r;e.forEach(function(e){return e.stride=u}),e.push({name:t,count:r,type:i,offset:l,stride:u,normalized:n,divisor:o})}else e.push({name:t,count:r,type:i,offset:0,stride:s*r,normalized:n,divisor:o})},t.assertCompatibleVertexAttributeLocations=function(e,t){var r=e.locations===t.locations;return r},t.hasAttribute=function(e,t){for(var r=0;r<e.length;r++)if(e[r].name===t)return!0;return!1},t.findAttribute=function(e,t){for(var r=0;r<e.length;r++)if(e[r].name===t)return e[r];return null},t.copyFramebufferToTexture=function(e,t,r,i,n){void 0===n&&(n=0);var o=e.getBoundFramebufferObject(),a=e.getBoundTexture(0);e.bindFramebuffer(t),e.bindTexture(r,0),e.gl.copyTexImage2D(e.gl.TEXTURE_2D,n,r.descriptor.pixelFormat,i[0],i[1],i[2],i[3],0),e.gl.flush(),e.bindFramebuffer(o),e.bindTexture(a,0)},t.assert=function(e,t){if(!e)throw new n(t)},t.setBaseInstanceOffset=function(e,t){var i={};for(var n in e)i[n]=e[n].map(function(e){return e.divisor?r({},e,{baseInstance:t}):e});return i},t.bindVertexBufferLayout=function(e,t,r,i,n){var o=e.gl,a=e.capabilities.instancing;e.bindBuffer(r);for(var s=0,l=i;s<l.length;s++){var u=l[s],f=t[u.name],c=(n||(0+u.baseInstance?u.baseInstance:0))*u.stride;if(u.baseInstance&&u.divisor,u.count<=4)o.vertexAttribPointer(f,u.count,u.type,u.normalized,u.stride,u.offset+c),o.enableVertexAttribArray(f),u.divisor&&u.divisor>0&&a&&a.vertexAttribDivisor(f,u.divisor);else if(9===u.count)for(var d=0;d<3;d++)o.vertexAttribPointer(f+d,3,u.type,u.normalized,u.stride,u.offset+12*d+c),o.enableVertexAttribArray(f+d),u.divisor&&u.divisor>0&&a&&a.vertexAttribDivisor(f+d,u.divisor);else if(16===u.count)for(d=0;d<4;d++)o.vertexAttribPointer(f+d,4,u.type,u.normalized,u.stride,u.offset+16*d+c),o.enableVertexAttribArray(f+d),u.divisor&&u.divisor>0&&a&&a.vertexAttribDivisor(f+d,u.divisor)}},t.unbindVertexBufferLayout=function(e,t,r,i){var n=e.gl,o=e.capabilities.instancing;e.bindBuffer(r);for(var a=0,s=i;a<s.length;a++){var l=s[a],u=t[l.name];if(l.count<=4)n.disableVertexAttribArray(u),l.divisor&&l.divisor>0&&o&&o.vertexAttribDivisor(u,0);else if(9===l.count)for(var f=0;f<3;f++)n.disableVertexAttribArray(u+f),l.divisor&&l.divisor>0&&o&&o.vertexAttribDivisor(u+f,0);else if(16===l.count)for(f=0;f<4;f++)n.disableVertexAttribArray(u+f),l.divisor&&l.divisor>0&&o&&o.vertexAttribDivisor(u+f,0)}e.unbindBuffer(34962)},t.getBytesPerElementFormat=s,t.getGpuMemoryUsage=function e(t){if(!t)return 0;if("colorAttachment"in t)return t.glName?e(t.colorAttachment)+e(t.depthStencilAttachment):0;if("descriptor"in t)return t.glName?e(t.descriptor):0;var r=t.internalFormat||"pixelFormat"in t&&t.pixelFormat;if(!r)return 0;var i="hasMipmap"in t&&t.hasMipmap?1.3:1,n=t.width*t.height;return s(r)*n*i}}.apply(null,i))||(e.exports=n)},QFi0:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("H1tY"),r("rusB")],void 0===(n=function(e,t,r,i){return function(){function e(t,i,n,o,a){this._context=null,this._glName=null,this._bufferType=void 0,this._usage=35044,this._size=-1,this._indexType=void 0,this._context=t,this._bufferType=i,this._usage=n,this._id=e._nextId++,this._glName=this._context.gl.createBuffer(),r("esri-webgl-debug")&&t.instanceCounter.incrementCount(1),o&&this.setData(o,a)}return e.createIndex=function(t,r,i,n){return new e(t,34963,r,i,n)},e.createVertex=function(t,r,i){return new e(t,34962,r,i)},Object.defineProperty(e.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"glName",{get:function(){return this._glName},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"usage",{get:function(){return this._usage},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bufferType",{get:function(){return this._bufferType},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"indexType",{get:function(){return this._indexType},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"byteSize",{get:function(){return 34962===this._bufferType?this._size:5125===this._indexType?4*this._size:2*this._size},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){this._context&&(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),r("esri-webgl-debug")&&this._context.instanceCounter.decrementCount(1),this._context=null)},e.prototype.setData=function(e,t){if(e){if("number"==typeof e){if(34963===this._bufferType&&t)switch(this._indexType=t,this._size=e,t){case 5123:e*=2;break;case 5125:e*=4}}else{var r=e.byteLength;i.isUint16Array(e)&&(r/=2,this._indexType=5123),i.isUint32Array(e)&&(r/=4,this._indexType=5125),this._size=r}var n=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this),this._context.gl.bufferData(this._bufferType,e,this._usage),this._context.bindVAO(n)}},e.prototype.setSubData=function(e,t,r,n){if(void 0===t&&(t=0),void 0===r&&(r=0),e){t<0||this._size;var o=t,a=r,s=n,l=e.byteLength;i.isUint16Array(e)&&(l/=2,o*=2,a*=2,s*=2),i.isUint32Array(e)&&(l/=4,o*=4,a*=4,s*=4),void 0===n&&(n=l-1),this._size;var u=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this);var f=this._context.gl,c=ArrayBuffer.isView(e)?e.buffer:e;f.bufferSubData(this._bufferType,o,c.slice(a,s)),this._context.bindVAO(u)}},e._nextId=0,e}()}.apply(null,i))||(e.exports=n)},"U+8K":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("G0ER")],void 0===(n=function(e,t,r){function i(e,t,i,n){i=i||{},n=n||"";var o="function"==typeof t.shaders?t.shaders(i):t.shaders;return new r(e,n+o.vertexShader,n+o.fragmentShader,t.attributes)}Object.defineProperty(t,"__esModule",{value:!0}),t.glslifyDefineMap=function(e){var t="";for(var r in e){var i=e[r];if("boolean"==typeof i)i&&(t+="#define "+r+"\n");else if("number"==typeof i)t+="#define "+r+" "+i.toFixed()+"\n";else if("object"==typeof i){var n=i.options,o=0;for(var a in n)t+="#define "+n[a]+" "+(o++).toFixed()+"\n";t+="#define "+r+" "+n[i.value]+"\n"}}return t};var n=function(){function e(e){this._programCacheByTemplate=new Map,this._rctx=e}return e.prototype.dispose=function(){this._programCacheByTemplate.forEach(function(e){e.programs.forEach(function(e){e.dispose()})}),this._programCacheByTemplate=null},e.prototype.getProgram=function(e,t){var r=this;return this._programCacheByTemplate.has(e)||this.addProgramTemplate(e,function(t){return i(r._rctx,e,t)}),this.getProgramTemplateInstance(e,t)},e.prototype.addProgramTemplate=function(e,t){this._programCacheByTemplate.set(e,{constructor:t,programs:new Map})},e.prototype.getProgramTemplateInstance=function(e,t){var r=this._programCacheByTemplate.get(e);if(r){var i=t?JSON.stringify(t):"default";if(!r.programs.has(i)){var n=r.constructor(t);r.programs.set(i,n)}return r.programs.get(i)}return null},e}();t.ProgramCache=n,t.createProgram=i}.apply(null,i))||(e.exports=n)},Ysiz:function(e,t,r){var i,n;i=[r("Gc7o"),r("CJs7"),r("9E9H")],void 0===(n=function(e,t,r){var i=999,n=9999,o=0,a=1,s=2,l=3,u=4,f=5,c=6,d=7,h=8,p=9,g=10,m=11,_=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];return function(){function v(e){e.length&&j.push({type:_[S],data:e,position:E,line:L,column:O})}function x(e){U=0,M=(V+=e).length;for(var t;P=V[U],U<M;){switch(t=U,S){case o:U="/"===P&&"*"===A?(C.push(P),v(C.join("")),S=i,U+1):(C.push(P),A=P,U+1);break;case a:case s:U=y();break;case l:U=b();break;case u:U="."===P?(C.push(P),S=f,A=P,U+1):/[eE]/.test(P)?(C.push(P),S=f,A=P,U+1):"x"===P&&1===C.length&&"0"===C[0]?(S=m,C.push(P),A=P,U+1):/[^\d]/.test(P)?(v(C.join("")),S=i,U):(C.push(P),A=P,U+1);break;case m:U=/[^a-fA-F0-9]/.test(P)?(v(C.join("")),S=i,U):(C.push(P),A=P,U+1);break;case f:"f"===P&&(C.push(P),A=P,U+=1),U=/[eE]/.test(P)?(C.push(P),A=P,U+1):"-"===P&&/[eE]/.test(A)?(C.push(P),A=P,U+1):/[^\d]/.test(P)?(v(C.join("")),S=i,U):(C.push(P),A=P,U+1);break;case n:U=w();break;case p:U=/[^\s]/g.test(P)?(v(C.join("")),S=i,U):(C.push(P),A=P,U+1);break;case i:C=C.length?[]:C,U="/"===A&&"*"===P?(E=D+U-1,S=o,A=P,U+1):"/"===A&&"/"===P?(E=D+U-1,S=a,A=P,U+1):"#"===P?(S=s,E=D+U,U):/\s/.test(P)?(S=p,E=D+U,U):(B=/\d/.test(P),F=/[^\w_]/.test(P),E=D+U,S=B?u:F?l:n,U)}if(t!==U)switch(V[t]){case"\n":O=0,++L;break;default:++O}}return D+=U,V=V.slice(U),j}function y(){return"\r"!==P&&"\n"!==P||"\\"===A?(C.push(P),A=P,U+1):(v(C.join("")),S=i,U)}function b(){if("."===A&&/\d/.test(P))return S=f,U;if("/"===A&&"*"===P)return S=o,U;if("/"===A&&"/"===P)return S=a,U;if("."===P&&C.length){for(;T(C););return S=f,U}if(";"===P||")"===P||"("===P){if(C.length)for(;T(C););return v(P),S=i,U+1}var e=2===C.length&&"="!==P;if(/[\w_\d\s]/.test(P)||e){for(;T(C););return S=i,U}return C.push(P),A=P,U+1}function T(e){for(var r,i,n=0;;){if(r=t.indexOf(e.slice(0,e.length+n).join("")),i=t[r],-1===r){if(n--+e.length>0)continue;i=e.slice(0,1).join("")}return v(i),E+=i.length,(C=C.slice(i.length)).length}}function w(){if(/[^\d\w_]/.test(P)){var t=C.join("");return S=e.indexOf(t)>-1?h:r.indexOf(t)>-1?d:c,v(C.join("")),S=i,U}return C.push(P),A=P,U+1}var P,A,M,U=0,D=0,S=i,C=[],j=[],L=1,O=0,E=0,B=!1,F=!1,V="";return function(e){return j=[],null!==e?x(e.replace?e.replace(/\r\n/g,"\n"):e):(C.length&&v(C.join("")),S=g,v("(eof)"),j)}}}.apply(null,i))||(e.exports=n)},Zn9k:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("tOQU"),r("HXXw")],void 0===(n=function(e,t,r,i){function n(e){return i(e)}function o(e){return e.map(function(e){return"eof"!==e.type?e.data:""}).join("")}function a(e,t,r){void 0===t&&(t="100"),void 0===r&&(r="300 es");for(var i=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/,n=0,o=e;n<o.length;n++){var a=o[n];if("preprocessor"===a.type){var s=i.exec(a.data);if(s){var l=s[1].replace(/\s\s+/g," ");if(l===r)return l;if(l===t)return a.data="#version "+r,t;throw new Error("unknown glsl version: "+l)}}}return e.splice(0,0,{type:"preprocessor",data:"#version "+r},{type:"whitespace",data:"\n"}),null}function s(e,t){for(var r=t-1;r>=0;r--){var i=e[r];if("whitespace"!==i.type&&"block-comment"!==i.type){if("keyword"!==i.type)break;if("attribute"===i.data||"in"===i.data)return!0}}return!1}function l(e,t,r,i){i=i||r;for(var n=0,o=e;n<o.length;n++){var a=o[n];if("ident"===a.type&&a.data===r)return i in t?t[i]++:t[i]=0,l(e,t,i+"_"+t[i],i)}return r}function u(e,t,r){function i(e,t){for(var r=t;r<e.length;r++){var i=e[r];if("operator"===i.type&&";"===i.data)return r}return null}void 0===r&&(r="afterVersion");var n={data:"\n",type:"whitespace"},o=function(t){return t<e.length&&/[^\r\n]$/.test(e[t].data)},a=function(e){for(var t=-1,n=0,o=-1,a=0;a<e.length;a++){var s=e[a];if("preprocessor"===s.type&&(s.data.match(/\#(if|ifdef|ifndef)\s+.+/)?++n:s.data.match(/\#endif\s*.*/)&&--n),"afterVersion"!==r&&"afterPrecision"!==r||"preprocessor"===s.type&&/^#version/.test(s.data)&&(o=Math.max(o,a)),"afterPrecision"===r&&"keyword"===s.type&&"precision"===s.data){var l=i(e,a);if(null===l)throw new Error("precision statement not followed by any semicolons!");o=Math.max(o,l)}t<o&&0===n&&(t=a)}return t+1}(e);o(a-1)&&e.splice(a++,0,n);for(var s=0,l=t;s<l.length;s++){var u=l[s];e.splice(a++,0,u)}o(a-1)&&o(a)&&e.splice(a,0,n)}function f(e,t,r,i){void 0===i&&(i="lowp"),u(e,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:i},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}Object.defineProperty(t,"__esModule",{value:!0});var c=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"];t.transpileShader=function(e,t){var i=n(e);if("300 es"===a(i,"100","300 es"))throw new Error("shader is already glsl 300 es");for(var u=null,d=null,h={},p={},g=0;g<i.length;++g)switch((m=i[g]).type){case"keyword":"vertex"===t&&"attribute"===m.data?m.data="in":"varying"===m.data&&(m.data="vertex"===t?"out":"in");break;case"builtin":/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(m.data.trim())&&(m.data=m.data.replace(/(2D|Cube|EXT)/g,"")),"fragment"===t&&"gl_FragColor"===m.data?(u||f(i,u=l(i,h,"fragColor"),"vec4"),m.data=u):"fragment"===t&&"gl_FragDepthEXT"===m.data&&(d||(d=l(i,h,"gl_FragDepth")),m.data=d);break;case"ident":if(r.indexOf(m.data)>=0){if("vertex"===t&&s(i,g))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");m.data in p||(p[m.data]=l(i,h,m.data)),m.data=p[m.data]}}for(g=i.length-1;g>=0;--g){var m;if("preprocessor"===(m=i[g]).type){var _=m.data.match(/\#extension\s+(.*)\:/);if(_&&_[1]&&c.indexOf(_[1].trim())>=0){var v=i[g+1];i.splice(g,v&&"whitespace"===v.type?2:1)}var x=m.data.match(/\#ifdef\s+(.*)/);x&&x[1]&&c.indexOf(x[1].trim())>=0&&(m.data="#if 1");var y=m.data.match(/\#ifndef\s+(.*)/);y&&y[1]&&c.indexOf(y[1].trim())>=0&&(m.data="#if 0")}}return o(i)}}.apply(null,i))||(e.exports=n)},iHt0:function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.create=function(){return new Float32Array(3)},t.clone=function(e){var t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},t.fromValues=function(e,t,r){var i=new Float32Array(3);return i[0]=e,i[1]=t,i[2]=r,i},t.createView=function(e,t){return new Float32Array(e,t,3)}}.apply(null,i))||(e.exports=n)},oZZu:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("7Yqx")],void 0===(n=function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.mat4f32=r}.apply(null,i))||(e.exports=n)},tOQU:function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=function(e,t){return["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"]}.apply(null,i))||(e.exports=n)},vlC2:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("iHt0")],void 0===(n=function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.vec3f32=r}.apply(null,i))||(e.exports=n)},"z2+Q":function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r("H1tY"),r("Kfys")],void 0===(n=function(e,t,r,i){return function(){function e(t,i,n,o,a){this._context=null,this._glName=null,this._layout=null,this._locations=null,this._buffers=void 0,this._indexBuffer=void 0,this._initialized=!1,this._context=t,this._layout=n,this._buffers=o,this._locations=i,a&&(this._indexBuffer=a),this._id=e._nextId++,r("esri-webgl-debug")&&t.instanceCounter.incrementCount(2)}return Object.defineProperty(e.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"glName",{get:function(){return this._glName},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"vertexBuffers",{get:function(){return this._buffers},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"indexBuffer",{get:function(){return this._indexBuffer},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){var e=this;return Object.keys(this._buffers).reduce(function(t,r){return t+e._buffers[r].size},this._indexBuffer?this._indexBuffer.size:0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"layout",{get:function(){return this._layout},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"locations",{get:function(){return this._locations},enumerable:!0,configurable:!0}),e.prototype.dispose=function(e){if(void 0===e&&(e=!0),this._context){var t=this._context.capabilities.vao;if(t&&this._glName&&(t.deleteVertexArray(this._glName),this._glName=null),this._context.getBoundVAO()===this&&this._context.bindVAO(null),e){for(var i in this._buffers)this._buffers[i].dispose(),delete this._buffers[i];this._indexBuffer&&(this._indexBuffer.dispose(),this._indexBuffer=null)}r("esri-webgl-debug")&&this._context.instanceCounter.decrementCount(2),this._context=null}},e.prototype.initialize=function(){if(!this._initialized){var e=this._context.capabilities.vao;if(e){var t=e.createVertexArray();e.bindVertexArray(t),this._bindLayout(),e.bindVertexArray(null),this._glName=t}this._initialized=!0}},e.prototype.bind=function(){this.initialize();var e=this._context.capabilities.vao;e?e.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())},e.prototype._bindLayout=function(){var e=this._buffers,t=!!this._context.capabilities.vao,r=this._layout,n=this._indexBuffer,o=this._context.gl;for(var a in e){var s=e[a],l=r[a];i.bindVertexBufferLayout(this._context,this._locations,s,l)}n&&(t?o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,n.glName):this._context.bindBuffer(n))},e.prototype.unbind=function(){this.initialize();var e=this._context.capabilities.vao;e?e.bindVertexArray(null):this._unbindLayout()},e.prototype._unbindLayout=function(){var e=this._buffers,t=this._layout;for(var r in e){var n=e[r],o=t[r];i.unbindVertexBufferLayout(this._context,this._locations,n,o)}var a=this._indexBuffer;a&&this._context.unbindBuffer(a.bufferType)},e._nextId=0,e}()}.apply(null,i))||(e.exports=n)}}]);