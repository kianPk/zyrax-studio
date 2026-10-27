import * as THREE from 'three'
import { loadBuf } from './bufLoader.js'
import {
  createGoalRanges,
  fit,
  easeCubicIn,
  easeBackInOut,
  easeQuartIn,
  smoothstep,
} from './scrollRanges.js'

const BONE_COUNT = 53
const BLOCK_COUNT = 16
const PARTS = ['helmet', 'helmet_glass', 'glove_shoes', 'wearpack']

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = url
  })
}

/** Mix arm RGB + base R→A into one RGBA texture (Lusion armb). */
async function makeArmbTexture(armUrl, baseUrl) {
  const [arm, base] = await Promise.all([loadImage(armUrl), loadImage(baseUrl)])
  const c = document.createElement('canvas')
  c.width = arm.width
  c.height = arm.height
  const ctx = c.getContext('2d', { willReadFrequently: true })
  ctx.drawImage(base, 0, 0, c.width, c.height)
  const baseData = ctx.getImageData(0, 0, c.width, c.height)
  ctx.clearRect(0, 0, c.width, c.height)
  ctx.drawImage(arm, 0, 0, c.width, c.height)
  const armData = ctx.getImageData(0, 0, c.width, c.height)
  for (let i = 0; i < armData.data.length; i += 4) {
    armData.data[i + 3] = baseData.data[i]
  }
  ctx.putImageData(armData, 0, 0)
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.NoColorSpace
  tex.flipY = false
  tex.needsUpdate = true
  return tex
}

function makeDataTex(data, w, h) {
  const tex = new THREE.DataTexture(data, w, h, THREE.RGBAFormat, THREE.FloatType)
  tex.magFilter = THREE.NearestFilter
  tex.minFilter = THREE.NearestFilter
  tex.generateMipmaps = false
  tex.flipY = false
  tex.needsUpdate = true
  return tex
}

const astronautVert = /* glsl */ `
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
`

const astronautFrag = /* glsl */ `
uniform sampler2D u_armbTexture;
uniform sampler2D u_norTexture;
uniform sampler2D u_matcapTexture;
uniform sampler2D u_envTexture;
uniform vec3 u_ambientColor;
uniform vec3 u_bgColor;
uniform vec3 u_sunPosition;
uniform float u_showRatio;
uniform float u_whiteTunnelRatio;
uniform float u_frameOutRatio;
varying vec3 v_worldPosition;
varying vec4 v_worldTangent;
varying vec3 v_worldNormal;
varying vec2 v_uv;
varying float v_ao;
varying vec3 v_viewPosition;

float linearStep(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}
#ifndef saturate
#define saturate(a) clamp(a, 0.0, 1.0)
#endif

void main() {
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
  float ao = clamp(v_ao * max(armb.r, 0.15), 0.0, 1.0);
  float roughness = armb.g;
  float metalness = armb.b;
  float albedo = max(armb.a, 0.12);
  vec3 N = worldNormal;

  vec3 viewDir = normalize(v_worldPosition);
  vec3 x = normalize(vec3(viewDir.z, 0.0, -viewDir.x));
  vec3 y = cross(viewDir, x);
  vec2 uv = vec2(dot(x, worldNormal), dot(y, worldNormal)) * 0.495 + 0.5;

  float zAxisShading = linearStep(-0.2, 1.3, worldNormal.z) * (0.65 + ao * 0.35);
  float outOfFrameRatio = linearStep(0.35, 1.0, u_frameOutRatio);
  vec3 L = normalize(u_sunPosition - v_worldPosition);
  float sunNdL = saturate(dot(N, L));
  float matcapSample = texture2D(u_matcapTexture, uv).r;
  float matcapShading = 0.35 + 0.65 * (1.0 - matcapSample);
  float metalMask = 1.0 - metalness;

  // base suit albedo (grayscale map) with cooler ambient like Lusion
  vec3 color = vec3(albedo * matcapShading);
  color += 0.55 * zAxisShading * albedo;
  color *= u_ambientColor * (0.75 + sunNdL * 0.55);
  color *= metalMask * 0.92 + 0.08;
  color += metalMask * (0.28 + 0.35 * sunNdL) * albedo;
  color *= 0.55 + 0.45 * ao;
  // subtle env reflection on metals / helmet edges
  color += (0.25 + 0.75 * metalness) * texture2D(u_envTexture, uv).rgb * 0.35 * outOfFrameRatio;
  // rim light so silhouette reads against white tunnel
  float rim = pow(1.0 - saturate(abs(dot(N, normalize(cameraPosition - v_worldPosition)))), 2.0);
  color += rim * 0.22 * vec3(0.75, 0.82, 0.95);

  gl_FragColor.rgb = mix(u_bgColor, color, vec3(clamp(u_showRatio, 0.15, 1.0)));
  gl_FragColor.a = 1.0;
}
`

const glassFrag = /* glsl */ `
uniform vec3 u_bgColor;
uniform float u_showRatio;
varying vec3 v_worldNormal;
varying vec3 v_viewPosition;
varying float v_ao;
void main() {
  vec3 N = normalize(v_worldNormal);
  vec3 V = normalize(v_viewPosition);
  float fresnel = pow(1.0 - abs(dot(N, V)), 2.2);
  vec3 color = mix(vec3(0.55, 0.72, 0.9), vec3(1.0), fresnel);
  color = mix(u_bgColor, color, u_showRatio);
  gl_FragColor = vec4(color, 0.35 + fresnel * 0.45);
}
`

const blockVert = /* glsl */ `
attribute float a_instanceId;
uniform float u_ratio;
uniform float u_ratioInverse;
varying vec3 v_worldNormal;
varying vec2 v_uv;
varying float v_fog;
varying float v_lengthRatio;

vec3 deform(in vec3 pos) {
  float blockCount = float(BLOCK_COUNT);
  float ratio = mix(0.1, 1.0, u_ratioInverse);
  float lengthRatio = -pos.z / blockCount;
  float scalar = mix(0.25, ratio, lengthRatio);
  pos.x *= 1.0 + scalar * 0.5 * sin(lengthRatio * 6.283184);
  pos.y *= 1.0 + scalar * 0.5 * cos(lengthRatio * 6.283184 + 3.1415926);
  float angleRatio = smoothstep(0.25, 1.0, u_ratioInverse);
  float angle = (angleRatio + angleRatio * lengthRatio * lengthRatio) * -6.283184;
  float s = sin(angle);
  float c = cos(angle);
  mat2 m = mat2(c, -s, s, c);
  pos.xy = m * pos.xy;
  pos.y += ratio * sin(ratio * lengthRatio * 3.141592 * 4.0) * 0.25;
  pos.z -= (cos(ratio * 1.5 + (1.0 - ratio) * lengthRatio * 3.141592 * 0.5) * 0.5 + 0.5 - 1.0) * blockCount;
  pos.z *= 1.0 + 16.0 * (ratio * lengthRatio * lengthRatio) + 2.0 * ratio * (sin(8.0 * lengthRatio) * 0.5 + 0.5);
  pos.z *= (1.0 - ratio * ratio * ratio) * 0.9 + 0.1;
  pos.z += blockCount / 4.0;
  return pos * 15.0;
}
vec3 inverseTransformDirection(in vec3 dir, in mat4 matrix) {
  return normalize((vec4(dir, 0.0) * matrix).xyz);
}
void main() {
  float blockCount = float(BLOCK_COUNT);
  vec3 pos = position;
  pos.z -= a_instanceId;
  pos.z /= blockCount;
  float lengthRatio = -pos.z;
  pos.z *= blockCount;
  v_lengthRatio = lengthRatio;
  vec3 nor = deform(pos + normal * 0.01);
  pos = deform(pos);
  nor = normalize(nor - pos);
  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  v_fog = -0.005 * mvPosition.z / mvPosition.w;
  gl_Position = projectionMatrix * mvPosition;
  v_worldNormal = inverseTransformDirection(normalMatrix * nor, viewMatrix);
  v_uv = uv;
}
`

const blockFrag = /* glsl */ `
uniform sampler2D u_texture;
uniform float u_ratioInverse;
varying vec3 v_worldNormal;
varying vec2 v_uv;
varying float v_fog;
varying float v_lengthRatio;
void main() {
  vec3 N = normalize(v_worldNormal);
  vec4 tex = texture2D(u_texture, v_uv);
  float shade = 0.55 + 0.45 * abs(N.y);
  vec3 color = tex.rgb * shade;
  color = mix(color, vec3(0.92, 0.93, 0.95), 0.15);
  float fog = smoothstep(0.0, 1.2, v_fog + v_lengthRatio * 0.35);
  color = mix(color, vec3(0.94), fog * 0.65);
  float alpha = mix(1.0, 0.35, fog) * mix(0.4, 1.0, u_ratioInverse);
  gl_FragColor = vec4(color, alpha);
}
`

export async function createGoalTunnel(canvas, sectionEl, titleEl) {
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth < 812
  const base = import.meta.env.BASE_URL

  // --- load assets first (before allocating a second WebGL context) ---
  const [
    animGeo,
    inAnim,
    outAnim,
    matcap,
    envMap,
    blockTex,
    blockBase,
    blockWall,
    ...partGeos
  ] = await Promise.all([
    loadBuf(`${base}assets/models/tunnels/astronaut_animations.buf`),
    loadBuf(`${base}assets/models/tunnels/astronaut_in_animation.buf`),
    loadBuf(`${base}assets/models/tunnels/astronaut_out_animation.buf`),
    new THREE.TextureLoader().loadAsync(`${base}assets/textures/tunnels/white_matcap.jpg`),
    new THREE.TextureLoader().loadAsync(`${base}assets/textures/tunnels/earth.webp`),
    new THREE.TextureLoader().loadAsync(`${base}assets/textures/tunnels/white_block.webp`),
    loadBuf(`${base}assets/models/tunnels/tunnel_block_base.buf`),
    loadBuf(`${base}assets/models/tunnels/tunnel_block_wall.buf`),
    ...PARTS.map((p) => loadBuf(`${base}assets/models/tunnels/astronaut_${p}.buf`)),
  ])

  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xf0f1fa)
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 400)
  camera.position.set(0, 0, 28)

  let renderer
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: !isMobile,
      alpha: false,
      powerPreference: 'high-performance',
      failIfMajorPerformanceCaveat: false,
    })
  } catch (err) {
    console.error('Goal WebGL unavailable', err)
    throw err
  }
  renderer.setClearColor(0xf0f1fa, 1)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1 : 1.35))
  renderer.outputColorSpace = THREE.SRGBColorSpace

  matcap.colorSpace = THREE.NoColorSpace
  envMap.colorSpace = THREE.SRGBColorSpace
  blockTex.colorSpace = THREE.SRGBColorSpace
  blockTex.wrapS = blockTex.wrapT = THREE.RepeatWrapping

  // animation data textures
  const posArr = animGeo.attributes.position.array
  const oriArr = animGeo.attributes.orient.array
  const boneSamples = posArr.length / 3
  const frameCount = boneSamples / BONE_COUNT
  const texW = Math.ceil(Math.sqrt(boneSamples))
  const texH = Math.ceil(boneSamples / texW)
  const texCells = texW * texH
  const posRGBA = new Float32Array(texCells * 4)
  const oriRGBA = new Float32Array(texCells * 4)
  for (let i = 0, g = 0, v = 0; i < boneSamples; i++, g += 3, v += 4) {
    posRGBA[v] = posArr[g]
    posRGBA[v + 1] = posArr[g + 1]
    posRGBA[v + 2] = posArr[g + 2]
    posRGBA[v + 3] = 1
    oriRGBA[v] = oriArr[v]
    oriRGBA[v + 1] = oriArr[v + 1]
    oriRGBA[v + 2] = oriArr[v + 2]
    oriRGBA[v + 3] = oriArr[v + 3]
  }
  const animPosTex = makeDataTex(posRGBA, texW, texH)
  const animOriTex = makeDataTex(oriRGBA, texW, texH)

  // instance attrs (single hero astronaut)
  const instancePos = new THREE.InstancedBufferAttribute(new Float32Array([0, 0, 18]), 3)
  instancePos.setUsage(THREE.DynamicDrawUsage)
  const instanceOrient = new THREE.InstancedBufferAttribute(new Float32Array([0, 0, 0, 1]), 4)
  instanceOrient.setUsage(THREE.DynamicDrawUsage)
  const blend1 = new THREE.InstancedBufferAttribute(new Float32Array([0, 1, 0]), 3)
  blend1.setUsage(THREE.DynamicDrawUsage)
  const blend2 = new THREE.InstancedBufferAttribute(new Float32Array([90, 91, 0]), 3)
  blend2.setUsage(THREE.DynamicDrawUsage)

  const sharedUniforms = {
    u_animationPositionTexture: { value: animPosTex },
    u_animationOrientTexture: { value: animOriTex },
    u_animationTextureSize: { value: new THREE.Vector2(texW, texH) },
    u_loopLinearBlend: { value: 0 },
    u_matcapTexture: { value: matcap },
    u_envTexture: { value: envMap },
    u_ambientColor: { value: new THREE.Color('#566d80') },
    u_bgColor: { value: new THREE.Color('#f0f1fa') },
    u_sunPosition: { value: new THREE.Vector3(-20, 0, 22) },
    u_showRatio: { value: 0 },
    u_whiteTunnelRatio: { value: 0 },
    u_frameOutRatio: { value: 0 },
  }

  // textures per part
  const partTex = {}
  await Promise.all(
    ['helmet', 'glove_shoes', 'wearpack'].map(async (part) => {
      const [armb, nor] = await Promise.all([
        makeArmbTexture(
          `${base}assets/textures/tunnels/astronaut/astronaut_${part}_arm.webp`,
          `${base}assets/textures/tunnels/astronaut/astronaut_${part}_base.webp`
        ),
        new THREE.TextureLoader().loadAsync(
          `${base}assets/textures/tunnels/astronaut/astronaut_${part}_nor.webp`
        ),
      ])
      nor.colorSpace = THREE.NoColorSpace
      nor.flipY = false
      partTex[part] = { armb, nor }
    })
  )
  partTex.helmet_glass = partTex.helmet

  const astronautRoot = new THREE.Group()
  scene.add(astronautRoot)

  PARTS.forEach((part, idx) => {
    const geo = partGeos[idx]
    const ig = new THREE.InstancedBufferGeometry()
    for (const key in geo.attributes) ig.setAttribute(key, geo.attributes[key])
    if (geo.index) ig.setIndex(geo.index)
    ig.instanceCount = 1
    ig.setAttribute('instancePos', instancePos)
    ig.setAttribute('instanceOrient', instanceOrient)
    ig.setAttribute('instanceAnimationFrameFromToBlend1', blend1)
    ig.setAttribute('instanceAnimationFrameFromToBlend2', blend2)

    const texKey = part === 'helmet_glass' || part === 'card' ? 'helmet' : part
    const isGlass = part === 'helmet_glass'
    const uniforms = {
      ...sharedUniforms,
      u_armbTexture: { value: partTex[texKey].armb },
      u_norTexture: { value: partTex[texKey].nor },
    }
    const mat = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: astronautVert,
      fragmentShader: isGlass ? glassFrag : astronautFrag,
      transparent: isGlass,
      side: THREE.DoubleSide,
      defines: { BONE_COUNT },
    })
    const mesh = new THREE.Mesh(ig, mat)
    mesh.frustumCulled = false
    astronautRoot.add(mesh)
  })

  // white tunnel blocks
  const tunnelGroup = new THREE.Group()
  scene.add(tunnelGroup)

  const makeBlockMesh = (geo, isWall) => {
    const ig = new THREE.InstancedBufferGeometry()
    for (const key in geo.attributes) ig.setAttribute(key, geo.attributes[key])
    if (geo.index) ig.setIndex(geo.index)
    const ids = new Float32Array(BLOCK_COUNT)
    for (let i = 0; i < BLOCK_COUNT; i++) ids[i] = i
    ig.setAttribute('a_instanceId', new THREE.InstancedBufferAttribute(ids, 1))
    ig.instanceCount = BLOCK_COUNT
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        u_texture: { value: blockTex },
        u_ratio: { value: 0 },
        u_ratioInverse: { value: 1 },
      },
      vertexShader: blockVert,
      fragmentShader: blockFrag,
      transparent: true,
      defines: { BLOCK_COUNT, ...(isWall ? { IS_WALL: 1 } : {}) },
    })
    const mesh = new THREE.Mesh(ig, mat)
    mesh.frustumCulled = false
    tunnelGroup.add(mesh)
    return mat
  }
  const baseMat = makeBlockMesh(blockBase, false)
  const wallMat = makeBlockMesh(blockWall, true)

  // soft fill plane — switches black↔white across phases
  const bgMatPlane = new THREE.MeshBasicMaterial({ color: 0x0b0b12 })
  const bgPlane = new THREE.Mesh(new THREE.PlaneGeometry(120, 120), bgMatPlane)
  bgPlane.position.z = -50
  scene.add(bgPlane)

  // black-tunnel depth rings (lightweight stand-in for greeble grid)
  const blackTunnelGroup = new THREE.Group()
  scene.add(blackTunnelGroup)
  const ringGeo = new THREE.TorusGeometry(6.2, 0.045, 8, 48)
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0x2a3344,
    transparent: true,
    opacity: 0.55,
  })
  for (let i = 0; i < 28; i++) {
    const ring = new THREE.Mesh(ringGeo, ringMat)
    ring.position.z = -i * 3.2
    ring.rotation.x = Math.PI / 2
    blackTunnelGroup.add(ring)
  }
  const streakMat = new THREE.MeshBasicMaterial({ color: 0x5a90ff, transparent: true, opacity: 0.08 })
  for (let i = 0; i < 12; i++) {
    const streak = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 70), streakMat)
    const a = (i / 12) * Math.PI * 2
    streak.position.set(Math.cos(a) * 5.6, Math.sin(a) * 5.6, -35)
    blackTunnelGroup.add(streak)
  }

  // title DOM owned by goalDom.js — do not re-split words here

  const stickyEl = canvas.parentElement || sectionEl
  const ranges = createGoalRanges(sectionEl)
  let whiteTunnelRatio = 0
  let showRatio = 0
  let blackTitleRatio = 0
  let blackTunnelRatio = 0
  let astronautDropRatio = 0
  let animationTime = 0
  let raf = 0
  let last = performance.now()
  let active = false

  const resize = () => {
    const parent = stickyEl
    const w = parent.clientWidth || window.innerWidth
    const h = parent.clientHeight || window.innerHeight
    camera.aspect = w / Math.max(h, 1)
    camera.updateProjectionMatrix()
    renderer.setSize(w, h, false)
  }
  resize()
  window.addEventListener('resize', resize)

  const samplePath = (geo, t01) => {
    const pos = geo.attributes.position.array
    const ori = geo.attributes.orient.array
    const n = pos.length / 3
    const f = Math.max(0, Math.min(n - 1.0001, t01 * (n - 1)))
    const i0 = Math.floor(f)
    const i1 = Math.min(n - 1, i0 + 1)
    const t = f - i0
    const p = new THREE.Vector3().fromArray(pos, i0 * 3).lerp(new THREE.Vector3().fromArray(pos, i1 * 3), t)
    const q = new THREE.Quaternion().fromArray(ori, i0 * 4).slerp(new THREE.Quaternion().fromArray(ori, i1 * 4), t)
    return { p, q }
  }

  const updateScroll = () => {
    if (!sectionEl) return
    const vh = window.innerHeight

    // Ratios match Lusion goalTunnels.updateRatios()
    const blackFrameInRatio = ranges.range('blackFrameIn').ratio
    blackTitleRatio = ranges.range('blackTitle').ratio
    blackTunnelRatio = ranges.range('blackTunnel').ratio
    const whiteFrameRatio = ranges.range('whiteTunnel').ratio
    whiteTunnelRatio = ranges.between('whiteTunnel', 'whiteFrameOut').ratio
    const whiteFrameOut = ranges.range('whiteFrameOut').ratio
    const whiteFrameBreak = ranges.range('whiteFrameBreak').ratio
    const whiteTunnelAstronautRatio = ranges.between('whiteTunnel', 'whiteFrameBreak').ratio
    // Lusion: astronautDropRatio = range(whiteFrameBreak → astronautDrop)
    astronautDropRatio = ranges.between('whiteFrameBreak', 'astronautDrop').ratio

    const isBlackTitleActive = blackTitleRatio < 1
    const isBlackTunnelActive = blackTunnelRatio < 1 && !isBlackTitleActive
    const isWhiteTunnelActive =
      whiteTunnelRatio <= 1 && !isBlackTunnelActive && !isBlackTitleActive

    // showRatio: white tunnel fades astronaut in; black title always visible
    showRatio = isWhiteTunnelActive
      ? smoothstep(0, 0.15, whiteTunnelAstronautRatio)
      : isBlackTitleActive || isBlackTunnelActive
        ? 1
        : fit(astronautDropRatio, 0, 0.2, 1, 0)

    sharedUniforms.u_whiteTunnelRatio.value = whiteTunnelRatio
    sharedUniforms.u_showRatio.value = showRatio
    sharedUniforms.u_frameOutRatio.value = whiteFrameBreak
    baseMat.uniforms.u_ratio.value = whiteTunnelRatio
    wallMat.uniforms.u_ratio.value = whiteTunnelRatio
    baseMat.uniforms.u_ratioInverse.value = 1 - whiteTunnelRatio
    wallMat.uniforms.u_ratioInverse.value = 1 - whiteTunnelRatio

    // phase colors
    const toWhite = fit(whiteTunnelRatio, 0, 0.25, 0, 1)
    const bg = new THREE.Color().setStyle('#0b0b12').lerp(new THREE.Color('#f0f1fa'), toWhite)
    bgMatPlane.color.copy(bg)
    scene.background = bg
    renderer.setClearColor(bg, 1)
    sharedUniforms.u_bgColor.value.copy(bg)
    tunnelGroup.visible = isWhiteTunnelActive && astronautDropRatio < 1
    blackTunnelGroup.visible = isBlackTunnelActive
    blackTunnelGroup.position.z = fit(blackTunnelRatio, 0, 1, 0, 55)
    ringMat.opacity =
      fit(blackTunnelRatio, 0, 0.15, 0, 0.6) * fit(whiteTunnelRatio, 0, 0.4, 1, 0)

    // Path: Lusion updateTransforms — outAnim frames 0–79 then 79–99 on drop
    let path
    if (isWhiteTunnelActive) {
      const frame =
        whiteTunnelRatio < 1
          ? fit(whiteTunnelRatio, 0, 1, 0, 79)
          : fit(astronautDropRatio, 0, 1, 79, 99)
      path = samplePath(outAnim, frame / 99)
      path.p.y -= (isMobile ? 0 : 0.4) * easeBackInOut(astronautDropRatio)
    } else {
      // inAnim: frame = 100 * cubicIn(blackTitle)
      path = samplePath(inAnim, easeCubicIn(Math.min(blackTitleRatio, 1)))
    }
    instancePos.setXYZ(0, path.p.x, path.p.y, path.p.z)
    instanceOrient.setXYZW(0, path.q.x, path.q.y, path.q.z, path.q.w)
    instancePos.needsUpdate = true
    instanceOrient.needsUpdate = true
    astronautRoot.visible = showRatio > 0.02

    // camera — black tunnel fly-through then white dolly
    if (isWhiteTunnelActive) {
      camera.fov = fit(whiteTunnelRatio, 0, 1, 55, 28)
      camera.position.set(0, 0.15, fit(whiteTunnelRatio, 0, 1, 28, 12))
      camera.lookAt(0, 0, fit(whiteTunnelRatio, 0, 1, 16, -2))
    } else if (isBlackTunnelActive) {
      camera.fov = fit(blackTunnelRatio, 0, 1, 50, 32)
      camera.position.set(
        Math.sin(blackTunnelRatio * Math.PI * 2) * 0.35,
        0.1,
        fit(blackTunnelRatio, 0, 1, 22, 4)
      )
      camera.lookAt(0, 0, camera.position.z - 18)
    } else {
      // black title — slight pull from blackFrameIn
      camera.fov = fit(blackFrameInRatio, 0, 1, 42, 45)
      camera.position.set(0, 0.2, fit(blackFrameInRatio, 0, 1, 30, 26))
      camera.lookAt(0, 0, 14)
    }
    camera.updateProjectionMatrix()

    // title + body copy: owned by goalDom.js (Lusion HomeGoalSectionTunnelTitle)

    // sticky viewport visibility (section itself is thousands of vh tall)
    const stickyRect = stickyEl.getBoundingClientRect()
    active = stickyRect.bottom > 0 && stickyRect.top < vh
    sectionEl.dataset.goalPhase = isWhiteTunnelActive
      ? 'white'
      : isBlackTunnelActive
        ? 'black-tunnel'
        : 'title'
  }

  const onScroll = () => updateScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  updateScroll()

  const tick = (now) => {
    raf = requestAnimationFrame(tick)
    const dt = Math.min(0.05, (now - last) / 1000)
    last = now
    if (!active) return

    // bone loop — Lusion updateAnimation
    const r = whiteTunnelRatio
    const drop = astronautDropRatio
    let speed = fit(showRatio, 0, 1, 0, 0.75) * fit(blackTitleRatio, 0.2, 1, 0.35, 1)
    let loopFrom = 0
    let loopTo = 89
    if (r >= 0.5 || drop > 0) {
      speed = fit(Math.max(r, drop), 0.85, 1, 0.2, 1)
      loopFrom = 140
      loopTo = Math.min(frameCount - 1, 287)
    }
    animationTime += dt * speed
    const span = loopTo - loopFrom + 1
    const E = (animationTime * 60) % span
    const I = Math.floor(E) + loopFrom
    const F = ((Math.floor(E) + 1) % span) + loopFrom
    const blend = E - Math.floor(E)
    blend1.setXYZ(0, I, F, blend)
    blend1.needsUpdate = true

    // linear blend frames 90–139 driven by whiteFrameOut + drop (quartIn)
    const linearFrame = fit(whiteTunnelRatio + drop, 0.9, 2, 90, 139, easeQuartIn)
    const u = Math.floor(linearFrame)
    const f = Math.ceil(linearFrame)
    const p = linearFrame - u
    blend2.setXYZ(0, u, f, p)
    blend2.needsUpdate = true
    sharedUniforms.u_loopLinearBlend.value =
      fit(drop, 0, 0.1, 0, 1) * fit(drop, 0.9, 1, 1, 0)

    renderer.render(scene, camera)
  }
  raf = requestAnimationFrame(tick)

  // first paint after layout
  requestAnimationFrame(() => {
    resize()
    updateScroll()
    renderer.render(scene, camera)
  })

  return {
    resize,
    updateScroll,
    destroy() {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
      renderer.dispose()
    },
  }
}
