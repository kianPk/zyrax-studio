/**
 * Lusion GoalWhiteTunnelStickers + GoalWhiteTunnelParticles (diamonds)
 * — appear during astronautWait at the white-tunnel end.
 */
import * as THREE from 'three'
import { loadBuf } from './bufLoader.js'
import { fit } from './scrollRanges.js'

const STICKER_DATA = [
  { x: 1132, y: 3, w: 195, h: 195 },
  { x: 744, y: 3, w: 195, h: 256 },
  { x: 525, y: 3, w: 213, h: 282 },
  { x: 242, y: 3, w: 277, h: 286 },
  { x: 1055, y: 633, w: 209, h: 209 },
  { x: 1076, y: 398, w: 209, h: 209 },
  { x: 3, y: 772, w: 298, h: 249 },
  { x: 945, y: 3, w: 181, h: 249 },
  { x: 1291, y: 389, w: 160, h: 197 },
  { x: 1055, y: 848, w: 83, h: 122 },
  { x: 1132, y: 204, w: 167, h: 179 },
  { x: 1270, y: 828, w: 192, h: 193 },
  { x: 780, y: 265, w: 182, h: 167 },
  { x: 564, y: 445, w: 294, h: 184 },
  { x: 307, y: 683, w: 205, h: 334 },
  { x: 864, y: 438, w: 206, h: 189 },
  { x: 968, y: 258, w: 149, h: 134 },
  { x: 734, y: 635, w: 165, h: 382 },
  { x: 605, y: 291, w: 169, h: 141 },
  { x: 302, y: 445, w: 256, h: 232 },
  { x: 518, y: 683, w: 210, h: 266 },
  { x: 242, y: 295, w: 357, h: 144 },
  { x: 3, y: 3, w: 233, h: 469 },
  { x: 905, y: 633, w: 144, h: 340 },
  { x: 1270, y: 613, w: 187, h: 209 },
  { x: 3, y: 478, w: 293, h: 288 },
]

const STICKER_COUNT = 26
const PARTICLE_COUNT = 64
// Slightly denser on phone so the wait finale fills the portrait frame
const MOBILE_STICKER_COUNT = 34
const TEX_SIZE = new THREE.Vector2(1465, 1024)

const stickerVert = /* glsl */ `
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
    *linearStep(instanceRands.w*0.5,instanceRands.w*0.5+0.5,u_activeRatio)*0.55;
  float yLimit=7.0/u_aspect;
  vec3 instancePos=vec3(mix(-5.,5.,cycleRands.x),yLimit*mix(-1.0,1.0,ratio),20.+instanceId/float(COUNT));
  pos+=instancePos;
  gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);
  v_uv=instanceUvInfo.xy+instanceUvInfo.zw*vec2(uv.x,1.-uv.y);
  v_uv.y=1.0-v_uv.y;
  v_fadeOut=2.0*abs(ratio-0.5);
}
`

const stickerFrag = /* glsl */ `
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
`

const diamondVert = /* glsl */ `
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
`

const diamondFrag = /* glsl */ `
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
`

const DIAMOND_PLANES = [
  -0.694747, 0.694747, 0.186157, -0.239229, -0.50859, 0.694747, 0.50859, -0.239229, -0.186157,
  0.694747, 0.694747, -0.239229, 0.186157, 0.694747, 0.694747, -0.239229, 0.50859, 0.694747,
  0.50859, -0.239229, 0.694747, 0.694747, 0.186157, -0.239229, 0.694747, 0.694747, -0.186157,
  -0.239229, 0.50859, 0.694747, -0.50859, -0.239229, 0.186157, 0.694747, -0.694746, -0.239229,
  -0.186156, 0.694747, -0.694747, -0.239229, -0.508589, 0.694747, -0.50859, -0.239229, -0.694747,
  0.694747, -0.186157, -0.239229, -0.694747, -0.694747, 0.186157, -0.455518, -0.50859, -0.694747,
  0.50859, -0.455518, -0.186157, -0.694747, 0.694747, -0.455518, 0.186157, -0.694747, 0.694747,
  -0.455518, 0.50859, -0.694747, 0.50859, -0.455518, 0.694746, -0.694747, 0.186157, -0.455518,
  0.694746, -0.694747, -0.186157, -0.455518, 0.50859, -0.694747, -0.50859, -0.455518, 0.186157,
  -0.694747, -0.694746, -0.455518, -0.186156, -0.694747, -0.694747, -0.455518, -0.508589,
  -0.694747, -0.50859, -0.455518, -0.694747, -0.694747, -0.186157, -0.455518, -0, -1, -0, -0.34434,
]

function seededRandom(seed) {
  let h = 2166136261 >>> 0
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return () => {
    h += 0x6d2b79f5
    let t = Math.imul(h ^ (h >>> 15), 1 | h)
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export async function createWhiteTunnelExtras(scene, { base, isMobile, sharedTime }) {
  // Prefer full stickers atlas even on phone — low atlas looks muddy at wait bloom
  const stickerFile = 'stickers.png'
  const stickerCount = isMobile ? MOBILE_STICKER_COUNT : STICKER_COUNT
  const [stickerTex, diamondGeo] = await Promise.all([
    new THREE.TextureLoader().loadAsync(`${base}assets/textures/tunnels/${stickerFile}`),
    loadBuf(`${base}assets/models/tunnels/diamond.buf`),
  ])
  stickerTex.colorSpace = THREE.SRGBColorSpace
  stickerTex.flipY = false
  stickerTex.needsUpdate = true

  const container = new THREE.Group()
  scene.add(container)

  // —— Stickers ——
  const plane = new THREE.PlaneGeometry(1, 1)
  const stickerIg = new THREE.InstancedBufferGeometry()
  for (const key in plane.attributes) stickerIg.setAttribute(key, plane.attributes[key])
  stickerIg.index = plane.index
  const ids = new Float32Array(stickerCount)
  const uvInfo = new Float32Array(stickerCount * 4)
  const rands = new Float32Array(stickerCount * 4)
  for (let i = 0, u = 0; i < stickerCount; i++, u += 4) {
    ids[i] = i / stickerCount
    const f = STICKER_DATA[i % STICKER_DATA.length]
    uvInfo[u] = f.x / TEX_SIZE.x
    uvInfo[u + 1] = f.y / TEX_SIZE.y
    uvInfo[u + 2] = f.w / TEX_SIZE.x
    uvInfo[u + 3] = f.h / TEX_SIZE.y
    rands[u] = Math.random()
    rands[u + 1] = Math.random()
    rands[u + 2] = Math.random()
    rands[u + 3] = Math.random()
  }
  stickerIg.setAttribute('instanceId', new THREE.InstancedBufferAttribute(ids, 1))
  stickerIg.setAttribute('instanceUvInfo', new THREE.InstancedBufferAttribute(uvInfo, 4))
  stickerIg.setAttribute('instanceRands', new THREE.InstancedBufferAttribute(rands, 4))
  stickerIg.instanceCount = stickerCount

  const stickerMat = new THREE.ShaderMaterial({
    vertexShader: stickerVert,
    fragmentShader: stickerFrag,
    uniforms: {
      u_time: sharedTime,
      u_activeRatio: { value: 0 },
      u_texture: { value: stickerTex },
      u_textureSize: { value: TEX_SIZE.clone() },
      u_bgColor: { value: new THREE.Color(0x000000) },
      u_aspect: { value: 1 },
    },
    transparent: true,
    depthWrite: false,
    blending: THREE.CustomBlending,
    blendEquation: THREE.AddEquation,
    blendSrc: THREE.SrcAlphaFactor,
    blendDst: THREE.OneMinusSrcAlphaFactor,
    blendEquationAlpha: THREE.AddEquation,
    blendSrcAlpha: THREE.ZeroFactor,
    blendDstAlpha: THREE.ZeroFactor,
    defines: { COUNT: stickerCount },
  })
  const stickerMesh = new THREE.Mesh(stickerIg, stickerMat)
  stickerMesh.frustumCulled = false
  stickerMesh.visible = false
  container.add(stickerMesh)

  // —— Diamonds ——
  const diamondIg = new THREE.InstancedBufferGeometry()
  for (const key in diamondGeo.attributes) {
    diamondIg.setAttribute(key, diamondGeo.attributes[key])
  }
  if (diamondGeo.index) diamondIg.index = diamondGeo.index

  const rnd = seededRandom('diamonds-3')
  const positions = new Float32Array(PARTICLE_COUNT * 3)
  const axes = new Float32Array(PARTICLE_COUNT * 3)
  const prands = new Float32Array(PARTICLE_COUNT * 4)
  const tmp = new THREE.Vector3()
  for (let i = 0, f = 0, p = 0; i < PARTICLE_COUNT; i++, f += 3, p += 4) {
    positions[f] = 16 * (rnd() * 2 - 1)
    positions[f + 1] = 16 * (rnd() * 2 - 1)
    positions[f + 2] = 19 - ((PARTICLE_COUNT - i - 1) / (PARTICLE_COUNT - 1)) * 8
    tmp.set(rnd() * 2 - 1, rnd() * 2 - 1, rnd() * 2 - 1).normalize()
    axes[f] = tmp.x
    axes[f + 1] = tmp.y
    axes[f + 2] = tmp.z
    prands[p] = rnd()
    prands[p + 1] = rnd()
    prands[p + 2] = rnd()
    prands[p + 3] = rnd()
  }
  diamondIg.setAttribute('a_instancePosition', new THREE.InstancedBufferAttribute(positions, 3))
  diamondIg.setAttribute('a_instanceRotationAxis', new THREE.InstancedBufferAttribute(axes, 3))
  diamondIg.setAttribute('a_instanceRand', new THREE.InstancedBufferAttribute(prands, 4))
  diamondIg.instanceCount = PARTICLE_COUNT

  const planeUniforms = []
  for (let i = 0; i < 25; i++) {
    planeUniforms.push(
      new THREE.Vector4(
        DIAMOND_PLANES[i * 4],
        DIAMOND_PLANES[i * 4 + 1],
        DIAMOND_PLANES[i * 4 + 2],
        DIAMOND_PLANES[i * 4 + 3]
      )
    )
  }

  const diamondMat = new THREE.ShaderMaterial({
    vertexShader: diamondVert,
    fragmentShader: diamondFrag,
    uniforms: {
      u_time: sharedTime,
      u_activeRatio: { value: 0 },
      u_color: { value: new THREE.Color('#689aff') },
      u_planes: { value: planeUniforms },
      u_bgColor: { value: new THREE.Color(0x000000) },
      u_aspect: { value: 1 },
    },
    transparent: true,
    depthWrite: false,
    blending: THREE.CustomBlending,
    blendEquation: THREE.AddEquation,
    blendSrc: THREE.OneFactor,
    blendDst: THREE.ZeroFactor,
    blendEquationAlpha: THREE.AddEquation,
    blendSrcAlpha: THREE.OneFactor,
    blendDstAlpha: THREE.OneFactor,
  })
  const diamondMesh = new THREE.Mesh(diamondIg, diamondMat)
  diamondMesh.frustumCulled = false
  diamondMesh.renderOrder = 20
  diamondMesh.visible = false
  // Lusion particles use additive-ish presence; One/Zero can vanish on some GPUs —
  // NormalBlending keeps diamonds readable over the wait bloom.
  diamondMat.blending = THREE.NormalBlending
  diamondMat.blendSrc = THREE.SrcAlphaFactor
  diamondMat.blendDst = THREE.OneMinusSrcAlphaFactor
  diamondMat.blendSrcAlpha = THREE.SrcAlphaFactor
  diamondMat.blendDstAlpha = THREE.OneMinusSrcAlphaFactor
  container.add(diamondMesh)

  stickerMesh.renderOrder = 15

  const bgColor = new THREE.Color(0x000000)

  return {
    update({ whiteTunnelWaitRatio = 0, aspect = 1, bg = '#000000' } = {}) {
      // Exact Lusion: fit(whiteTunnelWaitRatio, 0, 0.2, 0, 1)
      const activeRatio = fit(whiteTunnelWaitRatio, 0, 0.2, 0, 1)
      const show = activeRatio > 0
      container.visible = show
      stickerMesh.visible = show
      diamondMesh.visible = show
      stickerMat.uniforms.u_activeRatio.value = activeRatio
      diamondMat.uniforms.u_activeRatio.value = activeRatio
      stickerMat.uniforms.u_aspect.value = aspect
      diamondMat.uniforms.u_aspect.value = aspect
      bgColor.set(bg)
      stickerMat.uniforms.u_bgColor.value.copy(bgColor)
      diamondMat.uniforms.u_bgColor.value.copy(bgColor)
    },
    dispose() {
      stickerIg.dispose()
      plane.dispose()
      stickerMat.dispose()
      stickerTex.dispose()
      diamondIg.dispose()
      diamondMat.dispose()
      diamondGeo.dispose()
      scene.remove(container)
    },
  }
}
