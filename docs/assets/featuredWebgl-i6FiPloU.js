import{W as Be,n as we,S as He,O as Fe,b as Ve,T as $e,C as qe,w as Se,e as te,f as Xe,d as V,V as be,a as Ye,M as je,m as $}from"./three-DeFrV5FA.js";import{a as Ge}from"./lusionMotion-C_siYMC_.js";import{g as Re,f as ae,p as Me,d as Ne,c as ze}from"./index-BcvhjBUa.js";import"./motion-BgQTtF5Z.js";const De=12,Pe=6,Ke=1.35,Ze=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Ue=`
precision highp float;
uniform sampler2D u_texture;
uniform sampler2D u_depthTexture;
uniform vec3 u_colorBg;
uniform float u_showRatio;
uniform float u_activeRatio;
uniform vec2 u_textureSize;
uniform vec2 u_domWH;
uniform vec2 u_shiftXY;
uniform vec3 u_focusPos;
uniform float u_zoomRatio;
uniform float u_dofRangeOffset;
uniform float u_saturation;
uniform float u_brightness;
uniform float u_rippleStrength;
uniform vec2 u_resolution;
uniform float u_globalRadius;
uniform float u_time;
varying vec2 v_uv;

float linearStep(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}
float sdRoundedBox(in vec2 p, in vec2 b, in float r) {
  vec2 q = abs(p) - b + r;
  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
}
float getRoundedCornerMask(vec2 uv, vec2 size, float radius, float ratio) {
  vec2 halfSize = size * 0.5;
  float maxDist = length(halfSize);
  float minSize = min(halfSize.x, halfSize.y);
  float maxSize = max(halfSize.x, halfSize.y);
  float t = ratio * maxDist;
  radius = mix(minSize * linearStep(0., minSize, t), radius, linearStep(maxSize, maxDist, t));
  halfSize = min(halfSize, vec2(t));
  float d = sdRoundedBox((uv - 0.5) * u_domWH, halfSize, radius);
  float fw = max(fwidth(d), 0.001);
  return 1.0 - smoothstep(-fw, fw, d);
}
vec3 hashNoise(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yxz + 33.33);
  return fract((p3.xxy + p3.yxx) * p3.zyx);
}

void main() {
  vec2 screenUv = gl_FragCoord.xy / u_resolution;
  vec2 baseUv = v_uv;
  baseUv.x -= (screenUv.x - 0.5) * (1.0 - sin(screenUv.y * 3.141592)) * u_rippleStrength;
  vec3 noise = hashNoise(gl_FragCoord.xy + vec2(5.0, 28.0) + u_time);
  float imageAlpha = getRoundedCornerMask(
    baseUv,
    u_domWH * mix(0.7, 1.0, u_showRatio),
    u_globalRadius,
    1.0
  );
  vec2 toUvSpace = 1.0 / (u_textureSize * max(u_domWH.x / u_textureSize.x, u_domWH.y / u_textureSize.y));
  vec2 uv = baseUv - 0.5;
  uv *= u_domWH * mix(0.75, 1.0, u_showRatio);
  uv *= mix(0.975, 1.0, u_zoomRatio);
  float zMultiplier = u_domWH.y * (0.15 + u_activeRatio * 15.0);
  vec3 pos = vec3(uv, -zMultiplier);
  float cameraDepth = u_domWH.y * mix(10.0, 5.0, u_zoomRatio);
  vec3 rayOri = vec3(u_focusPos.xy, cameraDepth);
  float dist = length(pos - rayOri);
  vec3 rayDir = (pos - rayOri) / max(dist, 1e-4);
  float skipDist = cameraDepth / max(-rayDir.z, 1e-4);
  dist -= skipDist;
  float stepDist = dist / float(${De});
  vec3 rayStep = rayDir * stepDist;
  vec3 rayPos = rayOri + rayDir * (skipDist + stepDist * noise.x);
  for (int i = 0; i < ${De}; i++) {
    float currZ = -texture2D(u_depthTexture, rayPos.xy * toUvSpace + 0.5).r * zMultiplier;
    if (currZ > rayPos.z) break;
    rayPos += rayStep;
    dist += stepDist;
  }
  uv = rayPos.xy;
  uv *= toUvSpace;
  uv += u_shiftXY * 0.015;
  float depth = texture2D(u_depthTexture, uv + 0.5).r;
  vec3 color = vec3(0.0);
  float PI = 3.1415926;
  float blurriness = mix(0.0, 0.01, u_zoomRatio) * linearStep(0.0, 0.5, abs(depth - u_focusPos.z) + u_dofRangeOffset);
  float angle = PI * 2.0 * noise.y;
  float textureAspectInv = u_textureSize.y / u_textureSize.x;
  float numSampleInv = 1.0 / float(${Pe});
  for (int i = 0; i < ${Pe}; i++) {
    float fI = float(i);
    float r = sqrt((fI + 0.5) * numSampleInv) * blurriness;
    angle += 10.16640738;
    vec2 uvOffset = r * vec2(cos(angle) * textureAspectInv, sin(angle));
    color += texture2D(u_texture, uv + uvOffset + 0.5).rgb;
  }
  color *= numSampleInv;
  float luma = dot(color, vec3(0.299, 0.587, 0.114));
  color = mix(vec3(luma), color, 1.0 + u_saturation);
  color += u_brightness;
  float fogThickness = 0.75;
  color = mix(
    color,
    u_colorBg,
    linearStep(0.0, fogThickness, u_activeRatio * (1.0 + fogThickness * 2.0) - fogThickness - (1.0 - depth))
  );
  gl_FragColor = vec4(color, imageAlpha);
}
`;function Je(z,L,A,d){const m=Math.PI*2*L,D=A/(Math.PI*L),g=1/(m*m),P=d*A/m;let w=z,C=0,I=z,S=z;return{get value(){return w},set target(l){S=l},get target(){return S},update(l){if(l<=0)return w;const oe=(S-I)/l;I=S;const q=Math.max(g,l*l/2+l*D/2,l*D);return w+=C*l,C+=(S+P*oe-w-D*C)*l/q,w}}}async function it(z){const L=document.getElementById("home-featured"),A=document.getElementById("project-list");if(!L||!A)return{update(){},resize(){},destroy(){},beginOpen(){}};const d=document.createElement("canvas");d.id="featured-webgl-canvas",d.setAttribute("aria-hidden","true"),document.body.appendChild(d);let m;try{m=new Be({canvas:d,alpha:!0,antialias:!0,premultipliedAlpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1,preserveDrawingBuffer:!0})}catch(e){return d.remove(),console.warn("Featured WebGL unavailable",e),{update(){},resize(){},destroy(){},beginOpen(){}}}document.documentElement.classList.add("has-featured-webgl"),m.setPixelRatio(1),m.setClearColor(0,0),m.outputColorSpace=we;const D=new He,g=new Fe(0,1,1,0,-1e3,1e3);g.position.z=10;const P={x:0,y:0},w=e=>{P.x=e.clientX,P.y=e.clientY};window.addEventListener("pointermove",w,{passive:!0});const C=new Ve(1,1),I=new $e,S="/zyrax-studio/assets/projects/",l=[],oe=Array.from(A.querySelectorAll(".project-item"));let q=null,fe=null,W=0,a=!1,re=!1,ie=0;const O=new Map;await Promise.all(oe.map(async(e,u)=>{const r=e.dataset.id||z[u]?.id,x=z.find(t=>t.id===r)||z[u]||{},b=e.querySelector(".project-item-main"),v=e.querySelector(".project-item-image img");v&&(v.style.opacity="0",v.setAttribute("aria-hidden","true"));const Oe=new qe(e.dataset.colorBg||"#111111");let p,_;try{[p,_]=await Promise.all([I.loadAsync(`${S}${r}/home.webp`),I.loadAsync(`${S}${r}/home_depth.webp`)])}catch(t){console.warn("Featured cover failed for",r,t),v&&(v.style.opacity="1");return}p.colorSpace=we,p.wrapS=p.wrapT=Se,p.minFilter=te,p.magFilter=te,p.generateMipmaps=!1,_.colorSpace=Xe,_.wrapS=_.wrapT=Se,_.minFilter=te,_.magFilter=te,_.generateMipmaps=!1;const Te=new V(p.image?.width||1280,p.image?.height||832),ne=new be(0,0,-1),j=new Ge(new be,1,.6,2),B=Je(1,2.2,.7,3);B.target=0;const le=new V,H=new V,o={u_texture:{value:p},u_depthTexture:{value:_},u_colorBg:{value:Oe},u_showRatio:{value:0},u_activeRatio:{value:0},u_textureSize:{value:Te},u_domWH:{value:new V(1,1)},u_shiftXY:{value:le},u_focusPos:{value:ne},u_zoomRatio:{value:1},u_dofRangeOffset:{value:0},u_saturation:{value:0},u_brightness:{value:0},u_rippleStrength:{value:0},u_resolution:{value:new V(1,1)},u_globalRadius:{value:15},u_time:{value:0}},Ee=new Ye({uniforms:o,vertexShader:Ze,fragmentShader:Ue,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),i=new je(C,Ee);i.frustumCulled=!1,i.renderOrder=10+u,i.visible=!1,D.add(i);let y=!1,R=0,G=0,ue=0;const N=[0,.2,.3],ve=t=>{for(let s=0;s<N.length;s++)if(t<N[s])return s;return N.length};window.innerWidth>=812&&(b?.addEventListener("mouseenter",()=>{a||(y=!0)}),b?.addEventListener("mouseleave",()=>{y=!1})),e.addEventListener("click",t=>{if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.button!==0)return;if(a){t.preventDefault();return}const s=x.url||e.getAttribute("href");s&&(t.preventDefault(),de(r,s))}),l.push({id:r,mesh:i,uniforms:o,colorMap:p,depthMap:_,focusDyn:j,focusPos:ne,zoomDyn:B,shiftXY:le,shiftXYTarget:H,index:u,main:b,dom:e,get isHover(){return y},set isHover(t){y=t},update(t,s,K,ce,Le,c,Z){const T=Z&&Z===r,he=Re(e);if(!(he.ratio>-1&&he.ratio<1)&&!a||!b){G=0,i.visible=!1,o.u_showRatio.value=0;return}G+=t;const f=b.getBoundingClientRect();let F=Math.max(1,f.width),E=Math.max(1,f.height),U=f.left+F*.5,J=K-(f.top+E*.5);a&&!O.has(r)&&O.set(r,{cx:U,cy:J,w:F,h:E});const h=O.get(r)||{cx:U,cy:J,w:F,h:E};if(a&&c>0&&Z){const n=O.get(Z);if(n){const Q=Math.max(s/n.w,K/n.h)*1.2,ee=$.lerp(1,Q,c),We=$.lerp(0,s*.5-n.cx,c),ke=$.lerp(0,K*.5-n.cy,c);U=(h.cx-n.cx)*ee+n.cx+We,J=(h.cy-n.cy)*ee+n.cy+ke,F=h.w*ee,E=h.h*ee,i.rotation.y=c*.3*((n.cx-s*.5)/s),i.rotation.z=-c*.3*((n.cx-s*.5)/s)}}else i.rotation.y=0,i.rotation.z=0;o.u_domWH.value.set(h.w,h.h),o.u_resolution.value.set(s,K),o.u_time.value=ce,o.u_rippleStrength.value=a?Math.min(.2,c*.12):Math.min(.15,Le*.5),o.u_globalRadius.value=a?Math.min(h.w,h.h)*$.lerp(.04,0,c):Math.min(h.w,h.h)*.04;const ge=ae(G,0,2,0,1,Me),xe=u%2-.5,Ae=a?0:(1-ge)*xe*-s*.1,Ie=a?i.rotation.z:(1-ge)*xe*.1;i.position.set(U+Ae,J,T?2:0),i.scale.set(F,E,1),a||(i.rotation.z=-Ie);const _e=ae(G,0,1.5,0,1,Me);o.u_showRatio.value=a?Math.max(_e,1):_e,i.visible=o.u_showRatio.value>.01,i.renderOrder=T?100:10+u;const ye=R;if(R=ze(R+(y&&!a?1:-1)*t,0,1),ye<R){const n=ve(ye),Q=ve(R);Q!==n&&H.set(Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(ae(R,0,.6,1,0)),Q===N.length&&H.multiplyScalar(.5)}else H.multiplyScalar(.95);le.lerp(H,.2);const M=j.target;if(y&&!a||(T?c:0)>.01){if(y&&!a){const n=R>0?ae(R,0,.3,1,0)*E*.75:0;M.x=(P.x-f.left-f.width*.5+Math.cos(ce*20)*n)/f.width*-f.height,M.y=(P.y-f.top-f.height*.5-Math.sin(ce*30)*n)/f.height*f.height}else M.x=0,M.y=0;M.z=.5}else M.x=0,M.y=0,M.z=-1;j.update(t),ne.copy(j.value),B.target=y||T?1:0,B.update(t),o.u_zoomRatio.value=B.value,ue=ze(ue+(y||T?.75:-1)*t,0,1),o.u_dofRangeOffset.value=$.lerp(0,-.5,ue),o.u_saturation.value=0,o.u_brightness.value=0,a?T?o.u_activeRatio.value=c*c:(o.u_activeRatio.value=Math.min(1,c*1.2),o.u_showRatio.value=Math.max(0,1-c*1.4)):o.u_activeRatio.value=0}})}));let X=1,k=1,me=0,pe=window.scrollY,se=0;function Ce(e){const u=window.lenis;document.documentElement.classList.add("featured-opening"),u?.stop?.()}function de(e,u){if(!a){q=e,fe=u,a=!0,re=!1,W=0,ie=0,O.clear(),Ce();for(const r of l){if(!r.main)continue;const x=r.main.getBoundingClientRect();O.set(r.id,{cx:x.left+x.width*.5,cy:k-(x.top+x.height*.5),w:Math.max(1,x.width),h:Math.max(1,x.height)}),r.isHover=!1}}}const Y=()=>{X=window.innerWidth,k=window.innerHeight,m.setSize(X,k,!1),g.left=0,g.right=X,g.top=k,g.bottom=0,g.updateProjectionMatrix()};return Y(),window.addEventListener("resize",Y),{beginOpen:de,update(e){if(me+=e,a&&(W=Math.min(1,W+e/Ke),ie=Ne(W),W>=1&&!re)){re=!0;const v=fe;setTimeout(()=>{v&&window.location.assign(v)},120)}const u=window.scrollY,r=Math.abs(u-pe)/Math.max(e,.001);pe=u,se+=(Math.min(1,r*.002)-se)*.15;const b=Re(L).isActive||a;if(d.style.visibility=b?"visible":"hidden",d.style.zIndex=a?"40":"",!!b){for(const v of l)v.update(e,X,k,me,se,ie,q);m.render(D,g)}},resize:Y,destroy(){window.removeEventListener("pointermove",w),window.removeEventListener("resize",Y),document.documentElement.classList.remove("has-featured-webgl","featured-opening"),l.forEach(e=>{e.colorMap?.dispose(),e.depthMap?.dispose(),e.mesh.material.dispose()}),C.dispose(),m.dispose(),d.remove()}}}export{it as createFeaturedWebgl};
