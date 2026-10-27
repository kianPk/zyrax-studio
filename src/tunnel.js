import * as THREE from 'three'
import { loadBuf } from './bufLoader.js'
import {
  createGoalRanges,
  fit,
  cUnMix,
  easeCubicIn,
  easeCubicInOut,
  easeExpoIn,
  easeSineIn,
  easeBackInOut,
  easeQuartIn,
  smoothstep,
} from './scrollRanges.js'
import {
  blackTunnelVert,
  blackTunnelFrag,
  whiteTunnelVert,
  whiteTunnelFrag,
  astronautWhiteFrag,
  astronautBlackFrag,
} from './tunnelShaders.js'

const BONE_COUNT = 53
const BLOCK_COUNT = 16
const GRID_SIZE = 20
const PARTS = ['helmet', 'helmet_glass', 'glove_shoes', 'wearpack']
const BLACK_COLOR_1 = ['#0d2b27', '#ba0000', '#00b5a6', '#0099ff']
const BLACK_COLOR_2 = ['#8c8c8c', '#008e6b', '#7e7f05', '#ff0000']

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

function toFloat3Attr(src) {
  const arr = src.array
  const out = new Float32Array(arr.length)
  for (let i = 0; i < arr.length; i++) out[i] = arr[i]
  return new THREE.InstancedBufferAttribute(out, 3)
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

export async function createGoalTunnel(canvas, sectionEl, titleEl) {
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth < 812
  const base = import.meta.env.BASE_URL
  const useHd = !isMobile

  const [
    animGeo,
    inAnim,
    outAnim,
    matcap,
    envMap,
    blockTex,
    blockBase,
    blockWall,
    gridBaseLd,
    gridStructureLd,
    gridBaseHd,
    gridStructureHd,
    greebleNor,
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
    loadBuf(`${base}assets/models/tunnels/grid_base_ld.buf`),
    loadBuf(`${base}assets/models/tunnels/grid_structure_ld.buf`),
    useHd
      ? loadBuf(`${base}assets/models/tunnels/grid_base_hd.buf`)
      : Promise.resolve(null),
    useHd
      ? loadBuf(`${base}assets/models/tunnels/grid_structure_hd.buf`)
      : Promise.resolve(null),
    new THREE.TextureLoader().loadAsync(`${base}assets/textures/tunnels/grids/greeble_nor.webp`),
    ...PARTS.map((p) => loadBuf(`${base}assets/models/tunnels/astronaut_${p}.buf`)),
  ])

  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x000000)
  // Lusion GoalTunnels Stage3D: defaultCamera (0,0,25) → lookAt (0,0,24), fov ~30
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 400)
  camera.position.set(0, 0, 25)
  camera.lookAt(0, 0, 24)

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
  renderer.setClearColor(0x000000, 1)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1 : 1.35))
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.autoClear = true

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

  const instancePos = new THREE.InstancedBufferAttribute(new Float32Array([0, 0, 18]), 3)
  instancePos.setUsage(THREE.DynamicDrawUsage)
  const instanceOrient = new THREE.InstancedBufferAttribute(new Float32Array([0, 0, 0, 1]), 4)
  instanceOrient.setUsage(THREE.DynamicDrawUsage)
  const blend1 = new THREE.InstancedBufferAttribute(new Float32Array([0, 1, 0]), 3)
  blend1.setUsage(THREE.DynamicDrawUsage)
  const blend2 = new THREE.InstancedBufferAttribute(new Float32Array([90, 91, 0]), 3)
  blend2.setUsage(THREE.DynamicDrawUsage)

  // feedback + astronaut env (Lusion copies black tunnel RT → blur → astronaut)
  const feedbackRT = new THREE.WebGLRenderTarget(1, 1, {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    format: THREE.RGBAFormat,
  })
  feedbackRT.texture.wrapS = feedbackRT.texture.wrapT = THREE.MirroredRepeatWrapping

  const sharedUniforms = {
    u_animationPositionTexture: { value: animPosTex },
    u_animationOrientTexture: { value: animOriTex },
    u_animationTextureSize: { value: new THREE.Vector2(texW, texH) },
    u_loopLinearBlend: { value: 0 },
    u_matcapTexture: { value: matcap },
    u_envTexture: { value: envMap },
    u_ambientColor: { value: new THREE.Color('#566d80') },
    u_bgColor: { value: new THREE.Color('#000000') },
    u_sunPosition: { value: new THREE.Vector3(-20, 0, 22) },
    u_showRatio: { value: 0 },
    u_whiteTunnelRatio: { value: 0 },
    u_frameOutRatio: { value: 0 },
    u_tintColor: { value: new THREE.Color(0, 0, 0) },
    u_time: { value: 0 },
  }

  const blackAstroUniforms = {
    u_blackTunnelTexture: { value: feedbackRT.texture },
    u_sunFactor: { value: 1 },
    u_blackTunnelRatio: { value: 0 },
    u_offsetZ: { value: 0 },
    u_frameIn: { value: 0 },
    u_endRatio: { value: 0 },
  }

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
  const astronautMeshes = []

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
    const whiteUniforms = {
      ...sharedUniforms,
      u_armbTexture: { value: partTex[texKey].armb },
      u_norTexture: { value: partTex[texKey].nor },
    }
    const blackUniformsAstro = {
      ...sharedUniforms,
      ...blackAstroUniforms,
      u_armbTexture: { value: partTex[texKey].armb },
      u_norTexture: { value: partTex[texKey].nor },
    }
    const whiteMat = new THREE.ShaderMaterial({
      uniforms: whiteUniforms,
      vertexShader: astronautVert,
      fragmentShader: isGlass ? glassFrag : astronautWhiteFrag,
      transparent: isGlass,
      side: THREE.DoubleSide,
      defines: { BONE_COUNT, ...(isGlass ? { IS_HELMET_GLASS: true } : {}) },
    })
    const blackMat = new THREE.ShaderMaterial({
      uniforms: blackUniformsAstro,
      vertexShader: astronautVert,
      fragmentShader: isGlass ? glassFrag : astronautBlackFrag,
      transparent: isGlass,
      side: THREE.DoubleSide,
      defines: { BONE_COUNT, IS_BLACK: true },
    })
    const mesh = new THREE.Mesh(ig, whiteMat)
    mesh.frustumCulled = false
    mesh.userData.whiteMat = whiteMat
    mesh.userData.blackMat = blackMat
    astronautRoot.add(mesh)
    astronautMeshes.push(mesh)
  })

  // —— White tunnel (Lusion GoalWhiteTunnel) ——
  const tunnelGroup = new THREE.Group()
  scene.add(tunnelGroup)
  const fbmPos = new THREE.Vector3()
  let tunnelTime = 0
  let tunnelDeltaTime = 1
  let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0
  let scrollDir = 1

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
        u_fbm: { value: fbmPos },
        u_time: { value: 0 },
      },
      vertexShader: whiteTunnelVert,
      fragmentShader: whiteTunnelFrag,
      transparent: true,
      extensions: { derivatives: true },
      defines: { BLOCK_COUNT, ...(isWall ? { IS_WALL: true } : {}) },
    })
    const mesh = new THREE.Mesh(ig, mat)
    mesh.frustumCulled = false
    tunnelGroup.add(mesh)
    return mat
  }
  const baseMat = makeBlockMesh(blockBase, false)
  const wallMat = makeBlockMesh(blockWall, true)

  const bgMatPlane = new THREE.MeshBasicMaterial({ color: 0x000000 })
  const bgPlane = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), bgMatPlane)
  bgPlane.position.z = -80
  scene.add(bgPlane)

  // —— Black tunnel (Lusion GoalBlackTunnel grid_ld + grid_hd) ——
  const blackTunnelGroup = new THREE.Group()
  scene.add(blackTunnelGroup)

  const greebleArmb = await makeArmbTexture(
    `${base}assets/textures/tunnels/grids/greeble_arm.webp`,
    `${base}assets/textures/tunnels/grids/greeble_base.webp`
  )
  greebleArmb.wrapS = greebleArmb.wrapT = THREE.RepeatWrapping
  greebleNor.colorSpace = THREE.NoColorSpace
  greebleNor.flipY = false
  greebleNor.wrapS = greebleNor.wrapT = THREE.RepeatWrapping

  const blackUniforms = {
    u_time: { value: 0 },
    u_showRatio: { value: 0 },
    u_offsetZ: { value: 0 },
    u_blackTunnelTransformRatio: { value: 0 },
    u_feedbackTexture: { value: feedbackRT.texture },
    u_greebleArmbTexture: { value: greebleArmb },
    u_greebleNormalTexture: { value: greebleNor },
    u_resolution: { value: new THREE.Vector2(1, 1) },
    u_outRatio: { value: 0 },
    u_outBloomFromToStrength: { value: new THREE.Vector3(0, 70, 0) },
    u_color1: { value: new THREE.Color(BLACK_COLOR_1[0]) },
    u_color2: { value: new THREE.Color(BLACK_COLOR_2[0]) },
  }

  const makeBlackGridMesh = (baseGeo, structureGeo, isHd) => {
    const ig = new THREE.InstancedBufferGeometry()
    for (const key in baseGeo.attributes) ig.setAttribute(key, baseGeo.attributes[key])
    if (baseGeo.index) ig.setIndex(baseGeo.index)
    const vCount = baseGeo.attributes.position.count
    if (!ig.getAttribute('ao')) {
      ig.setAttribute('ao', new THREE.BufferAttribute(new Float32Array(vCount).fill(1), 1))
    }
    if (!ig.getAttribute('areaRatio')) {
      ig.setAttribute('areaRatio', new THREE.BufferAttribute(new Float32Array(vCount), 1))
    }
    if (!ig.getAttribute('height')) {
      ig.setAttribute('height', new THREE.BufferAttribute(new Float32Array(vCount).fill(1), 1))
    }
    if (!ig.getAttribute('cluster')) {
      ig.setAttribute('cluster', new THREE.BufferAttribute(new Float32Array(vCount), 1))
    }
    ig.setAttribute('instancePos', toFloat3Attr(structureGeo.attributes.position))
    ig.setAttribute('instanceGridIds', toFloat3Attr(structureGeo.attributes.gridIds))
    ig.setAttribute('instanceAxis', toFloat3Attr(structureGeo.attributes.rotAxis))
    ig.instanceCount = structureGeo.attributes.position.count

    const mat = new THREE.ShaderMaterial({
      uniforms: blackUniforms,
      vertexShader: blackTunnelVert,
      fragmentShader: blackTunnelFrag,
      side: THREE.DoubleSide,
      transparent: true,
      depthWrite: false,
      defines: { GRID_SIZE, ...(isHd ? { IS_HD: true } : {}) },
    })
    const mesh = new THREE.Mesh(ig, mat)
    mesh.frustumCulled = false
    mesh.renderOrder = isHd ? 2 : 1
    blackTunnelGroup.add(mesh)
    return mesh
  }

  makeBlackGridMesh(gridBaseLd, gridStructureLd, false)
  if (useHd && gridBaseHd && gridStructureHd) {
    makeBlackGridMesh(gridBaseHd, gridStructureHd, true)
  }

  let blackPulseTime = 0
  let blackLinearTime = 0
  let cameraDollyZoomFovOffset = 0
  let cameraDistance = 25
  // Brownian-ish motion state (Lusion astronaut shake)
  const motionPos = new THREE.Vector3()
  const motionEuler = new THREE.Euler()
  const motionQ = new THREE.Quaternion()
  const tmpQ = new THREE.Quaternion()
  const colorA = new THREE.Color()
  const colorB = new THREE.Color()

  const stickyEl = canvas.parentElement || sectionEl
  const ranges = createGoalRanges(sectionEl)
  let whiteTunnelRatio = 0
  let showRatio = 0
  let blackTitleRatio = 0
  let blackTunnelRatio = 0
  let blackFrameInRatio = 0
  let whiteFrameBreak = 0
  let whiteFrameRatio = 0
  let astronautDropRatio = 0
  let isBlackTitleActive = true
  let isBlackTunnelActive = false
  let isWhiteTunnelActive = false
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
    blackUniforms.u_resolution.value.set(w, h)
    const fw = Math.max(1, Math.floor(w * 0.25))
    const fh = Math.max(1, Math.floor(h * 0.25))
    if (feedbackRT.width !== fw || feedbackRT.height !== fh) {
      feedbackRT.setSize(fw, fh)
    }
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
    const sy = window.scrollY || 0
    if (sy !== lastScrollY) {
      scrollDir = sy > lastScrollY ? 1 : -1
      lastScrollY = sy
    }

    blackFrameInRatio = ranges.range('blackFrameIn').ratio
    blackTitleRatio = ranges.range('blackTitle').ratio
    blackTunnelRatio = ranges.range('blackTunnel').ratio
    whiteFrameRatio = ranges.range('whiteTunnel').ratio
    whiteTunnelRatio = ranges.between('whiteTunnel', 'whiteFrameOut').ratio
    whiteFrameBreak = ranges.range('whiteFrameBreak').ratio
    const whiteTunnelAstronautRatio = ranges.between('whiteTunnel', 'whiteFrameBreak').ratio
    astronautDropRatio = ranges.between('whiteFrameBreak', 'astronautDrop').ratio

    isBlackTitleActive = blackTitleRatio < 1
    isBlackTunnelActive = blackTunnelRatio < 1 && !isBlackTitleActive
    isWhiteTunnelActive =
      whiteTunnelRatio <= 1 && !isBlackTunnelActive && !isBlackTitleActive

    // Lusion astronaut showRatio
    showRatio = isWhiteTunnelActive
      ? smoothstep(0, 0.15, whiteTunnelAstronautRatio)
      : 1

    sharedUniforms.u_whiteTunnelRatio.value = whiteTunnelRatio
    sharedUniforms.u_showRatio.value = showRatio
    sharedUniforms.u_frameOutRatio.value = whiteFrameBreak
    baseMat.uniforms.u_ratio.value = whiteTunnelRatio
    wallMat.uniforms.u_ratio.value = whiteTunnelRatio
    baseMat.uniforms.u_ratioInverse.value = 1 - whiteTunnelRatio
    wallMat.uniforms.u_ratioInverse.value = 1 - whiteTunnelRatio

    // phase colors — pure black / white like Lusion
    const bg = new THREE.Color(
      isWhiteTunnelActive && astronautDropRatio < 1 ? '#ffffff' : '#000000'
    )
    bgMatPlane.color.copy(bg)
    scene.background = bg
    renderer.setClearColor(bg, 1)
    sharedUniforms.u_bgColor.value.copy(bg)
    tunnelGroup.visible = isWhiteTunnelActive && astronautDropRatio < 1
    blackTunnelGroup.visible = isBlackTunnelActive

    // Switch astronaut materials (Lusion white vs black)
    const useWhiteMat = isWhiteTunnelActive
    for (const mesh of astronautMeshes) {
      const next = useWhiteMat ? mesh.userData.whiteMat : mesh.userData.blackMat
      if (mesh.material !== next) mesh.material = next
    }

    // Path: Lusion updateTransforms
    let path
    if (isWhiteTunnelActive) {
      const frame =
        whiteTunnelRatio < 1
          ? fit(whiteTunnelRatio, 0, 1, 0, 79)
          : fit(astronautDropRatio, 0, 1, 79, 99)
      path = samplePath(outAnim, frame / 99)
      path.p.y -= (isMobile ? 0 : 0.4) * easeBackInOut(astronautDropRatio)
    } else {
      path = samplePath(inAnim, easeCubicIn(Math.min(blackTitleRatio, 1)))
    }

    // Lusion BrownianMotion shake during black/white tunnel
    let posAmp = 0
    let rotAmp = 0
    let posFreq = 0.2
    let rotFreq = 0.15
    if (isBlackTunnelActive) {
      const I = blackTunnelRatio
      posFreq = 0.2 + 0.5 * I
      rotFreq = 0.15
      posAmp = 5 * I
      rotAmp = 60 * I
    } else if (isWhiteTunnelActive) {
      posFreq = fit(whiteFrameRatio, 0, 0.45, 0.5, 0.2)
      rotFreq = fit(whiteFrameRatio, 0, 0.45, 0.4, 0.15)
      posAmp = fit(whiteFrameRatio, 0, 0.75, 5, 0)
      rotAmp = fit(whiteFrameRatio, 0, 0.75, 15, 0)
    }
    motionPos.set(
      Math.sin(tunnelTime * posFreq * 5.1) * posAmp * 0.08 +
        Math.sin(tunnelTime * posFreq * 2.3) * posAmp * 0.05,
      Math.sin(tunnelTime * posFreq * 3.7 + 1.2) * posAmp * 0.08,
      Math.sin(tunnelTime * posFreq * 4.4 + 0.7) * posAmp * 0.06
    )
    motionEuler.set(
      (Math.sin(tunnelTime * rotFreq * 3.1) * rotAmp * Math.PI) / 180,
      (Math.sin(tunnelTime * rotFreq * 2.4 + 0.8) * rotAmp * Math.PI) / 180,
      (Math.sin(tunnelTime * rotFreq * 1.7 + 1.5) * rotAmp * Math.PI) / 180
    )
    motionQ.setFromEuler(motionEuler)
    path.p.add(motionPos)
    tmpQ.copy(path.q).multiply(motionQ)

    instancePos.setXYZ(0, path.p.x, path.p.y, path.p.z)
    instanceOrient.setXYZW(0, tmpQ.x, tmpQ.y, tmpQ.z, tmpQ.w)
    instancePos.needsUpdate = true
    instanceOrient.needsUpdate = true
    astronautRoot.visible = showRatio > 0.02

    // —— Lusion Stage3D camera: fixed look-forward + dolly-zoom FOV ——
    if (isWhiteTunnelActive) {
      cameraDollyZoomFovOffset = fit(whiteTunnelRatio, 0, 1, 60, 0)
    } else if (isBlackTunnelActive) {
      cameraDollyZoomFovOffset =
        Math.sin(blackTunnelRatio * 10 + tunnelTime) *
        7.5 *
        smoothstep(0, 0.2, blackTunnelRatio)
      // container.z = -80 * cUnMix(0.2, 0, blackTunnelRatio)
      blackTunnelGroup.position.z = -80 * cUnMix(0.2, 0, blackTunnelRatio)
    } else {
      cameraDollyZoomFovOffset = fit(blackFrameInRatio, 0, 1, 20, 0)
      blackTunnelGroup.position.z = -80
    }

    const baseFov = 30
    const fov = baseFov + cameraDollyZoomFovOffset
    const prevFov = camera.fov || baseFov
    camera.fov = fov
    let dist = cameraDistance
    dist =
      (dist * Math.tan(((prevFov / 360) * Math.PI) / 2)) /
        Math.tan(((fov / 360) * Math.PI) / 2) || dist
    camera.position.set(0, 0, dist)
    camera.lookAt(0, 0, dist - 1)
    cameraDistance = dist
    camera.updateProjectionMatrix()

    // black astronaut uniforms (scroll-linked)
    blackAstroUniforms.u_frameIn.value = blackFrameInRatio
    blackAstroUniforms.u_sunFactor.value = isBlackTunnelActive
      ? 1 - smoothstep(0.1, 0.2, blackTunnelRatio)
      : 1
    blackAstroUniforms.u_blackTunnelRatio.value = isBlackTunnelActive
      ? smoothstep(0.1, 0.3, blackTunnelRatio)
      : 0
    blackAstroUniforms.u_endRatio.value = isBlackTunnelActive
      ? smoothstep(0.65, 0.9, blackTunnelRatio)
      : 0
    blackAstroUniforms.u_offsetZ.value = blackUniforms.u_offsetZ.value

    // tint near drop (Lusion white tint)
    const tintStrength =
      fit(astronautDropRatio, 1, 0, 0.2, 1) * (whiteFrameBreak > 0 ? 1 : 0)
    sharedUniforms.u_tintColor.value.setStyle('#2533c2').multiplyScalar(tintStrength)

    const stickyRect = stickyEl.getBoundingClientRect()
    active = stickyRect.bottom > 0 && stickyRect.top < vh
    sectionEl.dataset.goalPhase = isWhiteTunnelActive
      ? 'white'
      : isBlackTunnelActive
        ? 'black-tunnel'
        : 'title'
  }

  /** Lusion GoalBlackTunnel.update — offsetZ, show, colors, transform */
  const updateBlackTunnel = (dt) => {
    if (!isBlackTunnelActive) {
      blackUniforms.u_showRatio.value = 0
      return
    }
    blackUniforms.u_showRatio.value = easeExpoIn(cUnMix(0, 0.1, blackTunnelRatio))

    const bloom = blackUniforms.u_outBloomFromToStrength.value
    bloom.z = fit(blackTunnelRatio, 0.65, 0.75, 0, 0.2)
    bloom.z = fit(blackTunnelRatio, 0.75, 0.85, bloom.z, 0.15)
    bloom.z = fit(blackTunnelRatio, 0.85, 1, bloom.z, 0.15)
    bloom.x = fit(blackTunnelRatio, 0.75, 0.85, 20, 60)
    bloom.x = fit(blackTunnelRatio, 0.9, 1, bloom.x, 30)

    const transformRatio = fit(blackTunnelRatio, 0.6, 1, 0, 1, easeSineIn)
    blackUniforms.u_blackTunnelTransformRatio.value = transformRatio

    const signedDt = scrollDir * tunnelDeltaTime
    blackPulseTime +=
      signedDt * cUnMix(0.1, 0.3, blackTunnelRatio) * fit(transformRatio, 0, 0.25, 1, 0.5)
    blackLinearTime += signedDt * fit(transformRatio, 0, 0.25, 1.5, 1)

    const f = blackPulseTime
    const p = Math.floor(f)
    const g = f - p
    const offsetZ =
      (p + easeCubicInOut(g)) * GRID_SIZE +
      blackLinearTime * GRID_SIZE +
      blackTunnelRatio * GRID_SIZE * 10
    blackUniforms.u_offsetZ.value = offsetZ
    blackAstroUniforms.u_offsetZ.value = offsetZ
    blackUniforms.u_time.value = tunnelTime

    // color cycling
    const T = BLACK_COLOR_1.length * fit(blackTunnelRatio, 0.2, 1, 0, 1)
    const M = Math.floor(T)
    const S = Math.min(Math.ceil(T), BLACK_COLOR_1.length - 1)
    const b = T - M
    const snap = b > 0.5 ? 1 : 0
    colorA.set(BLACK_COLOR_1[M])
    colorB.set(BLACK_COLOR_1[S])
    colorA.lerp(colorB, snap)
    blackUniforms.u_color1.value.copy(colorA)
    colorA.set(BLACK_COLOR_2[M])
    colorB.set(BLACK_COLOR_2[S])
    colorA.lerp(colorB, snap)
    blackUniforms.u_color2.value.copy(colorA)

    // FOV pulse also set in updateScroll; reinforce with live time
    cameraDollyZoomFovOffset =
      Math.sin(blackTunnelRatio * 10 + tunnelTime) *
      7.5 *
      smoothstep(0, 0.2, blackTunnelRatio)
  }

  const updateWhiteTunnel = (dt) => {
    if (!isWhiteTunnelActive) return
    // Approximate Lusion BrownianMotion for white tunnel occlusion sphere
    fbmPos.set(
      Math.sin(tunnelTime * 1.1) * 1.4 + Math.sin(tunnelTime * 2.4) * 0.6,
      Math.cos(tunnelTime * 0.9) * 1.2 + Math.sin(tunnelTime * 1.7) * 0.5,
      Math.sin(tunnelTime * 1.3 + 0.5) * 0.8
    )
    baseMat.uniforms.u_time.value = tunnelTime
    wallMat.uniforms.u_time.value = tunnelTime
    baseMat.uniforms.u_fbm.value = fbmPos
    wallMat.uniforms.u_fbm.value = fbmPos
  }

  const onScroll = () => updateScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  updateScroll()

  const tick = (now) => {
    raf = requestAnimationFrame(tick)
    const dt = Math.min(0.05, (now - last) / 1000)
    last = now
    if (!active) return

    tunnelDeltaTime = dt
    tunnelTime += tunnelDeltaTime
    sharedUniforms.u_time.value = tunnelTime

    updateBlackTunnel(dt)
    updateWhiteTunnel(dt)

    // keep FOV live during black tunnel pulse
    if (isBlackTunnelActive) {
      const baseFov = 30
      const fov = baseFov + cameraDollyZoomFovOffset
      const prevFov = camera.fov || baseFov
      camera.fov = fov
      let dist = cameraDistance
      dist =
        (dist * Math.tan(((prevFov / 360) * Math.PI) / 2)) /
          Math.tan(((fov / 360) * Math.PI) / 2) || dist
      camera.position.set(0, 0, dist)
      camera.lookAt(0, 0, dist - 1)
      cameraDistance = dist
      camera.updateProjectionMatrix()
    }

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

    const linearFrame = fit(whiteTunnelRatio + drop, 0.9, 2, 90, 139, easeQuartIn)
    const u = Math.floor(linearFrame)
    const f = Math.ceil(linearFrame)
    const p = linearFrame - u
    blend2.setXYZ(0, u, f, p)
    blend2.needsUpdate = true
    sharedUniforms.u_loopLinearBlend.value =
      fit(drop, 0, 0.1, 0, 1) * fit(drop, 0.9, 1, 1, 0)

    // Feedback: render black tunnel alone into low-res RT for trail + astronaut env
    if (isBlackTunnelActive) {
      const prevBg = scene.background
      astronautRoot.visible = false
      tunnelGroup.visible = false
      bgPlane.visible = false
      scene.background = new THREE.Color(0x000000)
      renderer.setRenderTarget(feedbackRT)
      renderer.setClearColor(0x000000, 1)
      renderer.clear()
      renderer.render(scene, camera)
      renderer.setRenderTarget(null)
      astronautRoot.visible = showRatio > 0.02
      tunnelGroup.visible = false
      bgPlane.visible = true
      scene.background = prevBg
      blackUniforms.u_feedbackTexture.value = feedbackRT.texture
      blackAstroUniforms.u_blackTunnelTexture.value = feedbackRT.texture
    }

    renderer.setClearColor(sharedUniforms.u_bgColor.value, 1)
    renderer.render(scene, camera)
  }
  raf = requestAnimationFrame(tick)

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
      feedbackRT.dispose()
      renderer.dispose()
    },
  }
}
