import{d as j,O as Cn,M as Ue,b as Jt,i as Kn,S as xo,a as we,c as vt,V as ie,C as N,j as Rn,U as zn,H as Qn,R as wo,e as me,k as fn,l as dn,h as Pn,m as $,Q as Kt,T as ft,n as Jn,G as Qt,I as kt,o as Re,Z as wa,A as St,p as er,q as tr,r as Ko,g as or,s as je,t as mt,D as Xt,u as Jo,F as kn,v as eo,w as Qo,f as ot,x as An,P as ar,W as nr,L as rr,N as ir,y as ba,z as yt,J as Dn,K as ya,X as lr,Y as sr}from"./three-DeFrV5FA.js";import{l as Oe}from"./bufLoader-BvNMaFSp.js";import{f as v,a as Fa,c as Xo,b as ur,d as gn,h as cr,i as $t,j as tt,k as pn,l as mr,m as vr,n as fr,o as dr}from"./index-BcvhjBUa.js";import{S as gr,B as Sa,a as _n}from"./lusionMotion-C_siYMC_.js";import"./motion-BgQTtF5Z.js";const pr=`attribute float ao;attribute float areaRatio;attribute float cluster;attribute float height;attribute vec3 center;attribute vec3 instancePos;attribute vec3 instanceGridIds;attribute vec3 instanceAxis;attribute vec4 tangent;uniform float u_time;uniform float u_showRatio;uniform float u_offsetZ;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying float v_ao;varying float v_opacity;varying float v_emission;varying vec2 v_uv;varying vec4 v_rands;varying float v_depth;
#define PI 3.14159265359
vec3 qrotate(vec4 q,vec3 v){return v+2.*cross(q.xyz,cross(q.xyz,v)+q.w*v);}vec4 quaternion(vec3 axis,float angle){float halfAngle=angle*0.5;return vec4(axis*sin(halfAngle),cos(halfAngle));}float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}vec4 hash44(vec4 p4){p4=fract(p4*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec3 inverseTransformDirection(in vec3 dir,in mat4 matrix){return normalize((vec4(dir,0.0)*matrix).xyz);}
uniform float u_blackTunnelTransformRatio;vec3 goalBlackTunnelTransform(vec3 pos){float t=u_blackTunnelTransformRatio*6.2831853;float zWeight=pos.z*0.025;float angle=t*zWeight*zWeight*sign(zWeight);float sa=sin(angle);float ca=cos(angle);mat2 m2=mat2(ca,-sa,sa,ca);pos.xy=m2*pos.xy;pos.z+=t*1.;pos=pos.xzy;float rad=20.;pos/=rad;vec3 a=pos;vec2 pq=vec2(-1.,.5)*t;float ada=dot(a,a);vec4 b=vec4(2.*a,ada-1.)/(1.+ada);vec4 pq_cs=vec4(cos(pq),sin(pq)).xzyw;vec2 np1=vec2(-1.,1.);vec4 c=(b.xxyy*np1.yxyy*pq_cs+b.zzww*np1.yyxy*pq_cs.yxwz).xzyw;pos=c.xyz/(1.-c.w);pos=pos.xzy;return pos*rad;}
void main(){vec3 pos=position;vec3 nor=normal;vec3 tang=tangent.xyz;
#ifdef IS_HD
float blockId=floor(pos.x+0.5);
#else
float blockId=0.;
#endif
vec4 q;vec3 offsetInstanceGridIds=instanceGridIds;offsetInstanceGridIds.z-=floor(u_offsetZ/float(GRID_SIZE))*2.;vec4 instanceRand1s=hash44(floor(vec4(offsetInstanceGridIds+.5,blockId+cluster)));v_rands=hash44(floor(vec4(offsetInstanceGridIds+.5,100.0)));float showRatio=u_showRatio;showRatio*=1.-step(10.5,instanceGridIds.z)*mod(u_offsetZ/float(GRID_SIZE),1.);
#ifdef IS_HD
pos=mix(center,pos,showRatio);
#else
pos.xy*=showRatio*showRatio;pos.z*=showRatio;
#endif
#ifdef IS_HD
pos.x-=blockId;float blockOffset=sin(u_time*2.+cos(u_time*4.+0.2+offsetInstanceGridIds.z))*0.15*instanceRand1s.y;float heightRatio=1.;pos.y=pos.y*height*heightRatio+(0.025+blockOffset);float variation=floor(instanceRand1s.x*8.);q=quaternion(vec3(0.,0.,variation>3.5 ?-1. : 1.),(mod(blockId,4.)+mod(variation,4.))*PI*0.5);pos=qrotate(q,pos);nor=qrotate(q,nor);tang=qrotate(q,tang);
#endif
q=quaternion(instanceAxis,PI*0.5);pos=qrotate(q,pos)*float(GRID_SIZE)+instancePos;nor=qrotate(q,nor);tang=qrotate(q,tang);pos.z+=mod(u_offsetZ,float(GRID_SIZE));v_depth=-pos.z;pos=goalBlackTunnelTransform(pos);
#ifdef IS_HD
v_ao=ao;v_emission=areaRatio<0.25 ? sin(pos.z*0.25-u_time)*0.5+0.5 : 0.;
#else
v_ao=1.;v_emission=0.;
#endif
v_opacity=linearStep(57.,30.,length(pos.xy))*linearStep(5.+100.,5.+100.-20.,cameraPosition.z-pos.z);v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldTangent=vec4(inverseTransformDirection(normalMatrix*tang,viewMatrix),tangent.w);v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);}`,_r=`uniform sampler2D u_feedbackTexture;uniform sampler2D u_greebleArmbTexture;uniform sampler2D u_greebleNormalTexture;uniform vec2 u_resolution;uniform float u_outRatio;uniform vec3 u_outBloomFromToStrength;uniform vec3 u_color1;uniform vec3 u_color2;varying vec3 v_worldPosition;varying vec4 v_worldTangent;varying vec3 v_worldNormal;varying vec4 v_rands;varying float v_ao;varying float v_opacity;varying float v_emission;varying float v_depth;varying vec2 v_uv;float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}void main(){vec2 screenUv=gl_FragCoord.xy/u_resolution;float faceDirection=gl_FrontFacing ? 1.0 :-1.0;vec3 worldNormal=normalize(v_worldNormal)*faceDirection;vec3 worldTangent=normalize(v_worldTangent.xyz)*faceDirection;vec3 worldBinormal=normalize(cross(worldNormal,worldTangent))*-v_worldTangent.w;worldTangent=normalize(cross(worldBinormal,worldNormal));vec3 tangentSpaceNormal=normalize(texture2D(u_greebleNormalTexture,v_uv).xyz-.5);worldNormal=normalize(tangentSpaceNormal.x*worldTangent+tangentSpaceNormal.y*worldBinormal+tangentSpaceNormal.z*worldNormal);vec4 armb=texture2D(u_greebleArmbTexture,v_uv);float ao=v_ao*armb.r;float roughness=armb.g;float metalness=armb.b;float albedo=armb.a;vec3 lightPos=vec3(0.0,-0.0,-100.0);vec3 toLight=normalize(lightPos-v_worldPosition);float diffuse=(dot(worldNormal,toLight)*0.5+0.5);
#ifdef IS_HD
float feedbackMultiplier=2.5;
#else
float feedbackMultiplier=2.0;
#endif
vec3 color1=u_color1;vec3 color2=u_color2;vec3 baseColor=0.5+mix(color1,color2,v_rands.x)*1.2;vec3 emissiveColor=mix(color1,color2,v_rands.y)*3.5;diffuse*=(0.5+texture2D(u_feedbackTexture,screenUv+worldNormal.xy*0.02).r*feedbackMultiplier);gl_FragColor.rgb=baseColor*vec3(ao*0.75*diffuse)+emissiveColor*v_emission;gl_FragColor.rgb*=v_opacity;float endBloomStrength=linearStep(u_outBloomFromToStrength.x,u_outBloomFromToStrength.y,v_depth)*u_outBloomFromToStrength.z;float bloomScale=linearStep(5.0,20.0,v_depth)*(1.0-linearStep(15.0,25.0,length(v_worldPosition.xy)));gl_FragColor.a=bloomScale*max(0.,dot(gl_FragColor.rgb,vec3(.299,.587,.114))*2.5-1.)+endBloomStrength*0.75;gl_FragColor.rgb+=endBloomStrength*(0.35+gl_FragColor.rgb*0.65);}`,hr="attribute float a_instanceId;uniform float u_time;uniform float u_ratio;uniform float u_ratioInverse;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;vec3 deform(in vec3 pos){float origZ=pos.z;float blockCount=float(BLOCK_COUNT);float ratio=mix(.1,1.,u_ratioInverse);float lengthRatio=-pos.z/blockCount;float scalar=mix(0.25,ratio,lengthRatio);pos.x*=1.0+scalar*0.5*sin(lengthRatio*6.283184);pos.y*=1.0+scalar*0.5*cos(lengthRatio*6.283184+3.1415926);float angleRatio=smoothstep(0.25,1.,u_ratioInverse);float angle=(angleRatio+angleRatio*lengthRatio*lengthRatio*1.)*-6.283184;float s=sin(angle);float c=cos(angle);mat2 m=mat2(c,-s,s,c);pos.xy=m*pos.xy;pos.y+=ratio*sin(ratio*lengthRatio*3.141592*4.)*0.25;pos.z-=(cos(ratio*1.5+(1.0-ratio)*lengthRatio*3.141592*0.5)*0.5+0.5-1.0)*blockCount;pos.z*=1.0+16.0*(ratio*lengthRatio*lengthRatio)+2.0*ratio*(sin(8.0*lengthRatio)*0.5+0.5);pos.z*=(1.-ratio*ratio*ratio)*0.9+0.1;pos.z+=blockCount/4.;return pos*15.;}vec3 inverseTransformDirection(in vec3 dir,in mat4 matrix){return normalize((vec4(dir,0.0)*matrix).xyz);}void main(){float blockCount=float(BLOCK_COUNT);vec3 pos=position;pos.z-=a_instanceId;pos.z/=blockCount;float lengthRatio=-pos.z;pos.z*=blockCount;v_localPosition=pos;v_lengthRatio=lengthRatio;vec3 nor=deform(pos+normal*0.01);pos=deform(pos);nor=normalize(nor-pos);vec4 mvPosition=modelViewMatrix*vec4(pos,1.0);v_viewPosition=mvPosition.xyz;v_fog=-0.005*mvPosition.z/mvPosition.w;gl_Position=projectionMatrix*mvPosition;v_worldPosition=(modelMatrix*vec4(pos,1.0)).xyz;v_worldNormal=inverseTransformDirection(normalMatrix*nor,viewMatrix);v_uv=uv;}",xr="uniform sampler2D u_texture;uniform float u_ratioInverse;uniform vec3 u_fbm;varying vec3 v_localPosition;varying vec2 v_uv;varying vec3 v_worldPosition;varying vec3 v_worldNormal;varying vec3 v_viewPosition;varying float v_lengthRatio;varying float v_fog;uniform float u_time;float sphOcclusion(in vec3 pos,in vec3 nor,in vec4 sph){vec3 di=sph.xyz-pos;float l=length(di);float nl=dot(nor,di/l);float h=l/sph.w;float h2=h*h;float k2=1.0-h2*nl*nl;return max(0.0,nl)/h2;}float linearStep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}vec4 hash(vec4 p4){p4=fract(p4*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec3 voronoi(const in vec4 x){vec4 p=floor(x);vec4 f=fract(x);float id=0.0;vec2 res=vec2(100.0);for(int l=-1;l<=1;l++){for(int k=-1;k<=1;k++){for(int j=-1;j<=1;j++){for(int i=-1;i<=1;i++){vec4 b=vec4(float(i),float(j),float(k),float(l));vec4 r=vec4(b)-f+hash(p+b);float d=dot(r,r);float cond=max(sign(res.x-d),0.0);float nCond=1.0-cond;float cond2=nCond*max(sign(res.y-d),0.0);float nCond2=1.0-cond2;id=(dot(p+b,vec4(1.0,57.0,113.0,421.))*cond)+(id*nCond);res=vec2(d,res.x)*cond+res*nCond;res.y=cond2*d+nCond2*res.y;}}}}return vec3(sqrt(res),abs(id));}vec4 hash(float p){vec4 p4=fract(vec4(p)*vec4(.1031,.1030,.0973,.1099));p4+=dot(p4,p4.wzxy+33.33);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}void main(){vec4 sph=vec4(u_fbm.x*2.,u_fbm.y*2.+1.,0.,2.5);vec3 worldNormal=normalize(v_worldNormal);float ao=1.-sphOcclusion(v_worldPosition,worldNormal,sph)*2.*smoothstep(0.8,0.5,u_ratioInverse);float shade=texture2D(u_texture,v_uv).r;float brightness=pow(v_lengthRatio,5.);float t=u_ratioInverse*-2.+u_time*0.2;vec3 vn=voronoi(vec4(v_localPosition*2.+vec3(0.,0.,-t*0.5),t*0.25));vec4 rnd=hash(vn.z);float threshold=0.05+rnd.x*0.1;float r=abs(vn.x-.5)*(1.75+rnd.y*0.5);float pattern=max(0.,1.-smoothstep(threshold-fwidth(r),threshold,r));vec3 color=mix(vec3(0.102,0.184,0.984),vec3(1.),pattern);color*=(.35+shade)*ao;color+=brightness;gl_FragColor=vec4(color,shade+brightness);gl_FragColor.rgb=mix(gl_FragColor.rgb,vec3(1.0),smoothstep(0.8,1.0,u_ratioInverse)*0.5);gl_FragColor.a*=ao*mix(1.,0.15,pattern);gl_FragColor+=linearStep(-10.,-11.,v_localPosition.z);}",Ln=`
uniform sampler2D u_armbTexture;
uniform sampler2D u_norTexture;
uniform float u_time;
uniform vec3 u_bgColor;
uniform float u_showRatio;
varying vec3 v_worldPosition;
varying vec4 v_worldTangent;
varying vec3 v_worldNormal;
varying vec2 v_uv;
varying float v_ao;
varying vec3 v_viewPosition;
#ifndef saturate
#define saturate(a) clamp(a, 0.0, 1.0)
#endif
const float RECIPROCAL_PI = 0.31830988618;
const float RECIPROCAL_PI2 = 0.15915494;
float linearStep(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}
vec2 cartesianToPolar(vec3 n) {
  vec2 uv;
  uv.x = atan(n.z, n.x) * RECIPROCAL_PI2 + 0.5;
  uv.y = asin(clamp(n.y, -1.0, 1.0)) * RECIPROCAL_PI + 0.5;
  return uv;
}
mat4 rotation3d(vec3 axis, float angle) {
  axis = normalize(axis);
  float s = sin(angle);
  float c = cos(angle);
  float oc = 1.0 - c;
  return mat4(
    oc * axis.x * axis.x + c, oc * axis.x * axis.y - axis.z * s, oc * axis.z * axis.x + axis.y * s, 0.0,
    oc * axis.x * axis.y + axis.z * s, oc * axis.y * axis.y + c, oc * axis.y * axis.z - axis.x * s, 0.0,
    oc * axis.z * axis.x - axis.y * s, oc * axis.y * axis.z + axis.x * s, oc * axis.z * axis.z + c, 0.0,
    0.0, 0.0, 0.0, 1.0
  );
}
`,In=`
  vec3 worldNormal = normalize(v_worldNormal);
  vec3 worldTangent = normalize(v_worldTangent.xyz);
  vec3 worldBinormal = normalize(cross(worldNormal, worldTangent)) * -v_worldTangent.w;
  worldTangent = normalize(cross(worldBinormal, worldNormal));
  vec3 tangentSpaceNormal = normalize(texture2D(u_norTexture, v_uv).xyz - 0.5);
  worldNormal = normalize(
    tangentSpaceNormal.x * worldTangent +
    tangentSpaceNormal.y * worldBinormal +
    tangentSpaceNormal.z * worldNormal
  );
  vec4 armb = texture2D(u_armbTexture, v_uv);
  // Exact Lusion common — no AO/albedo floors (floors washed the entry suit + bloom)
  float ao = v_ao * armb.r;
  float roughness = armb.g;
  float metalness = armb.b;
  float albedo = armb.a;
  vec3 N = worldNormal;
  vec3 V = normalize(cameraPosition - v_worldPosition);
  vec3 reflection = normalize(reflect(-V, N));
  float NdV = clamp(abs(dot(N, V)), 0.001, 1.0);
  float fresnel = pow(1.0 - NdV, 5.0);
`,wr=`
${Ln}
uniform sampler2D u_matcapTexture;
uniform sampler2D u_envTexture;
uniform vec3 u_ambientColor;
uniform vec3 u_sunPosition;
uniform float u_frameOutRatio;
uniform float u_whiteTunnelRatio;
uniform vec3 u_tintColor;
uniform float u_faceLedLight;
uniform vec3 u_faceLedColor;
uniform vec3 u_cardPosition;

float getMetalShininess(vec3 viewDir, vec3 lightPosition, vec3 worldNormal, float roughness, float metalness) {
  vec3 lightDir = normalize(lightPosition - v_worldPosition);
  vec3 H = normalize(viewDir + lightDir);
  float dotNL = max(0.0, dot(worldNormal, lightDir));
  float dotNH = max(0.0, dot(worldNormal, H));
  float alpha = max(0.01, roughness * roughness);
  float alphaSqr = alpha * alpha;
  float denom = dotNH * dotNH * (alphaSqr - 1.0) + 1.0;
  float D = alphaSqr / (3.14159 * denom * denom);
  return metalness * D * 5.0 * dotNL;
}
vec2 boxIntersection(in vec3 ro, in vec3 rd, vec3 boxSize) {
  vec3 m = 1.0 / rd;
  vec3 n = m * ro;
  vec3 k = abs(m) * boxSize;
  vec3 t1 = -n - k;
  vec3 t2 = -n + k;
  float tN = max(max(t1.x, t1.y), t1.z);
  float tF = min(min(t2.x, t2.y), t2.z);
  if (tN > tF || tF < 0.0) return vec2(-1.0);
  return vec2(tN, tF);
}
void main() {
${In}
  mat4 frameInRotation = rotation3d(vec3(1.0, 0.0, 0.0), 1.0);
  vec3 viewDir = (vec4(normalize(v_worldPosition), 1.0) * frameInRotation).xyz;
  vec3 x = normalize(vec3(viewDir.z, 0.0, -viewDir.x));
  vec3 y = cross(viewDir, x);
  vec2 uv = vec2(dot(x, worldNormal), dot(y, worldNormal)) * 0.495 + 0.5;
  float zAxisShading = linearStep(-0.2, 1.3, worldNormal.z) * (0.65 + ao * 0.35);
  float outOfFrameRatio = linearStep(0.35, 1.0, u_frameOutRatio);
  vec3 L = normalize(u_sunPosition - v_worldPosition);
  float sunNdLRaw = dot(N, L);
  float sunNdL = saturate(sunNdLRaw);
  float matcapShading = 0.5 + 0.5 * (1.0 - texture2D(u_matcapTexture, uv).r);
  float metalMask = 1.0 - metalness;
  vec3 color = vec3(matcapShading * albedo);
  color += 0.8 * zAxisShading;
  color *= u_ambientColor * (0.85 + sunNdL * 0.5);
  color *= metalMask;
  color += (0.5 + 0.5 * outOfFrameRatio) * metalMask * (0.5 * (0.4 + 0.2 * ao + 0.5 * sunNdL) + 0.1 * sunNdL * sunNdL);
  color *= 0.7 + 0.3 * ao;
  color += linearStep(0.0, 1.0, -sunNdLRaw) * u_ambientColor * 0.1;
  vec3 tunnelColor = color * 0.75;
  vec2 dists = boxIntersection(
    v_worldPosition + vec3(0.0, 0.0, u_whiteTunnelRatio * 7.5 * 5.0) + worldNormal * 200.0,
    -worldNormal,
    vec3(7.5, 7.5, 100.0)
  );
  float dist = 200.0 - dists.x;
  tunnelColor += vec3(1.0) * (abs(worldNormal.x) * 0.5 + 0.5) / max(dist, 0.001)
    * (0.25 + 0.75 * ao)
    * (cos(u_whiteTunnelRatio * 6.283185307179586 * 5.0) * 0.3 + 0.7)
    * 3.5 * (1.0 - metalness);
  color = mix(tunnelColor, color, outOfFrameRatio) * (0.7 + armb.r * 0.3);
  // Face LED panel light (Lusion fragWhite)
  vec3 ledLightPos = u_cardPosition;
  vec3 ledLightDir = ledLightPos - v_worldPosition;
  float ledLightDist = max(length(ledLightDir), 0.001);
  ledLightDir /= ledLightDist;
  float attenuationLed = 1.0 / (16.0 * ledLightDist);
  color += attenuationLed * u_faceLedLight * u_faceLedColor
    * getMetalShininess(V, u_cardPosition, N, (1.0 - metalness), metalness);
  attenuationLed = 1.0 / (16.0 * ledLightDist * ledLightDist);
  color += 0.5 * u_faceLedLight * u_faceLedColor * albedo * attenuationLed
    * (0.5 + 0.5 * saturate(dot(ledLightDir, N)));
  gl_FragColor.rgb = mix(u_bgColor, color, vec3(u_showRatio * 0.8 + 0.2));
#ifndef IS_HELMET_GLASS
  gl_FragColor.rgb += outOfFrameRatio * max(worldNormal.z * 2.0 * sunNdL, metalness)
    * texture2D(u_envTexture, 1.2 * (uv - 0.5) + vec2(0.5)).rgb * 0.75 * v_ao;
#endif
  gl_FragColor.rgb = min(vec3(1.0), gl_FragColor.rgb + u_tintColor * (1.0 - u_frameOutRatio * 0.3) * (0.4 + gl_FragColor.b * 0.6));
  gl_FragColor.rgb *= 0.95 + mix(u_tintColor, vec3(1.0), v_ao) * 0.1;
  gl_FragColor.rgb *= mix(1.0, metalMask * 0.7 + 0.3, linearStep(0.8, 1.0, u_frameOutRatio));
  // Lusion fragWhite: tiny alpha so Stage3D bloom doesn't wash the suit/visor
  gl_FragColor.a = 0.01;
}
`,br=`
uniform sampler2D u_cardTexture;
uniform sampler2D u_cardLedTexture;
uniform vec2 u_cardUvOffset;
uniform vec2 u_cardTextureSize;
uniform vec3 u_cardColor;
uniform float u_cardOpacity;
uniform float u_time;
varying vec2 v_uv;
void main() {
  vec2 uv = v_uv / u_cardTextureSize;
  vec4 texel = texture2D(u_cardTexture, uv + u_cardUvOffset);
  vec3 ledTexture = pow(texture2D(u_cardLedTexture, fract(v_uv * vec2(20.0, 15.0))).rgb, vec3(2.2));
  float ledMask = dot(ledTexture, u_cardColor * texel.r);
  gl_FragColor.rgb = pow(ledTexture, vec3(1.0 / 2.2)) * ledMask * 2.5 * u_cardOpacity;
  gl_FragColor.a = texel.r * 0.35 * u_cardOpacity;
}
`,hn=`
${Ln}
uniform sampler2D u_blackTunnelTexture;
uniform sampler2D u_matcapTexture;
uniform sampler2D u_envTexture;
uniform float u_sunFactor;
uniform vec3 u_sunPosition;
uniform vec3 u_ambientColor;
uniform float u_blackTunnelRatio;
uniform float u_offsetZ;
uniform float u_frameIn;
uniform float u_endRatio;
#ifdef IS_CLONE
uniform float u_alpha;
#endif

float sdBoxFrame(vec3 p, vec3 b, float e) {
  p = abs(p) - b;
  vec3 q = abs(p + e) - e;
  return min(
    min(
      length(max(vec3(p.x, q.y, q.z), 0.0)) + min(max(p.x, max(q.y, q.z)), 0.0),
      length(max(vec3(q.x, p.y, q.z), 0.0)) + min(max(q.x, max(p.y, q.z)), 0.0)
    ),
    length(max(vec3(q.x, q.y, p.z), 0.0)) + min(max(q.x, max(q.y, p.z)), 0.0)
  );
}
float getMetalShininess(vec3 viewDir, vec3 lightPosition, vec3 worldNormal, float roughness, float metalness) {
  vec3 lightDir = normalize(lightPosition - v_worldPosition);
  vec3 H = normalize(viewDir + lightDir);
  float dotNL = max(0.0, dot(worldNormal, lightDir));
  float dotNH = max(0.0, dot(worldNormal, H));
  float alpha = max(0.01, roughness * roughness);
  float alphaSqr = alpha * alpha;
  float denom = dotNH * dotNH * (alphaSqr - 1.0) + 1.0;
  float D = alphaSqr / (3.14159 * denom * denom);
  return metalness * D * 5.0 * dotNL;
}
void main() {
${In}
  vec2 uvDiff = cartesianToPolar(worldNormal);
  vec2 uvSpec = cartesianToPolar(reflection);
  // Lusion samples feedback without forced bias (blur comes from dual-blur RT)
  vec3 blackTunnelEnvDiff = texture2D(u_blackTunnelTexture, 0.25 * uvDiff).rgb;
  vec3 blackTunnelEnvSpec = texture2D(u_blackTunnelTexture, 0.25 * uvSpec).rgb * (0.2 + metalness * 0.7) * 2.0;
#ifdef IS_CLONE
  // Exact Lusion clone ghost: env-only additive silhouette
  gl_FragColor.rgb = (blackTunnelEnvDiff * 3.5 * blackTunnelEnvDiff + blackTunnelEnvSpec * 3.5)
    * v_ao * u_alpha * (0.5 + fresnel * 0.9);
  gl_FragColor.a = mix(max(gl_FragColor.r, max(gl_FragColor.g, gl_FragColor.b)) * u_alpha, 0.0, u_endRatio);
#else
  mat4 frameInRotation = rotation3d(vec3(1.0, 0.0, 0.0), 0.2 + 1.0 * u_frameIn);
  vec3 viewDir = (vec4(normalize(v_worldPosition), 1.0) * frameInRotation).xyz;
  vec3 x = normalize(vec3(viewDir.z, 0.0, -viewDir.x));
  vec3 y = cross(viewDir, x);
  vec2 uv = vec2(dot(x, worldNormal), dot(y, worldNormal)) * 0.495 + 0.5;
  vec3 L = normalize(u_sunPosition - v_worldPosition);
  float sunNdLRaw = dot(N, L);
  float sunNdL = saturate(sunNdLRaw);
  float matcapShading = 0.5 + 0.5 * (1.0 - texture2D(u_matcapTexture, uv).r);
  float zAxisShading = linearStep(-0.2, 1.3, worldNormal.z) * (0.65 + ao * 0.35);
  float metalMask = 1.0 - metalness;
  float metalShininess = u_sunFactor * getMetalShininess(V, u_sunPosition, N, (1.0 - 0.9 * metalness), 0.4 * metalness);
  vec3 color = vec3(matcapShading * albedo);
  color += zAxisShading;
  color *= metalMask;
  color *= mix(u_ambientColor * (0.85 + sunNdL * 0.5), vec3(fresnel * 2.0), u_blackTunnelRatio * 0.5);
  color += linearStep(0.0, 10.0, metalShininess);
  color *= mix(0.5 + 0.5 * ao, 0.75 + 0.25 * ao, u_blackTunnelRatio);
  color += metalMask * u_sunFactor * (0.5 * (0.4 + 0.2 * ao + 0.5 * sunNdL) + 0.1 * sunNdL * sunNdL);
  color += linearStep(0.0, 1.0, -sunNdLRaw) * u_ambientColor * 0.1;
  vec3 blackTunnelColor = (color * blackTunnelEnvSpec * (7.0 + metalness * 10.0) + albedo * blackTunnelEnvDiff * 1.6)
    * (1.3 - abs(reflection.z)) * (0.5 + ao * 0.5);
  float GRID_SIZE = 20.0;
  vec3 relPos = v_worldPosition + worldNormal * 3.0 + vec3(0.0, 0.0, u_offsetZ);
  float repDist = GRID_SIZE - 1.0;
  vec3 relPosRep = mod(relPos + 0.5 * repDist, repDist) - 0.5 * repDist;
  float sdf = sdBoxFrame(relPosRep, vec3(GRID_SIZE - 1.0) * 0.5, 1.0);
  blackTunnelColor += exp(-sdf * 0.25) * blackTunnelEnvDiff * 2.0;
  gl_FragColor.rgb = color;
  gl_FragColor.rgb = mix(gl_FragColor.rgb, 0.3 * gl_FragColor.rgb + blackTunnelColor, clamp(u_blackTunnelRatio * 2.0 - 1.0 + ao, 0.0, 1.0));
  gl_FragColor.rgb = mix(u_bgColor, gl_FragColor.rgb, vec3(u_showRatio));
  gl_FragColor.rgb *= (0.3 + armb.r * 0.7);
#ifndef IS_HELMET_GLASS
  gl_FragColor.rgb += max(worldNormal.z * 2.0 * sunNdL, metalness)
    * texture2D(u_envTexture, 1.2 * (uv - 0.5) + vec2(0.5)).rgb * 0.75 * v_ao * (1.0 - u_blackTunnelRatio);
#endif
  // Exact Lusion bloom alpha (NOT 1.0 — alpha drives Stage3D bloom)
  gl_FragColor.a = 0.01 + 0.1 * max(0.0, gl_FragColor.g - 1.0 + metalness * 0.2) * (0.5 + metalness * 1.5)
    + gl_FragColor.b * u_blackTunnelRatio * dot(vec3(0.299, 0.587, 0.114), blackTunnelColor) * 5.0;
  // Soft-compress metalShininess — Lusion FFT bloom spreads specular energy;
  // raw += metalShininess blows a rectangular hotspot through our gaussian path.
  gl_FragColor.a += metalShininess / (1.0 + metalShininess);
  gl_FragColor.a *= (0.5 + fresnel * 0.9);
#endif
}
`,ct=5,Vo=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,yr=`
uniform sampler2D u_texture;
uniform float u_amount;
uniform float u_convolutionBuffer;
uniform vec2 u_texelSize;
uniform vec2 u_aspect;
uniform float u_haloWidth;
uniform float u_haloRGBShift;
uniform float u_haloStrength;
uniform float u_haloMaskInner;
uniform float u_haloMaskOuter;
varying vec2 v_uv;
void main() {
  // Lusion USE_CONVOLUTION: slight zoom-out before sampling
  vec2 uv = (v_uv - 0.5) * (1.0 + u_convolutionBuffer) + 0.5;
  vec4 texel = texture2D(u_texture, uv);
  float alpha = texel.a * u_amount;
  gl_FragColor = vec4(texel.rgb * alpha, 1.0);
  if (u_haloStrength > 0.001) {
    vec2 toCenter = (uv - 0.5) * u_aspect;
    vec2 ghostUv = 1.0 - (toCenter + 0.5);
    vec2 ghostVec = (vec2(0.5) - ghostUv);
    vec2 direction = length(ghostVec) > 1e-5 ? normalize(ghostVec) : vec2(0.0);
    vec2 haloVec = direction * u_haloWidth;
    // Lusion: distortion = texelSize * (haloRGBShift * screenWidth) ≈ ±haloRGBShift in UV
    vec3 distortion = vec3(-1.0, 0.0, 1.0) * u_haloRGBShift;
    float zoomBlurRatio = fract(atan(toCenter.y, toCenter.x) * 40.0) * 0.05 + 0.95;
    ghostUv *= zoomBlurRatio;
    vec2 haloUv = ghostUv + haloVec;
    vec3 halo = vec3(
      texture2D(u_texture, haloUv + direction * distortion.r).r,
      texture2D(u_texture, haloUv + direction * distortion.g).g,
      texture2D(u_texture, haloUv + direction * distortion.b).b
    );
    halo *= u_haloStrength * smoothstep(u_haloMaskInner, u_haloMaskOuter, length(toCenter));
    gl_FragColor.rgb += halo;
  }
  // Lusion USE_CONVOLUTION edge mask — kills bloom at zoomed borders
  gl_FragColor.rgb *= max(abs(uv.x - 0.5), abs(uv.y - 0.5)) > 0.5 ? 0.0 : 1.0;
}
`,Sr=`
varying vec2 v_uv;
uniform sampler2D u_texture;
uniform vec2 u_resolution;
uniform vec2 u_direction;
float gaussianPdf(in float x, in float sigma) {
  return 0.39894 * exp(-0.5 * x * x / (sigma * sigma)) / sigma;
}
void main() {
  vec2 invSize = 1.0 / u_resolution;
  float fSigma = float(SIGMA);
  float weightSum = gaussianPdf(0.0, fSigma);
  vec3 diffuseSum = texture2D(u_texture, v_uv).rgb * weightSum;
  for (int i = 1; i < KERNEL_RADIUS; i++) {
    float x = float(i);
    float w = gaussianPdf(x, fSigma);
    vec2 uvOffset = u_direction * invSize * x;
    diffuseSum += texture2D(u_texture, v_uv + uvOffset).rgb * w;
    diffuseSum += texture2D(u_texture, v_uv - uvOffset).rgb * w;
    weightSum += 2.0 * w;
  }
  gl_FragColor = vec4(diffuseSum / weightSum, 1.0);
}
`,Tr=`
varying vec2 v_uv;
uniform sampler2D u_texture;
uniform float u_saturation;
uniform float u_scrollPaint;
uniform sampler2D u_blurTexture0;
uniform sampler2D u_blurTexture1;
uniform sampler2D u_blurTexture2;
uniform sampler2D u_blurTexture3;
uniform sampler2D u_blurTexture4;
uniform float u_bloomWeights[5];
void main() {
  // Soft radial warp from scroll velocity (light approx of Lusion screenPaint)
  vec2 toCenter = v_uv - 0.5;
  float paint = clamp(u_scrollPaint, 0.0, 1.0);
  vec2 warp = toCenter * paint * 0.004;
  vec2 uv = v_uv + warp;
  vec2 rgbShift = normalize(toCenter + 1e-5) * paint * 0.0016;
  vec4 c = vec4(
    texture2D(u_texture, uv + rgbShift).r,
    texture2D(u_texture, uv).g,
    texture2D(u_texture, uv - rgbShift).b,
    1.0
  );
  vec3 bloom =
    u_bloomWeights[0] * texture2D(u_blurTexture0, uv).rgb +
    u_bloomWeights[1] * texture2D(u_blurTexture1, uv).rgb +
    u_bloomWeights[2] * texture2D(u_blurTexture2, uv).rgb +
    u_bloomWeights[3] * texture2D(u_blurTexture3, uv).rgb +
    u_bloomWeights[4] * texture2D(u_blurTexture4, uv).rgb;
  gl_FragColor = vec4(c.rgb + bloom, 1.0);
  float luma = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
  gl_FragColor.rgb = mix(vec3(luma), gl_FragColor.rgb, u_saturation);
  gl_FragColor.a = 1.0;
}
`,Mr=`
uniform sampler2D u_texture;
uniform sampler2D u_depthTexture;
uniform mat4 u_projectionViewInverseMatrix;
uniform mat4 u_prevProjectionViewMatrix;
uniform vec2 u_aspect;
uniform float u_amount;
varying vec2 v_uv;
void main() {
  float depth = texture2D(u_depthTexture, v_uv).r;
  vec4 ndc = vec4(v_uv * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
  vec4 worldPos = u_projectionViewInverseMatrix * ndc;
  worldPos /= worldPos.w;
  vec4 prevPos = u_prevProjectionViewMatrix * worldPos;
  prevPos /= prevPos.w;
  prevPos.xy = prevPos.xy * 0.5 + 0.5;
  vec2 velocity = (prevPos.xy - v_uv) / 16.0 * u_amount;
  vec2 uv = v_uv;
  vec4 color = vec4(0.0);
  float weightSum = 0.0;
  float weight = 1.0;
  for (int i = 0; i < 16; i++) {
    color += texture2D(u_texture, uv) * weight;
    uv += velocity;
    weightSum += weight;
  }
  gl_FragColor = color / max(weightSum, 1e-5);
}
`;function jt(l,c,m=!1,n=0){const o={minFilter:me,magFilter:me,format:wo,type:n>0?zn:Qn,depthBuffer:m,stencilBuffer:!1,samples:n},p=new Rn(l,c,o);return m&&n===0&&(p.depthTexture=new fn(l,c),p.depthTexture.type=dn),m&&n>0&&(p.depthTexture=new fn(l,c),p.depthTexture.type=dn),p}function Fr(l,c,m,{isMobile:n=!1}={}){const o=new j(1,1);l.getSize(o);let p=!!n,S=jt(1,1,!0,4),x=jt(1,1,!1),H=jt(1,1,!1),V=jt(1,1,!1),w=null,M=null;const b=[],X=[];for(let g=0;g<ct;g++)b.push(jt(1,1)),X.push(jt(1,1));const k=new Cn(-1,1,1,-1,0,1),ve=new Ue(new Jt(2,2),new Kn),Q=new xo;Q.add(ve);const y=new we({uniforms:{u_texture:{value:null},u_amount:{value:1},u_convolutionBuffer:{value:.15},u_texelSize:{value:new j(1,1)},u_aspect:{value:new j(1,1)},u_haloWidth:{value:.6},u_haloRGBShift:{value:.015},u_haloStrength:{value:0},u_haloMaskInner:{value:.3},u_haloMaskOuter:{value:.5}},vertexShader:Vo,fragmentShader:yr,depthTest:!1,depthWrite:!1,toneMapped:!1}),q=[];for(let g=0;g<ct;g++){const E=3+g*2;q.push(new we({uniforms:{u_texture:{value:null},u_resolution:{value:new j(1,1)},u_direction:{value:new j(1,0)}},defines:{KERNEL_RADIUS:E,SIGMA:E},vertexShader:Vo,fragmentShader:Sr,depthTest:!1,depthWrite:!1,toneMapped:!1}))}const fe=new Float32Array(ct),T=new we({uniforms:{u_texture:{value:null},u_saturation:{value:1},u_scrollPaint:{value:0},u_blurTexture0:{value:null},u_blurTexture1:{value:null},u_blurTexture2:{value:null},u_blurTexture3:{value:null},u_blurTexture4:{value:null},u_bloomWeights:{value:fe}},vertexShader:Vo,fragmentShader:Tr,depthTest:!1,depthWrite:!1,toneMapped:!1});let ze=0;const C=new we({uniforms:{u_texture:{value:null},u_depthTexture:{value:null},u_projectionViewInverseMatrix:{value:new vt},u_prevProjectionViewMatrix:{value:new vt},u_aspect:{value:new j(1,1)},u_amount:{value:1}},vertexShader:Vo,fragmentShader:Mr,depthTest:!1,depthWrite:!1,toneMapped:!1}),J=new vt,K=new vt,be=new vt,r=new vt,u=new vt,i=new ie,F=new Pn,R=new ie(1,1,1),He=new Kt;let oe=!0,ye=1,Be=!1,de=0,Ne=0,dt=1,at=1,ge=0,Ze=.015,Ye=.6,Ve=.3,gt=.5,Ge=0,Xe=new N(0),Ke=!0,B=1,G=1,At=1;const ea=new j(1,0),nt=new j(0,1),Tt=(g,E)=>{ve.material=g,l.setRenderTarget(E),l.clear(),l.render(Q,k)},Dt=g=>{const E=Math.max(1,g);return 1<<Math.ceil(Math.log(E)/Math.log(2))},bo=(g,E)=>{B=Math.max(1,Math.floor(g)),G=Math.max(1,Math.floor(E));const A=1;S.setSize(Math.max(1,Math.floor(B*A)),Math.max(1,Math.floor(G*A))),x.setSize(S.width,S.height),H.setSize(S.width,S.height);const Te=p?3:2;let _e=Math.max(1,Math.ceil(B/Te)),Z=Math.max(1,Math.ceil(G/Te));V.setSize(_e,Z);for(let Pe=0;Pe<ct;Pe++)b[Pe].setSize(_e,Z),X[Pe].setSize(_e,Z),_e=Math.max(1,Math.ceil(_e/2)),Z=Math.max(1,Math.ceil(Z/2));y.uniforms.u_texelSize.value.set(1/B,1/G);const le=G/Math.sqrt(B*B+G*G)*2;y.uniforms.u_aspect.value.set(B/G*le,le),C.uniforms.u_aspect.value.set(B/Math.max(G,1),1)},yo=({blackFrameInRatio:g=0,blackTitleRatio:E=0,blackTunnelRatio:A=0,whiteFrameRatio:Te=0,whiteTunnelWaitRatio:_e=0,astronautDropRatio:Z=0,isWhiteTunnelActive:le=!1,isBlackTunnelActive:Pe=!1,isMobile:D=!1}={})=>{p=!!D;let Me=g*($.lerp(0,.15,E)+$.clamp((A-.2)/.2,0,1)*.25);if(A>=.65){const f=$.clamp((A-.65)/.1,0,1);Me=Me+(.08-Me)*f}if(le&&(Me=0),!le&&g>.55&&A<.25){const f=$.lerp(D?.24:.42,D?.12:.18,$.clamp(E/.5,0,1));Me=Math.max(Me,f*Math.min(1,g))}if(dt=A<1?$.lerp(1,3,$.clamp(A/.7,0,1)):1,le){const f=Z>.001&&Z<1,O=D?10:16;de=Z<1?$.lerp(f?1.6:4,f?1.1:2,$.clamp(Te/.05,0,1)):$.lerp(0,O,$.clamp(_e/.1,0,1)),Ne=f?D?.28:.35:D?.4:.5,at=f?1:D?1.1:1.2,At=f?.45:D?.95:1.05,Me=0;const $e=f?.12:.3;Ge=$.lerp($e,0,$.clamp(_e/.1,0,1)),Xe.set(Z<1?"#ffffff":"#000000")}else{At=1;const f=$.clamp(E/.25,0,1);de=$.lerp(D?22:30,D?5:6,f),Ge=0,Xe.set("#000000")}ge=Me;const De=!le&&g>.55&&A<.2;Ye=De?.85:.6,Ze=De?.04:D?.012:.02,Ve=De?.15:.3,gt=De?.75:.5,le||(Ne=D?.15:De?.55:.5,at=De?1.15:1),Be=Pe||le},pe=(g,E=0)=>{i.set(0,0,g),F.set(0,0,E)},Qe=()=>{oe=!0},Se=(g,E)=>{const A=l.autoClear;l.autoClear=!0,Tt(g,E),l.autoClear=A},So=()=>{if(!Ke){l.setRenderTarget(null),l.render(c,m);return}const g=l.getRenderTarget(),E=l.autoClear;l.setRenderTarget(S),l.autoClear=!0,l.setClearColor(Xe,Ge),l.clear();const A=c.background;c.background=null;const Te=w?.mesh,_e=!!Te?.visible;_e&&(Te.visible=!1);const Z=M?.mesh,le=!!Z?.visible;if(le&&(Z.visible=!1),l.render(c,m),c.background=A,M?.visible&&M.overlayScene?(Z&&(Z.visible=!0),l.setRenderTarget(S),l.autoClear=!1,l.clearDepth(),l.render(M.overlayScene,k),l.autoClear=!0):le&&Z&&(Z.visible=!1),w?.active&&w.overlayScene){for(let O=0;O<ct;O++)fe[O]=0,T.uniforms[`u_blurTexture${O}`].value=S.texture;T.uniforms.u_texture.value=S.texture,T.uniforms.u_saturation.value=1;const f=T.uniforms.u_scrollPaint.value;T.uniforms.u_scrollPaint.value=0,Tt(T,x),T.uniforms.u_scrollPaint.value=f,w.setBackground(x.texture,x.width,x.height),w.syncToCamera(m,G),Te&&(Te.visible=!0),l.setRenderTarget(S),l.autoClear=!1,l.clearDepth(),l.render(w.overlayScene,m),l.autoClear=!0}else _e&&Te&&(Te.visible=!1);let Pe=S.texture;if(J.multiplyMatrices(m.projectionMatrix,m.matrixWorldInverse),be.copy(J).invert(),Be&&ye>0?(oe&&(K.copy(J),oe=!1),u.compose(i,He.setFromEuler(F),R),u.invert(),r.copy(K).multiply(u),C.uniforms.u_texture.value=S.texture,C.uniforms.u_depthTexture.value=S.depthTexture,C.uniforms.u_projectionViewInverseMatrix.value.copy(be),C.uniforms.u_prevProjectionViewMatrix.value.copy(r),C.uniforms.u_amount.value=ye,Se(C,H),Pe=H.texture,K.copy(J)):(K.copy(J),oe=!0),de<.05&&ge<.005){T.uniforms.u_texture.value=Pe;for(let f=0;f<ct;f++)fe[f]=0,T.uniforms[`u_blurTexture${f}`].value=Pe;T.uniforms.u_saturation.value=1,l.setRenderTarget(null),Tt(T,null),l.autoClear=E,l.setRenderTarget(g);return}y.uniforms.u_texture.value=Pe,y.uniforms.u_amount.value=at,y.uniforms.u_haloStrength.value=ge,y.uniforms.u_haloWidth.value=Ye,y.uniforms.u_haloRGBShift.value=Ze,y.uniforms.u_haloMaskInner.value=Ve,y.uniforms.u_haloMaskOuter.value=gt,Se(y,V);const D=p?3:ct;let Me=V;for(let f=0;f<D;f++){const O=q[f];O.uniforms.u_texture.value=Me.texture,O.uniforms.u_resolution.value.set(Me.width,Me.height),O.uniforms.u_direction.value=ea,Se(O,b[f]),O.uniforms.u_texture.value=b[f].texture,O.uniforms.u_resolution.value.set(b[f].width,b[f].height),O.uniforms.u_direction.value=nt,Se(O,X[f]),Me=X[f]}let De=de;if(p)De*=At;else{const f=Dt(B/2)>>1,O=Dt(G/2)>>1,$e=Math.max(1,Math.ceil(Math.log(f*O)/Math.log(2)));De=de*1024/Math.pow($e,4)*.85*48*At}for(let f=0;f<ct;f++){if(f>=D){fe[f]=0;continue}const O=(D-f)/D;let $e=De*(O+(1.2-O*2)*Ne)/Math.pow(2,D-f-1);!p&&f===0&&($e*=.15),!p&&f===1&&($e*=.45),!p&&f>=3&&($e*=1.75),fe[f]=$e}T.uniforms.u_texture.value=Pe,T.uniforms.u_saturation.value=dt;for(let f=0;f<ct;f++){const O=f<D?X[f].texture:X[D-1].texture;T.uniforms[`u_blurTexture${f}`].value=O}l.setRenderTarget(null),Tt(T,null),l.autoClear=E,l.setRenderTarget(g)};return bo(o.x,o.y),{resize:bo,sync:yo,render:So,setEfxOffset:pe,markEfxSync:Qe,setGlassPass(g){w=g||null},setFrameBgPass(g){M=g||null},setEfxAmount(g){ye=g},get clearAlpha(){return Ge},setEnabled(g){Ke=!!g},setScrollVelocity(g){const E=Math.min(1,Math.abs(g)*.12);ze+=(E-ze)*.12,T.uniforms.u_scrollPaint.value=ze},destroy(){S.dispose(),x.dispose(),H.dispose(),V.dispose(),b.forEach(g=>g.dispose()),X.forEach(g=>g.dispose()),y.dispose(),T.dispose(),C.dispose(),q.forEach(g=>g.dispose()),ve.geometry.dispose()}}}const xn=[{x:1132,y:3,w:195,h:195},{x:744,y:3,w:195,h:256},{x:525,y:3,w:213,h:282},{x:242,y:3,w:277,h:286},{x:1055,y:633,w:209,h:209},{x:1076,y:398,w:209,h:209},{x:3,y:772,w:298,h:249},{x:945,y:3,w:181,h:249},{x:1291,y:389,w:160,h:197},{x:1055,y:848,w:83,h:122},{x:1132,y:204,w:167,h:179},{x:1270,y:828,w:192,h:193},{x:780,y:265,w:182,h:167},{x:564,y:445,w:294,h:184},{x:307,y:683,w:205,h:334},{x:864,y:438,w:206,h:189},{x:968,y:258,w:149,h:134},{x:734,y:635,w:165,h:382},{x:605,y:291,w:169,h:141},{x:302,y:445,w:256,h:232},{x:518,y:683,w:210,h:266},{x:242,y:295,w:357,h:144},{x:3,y:3,w:233,h:469},{x:905,y:633,w:144,h:340},{x:1270,y:613,w:187,h:209},{x:3,y:478,w:293,h:288}],Cr=26,Pt=64,Rr=34,po=new j(1465,1024),zr=`
attribute float instanceId;
attribute vec4 instanceUvInfo;
attribute vec4 instanceRands;
uniform float u_time;
uniform float u_activeRatio;
uniform float u_aspect;
uniform vec2 u_textureSize;
varying float v_fadeOut;
varying vec2 v_uv;
vec4 hash42(vec2 p){
  vec4 p4=fract(vec4(p.xyxy)*vec4(.1031,.1030,.0973,.1099));
  p4+=dot(p4,p4.wzxy+33.33);
  return fract((p4.xxyz+p4.yzzw)*p4.zywx);
}
vec2 rotate(vec2 v,float a){
  float s=sin(a);float c=cos(a);
  return mat2(c,s,-s,c)*v;
}
float linearStep(float edge0,float edge1,float x){
  return clamp((x-edge0)/(edge1-edge0),0.0,1.0);
}
void main(){
  vec3 pos=position;
  pos.xy*=instanceUvInfo.zw*u_textureSize*0.01;
  float t=u_time*mix(0.05,0.1,instanceRands.x)+instanceRands.y;
  float cycle=floor(t);
  float ratio=fract(t);
  vec4 cycleRands=hash42(vec2(cycle,instanceId));
      pos.xy=rotate(pos.xy,instanceRands.z*6.28+sign(cycleRands.z-.5)*u_time*mix(.5,1.,cycleRands.y))
    *linearStep(instanceRands.w*0.5,instanceRands.w*0.5+0.5,u_activeRatio)*0.35;
  float yLimit=7.0/u_aspect;
  vec3 instancePos=vec3(mix(-5.,5.,cycleRands.x),yLimit*mix(-1.0,1.0,ratio),20.+instanceId/float(COUNT));
  pos+=instancePos;
  gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);
  v_uv=instanceUvInfo.xy+instanceUvInfo.zw*vec2(uv.x,1.-uv.y);
  v_uv.y=1.0-v_uv.y;
  v_fadeOut=2.0*abs(ratio-0.5);
}
`,Pr=`
uniform sampler2D u_texture;
uniform vec3 u_bgColor;
varying vec2 v_uv;
varying float v_fadeOut;
float linearStep(float edge0,float edge1,float x){
  return clamp((x-edge0)/(edge1-edge0),0.0,1.0);
}
void main(){
  gl_FragColor=texture2D(u_texture,v_uv);
  gl_FragColor.rgb=mix(u_bgColor,gl_FragColor.rgb,linearStep(0.0,0.1,1.0-v_fadeOut));
}
`,kr=`
attribute vec3 a_instancePosition;
attribute vec3 a_instanceRotationAxis;
attribute vec4 a_instanceRand;
attribute float thickness;
uniform float u_time;
uniform float u_aspect;
uniform float u_activeRatio;
varying vec3 v_viewNormal;
varying float v_thickness;
varying vec3 v_cameraPositionLS;
varying vec3 v_positionLS;
varying vec3 v_normalLS;
varying vec4 v_orient;
varying float v_fadeOut;
#ifndef HALF_PI
#define HALF_PI 1.5707963267948966
#endif
float linearStep(float edge0,float edge1,float x){
  return clamp((x-edge0)/(edge1-edge0),0.0,1.0);
}
vec3 qrotate(vec4 q,vec3 v){return v+2.0*cross(q.xyz,cross(q.xyz,v)+q.w*v);}
vec4 quaternion(vec3 axis,float halfAngle){return vec4(axis*sin(halfAngle),cos(halfAngle));}
void main(){
  float time=0.5*u_time+4.*a_instanceRand.x;
  float scale=0.75;
  vec3 pos=position;
  vec4 orient=quaternion(a_instanceRotationAxis,(0.5+a_instanceRand.y)*time);
  pos=qrotate(orient,pos);
  pos*=scale;
  vec3 nor=qrotate(orient,normal);
  vec3 instancePosition=a_instancePosition;
  instancePosition.y+=0.5*u_time*(1.+a_instanceRand.x);
  float yLimit=20.0/u_aspect;
  instancePosition.y=mod(instancePosition.y,yLimit)-0.5*yLimit;
  v_fadeOut=abs(instancePosition.y)/(yLimit*0.5);
  pos*=linearStep(a_instanceRand.w*0.5,a_instanceRand.w*0.5+0.5,u_activeRatio);
  pos+=instancePosition;
  vec4 orientInv=vec4(-orient.xyz,orient.w);
  gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);
  v_cameraPositionLS=qrotate(orientInv,(cameraPosition-instancePosition)/scale);
  v_positionLS=position*scale;
  v_normalLS=normal;
  v_orient=orient;
  v_viewNormal=normalMatrix*nor;
  v_thickness=thickness;
}
`,Ar=`
uniform vec3 u_color;
uniform vec3 u_bgColor;
uniform vec4 u_planes[25];
uniform mat3 normalMatrix;
varying vec3 v_viewNormal;
varying float v_thickness;
varying vec3 v_cameraPositionLS;
varying vec3 v_positionLS;
varying vec3 v_normalLS;
varying vec4 v_orient;
varying float v_fadeOut;
float linearStep(float edge0,float edge1,float x){
  return clamp((x-edge0)/(edge1-edge0),0.0,1.0);
}
float plaIntersect(in vec3 ro,in vec3 rd,in vec4 p){
  return-(dot(ro,p.xyz)+p.w)/dot(rd,p.xyz);
}
vec4 getColorShade(vec3 dir,vec3 vn){
  float d=dot(dir,vn);
  float shade=(1.0-max(0.,vn.z))*v_thickness*5.;
  shade*=(pow(linearStep(2.,-1.,d),4.)*0.15+pow(linearStep(1.,-2.,d),5.)*7.);
  vec3 rgb=mix(vec3(0.8),clamp(abs(mod((d+vn.z)*12.+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0,0.0,1.0),1.-shade);
  return vec4((vec3(u_color)+rgb*1.2)*shade,0.035+(1.-v_thickness)*shade*shade)*(1.-abs(vn.z));
}
vec3 qrotate(vec4 q,vec3 v){return v+2.0*cross(q.xyz,cross(q.xyz,v)+q.w*v);}
void main(){
  vec3 localDir=normalize(v_positionLS);
  vec3 viewNormal=normalize(v_viewNormal);
  float ior=2.418;
  vec3 norLS=normalize(v_normalLS);
  vec3 refrLS=refract(normalize(v_positionLS-v_cameraPositionLS),norLS,1./ior);
  float dist=100.;
  vec3 planeDir=vec3(0.);
  for(int i=0;i<25;i++){
    vec4 plane=u_planes[i];
    plane.xyz*=-1.;
    plane.w*=0.7501;
    float hitDist=plaIntersect(v_positionLS+refrLS*0.001,refrLS,plane);
    if(hitDist>0.&&hitDist<dist){dist=hitDist;planeDir=u_planes[i].xyz;}
  }
  vec3 refrPosLS=v_positionLS+refrLS*dist;
  refrLS=refract(refrLS,planeDir,ior);
  vec3 refrLocalDir=qrotate(v_orient,normalize(refrPosLS));
  vec3 viewPlaneNor=normalMatrix*qrotate(v_orient,planeDir);
  vec4 frontColorShade=getColorShade(localDir,viewNormal);
  vec4 backColorShade=getColorShade(refrLocalDir,viewPlaneNor);
  gl_FragColor=frontColorShade*1.5+vec4(backColorShade.rgb*0.75,backColorShade.a*.5);
  gl_FragColor.rgb=mix(u_bgColor,gl_FragColor.rgb,linearStep(0.0,0.1,1.0-v_fadeOut));
}
`,Go=[-.694747,.694747,.186157,-.239229,-.50859,.694747,.50859,-.239229,-.186157,.694747,.694747,-.239229,.186157,.694747,.694747,-.239229,.50859,.694747,.50859,-.239229,.694747,.694747,.186157,-.239229,.694747,.694747,-.186157,-.239229,.50859,.694747,-.50859,-.239229,.186157,.694747,-.694746,-.239229,-.186156,.694747,-.694747,-.239229,-.508589,.694747,-.50859,-.239229,-.694747,.694747,-.186157,-.239229,-.694747,-.694747,.186157,-.455518,-.50859,-.694747,.50859,-.455518,-.186157,-.694747,.694747,-.455518,.186157,-.694747,.694747,-.455518,.50859,-.694747,.50859,-.455518,.694746,-.694747,.186157,-.455518,.694746,-.694747,-.186157,-.455518,.50859,-.694747,-.50859,-.455518,.186157,-.694747,-.694746,-.455518,-.186156,-.694747,-.694747,-.455518,-.508589,-.694747,-.50859,-.455518,-.694747,-.694747,-.186157,-.455518,-0,-1,-0,-.34434];function Dr(l){let c=2166136261;for(let m=0;m<l.length;m++)c^=l.charCodeAt(m),c=Math.imul(c,16777619);return()=>{c+=1831565813;let m=Math.imul(c^c>>>15,1|c);return m^=m+Math.imul(m^m>>>7,61|m),((m^m>>>14)>>>0)/4294967296}}async function Lr(l,{base:c,isMobile:m,sharedTime:n}){const o="stickers.png",p=m?Rr:Cr,[S,x]=await Promise.all([new ft().loadAsync(`${c}assets/textures/tunnels/${o}`),Oe(`${c}assets/models/tunnels/diamond.buf`)]);S.colorSpace=Jn,S.flipY=!1,S.needsUpdate=!0;const H=new Qt;l.add(H);const V=new Jt(1,1),w=new kt;for(const r in V.attributes)w.setAttribute(r,V.attributes[r]);w.index=V.index;const M=new Float32Array(p),b=new Float32Array(p*4),X=new Float32Array(p*4);for(let r=0,u=0;r<p;r++,u+=4){M[r]=r/p;const i=xn[r%xn.length];b[u]=i.x/po.x,b[u+1]=i.y/po.y,b[u+2]=i.w/po.x,b[u+3]=i.h/po.y,X[u]=Math.random(),X[u+1]=Math.random(),X[u+2]=Math.random(),X[u+3]=Math.random()}w.setAttribute("instanceId",new Re(M,1)),w.setAttribute("instanceUvInfo",new Re(b,4)),w.setAttribute("instanceRands",new Re(X,4)),w.instanceCount=p;const k=new we({vertexShader:zr,fragmentShader:Pr,uniforms:{u_time:n,u_activeRatio:{value:0},u_texture:{value:S},u_textureSize:{value:po.clone()},u_bgColor:{value:new N(0)},u_aspect:{value:1}},transparent:!0,depthWrite:!1,blending:Ko,blendEquation:St,blendSrc:tr,blendDst:er,blendEquationAlpha:St,blendSrcAlpha:wa,blendDstAlpha:wa,defines:{COUNT:p}}),ve=new Ue(w,k);ve.frustumCulled=!1,ve.visible=!1,H.add(ve);const Q=new kt;for(const r in x.attributes)Q.setAttribute(r,x.attributes[r]);x.index&&(Q.index=x.index);const y=Dr("diamonds-3"),q=new Float32Array(Pt*3),fe=new Float32Array(Pt*3),T=new Float32Array(Pt*4),ze=new ie;for(let r=0,u=0,i=0;r<Pt;r++,u+=3,i+=4)q[u]=16*(y()*2-1),q[u+1]=16*(y()*2-1),q[u+2]=19-(Pt-r-1)/(Pt-1)*8,ze.set(y()*2-1,y()*2-1,y()*2-1).normalize(),fe[u]=ze.x,fe[u+1]=ze.y,fe[u+2]=ze.z,T[i]=y(),T[i+1]=y(),T[i+2]=y(),T[i+3]=y();Q.setAttribute("a_instancePosition",new Re(q,3)),Q.setAttribute("a_instanceRotationAxis",new Re(fe,3)),Q.setAttribute("a_instanceRand",new Re(T,4)),Q.instanceCount=Pt;const C=[];for(let r=0;r<25;r++)C.push(new or(Go[r*4],Go[r*4+1],Go[r*4+2],Go[r*4+3]));const J=new we({vertexShader:kr,fragmentShader:Ar,uniforms:{u_time:n,u_activeRatio:{value:0},u_color:{value:new N("#689aff")},u_planes:{value:C},u_bgColor:{value:new N(0)},u_aspect:{value:1}},transparent:!0,depthWrite:!1,blending:Ko,blendEquation:St,blendSrc:je,blendDst:wa,blendEquationAlpha:St,blendSrcAlpha:je,blendDstAlpha:je}),K=new Ue(Q,J);K.frustumCulled=!1,K.renderOrder=20,K.visible=!1,H.add(K),ve.renderOrder=15;const be=new N(0);return{update({whiteTunnelWaitRatio:r=0,aspect:u=1,bg:i="#000000"}={}){const F=v(r,0,.2,0,1),R=F>0;H.visible=R,ve.visible=R,K.visible=R,k.uniforms.u_activeRatio.value=F,J.uniforms.u_activeRatio.value=F,k.uniforms.u_aspect.value=u,J.uniforms.u_aspect.value=u,be.set(i),k.uniforms.u_bgColor.value.copy(be),J.uniforms.u_bgColor.value.copy(be)},dispose(){w.dispose(),V.dispose(),k.dispose(),S.dispose(),Q.dispose(),J.dispose(),x.dispose(),l.remove(H)}}}const Zo=946,wn=2,Ir=`
attribute float piece;
uniform sampler2D u_positionTexture;
uniform sampler2D u_orientTexture;
uniform vec2 u_textureSize;
uniform float u_frameFrom;
uniform float u_frameTo;
uniform float u_frameRatio;
uniform float u_fragmentScale;
varying vec3 v_viewPosition;
varying vec3 v_localDir;
vec3 qrotate(vec4 q, vec3 v) {
  return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v);
}
void main() {
  vec4 animationUvs = (vec4(piece, u_frameFrom, piece, u_frameTo) + 0.5) / u_textureSize.xyxy;
  vec3 piecePosFrom = texture2D(u_positionTexture, animationUvs.xy).xyz;
  vec4 pieceOrientFrom = texture2D(u_orientTexture, animationUvs.xy);
  vec3 piecePosTo = texture2D(u_positionTexture, animationUvs.zw).xyz;
  vec4 pieceOrientTo = texture2D(u_orientTexture, animationUvs.zw);
  float radius = length(position) * u_fragmentScale;
  vec3 dir = position / max(radius, 1e-5);
  vec3 posFrom = qrotate(pieceOrientFrom, dir);
  vec3 posTo = qrotate(pieceOrientTo, dir);
  v_localDir = normalize(mix(posFrom, posTo, u_frameRatio));
  vec3 pos = v_localDir * radius + mix(piecePosFrom, piecePosTo, u_frameRatio);
  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  v_viewPosition = mvPosition.xyz;
  gl_Position = projectionMatrix * mvPosition;
}
`,Or=`
uniform sampler2D u_backgroundTexture;
uniform vec2 u_resolution;
varying vec3 v_viewPosition;
varying vec3 v_localDir;
void main() {
  vec3 fdx = dFdx(v_viewPosition);
  vec3 fdy = dFdy(v_viewPosition);
  vec3 viewNormal = normalize(cross(fdx, fdy));
  float alpha = abs(1.0 - viewNormal.z);
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec3 bgColor = texture2D(u_backgroundTexture, uv).rgb;
  vec2 refl = reflect(normalize(v_viewPosition), viewNormal).xy;
  vec2 uvOffset = refl.xy * 0.2 * vec2(u_resolution.x / u_resolution.y, 1.0);
  vec3 color = texture2D(u_backgroundTexture, uv + uvOffset).rgb;
  color += clamp(abs(mod(alpha * 8.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0)
    * (1.0 - alpha) * (1.0 - bgColor);
  gl_FragColor = vec4(color, alpha);
}
`;function bn(l,c,m){const n=new Jo(l,c,m,wo,kn);return n.magFilter=eo,n.minFilter=eo,n.wrapS=Qo,n.wrapT=Qo,n.needsUpdate=!0,n.colorSpace=ot,n}async function Br(l,{base:c}){const[m,n]=await Promise.all([Oe(`${c}assets/models/tunnels/broken_glass.buf`),Oe(`${c}assets/models/tunnels/broken_glass_animation.buf`)]),o=m.getAttribute("piece");if(o&&!(o.array instanceof Float32Array)){const i=new Float32Array(o.array.length);i.set(o.array),m.setAttribute("piece",new mt(i,1))}const p=n.attributes.position.array,S=n.attributes.orient.array,x=p.length/(Zo*3),H=new Float32Array(p.length/3*4);for(let i=0,F=0;i<p.length;i+=3,F+=4)H[F]=p[i],H[F+1]=p[i+1],H[F+2]=p[i+2],H[F+3]=0;const V=S instanceof Float32Array?S:new Float32Array(S),w=bn(H,Zo,x),M=bn(V,Zo,x),b={u_backgroundTexture:{value:null},u_resolution:{value:new j(1,1)},u_positionTexture:{value:w},u_orientTexture:{value:M},u_textureSize:{value:new j(Zo,x)},u_frameFrom:{value:0},u_frameTo:{value:0},u_frameRatio:{value:0},u_fragmentScale:{value:1}},X=new we({uniforms:b,vertexShader:Ir,fragmentShader:Or,transparent:!0,depthWrite:!1,depthTest:!0,side:Xt,toneMapped:!1}),k=new Ue(m,X);k.visible=!1,k.frustumCulled=!1,k.renderOrder=1e3,k.name="goal-broken-glass";const ve=new xo,Q=new Qt;Q.add(k),ve.add(Q);let y=0,q=1,fe=1,T=0,ze=1,C=!1;const J=new ie(0,0,1),K=new Kt;return{container:Q,overlayScene:ve,mesh:k,get ratio(){return y},get active(){return C},updateFromScroll:({glassBreakRatio:i=0,astronautDropRatio:F=0,frameHeight:R=0,frameRotation:He=0,frameScale:oe=1}={})=>{y=v(i,0,1,0,1,Fa),q=v(F,.75,1,1,0),fe=Math.max(1,R||window.innerHeight),T=He||0,ze=Math.max(1e-4,oe||1),C=y>0&&F<1,Q.visible=C,C||(k.visible=!1)},syncToCamera:(i,F=window.innerHeight)=>{if(!C||!i||y<=0)return k.visible=!1,!1;k.position.copy(i.position),k.quaternion.copy(i.quaternion),k.translateZ(-wn);const R=Math.tan(i.fov*Math.PI/360)*wn*2,He=fe/Math.max(F,1)*R*ze;K.setFromAxisAngle(J,-T),k.quaternion.multiply(K),k.scale.setScalar(Math.max(He,1e-4));const oe=y*(x-1),ye=Math.floor(oe),Be=Math.min(ye+1,x-1);return b.u_frameFrom.value=ye,b.u_frameTo.value=Be,b.u_frameRatio.value=oe-ye,b.u_fragmentScale.value=q,k.visible=!0,!0},setBackground:(i,F,R)=>{b.u_backgroundTexture.value=i,b.u_resolution.value.set(F,R)},dispose(){m.dispose(),n.dispose(),X.dispose(),w.dispose(),M.dispose()}}}const Nr=`
varying vec2 v_uv;
varying vec2 v_uv2;
uniform vec2 u_viewportResolution;
uniform vec2 u_frameOffset;
uniform float u_frameScale;
uniform float u_frameRotate;
uniform vec2 u_domXY;
uniform vec2 u_domWH;
uniform vec2 u_dom2Offset;
uniform vec2 u_dom2WH;
mat2 getRotation2D(float a) {
  float s = sin(a);
  float c = cos(a);
  return mat2(c, -s, s, c);
}
void main() {
  // Fullscreen quad: position.xy in clip [-1,1]
  vec2 clip = position.xy;
  v_uv = clip * 0.5 + 0.5;
  v_uv.y = 1.0 - v_uv.y;
  v_uv = (v_uv * u_viewportResolution - u_domXY - u_domWH * 0.5);
  v_uv -= u_frameOffset;
  v_uv = getRotation2D(u_frameRotate) * v_uv;
  v_uv /= max(u_frameScale, 1e-4);
  v_uv2 = v_uv + (-u_dom2Offset);
  v_uv2 = (v_uv2 + u_dom2WH * 0.5) / max(u_dom2WH, vec2(1e-4));
  v_uv = (v_uv + u_domWH * 0.5) / max(u_domWH, vec2(1e-4));
  gl_Position = vec4(clip, 0.0, 1.0);
}
`,qr=`
uniform sampler2D u_dom2Texture;
uniform vec3 u_bgColor;
uniform vec2 u_domWH;
uniform float u_globalRadius;
uniform float u_radiusScale;
uniform vec3 u_glowColor;
uniform float u_glowRadius;
uniform float u_glowUpperBound;
uniform float u_glowPow;
uniform float u_glowTint;
varying vec2 v_uv;
varying vec2 v_uv2;
float linearStep(float edge0, float edge1, float x) {
  return clamp((x - edge0) / max(edge1 - edge0, 1e-5), 0.0, 1.0);
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
  float d = sdRoundedBox((uv - 0.5) * size, halfSize, radius);
  return smoothstep(0., 0. - fwidth(d), d);
}
float sdBox(in vec2 p, in vec2 b) {
  vec2 w = abs(p) - b;
  float g = max(w.x, w.y);
  return (g > 0.0) ? length(max(w, 0.0)) : g;
}
void main() {
  vec3 map = texture2D(u_dom2Texture, v_uv2).rgb;
  float opacity = 1.0 - getRoundedCornerMask(v_uv, u_domWH, u_globalRadius * u_radiusScale, 1.0);
  vec3 color = u_bgColor;
  vec2 tabletSize = vec2(u_domWH.x / max(u_domWH.y, 1.0), 1.);
  float tabletRadiusOffset = 0.05;
  vec2 pos = (v_uv * 2. - 1.) * tabletSize;
  float dist = sdBox(pos, tabletSize - tabletRadiusOffset) - u_glowRadius - tabletRadiusOffset;
  color = mix(u_glowColor, color, pow(linearStep(0., u_glowUpperBound, dist), max(u_glowPow, 1e-4)));
  color = mix(color, mix(map.ggg, map.ggg * u_glowColor, u_glowTint), 1. - map.r);
  gl_FragColor = vec4(color, opacity);
}
`;function yn(l){return new Promise(c=>{new ft().load(l,m=>{m.colorSpace=ot,m.flipY=!1,m.minFilter=me,m.magFilter=me,m.needsUpdate=!0,c(m)},void 0,()=>c(null))})}async function Er({base:l}){const[c,m]=await Promise.all([yn(`${l}assets/textures/tunnels/tablet.png`),yn(`${l}assets/textures/tunnels/desktop.png`)]),n=(()=>{const y=new Uint8Array([0,0,0,255]),q=new Jo(y,1,1);return q.needsUpdate=!0,q})(),o={u_bgColor:{value:new N("#000000")},u_frameOffset:{value:new j},u_frameScale:{value:1},u_frameRotate:{value:0},u_radiusScale:{value:1},u_glowColor:{value:new N(0,0,0)},u_glowRadius:{value:.11},u_glowUpperBound:{value:.5},u_glowPow:{value:.1},u_glowTint:{value:0},u_domXY:{value:new j},u_domWH:{value:new j(1,1)},u_dom2Offset:{value:new j},u_dom2WH:{value:new j(1,1)},u_dom2Texture:{value:n},u_viewportResolution:{value:new j(1,1)},u_globalRadius:{value:24}},p=new Jt(2,2),S=new we({uniforms:o,vertexShader:Nr,fragmentShader:qr,depthTest:!1,depthWrite:!1,transparent:!0,blending:An,toneMapped:!1}),x=new Ue(p,S);x.frustumCulled=!1,x.renderOrder=-1,x.visible=!1,x.name="goal-frame-bg";const H=new xo;H.add(x);const V=new N("#1a2ffb"),w=new N("#000000"),M=new N("#f0f1fa"),b=new N;let X=0,k=0,ve=0;return{mesh:x,overlayScene:H,updateFromScroll:({isBlackSide:y=!1,blackFrameInRatio:q=0,whiteFrameOutRatio:fe=0,glassBreakRatio:T=0,astronautDropRatio:ze=0,blackFrameShowRatio:C=0,frameRect:J=null,innerRect:K=null,viewportW:be=window.innerWidth,viewportH:r=window.innerHeight,globalRadius:u=24}={})=>{o.u_viewportResolution.value.set(be,r),o.u_globalRadius.value=u;const i=J,F=K||J;if(!i||i.width<4||i.height<4)return x.visible=!1,null;let R,He,oe,ye=0,Be=0,de=0,Ne=0;const dt=o.u_glowColor.value;if(y)R=Xo(q,0,1),He=R*.4,oe=1,ye=v(R,0,1,.11,-.5),Be=v(R,0,1,.25,2),de=v(R,0,1,.06,.3),dt.copy(w).lerp(M,R),o.u_dom2Texture.value=c?.image?.width?c:n,o.u_bgColor.value.set("#000000");else{R=1-Xo(fe,0,1),He=R*-.3,oe=0;const B=T;if(B<0)Ne=.8,dt.copy(w);else{ye=-.25,Be=v(B,0,.15,0,.45),Be=v(B,.15,.3,Be,1),de=v(B,0,.1,.35,.85),de=v(B,.1,1,de,.35),Ne=.28;let G=v(B,0,.1,1,0);G=v(B,.1,.8,G,.9),dt.copy(V).lerp(b.copy(w),G)}o.u_dom2Texture.value=m?.image?.width?m:n,o.u_bgColor.value.set("#000000")}const at=r*.2*(1-Xo(C,0,1)),ge=Math.hypot(be,r),Ze=$.lerp(1,ge/Math.min(i.width,i.height),R),Ye=ze,Ve=i.top+at,gt=Ve+i.height,Ge=i.bottom>0&&i.top<r&&i.right>0&&i.left<be&&gt>0&&Ve<r;if(x.visible=R<.999&&Ye<1&&Ge,!x.visible)return null;X=i.left,k=Ve,ve=0,o.u_domWH.value.set(Math.max(1,Math.ceil(i.width)),Math.max(1,Math.ceil(i.height))),o.u_domXY.value.set(X,k-ve),F?(o.u_dom2Offset.value.set(F.left+F.width*.5-i.left-i.width*.5,F.top+F.height*.5-(i.top+at)-i.height*.5),o.u_dom2WH.value.set(Math.max(1,F.width),Math.max(1,F.height))):(o.u_dom2Offset.value.set(0,0),o.u_dom2WH.value.set(i.width,i.height));const Xe=Ye<1?be*.5-i.left-i.width*.5:0,Ke=-(i.top+at+i.height*.5-r*.5);return o.u_frameOffset.value.set(Xe*R,Ke*R),o.u_frameScale.value=Ze,o.u_frameRotate.value=He,o.u_radiusScale.value=oe,o.u_glowRadius.value=ye,o.u_glowUpperBound.value=Be,o.u_glowPow.value=de,o.u_glowTint.value=Ne,{frameScale:Ze,frameRotation:He,cameraViewportOffsetX:Xe*(1-R),cameraViewportOffsetY:Ke*(1-R)}},resize(y,q){o.u_viewportResolution.value.set(y,q)},get visible(){return x.visible},dispose(){p.dispose(),S.dispose(),c?.dispose(),m?.dispose(),n.dispose()}}}const _o=53,Yo=16,$o=20,Sn=["helmet","helmet_glass","glove_shoes","wearpack"],ho=["#0d2b27","#ba0000","#00b5a6","#0099ff"],Ta=["#8c8c8c","#008e6b","#7e7f05","#ff0000"];function Tn(l){return new Promise((c,m)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>c(n),n.onerror=m,n.src=l})}async function Mn(l,c){const[m,n]=await Promise.all([Tn(l),Tn(c)]),o=m.width,p=m.height,S=document.createElement("canvas");S.width=o,S.height=p;const x=S.getContext("2d",{willReadFrequently:!0});x.drawImage(n,0,0,o,p);const H=x.getImageData(0,0,o,p).data;x.clearRect(0,0,o,p),x.drawImage(m,0,0,o,p);const V=x.getImageData(0,0,o,p).data,w=new Uint8Array(o*p*4);for(let b=0;b<w.length;b+=4)w[b]=V[b],w[b+1]=V[b+1],w[b+2]=V[b+2],w[b+3]=H[b];const M=new Jo(w,o,p,wo,zn);return M.colorSpace=ot,M.flipY=!1,M.generateMipmaps=!0,M.minFilter=Dn,M.magFilter=me,M.anisotropy=8,M.wrapS=Qo,M.wrapT=Qo,M.needsUpdate=!0,M}function Fn(l,c,m){const n=new Jo(l,c,m,wo,kn);return n.magFilter=eo,n.minFilter=eo,n.generateMipmaps=!1,n.flipY=!1,n.needsUpdate=!0,n}function Ma(l){const c=l.array,m=new Float32Array(c.length);for(let n=0;n<c.length;n++)m[n]=c[n];return new Re(m,3)}const jo=`
uniform sampler2D u_animationPositionTexture;
uniform sampler2D u_animationOrientTexture;
uniform vec2 u_animationTextureSize;
uniform float u_loopLinearBlend;
attribute vec2 boneIndices;
attribute vec2 boneWeights;
attribute vec4 tangent;
attribute float ao;
attribute vec3 instancePos;
attribute vec4 instanceOrient;
attribute vec3 instanceAnimationFrameFromToBlend1;
attribute vec3 instanceAnimationFrameFromToBlend2;
varying vec3 v_worldPosition;
varying vec4 v_worldTangent;
varying vec3 v_worldNormal;
varying vec3 v_viewPosition;
varying vec2 v_uv;
varying float v_ao;

vec3 qrotate(vec4 q, vec3 v) {
  return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v);
}
vec3 inverseTransformDirection(in vec3 dir, in mat4 matrix) {
  return normalize((vec4(dir, 0.0) * matrix).xyz);
}
void computeTransform(inout vec3 pos, inout vec3 nor, inout vec3 tang, vec4 uvBone12) {
  vec3 bonePos1 = texture2D(u_animationPositionTexture, uvBone12.xy).xyz;
  vec3 bonePos2 = texture2D(u_animationPositionTexture, uvBone12.zw).xyz;
  vec4 boneOrient1 = texture2D(u_animationOrientTexture, uvBone12.xy);
  vec4 boneOrient2 = texture2D(u_animationOrientTexture, uvBone12.zw);
  pos = (qrotate(boneOrient1, pos) + bonePos1) * boneWeights.x
      + (qrotate(boneOrient2, pos) + bonePos2) * boneWeights.y;
  nor = normalize(qrotate(boneOrient1, nor) * boneWeights.x + qrotate(boneOrient2, nor) * boneWeights.y);
  tang = normalize(qrotate(boneOrient1, tang) * boneWeights.x + qrotate(boneOrient2, tang) * boneWeights.y);
}
void computeFrameTransform(inout vec3 pos, inout vec3 nor, inout vec3 tang, vec3 blend) {
  vec4 dataOffset = boneIndices.xyxy + blend.xxyy * float(BONE_COUNT) + 0.5;
  vec4 fromUvs = vec4(
    floor(mod(dataOffset.xy, u_animationTextureSize.x)) + 0.5,
    floor(dataOffset.xy / u_animationTextureSize.x) + 0.5
  ).xzyw / u_animationTextureSize.xyxy;
  vec4 toUvs = vec4(
    floor(mod(dataOffset.zw, u_animationTextureSize.x)) + 0.5,
    floor(dataOffset.zw / u_animationTextureSize.x) + 0.5
  ).xzyw / u_animationTextureSize.xyxy;
  vec3 fromPos = pos; vec3 fromNor = nor; vec3 fromTang = tang;
  computeTransform(fromPos, fromNor, fromTang, fromUvs);
  vec3 toPos = pos; vec3 toNor = nor; vec3 toTang = tang;
  computeTransform(toPos, toNor, toTang, toUvs);
  pos = mix(fromPos, toPos, blend.z);
  nor = mix(fromNor, toNor, blend.z);
  tang = mix(fromTang, toTang, blend.z);
}
void main() {
  v_ao = ao;
  vec3 posLoop = position; vec3 norLoop = normal; vec3 tangLoop = tangent.xyz;
  computeFrameTransform(posLoop, norLoop, tangLoop, instanceAnimationFrameFromToBlend1);
  vec3 posLinear = position; vec3 norLinear = normal; vec3 tangLinear = tangent.xyz;
  computeFrameTransform(posLinear, norLinear, tangLinear, instanceAnimationFrameFromToBlend2);
  vec3 pos = mix(posLoop, posLinear, u_loopLinearBlend);
  vec3 nor = mix(norLoop, norLinear, u_loopLinearBlend);
  vec3 tang = mix(tangLoop, tangLinear, u_loopLinearBlend);
  pos = qrotate(instanceOrient, pos) + instancePos.xyz;
  nor = normalize(qrotate(instanceOrient, nor));
  tang = normalize(qrotate(instanceOrient, tang));
  vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
  v_worldPosition = (modelMatrix * vec4(pos, 1.0)).xyz;
  v_worldTangent = vec4(inverseTransformDirection(normalMatrix * tang, viewMatrix), tangent.w);
  v_worldNormal = inverseTransformDirection(normalMatrix * nor, viewMatrix);
  v_uv = uv;
  v_viewPosition = -mvPos.xyz;
  gl_Position = projectionMatrix * mvPos;
}
`;async function Yr(l,c,m){const n=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<812,o="/zyrax-studio/",p=!n,[S,x,H,V,w,M,b,X,k,ve,Q,y,q,fe,T,...ze]=await Promise.all([Oe(`${o}assets/models/tunnels/astronaut_animations.buf`),Oe(`${o}assets/models/tunnels/astronaut_in_animation.buf`),Oe(`${o}assets/models/tunnels/astronaut_out_animation.buf`),new ft().loadAsync(`${o}assets/textures/tunnels/white_matcap.jpg`),new ft().loadAsync(`${o}assets/textures/tunnels/earth.webp`),new ft().loadAsync(`${o}assets/textures/tunnels/white_block.webp`),Oe(`${o}assets/models/tunnels/tunnel_block_base.buf`),Oe(`${o}assets/models/tunnels/tunnel_block_wall.buf`),Oe(`${o}assets/models/tunnels/grid_base_ld.buf`),Oe(`${o}assets/models/tunnels/grid_structure_ld.buf`),p?Oe(`${o}assets/models/tunnels/grid_base_hd.buf`):Promise.resolve(null),p?Oe(`${o}assets/models/tunnels/grid_structure_hd.buf`):Promise.resolve(null),new ft().loadAsync(`${o}assets/textures/tunnels/grids/greeble_nor.webp`),Oe(`${o}assets/models/tunnels/earth_card.buf`),new ft().loadAsync(`${o}assets/textures/tunnels/earth_landscape.jpg`),...Sn.map(e=>Oe(`${o}assets/models/tunnels/astronaut_${e}.buf`))]),C=new xo;C.background=new N(0);const J=new ie(0,0,25),K=new ie(0,0,24),be=45,r=new ar(be,1,1,200);r.position.copy(J),r.lookAt(K);let u;try{u=new nr({canvas:l,antialias:!1,alpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1})}catch(e){throw console.error("Goal WebGL unavailable",e),e}u.setClearColor(0,1),u.setPixelRatio(Math.min(window.devicePixelRatio||1,n?2.5:1.75)),u.outputColorSpace=rr,u.toneMapping=ir,u.autoClear=!0,V.colorSpace=ot,V.generateMipmaps=!1,V.minFilter=me,V.magFilter=me,w.colorSpace=ot,w.generateMipmaps=!1,w.minFilter=me,w.magFilter=me,M.colorSpace=ot,M.wrapS=M.wrapT=ba,M.generateMipmaps=!1,M.minFilter=me,M.magFilter=me;const i=S.attributes.position.array,F=S.attributes.orient.array,R=i.length/3,He=R/_o,oe=Math.ceil(Math.sqrt(R)),ye=Math.ceil(R/oe),Be=oe*ye,de=new Float32Array(Be*4),Ne=new Float32Array(Be*4);for(let e=0,a=0,t=0;e<R;e++,a+=3,t+=4)de[t]=i[a],de[t+1]=i[a+1],de[t+2]=i[a+2],de[t+3]=1,Ne[t]=F[t],Ne[t+1]=F[t+1],Ne[t+2]=F[t+2],Ne[t+3]=F[t+3];const dt=Fn(de,oe,ye),at=Fn(Ne,oe,ye),ge=new Re(new Float32Array([0,0,18]),3);ge.setUsage(yt);const Ze=new Re(new Float32Array([0,0,0,1]),4);Ze.setUsage(yt);const Ye=new Re(new Float32Array([0,1,0]),3);Ye.setUsage(yt);const Ve=new Re(new Float32Array([90,91,0]),3);Ve.setUsage(yt);const gt=()=>{const e=new Rn(1,1,{minFilter:me,magFilter:me,format:wo,generateMipmaps:!1});return e.texture.wrapS=e.texture.wrapT=sr,e},Ge=gt(),Xe=gt(),Ke=gt();let B=Ge,G=Xe;const At=`
uniform sampler2D u_texture;
uniform vec2 u_direction;
uniform vec2 u_resolution;
varying vec2 v_uv;
void main() {
  vec2 texel = u_direction / u_resolution;
  vec3 c = texture2D(u_texture, v_uv).rgb * 0.227027;
  c += texture2D(u_texture, v_uv + texel * 1.384615).rgb * 0.316216;
  c += texture2D(u_texture, v_uv - texel * 1.384615).rgb * 0.316216;
  c += texture2D(u_texture, v_uv + texel * 3.230769).rgb * 0.070270;
  c += texture2D(u_texture, v_uv - texel * 3.230769).rgb * 0.070270;
  gl_FragColor = vec4(c, 1.0);
}`,ea=`
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,nt=new we({uniforms:{u_texture:{value:null},u_direction:{value:new j(1,0)},u_resolution:{value:new j(1,1)}},vertexShader:ea,fragmentShader:At,depthTest:!1,depthWrite:!1,toneMapped:!1}),Tt=new Cn(-1,1,1,-1,0,1),Dt=new xo,bo=new Ue(new Jt(2,2),nt);Dt.add(bo);const yo=(e,a)=>{const t=Math.max(1,e.width),s=Math.max(1,e.height);nt.uniforms.u_resolution.value.set(t,s),nt.uniforms.u_texture.value=e.texture,nt.uniforms.u_direction.value.set(a,0),u.setRenderTarget(Ke),u.clear(),u.render(Dt,Tt),nt.uniforms.u_texture.value=Ke.texture,nt.uniforms.u_direction.value.set(0,a),u.setRenderTarget(e),u.clear(),u.render(Dt,Tt),u.setRenderTarget(null)},pe={u_animationPositionTexture:{value:dt},u_animationOrientTexture:{value:at},u_animationTextureSize:{value:new j(oe,ye)},u_loopLinearBlend:{value:0},u_matcapTexture:{value:V},u_envTexture:{value:w},u_ambientColor:{value:new N("#566d80")},u_bgColor:{value:new N("#000000")},u_sunPosition:{value:new ie(-20,0,22)},u_showRatio:{value:0},u_whiteTunnelRatio:{value:0},u_frameOutRatio:{value:0},u_tintColor:{value:new N(0,0,0)},u_time:{value:0},u_faceLedLight:{value:0},u_faceLedColor:{value:new N("#aaaafb")},u_cardPosition:{value:new ie}},Qe={u_blackTunnelTexture:{value:B.texture},u_sunFactor:{value:1},u_blackTunnelRatio:{value:0},u_offsetZ:{value:0},u_frameIn:{value:0},u_endRatio:{value:0}},Se={};await Promise.all(["helmet","glove_shoes","wearpack"].map(async e=>{const[a,t]=await Promise.all([Mn(`${o}assets/textures/tunnels/astronaut/astronaut_${e}_arm.webp`,`${o}assets/textures/tunnels/astronaut/astronaut_${e}_base.webp`),new ft().loadAsync(`${o}assets/textures/tunnels/astronaut/astronaut_${e}_nor.webp`)]);t.colorSpace=ot,t.flipY=!1,t.generateMipmaps=!0,t.minFilter=Dn,t.magFilter=me,t.anisotropy=8,Se[e]={armb:a,nor:t}}));const So=u.capabilities.getMaxAnisotropy?.()||8;for(const e of Object.keys(Se)){const{armb:a,nor:t}=Se[e];a&&(a.anisotropy=Math.min(8,So),a.needsUpdate=!0),t&&(t.anisotropy=Math.min(8,So),t.needsUpdate=!0)}Se.helmet_glass=Se.helmet;const g=new Qt;C.add(g);const E=[],A=4,Te=new Re(new Float32Array(A*3),3);Te.setUsage(yt);const _e=new Re(new Float32Array(A*4),4);_e.setUsage(yt);const Z=new Re(new Float32Array(A*3),3);Z.setUsage(yt);const le=new Re(new Float32Array(A*3),3);le.setUsage(yt);for(let e=0;e<A;e++)_e.setXYZW(e,0,0,0,1),Z.setXYZ(e,0,1,0),le.setXYZ(e,90,91,0);const Pe=[];let D=0;const Me={value:0};Sn.forEach((e,a)=>{const t=ze[a],s=new kt;for(const ce in t.attributes)s.setAttribute(ce,t.attributes[ce]);t.index&&s.setIndex(t.index),s.instanceCount=1,s.setAttribute("instancePos",ge),s.setAttribute("instanceOrient",Ze),s.setAttribute("instanceAnimationFrameFromToBlend1",Ye),s.setAttribute("instanceAnimationFrameFromToBlend2",Ve);const d=e==="helmet_glass"||e==="card"?"helmet":e,h=e==="helmet_glass",_={...pe,u_armbTexture:{value:Se[d].armb},u_norTexture:{value:Se[d].nor}},z={...pe,...Qe,u_armbTexture:{value:Se[d].armb},u_norTexture:{value:Se[d].nor}},te=new we({uniforms:_,vertexShader:jo,fragmentShader:wr,transparent:!0,blending:ya,side:Xt,defines:{BONE_COUNT:_o,IS_WHITE:!0,...h?{IS_HELMET_GLASS:!0}:{}}}),ue=new we({uniforms:z,vertexShader:jo,fragmentShader:hn,transparent:!0,blending:ya,side:Xt,defines:{BONE_COUNT:_o,IS_BLACK:!0,...h?{IS_HELMET_GLASS:!0}:{}}}),Ie=new Ue(s,te);if(Ie.frustumCulled=!1,Ie.userData.whiteMat=te,Ie.userData.blackMat=ue,g.add(Ie),E.push(Ie),!h){const ce=new kt;for(const st in t.attributes)ce.setAttribute(st,t.attributes[st]);t.index&&ce.setIndex(t.index),ce.instanceCount=A,ce.setAttribute("instancePos",Te),ce.setAttribute("instanceOrient",_e),ce.setAttribute("instanceAnimationFrameFromToBlend1",Z),ce.setAttribute("instanceAnimationFrameFromToBlend2",le);const xe=new we({uniforms:{...z,u_armbTexture:{value:Se[d].armb},u_norTexture:{value:Se[d].nor},u_alpha:Me},vertexShader:jo,fragmentShader:hn,transparent:!0,depthWrite:!1,depthTest:!1,blending:Ko,blendEquation:St,blendSrc:je,blendDst:je,blendEquationAlpha:St,blendSrcAlpha:je,blendDstAlpha:je,side:Xt,defines:{BONE_COUNT:_o,IS_BLACK:!0,IS_CLONE:!0}}),ne=new Ue(ce,xe);ne.frustumCulled=!1,ne.renderOrder=1e3,ne.visible=!1,g.add(ne),Pe.push(ne)}});const De=new j(5,23),f=new gr;let O=0,$e=!1;const to=document.createElement("canvas");to.width=to.height=11;{const e=to.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,11,11),e.fillStyle="#f00",e.fillRect(1,1,3,9),e.fillStyle="#0f0",e.fillRect(4,1,3,9),e.fillStyle="#00f",e.fillRect(7,1,3,9)}const To=new lr(to);To.needsUpdate=!0,To.minFilter=me,To.magFilter=me;const oo=await new ft().loadAsync(`${o}assets/textures/tunnels/astronaut/face.png`);oo.minFilter=eo,oo.magFilter=eo,oo.colorSpace=ot,oo.flipY=!1;const pt=new Jt(.2,.15).translate(0,1.68,.1);pt.setAttribute("boneIndices",new mt(new Uint8Array([0,0,0,0,0,0,0,0]),2)),pt.setAttribute("boneWeights",new mt(new Float32Array([1,0,1,0,1,0,1,0]),2)),pt.setAttribute("tangent",new mt(new Float32Array([0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1]),4)),pt.setAttribute("ao",new mt(new Float32Array([1,1,1,1]),1));const _t=new kt;for(const e in pt.attributes)_t.setAttribute(e,pt.attributes[e]);pt.index&&_t.setIndex(pt.index),_t.instanceCount=1,_t.setAttribute("instancePos",ge),_t.setAttribute("instanceOrient",Ze),_t.setAttribute("instanceAnimationFrameFromToBlend1",Ye),_t.setAttribute("instanceAnimationFrameFromToBlend2",Ve);const Mo=new we({uniforms:{...pe,u_cardLedTexture:{value:To},u_cardTexture:{value:oo},u_cardColor:{value:new N("#ddddff")},u_cardUvOffset:{value:new j(0,0)},u_cardTextureSize:{value:De},u_cardOpacity:{value:0}},vertexShader:jo,fragmentShader:br,transparent:!0,depthTest:!1,depthWrite:!1,side:Xt,blending:Ko,blendEquation:St,blendSrc:je,blendDst:je,blendEquationAlpha:St,blendSrcAlpha:je,blendDstAlpha:je,defines:{BONE_COUNT:_o}}),ao=new Ue(_t,Mo);ao.frustumCulled=!1,ao.renderOrder=100,ao.visible=!1,g.add(ao);const Fo=new Qt;C.add(Fo);const no=new Sa;no.positionAmplitude=2,no.positionFrequency=1,no._enableRotationNoise=!1;const ta=no.position;let rt=0,qe=1,oa=typeof window<"u"?window.scrollY:0,ro=1;const Ca=(e,a)=>{const t=new kt;for(const _ in e.attributes)t.setAttribute(_,e.attributes[_]);e.index&&t.setIndex(e.index);const s=new Float32Array(Yo);for(let _=0;_<Yo;_++)s[_]=_;t.setAttribute("a_instanceId",new Re(s,1)),t.instanceCount=Yo;const d=new we({uniforms:{u_texture:{value:M},u_ratio:{value:0},u_ratioInverse:{value:1},u_fbm:{value:ta},u_time:{value:0}},vertexShader:hr,fragmentShader:xr,transparent:!1,depthWrite:!0,depthTest:!0,extensions:{derivatives:!0},defines:{BLOCK_COUNT:Yo,...a?{IS_WALL:!0}:{}}}),h=new Ue(t,d);return h.frustumCulled=!1,Fo.add(h),d},Co=Ca(b,!1),Ro=Ca(X,!0),Ra=await Lr(C,{base:o,isMobile:n,sharedTime:pe.u_time}),za=new we({uniforms:{u_color:{value:new N(0)}},vertexShader:"void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 u_color;void main(){gl_FragColor=vec4(u_color,0.0);}",depthWrite:!1,blending:ya}),Lt=new Ue(new Jt(200,200),za);Lt.position.z=-80,Lt.renderOrder=-10,C.add(Lt),T.colorSpace=ot,T.generateMipmaps=!1,T.minFilter=me,T.magFilter=me;const Pa={u_earthTexture:{value:T},u_bgColor:{value:new N(0)},u_atmosphereColor:{value:new N("#4169E1")}},On=`
varying vec2 v_uv;
void main(){
  vec3 pos=position;
  pos.z*=0.1;
  vec4 mvPosition=modelViewMatrix*vec4(pos,1.);
  gl_Position=projectionMatrix*mvPosition;
  v_uv=uv;
}`,Bn=`
varying vec2 v_uv;
uniform sampler2D u_earthTexture;
void main(){
  vec3 earthMap=texture2D(u_earthTexture,v_uv).rgb;
  gl_FragColor=vec4(earthMap, 0.0);
}`,aa=new Qt,Nn=new we({uniforms:Pa,vertexShader:On,fragmentShader:Bn,depthWrite:!0,depthTest:!0}),It=new Ue(fe,Nn);It.frustumCulled=!1,It.renderOrder=-1,aa.add(It),C.add(aa);const Ot=new Qt;C.add(Ot);const na=await Mn(`${o}assets/textures/tunnels/grids/greeble_arm.webp`,`${o}assets/textures/tunnels/grids/greeble_base.webp`);na.wrapS=na.wrapT=ba,q.colorSpace=ot,q.flipY=!1,q.wrapS=q.wrapT=ba;const Fe={u_time:{value:0},u_showRatio:{value:0},u_offsetZ:{value:0},u_blackTunnelTransformRatio:{value:0},u_feedbackTexture:{value:B.texture},u_greebleArmbTexture:{value:na},u_greebleNormalTexture:{value:q},u_resolution:{value:new j(1,1)},u_outRatio:{value:0},u_outBloomFromToStrength:{value:new ie(0,70,0)},u_color1:{value:new N(ho[0])},u_color2:{value:new N(Ta[0])}},ka=(e,a,t)=>{const s=new kt;for(const z in e.attributes)s.setAttribute(z,e.attributes[z]);e.index&&s.setIndex(e.index);const d=e.attributes.position.count;s.getAttribute("ao")||s.setAttribute("ao",new mt(new Float32Array(d).fill(1),1)),s.getAttribute("areaRatio")||s.setAttribute("areaRatio",new mt(new Float32Array(d),1)),s.getAttribute("height")||s.setAttribute("height",new mt(new Float32Array(d).fill(1),1)),s.getAttribute("cluster")||s.setAttribute("cluster",new mt(new Float32Array(d),1)),s.setAttribute("instancePos",Ma(a.attributes.position)),s.setAttribute("instanceGridIds",Ma(a.attributes.gridIds)),s.setAttribute("instanceAxis",Ma(a.attributes.rotAxis)),s.instanceCount=a.attributes.position.count;const h=new we({uniforms:Fe,vertexShader:pr,fragmentShader:_r,side:Xt,transparent:!1,depthWrite:!0,blending:An,defines:{GRID_SIZE:$o,...t?{IS_HD:!0}:{}}}),_=new Ue(s,h);return _.frustumCulled=!1,_.renderOrder=t?2:1,Ot.add(_),_};ka(k,ve,!1),p&&Q&&y&&ka(Q,y,!0);let Aa=0,Da=0,Bt=0,zo=be,La=0,Ia=-80,ra=0;const ae=new Sa;ae.positionFrequency=.2,ae.rotationFrequency=.15,ae.positionAmplitude=0,ae.rotationAmplitude=0;const ia=new _n(new ie,1,.65,1.3),io=new _n(new ie,1,.85,1.1),qn=Array.from({length:A},()=>{const e=new Sa;return e.positionFrequency=.2,e.rotationFrequency=.6,e.positionAmplitude=12,e.rotationAmplitude=10,e}),Oa=Float32Array.from({length:A+1},(e,a)=>a===0?0:Math.random()*2),Ba=new Float32Array(A),Na=new Float32Array(A),la=new ie,sa=new Kt,Nt=new vt,qa=new vt,Ee=new ie,Po=new ie,Le=new Kt,ko=new Pn,ua=new ie(1,1,1),qt=new N,Ao=new N,Ea=new ie,En=new ie;let Wa=0,Ua=0,ca=0,ma=0,Et=.08;const Ha=.1;let Do=!1,lo=0,Lo=0,Va=0,Io=0,Oo=0,Ga=0,Za=0;window.addEventListener("pointermove",e=>{Wa=e.clientX/Math.max(window.innerWidth,1)*2-1,Ua=e.clientY/Math.max(window.innerHeight,1)*2-1},{passive:!0}),window.addEventListener("pointerdown",()=>{Do=!0},{passive:!0}),window.addEventListener("pointerup",()=>{Do=!1},{passive:!0}),window.addEventListener("pointercancel",()=>{Do=!1},{passive:!0});const va=()=>{r.near=1,r.far=200,r.position.copy(J),r.up.set(0,1,0),r.lookAt(K),r.fov=zo,Ea.set(0,0,-1).applyQuaternion(r.quaternion);let e=En.copy(K).sub(r.position).dot(Ea);const a=r.fov,t=a+Bt,s=Math.max(1,Math.min(170,t));let d=e*Math.tan(a/360*Math.PI/2)/Math.tan(s/360*Math.PI/2)-e;Number.isFinite(d)||(d=0),r.translateZ(d),r.fov=a,e+=d;const h=Math.max(1,u.domElement.width||window.innerWidth),_=Math.max(1,u.domElement.height||window.innerHeight);Math.abs(Io)>.25||Math.abs(Oo)>.25?r.setViewOffset(h,_,Io,Oo,h,_):r.clearViewOffset(),r.translateZ(e*-1);const z=n?Et*.35:Et,te=Math.max(-1,Math.min(1,Ua))*z,ue=Math.max(-1,Math.min(1,-Wa))*z;ca+=(te-ca)*Ha,ma+=(ue-ma)*Ha,ko.set(ca,ma,0),Le.setFromEuler(ko),r.quaternion.multiply(Le),r.translateZ(e),r.updateProjectionMatrix()},Wn=e=>{ae.update(e),ia.update(e,ae.position),Ee.copy(ae.euler),io.update(e,Ee),ko.set(io.value.x,io.value.y,io.value.z),Le.setFromEuler(ko),qa.compose(ia.value,Le,ua),Nt.compose(la,sa,ua),Nt.multiply(qa),Nt.decompose(Ee,Le,Po);{const a=Math.max(1,u.domElement.width||window.innerWidth),t=Math.max(1,u.domElement.height||window.innerHeight),s=Math.max(.5,r.position.distanceTo(K)),d=2*Math.tan((r.fov||45)*Math.PI/360)*s,h=d*(a/t),_=.55;Ee.x+=Ga/a*h*_,Ee.y+=Za/t*d*_}if(ge.setXYZ(0,Ee.x,Ee.y,Ee.z),Ze.setXYZW(0,Le.x,Le.y,Le.z,Le.w),ge.needsUpdate=!0,Ze.needsUpdate=!0,da=1+Math.min(3.5,ia.valueVel.length()*.2+io.valueVel.length()*.2),D>.01&&!W&&!Je){for(let a=0;a<A;a++){const t=qn[a];t.positionFrequency=.2,t.rotationFrequency=.6,t.positionAmplitude=12,t.rotationAmplitude=10,t.update(e),Nt.compose(la,sa,ua),Nt.multiply(t.matrix),Nt.decompose(Ee,Le,Po);const s=a/Math.max(A-1,1),d=v(D,s*.3,.7+s*.3,1,0,dr);Po.set(ge.getX(0),ge.getY(0),ge.getZ(0)),Ee.lerp(Po,d),Te.setXYZ(a,Ee.x,Ee.y,Ee.z),_e.setXYZW(a,Le.x,Le.y,Le.z,Le.w)}Te.needsUpdate=!0,_e.needsUpdate=!0}},L=document.getElementById("home-goal-tunnel-sticky")||l.closest?.("#home-goal-tunnel-sticky")||c?.querySelector?.("#home-goal-tunnel-sticky")||l.parentElement||c,ke=ur(c);let se=0,so=0,Wt=0,P=0,We=0,fa=0,Mt=0,Bo=0,it=0,Y=0,Ya=0,Je=!0,ee=!1,W=!1,Ut=0,lt=0,da=1,ga=0,$a=performance.now(),uo=!1,ja=!1;const he=Fr(u,C,r,{isMobile:n});let Ht=null,No=null;try{Ht=await Br(C,{base:o}),he.setGlassPass(Ht)}catch(e){console.warn("Broken glass failed to load",e)}try{No=await Er({base:o}),he.setFrameBgPass(No)}catch(e){console.warn("FrameBg failed to load",e)}let Xa=0,Ka=0;const Vt=()=>{const e=L?.querySelector?.("[data-goal-screen-clip]"),a=L?.classList.contains("is-windowed"),t=L?.classList.contains("is-pinned"),s=a&&e?e:L;let d=s?.clientWidth||window.innerWidth,h=s?.clientHeight||window.innerHeight;if((t||!a)&&n&&window.visualViewport&&(d=Math.round(window.visualViewport.width)||d,h=Math.round(window.visualViewport.height)||h),d=Math.max(1,d),h=Math.max(1,h),d===Xa&&h===Ka)return;Xa=d,Ka=h,r.aspect=d/h,va(),u.setSize(d,h,!1),he.resize(d,h),Fe.u_resolution.value.set(d,h);const _=Math.max(1,Math.floor(d*.25)),z=Math.max(1,Math.floor(h*.25));(Ge.width!==_||Ge.height!==z)&&(Ge.setSize(_,z),Xe.setSize(_,z),Ke.setSize(_,z))};Vt(),window.addEventListener("resize",Vt);const Qa=(e,a,t=100)=>{const s=e.attributes.position.array,d=e.attributes.orient.array,h=Math.min(Math.floor(a),t-1),_=Math.min(Math.ceil(a),t-1),z=a-Math.floor(a),te=new ie().fromArray(s,h*3).lerp(new ie().fromArray(s,_*3),z),ue=new Kt().fromArray(d,h*4).slerp(new Kt().fromArray(d,_*4),z);return{p:te,q:ue}},qo=()=>{if(!c)return;const e=window.innerHeight,a=window.scrollY||0;a!==oa&&(ro=a>oa?1:-1,oa=a),We=ke.range("blackFrameIn").ratio;const t=ke.range("blackFrameShow").ratio;Wt=ke.range("blackTitle").ratio,P=ke.range("blackTunnel").ratio,L?.classList.contains("is-windowed")&&Vt(),Mt=ke.range("whiteTunnel").ratio,se=ke.between("whiteTunnel","whiteFrameOut").ratio,Bo=ke.range("whiteFrameOut").ratio,fa=ke.range("whiteFrameBreak").ratio,Ya=ke.between("whiteTunnel","whiteFrameBreak").ratio,Y=ke.between("whiteFrameBreak","astronautDrop").ratio,it=ke.range("astronautWait")?.ratio??0,Va=ke.between("whiteFrameBreak","astronautWait").ratio;{const I=ke.range("astronautDrop"),Ce=window.innerHeight||1,xt=Math.max(0,I.pixel||0),vo=Math.min(Math.max(1,I.pixelCount||xt),Ce*(n?.32:.42)),et=Math.min(xt,vo),wt=window.innerWidth||1,Zt=(L?.querySelector?.("[data-goal-screen-clip]")||L||c.querySelector("#home-goal-image-out"))?.getBoundingClientRect?.(),ha=Zt?Zt.left+Zt.width*.5-wt*.5:0;Ga=v(Y,0,1,0,ha,gn),Za=-et*v(Y,.15,.85,0,1),Io=0,Oo=0}Je=Wt<1,ee=P<1&&!Je,W=se<=1&&!ee&&!Je,so=W?tt(0,.15,Ya):1,he.sync({blackFrameInRatio:We,blackTitleRatio:Wt,blackTunnelRatio:P,whiteFrameRatio:Mt,whiteTunnelWaitRatio:it,astronautDropRatio:Y,isWhiteTunnelActive:W,isBlackTunnelActive:ee,isMobile:n});{const I=c.querySelector("#home-goal-image-out-inner"),Ce=c.querySelector("#home-goal-image-out"),xt=c.querySelector("#home-goal-image-in"),vo=c.querySelector("#home-goal-image-in-inner"),et=Ce?.getBoundingClientRect(),wt=I?.getBoundingClientRect(),_a=xt?.getBoundingClientRect(),Zt=vo?.getBoundingClientRect(),ha=ke.range("blackFrameShow").ratio,Ct=window.innerWidth||1,Yt=window.innerHeight||1;let Rt=et&&et.height>8?et.height:wt&&wt.height>8?wt.height:0;Rt<8&&(Rt=(wt?.width||I?.clientWidth||L?.clientWidth||Ct*.7)*(1537/2e3));const an=ee||Je,Gn=L?.classList.contains("is-pinned"),Zn=L?.classList.contains("is-windowed"),xa=L?.getBoundingClientRect?.(),Wo=L?.querySelector?.("[data-goal-screen-clip]")?.getBoundingClientRect?.(),bt=re=>!!re&&re.width>8&&re.height>8&&re.bottom>8&&re.top<Yt-8&&re.right>8&&re.left<Ct-8,nn=2e3/1537,rn=(re,zt)=>{const go=Math.max(8,zt),Ho=go*nn,un=re?.width||Ct,cn=re?.height||Yt,mn=re?.left||0,vn=re?.top||0;return{left:mn+(un-Ho)*.5,top:vn+(cn-go)*.5,width:Ho,height:go,right:mn+(un-Ho)*.5+Ho,bottom:vn+(cn-go)*.5+go}};let Ae,Uo;if(an)Ae=bt(_a)?_a:bt(Wo)?Wo:bt(xa)?xa:null,Uo=bt(Zt)?Zt:Ae;else if(Gn||Zn){const re=bt(Wo)?Wo:xa,zt=bt(et)&&et.height>8?et.height:Math.min((re?.height||Yt)*.72,(re?.width||Ct)*.92/nn);Ae=rn(re,zt),Uo={left:Ae.left+Ae.width*.022,top:Ae.top+Ae.height*.028,width:Ae.width*.957,height:Ae.height*.702},Rt=Ae.height}else Ae=bt(et)?et:rn({left:0,top:0,width:Ct,height:Yt},Rt),Uo=bt(wt)?wt:Ae;let ln=20;try{const re=getComputedStyle(document.documentElement),zt=parseFloat(re.getPropertyValue("--global-border-radius")||"");Number.isFinite(zt)&&zt>0&&(ln=zt)}catch{}const fo=No?.updateFromScroll({isBlackSide:an,blackFrameInRatio:We,whiteFrameOutRatio:Bo,glassBreakRatio:Y,astronautDropRatio:Y,blackFrameShowRatio:ha,frameRect:Ae,innerRect:Uo,viewportW:Ct,viewportH:Yt,globalRadius:ln});fo&&(Io=fo.cameraViewportOffsetX||0,Oo=fo.cameraViewportOffsetY||0);const sn=1-Xo(Bo,0,1),Yn=Math.hypot(Ct,Yt),$n=Math.min(Ae?.width>8?Ae.width:Rt*(2e3/1537),Rt),jn=fo?.frameScale??$.lerp(1,Yn/Math.max($n,1),sn),Xn=fo?.frameRotation??sn*-.3;Ht&&Ht.updateFromScroll({glassBreakRatio:Y,astronautDropRatio:Y,frameHeight:Rt,frameRotation:Xn,frameScale:jn})}pe.u_whiteTunnelRatio.value=se,pe.u_showRatio.value=so,pe.u_frameOutRatio.value=fa,Co.uniforms.u_ratio.value=se,Ro.uniforms.u_ratio.value=se,Co.uniforms.u_ratioInverse.value=1-se,Ro.uniforms.u_ratioInverse.value=1-se,pe.u_ambientColor.value.set(W&&Y<1?"#6a7f94":"#566d80");const s=new N("#ffffff");ee||Je?s.set("#000000"):W&&s.set(Y<1?"#ffffff":"#000000"),za.uniforms.u_color.value.copy(s),C.background=null,u.setClearColor(s,he.clearAlpha),pe.u_bgColor.value.copy(s),L&&!L.classList.contains("is-windowed")&&(L.style.background=Y>=1&&!n?"transparent":s.getStyle());const d=L?.classList.contains("is-windowed");!L?.classList.contains("is-pinned")||d?(document.documentElement.style.background="",document.body.style.background=""):W&&Y>=1?(document.documentElement.style.background="#000000",document.body.style.background="#000000"):W?(document.documentElement.style.background="#ffffff",document.body.style.background="#ffffff"):ee||Je?(document.documentElement.style.background="#000000",document.body.style.background="#000000"):(document.documentElement.style.background="",document.body.style.background=""),Fo.visible=W&&Y<1,Ot.visible=ee,Lt.visible=!(W&&Y<1),Pa.u_bgColor.value.copy(s);const _=$.clamp(t,0,1),z=$.clamp(We,0,1);It.position.y=-(10*(1-_)+2.5+30*z),It.scale.setScalar(v(z,0,.5,40,70)),aa.rotation.x=v(z,0,.5,0,-1),It.visible=z<1&&!W&&!ee;const te=document.getElementById("header");te&&(L?.classList.contains("is-pinned")?W||it>0?te.style.color="#000000":te.style.color="#ffffff":te.style.color="");const ue=c.dataset.goalPhase==="black-tunnel",Ie=c.dataset.goalPhase==="white";(ee&&!ue||W&&!Ie)&&he.markEfxSync();const ce=W;for(const I of E){const Ce=ce?I.userData.whiteMat:I.userData.blackMat;I.material!==Ce&&(I.material=Ce)}D=ee?tt(.2,.4,P):0,Me.value=D;for(const I of Pe)I.visible=!W&&D>.01;let xe;if(W){const I=se<1?v(se,0,1,0,79):v(Y,0,1,79,99);xe=Qa(H,I,100),xe.p.y-=(n?0:.4)*cr(Y)}else xe=Qa(x,100*pn(We),100);if(la.copy(xe.p),sa.copy(xe.q),ae.positionFrequency=.2,ae.rotationFrequency=.15,ae.positionAmplitude=0,ae.rotationAmplitude=0,ee){const I=P;ae.positionFrequency=.2+.5*I,ae.rotationFrequency=.15,ae.positionAmplitude=5*I,ae.rotationAmplitude=60*I}else W&&(ae.positionFrequency=v(Mt,0,.45,.5,.2),ae.rotationFrequency=v(Mt,0,.45,.4,.15),ae.positionAmplitude=v(Mt,0,.75,5,0),ae.rotationAmplitude=v(Mt,0,.75,15,0));g.visible=so>.02;const ne=window.innerHeight||1,st=L?.querySelector?.("[data-goal-screen-clip]"),Gt=Math.max(1,it>.001||Y>=1?ne:d&&st?.clientHeight||L?.clientHeight||ne),ht=We<1?We:it>.001||Y>=1?1:1-Mt,co=$.lerp(Gt,ne,ht),mo=J.distanceTo(K),Eo=be/180*Math.PI,U=Math.tan(Eo/2)*mo*2*(ne/Math.max(co,1));if(zo=Math.atan(U/2/mo)*2/Math.PI*180,n&&r.aspect>0&&r.aspect<.85){const Ce=2*Math.atan(Math.tan(52*Math.PI/360)/r.aspect)*180/Math.PI;zo=Math.max(zo,Math.min(Ce,82))}W?Bt=v(se,0,1,60,0):ee?(Bt=Math.sin(P*10+rt)*(n?4.5:7.5)*tt(0,.2,P),Ot.position.z=-80*$t(.2,0,P)):(Bt=0,Ot.position.z=-80),Et=.08*tt(.5,1,Wt)+.02,se>0&&(Et*=v(ke.between("whiteFrameBreak","astronautWait").ratio,.75,1,0,.5)),Et=v(it,0,.1,Et,.05),Lo=(1-lo)*ro*1.15*v(We,.85,1,0,1)*v(it,0,.25,1,0),va(),Qe.u_frameIn.value=We,Qe.u_sunFactor.value=ee?1-tt(.1,.2,P):1,Qe.u_blackTunnelRatio.value=ee?tt(.1,.3,P):0,Qe.u_endRatio.value=ee?tt(.65,.9,P):0,Qe.u_offsetZ.value=Fe.u_offsetZ.value;const ut=v(Y,1,0,.15,.55)*(fa>0?1:0);pe.u_tintColor.value.setStyle("#2533c2").multiplyScalar(ut);const Ft=L.getBoundingClientRect();uo=Ft.bottom>0&&Ft.top<e,uo&&!ja&&Je&&(Ut=0,lt=0),ja=uo,c.dataset.goalPhase=W?"white":ee?"black-tunnel":We<.98||L?.classList.contains("is-windowed")?"window":"title"},Un=e=>{if(!ee){Fe.u_showRatio.value=0,he.setEfxOffset(0,0);return}Fe.u_showRatio.value=vr($t(0,.1,P));const a=Fe.u_outBloomFromToStrength.value;a.z=v(P,.65,.75,0,.2),a.z=v(P,.75,.85,a.z,.15),a.z=v(P,.85,1,a.z,.15),a.x=v(P,.75,.85,20,60),a.x=v(P,.9,1,a.x,30);const t=v(P,.6,1,0,1,fr);Fe.u_blackTunnelTransformRatio.value=t;const s=ro*e;Aa+=s*$t(.1,.3,P)*v(t,0,.25,1,.5),Da+=s*v(t,0,.25,1.5,1);const d=Aa,h=Math.floor(d),_=d-h,z=(h+gn(_))*$o+Da*$o+P*$o*10,te=-80*$t(.2,0,P);let ue=te-Ia,Ie=z-La;(Math.abs(Ie)>8||Math.abs(ue)>20)&&(Ie=0,ue=0),ra=ue+Ie,Ia=te,La=z,Ot.position.z=te,Fe.u_offsetZ.value=z,Qe.u_offsetZ.value=z,Fe.u_time.value=rt;const ce=ho.length*v(P,.2,1,0,1),xe=Math.floor(ce),ne=Math.min(Math.ceil(ce),ho.length-1),Gt=ce-xe>.5?1:0;qt.set(ho[xe]),Ao.set(ho[ne]),qt.lerp(Ao,Gt),Fe.u_color1.value.copy(qt),qt.set(Ta[xe]),Ao.set(Ta[ne]),qt.lerp(Ao,Gt),Fe.u_color2.value.copy(qt);const ht=n?.45:1;he.setEfxOffset(ra*v(P,0,.2,0,1)*ht,ra*t*.01*ht),he.setEfxAmount(v(P,0,.25,.35,.85)*(n?.35:1)),Bt=Math.sin(P*10+rt)*(n?4.5:7.5)*tt(0,.2,P)};let pa=0;const Hn=e=>{if(!W){Ra.update({whiteTunnelWaitRatio:0,aspect:r.aspect}),pa=se;return}no.update(e),Co.uniforms.u_time.value=rt,Ro.uniforms.u_time.value=rt,Co.uniforms.u_fbm.value=ta,Ro.uniforms.u_fbm.value=ta;let a=se-pa;Math.abs(a)>.08&&(a=0);const t=n?0:.7,s=$.clamp(-a*v(se,0,.9,500,0,Fa)*t,-1,1),d=$.clamp(-a*v(se,0,.8,45,0,Fa)*t,-1,1);he.setEfxOffset(s,d),he.setEfxAmount(n?0:v(se,.75,1,1,0)),pa=se;const h=W&&Y>=1?"#000000":W?"#ffffff":"#000000",_=n?Math.max(r.aspect,.95):Math.max(r.aspect,.01);Ra.update({whiteTunnelWaitRatio:Y>=1?it:0,aspect:_,bg:h})},Ja=()=>qo();window.addEventListener("scroll",Ja,{passive:!0}),qo();const en=e=>{const a=Math.min(.05,Math.max(0,e||.016666666666666666));if($a=performance.now(),!uo){if(L){const U=L.getBoundingClientRect();U.bottom>0&&U.top<window.innerHeight&&he.render()}return}lo+=((Do?1:0)-lo)*.1,qe=v(lo,0,1,1,.3)*a,qe=v(We,0,1,a,qe),qe=v(Va,.5,.75,qe,a),rt+=qe,pe.u_time.value=rt,Lo=(1-lo)*ro*1.15*v(We,.85,1,0,1)*v(it,0,.25,1,0),Un(qe),Hn(qe),Wn(qe),ee&&(Bt=Math.sin(P*10+rt)*(n?4.5:7.5)*tt(0,.2,P)),va();const t=Y,s=v(t,0,.1,0,1)*v(t,.9,1,1,0);pe.u_loopLinearBlend.value=s;const d=v(t,.9,1,0,1,pn);$e=d>0;let h,_,z,te=!0;if(t<.5)lt=0,h=tt(-.3,1,Wt)*.75,_=0,z=89,Mo.uniforms.u_cardOpacity.value=0;else{h=v(t,.85,1,0,1),_=140,z=Math.min(287,Math.max(140,He-1));const U=Math.min(2,Math.max(0,.5+Math.max(0,f.getFbm(rt*8,3)+.5)*4));Mo.uniforms.u_cardOpacity.value=U*d,t<1?(lt=Math.max(0,lt),te=!1):(te=!0,lt===Number.POSITIVE_INFINITY&&(Ut=0),lt=0)}lt===0&&(Ut+=qe*h*da),s===1&&(Ut=0);const ue=Math.max(1,z-_+1),Ie=Oa[0];let xe=(Ie+Ut)*60;xe=(xe%ue+ue)%ue;let ne=Math.floor(xe),st=(ne+1)%ue+_;ne+=_,st<ne&&!te&&(st=ne=_,Ut=-Ie,lt=Number.POSITIVE_INFINITY);const Gt=xe-Math.floor(xe);Ye.setXYZ(0,ne,st,Gt),Ye.needsUpdate=!0;const ht=v(Bo+t,.9,2,90,139,mr),co=Math.floor(ht),mo=Math.ceil(ht),Eo=ht-co;Ve.setXYZ(0,co,mo,Eo),Ve.needsUpdate=!0,ao.visible=t>=.95&&so>.02,O=$e?O+qe:0;{const U=De.x,ut=De.y,Ft=Math.floor(10*O%(U*(ut+1))),I=Ft/(U*(ut+1)),Ce=$t(0,.15,I)*$t(1,.9,I);pe.u_faceLedLight.value=Ce,Mo.uniforms.u_cardUvOffset.value.set(Ft%U/U,(ut-Math.floor(Ft/U))/ut)}if(pe.u_cardPosition.value.set(ge.getX(0),ge.getY(0)+.9,ge.getZ(0)),D>.01&&!W&&!Je){for(let U=0;U<A;U++){Ba[U]=(Ba[U]+.2*qe)%1,lt===0&&(Na[U]+=qe*h*da);const I=($.lerp(0,Oa[U+1],D)+Na[U])*60%ue;let Ce=Math.floor(I),xt=(Ce+1)%ue+_;Ce+=_,xt<Ce&&!te&&(xt=Ce=_);const vo=I-Math.floor(I);Z.setXYZ(U,Ce,xt,vo),le.setXYZ(U,co,mo,Eo)}Z.needsUpdate=!0,le.needsUpdate=!0}if(he.setScrollVelocity?.(Math.abs(Lo)+Math.abs(ro)*.5),ee){const U=Fe.u_resolution.value.clone();Fo.visible=!1,Lt.visible=!1,g.visible=so>.02,Fe.u_feedbackTexture.value=B.texture,Fe.u_resolution.value.set(G.width,G.height),u.setRenderTarget(G),u.setClearColor(0,0),u.clear(),u.render(C,r),yo(G,n?10:16),yo(G,n?3:4),u.setRenderTarget(null),Fe.u_resolution.value.copy(U);const ut=B;B=G,G=ut,Fe.u_feedbackTexture.value=B.texture,Qe.u_blackTunnelTexture.value=B.texture,Lt.visible=!0}u.setClearColor(pe.u_bgColor.value,he.clearAlpha),he.render()},tn=e=>{ga=requestAnimationFrame(tn);const a=Math.min(.05,(e-$a)/1e3);e-on>50&&en(a)};let on=0;const Vn=e=>{on=performance.now(),en(e)};return ga=requestAnimationFrame(tn),requestAnimationFrame(()=>{Vt(),qo(),he.render()}),{resize:Vt,updateScroll:qo,tickFrame:Vn,getAutoScrollSpeed:()=>Lo,getGlassRatio:()=>Ht?.ratio??0,getAstronautDropRatio:()=>Y,getWhiteTunnelRatio:()=>se,getBlackFrameInRatio:()=>We,getBlackTunnelRatio:()=>P,getBlackTitleRatio:()=>Wt,isGoalAudioActive:()=>!!(L&&(L.classList.contains("is-pinned")||L.classList.contains("is-windowed")||uo&&(Je||ee||W))),destroy(){cancelAnimationFrame(ga),window.removeEventListener("resize",Vt),window.removeEventListener("scroll",Ja),Ht?.dispose(),No?.dispose(),Ge.dispose(),Xe.dispose(),Ke.dispose(),nt.dispose(),he.destroy(),u.dispose()}}}export{Yr as createGoalTunnel};
