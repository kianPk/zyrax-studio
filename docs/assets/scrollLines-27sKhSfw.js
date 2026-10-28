import{V as v,S as fe,P as me,W as he,B as pe,G as ne,a as ie,C as q,M as se,D as ge,b as xe,Q as _e,c as A,d as be}from"./three-DeFrV5FA.js";import{l as we}from"./bufLoader-BvNMaFSp.js";import{g as ye,s as ce,f as Se,e as Me,c as Re}from"./index-BcvhjBUa.js";import"./motion-BgQTtF5Z.js";const N=[{id:"reel",fileName:"line_reel",aoThreshold:.555,margin:{x:-.05,y:-.8},scrollToRatioFactors:[.4,1.3],boxMin:new v(-.0112049,-.0141946,0),boxMax:new v(1.01357,.718671,0),color0:"#5a90ff",color1:"#2a38ee",sectionSelector:"#home-reel"},{id:"goal",fileName:"line_goal",aoThreshold:1e-4,margin:{x:.2,y:-.6},scrollToRatioFactors:[1.2,2],boxMin:new v(-.0180006,-.00963629,0),boxMax:new v(1.01777,.850395,0),color0:"#94fffb",color1:"#1285dc",sectionSelector:"#home-goal"}],Pe=`
attribute vec3 CP;
attribute float Cd;
varying float v_cd;
varying float v_lineRatio;
varying float v_s;
uniform float u_radius;
void main() {
  vec3 pos = vec3(CP.xy + position.xy * u_radius, 0.0);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  v_cd = Cd;
  v_lineRatio = position.z;
  v_s = CP.z;
}
`,Ce=`
varying float v_cd;
varying float v_lineRatio;
varying float v_s;
uniform float u_showRatio;
uniform vec3 u_color0;
uniform vec3 u_color1;
uniform float u_aoThreshold;
float linearStep(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}
vec3 hsv2rgb(in vec3 c) {
  vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
  rgb = rgb * rgb * (3.0 - 2.0 * rgb);
  return c.z * mix(vec3(1.0), rgb, c.y);
}
vec3 rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}
vec3 lerpHSV(in vec3 a, in vec3 b, in float x) {
  float hue = (mod(mod((b.x - a.x), 1.0) + 1.5, 1.0) - 0.5) * x + a.x;
  return vec3(hue, mix(a.yz, b.yz, x));
}
void main() {
  float ao = 0.9 + 0.1 * v_cd;
  float aoRatio = linearStep(u_aoThreshold - 0.02, u_aoThreshold + 0.02, u_showRatio);
  if (step(u_showRatio, v_lineRatio) > 0.5) discard;
  float mixRatio = 1.0 - pow(1.0 - clamp(v_lineRatio, 0.0, 1.0), 2.0);
  gl_FragColor.rgb = hsv2rgb(lerpHSV(rgb2hsv(u_color1), rgb2hsv(u_color0), mixRatio));
  gl_FragColor.rgb *= min(1.0, ao + 1.0 - aoRatio);
  float alpha = abs(v_s - 0.5);
  gl_FragColor.a = linearStep(0.5, 0.5 - fwidth(alpha), alpha);
}
`,ze=`
uniform vec3 u_color0;
uniform vec3 u_color1;
uniform float u_mixRatio;
uniform float u_ao;
varying vec3 v_color;
varying vec2 v_uv;
vec3 hsv2rgb(in vec3 c) {
  vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
  rgb = rgb * rgb * (3.0 - 2.0 * rgb);
  return c.z * mix(vec3(1.0), rgb, c.y);
}
vec3 rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}
vec3 lerpHSV(in vec3 a, in vec3 b, in float x) {
  float hue = (mod(mod((b.x - a.x), 1.0) + 1.5, 1.0) - 0.5) * x + a.x;
  return vec3(hue, mix(a.yz, b.yz, x));
}
void main() {
  v_color = u_ao * hsv2rgb(lerpHSV(rgb2hsv(u_color1), rgb2hsv(u_color0), u_mixRatio));
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,qe=`
varying vec3 v_color;
varying vec2 v_uv;
void main() {
  float d = length(v_uv - 0.5) * 2.0;
  gl_FragColor.rgb = v_color;
  gl_FragColor.a = smoothstep(1.0, 1.0 - fwidth(d), d);
}
`;function Ae(){let s=document.getElementById("lines-canvas");if(s)return s;s=document.createElement("canvas"),s.id="lines-canvas",s.setAttribute("aria-hidden","true"),Object.assign(s.style,{position:"fixed",inset:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"0"});const _=document.getElementById("ui");return _&&_.parentNode?_.parentNode.insertBefore(s,_):document.body.appendChild(s),s}async function Ee(){const s=Ae(),_="/zyrax-studio/",le=await Promise.all(N.map(e=>we(`${_}assets/models/lines/${e.fileName}.buf`))),Y=new fe,r=new me(60,1,.1,2e3);r.position.set(0,0,1),r.lookAt(0,0,0);const T=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;let u;try{u=new he({canvas:s,alpha:!0,antialias:!T,premultipliedAlpha:!1,powerPreference:T?"low-power":"default"})}catch(e){return console.error("Lines WebGL unavailable",e),{update(){},resize(){},destroy(){},setPaused(){}}}u.setClearColor(0,0),u.setPixelRatio(Math.min(window.devicePixelRatio||1,T?1:1.5)),u.autoClear=!0;const b=[],F=new v,O=new v,y=new pe,V=new be,L=new A,j=new A,D=new A,X=new A;let E=!1,S=!0;for(let e=0;e<N.length;e++){const o=N[e],t=le[e],a=document.querySelector(o.sectionSelector);if(!a||!t)continue;const i=new ne,l=new ne;i.add(l),Y.add(i);const f=new ie({uniforms:{u_showRatio:{value:0},u_aoThreshold:{value:o.aoThreshold},u_color0:{value:new q(o.color0)},u_color1:{value:new q(o.color1)},u_radius:{value:.008}},vertexShader:Pe,fragmentShader:Ce,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),m=new se(t,f);m.frustumCulled=!1,m.renderOrder=200,l.add(m);const d=new ie({uniforms:{u_color0:{value:new q(o.color0)},u_color1:{value:new q(o.color1)},u_ao:{value:1},u_mixRatio:{value:0}},vertexShader:ze,fragmentShader:qe,side:ge,depthTest:!1,depthWrite:!1,transparent:!0,extensions:{derivatives:!0}}),h=new se(new xe(2,2),d);h.frustumCulled=!1,h.renderOrder=200,l.add(h);const W=t.attributes.position.array,p=t.attributes.position.count,k=new Float32Array(p);for(let g=0;g<p;g++)k[g]=W[g*3+2];b.push({data:o,sectionEl:a,container:i,inner:l,mesh:m,mat:f,circle:h,circleMat:d,lineRatioArray:k,cpAttr:t.attributes.CP,cdAttr:t.attributes.Cd,count:p,offsetY:0,framePos:new v,frameQuat:new _e,frameScale:new v(1,1,1)})}let c=1,n=1;const P=()=>{c=window.innerWidth||1,n=window.innerHeight||1;const e=Math.sqrt(c*c+n*n),o=n/e;V.set(c/n*o,o),r.fov=60,r.aspect=c/n,r.position.set(c/2,-n/2,n/(2*Math.tan(r.fov*Math.PI/360))),r.far=r.position.z*2,r.near=r.far/1e3,r.up.set(0,1,0),r.lookAt(c/2,-n/2,0),r.updateProjectionMatrix(),u.setSize(c,n,!1)};P(),window.addEventListener("resize",P);const ue=e=>{const{data:o,sectionEl:t,container:a,inner:i,mat:l,circle:f,circleMat:m,lineRatioArray:d,cpAttr:h,cdAttr:W,count:p}=e,g=ye(t).top+e.offsetY,Z=n,J=o.scrollToRatioFactors;let M=ce(-(g-J[0]*Z)/(J[1]*Z));M=Me(M);const G=c<=812,Q=.008*Se(c,540,1920,2,1)*(G?.72:1),U=c/V.x,ee=n/V.y;let oe=o.margin.x,te=o.margin.y;G&&o.id==="goal"&&(oe=.42,te=-.35),i.position.x=oe*U,i.position.y=te*ee-g,i.scale.set(U,ee,1),e._showSmooth==null&&(e._showSmooth=M),e._showSmooth+=(M-e._showSmooth)*(G?.32:.18),e._targetA=M,l.uniforms.u_showRatio.value=e._showSmooth,l.uniforms.u_radius.value=Q;const ae=t.dataset?.goalPhase,de=o.id==="goal"&&(ae==="black-tunnel"||ae==="white");if(a.position.copy(e.framePos),a.quaternion.copy(e.frameQuat),a.scale.copy(e.frameScale),a.updateMatrixWorld(!0),y.min.copy(o.boxMin),y.max.copy(o.boxMax),y.applyMatrix4(i.matrixWorld),a.visible=!de&&y.max.y>-n&&y.min.y<0&&e._showSmooth>.001,!a.visible)return;const B=e._showSmooth;let C=0,H=p-1;for(;C<H;){const R=C+H+1>>1;d[R]<=B?C=R:H=R-1}const x=C,z=Math.min(x+1,p-1);let w=0;if(x<p-1){const R=d[z]-d[x]||1;w=(B-d[x])/R}F.fromArray(h.array,x*3),O.fromArray(h.array,z*3),F.lerp(O,w);const re=W.array;let I=re[x]*(1-w)+re[z]*w;I=.9+.1*I;const ve=ce((B-(o.aoThreshold-.02))/.04);f.position.copy(F),f.scale.set(Q,Q,1),m.uniforms.u_ao.value=Math.min(1,I+1-ve);let K=d[x]*(1-w)+d[z]*w;K=1-Math.pow(1-Re(K,0,1),2),m.uniforms.u_mixRatio.value=K},$=()=>{if(E){if(S){for(const t of b)t.container.visible=!1;u.clear(),S=!1}return}let e=!1,o=!1;for(const t of b){ue(t),t.container.visible&&(e=!0);const a=t._targetA??0,i=t._showSmooth??0;Math.abs(a-i)>8e-4&&(o=!0)}(e||o||S)&&u.render(Y,r),S=e||o};return $(),{update:$,resize:P,setGoalOffset(e){const o=b.find(t=>t.data.id==="goal");o&&(o.offsetY=e||0)},setGoalFrame({scale:e=1,rotation:o=0,active:t=!1}={}){const a=b.find(f=>f.data.id==="goal");if(!a)return;if(!t){a.framePos.set(0,0,0),a.frameQuat.identity(),a.frameScale.set(1,1,1);return}const i=c*.5,l=-n*.5;L.makeTranslation(i,l,0),j.makeRotationZ(-o),D.makeScale(e,e,1),X.makeTranslation(-i,-l,0),L.multiply(j).multiply(D).multiply(X),L.decompose(a.framePos,a.frameQuat,a.frameScale)},setPaused(e){if(E=!!e,E){for(const o of b)o.container.visible=!1;try{u.clear()}catch{}S=!1}},destroy(){window.removeEventListener("resize",P),u.dispose(),s.remove()}}}export{Ee as createScrollLines};
