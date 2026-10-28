/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $h=2,Jh=0,jh=1;const Qh=5,ef=100;const tf=200,nf=201;const rf=204,sf=205;const af=0;const of=1e3,lf=1001,cf=1002,uf=1003;const hf=1006;const ff=1008,df=1009;const pf=1012;const mf=1015,_f=1016;const gf=1023;const vf="",It="srgb",dn="srgb-linear",Xi="linear",it="srgb";const xf=35048,Pr="300 es";class Yn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dr=1234567;const ai=Math.PI/180,ci=180/Math.PI;function Zn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function Tt(i,e,t){return Math.max(e,Math.min(t,i))}function Rr(i,e){return(i%e+e)%e}function Zs(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Ks(i,e,t){return i!==e?(t-i)/(e-i):0}function oi(i,e,t){return(1-t)*i+t*e}function $s(i,e,t,n){return oi(i,e,1-Math.exp(-t*n))}function Js(i,e=1){return e-Math.abs(Rr(i,e*2)-e)}function js(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Qs(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ea(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ta(i,e){return i+Math.random()*(e-i)}function na(i){return i*(.5-Math.random())}function ia(i){i!==void 0&&(Dr=i);let e=Dr+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ra(i){return i*ai}function sa(i){return i*ci}function aa(i){return(i&i-1)===0&&i!==0}function oa(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function la(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ca(i,e,t,n,r){const s=Math.cos,o=Math.sin,l=s(t/2),c=o(t/2),u=s((e+n)/2),f=o((e+n)/2),d=s((e-n)/2),m=o((e-n)/2),g=s((n-e)/2),S=o((n-e)/2);switch(r){case"XYX":i.set(l*f,c*d,c*m,l*u);break;case"YZY":i.set(c*m,l*f,c*d,l*u);break;case"ZXZ":i.set(c*d,c*m,l*f,l*u);break;case"XZX":i.set(l*f,c*S,c*g,l*u);break;case"YXY":i.set(c*g,l*f,c*S,l*u);break;case"ZYZ":i.set(c*S,c*g,l*f,l*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Vn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function At(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Sf={DEG2RAD:ai,RAD2DEG:ci,generateUUID:Zn,clamp:Tt,euclideanModulo:Rr,mapLinear:Zs,inverseLerp:Ks,lerp:oi,damp:$s,pingpong:Js,smoothstep:js,smootherstep:Qs,randInt:ea,randFloat:ta,randFloatSpread:na,seededRandom:ia,degToRad:ra,radToDeg:sa,isPowerOfTwo:aa,ceilPowerOfTwo:oa,floorPowerOfTwo:la,setQuaternionFromProperEuler:ca,normalize:At,denormalize:Vn};class ot{constructor(e=0,t=0){ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,r,s,o,l,c,u){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,l,c,u)}set(e,t,n,r,s,o,l,c,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=l,f[3]=t,f[4]=s,f[5]=c,f[6]=n,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],l=n[3],c=n[6],u=n[1],f=n[4],d=n[7],m=n[2],g=n[5],S=n[8],y=r[0],_=r[3],p=r[6],P=r[1],C=r[4],b=r[7],X=r[2],L=r[5],U=r[8];return s[0]=o*y+l*P+c*X,s[3]=o*_+l*C+c*L,s[6]=o*p+l*b+c*U,s[1]=u*y+f*P+d*X,s[4]=u*_+f*C+d*L,s[7]=u*p+f*b+d*U,s[2]=m*y+g*P+S*X,s[5]=m*_+g*C+S*L,s[8]=m*p+g*b+S*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],l=e[5],c=e[6],u=e[7],f=e[8];return t*o*f-t*l*u-n*s*f+n*l*c+r*s*u-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],l=e[5],c=e[6],u=e[7],f=e[8],d=f*o-l*u,m=l*c-f*s,g=u*s-o*c,S=t*d+n*m+r*g;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/S;return e[0]=d*y,e[1]=(r*u-f*n)*y,e[2]=(l*n-r*o)*y,e[3]=m*y,e[4]=(f*t-r*c)*y,e[5]=(r*s-l*t)*y,e[6]=g*y,e[7]=(n*c-u*t)*y,e[8]=(o*t-n*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,l){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*o+u*l)+o+e,-r*u,r*c,-r*(-u*o+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply($i.makeScale(e,t)),this}rotate(e){return this.premultiply($i.makeRotation(-e)),this}translate(e,t){return this.premultiply($i.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $i=new He;function ys(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ui(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ua(){const i=ui("canvas");return i.style.display="block",i}const Lr={};function ri(i){i in Lr||(Lr[i]=!0,console.warn(i))}function ha(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function fa(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function da(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const je={enabled:!0,workingColorSpace:dn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===it&&(i.r=nn(i.r),i.g=nn(i.g),i.b=nn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===it&&(i.r=Xn(i.r),i.g=Xn(i.g),i.b=Xn(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===""?Xi:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function nn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xn(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ur=[.64,.33,.3,.6,.15,.06],Ir=[.2126,.7152,.0722],Fr=[.3127,.329],Nr=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Or=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je.define({[dn]:{primaries:Ur,whitePoint:Fr,transfer:Xi,toXYZ:Nr,fromXYZ:Or,luminanceCoefficients:Ir,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:Ur,whitePoint:Fr,transfer:it,toXYZ:Nr,fromXYZ:Or,luminanceCoefficients:Ir,outputColorSpaceConfig:{drawingBufferColorSpace:It}}});let wn;class pa{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wn===void 0&&(wn=ui("canvas")),wn.width=e.width,wn.height=e.height;const n=wn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=wn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ui("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=nn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(nn(t[n]/255)*255):t[n]=nn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ma=0;class As{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ma++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,l=r.length;o<l;o++)r[o].isDataTexture?s.push(Ji(r[o].image)):s.push(Ji(r[o]))}else s=Ji(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ji(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _a=0;class St extends Yn{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=1001,r=1001,s=1006,o=1008,l=1023,c=1009,u=St.DEFAULT_ANISOTROPY,f=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_a++}),this.uuid=Zn(),this.name="",this.source=new As(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=300;St.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,n=0,r=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,u=c[0],f=c[4],d=c[8],m=c[1],g=c[5],S=c[9],y=c[2],_=c[6],p=c[10];if(Math.abs(f-m)<.01&&Math.abs(d-y)<.01&&Math.abs(S-_)<.01){if(Math.abs(f+m)<.1&&Math.abs(d+y)<.1&&Math.abs(S+_)<.1&&Math.abs(u+g+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(u+1)/2,b=(g+1)/2,X=(p+1)/2,L=(f+m)/4,U=(d+y)/4,B=(S+_)/4;return C>b&&C>X?C<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(C),r=L/n,s=U/n):b>X?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=L/r,s=B/r):X<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(X),n=U/s,r=B/s),this.set(n,r,s,t),this}let P=Math.sqrt((_-S)*(_-S)+(d-y)*(d-y)+(m-f)*(m-f));return Math.abs(P)<.001&&(P=1),this.x=(_-S)/P,this.y=(d-y)/P,this.z=(m-f)/P,this.w=Math.acos((u+g+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ga extends Yn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new St(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let l=0;l<o;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new As(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bn extends ga{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class bs extends St{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class va extends St{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,l){let c=n[r+0],u=n[r+1],f=n[r+2],d=n[r+3];const m=s[o+0],g=s[o+1],S=s[o+2],y=s[o+3];if(l===0){e[t+0]=c,e[t+1]=u,e[t+2]=f,e[t+3]=d;return}if(l===1){e[t+0]=m,e[t+1]=g,e[t+2]=S,e[t+3]=y;return}if(d!==y||c!==m||u!==g||f!==S){let _=1-l;const p=c*m+u*g+f*S+d*y,P=p>=0?1:-1,C=1-p*p;if(C>Number.EPSILON){const X=Math.sqrt(C),L=Math.atan2(X,p*P);_=Math.sin(_*L)/X,l=Math.sin(l*L)/X}const b=l*P;if(c=c*_+m*b,u=u*_+g*b,f=f*_+S*b,d=d*_+y*b,_===1-l){const X=1/Math.sqrt(c*c+u*u+f*f+d*d);c*=X,u*=X,f*=X,d*=X}}e[t]=c,e[t+1]=u,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){const l=n[r],c=n[r+1],u=n[r+2],f=n[r+3],d=s[o],m=s[o+1],g=s[o+2],S=s[o+3];return e[t]=l*S+f*d+c*g-u*m,e[t+1]=c*S+f*m+u*d-l*g,e[t+2]=u*S+f*g+l*m-c*d,e[t+3]=f*S-l*d-c*m-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,l=Math.cos,c=Math.sin,u=l(n/2),f=l(r/2),d=l(s/2),m=c(n/2),g=c(r/2),S=c(s/2);switch(o){case"XYZ":this._x=m*f*d+u*g*S,this._y=u*g*d-m*f*S,this._z=u*f*S+m*g*d,this._w=u*f*d-m*g*S;break;case"YXZ":this._x=m*f*d+u*g*S,this._y=u*g*d-m*f*S,this._z=u*f*S-m*g*d,this._w=u*f*d+m*g*S;break;case"ZXY":this._x=m*f*d-u*g*S,this._y=u*g*d+m*f*S,this._z=u*f*S+m*g*d,this._w=u*f*d-m*g*S;break;case"ZYX":this._x=m*f*d-u*g*S,this._y=u*g*d+m*f*S,this._z=u*f*S-m*g*d,this._w=u*f*d+m*g*S;break;case"YZX":this._x=m*f*d+u*g*S,this._y=u*g*d+m*f*S,this._z=u*f*S-m*g*d,this._w=u*f*d-m*g*S;break;case"XZY":this._x=m*f*d-u*g*S,this._y=u*g*d-m*f*S,this._z=u*f*S+m*g*d,this._w=u*f*d+m*g*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],l=t[5],c=t[9],u=t[2],f=t[6],d=t[10],m=n+l+d;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(f-c)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(n>l&&n>d){const g=2*Math.sqrt(1+n-l-d);this._w=(f-c)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(l>d){const g=2*Math.sqrt(1+l-n-d);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(c+f)/g}else{const g=2*Math.sqrt(1+d-n-l);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(c+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,l=t._x,c=t._y,u=t._z,f=t._w;return this._x=n*f+o*l+r*u-s*c,this._y=r*f+o*c+s*l-n*u,this._z=s*f+o*u+n*c-r*l,this._w=o*f-n*l-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let l=o*e._w+n*e._x+r*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-l*l;if(c<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*n+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const u=Math.sqrt(c),f=Math.atan2(u,l),d=Math.sin((1-t)*f)/u,m=Math.sin(t*f)/u;return this._w=o*d+this._w*m,this._x=n*d+this._x*m,this._y=r*d+this._y*m,this._z=s*d+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Br.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Br.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,l=e.z,c=e.w,u=2*(o*r-l*n),f=2*(l*t-s*r),d=2*(s*n-o*t);return this.x=t+c*u+o*d-l*f,this.y=n+c*f+l*u-s*d,this.z=r+c*d+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,l=t.y,c=t.z;return this.x=r*c-s*l,this.y=s*o-n*c,this.z=n*l-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ji.copy(this).projectOnVector(e),this.sub(ji)}reflect(e){return this.sub(ji.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ji=new W,Br=new hi;class fi{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ot.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ot.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ot.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=s.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,Ot):Ot.fromBufferAttribute(s,o),Ot.applyMatrix4(e.matrixWorld),this.expandByPoint(Ot);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mi.copy(n.boundingBox)),Mi.applyMatrix4(e.matrixWorld),this.union(Mi)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ot),Ot.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ei),Ei.subVectors(this.max,ei),Pn.subVectors(e.a,ei),Dn.subVectors(e.b,ei),Ln.subVectors(e.c,ei),an.subVectors(Dn,Pn),on.subVectors(Ln,Dn),_n.subVectors(Pn,Ln);let t=[0,-an.z,an.y,0,-on.z,on.y,0,-_n.z,_n.y,an.z,0,-an.x,on.z,0,-on.x,_n.z,0,-_n.x,-an.y,an.x,0,-on.y,on.x,0,-_n.y,_n.x,0];return!Qi(t,Pn,Dn,Ln,Ei)||(t=[1,0,0,0,1,0,0,0,1],!Qi(t,Pn,Dn,Ln,Ei))?!1:(Ti.crossVectors(an,on),t=[Ti.x,Ti.y,Ti.z],Qi(t,Pn,Dn,Ln,Ei))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ot).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ot).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zt=[new W,new W,new W,new W,new W,new W,new W,new W],Ot=new W,Mi=new fi,Pn=new W,Dn=new W,Ln=new W,an=new W,on=new W,_n=new W,ei=new W,Ei=new W,Ti=new W,gn=new W;function Qi(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){gn.fromArray(i,s);const l=r.x*Math.abs(gn.x)+r.y*Math.abs(gn.y)+r.z*Math.abs(gn.z),c=e.dot(gn),u=t.dot(gn),f=n.dot(gn);if(Math.max(-Math.max(c,u,f),Math.min(c,u,f))>l)return!1}return!0}const xa=new fi,ti=new W,er=new W;class Cr{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xa.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ti.subVectors(e,this.center);const t=ti.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ti,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(er.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ti.copy(e.center).add(er)),this.expandByPoint(ti.copy(e.center).sub(er))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kt=new W,tr=new W,yi=new W,ln=new W,nr=new W,Ai=new W,ir=new W;class Sa{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kt.copy(this.origin).addScaledVector(this.direction,t),Kt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){tr.copy(e).add(t).multiplyScalar(.5),yi.copy(t).sub(e).normalize(),ln.copy(this.origin).sub(tr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(yi),l=ln.dot(this.direction),c=-ln.dot(yi),u=ln.lengthSq(),f=Math.abs(1-o*o);let d,m,g,S;if(f>0)if(d=o*c-l,m=o*l-c,S=s*f,d>=0)if(m>=-S)if(m<=S){const y=1/f;d*=y,m*=y,g=d*(d+o*m+2*l)+m*(o*d+m+2*c)+u}else m=s,d=Math.max(0,-(o*m+l)),g=-d*d+m*(m+2*c)+u;else m=-s,d=Math.max(0,-(o*m+l)),g=-d*d+m*(m+2*c)+u;else m<=-S?(d=Math.max(0,-(-o*s+l)),m=d>0?-s:Math.min(Math.max(-s,-c),s),g=-d*d+m*(m+2*c)+u):m<=S?(d=0,m=Math.min(Math.max(-s,-c),s),g=m*(m+2*c)+u):(d=Math.max(0,-(o*s+l)),m=d>0?s:Math.min(Math.max(-s,-c),s),g=-d*d+m*(m+2*c)+u);else m=o>0?-s:s,d=Math.max(0,-(o*m+l)),g=-d*d+m*(m+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(tr).addScaledVector(yi,m),g}intersectSphere(e,t){Kt.subVectors(e.center,this.origin);const n=Kt.dot(this.direction),r=Kt.dot(Kt)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),l=n-o,c=n+o;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,l,c;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,m=this.origin;return u>=0?(n=(e.min.x-m.x)*u,r=(e.max.x-m.x)*u):(n=(e.max.x-m.x)*u,r=(e.min.x-m.x)*u),f>=0?(s=(e.min.y-m.y)*f,o=(e.max.y-m.y)*f):(s=(e.max.y-m.y)*f,o=(e.min.y-m.y)*f),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(l=(e.min.z-m.z)*d,c=(e.max.z-m.z)*d):(l=(e.max.z-m.z)*d,c=(e.min.z-m.z)*d),n>c||l>r)||((l>n||n!==n)&&(n=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Kt)!==null}intersectTriangle(e,t,n,r,s){nr.subVectors(t,e),Ai.subVectors(n,e),ir.crossVectors(nr,Ai);let o=this.direction.dot(ir),l;if(o>0){if(r)return null;l=1}else if(o<0)l=-1,o=-o;else return null;ln.subVectors(this.origin,e);const c=l*this.direction.dot(Ai.crossVectors(ln,Ai));if(c<0)return null;const u=l*this.direction.dot(nr.cross(ln));if(u<0||c+u>o)return null;const f=-l*ln.dot(ir);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,n,r,s,o,l,c,u,f,d,m,g,S,y,_){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,l,c,u,f,d,m,g,S,y,_)}set(e,t,n,r,s,o,l,c,u,f,d,m,g,S,y,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=l,p[13]=c,p[2]=u,p[6]=f,p[10]=d,p[14]=m,p[3]=g,p[7]=S,p[11]=y,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Un.setFromMatrixColumn(e,0).length(),s=1/Un.setFromMatrixColumn(e,1).length(),o=1/Un.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),l=Math.sin(n),c=Math.cos(r),u=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const m=o*f,g=o*d,S=l*f,y=l*d;t[0]=c*f,t[4]=-c*d,t[8]=u,t[1]=g+S*u,t[5]=m-y*u,t[9]=-l*c,t[2]=y-m*u,t[6]=S+g*u,t[10]=o*c}else if(e.order==="YXZ"){const m=c*f,g=c*d,S=u*f,y=u*d;t[0]=m+y*l,t[4]=S*l-g,t[8]=o*u,t[1]=o*d,t[5]=o*f,t[9]=-l,t[2]=g*l-S,t[6]=y+m*l,t[10]=o*c}else if(e.order==="ZXY"){const m=c*f,g=c*d,S=u*f,y=u*d;t[0]=m-y*l,t[4]=-o*d,t[8]=S+g*l,t[1]=g+S*l,t[5]=o*f,t[9]=y-m*l,t[2]=-o*u,t[6]=l,t[10]=o*c}else if(e.order==="ZYX"){const m=o*f,g=o*d,S=l*f,y=l*d;t[0]=c*f,t[4]=S*u-g,t[8]=m*u+y,t[1]=c*d,t[5]=y*u+m,t[9]=g*u-S,t[2]=-u,t[6]=l*c,t[10]=o*c}else if(e.order==="YZX"){const m=o*c,g=o*u,S=l*c,y=l*u;t[0]=c*f,t[4]=y-m*d,t[8]=S*d+g,t[1]=d,t[5]=o*f,t[9]=-l*f,t[2]=-u*f,t[6]=g*d+S,t[10]=m-y*d}else if(e.order==="XZY"){const m=o*c,g=o*u,S=l*c,y=l*u;t[0]=c*f,t[4]=-d,t[8]=u*f,t[1]=m*d+y,t[5]=o*f,t[9]=g*d-S,t[2]=S*d-g,t[6]=l*f,t[10]=y*d+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ma,e,Ea)}lookAt(e,t,n){const r=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),cn.crossVectors(n,Pt),cn.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),cn.crossVectors(n,Pt)),cn.normalize(),bi.crossVectors(Pt,cn),r[0]=cn.x,r[4]=bi.x,r[8]=Pt.x,r[1]=cn.y,r[5]=bi.y,r[9]=Pt.y,r[2]=cn.z,r[6]=bi.z,r[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],l=n[4],c=n[8],u=n[12],f=n[1],d=n[5],m=n[9],g=n[13],S=n[2],y=n[6],_=n[10],p=n[14],P=n[3],C=n[7],b=n[11],X=n[15],L=r[0],U=r[4],B=r[8],A=r[12],E=r[1],D=r[5],$=r[9],q=r[13],j=r[2],ae=r[6],J=r[10],ce=r[14],K=r[3],de=r[7],ge=r[11],be=r[15];return s[0]=o*L+l*E+c*j+u*K,s[4]=o*U+l*D+c*ae+u*de,s[8]=o*B+l*$+c*J+u*ge,s[12]=o*A+l*q+c*ce+u*be,s[1]=f*L+d*E+m*j+g*K,s[5]=f*U+d*D+m*ae+g*de,s[9]=f*B+d*$+m*J+g*ge,s[13]=f*A+d*q+m*ce+g*be,s[2]=S*L+y*E+_*j+p*K,s[6]=S*U+y*D+_*ae+p*de,s[10]=S*B+y*$+_*J+p*ge,s[14]=S*A+y*q+_*ce+p*be,s[3]=P*L+C*E+b*j+X*K,s[7]=P*U+C*D+b*ae+X*de,s[11]=P*B+C*$+b*J+X*ge,s[15]=P*A+C*q+b*ce+X*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],l=e[5],c=e[9],u=e[13],f=e[2],d=e[6],m=e[10],g=e[14],S=e[3],y=e[7],_=e[11],p=e[15];return S*(+s*c*d-r*u*d-s*l*m+n*u*m+r*l*g-n*c*g)+y*(+t*c*g-t*u*m+s*o*m-r*o*g+r*u*f-s*c*f)+_*(+t*u*d-t*l*g-s*o*d+n*o*g+s*l*f-n*u*f)+p*(-r*l*f-t*c*d+t*l*m+r*o*d-n*o*m+n*c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],l=e[5],c=e[6],u=e[7],f=e[8],d=e[9],m=e[10],g=e[11],S=e[12],y=e[13],_=e[14],p=e[15],P=d*_*u-y*m*u+y*c*g-l*_*g-d*c*p+l*m*p,C=S*m*u-f*_*u-S*c*g+o*_*g+f*c*p-o*m*p,b=f*y*u-S*d*u+S*l*g-o*y*g-f*l*p+o*d*p,X=S*d*c-f*y*c-S*l*m+o*y*m+f*l*_-o*d*_,L=t*P+n*C+r*b+s*X;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/L;return e[0]=P*U,e[1]=(y*m*s-d*_*s-y*r*g+n*_*g+d*r*p-n*m*p)*U,e[2]=(l*_*s-y*c*s+y*r*u-n*_*u-l*r*p+n*c*p)*U,e[3]=(d*c*s-l*m*s-d*r*u+n*m*u+l*r*g-n*c*g)*U,e[4]=C*U,e[5]=(f*_*s-S*m*s+S*r*g-t*_*g-f*r*p+t*m*p)*U,e[6]=(S*c*s-o*_*s-S*r*u+t*_*u+o*r*p-t*c*p)*U,e[7]=(o*m*s-f*c*s+f*r*u-t*m*u-o*r*g+t*c*g)*U,e[8]=b*U,e[9]=(S*d*s-f*y*s-S*n*g+t*y*g+f*n*p-t*d*p)*U,e[10]=(o*y*s-S*l*s+S*n*u-t*y*u-o*n*p+t*l*p)*U,e[11]=(f*l*s-o*d*s-f*n*u+t*d*u+o*n*g-t*l*g)*U,e[12]=X*U,e[13]=(f*y*r-S*d*r+S*n*m-t*y*m-f*n*_+t*d*_)*U,e[14]=(S*l*r-o*y*r-S*n*c+t*y*c+o*n*_-t*l*_)*U,e[15]=(o*d*r-f*l*r+f*n*c-t*d*c-o*n*m+t*l*m)*U,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,l=e.y,c=e.z,u=s*o,f=s*l;return this.set(u*o+n,u*l-r*c,u*c+r*l,0,u*l+r*c,f*l+n,f*c-r*o,0,u*c-r*l,f*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,l=t._z,c=t._w,u=s+s,f=o+o,d=l+l,m=s*u,g=s*f,S=s*d,y=o*f,_=o*d,p=l*d,P=c*u,C=c*f,b=c*d,X=n.x,L=n.y,U=n.z;return r[0]=(1-(y+p))*X,r[1]=(g+b)*X,r[2]=(S-C)*X,r[3]=0,r[4]=(g-b)*L,r[5]=(1-(m+p))*L,r[6]=(_+P)*L,r[7]=0,r[8]=(S+C)*U,r[9]=(_-P)*U,r[10]=(1-(m+y))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Un.set(r[0],r[1],r[2]).length();const o=Un.set(r[4],r[5],r[6]).length(),l=Un.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bt.copy(this);const u=1/s,f=1/o,d=1/l;return Bt.elements[0]*=u,Bt.elements[1]*=u,Bt.elements[2]*=u,Bt.elements[4]*=f,Bt.elements[5]*=f,Bt.elements[6]*=f,Bt.elements[8]*=d,Bt.elements[9]*=d,Bt.elements[10]*=d,t.setFromRotationMatrix(Bt),n.x=s,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,o,l=2e3){const c=this.elements,u=2*s/(t-e),f=2*s/(n-r),d=(t+e)/(t-e),m=(n+r)/(n-r);let g,S;if(l===2e3)g=-(o+s)/(o-s),S=-2*o*s/(o-s);else if(l===2001)g=-o/(o-s),S=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,l=2e3){const c=this.elements,u=1/(t-e),f=1/(n-r),d=1/(o-s),m=(t+e)*u,g=(n+r)*f;let S,y;if(l===2e3)S=(o+s)*d,y=-2*d;else if(l===2001)S=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-m,c[1]=0,c[5]=2*f,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=y,c[14]=-S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Un=new W,Bt=new pt,Ma=new W(0,0,0),Ea=new W(1,1,1),cn=new W,bi=new W,Pt=new W,Gr=new pt,zr=new hi;class rn{constructor(e=0,t=0,n=0,r=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],l=r[8],c=r[1],u=r[5],f=r[9],d=r[2],m=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zr.setFromEuler(this),this.setFromQuaternion(zr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class Rs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ta=0;const Hr=new W,In=new hi,$t=new pt,Ri=new W,ni=new W,ya=new W,Aa=new hi,Vr=new W(1,0,0),kr=new W(0,1,0),Wr=new W(0,0,1),Xr={type:"added"},ba={type:"removed"},Fn={type:"childadded",child:null},rr={type:"childremoved",child:null};class Lt extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ta++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new W,t=new rn,n=new hi,r=new W(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new He}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return In.setFromAxisAngle(e,t),this.quaternion.multiply(In),this}rotateOnWorldAxis(e,t){return In.setFromAxisAngle(e,t),this.quaternion.premultiply(In),this}rotateX(e){return this.rotateOnAxis(Vr,e)}rotateY(e){return this.rotateOnAxis(kr,e)}rotateZ(e){return this.rotateOnAxis(Wr,e)}translateOnAxis(e,t){return Hr.copy(e).applyQuaternion(this.quaternion),this.position.add(Hr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vr,e)}translateY(e){return this.translateOnAxis(kr,e)}translateZ(e){return this.translateOnAxis(Wr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($t.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ri.copy(e):Ri.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$t.lookAt(ni,Ri,this.up):$t.lookAt(Ri,ni,this.up),this.quaternion.setFromRotationMatrix($t),r&&($t.extractRotation(r.matrixWorld),In.setFromRotationMatrix($t),this.quaternion.premultiply(In.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xr),Fn.child=e,this.dispatchEvent(Fn),Fn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ba),rr.child=e,this.dispatchEvent(rr),rr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$t.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$t.multiply(e.parent.matrixWorld)),e.applyMatrix4($t),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xr),Fn.child=e,this.dispatchEvent(Fn),Fn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ni,e,ya),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ni,Aa,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let u=0,f=c.length;u<f;u++){const d=c[u];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(s(e.materials,this.material[c]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(s(e.animations,c))}}if(t){const l=o(e.geometries),c=o(e.materials),u=o(e.textures),f=o(e.images),d=o(e.shapes),m=o(e.skeletons),g=o(e.animations),S=o(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),f.length>0&&(n.images=f),d.length>0&&(n.shapes=d),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),S.length>0&&(n.nodes=S)}return n.object=r,n;function o(l){const c=[];for(const u in l){const f=l[u];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Lt.DEFAULT_UP=new W(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gt=new W,Jt=new W,sr=new W,jt=new W,Nn=new W,On=new W,qr=new W,ar=new W,or=new W,lr=new W,cr=new ft,ur=new ft,hr=new ft;class kt{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Gt.subVectors(e,t),r.cross(Gt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Gt.subVectors(r,t),Jt.subVectors(n,t),sr.subVectors(e,t);const o=Gt.dot(Gt),l=Gt.dot(Jt),c=Gt.dot(sr),u=Jt.dot(Jt),f=Jt.dot(sr),d=o*u-l*l;if(d===0)return s.set(0,0,0),null;const m=1/d,g=(u*c-l*f)*m,S=(o*f-l*c)*m;return s.set(1-g-S,S,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,jt)===null?!1:jt.x>=0&&jt.y>=0&&jt.x+jt.y<=1}static getInterpolation(e,t,n,r,s,o,l,c){return this.getBarycoord(e,t,n,r,jt)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,jt.x),c.addScaledVector(o,jt.y),c.addScaledVector(l,jt.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return cr.setScalar(0),ur.setScalar(0),hr.setScalar(0),cr.fromBufferAttribute(e,t),ur.fromBufferAttribute(e,n),hr.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(cr,s.x),o.addScaledVector(ur,s.y),o.addScaledVector(hr,s.z),o}static isFrontFacing(e,t,n,r){return Gt.subVectors(n,t),Jt.subVectors(e,t),Gt.cross(Jt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),Jt.subVectors(this.a,this.b),Gt.cross(Jt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return kt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,l;Nn.subVectors(r,n),On.subVectors(s,n),ar.subVectors(e,n);const c=Nn.dot(ar),u=On.dot(ar);if(c<=0&&u<=0)return t.copy(n);or.subVectors(e,r);const f=Nn.dot(or),d=On.dot(or);if(f>=0&&d<=f)return t.copy(r);const m=c*d-f*u;if(m<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(Nn,o);lr.subVectors(e,s);const g=Nn.dot(lr),S=On.dot(lr);if(S>=0&&g<=S)return t.copy(s);const y=g*u-c*S;if(y<=0&&u>=0&&S<=0)return l=u/(u-S),t.copy(n).addScaledVector(On,l);const _=f*S-g*d;if(_<=0&&d-f>=0&&g-S>=0)return qr.subVectors(s,r),l=(d-f)/(d-f+(g-S)),t.copy(r).addScaledVector(qr,l);const p=1/(_+y+m);return o=y*p,l=m*p,t.copy(n).addScaledVector(Nn,o).addScaledVector(On,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cs={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},Ci={h:0,s:0,l:0};function fr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class rt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=je.workingColorSpace){if(e=Rr(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=fr(o,s,e+1/3),this.g=fr(o,s,e),this.b=fr(o,s,e-1/3)}return je.toWorkingColorSpace(this,r),this}setStyle(e,t=It){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],l=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const n=Cs[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nn(e.r),this.g=nn(e.g),this.b=nn(e.b),this}copyLinearToSRGB(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return je.fromWorkingColorSpace(Et.copy(this),e),Math.round(Tt(Et.r*255,0,255))*65536+Math.round(Tt(Et.g*255,0,255))*256+Math.round(Tt(Et.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(Et.copy(this),t);const n=Et.r,r=Et.g,s=Et.b,o=Math.max(n,r,s),l=Math.min(n,r,s);let c,u;const f=(l+o)/2;if(l===o)c=0,u=0;else{const d=o-l;switch(u=f<=.5?d/(o+l):d/(2-o-l),o){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=u,e.l=f,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=It){je.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,n=Et.g,r=Et.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(un),this.setHSL(un.h+e,un.s+t,un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(un),e.getHSL(Ci);const n=oi(un.h,Ci.h,t),r=oi(un.s,Ci.s,t),s=oi(un.l,Ci.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new rt;rt.NAMES=Cs;let Ra=0;class qi extends Yn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ra++}),this.uuid=Zn(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const l in s){const c=s[l];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ws extends qi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const en=Ca();function Ca(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){const u=c-127;u<-27?(n[c]=0,n[c|256]=32768,r[c]=24,r[c|256]=24):u<-14?(n[c]=1024>>-u-14,n[c|256]=1024>>-u-14|32768,r[c]=-u-1,r[c|256]=-u-1):u<=15?(n[c]=u+15<<10,n[c|256]=u+15<<10|32768,r[c]=13,r[c|256]=13):u<128?(n[c]=31744,n[c|256]=64512,r[c]=24,r[c|256]=24):(n[c]=31744,n[c|256]=64512,r[c]=13,r[c|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),l=new Uint32Array(64);for(let c=1;c<1024;++c){let u=c<<13,f=0;for(;(u&8388608)===0;)u<<=1,f-=8388608;u&=-8388609,f+=947912704,s[c]=u|f}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(l[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:l}}function wa(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Tt(i,-65504,65504),en.floatView[0]=i;const e=en.uint32View[0],t=e>>23&511;return en.baseTable[t]+((e&8388607)>>en.shiftTable[t])}function Pa(i){const e=i>>10;return en.uint32View[0]=en.mantissaTable[en.offsetTable[e]+(i&1023)]+en.exponentTable[e],en.floatView[0]}const Yr={toHalfFloat:wa,fromHalfFloat:Pa},dt=new W,wi=new ot;class Wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wi.fromBufferAttribute(this,t),wi.applyMatrix3(e),this.setXY(t,wi.x,wi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}}class Ps extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ds extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class An extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Da=0;const Ut=new pt,dr=new Lt,Bn=new W,Dt=new fi,ii=new fi,xt=new W;class mn extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Da++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ys(e)?Ds:Ps)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,n){return Ut.makeTranslation(e,t,n),this.applyMatrix4(Ut),this}scale(e,t,n){return Ut.makeScale(e,t,n),this.applyMatrix4(Ut),this}lookAt(e){return dr.lookAt(e),dr.updateMatrix(),this.applyMatrix4(dr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bn).negate(),this.translate(Bn.x,Bn.y,Bn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new An(n,3))}else{for(let n=0,r=t.count;n<r;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Dt.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];ii.setFromBufferAttribute(l),this.morphTargetsRelative?(xt.addVectors(Dt.min,ii.min),Dt.expandByPoint(xt),xt.addVectors(Dt.max,ii.max),Dt.expandByPoint(xt)):(Dt.expandByPoint(ii.min),Dt.expandByPoint(ii.max))}Dt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)xt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(xt));if(t)for(let s=0,o=t.length;s<o;s++){const l=t[s],c=this.morphTargetsRelative;for(let u=0,f=l.count;u<f;u++)xt.fromBufferAttribute(l,u),c&&(Bn.fromBufferAttribute(e,u),xt.add(Bn)),r=Math.max(r,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),l=[],c=[];for(let B=0;B<n.count;B++)l[B]=new W,c[B]=new W;const u=new W,f=new W,d=new W,m=new ot,g=new ot,S=new ot,y=new W,_=new W;function p(B,A,E){u.fromBufferAttribute(n,B),f.fromBufferAttribute(n,A),d.fromBufferAttribute(n,E),m.fromBufferAttribute(s,B),g.fromBufferAttribute(s,A),S.fromBufferAttribute(s,E),f.sub(u),d.sub(u),g.sub(m),S.sub(m);const D=1/(g.x*S.y-S.x*g.y);isFinite(D)&&(y.copy(f).multiplyScalar(S.y).addScaledVector(d,-g.y).multiplyScalar(D),_.copy(d).multiplyScalar(g.x).addScaledVector(f,-S.x).multiplyScalar(D),l[B].add(y),l[A].add(y),l[E].add(y),c[B].add(_),c[A].add(_),c[E].add(_))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let B=0,A=P.length;B<A;++B){const E=P[B],D=E.start,$=E.count;for(let q=D,j=D+$;q<j;q+=3)p(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const C=new W,b=new W,X=new W,L=new W;function U(B){X.fromBufferAttribute(r,B),L.copy(X);const A=l[B];C.copy(A),C.sub(X.multiplyScalar(X.dot(A))).normalize(),b.crossVectors(L,A);const D=b.dot(c[B])<0?-1:1;o.setXYZW(B,C.x,C.y,C.z,D)}for(let B=0,A=P.length;B<A;++B){const E=P[B],D=E.start,$=E.count;for(let q=D,j=D+$;q<j;q+=3)U(e.getX(q+0)),U(e.getX(q+1)),U(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);const r=new W,s=new W,o=new W,l=new W,c=new W,u=new W,f=new W,d=new W;if(e)for(let m=0,g=e.count;m<g;m+=3){const S=e.getX(m+0),y=e.getX(m+1),_=e.getX(m+2);r.fromBufferAttribute(t,S),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,_),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,_),l.add(f),c.add(f),u.add(f),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(_,u.x,u.y,u.z)}else for(let m=0,g=t.count;m<g;m+=3)r.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),n.setXYZ(m+0,f.x,f.y,f.z),n.setXYZ(m+1,f.x,f.y,f.z),n.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(l,c){const u=l.array,f=l.itemSize,d=l.normalized,m=new u.constructor(c.length*f);let g=0,S=0;for(let y=0,_=c.length;y<_;y++){l.isInterleavedBufferAttribute?g=c[y]*l.data.stride+l.offset:g=c[y]*f;for(let p=0;p<f;p++)m[S++]=u[g++]}return new Wt(m,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mn,n=this.index.array,r=this.attributes;for(const l in r){const c=r[l],u=e(c,n);t.setAttribute(l,u)}const s=this.morphAttributes;for(const l in s){const c=[],u=s[l];for(let f=0,d=u.length;f<d;f++){const m=u[f],g=e(m,n);c.push(g)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,c=o.length;l<c;l++){const u=o[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],f=[];for(let d=0,m=u.length;d<m;d++){const g=u[d];f.push(g.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(t))}const s=e.morphAttributes;for(const u in s){const f=[],d=s[u];for(let m=0,g=d.length;m<g;m++)f.push(d[m].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zr=new pt,vn=new Sa,Pi=new Cr,Kr=new W,Di=new W,Li=new W,Ui=new W,pr=new W,Ii=new W,$r=new W,Fi=new W;class tn extends Lt{constructor(e=new mn,t=new ws){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){Ii.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const f=l[c],d=s[c];f!==0&&(pr.fromBufferAttribute(d,e),o?Ii.addScaledVector(pr,f):Ii.addScaledVector(pr.sub(t),f))}t.add(Ii)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pi.copy(n.boundingSphere),Pi.applyMatrix4(s),vn.copy(e.ray).recast(e.near),!(Pi.containsPoint(vn.origin)===!1&&(vn.intersectSphere(Pi,Kr)===null||vn.origin.distanceToSquared(Kr)>(e.far-e.near)**2))&&(Zr.copy(s).invert(),vn.copy(e.ray).applyMatrix4(Zr),!(n.boundingBox!==null&&vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,l=s.index,c=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,m=s.groups,g=s.drawRange;if(l!==null)if(Array.isArray(o))for(let S=0,y=m.length;S<y;S++){const _=m[S],p=o[_.materialIndex],P=Math.max(_.start,g.start),C=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let b=P,X=C;b<X;b+=3){const L=l.getX(b),U=l.getX(b+1),B=l.getX(b+2);r=Ni(this,p,e,n,u,f,d,L,U,B),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const S=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let _=S,p=y;_<p;_+=3){const P=l.getX(_),C=l.getX(_+1),b=l.getX(_+2);r=Ni(this,o,e,n,u,f,d,P,C,b),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let S=0,y=m.length;S<y;S++){const _=m[S],p=o[_.materialIndex],P=Math.max(_.start,g.start),C=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let b=P,X=C;b<X;b+=3){const L=b,U=b+1,B=b+2;r=Ni(this,p,e,n,u,f,d,L,U,B),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const S=Math.max(0,g.start),y=Math.min(c.count,g.start+g.count);for(let _=S,p=y;_<p;_+=3){const P=_,C=_+1,b=_+2;r=Ni(this,o,e,n,u,f,d,P,C,b),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function La(i,e,t,n,r,s,o,l){let c;if(e.side===1?c=n.intersectTriangle(o,s,r,!0,l):c=n.intersectTriangle(r,s,o,e.side===0,l),c===null)return null;Fi.copy(l),Fi.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Fi);return u<t.near||u>t.far?null:{distance:u,point:Fi.clone(),object:i}}function Ni(i,e,t,n,r,s,o,l,c,u){i.getVertexPosition(l,Di),i.getVertexPosition(c,Li),i.getVertexPosition(u,Ui);const f=La(i,e,t,n,Di,Li,Ui,$r);if(f){const d=new W;kt.getBarycoord($r,Di,Li,Ui,d),r&&(f.uv=kt.getInterpolatedAttribute(r,l,c,u,d,new ot)),s&&(f.uv1=kt.getInterpolatedAttribute(s,l,c,u,d,new ot)),o&&(f.normal=kt.getInterpolatedAttribute(o,l,c,u,d,new W),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const m={a:l,b:c,c:u,normal:new W,materialIndex:0};kt.getNormal(Di,Li,Ui,m.normal),f.face=m,f.barycoord=d}return f}class di extends mn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const l=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],u=[],f=[],d=[];let m=0,g=0;S("z","y","x",-1,-1,n,t,e,o,s,0),S("z","y","x",1,-1,n,t,-e,o,s,1),S("x","z","y",1,1,e,n,t,r,o,2),S("x","z","y",1,-1,e,n,-t,r,o,3),S("x","y","z",1,-1,e,t,n,r,s,4),S("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new An(u,3)),this.setAttribute("normal",new An(f,3)),this.setAttribute("uv",new An(d,2));function S(y,_,p,P,C,b,X,L,U,B,A){const E=b/U,D=X/B,$=b/2,q=X/2,j=L/2,ae=U+1,J=B+1;let ce=0,K=0;const de=new W;for(let ge=0;ge<J;ge++){const be=ge*D-q;for(let Ie=0;Ie<ae;Ie++){const We=Ie*E-$;de[y]=We*P,de[_]=be*C,de[p]=j,u.push(de.x,de.y,de.z),de[y]=0,de[_]=0,de[p]=L>0?1:-1,f.push(de.x,de.y,de.z),d.push(Ie/U),d.push(1-ge/B),ce+=1}}for(let ge=0;ge<B;ge++)for(let be=0;be<U;be++){const Ie=m+be+ae*ge,We=m+be+ae*(ge+1),Q=m+(be+1)+ae*(ge+1),le=m+(be+1)+ae*ge;c.push(Ie,We,le),c.push(We,Q,le),K+=6}l.addGroup(g,K,A),g+=K,m+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new di(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qn(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function bt(i){const e={};for(let t=0;t<i.length;t++){const n=qn(i[t]);for(const r in n)e[r]=n[r]}return e}function Ua(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ls(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Ia={clone:qn,merge:bt};var Fa=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Na=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends qi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fa,this.fragmentShader=Na,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qn(e.uniforms),this.uniformsGroups=Ua(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Us extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=2e3}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hn=new W,Jr=new ot,jr=new ot;class Vt extends Us{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ci*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ai*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ci*2*Math.atan(Math.tan(ai*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hn.x,hn.y).multiplyScalar(-e/hn.z),hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hn.x,hn.y).multiplyScalar(-e/hn.z)}getViewSize(e,t){return this.getViewBounds(e,Jr,jr),t.subVectors(jr,Jr)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ai*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/u,r*=o.width/c,n*=o.height/u}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gn=-90,zn=1;class Oa extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vt(Gn,zn,e,t);r.layers=this.layers,this.add(r);const s=new Vt(Gn,zn,e,t);s.layers=this.layers,this.add(s);const o=new Vt(Gn,zn,e,t);o.layers=this.layers,this.add(o);const l=new Vt(Gn,zn,e,t);l.layers=this.layers,this.add(l);const c=new Vt(Gn,zn,e,t);c.layers=this.layers,this.add(c);const u=new Vt(Gn,zn,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,l,c]=t;for(const u of t)this.remove(u);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,l,c,u,f]=this.children,d=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,l),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,u),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),e.render(t,f),e.setRenderTarget(d,m,g),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class Is extends St{constructor(e,t,n,r,s,o,l,c,u,f){e=e!==void 0?e:[],t=t!==void 0?t:301,super(e,t,n,r,s,o,l,c,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ba extends bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Is(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new di(5,5,5),s=new pn({name:"CubemapFromEquirect",uniforms:qn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;const o=new tn(r,s),l=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new Oa(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const mr=new W,Ga=new W,za=new He;class En{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=mr.subVectors(n,t).cross(Ga.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(mr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||za.getNormalMatrix(e),r=this.coplanarPoint(mr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xn=new Cr,Oi=new W;class Fs{constructor(e=new En,t=new En,n=new En,r=new En,s=new En,o=new En){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){const n=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],m=r[7],g=r[8],S=r[9],y=r[10],_=r[11],p=r[12],P=r[13],C=r[14],b=r[15];if(n[0].setComponents(c-s,m-u,_-g,b-p).normalize(),n[1].setComponents(c+s,m+u,_+g,b+p).normalize(),n[2].setComponents(c+o,m+f,_+S,b+P).normalize(),n[3].setComponents(c-o,m-f,_-S,b-P).normalize(),n[4].setComponents(c-l,m-d,_-y,b-C).normalize(),t===2e3)n[5].setComponents(c+l,m+d,_+y,b+C).normalize();else if(t===2001)n[5].setComponents(l,d,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xn)}intersectsSprite(e){return xn.center.set(0,0,0),xn.radius=.7071067811865476,xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(xn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Oi.x=r.normal.x>0?e.max.x:e.min.x,Oi.y=r.normal.y>0?e.max.y:e.min.y,Oi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Oi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ns(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ha(i){const e=new WeakMap;function t(l,c){const u=l.array,f=l.usage,d=u.byteLength,m=i.createBuffer();i.bindBuffer(c,m),i.bufferData(c,u,f),l.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function n(l,c,u){const f=c.array,d=c.updateRanges;if(i.bindBuffer(u,l),d.length===0)i.bufferSubData(u,0,f);else{d.sort((g,S)=>g.start-S.start);let m=0;for(let g=1;g<d.length;g++){const S=d[m],y=d[g];y.start<=S.start+S.count+1?S.count=Math.max(S.count,y.start+y.count-S.start):(++m,d[m]=y)}d.length=m+1;for(let g=0,S=d.length;g<S;g++){const y=d[g];i.bufferSubData(u,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(i.deleteBuffer(c.buffer),e.delete(l))}function o(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const f=e.get(l);(!f||f.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const u=e.get(l);if(u===void 0)e.set(l,t(l,c));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,c),u.version=l.version}}return{get:r,remove:s,update:o}}class Yi extends mn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,l=Math.floor(n),c=Math.floor(r),u=l+1,f=c+1,d=e/l,m=t/c,g=[],S=[],y=[],_=[];for(let p=0;p<f;p++){const P=p*m-o;for(let C=0;C<u;C++){const b=C*d-s;S.push(b,-P,0),y.push(0,0,1),_.push(C/l),_.push(1-p/c)}}for(let p=0;p<c;p++)for(let P=0;P<l;P++){const C=P+u*p,b=P+u*(p+1),X=P+1+u*(p+1),L=P+1+u*p;g.push(C,b,L),g.push(b,X,L)}this.setIndex(g),this.setAttribute("position",new An(S,3)),this.setAttribute("normal",new An(y,3)),this.setAttribute("uv",new An(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Va=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ka=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wa=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xa=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qa=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ya=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Za=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ka=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$a=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ja=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ja=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qa=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eo=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,to=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,no=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,io=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ro=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,so=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ao=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oo=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lo=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,co=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uo=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ho=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fo=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,po=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mo=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_o=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,go=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vo=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xo="gl_FragColor = linearToOutputTexel( gl_FragColor );",So=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mo=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Eo=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,To=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yo=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ao=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bo=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ro=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Co=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wo=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Po=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Do=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lo=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uo=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Io=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Fo=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,No=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Oo=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bo=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Go=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zo=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ho=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vo=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ko=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wo=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xo=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qo=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yo=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zo=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ko=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$o=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jo=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jo=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qo=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,el=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tl=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nl=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,il=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rl=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sl=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,al=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ol=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ll=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ul=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hl=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fl=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dl=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pl=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ml=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_l=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gl=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vl=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xl=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sl=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ml=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,El=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tl=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yl=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Al=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bl=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rl=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cl=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wl=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pl=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dl=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ll=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ul=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Il=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fl=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nl=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ol=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hl=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vl=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kl=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xl=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ql=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yl=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zl=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kl=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$l=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jl=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ql=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ec=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tc=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nc=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ic=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rc=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sc=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ac=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,oc=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lc=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cc=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uc=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hc=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fc=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dc=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pc=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mc=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_c=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vc=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xc=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Sc=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:Va,alphahash_pars_fragment:ka,alphamap_fragment:Wa,alphamap_pars_fragment:Xa,alphatest_fragment:qa,alphatest_pars_fragment:Ya,aomap_fragment:Za,aomap_pars_fragment:Ka,batching_pars_vertex:$a,batching_vertex:Ja,begin_vertex:ja,beginnormal_vertex:Qa,bsdfs:eo,iridescence_fragment:to,bumpmap_pars_fragment:no,clipping_planes_fragment:io,clipping_planes_pars_fragment:ro,clipping_planes_pars_vertex:so,clipping_planes_vertex:ao,color_fragment:oo,color_pars_fragment:lo,color_pars_vertex:co,color_vertex:uo,common:ho,cube_uv_reflection_fragment:fo,defaultnormal_vertex:po,displacementmap_pars_vertex:mo,displacementmap_vertex:_o,emissivemap_fragment:go,emissivemap_pars_fragment:vo,colorspace_fragment:xo,colorspace_pars_fragment:So,envmap_fragment:Mo,envmap_common_pars_fragment:Eo,envmap_pars_fragment:To,envmap_pars_vertex:yo,envmap_physical_pars_fragment:Fo,envmap_vertex:Ao,fog_vertex:bo,fog_pars_vertex:Ro,fog_fragment:Co,fog_pars_fragment:wo,gradientmap_pars_fragment:Po,lightmap_pars_fragment:Do,lights_lambert_fragment:Lo,lights_lambert_pars_fragment:Uo,lights_pars_begin:Io,lights_toon_fragment:No,lights_toon_pars_fragment:Oo,lights_phong_fragment:Bo,lights_phong_pars_fragment:Go,lights_physical_fragment:zo,lights_physical_pars_fragment:Ho,lights_fragment_begin:Vo,lights_fragment_maps:ko,lights_fragment_end:Wo,logdepthbuf_fragment:Xo,logdepthbuf_pars_fragment:qo,logdepthbuf_pars_vertex:Yo,logdepthbuf_vertex:Zo,map_fragment:Ko,map_pars_fragment:$o,map_particle_fragment:Jo,map_particle_pars_fragment:jo,metalnessmap_fragment:Qo,metalnessmap_pars_fragment:el,morphinstance_vertex:tl,morphcolor_vertex:nl,morphnormal_vertex:il,morphtarget_pars_vertex:rl,morphtarget_vertex:sl,normal_fragment_begin:al,normal_fragment_maps:ol,normal_pars_fragment:ll,normal_pars_vertex:cl,normal_vertex:ul,normalmap_pars_fragment:hl,clearcoat_normal_fragment_begin:fl,clearcoat_normal_fragment_maps:dl,clearcoat_pars_fragment:pl,iridescence_pars_fragment:ml,opaque_fragment:_l,packing:gl,premultiplied_alpha_fragment:vl,project_vertex:xl,dithering_fragment:Sl,dithering_pars_fragment:Ml,roughnessmap_fragment:El,roughnessmap_pars_fragment:Tl,shadowmap_pars_fragment:yl,shadowmap_pars_vertex:Al,shadowmap_vertex:bl,shadowmask_pars_fragment:Rl,skinbase_vertex:Cl,skinning_pars_vertex:wl,skinning_vertex:Pl,skinnormal_vertex:Dl,specularmap_fragment:Ll,specularmap_pars_fragment:Ul,tonemapping_fragment:Il,tonemapping_pars_fragment:Fl,transmission_fragment:Nl,transmission_pars_fragment:Ol,uv_pars_fragment:Bl,uv_pars_vertex:Gl,uv_vertex:zl,worldpos_vertex:Hl,background_vert:Vl,background_frag:kl,backgroundCube_vert:Wl,backgroundCube_frag:Xl,cube_vert:ql,cube_frag:Yl,depth_vert:Zl,depth_frag:Kl,distanceRGBA_vert:$l,distanceRGBA_frag:Jl,equirect_vert:jl,equirect_frag:Ql,linedashed_vert:ec,linedashed_frag:tc,meshbasic_vert:nc,meshbasic_frag:ic,meshlambert_vert:rc,meshlambert_frag:sc,meshmatcap_vert:ac,meshmatcap_frag:oc,meshnormal_vert:lc,meshnormal_frag:cc,meshphong_vert:uc,meshphong_frag:hc,meshphysical_vert:fc,meshphysical_frag:dc,meshtoon_vert:pc,meshtoon_frag:mc,points_vert:_c,points_frag:gc,shadow_vert:vc,shadow_frag:xc,sprite_vert:Sc,sprite_frag:Mc},ve={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Xt={basic:{uniforms:bt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:bt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:bt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:bt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:bt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:bt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:bt([ve.points,ve.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:bt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:bt([ve.common,ve.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:bt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:bt([ve.sprite,ve.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:bt([ve.common,ve.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:bt([ve.lights,ve.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Xt.physical={uniforms:bt([Xt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Bi={r:0,b:0,g:0},Sn=new rn,Ec=new pt;function Tc(i,e,t,n,r,s,o){const l=new rt(0);let c=s===!0?0:1,u,f,d=null,m=0,g=null;function S(P){let C=P.isScene===!0?P.background:null;return C&&C.isTexture&&(C=(P.backgroundBlurriness>0?t:e).get(C)),C}function y(P){let C=!1;const b=S(P);b===null?p(l,c):b&&b.isColor&&(p(b,1),C=!0);const X=i.xr.getEnvironmentBlendMode();X==="additive"?n.buffers.color.setClear(0,0,0,1,o):X==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||C)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(P,C){const b=S(C);b&&(b.isCubeTexture||b.mapping===306)?(f===void 0&&(f=new tn(new di(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:qn(Xt.backgroundCube.uniforms),vertexShader:Xt.backgroundCube.vertexShader,fragmentShader:Xt.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(X,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Sn.copy(C.backgroundRotation),Sn.x*=-1,Sn.y*=-1,Sn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Sn.y*=-1,Sn.z*=-1),f.material.uniforms.envMap.value=b,f.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Ec.makeRotationFromEuler(Sn)),f.material.toneMapped=je.getTransfer(b.colorSpace)!==it,(d!==b||m!==b.version||g!==i.toneMapping)&&(f.material.needsUpdate=!0,d=b,m=b.version,g=i.toneMapping),f.layers.enableAll(),P.unshift(f,f.geometry,f.material,0,0,null)):b&&b.isTexture&&(u===void 0&&(u=new tn(new Yi(2,2),new pn({name:"BackgroundMaterial",uniforms:qn(Xt.background.uniforms),vertexShader:Xt.background.vertexShader,fragmentShader:Xt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=b,u.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,u.material.toneMapped=je.getTransfer(b.colorSpace)!==it,b.matrixAutoUpdate===!0&&b.updateMatrix(),u.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||m!==b.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,d=b,m=b.version,g=i.toneMapping),u.layers.enableAll(),P.unshift(u,u.geometry,u.material,0,0,null))}function p(P,C){P.getRGB(Bi,Ls(i)),n.buffers.color.setClear(Bi.r,Bi.g,Bi.b,C,o)}return{getClearColor:function(){return l},setClearColor:function(P,C=1){l.set(P),c=C,p(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(P){c=P,p(l,c)},render:y,addToRenderList:_}}function yc(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=m(null);let s=r,o=!1;function l(E,D,$,q,j){let ae=!1;const J=d(q,$,D);s!==J&&(s=J,u(s.object)),ae=g(E,q,$,j),ae&&S(E,q,$,j),j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,b(E,D,$,q),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return i.createVertexArray()}function u(E){return i.bindVertexArray(E)}function f(E){return i.deleteVertexArray(E)}function d(E,D,$){const q=$.wireframe===!0;let j=n[E.id];j===void 0&&(j={},n[E.id]=j);let ae=j[D.id];ae===void 0&&(ae={},j[D.id]=ae);let J=ae[q];return J===void 0&&(J=m(c()),ae[q]=J),J}function m(E){const D=[],$=[],q=[];for(let j=0;j<t;j++)D[j]=0,$[j]=0,q[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:$,attributeDivisors:q,object:E,attributes:{},index:null}}function g(E,D,$,q){const j=s.attributes,ae=D.attributes;let J=0;const ce=$.getAttributes();for(const K in ce)if(ce[K].location>=0){const ge=j[K];let be=ae[K];if(be===void 0&&(K==="instanceMatrix"&&E.instanceMatrix&&(be=E.instanceMatrix),K==="instanceColor"&&E.instanceColor&&(be=E.instanceColor)),ge===void 0||ge.attribute!==be||be&&ge.data!==be.data)return!0;J++}return s.attributesNum!==J||s.index!==q}function S(E,D,$,q){const j={},ae=D.attributes;let J=0;const ce=$.getAttributes();for(const K in ce)if(ce[K].location>=0){let ge=ae[K];ge===void 0&&(K==="instanceMatrix"&&E.instanceMatrix&&(ge=E.instanceMatrix),K==="instanceColor"&&E.instanceColor&&(ge=E.instanceColor));const be={};be.attribute=ge,ge&&ge.data&&(be.data=ge.data),j[K]=be,J++}s.attributes=j,s.attributesNum=J,s.index=q}function y(){const E=s.newAttributes;for(let D=0,$=E.length;D<$;D++)E[D]=0}function _(E){p(E,0)}function p(E,D){const $=s.newAttributes,q=s.enabledAttributes,j=s.attributeDivisors;$[E]=1,q[E]===0&&(i.enableVertexAttribArray(E),q[E]=1),j[E]!==D&&(i.vertexAttribDivisor(E,D),j[E]=D)}function P(){const E=s.newAttributes,D=s.enabledAttributes;for(let $=0,q=D.length;$<q;$++)D[$]!==E[$]&&(i.disableVertexAttribArray($),D[$]=0)}function C(E,D,$,q,j,ae,J){J===!0?i.vertexAttribIPointer(E,D,$,j,ae):i.vertexAttribPointer(E,D,$,q,j,ae)}function b(E,D,$,q){y();const j=q.attributes,ae=$.getAttributes(),J=D.defaultAttributeValues;for(const ce in ae){const K=ae[ce];if(K.location>=0){let de=j[ce];if(de===void 0&&(ce==="instanceMatrix"&&E.instanceMatrix&&(de=E.instanceMatrix),ce==="instanceColor"&&E.instanceColor&&(de=E.instanceColor)),de!==void 0){const ge=de.normalized,be=de.itemSize,Ie=e.get(de);if(Ie===void 0)continue;const We=Ie.buffer,Q=Ie.type,le=Ie.bytesPerElement,fe=Q===i.INT||Q===i.UNSIGNED_INT||de.gpuType===1013;if(de.isInterleavedBufferAttribute){const pe=de.data,we=pe.stride,Fe=de.offset;if(pe.isInstancedInterleavedBuffer){for(let ze=0;ze<K.locationSize;ze++)p(K.location+ze,pe.meshPerAttribute);E.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ze=0;ze<K.locationSize;ze++)_(K.location+ze);i.bindBuffer(i.ARRAY_BUFFER,We);for(let ze=0;ze<K.locationSize;ze++)C(K.location+ze,be/K.locationSize,Q,ge,we*le,(Fe+be/K.locationSize*ze)*le,fe)}else{if(de.isInstancedBufferAttribute){for(let pe=0;pe<K.locationSize;pe++)p(K.location+pe,de.meshPerAttribute);E.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let pe=0;pe<K.locationSize;pe++)_(K.location+pe);i.bindBuffer(i.ARRAY_BUFFER,We);for(let pe=0;pe<K.locationSize;pe++)C(K.location+pe,be/K.locationSize,Q,ge,be*le,be/K.locationSize*pe*le,fe)}}else if(J!==void 0){const ge=J[ce];if(ge!==void 0)switch(ge.length){case 2:i.vertexAttrib2fv(K.location,ge);break;case 3:i.vertexAttrib3fv(K.location,ge);break;case 4:i.vertexAttrib4fv(K.location,ge);break;default:i.vertexAttrib1fv(K.location,ge)}}}}P()}function X(){B();for(const E in n){const D=n[E];for(const $ in D){const q=D[$];for(const j in q)f(q[j].object),delete q[j];delete D[$]}delete n[E]}}function L(E){if(n[E.id]===void 0)return;const D=n[E.id];for(const $ in D){const q=D[$];for(const j in q)f(q[j].object),delete q[j];delete D[$]}delete n[E.id]}function U(E){for(const D in n){const $=n[D];if($[E.id]===void 0)continue;const q=$[E.id];for(const j in q)f(q[j].object),delete q[j];delete $[E.id]}}function B(){A(),o=!0,s!==r&&(s=r,u(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:B,resetDefaultState:A,dispose:X,releaseStatesOfGeometry:L,releaseStatesOfProgram:U,initAttributes:y,enableAttribute:_,disableUnusedAttributes:P}}function Ac(i,e,t){let n;function r(u){n=u}function s(u,f){i.drawArrays(n,u,f),t.update(f,n,1)}function o(u,f,d){d!==0&&(i.drawArraysInstanced(n,u,f,d),t.update(f,n,d))}function l(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,f,0,d);let g=0;for(let S=0;S<d;S++)g+=f[S];t.update(g,n,1)}function c(u,f,d,m){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let S=0;S<u.length;S++)o(u[S],f[S],m[S]);else{g.multiDrawArraysInstancedWEBGL(n,u,0,f,0,m,0,d);let S=0;for(let y=0;y<d;y++)S+=f[y]*m[y];t.update(S,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function bc(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(U){return!(U!==1023&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(U){const B=U===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==1009&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==1015&&!B)}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const f=c(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const d=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),P=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),X=S>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:d,reverseDepthBuffer:m,maxTextures:g,maxVertexTextures:S,maxTextureSize:y,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:P,maxVaryings:C,maxFragmentUniforms:b,vertexTextures:X,maxSamples:L}}function Rc(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new En,l=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,m){const g=d.length!==0||m||n!==0||r;return r=m,n=d.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,m){t=f(d,m,0)},this.setState=function(d,m,g){const S=d.clippingPlanes,y=d.clipIntersection,_=d.clipShadows,p=i.get(d);if(!r||S===null||S.length===0||s&&!_)s?f(null):u();else{const P=s?0:n,C=P*4;let b=p.clippingState||null;c.value=b,b=f(S,m,C,g);for(let X=0;X!==C;++X)b[X]=t[X];p.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=P}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(d,m,g,S){const y=d!==null?d.length:0;let _=null;if(y!==0){if(_=c.value,S!==!0||_===null){const p=g+y*4,P=m.matrixWorldInverse;l.getNormalMatrix(P),(_===null||_.length<p)&&(_=new Float32Array(p));for(let C=0,b=g;C!==y;++C,b+=4)o.copy(d[C]).applyMatrix4(P,l),o.normal.toArray(_,b),_[b+3]=o.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,_}}function Cc(i){let e=new WeakMap;function t(o,l){return l===303?o.mapping=301:l===304&&(o.mapping=302),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===303||l===304)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new Ba(c.height);return u.fromEquirectangularTexture(i,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class wc extends Us{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,l=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,l-=f*this.view.offsetY,c=l-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const kn=4,Qr=[.125,.215,.35,.446,.526,.582],yn=20,_r=new wc,es=new rt;let gr=null,vr=0,xr=0,Sr=!1;const Tn=(1+Math.sqrt(5))/2,Hn=1/Tn,ts=[new W(-Tn,Hn,0),new W(Tn,Hn,0),new W(-Hn,0,Tn),new W(Hn,0,Tn),new W(0,Tn,-Hn),new W(0,Tn,Hn),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class ns{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){gr=this._renderer.getRenderTarget(),vr=this._renderer.getActiveCubeFace(),xr=this._renderer.getActiveMipmapLevel(),Sr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ss(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gr,vr,xr),this._renderer.xr.enabled=Sr,e.scissorTest=!1,Gi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gr=this._renderer.getRenderTarget(),vr=this._renderer.getActiveCubeFace(),xr=this._renderer.getActiveMipmapLevel(),Sr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:dn,depthBuffer:!1},r=is(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=is(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pc(s)),this._blurMaterial=Dc(s,e,t)}return r}_compileMaterial(e){const t=new tn(this._lodPlanes[0],e);this._renderer.compile(t,_r)}_sceneToCubeUV(e,t,n,r){const l=new Vt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(es),f.toneMapping=0,f.autoClear=!1;const g=new ws({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),S=new tn(new di,g);let y=!1;const _=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,y=!0):(g.color.copy(es),y=!0);for(let p=0;p<6;p++){const P=p%3;P===0?(l.up.set(0,c[p],0),l.lookAt(u[p],0,0)):P===1?(l.up.set(0,0,c[p]),l.lookAt(0,u[p],0)):(l.up.set(0,c[p],0),l.lookAt(0,0,u[p]));const C=this._cubeSize;Gi(r,P*C,p>2?C:0,C,C),f.setRenderTarget(r),y&&f.render(S,l),f.render(e,l)}S.geometry.dispose(),S.material.dispose(),f.toneMapping=m,f.autoClear=d,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ss()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rs());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new tn(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const c=this._cubeSize;Gi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,_r)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=ts[(r-s-1)%ts.length];this._blur(e,s-1,s,o,l)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,l){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new tn(this._lodPlanes[r],u),m=u.uniforms,g=this._sizeLods[n]-1,S=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*yn-1),y=s/S,_=isFinite(s)?1+Math.floor(f*y):yn;_>yn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${yn}`);const p=[];let P=0;for(let U=0;U<yn;++U){const B=U/y,A=Math.exp(-B*B/2);p.push(A),U===0?P+=A:U<_&&(P+=2*A)}for(let U=0;U<p.length;U++)p[U]=p[U]/P;m.envMap.value=e.texture,m.samples.value=_,m.weights.value=p,m.latitudinal.value=o==="latitudinal",l&&(m.poleAxis.value=l);const{_lodMax:C}=this;m.dTheta.value=S,m.mipInt.value=C-n;const b=this._sizeLods[r],X=3*b*(r>C-kn?r-C+kn:0),L=4*(this._cubeSize-b);Gi(t,X,L,3*b,2*b),c.setRenderTarget(t),c.render(d,_r)}}function Pc(i){const e=[],t=[],n=[];let r=i;const s=i-kn+1+Qr.length;for(let o=0;o<s;o++){const l=Math.pow(2,r);t.push(l);let c=1/l;o>i-kn?c=Qr[o-i+kn-1]:o===0&&(c=0),n.push(c);const u=1/(l-2),f=-u,d=1+u,m=[f,f,d,f,d,d,f,f,d,d,f,d],g=6,S=6,y=3,_=2,p=1,P=new Float32Array(y*S*g),C=new Float32Array(_*S*g),b=new Float32Array(p*S*g);for(let L=0;L<g;L++){const U=L%3*2/3-1,B=L>2?0:-1,A=[U,B,0,U+2/3,B,0,U+2/3,B+1,0,U,B,0,U+2/3,B+1,0,U,B+1,0];P.set(A,y*S*L),C.set(m,_*S*L);const E=[L,L,L,L,L,L];b.set(E,p*S*L)}const X=new mn;X.setAttribute("position",new Wt(P,y)),X.setAttribute("uv",new Wt(C,_)),X.setAttribute("faceIndex",new Wt(b,p)),e.push(X),r>kn&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function is(i,e,t){const n=new bn(i,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Dc(i,e,t){const n=new Float32Array(yn),r=new W(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function rs(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ss(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function wr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Lc(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const c=l.mapping,u=c===303||c===304,f=c===301||c===302;if(u||f){let d=e.get(l);const m=d!==void 0?d.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==m)return t===null&&(t=new ns(i)),d=u?t.fromEquirectangular(l,d):t.fromCubemap(l,d),d.texture.pmremVersion=l.pmremVersion,e.set(l,d),d.texture;if(d!==void 0)return d.texture;{const g=l.image;return u&&g&&g.height>0||f&&g&&r(g)?(t===null&&(t=new ns(i)),d=u?t.fromEquirectangular(l):t.fromCubemap(l),d.texture.pmremVersion=l.pmremVersion,e.set(l,d),l.addEventListener("dispose",s),d.texture):null}}}return l}function r(l){let c=0;const u=6;for(let f=0;f<u;f++)l[f]!==void 0&&c++;return c===u}function s(l){const c=l.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Uc(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ri("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Ic(i,e,t,n){const r={},s=new WeakMap;function o(d){const m=d.target;m.index!==null&&e.remove(m.index);for(const S in m.attributes)e.remove(m.attributes[S]);for(const S in m.morphAttributes){const y=m.morphAttributes[S];for(let _=0,p=y.length;_<p;_++)e.remove(y[_])}m.removeEventListener("dispose",o),delete r[m.id];const g=s.get(m);g&&(e.remove(g),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(d,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,t.memory.geometries++),m}function c(d){const m=d.attributes;for(const S in m)e.update(m[S],i.ARRAY_BUFFER);const g=d.morphAttributes;for(const S in g){const y=g[S];for(let _=0,p=y.length;_<p;_++)e.update(y[_],i.ARRAY_BUFFER)}}function u(d){const m=[],g=d.index,S=d.attributes.position;let y=0;if(g!==null){const P=g.array;y=g.version;for(let C=0,b=P.length;C<b;C+=3){const X=P[C+0],L=P[C+1],U=P[C+2];m.push(X,L,L,U,U,X)}}else if(S!==void 0){const P=S.array;y=S.version;for(let C=0,b=P.length/3-1;C<b;C+=3){const X=C+0,L=C+1,U=C+2;m.push(X,L,L,U,U,X)}}else return;const _=new(ys(m)?Ds:Ps)(m,1);_.version=y;const p=s.get(d);p&&e.remove(p),s.set(d,_)}function f(d){const m=s.get(d);if(m){const g=d.index;g!==null&&m.version<g.version&&u(d)}else u(d);return s.get(d)}return{get:l,update:c,getWireframeAttribute:f}}function Fc(i,e,t){let n;function r(m){n=m}let s,o;function l(m){s=m.type,o=m.bytesPerElement}function c(m,g){i.drawElements(n,g,s,m*o),t.update(g,n,1)}function u(m,g,S){S!==0&&(i.drawElementsInstanced(n,g,s,m*o,S),t.update(g,n,S))}function f(m,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,s,m,0,S);let _=0;for(let p=0;p<S;p++)_+=g[p];t.update(_,n,1)}function d(m,g,S,y){if(S===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<m.length;p++)u(m[p]/o,g[p],y[p]);else{_.multiDrawElementsInstancedWEBGL(n,g,0,s,m,0,y,0,S);let p=0;for(let P=0;P<S;P++)p+=g[P]*y[P];t.update(p,n,1)}}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function Nc(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,l){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=l*(s/3);break;case i.LINES:t.lines+=l*(s/2);break;case i.LINE_STRIP:t.lines+=l*(s-1);break;case i.LINE_LOOP:t.lines+=l*s;break;case i.POINTS:t.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Oc(i,e,t){const n=new WeakMap,r=new ft;function s(o,l,c){const u=o.morphTargetInfluences,f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=f!==void 0?f.length:0;let m=n.get(l);if(m===void 0||m.count!==d){let A=function(){U.dispose(),n.delete(l),l.removeEventListener("dispose",A)};m!==void 0&&m.texture.dispose();const g=l.morphAttributes.position!==void 0,S=l.morphAttributes.normal!==void 0,y=l.morphAttributes.color!==void 0,_=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],P=l.morphAttributes.color||[];let C=0;g===!0&&(C=1),S===!0&&(C=2),y===!0&&(C=3);let b=l.attributes.position.count*C,X=1;b>e.maxTextureSize&&(X=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const L=new Float32Array(b*X*4*d),U=new bs(L,b,X,d);U.type=1015,U.needsUpdate=!0;const B=C*4;for(let E=0;E<d;E++){const D=_[E],$=p[E],q=P[E],j=b*X*4*E;for(let ae=0;ae<D.count;ae++){const J=ae*B;g===!0&&(r.fromBufferAttribute(D,ae),L[j+J+0]=r.x,L[j+J+1]=r.y,L[j+J+2]=r.z,L[j+J+3]=0),S===!0&&(r.fromBufferAttribute($,ae),L[j+J+4]=r.x,L[j+J+5]=r.y,L[j+J+6]=r.z,L[j+J+7]=0),y===!0&&(r.fromBufferAttribute(q,ae),L[j+J+8]=r.x,L[j+J+9]=r.y,L[j+J+10]=r.z,L[j+J+11]=q.itemSize===4?r.w:1)}}m={count:d,texture:U,size:new ot(b,X)},n.set(l,m),l.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let y=0;y<u.length;y++)g+=u[y];const S=l.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",S),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:s}}function Bc(i,e,t,n){let r=new WeakMap;function s(c){const u=n.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return d}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class Os extends St{constructor(e,t,n,r,s,o,l,c,u,f=1026){if(f!==1026&&f!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===1026&&(n=1014),n===void 0&&f===1027&&(n=1020),super(null,r,s,o,l,c,f,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:1003,this.minFilter=c!==void 0?c:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Bs=new St,as=new Os(1,1),Gs=new bs,zs=new va,Hs=new Is,os=[],ls=[],cs=new Float32Array(16),us=new Float32Array(9),hs=new Float32Array(4);function Kn(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=os[r];if(s===void 0&&(s=new Float32Array(r),os[r]=s),e!==0){n.toArray(s,0);for(let o=1,l=0;o!==e;++o)l+=t,i[o].toArray(s,l)}return s}function mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Zi(i,e){let t=ls[e];t===void 0&&(t=new Int32Array(e),ls[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Gc(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function zc(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2fv(this.addr,e),_t(t,e)}}function Hc(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;i.uniform3fv(this.addr,e),_t(t,e)}}function Vc(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4fv(this.addr,e),_t(t,e)}}function kc(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,n))return;hs.set(n),i.uniformMatrix2fv(this.addr,!1,hs),_t(t,n)}}function Wc(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,n))return;us.set(n),i.uniformMatrix3fv(this.addr,!1,us),_t(t,n)}}function Xc(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,n))return;cs.set(n),i.uniformMatrix4fv(this.addr,!1,cs),_t(t,n)}}function qc(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Yc(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2iv(this.addr,e),_t(t,e)}}function Zc(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3iv(this.addr,e),_t(t,e)}}function Kc(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4iv(this.addr,e),_t(t,e)}}function $c(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Jc(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2uiv(this.addr,e),_t(t,e)}}function jc(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3uiv(this.addr,e),_t(t,e)}}function Qc(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4uiv(this.addr,e),_t(t,e)}}function eu(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(as.compareFunction=515,s=as):s=Bs,t.setTexture2D(e||s,r)}function tu(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||zs,r)}function nu(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Hs,r)}function iu(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Gs,r)}function ru(i){switch(i){case 5126:return Gc;case 35664:return zc;case 35665:return Hc;case 35666:return Vc;case 35674:return kc;case 35675:return Wc;case 35676:return Xc;case 5124:case 35670:return qc;case 35667:case 35671:return Yc;case 35668:case 35672:return Zc;case 35669:case 35673:return Kc;case 5125:return $c;case 36294:return Jc;case 36295:return jc;case 36296:return Qc;case 35678:case 36198:case 36298:case 36306:case 35682:return eu;case 35679:case 36299:case 36307:return tu;case 35680:case 36300:case 36308:case 36293:return nu;case 36289:case 36303:case 36311:case 36292:return iu}}function su(i,e){i.uniform1fv(this.addr,e)}function au(i,e){const t=Kn(e,this.size,2);i.uniform2fv(this.addr,t)}function ou(i,e){const t=Kn(e,this.size,3);i.uniform3fv(this.addr,t)}function lu(i,e){const t=Kn(e,this.size,4);i.uniform4fv(this.addr,t)}function cu(i,e){const t=Kn(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function uu(i,e){const t=Kn(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function hu(i,e){const t=Kn(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function fu(i,e){i.uniform1iv(this.addr,e)}function du(i,e){i.uniform2iv(this.addr,e)}function pu(i,e){i.uniform3iv(this.addr,e)}function mu(i,e){i.uniform4iv(this.addr,e)}function _u(i,e){i.uniform1uiv(this.addr,e)}function gu(i,e){i.uniform2uiv(this.addr,e)}function vu(i,e){i.uniform3uiv(this.addr,e)}function xu(i,e){i.uniform4uiv(this.addr,e)}function Su(i,e,t){const n=this.cache,r=e.length,s=Zi(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Bs,s[o])}function Mu(i,e,t){const n=this.cache,r=e.length,s=Zi(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||zs,s[o])}function Eu(i,e,t){const n=this.cache,r=e.length,s=Zi(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Hs,s[o])}function Tu(i,e,t){const n=this.cache,r=e.length,s=Zi(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Gs,s[o])}function yu(i){switch(i){case 5126:return su;case 35664:return au;case 35665:return ou;case 35666:return lu;case 35674:return cu;case 35675:return uu;case 35676:return hu;case 5124:case 35670:return fu;case 35667:case 35671:return du;case 35668:case 35672:return pu;case 35669:case 35673:return mu;case 5125:return _u;case 36294:return gu;case 36295:return vu;case 36296:return xu;case 35678:case 36198:case 36298:case 36306:case 35682:return Su;case 35679:case 36299:case 36307:return Mu;case 35680:case 36300:case 36308:case 36293:return Eu;case 36289:case 36303:case 36311:case 36292:return Tu}}class Au{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ru(t.type)}}class bu{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yu(t.type)}}class Ru{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const l=r[s];l.setValue(e,t[l.id],n)}}}const Mr=/(\w+)(\])?(\[|\.)?/g;function fs(i,e){i.seq.push(e),i.map[e.id]=e}function Cu(i,e,t){const n=i.name,r=n.length;for(Mr.lastIndex=0;;){const s=Mr.exec(n),o=Mr.lastIndex;let l=s[1];const c=s[2]==="]",u=s[3];if(c&&(l=l|0),u===void 0||u==="["&&o+2===r){fs(t,u===void 0?new Au(l,i,e):new bu(l,i,e));break}else{let d=t.map[l];d===void 0&&(d=new Ru(l),fs(t,d)),t=d}}}class ki{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Cu(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const l=t[s],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function ds(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const wu=37297;let Pu=0;function Du(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}const ps=new He;function Lu(i){je._getMatrix(ps,je.workingColorSpace,i);const e=`mat3( ${ps.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case Xi:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ms(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Du(i.getShaderSource(e),o)}else return r}function Uu(i,e){const t=Lu(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Iu(i,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const zi=new W;function Fu(){je.getLuminanceCoefficients(zi);const i=zi.x.toFixed(4),e=zi.y.toFixed(4),t=zi.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nu(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(si).join(`
`)}function Ou(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Bu(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let l=1;s.type===i.FLOAT_MAT2&&(l=2),s.type===i.FLOAT_MAT3&&(l=3),s.type===i.FLOAT_MAT4&&(l=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:l}}return t}function si(i){return i!==""}function _s(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gs(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gu=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ar(i){return i.replace(Gu,Hu)}const zu=new Map;function Hu(i,e){let t=Ve[e];if(t===void 0){const n=zu.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ar(t)}const Vu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vs(i){return i.replace(Vu,ku)}function ku(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xs(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Wu(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function Xu(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qu(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function Yu(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function Zu(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ku(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,l=t.fragmentShader;const c=Wu(t),u=Xu(t),f=qu(t),d=Yu(t),m=Zu(t),g=Nu(t),S=Ou(s),y=r.createProgram();let _,p,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(si).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(si).join(`
`),p.length>0&&(p+=`
`)):(_=[xs(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(si).join(`
`),p=[xs(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Ve.tonemapping_pars_fragment:"",t.toneMapping!==0?Iu("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Uu("linearToOutputTexel",t.outputColorSpace),Fu(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(si).join(`
`)),o=Ar(o),o=_s(o,t),o=gs(o,t),l=Ar(l),l=_s(l,t),l=gs(l,t),o=vs(o),l=vs(l),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,_=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===Pr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const C=P+_+o,b=P+p+l,X=ds(r,r.VERTEX_SHADER,C),L=ds(r,r.FRAGMENT_SHADER,b);r.attachShader(y,X),r.attachShader(y,L),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function U(D){if(i.debug.checkShaderErrors){const $=r.getProgramInfoLog(y).trim(),q=r.getShaderInfoLog(X).trim(),j=r.getShaderInfoLog(L).trim();let ae=!0,J=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(ae=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,X,L);else{const ce=ms(r,X,"vertex"),K=ms(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+$+`
`+ce+`
`+K)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(q===""||j==="")&&(J=!1);J&&(D.diagnostics={runnable:ae,programLog:$,vertexShader:{log:q,prefix:_},fragmentShader:{log:j,prefix:p}})}r.deleteShader(X),r.deleteShader(L),B=new ki(r,y),A=Bu(r,y)}let B;this.getUniforms=function(){return B===void 0&&U(this),B};let A;this.getAttributes=function(){return A===void 0&&U(this),A};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(y,wu)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pu++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=X,this.fragmentShader=L,this}let $u=0;class Ju{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ju(e),t.set(e,n)),n}}class ju{constructor(e){this.id=$u++,this.code=e,this.usedTimes=0}}function Qu(i,e,t,n,r,s,o){const l=new Rs,c=new Ju,u=new Set,f=[],d=r.logarithmicDepthBuffer,m=r.vertexTextures;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(A){return u.add(A),A===0?"uv":`uv${A}`}function _(A,E,D,$,q){const j=$.fog,ae=q.geometry,J=A.isMeshStandardMaterial?$.environment:null,ce=(A.isMeshStandardMaterial?t:e).get(A.envMap||J),K=ce&&ce.mapping===306?ce.image.height:null,de=S[A.type];A.precision!==null&&(g=r.getMaxPrecision(A.precision),g!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));const ge=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,be=ge!==void 0?ge.length:0;let Ie=0;ae.morphAttributes.position!==void 0&&(Ie=1),ae.morphAttributes.normal!==void 0&&(Ie=2),ae.morphAttributes.color!==void 0&&(Ie=3);let We,Q,le,fe;if(de){const et=Xt[de];We=et.vertexShader,Q=et.fragmentShader}else We=A.vertexShader,Q=A.fragmentShader,c.update(A),le=c.getVertexShaderID(A),fe=c.getFragmentShaderID(A);const pe=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),Fe=q.isInstancedMesh===!0,ze=q.isBatchedMesh===!0,tt=!!A.map,Xe=!!A.matcap,st=!!ce,F=!!A.aoMap,yt=!!A.lightMap,Ze=!!A.bumpMap,Ke=!!A.normalMap,Ue=!!A.displacementMap,at=!!A.emissiveMap,Le=!!A.metalnessMap,R=!!A.roughnessMap,x=A.anisotropy>0,G=A.clearcoat>0,te=A.dispersion>0,ie=A.iridescence>0,ee=A.sheen>0,Re=A.transmission>0,xe=x&&!!A.anisotropyMap,Ee=G&&!!A.clearcoatMap,$e=G&&!!A.clearcoatNormalMap,he=G&&!!A.clearcoatRoughnessMap,ye=ie&&!!A.iridescenceMap,Ae=ie&&!!A.iridescenceThicknessMap,Ce=ee&&!!A.sheenColorMap,Te=ee&&!!A.sheenRoughnessMap,Oe=!!A.specularMap,Pe=!!A.specularColorMap,Be=!!A.specularIntensityMap,I=Re&&!!A.transmissionMap,k=Re&&!!A.thicknessMap,Y=!!A.gradientMap,ne=!!A.alphaMap,Me=A.alphaTest>0,Se=!!A.alphaHash,Ge=!!A.extensions;let ht=0;A.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ht=i.toneMapping);const gt={shaderID:de,shaderType:A.type,shaderName:A.name,vertexShader:We,fragmentShader:Q,defines:A.defines,customVertexShaderID:le,customFragmentShaderID:fe,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,batching:ze,batchingColor:ze&&q._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&q.instanceColor!==null,instancingMorph:Fe&&q.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:dn,alphaToCoverage:!!A.alphaToCoverage,map:tt,matcap:Xe,envMap:st,envMapMode:st&&ce.mapping,envMapCubeUVHeight:K,aoMap:F,lightMap:yt,bumpMap:Ze,normalMap:Ke,displacementMap:m&&Ue,emissiveMap:at,normalMapObjectSpace:Ke&&A.normalMapType===1,normalMapTangentSpace:Ke&&A.normalMapType===0,metalnessMap:Le,roughnessMap:R,anisotropy:x,anisotropyMap:xe,clearcoat:G,clearcoatMap:Ee,clearcoatNormalMap:$e,clearcoatRoughnessMap:he,dispersion:te,iridescence:ie,iridescenceMap:ye,iridescenceThicknessMap:Ae,sheen:ee,sheenColorMap:Ce,sheenRoughnessMap:Te,specularMap:Oe,specularColorMap:Pe,specularIntensityMap:Be,transmission:Re,transmissionMap:I,thicknessMap:k,gradientMap:Y,opaque:A.transparent===!1&&A.blending===1&&A.alphaToCoverage===!1,alphaMap:ne,alphaTest:Me,alphaHash:Se,combine:A.combine,mapUv:tt&&y(A.map.channel),aoMapUv:F&&y(A.aoMap.channel),lightMapUv:yt&&y(A.lightMap.channel),bumpMapUv:Ze&&y(A.bumpMap.channel),normalMapUv:Ke&&y(A.normalMap.channel),displacementMapUv:Ue&&y(A.displacementMap.channel),emissiveMapUv:at&&y(A.emissiveMap.channel),metalnessMapUv:Le&&y(A.metalnessMap.channel),roughnessMapUv:R&&y(A.roughnessMap.channel),anisotropyMapUv:xe&&y(A.anisotropyMap.channel),clearcoatMapUv:Ee&&y(A.clearcoatMap.channel),clearcoatNormalMapUv:$e&&y(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&y(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&y(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&y(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&y(A.sheenColorMap.channel),sheenRoughnessMapUv:Te&&y(A.sheenRoughnessMap.channel),specularMapUv:Oe&&y(A.specularMap.channel),specularColorMapUv:Pe&&y(A.specularColorMap.channel),specularIntensityMapUv:Be&&y(A.specularIntensityMap.channel),transmissionMapUv:I&&y(A.transmissionMap.channel),thicknessMapUv:k&&y(A.thicknessMap.channel),alphaMapUv:ne&&y(A.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(Ke||x),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ae.attributes.uv&&(tt||ne),fog:!!j,useFog:A.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:we,skinning:q.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Ie,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:ht,decodeVideoTexture:tt&&A.map.isVideoTexture===!0&&je.getTransfer(A.map.colorSpace)===it,decodeVideoTextureEmissive:at&&A.emissiveMap.isVideoTexture===!0&&je.getTransfer(A.emissiveMap.colorSpace)===it,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===2,flipSided:A.side===1,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ge&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&A.extensions.multiDraw===!0||ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return gt.vertexUv1s=u.has(1),gt.vertexUv2s=u.has(2),gt.vertexUv3s=u.has(3),u.clear(),gt}function p(A){const E=[];if(A.shaderID?E.push(A.shaderID):(E.push(A.customVertexShaderID),E.push(A.customFragmentShaderID)),A.defines!==void 0)for(const D in A.defines)E.push(D),E.push(A.defines[D]);return A.isRawShaderMaterial===!1&&(P(E,A),C(E,A),E.push(i.outputColorSpace)),E.push(A.customProgramCacheKey),E.join()}function P(A,E){A.push(E.precision),A.push(E.outputColorSpace),A.push(E.envMapMode),A.push(E.envMapCubeUVHeight),A.push(E.mapUv),A.push(E.alphaMapUv),A.push(E.lightMapUv),A.push(E.aoMapUv),A.push(E.bumpMapUv),A.push(E.normalMapUv),A.push(E.displacementMapUv),A.push(E.emissiveMapUv),A.push(E.metalnessMapUv),A.push(E.roughnessMapUv),A.push(E.anisotropyMapUv),A.push(E.clearcoatMapUv),A.push(E.clearcoatNormalMapUv),A.push(E.clearcoatRoughnessMapUv),A.push(E.iridescenceMapUv),A.push(E.iridescenceThicknessMapUv),A.push(E.sheenColorMapUv),A.push(E.sheenRoughnessMapUv),A.push(E.specularMapUv),A.push(E.specularColorMapUv),A.push(E.specularIntensityMapUv),A.push(E.transmissionMapUv),A.push(E.thicknessMapUv),A.push(E.combine),A.push(E.fogExp2),A.push(E.sizeAttenuation),A.push(E.morphTargetsCount),A.push(E.morphAttributeCount),A.push(E.numDirLights),A.push(E.numPointLights),A.push(E.numSpotLights),A.push(E.numSpotLightMaps),A.push(E.numHemiLights),A.push(E.numRectAreaLights),A.push(E.numDirLightShadows),A.push(E.numPointLightShadows),A.push(E.numSpotLightShadows),A.push(E.numSpotLightShadowsWithMaps),A.push(E.numLightProbes),A.push(E.shadowMapType),A.push(E.toneMapping),A.push(E.numClippingPlanes),A.push(E.numClipIntersection),A.push(E.depthPacking)}function C(A,E){l.disableAll(),E.supportsVertexTextures&&l.enable(0),E.instancing&&l.enable(1),E.instancingColor&&l.enable(2),E.instancingMorph&&l.enable(3),E.matcap&&l.enable(4),E.envMap&&l.enable(5),E.normalMapObjectSpace&&l.enable(6),E.normalMapTangentSpace&&l.enable(7),E.clearcoat&&l.enable(8),E.iridescence&&l.enable(9),E.alphaTest&&l.enable(10),E.vertexColors&&l.enable(11),E.vertexAlphas&&l.enable(12),E.vertexUv1s&&l.enable(13),E.vertexUv2s&&l.enable(14),E.vertexUv3s&&l.enable(15),E.vertexTangents&&l.enable(16),E.anisotropy&&l.enable(17),E.alphaHash&&l.enable(18),E.batching&&l.enable(19),E.dispersion&&l.enable(20),E.batchingColor&&l.enable(21),A.push(l.mask),l.disableAll(),E.fog&&l.enable(0),E.useFog&&l.enable(1),E.flatShading&&l.enable(2),E.logarithmicDepthBuffer&&l.enable(3),E.reverseDepthBuffer&&l.enable(4),E.skinning&&l.enable(5),E.morphTargets&&l.enable(6),E.morphNormals&&l.enable(7),E.morphColors&&l.enable(8),E.premultipliedAlpha&&l.enable(9),E.shadowMapEnabled&&l.enable(10),E.doubleSided&&l.enable(11),E.flipSided&&l.enable(12),E.useDepthPacking&&l.enable(13),E.dithering&&l.enable(14),E.transmission&&l.enable(15),E.sheen&&l.enable(16),E.opaque&&l.enable(17),E.pointsUvs&&l.enable(18),E.decodeVideoTexture&&l.enable(19),E.decodeVideoTextureEmissive&&l.enable(20),E.alphaToCoverage&&l.enable(21),A.push(l.mask)}function b(A){const E=S[A.type];let D;if(E){const $=Xt[E];D=Ia.clone($.uniforms)}else D=A.uniforms;return D}function X(A,E){let D;for(let $=0,q=f.length;$<q;$++){const j=f[$];if(j.cacheKey===E){D=j,++D.usedTimes;break}}return D===void 0&&(D=new Ku(i,E,A,s),f.push(D)),D}function L(A){if(--A.usedTimes===0){const E=f.indexOf(A);f[E]=f[f.length-1],f.pop(),A.destroy()}}function U(A){c.remove(A)}function B(){c.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:b,acquireProgram:X,releaseProgram:L,releaseShaderCache:U,programs:f,dispose:B}}function eh(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function r(o,l,c){i.get(o)[l]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function th(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ss(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ms(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,m,g,S,y,_){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:m,material:g,groupOrder:S,renderOrder:d.renderOrder,z:y,group:_},i[e]=p):(p.id=d.id,p.object=d,p.geometry=m,p.material=g,p.groupOrder=S,p.renderOrder=d.renderOrder,p.z=y,p.group=_),e++,p}function l(d,m,g,S,y,_){const p=o(d,m,g,S,y,_);g.transmission>0?n.push(p):g.transparent===!0?r.push(p):t.push(p)}function c(d,m,g,S,y,_){const p=o(d,m,g,S,y,_);g.transmission>0?n.unshift(p):g.transparent===!0?r.unshift(p):t.unshift(p)}function u(d,m){t.length>1&&t.sort(d||th),n.length>1&&n.sort(m||Ss),r.length>1&&r.sort(m||Ss)}function f(){for(let d=e,m=i.length;d<m;d++){const g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function nh(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Ms,i.set(n,[o])):r>=s.length?(o=new Ms,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ih(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new rt};break;case"SpotLight":t={position:new W,direction:new W,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function rh(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let sh=0;function ah(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function oh(i){const e=new ih,t=rh(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new W);const r=new W,s=new pt,o=new pt;function l(u){let f=0,d=0,m=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let g=0,S=0,y=0,_=0,p=0,P=0,C=0,b=0,X=0,L=0,U=0;u.sort(ah);for(let A=0,E=u.length;A<E;A++){const D=u[A],$=D.color,q=D.intensity,j=D.distance,ae=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=$.r*q,d+=$.g*q,m+=$.b*q;else if(D.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(D.sh.coefficients[J],q);U++}else if(D.isDirectionalLight){const J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ce=D.shadow,K=t.get(D);K.shadowIntensity=ce.intensity,K.shadowBias=ce.bias,K.shadowNormalBias=ce.normalBias,K.shadowRadius=ce.radius,K.shadowMapSize=ce.mapSize,n.directionalShadow[g]=K,n.directionalShadowMap[g]=ae,n.directionalShadowMatrix[g]=D.shadow.matrix,P++}n.directional[g]=J,g++}else if(D.isSpotLight){const J=e.get(D);J.position.setFromMatrixPosition(D.matrixWorld),J.color.copy($).multiplyScalar(q),J.distance=j,J.coneCos=Math.cos(D.angle),J.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),J.decay=D.decay,n.spot[y]=J;const ce=D.shadow;if(D.map&&(n.spotLightMap[X]=D.map,X++,ce.updateMatrices(D),D.castShadow&&L++),n.spotLightMatrix[y]=ce.matrix,D.castShadow){const K=t.get(D);K.shadowIntensity=ce.intensity,K.shadowBias=ce.bias,K.shadowNormalBias=ce.normalBias,K.shadowRadius=ce.radius,K.shadowMapSize=ce.mapSize,n.spotShadow[y]=K,n.spotShadowMap[y]=ae,b++}y++}else if(D.isRectAreaLight){const J=e.get(D);J.color.copy($).multiplyScalar(q),J.halfWidth.set(D.width*.5,0,0),J.halfHeight.set(0,D.height*.5,0),n.rectArea[_]=J,_++}else if(D.isPointLight){const J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),J.distance=D.distance,J.decay=D.decay,D.castShadow){const ce=D.shadow,K=t.get(D);K.shadowIntensity=ce.intensity,K.shadowBias=ce.bias,K.shadowNormalBias=ce.normalBias,K.shadowRadius=ce.radius,K.shadowMapSize=ce.mapSize,K.shadowCameraNear=ce.camera.near,K.shadowCameraFar=ce.camera.far,n.pointShadow[S]=K,n.pointShadowMap[S]=ae,n.pointShadowMatrix[S]=D.shadow.matrix,C++}n.point[S]=J,S++}else if(D.isHemisphereLight){const J=e.get(D);J.skyColor.copy(D.color).multiplyScalar(q),J.groundColor.copy(D.groundColor).multiplyScalar(q),n.hemi[p]=J,p++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=m;const B=n.hash;(B.directionalLength!==g||B.pointLength!==S||B.spotLength!==y||B.rectAreaLength!==_||B.hemiLength!==p||B.numDirectionalShadows!==P||B.numPointShadows!==C||B.numSpotShadows!==b||B.numSpotMaps!==X||B.numLightProbes!==U)&&(n.directional.length=g,n.spot.length=y,n.rectArea.length=_,n.point.length=S,n.hemi.length=p,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=P,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=b+X-L,n.spotLightMap.length=X,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=U,B.directionalLength=g,B.pointLength=S,B.spotLength=y,B.rectAreaLength=_,B.hemiLength=p,B.numDirectionalShadows=P,B.numPointShadows=C,B.numSpotShadows=b,B.numSpotMaps=X,B.numLightProbes=U,n.version=sh++)}function c(u,f){let d=0,m=0,g=0,S=0,y=0;const _=f.matrixWorldInverse;for(let p=0,P=u.length;p<P;p++){const C=u[p];if(C.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(_),d++}else if(C.isSpotLight){const b=n.spot[g];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(_),g++}else if(C.isRectAreaLight){const b=n.rectArea[S];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(_),o.identity(),s.copy(C.matrixWorld),s.premultiply(_),o.extractRotation(s),b.halfWidth.set(C.width*.5,0,0),b.halfHeight.set(0,C.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),S++}else if(C.isPointLight){const b=n.point[m];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(_),m++}else if(C.isHemisphereLight){const b=n.hemi[y];b.direction.setFromMatrixPosition(C.matrixWorld),b.direction.transformDirection(_),y++}}}return{setup:l,setupView:c,state:n}}function Es(i){const e=new oh(i),t=[],n=[];function r(f){u.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function o(f){n.push(f)}function l(){e.setup(t)}function c(f){e.setupView(t,f)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function lh(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let l;return o===void 0?(l=new Es(i),e.set(r,[l])):s>=o.length?(l=new Es(i),o.push(l)):l=o[s],l}function n(){e=new WeakMap}return{get:t,dispose:n}}class ch extends qi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uh extends qi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hh=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fh=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dh(i,e,t){let n=new Fs;const r=new ot,s=new ot,o=new ft,l=new ch({depthPacking:3201}),c=new uh,u={},f=t.maxTextureSize,d={0:1,1:0,2:2},m=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:hh,fragmentShader:fh}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const S=new mn;S.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new tn(S,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let p=this.type;this.render=function(L,U,B){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||L.length===0)return;const A=i.getRenderTarget(),E=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),$=i.state;$.setBlending(0),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const q=p!==3&&this.type===3,j=p===3&&this.type!==3;for(let ae=0,J=L.length;ae<J;ae++){const ce=L[ae],K=ce.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const de=K.getFrameExtents();if(r.multiply(de),s.copy(K.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/de.x),r.x=s.x*de.x,K.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/de.y),r.y=s.y*de.y,K.mapSize.y=s.y)),K.map===null||q===!0||j===!0){const be=this.type!==3?{minFilter:1003,magFilter:1003}:{};K.map!==null&&K.map.dispose(),K.map=new bn(r.x,r.y,be),K.map.texture.name=ce.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const ge=K.getViewportCount();for(let be=0;be<ge;be++){const Ie=K.getViewport(be);o.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),$.viewport(o),K.updateMatrices(ce,be),n=K.getFrustum(),b(U,B,K.camera,ce,this.type)}K.isPointLightShadow!==!0&&this.type===3&&P(K,B),K.needsUpdate=!1}p=this.type,_.needsUpdate=!1,i.setRenderTarget(A,E,D)};function P(L,U){const B=e.update(y);m.defines.VSM_SAMPLES!==L.blurSamples&&(m.defines.VSM_SAMPLES=L.blurSamples,g.defines.VSM_SAMPLES=L.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new bn(r.x,r.y)),m.uniforms.shadow_pass.value=L.map.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(U,null,B,m,y,null),g.uniforms.shadow_pass.value=L.mapPass.texture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(U,null,B,g,y,null)}function C(L,U,B,A){let E=null;const D=B.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(D!==void 0)E=D;else if(E=B.isPointLight===!0?c:l,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const $=E.uuid,q=U.uuid;let j=u[$];j===void 0&&(j={},u[$]=j);let ae=j[q];ae===void 0&&(ae=E.clone(),j[q]=ae,U.addEventListener("dispose",X)),E=ae}if(E.visible=U.visible,E.wireframe=U.wireframe,A===3?E.side=U.shadowSide!==null?U.shadowSide:U.side:E.side=U.shadowSide!==null?U.shadowSide:d[U.side],E.alphaMap=U.alphaMap,E.alphaTest=U.alphaTest,E.map=U.map,E.clipShadows=U.clipShadows,E.clippingPlanes=U.clippingPlanes,E.clipIntersection=U.clipIntersection,E.displacementMap=U.displacementMap,E.displacementScale=U.displacementScale,E.displacementBias=U.displacementBias,E.wireframeLinewidth=U.wireframeLinewidth,E.linewidth=U.linewidth,B.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const $=i.properties.get(E);$.light=B}return E}function b(L,U,B,A,E){if(L.visible===!1)return;if(L.layers.test(U.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&E===3)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,L.matrixWorld);const q=e.update(L),j=L.material;if(Array.isArray(j)){const ae=q.groups;for(let J=0,ce=ae.length;J<ce;J++){const K=ae[J],de=j[K.materialIndex];if(de&&de.visible){const ge=C(L,de,A,E);L.onBeforeShadow(i,L,U,B,q,ge,K),i.renderBufferDirect(B,null,q,ge,L,K),L.onAfterShadow(i,L,U,B,q,ge,K)}}}else if(j.visible){const ae=C(L,j,A,E);L.onBeforeShadow(i,L,U,B,q,ae,null),i.renderBufferDirect(B,null,q,ae,L,null),L.onAfterShadow(i,L,U,B,q,ae,null)}}const $=L.children;for(let q=0,j=$.length;q<j;q++)b($[q],U,B,A,E)}function X(L){L.target.removeEventListener("dispose",X);for(const B in u){const A=u[B],E=L.target.uuid;E in A&&(A[E].dispose(),delete A[E])}}}const ph={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function mh(i,e){function t(){let I=!1;const k=new ft;let Y=null;const ne=new ft(0,0,0,0);return{setMask:function(Me){Y!==Me&&!I&&(i.colorMask(Me,Me,Me,Me),Y=Me)},setLocked:function(Me){I=Me},setClear:function(Me,Se,Ge,ht,gt){gt===!0&&(Me*=ht,Se*=ht,Ge*=ht),k.set(Me,Se,Ge,ht),ne.equals(k)===!1&&(i.clearColor(Me,Se,Ge,ht),ne.copy(k))},reset:function(){I=!1,Y=null,ne.set(-1,0,0,0)}}}function n(){let I=!1,k=!1,Y=null,ne=null,Me=null;return{setReversed:function(Se){if(k!==Se){const Ge=e.get("EXT_clip_control");k?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);const ht=Me;Me=null,this.setClear(ht)}k=Se},getReversed:function(){return k},setTest:function(Se){Se?pe(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(Se){Y!==Se&&!I&&(i.depthMask(Se),Y=Se)},setFunc:function(Se){if(k&&(Se=ph[Se]),ne!==Se){switch(Se){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ne=Se}},setLocked:function(Se){I=Se},setClear:function(Se){Me!==Se&&(k&&(Se=1-Se),i.clearDepth(Se),Me=Se)},reset:function(){I=!1,Y=null,ne=null,Me=null,k=!1}}}function r(){let I=!1,k=null,Y=null,ne=null,Me=null,Se=null,Ge=null,ht=null,gt=null;return{setTest:function(et){I||(et?pe(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(et){k!==et&&!I&&(i.stencilMask(et),k=et)},setFunc:function(et,Ct,Nt){(Y!==et||ne!==Ct||Me!==Nt)&&(i.stencilFunc(et,Ct,Nt),Y=et,ne=Ct,Me=Nt)},setOp:function(et,Ct,Nt){(Se!==et||Ge!==Ct||ht!==Nt)&&(i.stencilOp(et,Ct,Nt),Se=et,Ge=Ct,ht=Nt)},setLocked:function(et){I=et},setClear:function(et){gt!==et&&(i.clearStencil(et),gt=et)},reset:function(){I=!1,k=null,Y=null,ne=null,Me=null,Se=null,Ge=null,ht=null,gt=null}}}const s=new t,o=new n,l=new r,c=new WeakMap,u=new WeakMap;let f={},d={},m=new WeakMap,g=[],S=null,y=!1,_=null,p=null,P=null,C=null,b=null,X=null,L=null,U=new rt(0,0,0),B=0,A=!1,E=null,D=null,$=null,q=null,j=null;const ae=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ce=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(K)[1]),J=ce>=1):K.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),J=ce>=2);let de=null,ge={};const be=i.getParameter(i.SCISSOR_BOX),Ie=i.getParameter(i.VIEWPORT),We=new ft().fromArray(be),Q=new ft().fromArray(Ie);function le(I,k,Y,ne){const Me=new Uint8Array(4),Se=i.createTexture();i.bindTexture(I,Se),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<Y;Ge++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(k,0,i.RGBA,1,1,ne,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(k+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return Se}const fe={};fe[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),fe[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),fe[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),l.setClear(0),pe(i.DEPTH_TEST),o.setFunc(3),Ze(!1),Ke(1),pe(i.CULL_FACE),F(0);function pe(I){f[I]!==!0&&(i.enable(I),f[I]=!0)}function we(I){f[I]!==!1&&(i.disable(I),f[I]=!1)}function Fe(I,k){return d[I]!==k?(i.bindFramebuffer(I,k),d[I]=k,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=k),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=k),!0):!1}function ze(I,k){let Y=g,ne=!1;if(I){Y=m.get(k),Y===void 0&&(Y=[],m.set(k,Y));const Me=I.textures;if(Y.length!==Me.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let Se=0,Ge=Me.length;Se<Ge;Se++)Y[Se]=i.COLOR_ATTACHMENT0+Se;Y.length=Me.length,ne=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,ne=!0);ne&&i.drawBuffers(Y)}function tt(I){return S!==I?(i.useProgram(I),S=I,!0):!1}const Xe={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};Xe[103]=i.MIN,Xe[104]=i.MAX;const st={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function F(I,k,Y,ne,Me,Se,Ge,ht,gt,et){if(I===0){y===!0&&(we(i.BLEND),y=!1);return}if(y===!1&&(pe(i.BLEND),y=!0),I!==5){if(I!==_||et!==A){if((p!==100||b!==100)&&(i.blendEquation(i.FUNC_ADD),p=100,b=100),et)switch(I){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}P=null,C=null,X=null,L=null,U.set(0,0,0),B=0,_=I,A=et}return}Me=Me||k,Se=Se||Y,Ge=Ge||ne,(k!==p||Me!==b)&&(i.blendEquationSeparate(Xe[k],Xe[Me]),p=k,b=Me),(Y!==P||ne!==C||Se!==X||Ge!==L)&&(i.blendFuncSeparate(st[Y],st[ne],st[Se],st[Ge]),P=Y,C=ne,X=Se,L=Ge),(ht.equals(U)===!1||gt!==B)&&(i.blendColor(ht.r,ht.g,ht.b,gt),U.copy(ht),B=gt),_=I,A=!1}function yt(I,k){I.side===2?we(i.CULL_FACE):pe(i.CULL_FACE);let Y=I.side===1;k&&(Y=!Y),Ze(Y),I.blending===1&&I.transparent===!1?F(0):F(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const ne=I.stencilWrite;l.setTest(ne),ne&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),at(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(I){E!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),E=I)}function Ke(I){I!==0?(pe(i.CULL_FACE),I!==D&&(I===1?i.cullFace(i.BACK):I===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),D=I}function Ue(I){I!==$&&(J&&i.lineWidth(I),$=I)}function at(I,k,Y){I?(pe(i.POLYGON_OFFSET_FILL),(q!==k||j!==Y)&&(i.polygonOffset(k,Y),q=k,j=Y)):we(i.POLYGON_OFFSET_FILL)}function Le(I){I?pe(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function R(I){I===void 0&&(I=i.TEXTURE0+ae-1),de!==I&&(i.activeTexture(I),de=I)}function x(I,k,Y){Y===void 0&&(de===null?Y=i.TEXTURE0+ae-1:Y=de);let ne=ge[Y];ne===void 0&&(ne={type:void 0,texture:void 0},ge[Y]=ne),(ne.type!==I||ne.texture!==k)&&(de!==Y&&(i.activeTexture(Y),de=Y),i.bindTexture(I,k||fe[I]),ne.type=I,ne.texture=k)}function G(){const I=ge[de];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function te(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $e(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(I){We.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),We.copy(I))}function Te(I){Q.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Q.copy(I))}function Oe(I,k){let Y=u.get(k);Y===void 0&&(Y=new WeakMap,u.set(k,Y));let ne=Y.get(I);ne===void 0&&(ne=i.getUniformBlockIndex(k,I.name),Y.set(I,ne))}function Pe(I,k){const ne=u.get(k).get(I);c.get(k)!==ne&&(i.uniformBlockBinding(k,ne,I.__bindingPointIndex),c.set(k,ne))}function Be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},de=null,ge={},d={},m=new WeakMap,g=[],S=null,y=!1,_=null,p=null,P=null,C=null,b=null,X=null,L=null,U=new rt(0,0,0),B=0,A=!1,E=null,D=null,$=null,q=null,j=null,We.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),l.reset()}return{buffers:{color:s,depth:o,stencil:l},enable:pe,disable:we,bindFramebuffer:Fe,drawBuffers:ze,useProgram:tt,setBlending:F,setMaterial:yt,setFlipSided:Ze,setCullFace:Ke,setLineWidth:Ue,setPolygonOffset:at,setScissorTest:Le,activeTexture:R,bindTexture:x,unbindTexture:G,compressedTexImage2D:te,compressedTexImage3D:ie,texImage2D:ye,texImage3D:Ae,updateUBOMapping:Oe,uniformBlockBinding:Pe,texStorage2D:$e,texStorage3D:he,texSubImage2D:ee,texSubImage3D:Re,compressedTexSubImage2D:xe,compressedTexSubImage3D:Ee,scissor:Ce,viewport:Te,reset:Be}}function Ts(i,e,t,n){const r=_h(n);switch(t){case 1021:return i*e;case 1024:return i*e;case 1025:return i*e*2;case 1028:return i*e/r.components*r.byteLength;case 1029:return i*e/r.components*r.byteLength;case 1030:return i*e*2/r.components*r.byteLength;case 1031:return i*e*2/r.components*r.byteLength;case 1022:return i*e*3/r.components*r.byteLength;case 1023:return i*e*4/r.components*r.byteLength;case 1033:return i*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 37496:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _h(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function gh(i,e,t,n,r,s,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ot,f=new WeakMap;let d;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,x){return g?new OffscreenCanvas(R,x):ui("canvas")}function y(R,x,G){let te=1;const ie=Le(R);if((ie.width>G||ie.height>G)&&(te=G/Math.max(ie.width,ie.height)),te<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ee=Math.floor(te*ie.width),Re=Math.floor(te*ie.height);d===void 0&&(d=S(ee,Re));const xe=x?S(ee,Re):d;return xe.width=ee,xe.height=Re,xe.getContext("2d").drawImage(R,0,0,ee,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ee+"x"+Re+")."),xe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function _(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function P(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(R,x,G,te,ie=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ee=x;if(x===i.RED&&(G===i.FLOAT&&(ee=i.R32F),G===i.HALF_FLOAT&&(ee=i.R16F),G===i.UNSIGNED_BYTE&&(ee=i.R8)),x===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(ee=i.R8UI),G===i.UNSIGNED_SHORT&&(ee=i.R16UI),G===i.UNSIGNED_INT&&(ee=i.R32UI),G===i.BYTE&&(ee=i.R8I),G===i.SHORT&&(ee=i.R16I),G===i.INT&&(ee=i.R32I)),x===i.RG&&(G===i.FLOAT&&(ee=i.RG32F),G===i.HALF_FLOAT&&(ee=i.RG16F),G===i.UNSIGNED_BYTE&&(ee=i.RG8)),x===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(ee=i.RG8UI),G===i.UNSIGNED_SHORT&&(ee=i.RG16UI),G===i.UNSIGNED_INT&&(ee=i.RG32UI),G===i.BYTE&&(ee=i.RG8I),G===i.SHORT&&(ee=i.RG16I),G===i.INT&&(ee=i.RG32I)),x===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),G===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),G===i.UNSIGNED_INT&&(ee=i.RGB32UI),G===i.BYTE&&(ee=i.RGB8I),G===i.SHORT&&(ee=i.RGB16I),G===i.INT&&(ee=i.RGB32I)),x===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),G===i.UNSIGNED_INT&&(ee=i.RGBA32UI),G===i.BYTE&&(ee=i.RGBA8I),G===i.SHORT&&(ee=i.RGBA16I),G===i.INT&&(ee=i.RGBA32I)),x===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),x===i.RGBA){const Re=ie?Xi:je.getTransfer(te);G===i.FLOAT&&(ee=i.RGBA32F),G===i.HALF_FLOAT&&(ee=i.RGBA16F),G===i.UNSIGNED_BYTE&&(ee=Re===it?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function b(R,x){let G;return R?x===null||x===1014||x===1020?G=i.DEPTH24_STENCIL8:x===1015?G=i.DEPTH32F_STENCIL8:x===1012&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===1014||x===1020?G=i.DEPTH_COMPONENT24:x===1015?G=i.DEPTH_COMPONENT32F:x===1012&&(G=i.DEPTH_COMPONENT16),G}function X(R,x){return _(R)===!0||R.isFramebufferTexture&&R.minFilter!==1003&&R.minFilter!==1006?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function L(R){const x=R.target;x.removeEventListener("dispose",L),B(x),x.isVideoTexture&&f.delete(x)}function U(R){const x=R.target;x.removeEventListener("dispose",U),E(x)}function B(R){const x=n.get(R);if(x.__webglInit===void 0)return;const G=R.source,te=m.get(G);if(te){const ie=te[x.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&A(R),Object.keys(te).length===0&&m.delete(G)}n.remove(R)}function A(R){const x=n.get(R);i.deleteTexture(x.__webglTexture);const G=R.source,te=m.get(G);delete te[x.__cacheKey],o.memory.textures--}function E(R){const x=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(x.__webglFramebuffer[te]))for(let ie=0;ie<x.__webglFramebuffer[te].length;ie++)i.deleteFramebuffer(x.__webglFramebuffer[te][ie]);else i.deleteFramebuffer(x.__webglFramebuffer[te]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[te])}else{if(Array.isArray(x.__webglFramebuffer))for(let te=0;te<x.__webglFramebuffer.length;te++)i.deleteFramebuffer(x.__webglFramebuffer[te]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let te=0;te<x.__webglColorRenderbuffer.length;te++)x.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[te]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const G=R.textures;for(let te=0,ie=G.length;te<ie;te++){const ee=n.get(G[te]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(G[te])}n.remove(R)}let D=0;function $(){D=0}function q(){const R=D;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),D+=1,R}function j(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function ae(R,x){const G=n.get(R);if(R.isVideoTexture&&Ue(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const te=R.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(G,R,x);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+x)}function J(R,x){const G=n.get(R);if(R.version>0&&G.__version!==R.version){Q(G,R,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+x)}function ce(R,x){const G=n.get(R);if(R.version>0&&G.__version!==R.version){Q(G,R,x);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+x)}function K(R,x){const G=n.get(R);if(R.version>0&&G.__version!==R.version){le(G,R,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+x)}const de={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},ge={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},be={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function Ie(R,x){if(x.type===1015&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===1006||x.magFilter===1007||x.magFilter===1005||x.magFilter===1008||x.minFilter===1006||x.minFilter===1007||x.minFilter===1005||x.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,de[x.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,de[x.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,de[x.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ge[x.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ge[x.minFilter]),x.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,be[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===1003||x.minFilter!==1005&&x.minFilter!==1008||x.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function We(R,x){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",L));const te=x.source;let ie=m.get(te);ie===void 0&&(ie={},m.set(te,ie));const ee=j(x);if(ee!==R.__cacheKey){ie[ee]===void 0&&(ie[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ie[ee].usedTimes++;const Re=ie[R.__cacheKey];Re!==void 0&&(ie[R.__cacheKey].usedTimes--,Re.usedTimes===0&&A(x)),R.__cacheKey=ee,R.__webglTexture=ie[ee].texture}return G}function Q(R,x,G){let te=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(te=i.TEXTURE_3D);const ie=We(R,x),ee=x.source;t.bindTexture(te,R.__webglTexture,i.TEXTURE0+G);const Re=n.get(ee);if(ee.version!==Re.__version||ie===!0){t.activeTexture(i.TEXTURE0+G);const xe=je.getPrimaries(je.workingColorSpace),Ee=x.colorSpace===""?null:je.getPrimaries(x.colorSpace),$e=x.colorSpace===""||xe===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let he=y(x.image,!1,r.maxTextureSize);he=at(x,he);const ye=s.convert(x.format,x.colorSpace),Ae=s.convert(x.type);let Ce=C(x.internalFormat,ye,Ae,x.colorSpace,x.isVideoTexture);Ie(te,x);let Te;const Oe=x.mipmaps,Pe=x.isVideoTexture!==!0,Be=Re.__version===void 0||ie===!0,I=ee.dataReady,k=X(x,he);if(x.isDepthTexture)Ce=b(x.format===1027,x.type),Be&&(Pe?t.texStorage2D(i.TEXTURE_2D,1,Ce,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,Ce,he.width,he.height,0,ye,Ae,null));else if(x.isDataTexture)if(Oe.length>0){Pe&&Be&&t.texStorage2D(i.TEXTURE_2D,k,Ce,Oe[0].width,Oe[0].height);for(let Y=0,ne=Oe.length;Y<ne;Y++)Te=Oe[Y],Pe?I&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,Te.width,Te.height,ye,Ae,Te.data):t.texImage2D(i.TEXTURE_2D,Y,Ce,Te.width,Te.height,0,ye,Ae,Te.data);x.generateMipmaps=!1}else Pe?(Be&&t.texStorage2D(i.TEXTURE_2D,k,Ce,he.width,he.height),I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he.width,he.height,ye,Ae,he.data)):t.texImage2D(i.TEXTURE_2D,0,Ce,he.width,he.height,0,ye,Ae,he.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Pe&&Be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,k,Ce,Oe[0].width,Oe[0].height,he.depth);for(let Y=0,ne=Oe.length;Y<ne;Y++)if(Te=Oe[Y],x.format!==1023)if(ye!==null)if(Pe){if(I)if(x.layerUpdates.size>0){const Me=Ts(Te.width,Te.height,x.format,x.type);for(const Se of x.layerUpdates){const Ge=Te.data.subarray(Se*Me/Te.data.BYTES_PER_ELEMENT,(Se+1)*Me/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,Se,Te.width,Te.height,1,ye,Ge)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Te.width,Te.height,he.depth,ye,Te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Ce,Te.width,Te.height,he.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Te.width,Te.height,he.depth,ye,Ae,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,Ce,Te.width,Te.height,he.depth,0,ye,Ae,Te.data)}else{Pe&&Be&&t.texStorage2D(i.TEXTURE_2D,k,Ce,Oe[0].width,Oe[0].height);for(let Y=0,ne=Oe.length;Y<ne;Y++)Te=Oe[Y],x.format!==1023?ye!==null?Pe?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,Te.width,Te.height,ye,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,Ce,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?I&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,Te.width,Te.height,ye,Ae,Te.data):t.texImage2D(i.TEXTURE_2D,Y,Ce,Te.width,Te.height,0,ye,Ae,Te.data)}else if(x.isDataArrayTexture)if(Pe){if(Be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,k,Ce,he.width,he.height,he.depth),I)if(x.layerUpdates.size>0){const Y=Ts(he.width,he.height,x.format,x.type);for(const ne of x.layerUpdates){const Me=he.data.subarray(ne*Y/he.data.BYTES_PER_ELEMENT,(ne+1)*Y/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ne,he.width,he.height,1,ye,Ae,Me)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,ye,Ae,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,he.width,he.height,he.depth,0,ye,Ae,he.data);else if(x.isData3DTexture)Pe?(Be&&t.texStorage3D(i.TEXTURE_3D,k,Ce,he.width,he.height,he.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,ye,Ae,he.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,he.width,he.height,he.depth,0,ye,Ae,he.data);else if(x.isFramebufferTexture){if(Be)if(Pe)t.texStorage2D(i.TEXTURE_2D,k,Ce,he.width,he.height);else{let Y=he.width,ne=he.height;for(let Me=0;Me<k;Me++)t.texImage2D(i.TEXTURE_2D,Me,Ce,Y,ne,0,ye,Ae,null),Y>>=1,ne>>=1}}else if(Oe.length>0){if(Pe&&Be){const Y=Le(Oe[0]);t.texStorage2D(i.TEXTURE_2D,k,Ce,Y.width,Y.height)}for(let Y=0,ne=Oe.length;Y<ne;Y++)Te=Oe[Y],Pe?I&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ye,Ae,Te):t.texImage2D(i.TEXTURE_2D,Y,Ce,ye,Ae,Te);x.generateMipmaps=!1}else if(Pe){if(Be){const Y=Le(he);t.texStorage2D(i.TEXTURE_2D,k,Ce,Y.width,Y.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,Ae,he)}else t.texImage2D(i.TEXTURE_2D,0,Ce,ye,Ae,he);_(x)&&p(te),Re.__version=ee.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function le(R,x,G){if(x.image.length!==6)return;const te=We(R,x),ie=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);const ee=n.get(ie);if(ie.version!==ee.__version||te===!0){t.activeTexture(i.TEXTURE0+G);const Re=je.getPrimaries(je.workingColorSpace),xe=x.colorSpace===""?null:je.getPrimaries(x.colorSpace),Ee=x.colorSpace===""||Re===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const $e=x.isCompressedTexture||x.image[0].isCompressedTexture,he=x.image[0]&&x.image[0].isDataTexture,ye=[];for(let ne=0;ne<6;ne++)!$e&&!he?ye[ne]=y(x.image[ne],!0,r.maxCubemapSize):ye[ne]=he?x.image[ne].image:x.image[ne],ye[ne]=at(x,ye[ne]);const Ae=ye[0],Ce=s.convert(x.format,x.colorSpace),Te=s.convert(x.type),Oe=C(x.internalFormat,Ce,Te,x.colorSpace),Pe=x.isVideoTexture!==!0,Be=ee.__version===void 0||te===!0,I=ie.dataReady;let k=X(x,Ae);Ie(i.TEXTURE_CUBE_MAP,x);let Y;if($e){Pe&&Be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,k,Oe,Ae.width,Ae.height);for(let ne=0;ne<6;ne++){Y=ye[ne].mipmaps;for(let Me=0;Me<Y.length;Me++){const Se=Y[Me];x.format!==1023?Ce!==null?Pe?I&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,0,0,Se.width,Se.height,Ce,Se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,Oe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,0,0,Se.width,Se.height,Ce,Te,Se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,Oe,Se.width,Se.height,0,Ce,Te,Se.data)}}}else{if(Y=x.mipmaps,Pe&&Be){Y.length>0&&k++;const ne=Le(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,k,Oe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(he){Pe?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ye[ne].width,ye[ne].height,Ce,Te,ye[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Oe,ye[ne].width,ye[ne].height,0,Ce,Te,ye[ne].data);for(let Me=0;Me<Y.length;Me++){const Ge=Y[Me].image[ne].image;Pe?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,0,0,Ge.width,Ge.height,Ce,Te,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,Oe,Ge.width,Ge.height,0,Ce,Te,Ge.data)}}else{Pe?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ce,Te,ye[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Oe,Ce,Te,ye[ne]);for(let Me=0;Me<Y.length;Me++){const Se=Y[Me];Pe?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,0,0,Ce,Te,Se.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,Oe,Ce,Te,Se.image[ne])}}}_(x)&&p(i.TEXTURE_CUBE_MAP),ee.__version=ie.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function fe(R,x,G,te,ie,ee){const Re=s.convert(G.format,G.colorSpace),xe=s.convert(G.type),Ee=C(G.internalFormat,Re,xe,G.colorSpace),$e=n.get(x),he=n.get(G);if(he.__renderTarget=x,!$e.__hasExternalTextures){const ye=Math.max(1,x.width>>ee),Ae=Math.max(1,x.height>>ee);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,ee,Ee,ye,Ae,x.depth,0,Re,xe,null):t.texImage2D(ie,ee,Ee,ye,Ae,0,Re,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Ke(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,ie,he.__webglTexture,0,Ze(x)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,ie,he.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(R,x,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),x.depthBuffer){const te=x.depthTexture,ie=te&&te.isDepthTexture?te.type:null,ee=b(x.stencilBuffer,ie),Re=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=Ze(x);Ke(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,ee,x.width,x.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,ee,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ee,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,R)}else{const te=x.textures;for(let ie=0;ie<te.length;ie++){const ee=te[ie],Re=s.convert(ee.format,ee.colorSpace),xe=s.convert(ee.type),Ee=C(ee.internalFormat,Re,xe,ee.colorSpace),$e=Ze(x);G&&Ke(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,Ee,x.width,x.height):Ke(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e,Ee,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(R,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=n.get(x.depthTexture);te.__renderTarget=x,(!te.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ae(x.depthTexture,0);const ie=te.__webglTexture,ee=Ze(x);if(x.depthTexture.format===1026)Ke(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(x.depthTexture.format===1027)Ke(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Fe(R){const x=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const te=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),te){const ie=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,te.removeEventListener("dispose",ie)};te.addEventListener("dispose",ie),x.__depthDisposeCallback=ie}x.__boundDepthTexture=te}if(R.depthTexture&&!x.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");we(x.__webglFramebuffer,R)}else if(G){x.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[te]),x.__webglDepthbuffer[te]===void 0)x.__webglDepthbuffer[te]=i.createRenderbuffer(),pe(x.__webglDepthbuffer[te],R,!1);else{const ie=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=x.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),pe(x.__webglDepthbuffer,R,!1);else{const te=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,ie)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(R,x,G){const te=n.get(R);x!==void 0&&fe(te.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Fe(R)}function tt(R){const x=R.texture,G=n.get(R),te=n.get(x);R.addEventListener("dispose",U);const ie=R.textures,ee=R.isWebGLCubeRenderTarget===!0,Re=ie.length>1;if(Re||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=x.version,o.memory.textures++),ee){G.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[xe]=[];for(let Ee=0;Ee<x.mipmaps.length;Ee++)G.__webglFramebuffer[xe][Ee]=i.createFramebuffer()}else G.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let xe=0;xe<x.mipmaps.length;xe++)G.__webglFramebuffer[xe]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Re)for(let xe=0,Ee=ie.length;xe<Ee;xe++){const $e=n.get(ie[xe]);$e.__webglTexture===void 0&&($e.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Ke(R)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let xe=0;xe<ie.length;xe++){const Ee=ie[xe];G.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[xe]);const $e=s.convert(Ee.format,Ee.colorSpace),he=s.convert(Ee.type),ye=C(Ee.internalFormat,$e,he,Ee.colorSpace,R.isXRRenderTarget===!0),Ae=Ze(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,ye,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,G.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,x);for(let xe=0;xe<6;xe++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ee=0;Ee<x.mipmaps.length;Ee++)fe(G.__webglFramebuffer[xe][Ee],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ee);else fe(G.__webglFramebuffer[xe],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);_(x)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let xe=0,Ee=ie.length;xe<Ee;xe++){const $e=ie[xe],he=n.get($e);t.bindTexture(i.TEXTURE_2D,he.__webglTexture),Ie(i.TEXTURE_2D,$e),fe(G.__webglFramebuffer,R,$e,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,0),_($e)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(xe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,te.__webglTexture),Ie(xe,x),x.mipmaps&&x.mipmaps.length>0)for(let Ee=0;Ee<x.mipmaps.length;Ee++)fe(G.__webglFramebuffer[Ee],R,x,i.COLOR_ATTACHMENT0,xe,Ee);else fe(G.__webglFramebuffer,R,x,i.COLOR_ATTACHMENT0,xe,0);_(x)&&p(xe),t.unbindTexture()}R.depthBuffer&&Fe(R)}function Xe(R){const x=R.textures;for(let G=0,te=x.length;G<te;G++){const ie=x[G];if(_(ie)){const ee=P(R),Re=n.get(ie).__webglTexture;t.bindTexture(ee,Re),p(ee),t.unbindTexture()}}}const st=[],F=[];function yt(R){if(R.samples>0){if(Ke(R)===!1){const x=R.textures,G=R.width,te=R.height;let ie=i.COLOR_BUFFER_BIT;const ee=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(R),xe=x.length>1;if(xe)for(let Ee=0;Ee<x.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ee=0;Ee<x.length;Ee++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),xe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Ee]);const $e=n.get(x[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$e,0)}i.blitFramebuffer(0,0,G,te,0,0,G,te,ie,i.NEAREST),c===!0&&(st.length=0,F.length=0,st.push(i.COLOR_ATTACHMENT0+Ee),R.depthBuffer&&R.resolveDepthBuffer===!1&&(st.push(ee),F.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let Ee=0;Ee<x.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Ee]);const $e=n.get(x[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,$e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const x=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Ze(R){return Math.min(r.maxSamples,R.samples)}function Ke(R){const x=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ue(R){const x=o.render.frame;f.get(R)!==x&&(f.set(R,x),R.update())}function at(R,x){const G=R.colorSpace,te=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==dn&&G!==""&&(je.getTransfer(G)===it?(te!==1023||ie!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),x}function Le(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=q,this.resetTextureUnits=$,this.setTexture2D=ae,this.setTexture2DArray=J,this.setTexture3D=ce,this.setTextureCube=K,this.rebindTextures=ze,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Ke}function vh(i,e){function t(n,r=""){let s;const o=je.getTransfer(r);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1024)return i.LUMINANCE;if(n===1025)return i.LUMINANCE_ALPHA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(o===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===36196||n===37492)return o===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===37496)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===37808)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===36492)return o===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===36492)return s.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class xh extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Hi extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sh={type:"move"};class Er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const l=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const _=t.getJointPose(y,n),p=this._getHandJoint(u,y);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],m=f.position.distanceTo(d.position),g=.02,S=.005;u.inputState.pinching&&m>g+S?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&m<=g-S&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Sh)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Hi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Mh=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Eh=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Th{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new St,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new pn({vertexShader:Mh,fragmentShader:Eh,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tn(new Yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yh extends Yn{constructor(e,t){super();const n=this;let r=null,s=1,o=null,l="local-floor",c=1,u=null,f=null,d=null,m=null,g=null,S=null;const y=new Th,_=t.getContextAttributes();let p=null,P=null;const C=[],b=[],X=new ot;let L=null;const U=new Vt;U.viewport=new ft;const B=new Vt;B.viewport=new ft;const A=[U,B],E=new xh;let D=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let le=C[Q];return le===void 0&&(le=new Er,C[Q]=le),le.getTargetRaySpace()},this.getControllerGrip=function(Q){let le=C[Q];return le===void 0&&(le=new Er,C[Q]=le),le.getGripSpace()},this.getHand=function(Q){let le=C[Q];return le===void 0&&(le=new Er,C[Q]=le),le.getHandSpace()};function q(Q){const le=b.indexOf(Q.inputSource);if(le===-1)return;const fe=C[le];fe!==void 0&&(fe.update(Q.inputSource,Q.frame,u||o),fe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function j(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",ae);for(let Q=0;Q<C.length;Q++){const le=b[Q];le!==null&&(b[Q]=null,C[Q].disconnect(le))}D=null,$=null,y.reset(),e.setRenderTarget(p),g=null,m=null,d=null,r=null,P=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(X.width,X.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){l=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Q){u=Q},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return d},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",j),r.addEventListener("inputsourceschange",ae),_.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(X),r.renderState.layers===void 0){const le={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),P=new bn(g.framebufferWidth,g.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let le=null,fe=null,pe=null;_.depth&&(pe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=_.stencil?1027:1026,fe=_.stencil?1020:1014);const we={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};d=new XRWebGLBinding(r,t),m=d.createProjectionLayer(we),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),P=new bn(m.textureWidth,m.textureHeight,{format:1023,type:1009,depthTexture:new Os(m.textureWidth,m.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await r.requestReferenceSpace(l),We.setContext(r),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ae(Q){for(let le=0;le<Q.removed.length;le++){const fe=Q.removed[le],pe=b.indexOf(fe);pe>=0&&(b[pe]=null,C[pe].disconnect(fe))}for(let le=0;le<Q.added.length;le++){const fe=Q.added[le];let pe=b.indexOf(fe);if(pe===-1){for(let Fe=0;Fe<C.length;Fe++)if(Fe>=b.length){b.push(fe),pe=Fe;break}else if(b[Fe]===null){b[Fe]=fe,pe=Fe;break}if(pe===-1)break}const we=C[pe];we&&we.connect(fe)}}const J=new W,ce=new W;function K(Q,le,fe){J.setFromMatrixPosition(le.matrixWorld),ce.setFromMatrixPosition(fe.matrixWorld);const pe=J.distanceTo(ce),we=le.projectionMatrix.elements,Fe=fe.projectionMatrix.elements,ze=we[14]/(we[10]-1),tt=we[14]/(we[10]+1),Xe=(we[9]+1)/we[5],st=(we[9]-1)/we[5],F=(we[8]-1)/we[0],yt=(Fe[8]+1)/Fe[0],Ze=ze*F,Ke=ze*yt,Ue=pe/(-F+yt),at=Ue*-F;if(le.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(at),Q.translateZ(Ue),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),we[10]===-1)Q.projectionMatrix.copy(le.projectionMatrix),Q.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const Le=ze+Ue,R=tt+Ue,x=Ze-at,G=Ke+(pe-at),te=Xe*tt/R*Le,ie=st*tt/R*Le;Q.projectionMatrix.makePerspective(x,G,te,ie,Le,R),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function de(Q,le){le===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(le.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let le=Q.near,fe=Q.far;y.texture!==null&&(y.depthNear>0&&(le=y.depthNear),y.depthFar>0&&(fe=y.depthFar)),E.near=B.near=U.near=le,E.far=B.far=U.far=fe,(D!==E.near||$!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),D=E.near,$=E.far),U.layers.mask=Q.layers.mask|2,B.layers.mask=Q.layers.mask|4,E.layers.mask=U.layers.mask|B.layers.mask;const pe=Q.parent,we=E.cameras;de(E,pe);for(let Fe=0;Fe<we.length;Fe++)de(we[Fe],pe);we.length===2?K(E,U,B):E.projectionMatrix.copy(U.projectionMatrix),ge(Q,E,pe)};function ge(Q,le,fe){fe===null?Q.matrix.copy(le.matrixWorld):(Q.matrix.copy(fe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(le.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(le.projectionMatrix),Q.projectionMatrixInverse.copy(le.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ci*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(m===null&&g===null))return c},this.setFoveation=function(Q){c=Q,m!==null&&(m.fixedFoveation=Q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(E)};let be=null;function Ie(Q,le){if(f=le.getViewerPose(u||o),S=le,f!==null){const fe=f.views;g!==null&&(e.setRenderTargetFramebuffer(P,g.framebuffer),e.setRenderTarget(P));let pe=!1;fe.length!==E.cameras.length&&(E.cameras.length=0,pe=!0);for(let Fe=0;Fe<fe.length;Fe++){const ze=fe[Fe];let tt=null;if(g!==null)tt=g.getViewport(ze);else{const st=d.getViewSubImage(m,ze);tt=st.viewport,Fe===0&&(e.setRenderTargetTextures(P,st.colorTexture,m.ignoreDepthValues?void 0:st.depthStencilTexture),e.setRenderTarget(P))}let Xe=A[Fe];Xe===void 0&&(Xe=new Vt,Xe.layers.enable(Fe),Xe.viewport=new ft,A[Fe]=Xe),Xe.matrix.fromArray(ze.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(ze.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(tt.x,tt.y,tt.width,tt.height),Fe===0&&(E.matrix.copy(Xe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),pe===!0&&E.cameras.push(Xe)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")){const Fe=d.getDepthInformation(fe[0]);Fe&&Fe.isValid&&Fe.texture&&y.init(e,Fe,r.renderState)}}for(let fe=0;fe<C.length;fe++){const pe=b[fe],we=C[fe];pe!==null&&we!==void 0&&we.update(pe,le,u||o)}be&&be(Q,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),S=null}const We=new Ns;We.setAnimationLoop(Ie),this.setAnimationLoop=function(Q){be=Q},this.dispose=function(){}}}const Mn=new rn,Ah=new pt;function bh(i,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,Ls(i)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,P,C,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(_,p):p.isMeshToonMaterial?(s(_,p),d(_,p)):p.isMeshPhongMaterial?(s(_,p),f(_,p)):p.isMeshStandardMaterial?(s(_,p),m(_,p),p.isMeshPhysicalMaterial&&g(_,p,b)):p.isMeshMatcapMaterial?(s(_,p),S(_,p)):p.isMeshDepthMaterial?s(_,p):p.isMeshDistanceMaterial?(s(_,p),y(_,p)):p.isMeshNormalMaterial?s(_,p):p.isLineBasicMaterial?(o(_,p),p.isLineDashedMaterial&&l(_,p)):p.isPointsMaterial?c(_,p,P,C):p.isSpriteMaterial?u(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===1&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===1&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const P=e.get(p),C=P.envMap,b=P.envMapRotation;C&&(_.envMap.value=C,Mn.copy(b),Mn.x*=-1,Mn.y*=-1,Mn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Mn.y*=-1,Mn.z*=-1),_.envMapRotation.value.setFromMatrix4(Ah.makeRotationFromEuler(Mn)),_.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function o(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function l(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function c(_,p,P,C){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*P,_.scale.value=C*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function f(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function d(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function m(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function g(_,p,P){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===1&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=P.texture,_.transmissionSamplerSize.value.set(P.width,P.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function S(_,p){p.matcap&&(_.matcap.value=p.matcap)}function y(_,p){const P=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(P.matrixWorld),_.nearDistance.value=P.shadow.camera.near,_.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Rh(i,e,t,n){let r={},s={},o=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(P,C){const b=C.program;n.uniformBlockBinding(P,b)}function u(P,C){let b=r[P.id];b===void 0&&(S(P),b=f(P),r[P.id]=b,P.addEventListener("dispose",_));const X=C.program;n.updateUBOMapping(P,X);const L=e.render.frame;s[P.id]!==L&&(m(P),s[P.id]=L)}function f(P){const C=d();P.__bindingPointIndex=C;const b=i.createBuffer(),X=P.__size,L=P.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,X,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,b),b}function d(){for(let P=0;P<l;P++)if(o.indexOf(P)===-1)return o.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(P){const C=r[P.id],b=P.uniforms,X=P.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let L=0,U=b.length;L<U;L++){const B=Array.isArray(b[L])?b[L]:[b[L]];for(let A=0,E=B.length;A<E;A++){const D=B[A];if(g(D,L,A,X)===!0){const $=D.__offset,q=Array.isArray(D.value)?D.value:[D.value];let j=0;for(let ae=0;ae<q.length;ae++){const J=q[ae],ce=y(J);typeof J=="number"||typeof J=="boolean"?(D.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,$+j,D.__data)):J.isMatrix3?(D.__data[0]=J.elements[0],D.__data[1]=J.elements[1],D.__data[2]=J.elements[2],D.__data[3]=0,D.__data[4]=J.elements[3],D.__data[5]=J.elements[4],D.__data[6]=J.elements[5],D.__data[7]=0,D.__data[8]=J.elements[6],D.__data[9]=J.elements[7],D.__data[10]=J.elements[8],D.__data[11]=0):(J.toArray(D.__data,j),j+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(P,C,b,X){const L=P.value,U=C+"_"+b;if(X[U]===void 0)return typeof L=="number"||typeof L=="boolean"?X[U]=L:X[U]=L.clone(),!0;{const B=X[U];if(typeof L=="number"||typeof L=="boolean"){if(B!==L)return X[U]=L,!0}else if(B.equals(L)===!1)return B.copy(L),!0}return!1}function S(P){const C=P.uniforms;let b=0;const X=16;for(let U=0,B=C.length;U<B;U++){const A=Array.isArray(C[U])?C[U]:[C[U]];for(let E=0,D=A.length;E<D;E++){const $=A[E],q=Array.isArray($.value)?$.value:[$.value];for(let j=0,ae=q.length;j<ae;j++){const J=q[j],ce=y(J),K=b%X,de=K%ce.boundary,ge=K+de;b+=de,ge!==0&&X-ge<ce.storage&&(b+=X-ge),$.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=b,b+=ce.storage}}}const L=b%X;return L>0&&(b+=X-L),P.__size=b,P.__cache={},this}function y(P){const C={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(C.boundary=4,C.storage=4):P.isVector2?(C.boundary=8,C.storage=8):P.isVector3||P.isColor?(C.boundary=16,C.storage=12):P.isVector4?(C.boundary=16,C.storage=16):P.isMatrix3?(C.boundary=48,C.storage=48):P.isMatrix4?(C.boundary=64,C.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),C}function _(P){const C=P.target;C.removeEventListener("dispose",_);const b=o.indexOf(C.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(r[C.id]),delete r[C.id],delete s[C.id]}function p(){for(const P in r)i.deleteBuffer(r[P]);o=[],r={},s={}}return{bind:c,update:u,dispose:p}}class Mf{constructor(e={}){const{canvas:t=ua(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const S=new Uint32Array(4),y=new Int32Array(4);let _=null,p=null;const P=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this.toneMapping=0,this.toneMappingExposure=1;const b=this;let X=!1,L=0,U=0,B=null,A=-1,E=null;const D=new ft,$=new ft;let q=null;const j=new rt(0);let ae=0,J=t.width,ce=t.height,K=1,de=null,ge=null;const be=new ft(0,0,J,ce),Ie=new ft(0,0,J,ce);let We=!1;const Q=new Fs;let le=!1,fe=!1;const pe=new pt,we=new pt,Fe=new W,ze=new ft,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function st(){return B===null?K:1}let F=n;function yt(a,h){return t.getContext(a,h)}try{const a={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",Se,!1),F===null){const h="webgl2";if(F=yt(h,a),F===null)throw yt(h)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(a){throw console.error("THREE.WebGLRenderer: "+a.message),a}let Ze,Ke,Ue,at,Le,R,x,G,te,ie,ee,Re,xe,Ee,$e,he,ye,Ae,Ce,Te,Oe,Pe,Be,I;function k(){Ze=new Uc(F),Ze.init(),Pe=new vh(F,Ze),Ke=new bc(F,Ze,e,Pe),Ue=new mh(F,Ze),Ke.reverseDepthBuffer&&m&&Ue.buffers.depth.setReversed(!0),at=new Nc(F),Le=new eh,R=new gh(F,Ze,Ue,Le,Ke,Pe,at),x=new Cc(b),G=new Lc(b),te=new Ha(F),Be=new yc(F,te),ie=new Ic(F,te,at,Be),ee=new Bc(F,ie,te,at),Ce=new Oc(F,Ke,R),he=new Rc(Le),Re=new Qu(b,x,G,Ze,Ke,Be,he),xe=new bh(b,Le),Ee=new nh,$e=new lh(Ze),Ae=new Tc(b,x,G,Ue,ee,g,c),ye=new dh(b,ee,Ke),I=new Rh(F,at,Ke,Ue),Te=new Ac(F,Ze,at),Oe=new Fc(F,Ze,at),at.programs=Re.programs,b.capabilities=Ke,b.extensions=Ze,b.properties=Le,b.renderLists=Ee,b.shadowMap=ye,b.state=Ue,b.info=at}k();const Y=new yh(b,F);this.xr=Y,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const a=Ze.get("WEBGL_lose_context");a&&a.loseContext()},this.forceContextRestore=function(){const a=Ze.get("WEBGL_lose_context");a&&a.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(a){a!==void 0&&(K=a,this.setSize(J,ce,!1))},this.getSize=function(a){return a.set(J,ce)},this.setSize=function(a,h,v=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=a,ce=h,t.width=Math.floor(a*K),t.height=Math.floor(h*K),v===!0&&(t.style.width=a+"px",t.style.height=h+"px"),this.setViewport(0,0,a,h)},this.getDrawingBufferSize=function(a){return a.set(J*K,ce*K).floor()},this.setDrawingBufferSize=function(a,h,v){J=a,ce=h,K=v,t.width=Math.floor(a*v),t.height=Math.floor(h*v),this.setViewport(0,0,a,h)},this.getCurrentViewport=function(a){return a.copy(D)},this.getViewport=function(a){return a.copy(be)},this.setViewport=function(a,h,v,M){a.isVector4?be.set(a.x,a.y,a.z,a.w):be.set(a,h,v,M),Ue.viewport(D.copy(be).multiplyScalar(K).round())},this.getScissor=function(a){return a.copy(Ie)},this.setScissor=function(a,h,v,M){a.isVector4?Ie.set(a.x,a.y,a.z,a.w):Ie.set(a,h,v,M),Ue.scissor($.copy(Ie).multiplyScalar(K).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(a){Ue.setScissorTest(We=a)},this.setOpaqueSort=function(a){de=a},this.setTransparentSort=function(a){ge=a},this.getClearColor=function(a){return a.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(a=!0,h=!0,v=!0){let M=0;if(a){let T=!1;if(B!==null){const w=B.texture.format;T=w===1033||w===1031||w===1029}if(T){const w=B.texture.type,N=w===1009||w===1014||w===1012||w===1020||w===1017||w===1018,V=Ae.getClearColor(),O=Ae.getClearAlpha(),H=V.r,z=V.g,Z=V.b;N?(S[0]=H,S[1]=z,S[2]=Z,S[3]=O,F.clearBufferuiv(F.COLOR,0,S)):(y[0]=H,y[1]=z,y[2]=Z,y[3]=O,F.clearBufferiv(F.COLOR,0,y))}else M|=F.COLOR_BUFFER_BIT}h&&(M|=F.DEPTH_BUFFER_BIT),v&&(M|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(M)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Ee.dispose(),$e.dispose(),Le.dispose(),x.dispose(),G.dispose(),ee.dispose(),Be.dispose(),I.dispose(),Re.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",_i),Y.removeEventListener("sessionend",gi),qt.stop()};function ne(a){a.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const a=at.autoReset,h=ye.enabled,v=ye.autoUpdate,M=ye.needsUpdate,T=ye.type;k(),at.autoReset=a,ye.enabled=h,ye.autoUpdate=v,ye.needsUpdate=M,ye.type=T}function Se(a){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",a.statusMessage)}function Ge(a){const h=a.target;h.removeEventListener("dispose",Ge),ht(h)}function ht(a){gt(a),Le.remove(a)}function gt(a){const h=Le.get(a).programs;h!==void 0&&(h.forEach(function(v){Re.releaseProgram(v)}),a.isShaderMaterial&&Re.releaseShaderCache(a))}this.renderBufferDirect=function(a,h,v,M,T,w){h===null&&(h=tt);const N=T.isMesh&&T.matrixWorld.determinant()<0,V=Ki(a,h,v,M,T);Ue.setMaterial(M,N);let O=v.index,H=1;if(M.wireframe===!0){if(O=ie.getWireframeAttribute(v),O===void 0)return;H=2}const z=v.drawRange,Z=v.attributes.position;let se=z.start*H,oe=(z.start+z.count)*H;w!==null&&(se=Math.max(se,w.start*H),oe=Math.min(oe,(w.start+w.count)*H)),O!==null?(se=Math.max(se,0),oe=Math.min(oe,O.count)):Z!=null&&(se=Math.max(se,0),oe=Math.min(oe,Z.count));const _e=oe-se;if(_e<0||_e===1/0)return;Be.setup(T,M,V,v,O);let me,ue=Te;if(O!==null&&(me=te.get(O),ue=Oe,ue.setIndex(me)),T.isMesh)M.wireframe===!0?(Ue.setLineWidth(M.wireframeLinewidth*st()),ue.setMode(F.LINES)):ue.setMode(F.TRIANGLES);else if(T.isLine){let re=M.linewidth;re===void 0&&(re=1),Ue.setLineWidth(re*st()),T.isLineSegments?ue.setMode(F.LINES):T.isLineLoop?ue.setMode(F.LINE_LOOP):ue.setMode(F.LINE_STRIP)}else T.isPoints?ue.setMode(F.POINTS):T.isSprite&&ue.setMode(F.TRIANGLES);if(T.isBatchedMesh)if(T._multiDrawInstances!==null)ue.renderMultiDrawInstances(T._multiDrawStarts,T._multiDrawCounts,T._multiDrawCount,T._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))ue.renderMultiDraw(T._multiDrawStarts,T._multiDrawCounts,T._multiDrawCount);else{const re=T._multiDrawStarts,qe=T._multiDrawCounts,De=T._multiDrawCount,lt=O?te.get(O).bytesPerElement:1,Qe=Le.get(M).currentProgram.getUniforms();for(let Ne=0;Ne<De;Ne++)Qe.setValue(F,"_gl_DrawID",Ne),ue.render(re[Ne]/lt,qe[Ne])}else if(T.isInstancedMesh)ue.renderInstances(se,_e,T.count);else if(v.isInstancedBufferGeometry){const re=v._maxInstanceCount!==void 0?v._maxInstanceCount:1/0,qe=Math.min(v.instanceCount,re);ue.renderInstances(se,_e,qe)}else ue.render(se,_e)};function et(a,h,v){a.transparent===!0&&a.side===2&&a.forceSinglePass===!1?(a.side=1,a.needsUpdate=!0,Cn(a,h,v),a.side=0,a.needsUpdate=!0,Cn(a,h,v),a.side=2):Cn(a,h,v)}this.compile=function(a,h,v=null){v===null&&(v=a),p=$e.get(v),p.init(h),C.push(p),v.traverseVisible(function(T){T.isLight&&T.layers.test(h.layers)&&(p.pushLight(T),T.castShadow&&p.pushShadow(T))}),a!==v&&a.traverseVisible(function(T){T.isLight&&T.layers.test(h.layers)&&(p.pushLight(T),T.castShadow&&p.pushShadow(T))}),p.setupLights();const M=new Set;return a.traverse(function(T){if(!(T.isMesh||T.isPoints||T.isLine||T.isSprite))return;const w=T.material;if(w)if(Array.isArray(w))for(let N=0;N<w.length;N++){const V=w[N];et(V,v,T),M.add(V)}else et(w,v,T),M.add(w)}),C.pop(),p=null,M},this.compileAsync=function(a,h,v=null){const M=this.compile(a,h,v);return new Promise(T=>{function w(){if(M.forEach(function(N){Le.get(N).currentProgram.isReady()&&M.delete(N)}),M.size===0){T(a);return}setTimeout(w,10)}Ze.get("KHR_parallel_shader_compile")!==null?w():setTimeout(w,10)})};let Ct=null;function Nt(a){Ct&&Ct(a)}function _i(){qt.stop()}function gi(){qt.start()}const qt=new Ns;qt.setAnimationLoop(Nt),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(a){Ct=a,Y.setAnimationLoop(a),a===null?qt.stop():qt.start()},Y.addEventListener("sessionstart",_i),Y.addEventListener("sessionend",gi),this.render=function(a,h){if(h!==void 0&&h.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(a.matrixWorldAutoUpdate===!0&&a.updateMatrixWorld(),h.parent===null&&h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(h),h=Y.getCamera()),a.isScene===!0&&a.onBeforeRender(b,a,h,B),p=$e.get(a,C.length),p.init(h),C.push(p),we.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse),Q.setFromProjectionMatrix(we),fe=this.localClippingEnabled,le=he.init(this.clippingPlanes,fe),_=Ee.get(a,P.length),_.init(),P.push(_),Y.enabled===!0&&Y.isPresenting===!0){const w=b.xr.getDepthSensingMesh();w!==null&&$n(w,h,-1/0,b.sortObjects)}$n(a,h,0,b.sortObjects),_.finish(),b.sortObjects===!0&&_.sort(de,ge),Xe=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Xe&&Ae.addToRenderList(_,a),this.info.render.frame++,le===!0&&he.beginShadows();const v=p.state.shadowsArray;ye.render(v,a,h),le===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const M=_.opaque,T=_.transmissive;if(p.setupLights(),h.isArrayCamera){const w=h.cameras;if(T.length>0)for(let N=0,V=w.length;N<V;N++){const O=w[N];vi(M,T,a,O)}Xe&&Ae.render(a);for(let N=0,V=w.length;N<V;N++){const O=w[N];Jn(_,a,O,O.viewport)}}else T.length>0&&vi(M,T,a,h),Xe&&Ae.render(a),Jn(_,a,h);B!==null&&(R.updateMultisampleRenderTarget(B),R.updateRenderTargetMipmap(B)),a.isScene===!0&&a.onAfterRender(b,a,h),Be.resetDefaultState(),A=-1,E=null,C.pop(),C.length>0?(p=C[C.length-1],le===!0&&he.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,P.pop(),P.length>0?_=P[P.length-1]:_=null};function $n(a,h,v,M){if(a.visible===!1)return;if(a.layers.test(h.layers)){if(a.isGroup)v=a.renderOrder;else if(a.isLOD)a.autoUpdate===!0&&a.update(h);else if(a.isLight)p.pushLight(a),a.castShadow&&p.pushShadow(a);else if(a.isSprite){if(!a.frustumCulled||Q.intersectsSprite(a)){M&&ze.setFromMatrixPosition(a.matrixWorld).applyMatrix4(we);const N=ee.update(a),V=a.material;V.visible&&_.push(a,N,V,v,ze.z,null)}}else if((a.isMesh||a.isLine||a.isPoints)&&(!a.frustumCulled||Q.intersectsObject(a))){const N=ee.update(a),V=a.material;if(M&&(a.boundingSphere!==void 0?(a.boundingSphere===null&&a.computeBoundingSphere(),ze.copy(a.boundingSphere.center)):(N.boundingSphere===null&&N.computeBoundingSphere(),ze.copy(N.boundingSphere.center)),ze.applyMatrix4(a.matrixWorld).applyMatrix4(we)),Array.isArray(V)){const O=N.groups;for(let H=0,z=O.length;H<z;H++){const Z=O[H],se=V[Z.materialIndex];se&&se.visible&&_.push(a,N,se,v,ze.z,Z)}}else V.visible&&_.push(a,N,V,v,ze.z,null)}}const w=a.children;for(let N=0,V=w.length;N<V;N++)$n(w[N],h,v,M)}function Jn(a,h,v,M){const T=a.opaque,w=a.transmissive,N=a.transparent;p.setupLightsView(v),le===!0&&he.setGlobalState(b.clippingPlanes,v),M&&Ue.viewport(D.copy(M)),T.length>0&&Rn(T,h,v),w.length>0&&Rn(w,h,v),N.length>0&&Rn(N,h,v),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function vi(a,h,v,M){if((v.isScene===!0?v.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[M.id]===void 0&&(p.state.transmissionRenderTarget[M.id]=new bn(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const w=p.state.transmissionRenderTarget[M.id],N=M.viewport||D;w.setSize(N.z,N.w);const V=b.getRenderTarget();b.setRenderTarget(w),b.getClearColor(j),ae=b.getClearAlpha(),ae<1&&b.setClearColor(16777215,.5),b.clear(),Xe&&Ae.render(v);const O=b.toneMapping;b.toneMapping=0;const H=M.viewport;if(M.viewport!==void 0&&(M.viewport=void 0),p.setupLightsView(M),le===!0&&he.setGlobalState(b.clippingPlanes,M),Rn(a,v,M),R.updateMultisampleRenderTarget(w),R.updateRenderTargetMipmap(w),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let z=!1;for(let Z=0,se=h.length;Z<se;Z++){const oe=h[Z],_e=oe.object,me=oe.geometry,ue=oe.material,re=oe.group;if(ue.side===2&&_e.layers.test(M.layers)){const qe=ue.side;ue.side=1,ue.needsUpdate=!0,xi(_e,v,M,me,ue,re),ue.side=qe,ue.needsUpdate=!0,z=!0}}z===!0&&(R.updateMultisampleRenderTarget(w),R.updateRenderTargetMipmap(w))}b.setRenderTarget(V),b.setClearColor(j,ae),H!==void 0&&(M.viewport=H),b.toneMapping=O}function Rn(a,h,v){const M=h.isScene===!0?h.overrideMaterial:null;for(let T=0,w=a.length;T<w;T++){const N=a[T],V=N.object,O=N.geometry,H=M===null?N.material:M,z=N.group;V.layers.test(v.layers)&&xi(V,h,v,O,H,z)}}function xi(a,h,v,M,T,w){a.onBeforeRender(b,h,v,M,T,w),a.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,a.matrixWorld),a.normalMatrix.getNormalMatrix(a.modelViewMatrix),T.onBeforeRender(b,h,v,M,a,w),T.transparent===!0&&T.side===2&&T.forceSinglePass===!1?(T.side=1,T.needsUpdate=!0,b.renderBufferDirect(v,h,M,T,a,w),T.side=0,T.needsUpdate=!0,b.renderBufferDirect(v,h,M,T,a,w),T.side=2):b.renderBufferDirect(v,h,M,T,a,w),a.onAfterRender(b,h,v,M,T,w)}function Cn(a,h,v){h.isScene!==!0&&(h=tt);const M=Le.get(a),T=p.state.lights,w=p.state.shadowsArray,N=T.state.version,V=Re.getParameters(a,T.state,w,h,v),O=Re.getProgramCacheKey(V);let H=M.programs;M.environment=a.isMeshStandardMaterial?h.environment:null,M.fog=h.fog,M.envMap=(a.isMeshStandardMaterial?G:x).get(a.envMap||M.environment),M.envMapRotation=M.environment!==null&&a.envMap===null?h.environmentRotation:a.envMapRotation,H===void 0&&(a.addEventListener("dispose",Ge),H=new Map,M.programs=H);let z=H.get(O);if(z!==void 0){if(M.currentProgram===z&&M.lightsStateVersion===N)return Qn(a,V),z}else V.uniforms=Re.getUniforms(a),a.onBeforeCompile(V,b),z=Re.acquireProgram(V,O),H.set(O,z),M.uniforms=V.uniforms;const Z=M.uniforms;return(!a.isShaderMaterial&&!a.isRawShaderMaterial||a.clipping===!0)&&(Z.clippingPlanes=he.uniform),Qn(a,V),M.needsLights=sn(a),M.lightsStateVersion=N,M.needsLights&&(Z.ambientLightColor.value=T.state.ambient,Z.lightProbe.value=T.state.probe,Z.directionalLights.value=T.state.directional,Z.directionalLightShadows.value=T.state.directionalShadow,Z.spotLights.value=T.state.spot,Z.spotLightShadows.value=T.state.spotShadow,Z.rectAreaLights.value=T.state.rectArea,Z.ltc_1.value=T.state.rectAreaLTC1,Z.ltc_2.value=T.state.rectAreaLTC2,Z.pointLights.value=T.state.point,Z.pointLightShadows.value=T.state.pointShadow,Z.hemisphereLights.value=T.state.hemi,Z.directionalShadowMap.value=T.state.directionalShadowMap,Z.directionalShadowMatrix.value=T.state.directionalShadowMatrix,Z.spotShadowMap.value=T.state.spotShadowMap,Z.spotLightMatrix.value=T.state.spotLightMatrix,Z.spotLightMap.value=T.state.spotLightMap,Z.pointShadowMap.value=T.state.pointShadowMap,Z.pointShadowMatrix.value=T.state.pointShadowMatrix),M.currentProgram=z,M.uniformsList=null,z}function jn(a){if(a.uniformsList===null){const h=a.currentProgram.getUniforms();a.uniformsList=ki.seqWithValue(h.seq,a.uniforms)}return a.uniformsList}function Qn(a,h){const v=Le.get(a);v.outputColorSpace=h.outputColorSpace,v.batching=h.batching,v.batchingColor=h.batchingColor,v.instancing=h.instancing,v.instancingColor=h.instancingColor,v.instancingMorph=h.instancingMorph,v.skinning=h.skinning,v.morphTargets=h.morphTargets,v.morphNormals=h.morphNormals,v.morphColors=h.morphColors,v.morphTargetsCount=h.morphTargetsCount,v.numClippingPlanes=h.numClippingPlanes,v.numIntersection=h.numClipIntersection,v.vertexAlphas=h.vertexAlphas,v.vertexTangents=h.vertexTangents,v.toneMapping=h.toneMapping}function Ki(a,h,v,M,T){h.isScene!==!0&&(h=tt),R.resetTextureUnits();const w=h.fog,N=M.isMeshStandardMaterial?h.environment:null,V=B===null?b.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:dn,O=(M.isMeshStandardMaterial?G:x).get(M.envMap||N),H=M.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,z=!!v.attributes.tangent&&(!!M.normalMap||M.anisotropy>0),Z=!!v.morphAttributes.position,se=!!v.morphAttributes.normal,oe=!!v.morphAttributes.color;let _e=0;M.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(_e=b.toneMapping);const me=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,ue=me!==void 0?me.length:0,re=Le.get(M),qe=p.state.lights;if(le===!0&&(fe===!0||a!==E)){const ke=a===E&&M.id===A;he.setState(M,a,ke)}let De=!1;M.version===re.__version?(re.needsLights&&re.lightsStateVersion!==qe.state.version||re.outputColorSpace!==V||T.isBatchedMesh&&re.batching===!1||!T.isBatchedMesh&&re.batching===!0||T.isBatchedMesh&&re.batchingColor===!0&&T.colorTexture===null||T.isBatchedMesh&&re.batchingColor===!1&&T.colorTexture!==null||T.isInstancedMesh&&re.instancing===!1||!T.isInstancedMesh&&re.instancing===!0||T.isSkinnedMesh&&re.skinning===!1||!T.isSkinnedMesh&&re.skinning===!0||T.isInstancedMesh&&re.instancingColor===!0&&T.instanceColor===null||T.isInstancedMesh&&re.instancingColor===!1&&T.instanceColor!==null||T.isInstancedMesh&&re.instancingMorph===!0&&T.morphTexture===null||T.isInstancedMesh&&re.instancingMorph===!1&&T.morphTexture!==null||re.envMap!==O||M.fog===!0&&re.fog!==w||re.numClippingPlanes!==void 0&&(re.numClippingPlanes!==he.numPlanes||re.numIntersection!==he.numIntersection)||re.vertexAlphas!==H||re.vertexTangents!==z||re.morphTargets!==Z||re.morphNormals!==se||re.morphColors!==oe||re.toneMapping!==_e||re.morphTargetsCount!==ue)&&(De=!0):(De=!0,re.__version=M.version);let lt=re.currentProgram;De===!0&&(lt=Cn(M,h,T));let Qe=!1,Ne=!1,ct=!1;const Ye=lt.getUniforms(),nt=re.uniforms;if(Ue.useProgram(lt.program)&&(Qe=!0,Ne=!0,ct=!0),M.id!==A&&(A=M.id,Ne=!0),Qe||E!==a){Ue.buffers.depth.getReversed()?(pe.copy(a.projectionMatrix),fa(pe),da(pe),Ye.setValue(F,"projectionMatrix",pe)):Ye.setValue(F,"projectionMatrix",a.projectionMatrix),Ye.setValue(F,"viewMatrix",a.matrixWorldInverse);const vt=Ye.map.cameraPosition;vt!==void 0&&vt.setValue(F,Fe.setFromMatrixPosition(a.matrixWorld)),Ke.logarithmicDepthBuffer&&Ye.setValue(F,"logDepthBufFC",2/(Math.log(a.far+1)/Math.LN2)),(M.isMeshPhongMaterial||M.isMeshToonMaterial||M.isMeshLambertMaterial||M.isMeshBasicMaterial||M.isMeshStandardMaterial||M.isShaderMaterial)&&Ye.setValue(F,"isOrthographic",a.isOrthographicCamera===!0),E!==a&&(E=a,Ne=!0,ct=!0)}if(T.isSkinnedMesh){Ye.setOptional(F,T,"bindMatrix"),Ye.setOptional(F,T,"bindMatrixInverse");const ke=T.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),Ye.setValue(F,"boneTexture",ke.boneTexture,R))}T.isBatchedMesh&&(Ye.setOptional(F,T,"batchingTexture"),Ye.setValue(F,"batchingTexture",T._matricesTexture,R),Ye.setOptional(F,T,"batchingIdTexture"),Ye.setValue(F,"batchingIdTexture",T._indirectTexture,R),Ye.setOptional(F,T,"batchingColorTexture"),T._colorsTexture!==null&&Ye.setValue(F,"batchingColorTexture",T._colorsTexture,R));const Je=v.morphAttributes;if((Je.position!==void 0||Je.normal!==void 0||Je.color!==void 0)&&Ce.update(T,v,lt),(Ne||re.receiveShadow!==T.receiveShadow)&&(re.receiveShadow=T.receiveShadow,Ye.setValue(F,"receiveShadow",T.receiveShadow)),M.isMeshGouraudMaterial&&M.envMap!==null&&(nt.envMap.value=O,nt.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1),M.isMeshStandardMaterial&&M.envMap===null&&h.environment!==null&&(nt.envMapIntensity.value=h.environmentIntensity),Ne&&(Ye.setValue(F,"toneMappingExposure",b.toneMappingExposure),re.needsLights&&Yt(nt,ct),w&&M.fog===!0&&xe.refreshFogUniforms(nt,w),xe.refreshMaterialUniforms(nt,M,K,ce,p.state.transmissionRenderTarget[a.id]),ki.upload(F,jn(re),nt,R)),M.isShaderMaterial&&M.uniformsNeedUpdate===!0&&(ki.upload(F,jn(re),nt,R),M.uniformsNeedUpdate=!1),M.isSpriteMaterial&&Ye.setValue(F,"center",T.center),Ye.setValue(F,"modelViewMatrix",T.modelViewMatrix),Ye.setValue(F,"normalMatrix",T.normalMatrix),Ye.setValue(F,"modelMatrix",T.matrixWorld),M.isShaderMaterial||M.isRawShaderMaterial){const ke=M.uniformsGroups;for(let vt=0,Rt=ke.length;vt<Rt;vt++){const wt=ke[vt];I.update(wt,lt),I.bind(wt,lt)}}return lt}function Yt(a,h){a.ambientLightColor.needsUpdate=h,a.lightProbe.needsUpdate=h,a.directionalLights.needsUpdate=h,a.directionalLightShadows.needsUpdate=h,a.pointLights.needsUpdate=h,a.pointLightShadows.needsUpdate=h,a.spotLights.needsUpdate=h,a.spotLightShadows.needsUpdate=h,a.rectAreaLights.needsUpdate=h,a.hemisphereLights.needsUpdate=h}function sn(a){return a.isMeshLambertMaterial||a.isMeshToonMaterial||a.isMeshPhongMaterial||a.isMeshStandardMaterial||a.isShadowMaterial||a.isShaderMaterial&&a.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(a,h,v){Le.get(a.texture).__webglTexture=h,Le.get(a.depthTexture).__webglTexture=v;const M=Le.get(a);M.__hasExternalTextures=!0,M.__autoAllocateDepthBuffer=v===void 0,M.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),M.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(a,h){const v=Le.get(a);v.__webglFramebuffer=h,v.__useDefaultFramebuffer=h===void 0},this.setRenderTarget=function(a,h=0,v=0){B=a,L=h,U=v;let M=!0,T=null,w=!1,N=!1;if(a){const O=Le.get(a);if(O.__useDefaultFramebuffer!==void 0)Ue.bindFramebuffer(F.FRAMEBUFFER,null),M=!1;else if(O.__webglFramebuffer===void 0)R.setupRenderTarget(a);else if(O.__hasExternalTextures)R.rebindTextures(a,Le.get(a.texture).__webglTexture,Le.get(a.depthTexture).__webglTexture);else if(a.depthBuffer){const Z=a.depthTexture;if(O.__boundDepthTexture!==Z){if(Z!==null&&Le.has(Z)&&(a.width!==Z.image.width||a.height!==Z.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(a)}}const H=a.texture;(H.isData3DTexture||H.isDataArrayTexture||H.isCompressedArrayTexture)&&(N=!0);const z=Le.get(a).__webglFramebuffer;a.isWebGLCubeRenderTarget?(Array.isArray(z[h])?T=z[h][v]:T=z[h],w=!0):a.samples>0&&R.useMultisampledRTT(a)===!1?T=Le.get(a).__webglMultisampledFramebuffer:Array.isArray(z)?T=z[v]:T=z,D.copy(a.viewport),$.copy(a.scissor),q=a.scissorTest}else D.copy(be).multiplyScalar(K).floor(),$.copy(Ie).multiplyScalar(K).floor(),q=We;if(Ue.bindFramebuffer(F.FRAMEBUFFER,T)&&M&&Ue.drawBuffers(a,T),Ue.viewport(D),Ue.scissor($),Ue.setScissorTest(q),w){const O=Le.get(a.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+h,O.__webglTexture,v)}else if(N){const O=Le.get(a.texture),H=h||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,O.__webglTexture,v||0,H)}A=-1},this.readRenderTargetPixels=function(a,h,v,M,T,w,N){if(!(a&&a.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let V=Le.get(a).__webglFramebuffer;if(a.isWebGLCubeRenderTarget&&N!==void 0&&(V=V[N]),V){Ue.bindFramebuffer(F.FRAMEBUFFER,V);try{const O=a.texture,H=O.format,z=O.type;if(!Ke.textureFormatReadable(H)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(z)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}h>=0&&h<=a.width-M&&v>=0&&v<=a.height-T&&F.readPixels(h,v,M,T,Pe.convert(H),Pe.convert(z),w)}finally{const O=B!==null?Le.get(B).__webglFramebuffer:null;Ue.bindFramebuffer(F.FRAMEBUFFER,O)}}},this.readRenderTargetPixelsAsync=async function(a,h,v,M,T,w,N){if(!(a&&a.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let V=Le.get(a).__webglFramebuffer;if(a.isWebGLCubeRenderTarget&&N!==void 0&&(V=V[N]),V){const O=a.texture,H=O.format,z=O.type;if(!Ke.textureFormatReadable(H))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(z))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(h>=0&&h<=a.width-M&&v>=0&&v<=a.height-T){Ue.bindFramebuffer(F.FRAMEBUFFER,V);const Z=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Z),F.bufferData(F.PIXEL_PACK_BUFFER,w.byteLength,F.STREAM_READ),F.readPixels(h,v,M,T,Pe.convert(H),Pe.convert(z),0);const se=B!==null?Le.get(B).__webglFramebuffer:null;Ue.bindFramebuffer(F.FRAMEBUFFER,se);const oe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await ha(F,oe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Z),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,w),F.deleteBuffer(Z),F.deleteSync(oe),w}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(a,h=null,v=0){a.isTexture!==!0&&(ri("WebGLRenderer: copyFramebufferToTexture function signature has changed."),h=arguments[0]||null,a=arguments[1]);const M=Math.pow(2,-v),T=Math.floor(a.image.width*M),w=Math.floor(a.image.height*M),N=h!==null?h.x:0,V=h!==null?h.y:0;R.setTexture2D(a,0),F.copyTexSubImage2D(F.TEXTURE_2D,v,0,0,N,V,T,w),Ue.unbindTexture()},this.copyTextureToTexture=function(a,h,v=null,M=null,T=0){a.isTexture!==!0&&(ri("WebGLRenderer: copyTextureToTexture function signature has changed."),M=arguments[0]||null,a=arguments[1],h=arguments[2],T=arguments[3]||0,v=null);let w,N,V,O,H,z,Z,se,oe;const _e=a.isCompressedTexture?a.mipmaps[T]:a.image;v!==null?(w=v.max.x-v.min.x,N=v.max.y-v.min.y,V=v.isBox3?v.max.z-v.min.z:1,O=v.min.x,H=v.min.y,z=v.isBox3?v.min.z:0):(w=_e.width,N=_e.height,V=_e.depth||1,O=0,H=0,z=0),M!==null?(Z=M.x,se=M.y,oe=M.z):(Z=0,se=0,oe=0);const me=Pe.convert(h.format),ue=Pe.convert(h.type);let re;h.isData3DTexture?(R.setTexture3D(h,0),re=F.TEXTURE_3D):h.isDataArrayTexture||h.isCompressedArrayTexture?(R.setTexture2DArray(h,0),re=F.TEXTURE_2D_ARRAY):(R.setTexture2D(h,0),re=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,h.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,h.unpackAlignment);const qe=F.getParameter(F.UNPACK_ROW_LENGTH),De=F.getParameter(F.UNPACK_IMAGE_HEIGHT),lt=F.getParameter(F.UNPACK_SKIP_PIXELS),Qe=F.getParameter(F.UNPACK_SKIP_ROWS),Ne=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,_e.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,_e.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,O),F.pixelStorei(F.UNPACK_SKIP_ROWS,H),F.pixelStorei(F.UNPACK_SKIP_IMAGES,z);const ct=a.isDataArrayTexture||a.isData3DTexture,Ye=h.isDataArrayTexture||h.isData3DTexture;if(a.isRenderTargetTexture||a.isDepthTexture){const nt=Le.get(a),Je=Le.get(h),ke=Le.get(nt.__renderTarget),vt=Le.get(Je.__renderTarget);Ue.bindFramebuffer(F.READ_FRAMEBUFFER,ke.__webglFramebuffer),Ue.bindFramebuffer(F.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Rt=0;Rt<V;Rt++)ct&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Le.get(a).__webglTexture,T,z+Rt),a.isDepthTexture?(Ye&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Le.get(h).__webglTexture,T,oe+Rt),F.blitFramebuffer(O,H,w,N,Z,se,w,N,F.DEPTH_BUFFER_BIT,F.NEAREST)):Ye?F.copyTexSubImage3D(re,T,Z,se,oe+Rt,O,H,w,N):F.copyTexSubImage2D(re,T,Z,se,oe+Rt,O,H,w,N);Ue.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ye?a.isDataTexture||a.isData3DTexture?F.texSubImage3D(re,T,Z,se,oe,w,N,V,me,ue,_e.data):h.isCompressedArrayTexture?F.compressedTexSubImage3D(re,T,Z,se,oe,w,N,V,me,_e.data):F.texSubImage3D(re,T,Z,se,oe,w,N,V,me,ue,_e):a.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,T,Z,se,w,N,me,ue,_e.data):a.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,T,Z,se,_e.width,_e.height,me,_e.data):F.texSubImage2D(F.TEXTURE_2D,T,Z,se,w,N,me,ue,_e);F.pixelStorei(F.UNPACK_ROW_LENGTH,qe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,De),F.pixelStorei(F.UNPACK_SKIP_PIXELS,lt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Qe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ne),T===0&&h.generateMipmaps&&F.generateMipmap(re),Ue.unbindTexture()},this.copyTextureToTexture3D=function(a,h,v=null,M=null,T=0){return a.isTexture!==!0&&(ri("WebGLRenderer: copyTextureToTexture3D function signature has changed."),v=arguments[0]||null,M=arguments[1]||null,a=arguments[2],h=arguments[3],T=arguments[4]||0),ri('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(a,h,v,M,T)},this.initRenderTarget=function(a){Le.get(a).__webglFramebuffer===void 0&&R.setupRenderTarget(a)},this.initTexture=function(a){a.isCubeTexture?R.setTextureCube(a,0):a.isData3DTexture?R.setTexture3D(a,0):a.isDataArrayTexture||a.isCompressedArrayTexture?R.setTexture2DArray(a,0):R.setTexture2D(a,0),Ue.unbindTexture()},this.resetState=function(){L=0,U=0,B=null,Ue.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}class Ef extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ch extends St{constructor(e=null,t=1,n=1,r,s,o,l,c,u=1003,f=1003,d,m){super(null,o,l,c,u,f,r,s,d,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tf extends Wt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class yf extends St{constructor(e,t,n,r,s,o,l,c,u){super(e,t,n,r,s,o,l,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Wi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class wh{constructor(e,t,n){const r=this;let s=!1,o=0,l=0,c;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){l++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,l),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,l),o===l&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,d){return u.push(f,d),this},this.removeHandler=function(f){const d=u.indexOf(f);return d!==-1&&u.splice(d,2),this},this.getHandler=function(f){for(let d=0,m=u.length;d<m;d+=2){const g=u[d],S=u[d+1];if(g.global&&(g.lastIndex=0),g.test(f))return S}return null}}}const Ph=new wh;class pi{constructor(e){this.manager=e!==void 0?e:Ph,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}pi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qt={};class Dh extends Error{constructor(e,t){super(e),this.response=t}}class Lh extends pi{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Wi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Qt[e]!==void 0){Qt[e].push({onLoad:t,onProgress:n,onError:r});return}Qt[e]=[],Qt[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,c=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const f=Qt[e],d=u.body.getReader(),m=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),g=m?parseInt(m):0,S=g!==0;let y=0;const _=new ReadableStream({start(p){P();function P(){d.read().then(({done:C,value:b})=>{if(C)p.close();else{y+=b.byteLength;const X=new ProgressEvent("progress",{lengthComputable:S,loaded:y,total:g});for(let L=0,U=f.length;L<U;L++){const B=f[L];B.onProgress&&B.onProgress(X)}p.enqueue(b),P()}},C=>{p.error(C)})}}});return new Response(_)}else throw new Dh(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(f=>new DOMParser().parseFromString(f,l));case"json":return u.json();default:if(l===void 0)return u.text();{const d=/charset="?([^;"\s]*)"?/i.exec(l),m=d&&d[1]?d[1].toLowerCase():void 0,g=new TextDecoder(m);return u.arrayBuffer().then(S=>g.decode(S))}}}).then(u=>{Wi.add(e,u);const f=Qt[e];delete Qt[e];for(let d=0,m=f.length;d<m;d++){const g=f[d];g.onLoad&&g.onLoad(u)}}).catch(u=>{const f=Qt[e];if(f===void 0)throw this.manager.itemError(e),u;delete Qt[e];for(let d=0,m=f.length;d<m;d++){const g=f[d];g.onError&&g.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Uh extends pi{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Wi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const l=ui("img");function c(){f(),Wi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(d){f(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){l.removeEventListener("load",c,!1),l.removeEventListener("error",u,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),s.manager.itemStart(e),l.src=e,l}}class Ih extends pi{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new Ch,l=new Lh(this.manager);return l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setPath(this.path),l.setWithCredentials(s.withCredentials),l.load(e,function(c){let u;try{u=s.parse(c)}catch(f){if(r!==void 0)r(f);else{console.error(f);return}}u.image!==void 0?o.image=u.image:u.data!==void 0&&(o.image.width=u.width,o.image.height=u.height,o.image.data=u.data),o.wrapS=u.wrapS!==void 0?u.wrapS:1001,o.wrapT=u.wrapT!==void 0?u.wrapT:1001,o.magFilter=u.magFilter!==void 0?u.magFilter:1006,o.minFilter=u.minFilter!==void 0?u.minFilter:1006,o.anisotropy=u.anisotropy!==void 0?u.anisotropy:1,u.colorSpace!==void 0&&(o.colorSpace=u.colorSpace),u.flipY!==void 0&&(o.flipY=u.flipY),u.format!==void 0&&(o.format=u.format),u.type!==void 0&&(o.type=u.type),u.mipmaps!==void 0&&(o.mipmaps=u.mipmaps,o.minFilter=1008),u.mipmapCount===1&&(o.minFilter=1006),u.generateMipmaps!==void 0&&(o.generateMipmaps=u.generateMipmaps),o.needsUpdate=!0,t&&t(o,u)},n,r),o}}class Af extends pi{constructor(e){super(e)}load(e,t,n,r){const s=new St,o=new Uh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){s.image=l,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class bf extends mn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Ft=Uint8Array,Wn=Uint16Array,Fh=Int32Array,Vs=new Ft([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ks=new Ft([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Nh=new Ft([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ws=function(i,e){for(var t=new Wn(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new Fh(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},Xs=Ws(Vs,2),qs=Xs.b,Oh=Xs.r;qs[28]=258,Oh[258]=28;var Bh=Ws(ks,0),Gh=Bh.b,br=new Wn(32768);for(var ut=0;ut<32768;++ut){var fn=(ut&43690)>>1|(ut&21845)<<1;fn=(fn&52428)>>2|(fn&13107)<<2,fn=(fn&61680)>>4|(fn&3855)<<4,br[ut]=((fn&65280)>>8|(fn&255)<<8)>>1}var li=(function(i,e,t){for(var n=i.length,r=0,s=new Wn(e);r<n;++r)i[r]&&++s[i[r]-1];var o=new Wn(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var l;if(t){l=new Wn(1<<e);var c=15-e;for(r=0;r<n;++r)if(i[r])for(var u=r<<4|i[r],f=e-i[r],d=o[i[r]-1]++<<f,m=d|(1<<f)-1;d<=m;++d)l[br[d]>>c]=u}else for(l=new Wn(n),r=0;r<n;++r)i[r]&&(l[r]=br[o[i[r]-1]++]>>15-i[r]);return l}),mi=new Ft(288);for(var ut=0;ut<144;++ut)mi[ut]=8;for(var ut=144;ut<256;++ut)mi[ut]=9;for(var ut=256;ut<280;++ut)mi[ut]=7;for(var ut=280;ut<288;++ut)mi[ut]=8;var Ys=new Ft(32);for(var ut=0;ut<32;++ut)Ys[ut]=5;var zh=li(mi,9,1),Hh=li(Ys,5,1),Tr=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},zt=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},yr=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},Vh=function(i){return(i+7)/8|0},kh=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new Ft(i.subarray(e,t))},Wh=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Ht=function(i,e,t){var n=new Error(e||Wh[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Ht),!t)throw n;return n},Xh=function(i,e,t,n){var r=i.length,s=0;if(!r||e.f&&!e.l)return t||new Ft(0);var o=!t,l=o||e.i!=2,c=e.i;o&&(t=new Ft(r*3));var u=function(tt){var Xe=t.length;if(tt>Xe){var st=new Ft(Math.max(Xe*2,tt));st.set(t),t=st}},f=e.f||0,d=e.p||0,m=e.b||0,g=e.l,S=e.d,y=e.m,_=e.n,p=r*8;do{if(!g){f=zt(i,d,1);var P=zt(i,d+1,3);if(d+=3,P)if(P==1)g=zh,S=Hh,y=9,_=5;else if(P==2){var L=zt(i,d,31)+257,U=zt(i,d+10,15)+4,B=L+zt(i,d+5,31)+1;d+=14;for(var A=new Ft(B),E=new Ft(19),D=0;D<U;++D)E[Nh[D]]=zt(i,d+D*3,7);d+=U*3;for(var $=Tr(E),q=(1<<$)-1,j=li(E,$,1),D=0;D<B;){var ae=j[zt(i,d,q)];d+=ae&15;var C=ae>>4;if(C<16)A[D++]=C;else{var J=0,ce=0;for(C==16?(ce=3+zt(i,d,3),d+=2,J=A[D-1]):C==17?(ce=3+zt(i,d,7),d+=3):C==18&&(ce=11+zt(i,d,127),d+=7);ce--;)A[D++]=J}}var K=A.subarray(0,L),de=A.subarray(L);y=Tr(K),_=Tr(de),g=li(K,y,1),S=li(de,_,1)}else Ht(1);else{var C=Vh(d)+4,b=i[C-4]|i[C-3]<<8,X=C+b;if(X>r){c&&Ht(0);break}l&&u(m+b),t.set(i.subarray(C,X),m),e.b=m+=b,e.p=d=X*8,e.f=f;continue}if(d>p){c&&Ht(0);break}}l&&u(m+131072);for(var ge=(1<<y)-1,be=(1<<_)-1,Ie=d;;Ie=d){var J=g[yr(i,d)&ge],We=J>>4;if(d+=J&15,d>p){c&&Ht(0);break}if(J||Ht(2),We<256)t[m++]=We;else if(We==256){Ie=d,g=null;break}else{var Q=We-254;if(We>264){var D=We-257,le=Vs[D];Q=zt(i,d,(1<<le)-1)+qs[D],d+=le}var fe=S[yr(i,d)&be],pe=fe>>4;fe||Ht(3),d+=fe&15;var de=Gh[pe];if(pe>3){var le=ks[pe];de+=yr(i,d)&(1<<le)-1,d+=le}if(d>p){c&&Ht(0);break}l&&u(m+131072);var we=m+Q;if(m<de){var Fe=s-de,ze=Math.min(de,we);for(Fe+m<0&&Ht(3);m<ze;++m)t[m]=n[Fe+m]}for(;m<we;++m)t[m]=t[m-de]}}e.l=g,e.p=Ie,e.b=m,e.f=f,g&&(f=1,e.m=y,e.d=S,e.n=_)}while(!f);return m!=t.length&&o?kh(t,0,m):t.subarray(0,m)},qh=new Ft(0),Yh=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&Ht(6,"invalid zlib data"),(i[1]>>5&1)==1&&Ht(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function Vi(i,e){return Xh(i.subarray(Yh(i),-4),{i:2},e,e)}var Zh=typeof TextDecoder<"u"&&new TextDecoder,Kh=0;try{Zh.decode(qh,{stream:!0}),Kh=1}catch{}class Rf extends Ih{constructor(e){super(e),this.type=1016}parse(e){const A=Math.pow(2.7182818,2.2);function E(a,h){let v=0;for(let T=0;T<65536;++T)(T==0||a[T>>3]&1<<(T&7))&&(h[v++]=T);const M=v-1;for(;v<65536;)h[v++]=0;return M}function D(a){for(let h=0;h<16384;h++)a[h]={},a[h].len=0,a[h].lit=0,a[h].p=null}const $={l:0,c:0,lc:0};function q(a,h,v,M,T){for(;v<a;)h=h<<8|Te(M,T),v+=8;v-=a,$.l=h>>v&(1<<a)-1,$.c=h,$.lc=v}const j=new Array(59);function ae(a){for(let v=0;v<=58;++v)j[v]=0;for(let v=0;v<65537;++v)j[a[v]]+=1;let h=0;for(let v=58;v>0;--v){const M=h+j[v]>>1;j[v]=h,h=M}for(let v=0;v<65537;++v){const M=a[v];M>0&&(a[v]=M|j[M]++<<6)}}function J(a,h,v,M,T,w){const N=h;let V=0,O=0;for(;M<=T;M++){if(N.value-h.value>v)return!1;q(6,V,O,a,N);const H=$.l;if(V=$.c,O=$.lc,w[M]=H,H==63){if(N.value-h.value>v)throw new Error("Something wrong with hufUnpackEncTable");q(8,V,O,a,N);let z=$.l+6;if(V=$.c,O=$.lc,M+z>T+1)throw new Error("Something wrong with hufUnpackEncTable");for(;z--;)w[M++]=0;M--}else if(H>=59){let z=H-59+2;if(M+z>T+1)throw new Error("Something wrong with hufUnpackEncTable");for(;z--;)w[M++]=0;M--}}ae(w)}function ce(a){return a&63}function K(a){return a>>6}function de(a,h,v,M){for(;h<=v;h++){const T=K(a[h]),w=ce(a[h]);if(T>>w)throw new Error("Invalid table entry");if(w>14){const N=M[T>>w-14];if(N.len)throw new Error("Invalid table entry");if(N.lit++,N.p){const V=N.p;N.p=new Array(N.lit);for(let O=0;O<N.lit-1;++O)N.p[O]=V[O]}else N.p=new Array(1);N.p[N.lit-1]=h}else if(w){let N=0;for(let V=1<<14-w;V>0;V--){const O=M[(T<<14-w)+N];if(O.len||O.p)throw new Error("Invalid table entry");O.len=w,O.lit=h,N++}}}return!0}const ge={c:0,lc:0};function be(a,h,v,M){a=a<<8|Te(v,M),h+=8,ge.c=a,ge.lc=h}const Ie={c:0,lc:0};function We(a,h,v,M,T,w,N,V,O){if(a==h){M<8&&(be(v,M,T,w),v=ge.c,M=ge.lc),M-=8;let H=v>>M;if(H=new Uint8Array([H])[0],V.value+H>O)return!1;const z=N[V.value-1];for(;H-- >0;)N[V.value++]=z}else if(V.value<O)N[V.value++]=a;else return!1;Ie.c=v,Ie.lc=M}function Q(a){return a&65535}function le(a){const h=Q(a);return h>32767?h-65536:h}const fe={a:0,b:0};function pe(a,h){const v=le(a),T=le(h),w=v+(T&1)+(T>>1),N=w,V=w-T;fe.a=N,fe.b=V}function we(a,h){const v=Q(a),M=Q(h),T=v-(M>>1)&65535,w=M+T-32768&65535;fe.a=w,fe.b=T}function Fe(a,h,v,M,T,w,N){const V=N<16384,O=v>T?T:v;let H=1,z,Z;for(;H<=O;)H<<=1;for(H>>=1,z=H,H>>=1;H>=1;){Z=0;const se=Z+w*(T-z),oe=w*H,_e=w*z,me=M*H,ue=M*z;let re,qe,De,lt;for(;Z<=se;Z+=_e){let Qe=Z;const Ne=Z+M*(v-z);for(;Qe<=Ne;Qe+=ue){const ct=Qe+me,Ye=Qe+oe,nt=Ye+me;V?(pe(a[Qe+h],a[Ye+h]),re=fe.a,De=fe.b,pe(a[ct+h],a[nt+h]),qe=fe.a,lt=fe.b,pe(re,qe),a[Qe+h]=fe.a,a[ct+h]=fe.b,pe(De,lt),a[Ye+h]=fe.a,a[nt+h]=fe.b):(we(a[Qe+h],a[Ye+h]),re=fe.a,De=fe.b,we(a[ct+h],a[nt+h]),qe=fe.a,lt=fe.b,we(re,qe),a[Qe+h]=fe.a,a[ct+h]=fe.b,we(De,lt),a[Ye+h]=fe.a,a[nt+h]=fe.b)}if(v&H){const ct=Qe+oe;V?pe(a[Qe+h],a[ct+h]):we(a[Qe+h],a[ct+h]),re=fe.a,a[ct+h]=fe.b,a[Qe+h]=re}}if(T&H){let Qe=Z;const Ne=Z+M*(v-z);for(;Qe<=Ne;Qe+=ue){const ct=Qe+me;V?pe(a[Qe+h],a[ct+h]):we(a[Qe+h],a[ct+h]),re=fe.a,a[ct+h]=fe.b,a[Qe+h]=re}}z=H,H>>=1}return Z}function ze(a,h,v,M,T,w,N,V,O){let H=0,z=0;const Z=N,se=Math.trunc(M.value+(T+7)/8);for(;M.value<se;)for(be(H,z,v,M),H=ge.c,z=ge.lc;z>=14;){const _e=H>>z-14&16383,me=h[_e];if(me.len)z-=me.len,We(me.lit,w,H,z,v,M,V,O,Z),H=Ie.c,z=Ie.lc;else{if(!me.p)throw new Error("hufDecode issues");let ue;for(ue=0;ue<me.lit;ue++){const re=ce(a[me.p[ue]]);for(;z<re&&M.value<se;)be(H,z,v,M),H=ge.c,z=ge.lc;if(z>=re&&K(a[me.p[ue]])==(H>>z-re&(1<<re)-1)){z-=re,We(me.p[ue],w,H,z,v,M,V,O,Z),H=Ie.c,z=Ie.lc;break}}if(ue==me.lit)throw new Error("hufDecode issues")}}const oe=8-T&7;for(H>>=oe,z-=oe;z>0;){const _e=h[H<<14-z&16383];if(_e.len)z-=_e.len,We(_e.lit,w,H,z,v,M,V,O,Z),H=Ie.c,z=Ie.lc;else throw new Error("hufDecode issues")}return!0}function tt(a,h,v,M,T,w){const N={value:0},V=v.value,O=Ce(h,v),H=Ce(h,v);v.value+=4;const z=Ce(h,v);if(v.value+=4,O<0||O>=65537||H<0||H>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const Z=new Array(65537),se=new Array(16384);D(se);const oe=M-(v.value-V);if(J(a,v,oe,O,H,Z),z>8*(M-(v.value-V)))throw new Error("Something wrong with hufUncompress");de(Z,O,H,se),ze(Z,se,a,v,z,H,w,T,N)}function Xe(a,h,v){for(let M=0;M<v;++M)h[M]=a[h[M]]}function st(a){for(let h=1;h<a.length;h++){const v=a[h-1]+a[h]-128;a[h]=v}}function F(a,h){let v=0,M=Math.floor((a.length+1)/2),T=0;const w=a.length-1;for(;!(T>w||(h[T++]=a[v++],T>w));)h[T++]=a[M++]}function yt(a){let h=a.byteLength;const v=new Array;let M=0;const T=new DataView(a);for(;h>0;){const w=T.getInt8(M++);if(w<0){const N=-w;h-=N+1;for(let V=0;V<N;V++)v.push(T.getUint8(M++))}else{const N=w;h-=2;const V=T.getUint8(M++);for(let O=0;O<N+1;O++)v.push(V)}}return v}function Ze(a,h,v,M,T,w){let N=new DataView(w.buffer);const V=v[a.idx[0]].width,O=v[a.idx[0]].height,H=3,z=Math.floor(V/8),Z=Math.ceil(V/8),se=Math.ceil(O/8),oe=V-(Z-1)*8,_e=O-(se-1)*8,me={value:0},ue=new Array(H),re=new Array(H),qe=new Array(H),De=new Array(H),lt=new Array(H);for(let Ne=0;Ne<H;++Ne)lt[Ne]=h[a.idx[Ne]],ue[Ne]=Ne<1?0:ue[Ne-1]+Z*se,re[Ne]=new Float32Array(64),qe[Ne]=new Uint16Array(64),De[Ne]=new Uint16Array(Z*64);for(let Ne=0;Ne<se;++Ne){let ct=8;Ne==se-1&&(ct=_e);let Ye=8;for(let Je=0;Je<Z;++Je){Je==Z-1&&(Ye=oe);for(let ke=0;ke<H;++ke)qe[ke].fill(0),qe[ke][0]=T[ue[ke]++],Ke(me,M,qe[ke]),Ue(qe[ke],re[ke]),at(re[ke]);Le(re);for(let ke=0;ke<H;++ke)R(re[ke],De[ke],Je*64)}let nt=0;for(let Je=0;Je<H;++Je){const ke=v[a.idx[Je]].type;for(let vt=8*Ne;vt<8*Ne+ct;++vt){nt=lt[Je][vt];for(let Rt=0;Rt<z;++Rt){const wt=Rt*64+(vt&7)*8;N.setUint16(nt+0*ke,De[Je][wt+0],!0),N.setUint16(nt+2*ke,De[Je][wt+1],!0),N.setUint16(nt+4*ke,De[Je][wt+2],!0),N.setUint16(nt+6*ke,De[Je][wt+3],!0),N.setUint16(nt+8*ke,De[Je][wt+4],!0),N.setUint16(nt+10*ke,De[Je][wt+5],!0),N.setUint16(nt+12*ke,De[Je][wt+6],!0),N.setUint16(nt+14*ke,De[Je][wt+7],!0),nt+=16*ke}}if(z!=Z)for(let vt=8*Ne;vt<8*Ne+ct;++vt){const Rt=lt[Je][vt]+8*z*2*ke,wt=z*64+(vt&7)*8;for(let Si=0;Si<Ye;++Si)N.setUint16(Rt+Si*2*ke,De[Je][wt+Si],!0)}}}const Qe=new Uint16Array(V);N=new DataView(w.buffer);for(let Ne=0;Ne<H;++Ne){v[a.idx[Ne]].decoded=!0;const ct=v[a.idx[Ne]].type;if(v[Ne].type==2)for(let Ye=0;Ye<O;++Ye){const nt=lt[Ne][Ye];for(let Je=0;Je<V;++Je)Qe[Je]=N.getUint16(nt+Je*2*ct,!0);for(let Je=0;Je<V;++Je)N.setFloat32(nt+Je*2*ct,k(Qe[Je]),!0)}}}function Ke(a,h,v){let M,T=1;for(;T<64;)M=h[a.value],M==65280?T=64:M>>8==255?T+=M&255:(v[T]=M,T++),a.value++}function Ue(a,h){h[0]=k(a[0]),h[1]=k(a[1]),h[2]=k(a[5]),h[3]=k(a[6]),h[4]=k(a[14]),h[5]=k(a[15]),h[6]=k(a[27]),h[7]=k(a[28]),h[8]=k(a[2]),h[9]=k(a[4]),h[10]=k(a[7]),h[11]=k(a[13]),h[12]=k(a[16]),h[13]=k(a[26]),h[14]=k(a[29]),h[15]=k(a[42]),h[16]=k(a[3]),h[17]=k(a[8]),h[18]=k(a[12]),h[19]=k(a[17]),h[20]=k(a[25]),h[21]=k(a[30]),h[22]=k(a[41]),h[23]=k(a[43]),h[24]=k(a[9]),h[25]=k(a[11]),h[26]=k(a[18]),h[27]=k(a[24]),h[28]=k(a[31]),h[29]=k(a[40]),h[30]=k(a[44]),h[31]=k(a[53]),h[32]=k(a[10]),h[33]=k(a[19]),h[34]=k(a[23]),h[35]=k(a[32]),h[36]=k(a[39]),h[37]=k(a[45]),h[38]=k(a[52]),h[39]=k(a[54]),h[40]=k(a[20]),h[41]=k(a[22]),h[42]=k(a[33]),h[43]=k(a[38]),h[44]=k(a[46]),h[45]=k(a[51]),h[46]=k(a[55]),h[47]=k(a[60]),h[48]=k(a[21]),h[49]=k(a[34]),h[50]=k(a[37]),h[51]=k(a[47]),h[52]=k(a[50]),h[53]=k(a[56]),h[54]=k(a[59]),h[55]=k(a[61]),h[56]=k(a[35]),h[57]=k(a[36]),h[58]=k(a[48]),h[59]=k(a[49]),h[60]=k(a[57]),h[61]=k(a[58]),h[62]=k(a[62]),h[63]=k(a[63])}function at(a){const h=.5*Math.cos(.7853975),v=.5*Math.cos(3.14159/16),M=.5*Math.cos(3.14159/8),T=.5*Math.cos(3*3.14159/16),w=.5*Math.cos(5*3.14159/16),N=.5*Math.cos(3*3.14159/8),V=.5*Math.cos(7*3.14159/16),O=new Array(4),H=new Array(4),z=new Array(4),Z=new Array(4);for(let se=0;se<8;++se){const oe=se*8;O[0]=M*a[oe+2],O[1]=N*a[oe+2],O[2]=M*a[oe+6],O[3]=N*a[oe+6],H[0]=v*a[oe+1]+T*a[oe+3]+w*a[oe+5]+V*a[oe+7],H[1]=T*a[oe+1]-V*a[oe+3]-v*a[oe+5]-w*a[oe+7],H[2]=w*a[oe+1]-v*a[oe+3]+V*a[oe+5]+T*a[oe+7],H[3]=V*a[oe+1]-w*a[oe+3]+T*a[oe+5]-v*a[oe+7],z[0]=h*(a[oe+0]+a[oe+4]),z[3]=h*(a[oe+0]-a[oe+4]),z[1]=O[0]+O[3],z[2]=O[1]-O[2],Z[0]=z[0]+z[1],Z[1]=z[3]+z[2],Z[2]=z[3]-z[2],Z[3]=z[0]-z[1],a[oe+0]=Z[0]+H[0],a[oe+1]=Z[1]+H[1],a[oe+2]=Z[2]+H[2],a[oe+3]=Z[3]+H[3],a[oe+4]=Z[3]-H[3],a[oe+5]=Z[2]-H[2],a[oe+6]=Z[1]-H[1],a[oe+7]=Z[0]-H[0]}for(let se=0;se<8;++se)O[0]=M*a[16+se],O[1]=N*a[16+se],O[2]=M*a[48+se],O[3]=N*a[48+se],H[0]=v*a[8+se]+T*a[24+se]+w*a[40+se]+V*a[56+se],H[1]=T*a[8+se]-V*a[24+se]-v*a[40+se]-w*a[56+se],H[2]=w*a[8+se]-v*a[24+se]+V*a[40+se]+T*a[56+se],H[3]=V*a[8+se]-w*a[24+se]+T*a[40+se]-v*a[56+se],z[0]=h*(a[se]+a[32+se]),z[3]=h*(a[se]-a[32+se]),z[1]=O[0]+O[3],z[2]=O[1]-O[2],Z[0]=z[0]+z[1],Z[1]=z[3]+z[2],Z[2]=z[3]-z[2],Z[3]=z[0]-z[1],a[0+se]=Z[0]+H[0],a[8+se]=Z[1]+H[1],a[16+se]=Z[2]+H[2],a[24+se]=Z[3]+H[3],a[32+se]=Z[3]-H[3],a[40+se]=Z[2]-H[2],a[48+se]=Z[1]-H[1],a[56+se]=Z[0]-H[0]}function Le(a){for(let h=0;h<64;++h){const v=a[0][h],M=a[1][h],T=a[2][h];a[0][h]=v+1.5747*T,a[1][h]=v-.1873*M-.4682*T,a[2][h]=v+1.8556*M}}function R(a,h,v){for(let M=0;M<64;++M)h[v+M]=Yr.toHalfFloat(x(a[M]))}function x(a){return a<=1?Math.sign(a)*Math.pow(Math.abs(a),2.2):Math.sign(a)*Math.pow(A,Math.abs(a)-1)}function G(a){return new DataView(a.array.buffer,a.offset.value,a.size)}function te(a){const h=a.viewer.buffer.slice(a.offset.value,a.offset.value+a.size),v=new Uint8Array(yt(h)),M=new Uint8Array(v.length);return st(v),F(v,M),new DataView(M.buffer)}function ie(a){const h=a.array.slice(a.offset.value,a.offset.value+a.size),v=Vi(h),M=new Uint8Array(v.length);return st(v),F(v,M),new DataView(M.buffer)}function ee(a){const h=a.viewer,v={value:a.offset.value},M=new Uint16Array(a.columns*a.lines*(a.inputChannels.length*a.type)),T=new Uint8Array(8192);let w=0;const N=new Array(a.inputChannels.length);for(let _e=0,me=a.inputChannels.length;_e<me;_e++)N[_e]={},N[_e].start=w,N[_e].end=N[_e].start,N[_e].nx=a.columns,N[_e].ny=a.lines,N[_e].size=a.type,w+=N[_e].nx*N[_e].ny*N[_e].size;const V=Y(h,v),O=Y(h,v);if(O>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(V<=O)for(let _e=0;_e<O-V+1;_e++)T[_e+V]=Oe(h,v);const H=new Uint16Array(65536),z=E(T,H),Z=Ce(h,v);tt(a.array,h,v,Z,M,w);for(let _e=0;_e<a.inputChannels.length;++_e){const me=N[_e];for(let ue=0;ue<N[_e].size;++ue)Fe(M,me.start+ue,me.nx,me.size,me.ny,me.nx*me.size,z)}Xe(H,M,w);let se=0;const oe=new Uint8Array(M.buffer.byteLength);for(let _e=0;_e<a.lines;_e++)for(let me=0;me<a.inputChannels.length;me++){const ue=N[me],re=ue.nx*ue.size,qe=new Uint8Array(M.buffer,ue.end*2,re*2);oe.set(qe,se),se+=re*2,ue.end+=re}return new DataView(oe.buffer)}function Re(a){const h=a.array.slice(a.offset.value,a.offset.value+a.size),v=Vi(h),M=a.inputChannels.length*a.lines*a.columns*a.totalBytes,T=new ArrayBuffer(M),w=new DataView(T);let N=0,V=0;const O=new Array(4);for(let H=0;H<a.lines;H++)for(let z=0;z<a.inputChannels.length;z++){let Z=0;switch(a.inputChannels[z].pixelType){case 1:O[0]=N,O[1]=O[0]+a.columns,N=O[1]+a.columns;for(let oe=0;oe<a.columns;++oe){const _e=v[O[0]++]<<8|v[O[1]++];Z+=_e,w.setUint16(V,Z,!0),V+=2}break;case 2:O[0]=N,O[1]=O[0]+a.columns,O[2]=O[1]+a.columns,N=O[2]+a.columns;for(let oe=0;oe<a.columns;++oe){const _e=v[O[0]++]<<24|v[O[1]++]<<16|v[O[2]++]<<8;Z+=_e,w.setUint32(V,Z,!0),V+=4}break}}return w}function xe(a){const h=a.viewer,v={value:a.offset.value},M=new Uint8Array(a.columns*a.lines*(a.inputChannels.length*a.type*2)),T={version:Pe(h,v),unknownUncompressedSize:Pe(h,v),unknownCompressedSize:Pe(h,v),acCompressedSize:Pe(h,v),dcCompressedSize:Pe(h,v),rleCompressedSize:Pe(h,v),rleUncompressedSize:Pe(h,v),rleRawSize:Pe(h,v),totalAcUncompressedCount:Pe(h,v),totalDcUncompressedCount:Pe(h,v),acCompression:Pe(h,v)};if(T.version<2)throw new Error("EXRLoader.parse: "+Yt.compression+" version "+T.version+" is unsupported");const w=new Array;let N=Y(h,v)-2;for(;N>0;){const me=Ee(h.buffer,v),ue=Oe(h,v),re=ue>>2&3,qe=(ue>>4)-1,De=new Int8Array([qe])[0],lt=Oe(h,v);w.push({name:me,index:De,type:lt,compression:re}),N-=me.length+3}const V=Yt.channels,O=new Array(a.inputChannels.length);for(let me=0;me<a.inputChannels.length;++me){const ue=O[me]={},re=V[me];ue.name=re.name,ue.compression=0,ue.decoded=!1,ue.type=re.pixelType,ue.pLinear=re.pLinear,ue.width=a.columns,ue.height=a.lines}const H={idx:new Array(3)};for(let me=0;me<a.inputChannels.length;++me){const ue=O[me];for(let re=0;re<w.length;++re){const qe=w[re];ue.name==qe.name&&(ue.compression=qe.compression,qe.index>=0&&(H.idx[qe.index]=me),ue.offset=me)}}let z,Z,se;if(T.acCompressedSize>0)switch(T.acCompression){case 0:z=new Uint16Array(T.totalAcUncompressedCount),tt(a.array,h,v,T.acCompressedSize,z,T.totalAcUncompressedCount);break;case 1:const me=a.array.slice(v.value,v.value+T.totalAcUncompressedCount),ue=Vi(me);z=new Uint16Array(ue.buffer),v.value+=T.totalAcUncompressedCount;break}if(T.dcCompressedSize>0){const me={array:a.array,offset:v,size:T.dcCompressedSize};Z=new Uint16Array(ie(me).buffer),v.value+=T.dcCompressedSize}if(T.rleRawSize>0){const me=a.array.slice(v.value,v.value+T.rleCompressedSize),ue=Vi(me);se=yt(ue.buffer),v.value+=T.rleCompressedSize}let oe=0;const _e=new Array(O.length);for(let me=0;me<_e.length;++me)_e[me]=new Array;for(let me=0;me<a.lines;++me)for(let ue=0;ue<O.length;++ue)_e[ue].push(oe),oe+=O[ue].width*a.type*2;Ze(H,_e,O,z,Z,M);for(let me=0;me<O.length;++me){const ue=O[me];if(!ue.decoded)switch(ue.compression){case 2:let re=0,qe=0;for(let De=0;De<a.lines;++De){let lt=_e[me][re];for(let Qe=0;Qe<ue.width;++Qe){for(let Ne=0;Ne<2*ue.type;++Ne)M[lt++]=se[qe+Ne*ue.width*ue.height];qe++}re++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(M.buffer)}function Ee(a,h){const v=new Uint8Array(a);let M=0;for(;v[h.value+M]!=0;)M+=1;const T=new TextDecoder().decode(v.slice(h.value,h.value+M));return h.value=h.value+M+1,T}function $e(a,h,v){const M=new TextDecoder().decode(new Uint8Array(a).slice(h.value,h.value+v));return h.value=h.value+v,M}function he(a,h){const v=Ae(a,h),M=Ce(a,h);return[v,M]}function ye(a,h){const v=Ce(a,h),M=Ce(a,h);return[v,M]}function Ae(a,h){const v=a.getInt32(h.value,!0);return h.value=h.value+4,v}function Ce(a,h){const v=a.getUint32(h.value,!0);return h.value=h.value+4,v}function Te(a,h){const v=a[h.value];return h.value=h.value+1,v}function Oe(a,h){const v=a.getUint8(h.value);return h.value=h.value+1,v}const Pe=function(a,h){let v;return"getBigInt64"in DataView.prototype?v=Number(a.getBigInt64(h.value,!0)):v=a.getUint32(h.value+4,!0)+Number(a.getUint32(h.value,!0)<<32),h.value+=8,v};function Be(a,h){const v=a.getFloat32(h.value,!0);return h.value+=4,v}function I(a,h){return Yr.toHalfFloat(Be(a,h))}function k(a){const h=(a&31744)>>10,v=a&1023;return(a>>15?-1:1)*(h?h===31?v?NaN:1/0:Math.pow(2,h-15)*(1+v/1024):6103515625e-14*(v/1024))}function Y(a,h){const v=a.getUint16(h.value,!0);return h.value+=2,v}function ne(a,h){return k(Y(a,h))}function Me(a,h,v,M){const T=v.value,w=[];for(;v.value<T+M-1;){const N=Ee(h,v),V=Ae(a,v),O=Oe(a,v);v.value+=3;const H=Ae(a,v),z=Ae(a,v);w.push({name:N,pixelType:V,pLinear:O,xSampling:H,ySampling:z})}return v.value+=1,w}function Se(a,h){const v=Be(a,h),M=Be(a,h),T=Be(a,h),w=Be(a,h),N=Be(a,h),V=Be(a,h),O=Be(a,h),H=Be(a,h);return{redX:v,redY:M,greenX:T,greenY:w,blueX:N,blueY:V,whiteX:O,whiteY:H}}function Ge(a,h){const v=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],M=Oe(a,h);return v[M]}function ht(a,h){const v=Ae(a,h),M=Ae(a,h),T=Ae(a,h),w=Ae(a,h);return{xMin:v,yMin:M,xMax:T,yMax:w}}function gt(a,h){const v=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],M=Oe(a,h);return v[M]}function et(a,h){const v=["ENVMAP_LATLONG","ENVMAP_CUBE"],M=Oe(a,h);return v[M]}function Ct(a,h){const v=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],M=["ROUND_DOWN","ROUND_UP"],T=Ce(a,h),w=Ce(a,h),N=Oe(a,h);return{xSize:T,ySize:w,levelMode:v[N&15],roundingMode:M[N>>4]}}function Nt(a,h){const v=Be(a,h),M=Be(a,h);return[v,M]}function _i(a,h){const v=Be(a,h),M=Be(a,h),T=Be(a,h);return[v,M,T]}function gi(a,h,v,M,T){if(M==="string"||M==="stringvector"||M==="iccProfile")return $e(h,v,T);if(M==="chlist")return Me(a,h,v,T);if(M==="chromaticities")return Se(a,v);if(M==="compression")return Ge(a,v);if(M==="box2i")return ht(a,v);if(M==="envmap")return et(a,v);if(M==="tiledesc")return Ct(a,v);if(M==="lineOrder")return gt(a,v);if(M==="float")return Be(a,v);if(M==="v2f")return Nt(a,v);if(M==="v3f")return _i(a,v);if(M==="int")return Ae(a,v);if(M==="rational")return he(a,v);if(M==="timecode")return ye(a,v);if(M==="preview")return v.value+=T,"skipped";v.value+=T}function qt(a,h){const v=Math.log2(a);return h=="ROUND_DOWN"?Math.floor(v):Math.ceil(v)}function $n(a,h,v){let M=0;switch(a.levelMode){case"ONE_LEVEL":M=1;break;case"MIPMAP_LEVELS":M=qt(Math.max(h,v),a.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return M}function Jn(a,h,v,M){const T=new Array(a);for(let w=0;w<a;w++){const N=1<<w;let V=h/N|0;M=="ROUND_UP"&&V*N<h&&(V+=1);const O=Math.max(V,1);T[w]=(O+v-1)/v|0}return T}function vi(){const a=this,h=a.offset,v={value:0};for(let M=0;M<a.tileCount;M++){const T=Ae(a.viewer,h),w=Ae(a.viewer,h);h.value+=8,a.size=Ce(a.viewer,h);const N=T*a.blockWidth,V=w*a.blockHeight;a.columns=N+a.blockWidth>a.width?a.width-N:a.blockWidth,a.lines=V+a.blockHeight>a.height?a.height-V:a.blockHeight;const O=a.columns*a.totalBytes,z=a.size<a.lines*O?a.uncompress(a):G(a);h.value+=a.size;for(let Z=0;Z<a.lines;Z++){const se=Z*a.columns*a.totalBytes;for(let oe=0;oe<a.inputChannels.length;oe++){const _e=Yt.channels[oe].name,me=a.channelByteOffsets[_e]*a.columns,ue=a.decodeChannels[_e];if(ue===void 0)continue;v.value=se+me;const re=(a.height-(1+V+Z))*a.outLineWidth;for(let qe=0;qe<a.columns;qe++){const De=re+(qe+N)*a.outputChannels+ue;a.byteArray[De]=a.getter(z,v)}}}}}function Rn(){const a=this,h=a.offset,v={value:0};for(let M=0;M<a.height/a.blockHeight;M++){const T=Ae(a.viewer,h)-Yt.dataWindow.yMin;a.size=Ce(a.viewer,h),a.lines=T+a.blockHeight>a.height?a.height-T:a.blockHeight;const w=a.columns*a.totalBytes,V=a.size<a.lines*w?a.uncompress(a):G(a);h.value+=a.size;for(let O=0;O<a.blockHeight;O++){const H=M*a.blockHeight,z=O+a.scanOrder(H);if(z>=a.height)continue;const Z=O*w,se=(a.height-1-z)*a.outLineWidth;for(let oe=0;oe<a.inputChannels.length;oe++){const _e=Yt.channels[oe].name,me=a.channelByteOffsets[_e]*a.columns,ue=a.decodeChannels[_e];if(ue!==void 0){v.value=Z+me;for(let re=0;re<a.columns;re++){const qe=se+re*a.outputChannels+ue;a.byteArray[qe]=a.getter(V,v)}}}}}}function xi(a,h,v){const M={};if(a.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");M.version=a.getUint8(4);const T=a.getUint8(5);M.spec={singleTile:!!(T&2),longName:!!(T&4),deepFormat:!!(T&8),multiPart:!!(T&16)},v.value=8;let w=!0;for(;w;){const N=Ee(h,v);if(N==0)w=!1;else{const V=Ee(h,v),O=Ce(a,v),H=gi(a,h,v,V,O);H===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${V}'.`):M[N]=H}}if((T&-7)!=0)throw console.error("THREE.EXRHeader:",M),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return M}function Cn(a,h,v,M,T){const w={size:0,viewer:h,array:v,offset:M,width:a.dataWindow.xMax-a.dataWindow.xMin+1,height:a.dataWindow.yMax-a.dataWindow.yMin+1,inputChannels:a.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:dn};switch(a.compression){case"NO_COMPRESSION":w.blockHeight=1,w.uncompress=G;break;case"RLE_COMPRESSION":w.blockHeight=1,w.uncompress=te;break;case"ZIPS_COMPRESSION":w.blockHeight=1,w.uncompress=ie;break;case"ZIP_COMPRESSION":w.blockHeight=16,w.uncompress=ie;break;case"PIZ_COMPRESSION":w.blockHeight=32,w.uncompress=ee;break;case"PXR24_COMPRESSION":w.blockHeight=16,w.uncompress=Re;break;case"DWAA_COMPRESSION":w.blockHeight=32,w.uncompress=xe;break;case"DWAB_COMPRESSION":w.blockHeight=256,w.uncompress=xe;break;default:throw new Error("EXRLoader.parse: "+a.compression+" is unsupported")}const N={};for(const z of a.channels)switch(z.name){case"Y":case"R":case"G":case"B":case"A":N[z.name]=!0,w.type=z.pixelType}let V=!1;if(N.R&&N.G&&N.B)V=!N.A,w.outputChannels=4,w.decodeChannels={R:0,G:1,B:2,A:3};else if(N.Y)w.outputChannels=1,w.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(w.type==1)switch(T){case 1015:w.getter=ne;break;case 1016:w.getter=Y;break}else if(w.type==2)switch(T){case 1015:w.getter=Be;break;case 1016:w.getter=I}else throw new Error("EXRLoader.parse: unsupported pixelType "+w.type+" for "+a.compression+".");w.columns=w.width;const O=w.width*w.height*w.outputChannels;switch(T){case 1015:w.byteArray=new Float32Array(O),V&&w.byteArray.fill(1,0,O);break;case 1016:w.byteArray=new Uint16Array(O),V&&w.byteArray.fill(15360,0,O);break;default:console.error("THREE.EXRLoader: unsupported type: ",T);break}let H=0;for(const z of a.channels)w.decodeChannels[z.name]!==void 0&&(w.channelByteOffsets[z.name]=H),H+=z.pixelType*2;if(w.totalBytes=H,w.outLineWidth=w.width*w.outputChannels,a.lineOrder==="INCREASING_Y"?w.scanOrder=z=>z:w.scanOrder=z=>w.height-1-z,w.outputChannels==4?(w.format=1023,w.colorSpace=dn):(w.format=1028,w.colorSpace=""),a.spec.singleTile){w.blockHeight=a.tiles.ySize,w.blockWidth=a.tiles.xSize;const z=$n(a.tiles,w.width,w.height),Z=Jn(z,w.width,a.tiles.xSize,a.tiles.roundingMode),se=Jn(z,w.height,a.tiles.ySize,a.tiles.roundingMode);w.tileCount=Z[0]*se[0];for(let oe=0;oe<z;oe++)for(let _e=0;_e<se[oe];_e++)for(let me=0;me<Z[oe];me++)Pe(h,M);w.decode=vi.bind(w)}else{w.blockWidth=w.width;const z=Math.ceil(w.height/w.blockHeight);for(let Z=0;Z<z;Z++)Pe(h,M);w.decode=Rn.bind(w)}return w}const jn={value:0},Qn=new DataView(e),Ki=new Uint8Array(e),Yt=xi(Qn,e,jn),sn=Cn(Yt,Qn,Ki,jn,this.type);return sn.decode(),{header:Yt,width:sn.width,height:sn.height,data:sn.byteArray,format:sn.format,colorSpace:sn.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(o,l){o.colorSpace=l.colorSpace,o.minFilter=1006,o.magFilter=1006,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,l)}return super.load(e,s,n,r)}}export{ef as A,fi as B,rt as C,$h as D,Rf as E,mf as F,Hi as G,_f as H,bf as I,ff as J,Jh as K,dn as L,tn as M,af as N,wc as O,Vt as P,hi as Q,gf as R,Ef as S,Af as T,df as U,W as V,Mf as W,yf as X,cf as Y,tf as Z,mn as _,pn as a,Yi as b,pt as c,ot as d,hf as e,vf as f,ft as g,rn as h,ws as i,bn as j,Os as k,pf as l,Sf as m,It as n,Tf as o,sf as p,rf as q,Qh as r,nf as s,Wt as t,Ch as u,uf as v,lf as w,jh as x,of as y,xf as z};
