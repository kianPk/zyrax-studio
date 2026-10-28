import{S as Ao,P as Eo,W as Do,L as Io,N as To,E as Oo,e as go,f as Bo,V as f,g as eo,C as T,M as wo,a as yo,b as Uo,Q as bo,h as Go,d as Ho}from"./three-DeFrV5FA.js";import{l as $o}from"./bufLoader-BvNMaFSp.js";const Q=["#061dfb","#ADFF00","#f6000e","#7e09f5","#ffc000"],to={density:1,friction:2,restitution:.8},jo=40,z=8,Qo=`
attribute vec3 daoN;
attribute vec3 daoP;
attribute float ao;
attribute float thickness;
attribute vec3 SN;
uniform vec3 u_lightPosition;
uniform vec4 u_selfPositionRadius;
uniform vec4 u_selfRotation;
varying vec3 v_viewPosition;
varying vec3 v_worldPosition;
varying vec3 v_viewNormal;
varying vec3 v_smoothViewNormal;
varying float v_ao;
varying float v_thickness;
varying float v_selfShadow;

vec3 qrotate(vec3 v, vec4 q) {
  return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v);
}

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  vec3 worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  v_worldPosition = worldPosition;
  vec4 invertedQuat = vec4(-u_selfRotation.xyz, u_selfRotation.w);
  vec3 L = (u_lightPosition - worldPosition) / max(u_selfPositionRadius.w, 0.001);
  L = normalize(qrotate(L, invertedQuat));
  vec3 dao = mix(daoN, daoP, sign(L) * 0.5 + 0.5);
  vec3 absDir = abs(L);
  float selfShadow = dot(absDir, dao) / max(absDir.x + absDir.y + absDir.z, 1e-4);
  selfShadow = min(pow(selfShadow * 3.0, 0.3) * 1.45, 1.0);
  v_viewNormal = normalMatrix * normal;
  v_smoothViewNormal = normalMatrix * SN;
  v_viewPosition = -mvPosition.xyz;
  v_ao = ao;
  v_thickness = thickness;
  v_selfShadow = selfShadow;
}
`,Wo=`
varying vec3 v_viewNormal;
varying vec3 v_smoothViewNormal;
varying vec3 v_viewPosition;
varying vec3 v_worldPosition;
varying float v_ao;
varying float v_thickness;
varying float v_selfShadow;
uniform float u_roughness;
uniform vec3 u_bgColor;
uniform vec3 u_color;
uniform sampler2D u_matcap;
uniform vec3 u_lightPosition;
uniform vec4 u_nearPositionRadiusList[${z}];
uniform vec3 u_nearColorList[${z}];

#ifndef saturate
#define saturate(a) clamp(a, 0.0, 1.0)
#endif

vec3 filmicToneMapping(vec3 color) {
  color = max(vec3(0.0), color - vec3(0.004));
  color = (color * (6.2 * color + 0.5)) / (color * (6.2 * color + 1.7) + 0.06);
  return color;
}

void main() {
  float roughness = u_roughness;
  vec3 viewNormal = normalize(v_viewNormal);
  vec3 N = normalize((vec4(viewNormal, 0.0) * viewMatrix).xyz);
  vec3 V = normalize(cameraPosition - v_worldPosition);
  vec3 worldToLight = normalize(u_lightPosition - v_worldPosition);
  vec3 reflectView = reflect(-V, N);

  vec3 gi = vec3(0.0);
  vec4 reflections = vec4(0.0, 0.0, 0.0, 100.0);
  float ao = 1.0;
  float shadow = 1.0;

  for (int i = 0; i < ${z}; i++) {
    vec4 near = u_nearPositionRadiusList[i];
    vec3 nearColor = u_nearColorList[i];
    vec3 toNear = near.xyz - v_worldPosition;
    float dist = length(toNear);
    float rSum = near.w + 0.15;
    float soft = saturate(1.0 - dist / (rSum * 3.5));
    float _ao = 1.0 - soft * soft * 0.55;
    ao *= _ao;
    shadow *= mix(1.0, 0.72, soft * saturate(dot(normalize(toNear), worldToLight)));
    gi += nearColor * 3.0 * min(1.0, (1.0 - _ao * _ao) / 0.7);

    // fake reflection: sphere hit along reflect ray
    vec3 oc = v_worldPosition - near.xyz;
    float b = dot(oc, reflectView);
    float c = dot(oc, oc) - near.w * near.w * 0.85;
    float h = b * b - c;
    if (h > 0.0) {
      float t = -b - sqrt(h);
      if (t > 0.0001 && t < reflections.w) {
        reflections = vec4(nearColor, t);
      }
    }
  }
  reflections.rgb *= 1.0 / ((0.2 + roughness * 0.8) * reflections.w * 10.0 + 4.0);
  reflections.rgb *= ao * mix(0.55, 1.0, v_ao);
  gi /= float(${z});

  vec3 albedo = u_color;
  vec3 viewDir = normalize(v_viewPosition);
  vec3 x = normalize(vec3(viewDir.z, 0.0, -viewDir.x));
  vec3 y = cross(viewDir, x);
  vec2 uvPerturbed = vec2(dot(x, viewNormal), dot(y, viewNormal)) * 0.5 + 0.5;
  vec3 matcapMap = texture2D(u_matcap, uvPerturbed).rgb;
  vec3 matcapDiff = vec3(0.25 + 0.75 * matcapMap.r);
  // Lusion packs rough→G / hard→B as specular; keep HDR punch so black jacks rim-light
  float specChan = roughness > 0.5 ? matcapMap.g : matcapMap.b;
  vec3 matcapSpec = vec3(specChan) * (roughness > 0.5 ? 1.15 : 1.65);

  reflections.rgb *= 0.75 + 0.25 * shadow * v_selfShadow;
  shadow = 0.6 + 0.4 * shadow;

  vec3 color = albedo * matcapDiff + matcapSpec;
  color += reflections.rgb;
  color *= mix(0.55, 1.0, v_ao) * ao;
  color += gi * 0.45;
  color *= mix(0.72, 1.0, v_selfShadow);
  color *= shadow;
  color += u_bgColor * 0.02 * (1.0 - matcapDiff);

  gl_FragColor.rgb = filmicToneMapping(pow(max(color, vec3(0.0)), vec3(2.2)));
  gl_FragColor.a = 1.0;
}
`,Yo=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Xo=`
uniform vec3 u_color0;
uniform vec3 u_color1;
uniform float u_aspect;
varying vec2 v_uv;
void main() {
  vec2 q = v_uv - 0.5;
  q.x *= u_aspect;
  float dst = smoothstep(0.0, 1.15, length(q));
  vec3 color = mix(u_color0, u_color1, 0.88 + 0.12 * dst);
  // keep mostly dark like Lusion, with a tint of the accent
  color = mix(u_color1, color, 0.35);
  gl_FragColor = vec4(color, 1.0);
}
`;function Zo(a){const o={...to},n={...to},u={...to};return[{color:a,isRough:!0,isColored:!0,radius:1,...o},{color:a,isRough:!0,isColored:!0,radius:1,...o},{color:a,isRough:!1,isColored:!0,radius:1,...n},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...o},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...o},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...o},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...u},{color:"#111111",isRough:!0,isColored:!1,radius:1,...u},{color:"#111111",isRough:!0,isColored:!1,radius:1,...u},{color:"#111111",isRough:!1,isColored:!1,radius:1,...n},{color:a,isRough:!0,isColored:!0,radius:1,...o},{color:a,isRough:!0,isColored:!0,radius:1,...o},{color:a,isRough:!1,isColored:!0,radius:1,...n},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...o},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...o},{color:"#ffffff",isRough:!0,isColored:!1,radius:1,...o},{color:"#ffffff",isRough:!1,isColored:!1,radius:1,...n},{color:"#111111",isRough:!0,isColored:!1,radius:1,...u},{color:"#111111",isRough:!0,isColored:!1,radius:1,...u},{color:"#111111",isRough:!0,isColored:!1,radius:1,...u},{color:"#111111",isRough:!1,isColored:!1,radius:1,...n}]}function Jo(a){let o=0;for(let n=0;n<a.length;n++)o=o*31+a.charCodeAt(n)>>>0;return()=>(o=o*1664525+1013904223>>>0,o/4294967295)}function io(a,o,n,u,b,m){let r=Math.max(0,Math.min(1,(a-o)/(n-o||1)));return m&&(r=m(r)),u+(b-u)*r}function _o(a){return 1+2.70158*Math.pow(a-1,3)+1.70158*Math.pow(a-1,2)}class Ko{constructor(o,n,u,b,m,r=!1){this.position=new f((m()-.5)*12,(m()-.5)*12,r?7+m():(m()-.5)*6),this.velocity=this.position.clone().multiplyScalar(-2),this.quaternion=new bo().setFromEuler(new Go(m()*Math.PI,m()*Math.PI,m()*Math.PI)),this.radius=1.05*o,this.density=n,this.friction=u,this.restitution=b,this.volume=Math.PI*this.radius*1.333333,this.mass=this.volume*this.radius*this.radius*this.density,this.inertia=this.mass*this.radius*this.radius*.4,this.frictionTot=0,this.gravityForce=new f,this.gravityAcc=new f}applyImpulse(){this.velocity.add(new f((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*5))}updateGravity(o){this.gravityForce.copy(this.position).negate().multiplyScalar(jo),this.gravityAcc.copy(this.gravityForce).multiplyScalar(1/this.mass),this.gravityAcc.multiplyScalar(1/(1+this.frictionTot)),this.velocity.addScaledVector(this.gravityAcc,o),this.frictionTot*=.5}update(o){this.position.addScaledVector(this.velocity,o),this.velocity.multiplyScalar(Math.pow(.2,o))}}async function te(a,o){const n=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812;let u=Math.floor(Math.random()*Q.length),b=Q[u];const m=new Ao,r=new Eo(25,1,.1,100);r.position.set(0,0,25);const x=new Do({canvas:a,antialias:!n,alpha:!1,powerPreference:"high-performance"});x.setClearColor(1316117,1),x.setPixelRatio(Math.min(window.devicePixelRatio||1,n?1:1.5)),x.outputColorSpace=Io,x.toneMapping=To;let so=!0;const ro="/zyrax-studio/",Mo=`${ro}assets/models/home/${n?"cross_ld":"cross"}.buf`,Po=`${ro}assets/textures/home/${n?"matcap_ld":"matcap"}.exr`,[Co,V]=await Promise.all([$o(Mo),new Promise((e,t)=>{new Oo().load(Po,e,void 0,t)})]);V.minFilter=go,V.magFilter=go,V.generateMipmaps=!1,V.colorSpace=Bo;const xo=new f(10,10,5),ao=Zo(b),So=Jo("balloon24"),M=[],S=[],L=[],R=[],Ro=Array.from({length:z},()=>new eo(0,0,-999,.01)),zo=Array.from({length:z},()=>new T(1118481)),Lo=e=>new yo({uniforms:{u_matcap:{value:V},u_color:{value:new T(e.color)},u_bgColor:{value:new T(1316117)},u_roughness:{value:e.isRough?.8:.1},u_lightPosition:{value:xo},u_selfPositionRadius:{value:new eo(0,0,0,1)},u_selfRotation:{value:new eo(0,0,0,1)},u_nearPositionRadiusList:{value:Ro.map(t=>t.clone())},u_nearColorList:{value:zo.map(t=>t.clone())}},vertexShader:Qo,fragmentShader:Wo});for(const e of ao){const t=Lo(e),d=new wo(Co,t);d.frustumCulled=!1,d.scale.setScalar(e.radius),m.add(d),S.push(d),L.push(t),M.push(new Ko(e.radius,e.density,e.friction,e.restitution,So,!1)),R.push({i:S.length-1,d2:0})}const k=new yo({uniforms:{u_color0:{value:new T(b)},u_color1:{value:new T(1316117)},u_aspect:{value:1}},vertexShader:Yo,fragmentShader:Xo,depthWrite:!1}),W=new wo(new Uo(90,60),k);W.position.z=-12,W.renderOrder=-1e3,m.add(W);const O=new Ho(0,0),B=new f,no=new f,co=new f,N=new f,_=new f,C=new f,g=new f,p=new f,w=new f,U=new f,G=new bo,No=.025,Fo=.1,lo=.12,uo=e=>{const t=(o||a).getBoundingClientRect();O.x=(e.clientX-t.left)/t.width*2-1,O.y=-((e.clientY-t.top)/t.height*2-1)};window.addEventListener("pointermove",uo);const fo=()=>{u=(u+1)%Q.length,b=Q[u],S.forEach((e,t)=>{const d=ao[t];d.isColored&&(e.material.uniforms.u_color.value.set(b),d.color=b)}),k.uniforms.u_color0.value.set(b),M.forEach(e=>e.applyImpulse())},H=()=>fo();a.addEventListener("click",H),o?.addEventListener("click",H);let vo=0;const Y=()=>{const e=o||a.parentElement,t=e.clientWidth,d=e.clientHeight,F=t/Math.max(d,1),q=io(F,2.2,2/3,18,30),c=window.visualViewport?.height||window.innerHeight||d,y=Math.max(.15,Math.min(1,d/Math.max(c,1)));r.fov=2*Math.atan(Math.tan(q*Math.PI/360)*y)*180/Math.PI,r.aspect=F,r.updateProjectionMatrix(),x.setSize(t,d,!1),k.uniforms.u_aspect.value=F};Y(),window.addEventListener("resize",Y);let X=0,Z=performance.now();const Vo=performance.now(),J=()=>{const t=(o||a).getBoundingClientRect();so=t.bottom>0&&t.top<window.innerHeight};window.addEventListener("scroll",J,{passive:!0}),J();const mo=e=>{if(X=requestAnimationFrame(mo),!so){Z=e;return}let t=Math.min(.05,(e-Z)/1e3);Z=e;const d=n?1:2;t/=d;const F=(e-Vo)/1e3,q=io(F,.3,2,25,17.5,_o);r.position.z=q,vo=io(F,.3,3,100,0,_o);{const c=r.fov,y=Math.max(1,Math.min(170,c+vo)),l=q,i=l*Math.tan(c/360*Math.PI/2)/Math.tan(y/360*Math.PI/2)-l;Number.isFinite(i)&&(r.position.z=q+i)}for(let c=0;c<d;c++){const y=new f(O.x,O.y,.5).unproject(r);y.sub(r.position).normalize();const l=(0-r.position.z)/y.z;B.copy(r.position).addScaledVector(y,l),co.copy(B).sub(no).multiplyScalar(lo/Math.max(t,.001)),N.copy(B).sub(r.position);const i=N.lengthSq()||1;no.copy(B);for(let P=0;P<M.length;P++){const s=M[P];s.updateGravity(t),C.copy(s.velocity),g.copy(s.position);for(let v=P+1;v<M.length;v++){const h=M[v];w.copy(h.velocity),U.copy(h.position),_.copy(g).sub(U);const oo=_.length(),po=s.radius+h.radius;if(oo<po&&oo>1e-6){const j=Math.sqrt(s.friction*h.friction);s.frictionTot+=j,h.frictionTot+=j,_.normalize(),_.multiplyScalar(.5*(oo-po)),g.sub(_),U.add(_),_.normalize();const A=C.dot(_),E=w.dot(_),D=s.mass,I=h.mass,ko=(D*A+I*E-I*(A-E)*s.restitution)/(D+I),qo=(D*A+I*E-D*(E-A)*h.restitution)/(D+I);C.addScaledVector(_,(ko-A)/(1+j)),w.addScaledVector(_,(qo-E)/(1+j)),h.position.copy(U),h.velocity.copy(w)}}p.copy(g).sub(r.position);let $=p.dot(N)/i;$=p.sub(w.copy(N).multiplyScalar($)).length()-s.radius-No,$<0&&(p.copy(g).sub(r.position).cross(N).normalize(),w.copy(N).cross(p).normalize(),g.sub(w.multiplyScalar(Fo*$)),w.multiplyScalar(-lo/Math.max(t,.001)),C.add(w),C.add(co));let ho=g.length();if(ho>0){p.set(1,1,1).normalize();let v=1-Math.abs(p.dot(w.copy(g).normalize()));v*=t*Math.min(1,Math.max(0,ho/2))*.5,v*=P%2*2-1,G.setFromAxisAngle(p,v),w.copy(g).applyQuaternion(G).sub(p.copy(g)),C.add(w)}p.crossVectors(g,C);let K=p.length();K/=s.inertia,K>0&&(p.normalize(),G.setFromAxisAngle(p,K*t),s.quaternion.premultiply(G)),s.position.copy(g),s.velocity.copy(C),s.update(t),["x","y","z"].forEach(v=>{const h=v==="z"?5.5:7.5;s.position[v]>h&&(s.position[v]=h,s.velocity[v]*=-.55),s.position[v]<-h&&(s.position[v]=-h,s.velocity[v]*=-.55)})}}for(let c=0;c<S.length;c++){const y=S[c],l=M[c];y.position.copy(l.position),y.quaternion.copy(l.quaternion);const i=L[c].uniforms;i.u_selfPositionRadius.value.set(l.position.x,l.position.y,l.position.z,l.radius),i.u_selfRotation.value.set(l.quaternion.x,l.quaternion.y,l.quaternion.z,l.quaternion.w),i.u_bgColor.value.copy(k.uniforms.u_color1.value)}for(let c=0;c<S.length;c++){for(let i=0;i<S.length;i++)R[i].i=i,R[i].d2=c===i?0:M[c].position.distanceToSquared(M[i].position);R.sort((i,P)=>i.d2-P.d2);const y=L[c].uniforms.u_nearPositionRadiusList.value,l=L[c].uniforms.u_nearColorList.value;for(let i=0;i<z;i++){const P=R[i+1]?R[i+1].i:R[0].i,s=M[P];y[i].set(s.position.x,s.position.y,s.position.z,s.radius),l[i].copy(L[P].uniforms.u_color.value)}}r.position.x=0,r.position.y=0,r.lookAt(0,0,0),x.render(m,r)};return X=requestAnimationFrame(mo),{cycleColor:fo,destroy(){cancelAnimationFrame(X),window.removeEventListener("pointermove",uo),window.removeEventListener("resize",Y),window.removeEventListener("scroll",J),a.removeEventListener("click",H),o?.removeEventListener("click",H),L.forEach(e=>e.dispose()),k.dispose(),x.dispose()}}}export{te as createBalloonsHero};
