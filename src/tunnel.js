import * as THREE from 'three'
import { loadBuf } from './bufLoader.js'
import {
  createGoalRanges,
  fit,
  clamp,
  cUnMix,
  easeCubicIn,
  easeCubicInOut,
  easeExpoIn,
  easeSineIn,
  easeSineOut,
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
  astronautCardFrag,
} from './tunnelShaders.js'
import { createTunnelPost } from './tunnelPost.js'
import { BrownianMotion, SecondOrderDynamics, Simple1DNoise } from './lusionMotion.js'
import { easeSineInOut } from './scrollMath.js'
import { createWhiteTunnelExtras } from './whiteTunnelExtras.js'
import { createBrokenGlass } from './brokenGlass.js'
import { createFrameBg } from './frameBg.js'

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
  // Pack like Lusion textureHelper.mixChannels: arm RGB + base.R → A
  // Use DataTexture (no canvas upload / mip bleed) so AO/albedo stay exact.
  const [arm, base] = await Promise.all([loadImage(armUrl), loadImage(baseUrl)])
  const w = arm.width
  const h = arm.height
  const c = document.createElement('canvas')
  c.width = w
  c.height = h
  const ctx = c.getContext('2d', { willReadFrequently: true })
  ctx.drawImage(base, 0, 0, w, h)
  const baseData = ctx.getImageData(0, 0, w, h).data
  ctx.clearRect(0, 0, w, h)
  ctx.drawImage(arm, 0, 0, w, h)
  const armData = ctx.getImageData(0, 0, w, h).data
  const packed = new Uint8Array(w * h * 4)
  for (let i = 0; i < packed.length; i += 4) {
    packed[i] = armData[i]
    packed[i + 1] = armData[i + 1]
    packed[i + 2] = armData[i + 2]
    packed[i + 3] = baseData[i] // albedo
  }
  const tex = new THREE.DataTexture(packed, w, h, THREE.RGBAFormat, THREE.UnsignedByteType)
  tex.colorSpace = THREE.NoColorSpace
  tex.flipY = false
  // Mips keep the distant/small suit sharp instead of shimmering LinearFilter aliasing
  tex.generateMipmaps = true
  tex.minFilter = THREE.LinearMipmapLinearFilter
  tex.magFilter = THREE.LinearFilter
  tex.anisotropy = 8
  tex.wrapS = THREE.ClampToEdgeWrapping
  tex.wrapT = THREE.ClampToEdgeWrapping
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
    earthCardGeo,
    earthLandscape,
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
    // Lusion GoalTunnelsBackground — Earth plate behind the astronaut in the tablet
    loadBuf(`${base}assets/models/tunnels/earth_card.buf`),
    new THREE.TextureLoader().loadAsync(
      `${base}assets/textures/tunnels/earth_landscape.jpg`
    ),
    ...PARTS.map((p) => loadBuf(`${base}assets/models/tunnels/astronaut_${p}.buf`)),
  ])

  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x000000)
  // Lusion GoalTunnels: defaultCamera (0,0,25) → lookAt (0,0,24), expectedFov 45
  // CameraControls keeps FOV at cameraFov and applies dolly via translateZ
  const DEFAULT_CAM = new THREE.Vector3(0, 0, 25)
  const DEFAULT_LOOK = new THREE.Vector3(0, 0, 24)
  const EXPECTED_FOV = 45
  const camera = new THREE.PerspectiveCamera(EXPECTED_FOV, 1, 1, 200)
  camera.position.copy(DEFAULT_CAM)
  camera.lookAt(DEFAULT_LOOK)

  let renderer
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      // Scene MSAA (post RT samples:4) already softens edges — canvas AA
      // doubles the resolve cost on mobile with no visible quality gain.
      antialias: false,
      alpha: false,
      powerPreference: 'high-performance',
      failIfMajorPerformanceCaveat: false,
    })
  } catch (err) {
    console.error('Goal WebGL unavailable', err)
    throw err
  }
  renderer.setClearColor(0x000000, 1)
  // Mobile: full DPR (capped 2.5) so suit/visor stay sharp on retina
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 2.5 : 1.75))
  // Lusion Stage3D writes display-referred colors in custom shaders with no
  // Linear→sRGB pass. Keep output linear so the entry suit isn't crushed.
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace
  renderer.toneMapping = THREE.NoToneMapping
  renderer.autoClear = true
  // Post stack created after scene/camera exist (below)

  matcap.colorSpace = THREE.NoColorSpace
  matcap.generateMipmaps = false
  matcap.minFilter = THREE.LinearFilter
  matcap.magFilter = THREE.LinearFilter
  // Sample earth as raw bytes (custom ShaderMaterial — match Lusion, no sRGB decode)
  envMap.colorSpace = THREE.NoColorSpace
  envMap.generateMipmaps = false
  envMap.minFilter = THREE.LinearFilter
  envMap.magFilter = THREE.LinearFilter
  // Lusion samples white_block as raw bytes (shade.r drives blue×albedo).
  // sRGB decode flattens midtones and kills cobalt crevices.
  blockTex.colorSpace = THREE.NoColorSpace
  blockTex.wrapS = blockTex.wrapT = THREE.RepeatWrapping
  blockTex.generateMipmaps = false
  blockTex.minFilter = THREE.LinearFilter
  blockTex.magFilter = THREE.LinearFilter

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

  // feedback ping-pong + Lusion dual blur (16 then 4) before astronaut env sampling
  const makeFeedbackRT = () => {
    const rt = new THREE.WebGLRenderTarget(1, 1, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      generateMipmaps: false,
    })
    rt.texture.wrapS = rt.texture.wrapT = THREE.MirroredRepeatWrapping
    return rt
  }
  const feedbackRT = makeFeedbackRT()
  const feedbackRT2 = makeFeedbackRT()
  const feedbackBlurRT = makeFeedbackRT()
  let feedbackRead = feedbackRT
  let feedbackWrite = feedbackRT2
  const feedbackBlurFrag = /* glsl */ `
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
}`
  const feedbackBlurQuadVert = /* glsl */ `
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`
  const feedbackBlurMat = new THREE.ShaderMaterial({
    uniforms: {
      u_texture: { value: null },
      u_direction: { value: new THREE.Vector2(1, 0) },
      u_resolution: { value: new THREE.Vector2(1, 1) },
    },
    vertexShader: feedbackBlurQuadVert,
    fragmentShader: feedbackBlurFrag,
    depthTest: false,
    depthWrite: false,
    toneMapped: false,
  })
  const feedbackBlurCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
  const feedbackBlurScene = new THREE.Scene()
  const feedbackBlurQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), feedbackBlurMat)
  feedbackBlurScene.add(feedbackBlurQuad)
  const blurFeedback = (src, radius) => {
    const w = Math.max(1, src.width)
    const h = Math.max(1, src.height)
    feedbackBlurMat.uniforms.u_resolution.value.set(w, h)
    feedbackBlurMat.uniforms.u_texture.value = src.texture
    feedbackBlurMat.uniforms.u_direction.value.set(radius, 0)
    renderer.setRenderTarget(feedbackBlurRT)
    renderer.clear()
    renderer.render(feedbackBlurScene, feedbackBlurCam)
    feedbackBlurMat.uniforms.u_texture.value = feedbackBlurRT.texture
    feedbackBlurMat.uniforms.u_direction.value.set(0, radius)
    renderer.setRenderTarget(src)
    renderer.clear()
    renderer.render(feedbackBlurScene, feedbackBlurCam)
    renderer.setRenderTarget(null)
  }

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
    // Face LED panel light (Lusion whiteTunnelUniforms)
    u_faceLedLight: { value: 0 },
    u_faceLedColor: { value: new THREE.Color('#aaaafb') },
    u_cardPosition: { value: new THREE.Vector3() },
  }

  const blackAstroUniforms = {
    u_blackTunnelTexture: { value: feedbackRead.texture },
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
      nor.generateMipmaps = true
      nor.minFilter = THREE.LinearMipmapLinearFilter
      nor.magFilter = THREE.LinearFilter
      nor.anisotropy = 8
      partTex[part] = { armb, nor }
    })
  )
  const maxAniso = renderer.capabilities.getMaxAnisotropy?.() || 8
  for (const key of Object.keys(partTex)) {
    const { armb, nor } = partTex[key]
    if (armb) { armb.anisotropy = Math.min(8, maxAniso); armb.needsUpdate = true }
    if (nor) { nor.anisotropy = Math.min(8, maxAniso); nor.needsUpdate = true }
  }
  partTex.helmet_glass = partTex.helmet

  const astronautRoot = new THREE.Group()
  scene.add(astronautRoot)
  const astronautMeshes = []
  const CLONE_COUNT = 4
  const clonePos = new THREE.InstancedBufferAttribute(new Float32Array(CLONE_COUNT * 3), 3)
  clonePos.setUsage(THREE.DynamicDrawUsage)
  const cloneOrient = new THREE.InstancedBufferAttribute(new Float32Array(CLONE_COUNT * 4), 4)
  cloneOrient.setUsage(THREE.DynamicDrawUsage)
  const cloneBlend1 = new THREE.InstancedBufferAttribute(new Float32Array(CLONE_COUNT * 3), 3)
  cloneBlend1.setUsage(THREE.DynamicDrawUsage)
  const cloneBlend2 = new THREE.InstancedBufferAttribute(new Float32Array(CLONE_COUNT * 3), 3)
  cloneBlend2.setUsage(THREE.DynamicDrawUsage)
  // init clone orients to identity
  for (let i = 0; i < CLONE_COUNT; i++) {
    cloneOrient.setXYZW(i, 0, 0, 0, 1)
    cloneBlend1.setXYZ(i, 0, 1, 0)
    cloneBlend2.setXYZ(i, 90, 91, 0)
  }
  const cloneMeshes = []
  let clonesShowRatio = 0
  const cloneAlphaUniform = { value: 0 }

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
    // Lusion: helmet_glass uses same fragWhite/fragBlack + IS_HELMET_GLASS
    // (skips env add). Custom fresnel glass was blowing the visor white.
    const whiteMat = new THREE.ShaderMaterial({
      uniforms: whiteUniforms,
      vertexShader: astronautVert,
      fragmentShader: astronautWhiteFrag,
      transparent: true,
      blending: THREE.NoBlending,
      side: THREE.DoubleSide,
      defines: { BONE_COUNT, IS_WHITE: true, ...(isGlass ? { IS_HELMET_GLASS: true } : {}) },
    })
    const blackMat = new THREE.ShaderMaterial({
      uniforms: blackUniformsAstro,
      vertexShader: astronautVert,
      fragmentShader: astronautBlackFrag,
      transparent: true,
      blending: THREE.NoBlending,
      side: THREE.DoubleSide,
      // Glass: skip earth env on black too (same as white IS_HELMET_GLASS) so the
      // entry visor stays the dark Lusion silhouette instead of reflecting earth.webp.
      defines: {
        BONE_COUNT,
        IS_BLACK: true,
        ...(isGlass ? { IS_HELMET_GLASS: true } : {}),
      },
    })
    const mesh = new THREE.Mesh(ig, whiteMat)
    mesh.frustumCulled = false
    mesh.userData.whiteMat = whiteMat
    mesh.userData.blackMat = blackMat
    astronautRoot.add(mesh)
    astronautMeshes.push(mesh)

    // Lusion clones — additive ghosts during black tunnel
    if (!isGlass) {
      const cig = new THREE.InstancedBufferGeometry()
      for (const key in geo.attributes) cig.setAttribute(key, geo.attributes[key])
      if (geo.index) cig.setIndex(geo.index)
      cig.instanceCount = CLONE_COUNT
      cig.setAttribute('instancePos', clonePos)
      cig.setAttribute('instanceOrient', cloneOrient)
      cig.setAttribute('instanceAnimationFrameFromToBlend1', cloneBlend1)
      cig.setAttribute('instanceAnimationFrameFromToBlend2', cloneBlend2)
      const cloneMat = new THREE.ShaderMaterial({
        uniforms: {
          ...blackUniformsAstro,
          u_armbTexture: { value: partTex[texKey].armb },
          u_norTexture: { value: partTex[texKey].nor },
          u_alpha: cloneAlphaUniform,
        },
        vertexShader: astronautVert,
        fragmentShader: astronautBlackFrag,
        transparent: true,
        depthWrite: false,
        depthTest: false,
        // Lusion clones: CustomBlending One/One
        blending: THREE.CustomBlending,
        blendEquation: THREE.AddEquation,
        blendSrc: THREE.OneFactor,
        blendDst: THREE.OneFactor,
        blendEquationAlpha: THREE.AddEquation,
        blendSrcAlpha: THREE.OneFactor,
        blendDstAlpha: THREE.OneFactor,
        side: THREE.DoubleSide,
        defines: { BONE_COUNT, IS_BLACK: true, IS_CLONE: true },
      })
      const cmesh = new THREE.Mesh(cig, cloneMat)
      cmesh.frustumCulled = false
      cmesh.renderOrder = 1000
      cmesh.visible = false
      astronautRoot.add(cmesh)
      cloneMeshes.push(cmesh)
    }
  })

  // —— Face LED card (Lusion partId "card") — Plane 0.2×0.15 on helmet bone 0 ——
  const cardTextureSize = new THREE.Vector2(5, 23)
  const cardNoise = new Simple1DNoise()
  let cardTime = 0
  let isCardActive = false
  const ledCanvas = document.createElement('canvas')
  ledCanvas.width = ledCanvas.height = 11
  {
    const lctx = ledCanvas.getContext('2d')
    lctx.fillStyle = '#000'
    lctx.fillRect(0, 0, 11, 11)
    lctx.fillStyle = '#f00'
    lctx.fillRect(1, 1, 3, 9)
    lctx.fillStyle = '#0f0'
    lctx.fillRect(4, 1, 3, 9)
    lctx.fillStyle = '#00f'
    lctx.fillRect(7, 1, 3, 9)
  }
  const ledTex = new THREE.CanvasTexture(ledCanvas)
  ledTex.needsUpdate = true
  ledTex.minFilter = THREE.LinearFilter
  ledTex.magFilter = THREE.LinearFilter
  const faceTex = await new THREE.TextureLoader().loadAsync(
    `${base}assets/textures/tunnels/astronaut/face.png`
  )
  faceTex.minFilter = THREE.NearestFilter
  faceTex.magFilter = THREE.NearestFilter
  faceTex.colorSpace = THREE.NoColorSpace
  faceTex.flipY = false
  const cardGeo = new THREE.PlaneGeometry(0.2, 0.15).translate(0, 1.68, 0.1)
  cardGeo.setAttribute(
    'boneIndices',
    new THREE.BufferAttribute(new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), 2)
  )
  cardGeo.setAttribute(
    'boneWeights',
    new THREE.BufferAttribute(new Float32Array([1, 0, 1, 0, 1, 0, 1, 0]), 2)
  )
  cardGeo.setAttribute(
    'tangent',
    new THREE.BufferAttribute(
      new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1]),
      4
    )
  )
  cardGeo.setAttribute('ao', new THREE.BufferAttribute(new Float32Array([1, 1, 1, 1]), 1))
  const cardIg = new THREE.InstancedBufferGeometry()
  for (const key in cardGeo.attributes) cardIg.setAttribute(key, cardGeo.attributes[key])
  if (cardGeo.index) cardIg.setIndex(cardGeo.index)
  cardIg.instanceCount = 1
  cardIg.setAttribute('instancePos', instancePos)
  cardIg.setAttribute('instanceOrient', instanceOrient)
  cardIg.setAttribute('instanceAnimationFrameFromToBlend1', blend1)
  cardIg.setAttribute('instanceAnimationFrameFromToBlend2', blend2)
  const faceCardMat = new THREE.ShaderMaterial({
    uniforms: {
      ...sharedUniforms,
      u_cardLedTexture: { value: ledTex },
      u_cardTexture: { value: faceTex },
      u_cardColor: { value: new THREE.Color('#ddddff') },
      u_cardUvOffset: { value: new THREE.Vector2(0, 0) },
      u_cardTextureSize: { value: cardTextureSize },
      u_cardOpacity: { value: 0 },
    },
    vertexShader: astronautVert,
    fragmentShader: astronautCardFrag,
    transparent: true,
    depthTest: false,
    depthWrite: false,
    side: THREE.DoubleSide,
    blending: THREE.CustomBlending,
    blendEquation: THREE.AddEquation,
    blendSrc: THREE.OneFactor,
    blendDst: THREE.OneFactor,
    blendEquationAlpha: THREE.AddEquation,
    blendSrcAlpha: THREE.OneFactor,
    blendDstAlpha: THREE.OneFactor,
    defines: { BONE_COUNT },
  })
  const faceCardMesh = new THREE.Mesh(cardIg, faceCardMat)
  faceCardMesh.frustumCulled = false
  faceCardMesh.renderOrder = 100
  faceCardMesh.visible = false
  astronautRoot.add(faceCardMesh)

  // —— White tunnel (Lusion GoalWhiteTunnel) ——
  const tunnelGroup = new THREE.Group()
  scene.add(tunnelGroup)
  // Exact Lusion GoalWhiteTunnel BrownianMotion for occlusion sphere
  const whiteFbm = new BrownianMotion()
  whiteFbm.positionAmplitude = 2
  whiteFbm.positionFrequency = 1
  whiteFbm._enableRotationNoise = false
  const fbmPos = whiteFbm.position
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
    // Opaque like Lusion GoalWhiteTunnel (no transparent). Alpha still feeds bloom.
    // White high-key wash comes from clearColor=#fff + clearAlpha≈0.3 + MSAA scene RT.
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
      transparent: false,
      depthWrite: true,
      depthTest: true,
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

  // Stickers + diamonds at astronautWait (Lusion white-tunnel end)
  const whiteExtras = await createWhiteTunnelExtras(scene, {
    base,
    isMobile,
    sharedTime: sharedUniforms.u_time,
  })

  // Lusion clearAlpha:0 — bg must not write opaque alpha or bloom fills the screen
  const bgMatPlane = new THREE.ShaderMaterial({
    uniforms: { u_color: { value: new THREE.Color(0x000000) } },
    vertexShader: /* glsl */ `void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
    fragmentShader: /* glsl */ `uniform vec3 u_color;void main(){gl_FragColor=vec4(u_color,0.0);}`,
    depthWrite: false,
    blending: THREE.NoBlending,
  })
  const bgPlane = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), bgMatPlane)
  bgPlane.position.z = -80
  bgPlane.renderOrder = -10
  scene.add(bgPlane)

  // —— GoalTunnelsBackground (Earth behind astronaut in the tablet window) ——
  earthLandscape.colorSpace = THREE.NoColorSpace
  earthLandscape.generateMipmaps = false
  earthLandscape.minFilter = THREE.LinearFilter
  earthLandscape.magFilter = THREE.LinearFilter
  const earthBgUniforms = {
    u_earthTexture: { value: earthLandscape },
    u_bgColor: { value: new THREE.Color(0x000000) },
    u_atmosphereColor: { value: new THREE.Color('#4169E1') },
  }
  const earthVert = /* glsl */ `
varying vec2 v_uv;
void main(){
  vec3 pos=position;
  pos.z*=0.1;
  vec4 mvPosition=modelViewMatrix*vec4(pos,1.);
  gl_Position=projectionMatrix*mvPosition;
  v_uv=uv;
}`
  // Exact Lusion GoalTunnelsBackground frag (minus unused blueNoise include)
  const earthFrag = /* glsl */ `
varying vec2 v_uv;
uniform sampler2D u_earthTexture;
void main(){
  vec3 earthMap=texture2D(u_earthTexture,v_uv).rgb;
  gl_FragColor=vec4(earthMap, 0.0);
}`
  const earthBgGroup = new THREE.Group()
  const earthBgMat = new THREE.ShaderMaterial({
    uniforms: earthBgUniforms,
    vertexShader: earthVert,
    fragmentShader: earthFrag,
    depthWrite: true,
    depthTest: true,
  })
  const earthBgMesh = new THREE.Mesh(earthCardGeo, earthBgMat)
  earthBgMesh.frustumCulled = false
  earthBgMesh.renderOrder = -1
  earthBgGroup.add(earthBgMesh)
  scene.add(earthBgGroup)

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
    u_feedbackTexture: { value: feedbackRead.texture },
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

    // Lusion GoalBlackTunnel: opaque NormalBlending (Additive + bloom-alpha made grid invisible)
    const mat = new THREE.ShaderMaterial({
      uniforms: blackUniforms,
      vertexShader: blackTunnelVert,
      fragmentShader: blackTunnelFrag,
      side: THREE.DoubleSide,
      transparent: false,
      depthWrite: true,
      blending: THREE.NormalBlending,
      defines: { GRID_SIZE, ...(isHd ? { IS_HD: true } : {}) },
    })
    const mesh = new THREE.Mesh(ig, mat)
    mesh.frustumCulled = false
    mesh.renderOrder = isHd ? 2 : 1
    blackTunnelGroup.add(mesh)
    if (isHd) hdGridMesh = mesh
    return mesh
  }

  let hdGridMesh = null

  makeBlackGridMesh(gridBaseLd, gridStructureLd, false)
  if (useHd && gridBaseHd && gridStructureHd) {
    makeBlackGridMesh(gridBaseHd, gridStructureHd, true)
  }

  let blackPulseTime = 0
  let blackLinearTime = 0
  let cameraDollyZoomFovOffset = 0
  let baseCameraFov = EXPECTED_FOV
  let prevBlackOffsetZ = 0
  let prevBlackContainerZ = -80
  let efxDeltaZ = 0
  // Exact Lusion BrownianMotion + SecondOrderDynamics for hero + clones
  const heroMotion = new BrownianMotion()
  heroMotion.positionFrequency = 0.2
  heroMotion.rotationFrequency = 0.15
  heroMotion.positionAmplitude = 0
  heroMotion.rotationAmplitude = 0
  const heroPosDyn = new SecondOrderDynamics(new THREE.Vector3(), 1, 0.65, 1.3)
  const heroRotDyn = new SecondOrderDynamics(new THREE.Vector3(), 1, 0.85, 1.1)
  const cloneMotions = Array.from({ length: CLONE_COUNT }, () => {
    const m = new BrownianMotion()
    m.positionFrequency = 0.2
    m.rotationFrequency = 0.6
    m.positionAmplitude = 12
    m.rotationAmplitude = 10
    return m
  })
  // Lusion: hero timeShift=0, clones random; cloneTimeShift cycles during black tunnel
  const partTimeShifts = Float32Array.from({ length: CLONE_COUNT + 1 }, (_, i) =>
    i === 0 ? 0 : Math.random() * 2
  )
  const cloneCycleShifts = new Float32Array(CLONE_COUNT)
  const cloneAnimTimes = new Float32Array(CLONE_COUNT)
  const basePathPos = new THREE.Vector3()
  const basePathQuat = new THREE.Quaternion()
  const heroMatrix = new THREE.Matrix4()
  const motionMatrix = new THREE.Matrix4()
  const tmpV = new THREE.Vector3()
  const tmpV2 = new THREE.Vector3()
  const tmpQ = new THREE.Quaternion()
  const tmpEuler = new THREE.Euler()
  const oneScale = new THREE.Vector3(1, 1, 1)
  const colorA = new THREE.Color()
  const colorB = new THREE.Color()
  const camForward = new THREE.Vector3()
  const camTmp = new THREE.Vector3()
  // mouse look (Lusion CameraControls)
  let mouseX = 0
  let mouseY = 0
  let cameraLookX = 0
  let cameraLookY = 0
  let cameraLookStrength = 0.08
  const cameraLookEaseDamp = 0.1
  let pointerDown = false
  let freezeRatio = 0
  let autoScrollSpeed = 0
  let whiteTunnelAstronautOutRatio = 0
  // Lusion splits camera offsets:
  //   properties.cameraViewportOffset* → main camera (frame centering)
  //   GoalTunnelAstronauts.extraCameraViewportOffset* → astronauts ONLY (drop pan)
  let frameCamOffsetX = 0
  let frameCamOffsetY = 0
  let astroExtraOffsetX = 0
  let astroExtraOffsetY = 0
  let dropScrollPx = 0
  window.addEventListener(
    'pointermove',
    (e) => {
      mouseX = (e.clientX / Math.max(window.innerWidth, 1)) * 2 - 1
      mouseY = (e.clientY / Math.max(window.innerHeight, 1)) * 2 - 1
    },
    { passive: true }
  )
  window.addEventListener('pointerdown', () => { pointerDown = true }, { passive: true })
  window.addEventListener('pointerup', () => { pointerDown = false }, { passive: true })
  window.addEventListener('pointercancel', () => { pointerDown = false }, { passive: true })

  /** Port of Lusion CameraControls: dolly-zoom + mouse look + viewOffset. */
  const applyCamera = () => {
    camera.near = 1
    camera.far = 200
    camera.position.copy(DEFAULT_CAM)
    camera.up.set(0, 1, 0)
    camera.lookAt(DEFAULT_LOOK)
    camera.fov = baseCameraFov
    camForward.set(0, 0, -1).applyQuaternion(camera.quaternion)
    let cameraDistance = camTmp.copy(DEFAULT_LOOK).sub(camera.position).dot(camForward)
    const baseFov = camera.fov
    const tempFov = baseFov + cameraDollyZoomFovOffset
    const safeTemp = Math.max(1, Math.min(170, tempFov))
    let n =
      (cameraDistance * Math.tan(((baseFov / 360) * Math.PI) / 2)) /
        Math.tan(((safeTemp / 360) * Math.PI) / 2) -
      cameraDistance
    if (!Number.isFinite(n)) n = 0
    camera.translateZ(n)
    camera.fov = baseFov
    cameraDistance += n
    // Lusion setViewOffset — ONLY frame-centering (not drop pan; that is astronaut-only)
    const vw = Math.max(1, renderer.domElement.width || window.innerWidth)
    const vhBuf = Math.max(1, renderer.domElement.height || window.innerHeight)
    if (Math.abs(frameCamOffsetX) > 0.25 || Math.abs(frameCamOffsetY) > 0.25) {
      camera.setViewOffset(vw, vhBuf, frameCamOffsetX, frameCamOffsetY, vw, vhBuf)
    } else {
      camera.clearViewOffset()
    }
    // Pull to look point, apply look, push back (Lusion CameraControls)
    camera.translateZ(cameraDistance * -1)
    const lookStrength = isMobile ? cameraLookStrength * 0.35 : cameraLookStrength
    const lookTargetX = Math.max(-1, Math.min(1, mouseY)) * lookStrength
    const lookTargetY = Math.max(-1, Math.min(1, -mouseX)) * lookStrength
    cameraLookX += (lookTargetX - cameraLookX) * cameraLookEaseDamp
    cameraLookY += (lookTargetY - cameraLookY) * cameraLookEaseDamp
    tmpEuler.set(cameraLookX, cameraLookY, 0)
    tmpQ.setFromEuler(tmpEuler)
    camera.quaternion.multiply(tmpQ)
    camera.translateZ(cameraDistance)
    camera.updateProjectionMatrix()
  }

  /** Lusion updateTransforms — BrownianMotion + SecondOrderDynamics each frame. */
  const updateAstronautTransforms = (dt) => {
    heroMotion.update(dt)
    heroPosDyn.update(dt, heroMotion.position)
    tmpV.copy(heroMotion.euler)
    heroRotDyn.update(dt, tmpV)
    tmpEuler.set(heroRotDyn.value.x, heroRotDyn.value.y, heroRotDyn.value.z)
    tmpQ.setFromEuler(tmpEuler)
    motionMatrix.compose(heroPosDyn.value, tmpQ, oneScale)
    heroMatrix.compose(basePathPos, basePathQuat, oneScale)
    heroMatrix.multiply(motionMatrix)
    heroMatrix.decompose(tmpV, tmpQ, tmpV2)
    // Approximate Lusion astronaut-only viewOffset as world shift at hero depth.
    // Use the looking-distance to DEFAULT_LOOK (stable), not to the moving hero —
    // otherwise pan magnitude exploded as the suit came close and killed the wave.
    {
      const vwBuf = Math.max(1, renderer.domElement.width || window.innerWidth)
      const vhBuf = Math.max(1, renderer.domElement.height || window.innerHeight)
      const dist = Math.max(0.5, camera.position.distanceTo(DEFAULT_LOOK))
      const worldH =
        2 * Math.tan(((camera.fov || 45) * Math.PI) / 360) * dist
      const worldW = worldH * (vwBuf / vhBuf)
      // Soften vs raw pixel→world (viewOffset is a frustum shift, not 1:1 translate)
      const k = 0.55
      tmpV.x += (astroExtraOffsetX / vwBuf) * worldW * k
      tmpV.y += (astroExtraOffsetY / vhBuf) * worldH * k
    }
    instancePos.setXYZ(0, tmpV.x, tmpV.y, tmpV.z)
    instanceOrient.setXYZW(0, tmpQ.x, tmpQ.y, tmpQ.z, tmpQ.w)
    instancePos.needsUpdate = true
    instanceOrient.needsUpdate = true

    deltaTimeMultiplier =
      1 +
      Math.min(
        3.5,
        heroPosDyn.valueVel.length() * 0.2 + heroRotDyn.valueVel.length() * 0.2
      )

    // Clones — Lusion: copy hero path, multiply Brownian matrix, lerp→hero by show fade
    if (clonesShowRatio > 0.01 && !isWhiteTunnelActive && !isBlackTitleActive) {
      for (let i = 0; i < CLONE_COUNT; i++) {
        const m = cloneMotions[i]
        m.positionFrequency = 0.2
        m.rotationFrequency = 0.6
        m.positionAmplitude = 12
        m.rotationAmplitude = 10
        m.update(dt)
        heroMatrix.compose(basePathPos, basePathQuat, oneScale)
        heroMatrix.multiply(m.matrix)
        heroMatrix.decompose(tmpV, tmpQ, tmpV2)
        const t = i / Math.max(CLONE_COUNT - 1, 1)
        const fade = fit(clonesShowRatio, t * 0.3, 0.7 + t * 0.3, 1, 0, easeSineInOut)
        tmpV2.set(instancePos.getX(0), instancePos.getY(0), instancePos.getZ(0))
        tmpV.lerp(tmpV2, fade)
        clonePos.setXYZ(i, tmpV.x, tmpV.y, tmpV.z)
        cloneOrient.setXYZW(i, tmpQ.x, tmpQ.y, tmpQ.z, tmpQ.w)
      }
      clonePos.needsUpdate = true
      cloneOrient.needsUpdate = true
    }
  }

  // goalFrame wraps the canvas into [data-goal-screen-clip], so parentElement
  // is NOT the sticky. Always resolve the real #home-goal-tunnel-sticky —
  // is-pinned / is-windowed live there (wrong node painted the whole site black).
  const stickyEl =
    document.getElementById('home-goal-tunnel-sticky') ||
    canvas.closest?.('#home-goal-tunnel-sticky') ||
    sectionEl?.querySelector?.('#home-goal-tunnel-sticky') ||
    canvas.parentElement ||
    sectionEl
  const ranges = createGoalRanges(sectionEl)
  let whiteTunnelRatio = 0
  let showRatio = 0
  let blackTitleRatio = 0
  let blackTunnelRatio = 0
  let blackFrameInRatio = 0
  let whiteFrameBreak = 0
  let whiteFrameRatio = 0
  let whiteFrameOutRatio = 0
  let whiteTunnelWaitRatio = 0
  let astronautDropRatio = 0
  let whiteTunnelAstronautRatio = 0
  let isBlackTitleActive = true
  let isBlackTunnelActive = false
  let isWhiteTunnelActive = false
  let animationTime = 0
  let pauseLoopTime = 0
  let deltaTimeMultiplier = 1
  let raf = 0
  let last = performance.now()
  let active = false
  let wasStickyActive = false

  // Lusion Stage3D bloom + halo RGB-shift (chromatic rings / glow)
  const post = createTunnelPost(renderer, scene, camera, { isMobile })

  // Shattered glass pane at whiteFrameBreak (astronaut punches through)
  let brokenGlass = null
  let frameBg = null
  try {
    brokenGlass = await createBrokenGlass(scene, { base })
    post.setGlassPass(brokenGlass)
  } catch (err) {
    console.warn('Broken glass failed to load', err)
  }
  try {
    frameBg = await createFrameBg({ base })
    post.setFrameBgPass(frameBg)
  } catch (err) {
    console.warn('FrameBg failed to load', err)
  }

  let lastResizeW = 0
  let lastResizeH = 0
  const resize = () => {
    // Prefer the screen clip while tablet-windowed so the drawing buffer
    // matches the visible hole (not the full device shell including bezel).
    const clip = stickyEl?.querySelector?.('[data-goal-screen-clip]')
    const windowed = stickyEl?.classList.contains('is-windowed')
    const pinned = stickyEl?.classList.contains('is-pinned')
    const sizeEl = windowed && clip ? clip : stickyEl
    let w = sizeEl?.clientWidth || window.innerWidth
    let h = sizeEl?.clientHeight || window.innerHeight
    // Mobile full-bleed: visualViewport is the true visible screen (URL bar safe)
    if ((pinned || !windowed) && isMobile && window.visualViewport) {
      w = Math.round(window.visualViewport.width) || w
      h = Math.round(window.visualViewport.height) || h
    }
    w = Math.max(1, w)
    h = Math.max(1, h)
    if (w === lastResizeW && h === lastResizeH) return
    lastResizeW = w
    lastResizeH = h
    camera.aspect = w / h
    applyCamera()
    renderer.setSize(w, h, false)
    post.resize(w, h)
    blackUniforms.u_resolution.value.set(w, h)
    const fw = Math.max(1, Math.floor(w * 0.25))
    const fh = Math.max(1, Math.floor(h * 0.25))
    if (feedbackRT.width !== fw || feedbackRT.height !== fh) {
      feedbackRT.setSize(fw, fh)
      feedbackRT2.setSize(fw, fh)
      feedbackBlurRT.setSize(fw, fh)
    }
  }
  resize()
  window.addEventListener('resize', resize)

  /** Lusion path sample: frame index 0..(frameCount-1), not normalized t. */
  const samplePathByFrame = (geo, frame, frameCount = 100) => {
    const pos = geo.attributes.position.array
    const ori = geo.attributes.orient.array
    const i0 = Math.min(Math.floor(frame), frameCount - 1)
    const i1 = Math.min(Math.ceil(frame), frameCount - 1)
    const t = frame - Math.floor(frame)
    const p = new THREE.Vector3().fromArray(pos, i0 * 3).lerp(new THREE.Vector3().fromArray(pos, i1 * 3), t)
    const q = new THREE.Quaternion()
      .fromArray(ori, i0 * 4)
      .slerp(new THREE.Quaternion().fromArray(ori, i1 * 4), t)
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
    const blackFrameShowRatio = ranges.range('blackFrameShow').ratio
    blackTitleRatio = ranges.range('blackTitle').ratio
    blackTunnelRatio = ranges.range('blackTunnel').ratio
    // Keep WebGL buffer in sync while the tablet frame expands
    if (stickyEl?.classList.contains('is-windowed')) resize()
    whiteFrameRatio = ranges.range('whiteTunnel').ratio
    whiteTunnelRatio = ranges.between('whiteTunnel', 'whiteFrameOut').ratio
    whiteFrameOutRatio = ranges.range('whiteFrameOut').ratio
    whiteFrameBreak = ranges.range('whiteFrameBreak').ratio
    whiteTunnelAstronautRatio = ranges.between('whiteTunnel', 'whiteFrameBreak').ratio
    astronautDropRatio = ranges.between('whiteFrameBreak', 'astronautDrop').ratio
    whiteTunnelWaitRatio = ranges.range('astronautWait')?.ratio ?? 0
    whiteTunnelAstronautOutRatio = ranges.between('whiteFrameBreak', 'astronautWait').ratio
    // Exact Lusion astronaut-only extras during out/drop (NOT main camera):
    //   extraCameraViewportOffsetX = -fit(q.ratio,0,1,0,-center,cubicInOut)
    //   extraCameraViewportOffsetY = -ce
    // Soft-cap drop pan so the wave stays readable (raw -ce can shove ~2×vh).
    {
      const dropPx = ranges.range('astronautDrop')
      const vhLocal = window.innerHeight || 1
      const ceRaw = Math.max(0, dropPx.pixel || 0)
      const ceMax = Math.min(
        Math.max(1, dropPx.pixelCount || ceRaw),
        vhLocal * (isMobile ? 0.32 : 0.42)
      )
      const ce = Math.min(ceRaw, ceMax)
      dropScrollPx = ce
      const vwPx = window.innerWidth || 1
      const host =
        stickyEl?.querySelector?.('[data-goal-screen-clip]') ||
        stickyEl ||
        sectionEl.querySelector('#home-goal-image-out')
      const w = host?.getBoundingClientRect?.()
      const centerDelta = w
        ? w.left + w.width * 0.5 - vwPx * 0.5
        : 0
      astroExtraOffsetX = fit(
        astronautDropRatio,
        0,
        1,
        0,
        centerDelta,
        easeCubicInOut
      )
      astroExtraOffsetY =
        -ce * fit(astronautDropRatio, 0.15, 0.85, 0, 1)
      frameCamOffsetX = 0
      frameCamOffsetY = 0
    }

    isBlackTitleActive = blackTitleRatio < 1
    isBlackTunnelActive = blackTunnelRatio < 1 && !isBlackTitleActive
    isWhiteTunnelActive =
      whiteTunnelRatio <= 1 && !isBlackTunnelActive && !isBlackTitleActive

    // Lusion GoalTunnelAstronauts.update showRatio — no wait fade (wave stays readable)
    showRatio = isWhiteTunnelActive
      ? smoothstep(0, 0.15, whiteTunnelAstronautRatio)
      : 1

    // Stage3D bloom / halo — exact syncProperties curves
    post.sync({
      blackFrameInRatio,
      blackTitleRatio,
      blackTunnelRatio,
      whiteFrameRatio,
      whiteTunnelWaitRatio,
      astronautDropRatio,
      isWhiteTunnelActive,
      isBlackTunnelActive,
      isMobile,
    })

    // GoalSection frameBg (bezel + blue glow) + GoalTunnelGlass
    {
      const imgOutInner = sectionEl.querySelector('#home-goal-image-out-inner')
      const imgOut = sectionEl.querySelector('#home-goal-image-out')
      const imgIn = sectionEl.querySelector('#home-goal-image-in')
      const imgInInner = sectionEl.querySelector('#home-goal-image-in-inner')
      const outRect = imgOut?.getBoundingClientRect()
      const outInnerRect = imgOutInner?.getBoundingClientRect()
      const inRect = imgIn?.getBoundingClientRect()
      const inInnerRect = imgInInner?.getBoundingClientRect()
      const blackFrameShowRatio = ranges.range('blackFrameShow').ratio
      const vwPx = window.innerWidth || 1
      const vhPx = window.innerHeight || 1

      // Prefer real out-frame height; fall back to aspect from inner width
      let frameH =
        outRect && outRect.height > 8
          ? outRect.height
          : outInnerRect && outInnerRect.height > 8
            ? outInnerRect.height
            : 0
      if (frameH < 8) {
        const w =
          outInnerRect?.width ||
          imgOutInner?.clientWidth ||
          stickyEl?.clientWidth ||
          vwPx * 0.7
        frameH = w * (1537 / 2000)
      }

      const isBlackSide = isBlackTunnelActive || isBlackTitleActive
      const pinned = stickyEl?.classList.contains('is-pinned')
      const windowed = stickyEl?.classList.contains('is-windowed')
      const stickyRect = stickyEl?.getBoundingClientRect?.()
      const clipEl = stickyEl?.querySelector?.('[data-goal-screen-clip]')
      const clipRect = clipEl?.getBoundingClientRect?.()

      // While the tunnel sticky owns the screen, #home-goal-image-out is often
      // off-document (scrolled away). Using its raw getBoundingClientRect made
      // frameBg paint a full-screen opaque white plate. Synthesize the out-frame
      // in sticky/clip space instead (Lusion ScrollDomRange keeps it on-stage).
      const onScreen = (r) =>
        !!r &&
        r.width > 8 &&
        r.height > 8 &&
        r.bottom > 8 &&
        r.top < vhPx - 8 &&
        r.right > 8 &&
        r.left < vwPx - 8

      const aspectOut = 2000 / 1537
      const makeCentered = (host, h) => {
        const hh = Math.max(8, h)
        const ww = hh * aspectOut
        const hostW = host?.width || vwPx
        const hostH = host?.height || vhPx
        const hostL = host?.left || 0
        const hostT = host?.top || 0
        return {
          left: hostL + (hostW - ww) * 0.5,
          top: hostT + (hostH - hh) * 0.5,
          width: ww,
          height: hh,
          right: hostL + (hostW - ww) * 0.5 + ww,
          bottom: hostT + (hostH - hh) * 0.5 + hh,
        }
      }

      let frameRect
      let innerRect
      if (isBlackSide) {
        frameRect = onScreen(inRect)
          ? inRect
          : onScreen(clipRect)
            ? clipRect
            : onScreen(stickyRect)
              ? stickyRect
              : null
        innerRect = onScreen(inInnerRect) ? inInnerRect : frameRect
      } else if (pinned || windowed) {
        // Glass / white out: frame lives in the sticky viewport
        const host = onScreen(clipRect) ? clipRect : stickyRect
        const layoutH =
          onScreen(outRect) && outRect.height > 8
            ? outRect.height
            : Math.min(
                (host?.height || vhPx) * 0.72,
                ((host?.width || vwPx) * 0.92) / aspectOut
              )
        frameRect = makeCentered(host, layoutH)
        // Bezel inset ~ Lusion #home-goal-image-out (left 2.2%, top 2.8%, w 95.7%, h 70.2% of outer)
        innerRect = {
          left: frameRect.left + frameRect.width * 0.022,
          top: frameRect.top + frameRect.height * 0.028,
          width: frameRect.width * 0.957,
          height: frameRect.height * 0.702,
        }
        frameH = frameRect.height
      } else {
        frameRect = onScreen(outRect)
          ? outRect
          : makeCentered({ left: 0, top: 0, width: vwPx, height: vhPx }, frameH)
        innerRect = onScreen(outInnerRect) ? outInnerRect : frameRect
      }

      // CSS -- used by Lusion properties.u_globalRadius (rounded frame)
      let globalRadius = 20
      try {
        const rs = getComputedStyle(document.documentElement)
        const raw = parseFloat(
          rs.getPropertyValue('--global-border-radius') || ''
        )
        if (Number.isFinite(raw) && raw > 0) globalRadius = raw
      } catch {
        /* ignore */
      }

      const fb = frameBg?.updateFromScroll({
        isBlackSide,
        blackFrameInRatio,
        whiteFrameOutRatio,
        glassBreakRatio: astronautDropRatio,
        astronautDropRatio,
        blackFrameShowRatio,
        frameRect,
        innerRect,
        viewportW: vwPx,
        viewportH: vhPx,
        globalRadius,
      })

      // Lusion properties.cameraViewportOffset — main camera only
      if (fb) {
        frameCamOffsetX = fb.cameraViewportOffsetX || 0
        frameCamOffsetY = fb.cameraViewportOffsetY || 0
      }

      const E = 1 - clamp(whiteFrameOutRatio, 0, 1)
      const diag = Math.hypot(vwPx, vhPx)
      const minSide = Math.min(
        frameRect?.width > 8 ? frameRect.width : frameH * (2000 / 1537),
        frameH
      )
      // Prefer live frameBg scale/rotation (exact GoalSection); fall back to formula
      const frameScale = fb?.frameScale ?? THREE.MathUtils.lerp(1, diag / Math.max(minSide, 1), E)
      const frameRotation = fb?.frameRotation ?? E * -0.3

      if (brokenGlass) {
        brokenGlass.updateFromScroll({
          // Exact Lusion: glass.ratio = fit(getRange(break, drop), 0, 1, 0, 1, sineOut)
          glassBreakRatio: astronautDropRatio,
          astronautDropRatio,
          frameHeight: frameH,
          frameRotation,
          frameScale,
        })
      }
    }

    sharedUniforms.u_whiteTunnelRatio.value = whiteTunnelRatio
    sharedUniforms.u_showRatio.value = showRatio
    sharedUniforms.u_frameOutRatio.value = whiteFrameBreak
    baseMat.uniforms.u_ratio.value = whiteTunnelRatio
    wallMat.uniforms.u_ratio.value = whiteTunnelRatio
    baseMat.uniforms.u_ratioInverse.value = 1 - whiteTunnelRatio
    wallMat.uniforms.u_ratioInverse.value = 1 - whiteTunnelRatio

    // Keep Lusion ambient — extra lift washed the quilt into a flat blob under bloom
    sharedUniforms.u_ambientColor.value.set(
      isWhiteTunnelActive && astronautDropRatio < 1 ? '#6a7f94' : '#566d80'
    )

    // Exact Lusion GoalTunnels.update bgColor:
    // white tunnel → #fff until drop, then #000 for the wave wait (bloom + stickers)
    const bg = new THREE.Color('#ffffff')
    if (isBlackTunnelActive || isBlackTitleActive) {
      bg.set('#000000')
    } else if (isWhiteTunnelActive) {
      bg.set(astronautDropRatio < 1 ? '#ffffff' : '#000000')
    }
    bgMatPlane.uniforms.u_color.value.copy(bg)
    scene.background = null
    renderer.setClearColor(bg, post.clearAlpha)
    sharedUniforms.u_bgColor.value.copy(bg)
    if (stickyEl && !stickyEl.classList.contains('is-windowed')) {
      // Desktop wait: transparent so page/footer shows under clearAlpha→0.
      // Mobile: solid clear color — transparent + URL-bar mismatch letterboxed.
      stickyEl.style.background =
        astronautDropRatio >= 1 && !isMobile ? 'transparent' : bg.getStyle()
    }
    // Page chrome: ONLY while the goal sticky is full-bleed pinned.
    const windowed = stickyEl?.classList.contains('is-windowed')
    const pinned = stickyEl?.classList.contains('is-pinned')
    if (!pinned || windowed) {
      document.documentElement.style.background = ''
      document.body.style.background = ''
    } else if (isWhiteTunnelActive && astronautDropRatio >= 1) {
      // Lusion isUIBgBlack through whiteFrameOut→astronautWait — black under
      // clearAlpha→0 so stickers/diamonds edge-fade correctly before footer rises
      document.documentElement.style.background = '#000000'
      document.body.style.background = '#000000'
    } else if (isWhiteTunnelActive) {
      document.documentElement.style.background = '#ffffff'
      document.body.style.background = '#ffffff'
    } else if (isBlackTunnelActive || isBlackTitleActive) {
      document.documentElement.style.background = '#000000'
      document.body.style.background = '#000000'
    } else {
      document.documentElement.style.background = ''
      document.body.style.background = ''
    }
    tunnelGroup.visible = isWhiteTunnelActive && astronautDropRatio < 1
    blackTunnelGroup.visible = isBlackTunnelActive
    // During white tunnel, let RT clear (#fff, α≈0.3) show in gaps so bloom
    // washes the corridor. bgPlane writes α=0 and would kill that Lusion wash.
    bgPlane.visible = !(isWhiteTunnelActive && astronautDropRatio < 1)

    // Exact Lusion GoalTunnelsBackground — Earth plate under the astronaut
    // while the tablet window is open (hidden once blackFrameIn completes).
    earthBgUniforms.u_bgColor.value.copy(bg)
    const earthShow = THREE.MathUtils.clamp(blackFrameShowRatio, 0, 1)
    const earthIn = THREE.MathUtils.clamp(blackFrameInRatio, 0, 1)
    earthBgMesh.position.y = -(10 * (1 - earthShow) + 2.5 + 30 * earthIn)
    earthBgMesh.scale.setScalar(fit(earthIn, 0, 0.5, 40, 70))
    earthBgGroup.rotation.x = fit(earthIn, 0, 0.5, 0, -1)
    earthBgMesh.visible = earthIn < 1 && !isWhiteTunnelActive && !isBlackTunnelActive

    // Header contrast only while tunnel sticky is pinned (not during goal copy)
    const header = document.getElementById('header')
    if (header) {
      const pinned = stickyEl?.classList.contains('is-pinned')
      if (!pinned) {
        header.style.color = ''
      } else if (isWhiteTunnelActive || whiteTunnelWaitRatio > 0) {
        header.style.color = '#000000'
      } else {
        header.style.color = '#ffffff'
      }
    }

    const wasBlack = sectionEl.dataset.goalPhase === 'black-tunnel'
    const wasWhite = sectionEl.dataset.goalPhase === 'white'
    if ((isBlackTunnelActive && !wasBlack) || (isWhiteTunnelActive && !wasWhite)) {
      post.markEfxSync()
    }

    // Switch astronaut materials (Lusion white vs black)
    const useWhiteMat = isWhiteTunnelActive
    for (const mesh of astronautMeshes) {
      const next = useWhiteMat ? mesh.userData.whiteMat : mesh.userData.blackMat
      if (mesh.material !== next) mesh.material = next
    }
    clonesShowRatio = isBlackTunnelActive ? smoothstep(0.2, 0.4, blackTunnelRatio) : 0
    cloneAlphaUniform.value = clonesShowRatio
    for (const cmesh of cloneMeshes) {
      cmesh.visible = !isWhiteTunnelActive && clonesShowRatio > 0.01
    }

    // Path base — exact Lusion updateTransforms frame indices (0..99)
    let path
    if (isWhiteTunnelActive) {
      const frame =
        whiteTunnelRatio < 1
          ? fit(whiteTunnelRatio, 0, 1, 0, 79)
          : fit(astronautDropRatio, 0, 1, 79, 99)
      path = samplePathByFrame(outAnim, frame, 100)
      path.p.y -= (isMobile ? 0 : 0.4) * easeBackInOut(astronautDropRatio)
    } else {
      // Exact Lusion: inAnimation driven by blackFrameInRatio (0→100)
      path = samplePathByFrame(
        inAnim,
        100 * easeCubicIn(blackFrameInRatio),
        100
      )
    }
    basePathPos.copy(path.p)
    basePathQuat.copy(path.q)

    // Motion amplitudes — exact Lusion GoalTunnelAstronauts.updateTransforms
    heroMotion.positionFrequency = 0.2
    heroMotion.rotationFrequency = 0.15
    heroMotion.positionAmplitude = 0
    heroMotion.rotationAmplitude = 0
    if (isBlackTunnelActive) {
      const I = blackTunnelRatio
      heroMotion.positionFrequency = 0.2 + 0.5 * I
      heroMotion.rotationFrequency = 0.15
      heroMotion.positionAmplitude = 5 * I
      heroMotion.rotationAmplitude = 60 * I
    } else if (isWhiteTunnelActive) {
      heroMotion.positionFrequency = fit(whiteFrameRatio, 0, 0.45, 0.5, 0.2)
      heroMotion.rotationFrequency = fit(whiteFrameRatio, 0, 0.45, 0.4, 0.15)
      heroMotion.positionAmplitude = fit(whiteFrameRatio, 0, 0.75, 5, 0)
      heroMotion.rotationAmplitude = fit(whiteFrameRatio, 0, 0.75, 15, 0)
      // Light body sway while waving on the wait finale
      if (astronautDropRatio >= 1) {
        heroMotion.positionFrequency = 0.35
        heroMotion.rotationFrequency = 0.28
        heroMotion.positionAmplitude = 0.55
        heroMotion.rotationAmplitude = 8
      }
    }

    astronautRoot.visible = showRatio > 0.02

    // —— Exact Lusion GoalTunnels FOV ——
    const vhPx = window.innerHeight || 1
    const clipEl = stickyEl?.querySelector?.('[data-goal-screen-clip]')
    // After glass exit (wait), always use full viewport so the wave fills like Lusion
    const frameH = Math.max(
      1,
      whiteTunnelWaitRatio > 0.001 || astronautDropRatio >= 1
        ? vhPx
        : (windowed && clipEl?.clientHeight) || stickyEl?.clientHeight || vhPx
    )
    const frameMix =
      blackFrameInRatio < 1
        ? blackFrameInRatio
        : whiteTunnelWaitRatio > 0.001 || astronautDropRatio >= 1
          ? 1
          : 1 - whiteFrameRatio
    const mixedFrameH = THREE.MathUtils.lerp(frameH, vhPx, frameMix)
    const dist = DEFAULT_CAM.distanceTo(DEFAULT_LOOK)
    const expectedRad = (EXPECTED_FOV / 180) * Math.PI
    const l =
      Math.tan(expectedRad / 2) * dist * 2 * (vhPx / Math.max(mixedFrameH, 1))
    baseCameraFov = (Math.atan(l / 2 / dist) * 2) / Math.PI * 180

    // Portrait phones: vFOV≈45° → hFOV≈22°, which clips gloves/wave at wait depth.
    // Raise vFOV so horizontal FOV stays ~50° and the astronaut fits the screen.
    if (isMobile && camera.aspect > 0 && camera.aspect < 0.85) {
      const targetHFovDeg = 52
      const needVFov =
        ((2 * Math.atan(Math.tan((targetHFovDeg * Math.PI) / 360) / camera.aspect)) *
          180) /
        Math.PI
      baseCameraFov = Math.max(baseCameraFov, Math.min(needVFov, 82))
    }

    if (isWhiteTunnelActive) {
      // Exact Lusion GoalWhiteTunnel: fit(whiteTunnelRatio, 0, 1, 60, 0)
      cameraDollyZoomFovOffset = fit(whiteTunnelRatio, 0, 1, 60, 0)
    } else if (isBlackTunnelActive) {
      cameraDollyZoomFovOffset =
        Math.sin(blackTunnelRatio * 10 + tunnelTime) *
        (isMobile ? 4.5 : 7.5) *
        smoothstep(0, 0.2, blackTunnelRatio)
      blackTunnelGroup.position.z = -80 * cUnMix(0.2, 0, blackTunnelRatio)
    } else {
      // Entry / title: Lusion leaves cameraDollyZoomFovOffset at 0
      cameraDollyZoomFovOffset = 0
      blackTunnelGroup.position.z = -80
    }
    // syncProperties cameraLookStrength
    cameraLookStrength =
      0.08 * smoothstep(0.5, 1, blackTitleRatio) + 0.02
    if (whiteTunnelRatio > 0) {
      cameraLookStrength *= fit(
        ranges.between('whiteFrameBreak', 'astronautWait').ratio,
        0.75,
        1,
        0,
        0.5
      )
    }
    cameraLookStrength = fit(whiteTunnelWaitRatio, 0, 0.1, cameraLookStrength, 0.05)

    // Lusion GoalTunnels.autoScrollSpeed — cinematic keep-alive through goal
    autoScrollSpeed =
      (1 - freezeRatio) *
      scrollDir *
      2.5 *
      fit(blackFrameInRatio, 0, 0.5, 0, 1) *
      fit(whiteTunnelWaitRatio, 0, 0.25, 1, 0)

    applyCamera()

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

    // Lusion white tint — soften peak so glass shatter doesn't go cobalt-white
    const tintStrength =
      fit(astronautDropRatio, 1, 0, 0.15, 0.55) * (whiteFrameBreak > 0 ? 1 : 0)
    sharedUniforms.u_tintColor.value.setStyle('#2533c2').multiplyScalar(tintStrength)

    const stickyRect = stickyEl.getBoundingClientRect()
    active = stickyRect.bottom > 0 && stickyRect.top < vh
    // Fresh entry pose when sticky first pins — avoids mid-idle arms after long load
    if (active && !wasStickyActive && isBlackTitleActive) {
      animationTime = 0
      pauseLoopTime = 0
    }
    wasStickyActive = active
    sectionEl.dataset.goalPhase = isWhiteTunnelActive
      ? 'white'
      : isBlackTunnelActive
        ? 'black-tunnel'
        : blackFrameInRatio < 0.98 || stickyEl?.classList.contains('is-windowed')
          ? 'window'
          : 'title'
  }

  /** Lusion GoalBlackTunnel.update — offsetZ, show, colors, transform + efx delta */
  const updateBlackTunnel = (dt) => {
    if (!isBlackTunnelActive) {
      blackUniforms.u_showRatio.value = 0
      post.setEfxOffset(0, 0)
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

    // dt already = tunnelDeltaTime from GoalTunnels.syncProperties
    const signedDt = scrollDir * dt
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

    // Lusion GoalTunnelEfx: accumulate container.z + offsetZ deltas
    const containerZ = -80 * cUnMix(0.2, 0, blackTunnelRatio)
    let dContainer = containerZ - prevBlackContainerZ
    let dOffset = offsetZ - prevBlackOffsetZ
    // Ignore teleport jumps (puppeteer / Lenis seek) so blur doesn't explode
    if (Math.abs(dOffset) > 8 || Math.abs(dContainer) > 20) {
      dOffset = 0
      dContainer = 0
    }
    efxDeltaZ = dContainer + dOffset
    prevBlackContainerZ = containerZ
    prevBlackOffsetZ = offsetZ
    blackTunnelGroup.position.z = containerZ

    blackUniforms.u_offsetZ.value = offsetZ
    blackAstroUniforms.u_offsetZ.value = offsetZ
    blackUniforms.u_time.value = tunnelTime

    // color cycling — snaps at mid-segment like Lusion
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

    // GoalTunnelEfx offsets from Lusion black tunnel update (amount eased in)
    // Mobile: keep motion blur mild — high amount reads as blue glitch streaks
    const efxScale = isMobile ? 0.45 : 1
    post.setEfxOffset(
      efxDeltaZ * fit(blackTunnelRatio, 0, 0.2, 0, 1) * efxScale,
      efxDeltaZ * transformRatio * 0.01 * efxScale
    )
    post.setEfxAmount(
      fit(blackTunnelRatio, 0, 0.25, 0.35, 0.85) * (isMobile ? 0.35 : 1)
    )

    cameraDollyZoomFovOffset =
      Math.sin(blackTunnelRatio * 10 + tunnelTime) *
      (isMobile ? 4.5 : 7.5) *
      smoothstep(0, 0.2, blackTunnelRatio)
  }

  let prevWhiteRatio = 0
  const updateWhiteTunnel = (dt) => {
    if (!isWhiteTunnelActive) {
      whiteExtras.update({ whiteTunnelWaitRatio: 0, aspect: camera.aspect })
      prevWhiteRatio = whiteTunnelRatio
      return
    }
    whiteFbm.update(dt)
    baseMat.uniforms.u_time.value = tunnelTime
    wallMat.uniforms.u_time.value = tunnelTime
    baseMat.uniforms.u_fbm.value = fbmPos
    wallMat.uniforms.u_fbm.value = fbmPos

    // Lusion GoalWhiteTunnel.update — efx from ratio delta, fade amount near end
    let dRatio = whiteTunnelRatio - prevWhiteRatio
    if (Math.abs(dRatio) > 0.08) dRatio = 0
    // Exact Lusion GoalWhiteTunnel efx: sineOut fits, full amount on desktop
    const efxScale = isMobile ? 0 : 0.7
    const zOff = THREE.MathUtils.clamp(
      -dRatio * fit(whiteTunnelRatio, 0, 0.9, 500, 0, easeSineOut) * efxScale,
      -1,
      1
    )
    const rotOff = THREE.MathUtils.clamp(
      -dRatio * fit(whiteTunnelRatio, 0, 0.8, 45, 0, easeSineOut) * efxScale,
      -1,
      1
    )
    post.setEfxOffset(zOff, rotOff)
    // Keep mobile efx very light — velocity blur was smearing the suit into mush
    // Mobile: no velocity blur in white tunnel — it mush-smeared the suit
    post.setEfxAmount(isMobile ? 0 : fit(whiteTunnelRatio, 0.75, 1, 1, 0))
    prevWhiteRatio = whiteTunnelRatio

    // Stickers/diamonds mix edges into properties.bgColor (black after drop)
    const extrasBg =
      isWhiteTunnelActive && astronautDropRatio >= 1
        ? '#000000'
        : isWhiteTunnelActive
          ? '#ffffff'
          : '#000000'
    // Portrait camera.aspect (~0.46) blows sticker yLimit off-screen — clamp like a landscape frustum
    const extrasAspect = isMobile
      ? Math.max(camera.aspect, 0.95)
      : Math.max(camera.aspect, 0.01)
    // Lusion wait finale: stickers/diamonds appear as astronautWait progresses
    whiteExtras.update({
      whiteTunnelWaitRatio: astronautDropRatio >= 1 ? whiteTunnelWaitRatio : 0,
      aspect: extrasAspect,
      bg: extrasBg,
    })
  }

  const onScroll = () => updateScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  updateScroll()

  /** Driven from gsap ticker (synced with Lenis) for smoother coupling. */
  const tickFrame = (rawDt) => {
    const e = Math.min(0.05, Math.max(0, rawDt || 1 / 60))
    last = performance.now()
    if (!active) {
      // still idle-render title sticky when partially visible
      if (stickyEl) {
        const r = stickyEl.getBoundingClientRect()
        if (r.bottom > 0 && r.top < window.innerHeight) {
          post.render()
        }
      }
      return
    }

    // Exact Lusion GoalTunnels.syncProperties time scale
    freezeRatio += ((pointerDown ? 1 : 0) - freezeRatio) * 0.1
    tunnelDeltaTime = fit(freezeRatio, 0, 1, 1, 0.3) * e
    tunnelDeltaTime = fit(blackFrameInRatio, 0, 1, e, tunnelDeltaTime)
    tunnelDeltaTime = fit(whiteTunnelAstronautOutRatio, 0.5, 0.75, tunnelDeltaTime, e)
    tunnelTime += tunnelDeltaTime
    sharedUniforms.u_time.value = tunnelTime

    // Recompute autoScroll each frame (freeze affects it)
    autoScrollSpeed =
      (1 - freezeRatio) *
      scrollDir *
      2.5 *
      fit(blackFrameInRatio, 0, 0.5, 0, 1) *
      fit(whiteTunnelWaitRatio, 0, 0.25, 1, 0)

    updateBlackTunnel(tunnelDeltaTime)
    updateWhiteTunnel(tunnelDeltaTime)
    updateAstronautTransforms(tunnelDeltaTime)

    if (isBlackTunnelActive) {
      cameraDollyZoomFovOffset =
        Math.sin(blackTunnelRatio * 10 + tunnelTime) *
        (isMobile ? 4.5 : 7.5) *
        smoothstep(0, 0.2, blackTunnelRatio)
    }
    applyCamera()

    // bone loop — exact Lusion GoalTunnelAstronauts.updateAnimation
    const drop = astronautDropRatio
    // u_loopLinearBlend: 0 = play loop (idle/wave), 1 = play linear punch (90–139)
    const loopLinearBlend =
      fit(drop, 0, 0.1, 0, 1) * fit(drop, 0.9, 1, 1, 0)
    sharedUniforms.u_loopLinearBlend.value = loopLinearBlend
    const cardFade = fit(drop, 0.9, 1, 0, 1, easeCubicIn)
    isCardActive = cardFade > 0

    let speed
    let loopFrom
    let loopTo
    let allowWrap = true
    if (drop < 0.5) {
      // Exact Lusion idle: smoothstep(-0.3,1,blackTitleRatio) * 0.75
      pauseLoopTime = 0
      speed = smoothstep(-0.3, 1, blackTitleRatio) * 0.75
      loopFrom = 0
      loopTo = 89
      faceCardMat.uniforms.u_cardOpacity.value = 0
    } else {
      // Wave frames 140–287 — a bit faster than Lusion's base once landed
      // so the hand-wave reads more clearly on the wait finale.
      speed = fit(drop, 0.85, 1, 0, 1) * (drop >= 1 ? 1.45 : 1)
      loopFrom = 140
      loopTo = Math.min(287, Math.max(140, frameCount - 1))
      const flicker = Math.min(
        2,
        Math.max(0, 0.5 + Math.max(0, cardNoise.getFbm(tunnelTime * 8, 3) + 0.5) * 4)
      )
      faceCardMat.uniforms.u_cardOpacity.value = flicker * cardFade
      if (drop < 1) {
        pauseLoopTime = Math.max(0, pauseLoopTime)
        allowWrap = false
      } else {
        // Landed: unfreeze and restart wave from frame 140
        allowWrap = true
        if (pauseLoopTime === Number.POSITIVE_INFINITY) {
          animationTime = 0
        }
        pauseLoopTime = 0
      }
    }

    // Exact Lusion order: advance clock first, THEN hard-reset while linear blend is on
    if (pauseLoopTime === 0) {
      animationTime += tunnelDeltaTime * speed * deltaTimeMultiplier
    }
    if (loopLinearBlend === 1) animationTime = 0

    // Exact Lusion: R = c-l+1; E = w*60 % R; I = floor(E); F = (I+1)%R+l; I += l
    const span = Math.max(1, loopTo - loopFrom + 1)
    const heroShift = partTimeShifts[0]
    const heroW = heroShift + animationTime
    let heroE = heroW * 60
    heroE = ((heroE % span) + span) % span
    let heroI = Math.floor(heroE)
    let heroF = ((heroI + 1) % span) + loopFrom
    heroI += loopFrom
    if (heroF < heroI && !allowWrap) {
      // Freeze on first wave frame until drop finishes (Lusion hold)
      heroF = heroI = loopFrom
      animationTime = -heroShift
      pauseLoopTime = Number.POSITIVE_INFINITY
    }
    // Lusion blend is always E%1 (even across wrap when allowWrap)
    const heroBlend = heroE - Math.floor(heroE)
    blend1.setXYZ(0, heroI, heroF, heroBlend)
    blend1.needsUpdate = true

    // Linear punch track — exact Lusion: fit(whiteFrameOut+drop, .9, 2, 90, 139, quartIn)
    const linearFrame = fit(
      whiteFrameOutRatio + drop,
      0.9,
      2,
      90,
      139,
      easeQuartIn
    )
    const u = Math.floor(linearFrame)
    const f = Math.ceil(linearFrame)
    const p = linearFrame - u
    blend2.setXYZ(0, u, f, p)
    blend2.needsUpdate = true

    // Card visible at drop ≥ 0.95 (Lusion meshes.card.visible)
    faceCardMesh.visible = drop >= 0.95 && showRatio > 0.02

    // updateCard — LED atlas scroll + suit faceLedLight pulse
    cardTime = isCardActive ? cardTime + tunnelDeltaTime : 0
    {
      const tw = cardTextureSize.x
      const th = cardTextureSize.y
      const n = Math.floor((10 * cardTime) % (tw * (th + 1)))
      const a = n / (tw * (th + 1))
      const ledPulse = cUnMix(0, 0.15, a) * cUnMix(1, 0.9, a)
      sharedUniforms.u_faceLedLight.value = ledPulse
      faceCardMat.uniforms.u_cardUvOffset.value.set(
        (n % tw) / tw,
        (th - Math.floor(n / tw)) / th
      )
    }
    // Light anchor slightly above astronaut root (Lusion +0.9 y)
    sharedUniforms.u_cardPosition.value.set(
      instancePos.getX(0),
      instancePos.getY(0) + 0.9,
      instancePos.getZ(0)
    )

    if (clonesShowRatio > 0.01 && !isWhiteTunnelActive && !isBlackTitleActive) {
      for (let i = 0; i < CLONE_COUNT; i++) {
        cloneCycleShifts[i] = (cloneCycleShifts[i] + 0.2 * tunnelDeltaTime) % 1
        if (pauseLoopTime === 0) {
          cloneAnimTimes[i] += tunnelDeltaTime * speed * deltaTimeMultiplier
        }
        // Lusion: mix(0, timeShift, clonesShowRatio)
        const C = THREE.MathUtils.lerp(0, partTimeShifts[i + 1], clonesShowRatio)
        const w = C + cloneAnimTimes[i]
        const E = (w * 60) % span
        let I = Math.floor(E)
        let F = ((I + 1) % span) + loopFrom
        I += loopFrom
        if (F < I && !allowWrap) {
          F = I = loopFrom
        }
        const blend = E - Math.floor(E)
        cloneBlend1.setXYZ(i, I, F, blend)
        cloneBlend2.setXYZ(i, u, f, p)
      }
      cloneBlend1.needsUpdate = true
      cloneBlend2.needsUpdate = true
    }

    // scroll-velocity → post efx / paint feel
    post.setScrollVelocity?.(Math.abs(autoScrollSpeed) + Math.abs(scrollDir) * 0.5)

    if (isBlackTunnelActive) {
      const prevRes = blackUniforms.u_resolution.value.clone()
      tunnelGroup.visible = false
      bgPlane.visible = false
      astronautRoot.visible = showRatio > 0.02
      blackUniforms.u_feedbackTexture.value = feedbackRead.texture
      blackUniforms.u_resolution.value.set(feedbackWrite.width, feedbackWrite.height)
      renderer.setRenderTarget(feedbackWrite)
      renderer.setClearColor(0x000000, 0)
      renderer.clear()
      renderer.render(scene, camera)
      // Exact Lusion GoalTunnelAstronauts: blur.blur(16,.5) then blur(4,.5)
      blurFeedback(feedbackWrite, isMobile ? 10 : 16)
      blurFeedback(feedbackWrite, isMobile ? 3 : 4)
      renderer.setRenderTarget(null)
      blackUniforms.u_resolution.value.copy(prevRes)
      const tmp = feedbackRead
      feedbackRead = feedbackWrite
      feedbackWrite = tmp
      blackUniforms.u_feedbackTexture.value = feedbackRead.texture
      blackAstroUniforms.u_blackTunnelTexture.value = feedbackRead.texture
      bgPlane.visible = true
    }

    renderer.setClearColor(sharedUniforms.u_bgColor.value, post.clearAlpha)
    post.render()
  }

  // Fallback RAF if host never calls tickFrame
  const tick = (now) => {
    raf = requestAnimationFrame(tick)
    const dt = Math.min(0.05, (now - last) / 1000)
    // Prefer gsap-driven tickFrame; only self-drive if not recently called
    if (now - lastExternalTick > 50) tickFrame(dt)
  }
  let lastExternalTick = 0
  const tickFrameExternal = (dt) => {
    lastExternalTick = performance.now()
    tickFrame(dt)
  }
  raf = requestAnimationFrame(tick)

  requestAnimationFrame(() => {
    resize()
    updateScroll()
    post.render()
  })

  return {
    resize,
    updateScroll,
    tickFrame: tickFrameExternal,
    getAutoScrollSpeed: () => autoScrollSpeed,
    getGlassRatio: () => brokenGlass?.ratio ?? 0,
    getAstronautDropRatio: () => astronautDropRatio,
    getWhiteTunnelRatio: () => whiteTunnelRatio,
    getBlackFrameInRatio: () => blackFrameInRatio,
    getBlackTunnelRatio: () => blackTunnelRatio,
    getBlackTitleRatio: () => blackTitleRatio,
    isGoalAudioActive: () =>
      !!(
        stickyEl &&
        (stickyEl.classList.contains('is-pinned') ||
          stickyEl.classList.contains('is-windowed') ||
          (active && (isBlackTitleActive || isBlackTunnelActive || isWhiteTunnelActive)))
      ),
    destroy() {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
      brokenGlass?.dispose()
      frameBg?.dispose()
      feedbackRT.dispose()
      feedbackRT2.dispose()
      feedbackBlurRT.dispose()
      feedbackBlurMat.dispose()
      post.destroy()
      renderer.dispose()
    },
  }
}
