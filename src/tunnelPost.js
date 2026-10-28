/**
 * Lusion Stage3D bloom + halo + GoalTunnelEfx (exact high-pass uses rgb*alpha).
 * clearAlpha must be 0 so only fragments that write bloom alpha glow.
 */
import * as THREE from 'three'

const ITERATION = 5

const QuadVert = /* glsl */ `
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`

/** Lusion highPassFrag — rgb * a * amount + USE_HALO + USE_CONVOLUTION zoom/mask */
const HighPassFrag = /* glsl */ `
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
`

const BlurFrag = /* glsl */ `
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
`

/** Lusion frag$2 bloom composite + saturation + light scroll-paint RGB shift */
const CompositeFrag = /* glsl */ `
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
`

/** Lusion GoalTunnelEfx — depth reprojection motion blur */
const EfxFrag = /* glsl */ `
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
`

function makeRT(w, h, depth = false, samples = 0) {
  const opts = {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    format: THREE.RGBAFormat,
    // MSAA + HalfFloat is flaky on many GPUs/SwiftShader; byte + samples is reliable
    type: samples > 0 ? THREE.UnsignedByteType : THREE.HalfFloatType,
    depthBuffer: depth,
    stencilBuffer: false,
    // MSAA softens cobalt/white edges into white clear (high-key wash) + suit edges
    samples,
  }
  const rt = new THREE.WebGLRenderTarget(w, h, opts)
  if (depth && samples === 0) {
    // Separate depth texture only on non-MSAA targets (efx RT path uses scene depth —
    // with MSAA, Three resolves depth into depthBuffer; attach texture when supported)
    rt.depthTexture = new THREE.DepthTexture(w, h)
    rt.depthTexture.type = THREE.UnsignedShortType
  }
  if (depth && samples > 0) {
    // Still attach depthTexture — Three r170 resolves MSAA depth into it when possible
    rt.depthTexture = new THREE.DepthTexture(w, h)
    rt.depthTexture.type = THREE.UnsignedShortType
  }
  return rt
}

export function createTunnelPost(renderer, scene, camera, { isMobile = false } = {}) {
  const size = new THREE.Vector2(1, 1)
  renderer.getSize(size)
  let isMobileBloom = !!isMobile

  // 4x MSAA scene buffer — critical for white-tunnel wash + mobile suit edges
  let sceneRT = makeRT(1, 1, true, 4)
  let glassBgRT = makeRT(1, 1, false)
  let efxRT = makeRT(1, 1, false)
  let highPassRT = makeRT(1, 1, false)
  /** Optional: (api) => void — draw GoalTunnelGlass into the scene RT */
  let glassPass = null
  const blurH = []
  const blurV = []
  for (let i = 0; i < ITERATION; i++) {
    blurH.push(makeRT(1, 1))
    blurV.push(makeRT(1, 1))
  }

  const cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
  const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.MeshBasicMaterial())
  const quadScene = new THREE.Scene()
  quadScene.add(quad)

  const highPassMat = new THREE.ShaderMaterial({
    uniforms: {
      u_texture: { value: null },
      u_amount: { value: 1 },
      u_convolutionBuffer: { value: 0.15 },
      u_texelSize: { value: new THREE.Vector2(1, 1) },
      u_aspect: { value: new THREE.Vector2(1, 1) },
      u_haloWidth: { value: 0.6 },
      u_haloRGBShift: { value: 0.015 },
      u_haloStrength: { value: 0 },
      u_haloMaskInner: { value: 0.3 },
      u_haloMaskOuter: { value: 0.5 },
    },
    vertexShader: QuadVert,
    fragmentShader: HighPassFrag,
    depthTest: false,
    depthWrite: false,
    toneMapped: false,
  })

  const blurMats = []
  for (let i = 0; i < ITERATION; i++) {
    const n = 3 + i * 2
    blurMats.push(
      new THREE.ShaderMaterial({
        uniforms: {
          u_texture: { value: null },
          u_resolution: { value: new THREE.Vector2(1, 1) },
          u_direction: { value: new THREE.Vector2(1, 0) },
        },
        defines: { KERNEL_RADIUS: n, SIGMA: n },
        vertexShader: QuadVert,
        fragmentShader: BlurFrag,
        depthTest: false,
        depthWrite: false,
        toneMapped: false,
      })
    )
  }

  const bloomWeights = new Float32Array(ITERATION)
  const compositeMat = new THREE.ShaderMaterial({
    uniforms: {
      u_texture: { value: null },
      u_saturation: { value: 1 },
      u_scrollPaint: { value: 0 },
      u_blurTexture0: { value: null },
      u_blurTexture1: { value: null },
      u_blurTexture2: { value: null },
      u_blurTexture3: { value: null },
      u_blurTexture4: { value: null },
      u_bloomWeights: { value: bloomWeights },
    },
    vertexShader: QuadVert,
    fragmentShader: CompositeFrag,
    depthTest: false,
    depthWrite: false,
    toneMapped: false,
  })
  let scrollPaint = 0

  const efxMat = new THREE.ShaderMaterial({
    uniforms: {
      u_texture: { value: null },
      u_depthTexture: { value: null },
      u_projectionViewInverseMatrix: { value: new THREE.Matrix4() },
      u_prevProjectionViewMatrix: { value: new THREE.Matrix4() },
      u_aspect: { value: new THREE.Vector2(1, 1) },
      u_amount: { value: 1 },
    },
    vertexShader: QuadVert,
    fragmentShader: EfxFrag,
    depthTest: false,
    depthWrite: false,
    toneMapped: false,
  })

  const projectionViewMatrix = new THREE.Matrix4()
  const prevProjectionViewMatrix = new THREE.Matrix4()
  const projectionViewInverseMatrix = new THREE.Matrix4()
  const finalPrevMatrix = new THREE.Matrix4()
  const extraTransformMatrix = new THREE.Matrix4()
  const offsetPosition = new THREE.Vector3()
  const offsetRotation = new THREE.Euler()
  const offsetScale = new THREE.Vector3(1, 1, 1)
  const _q = new THREE.Quaternion()
  let efxNeedsSync = true
  let efxAmount = 1
  let efxActive = false

  let bloomAmount = 0
  let bloomRadius = 0
  let bloomSaturation = 1
  let highPassMultiplier = 1
  let haloStrength = 0
  let haloRGBShift = 0.015
  let haloWidth = 0.6
  let haloMaskInner = 0.3
  let haloMaskOuter = 0.5
  let clearAlpha = 0
  // Must match GoalTunnels bgColor during white tunnel (#fff) so gap fragments
  // bloom as soft white (highPass = rgb * a). Black clear killed the Lusion wash.
  let clearColor = new THREE.Color(0x000000)
  let enabled = true
  let w = 1
  let h = 1
  let whiteBloomDamp = 1
  let whiteTunnelBloom = false

  const dirX = new THREE.Vector2(1, 0)
  const dirY = new THREE.Vector2(0, 1)

  const blit = (mat, target) => {
    quad.material = mat
    renderer.setRenderTarget(target)
    renderer.clear()
    renderer.render(quadScene, cam)
  }

  const powerTwoCeiling = (n) => {
    const v = Math.max(1, n)
    return 1 << Math.ceil(Math.log(v) / Math.log(2))
  }

  const resize = (nw, nh) => {
    w = Math.max(1, Math.floor(nw))
    h = Math.max(1, Math.floor(nh))
    // Full-res scene on all devices — 0.85 RT was soft/aliased astronaut on phones.
    // Bloom pyramid stays half/quarter-res below for fill-rate.
    const sceneScale = 1
    sceneRT.setSize(Math.max(1, Math.floor(w * sceneScale)), Math.max(1, Math.floor(h * sceneScale)))
    glassBgRT.setSize(sceneRT.width, sceneRT.height)
    efxRT.setSize(sceneRT.width, sceneRT.height)
    // Lusion Bloom (non-FFT path): high-pass + pyramid start at half-res
    // Desktop Lusion uses FFT at powerTwoCeiling(half)>>1 — we keep half-res pyramid
    // but scale weights like the FFT amount formula so bloomAmount=30 stays soft.
    const bloomStart = isMobileBloom ? 3 : 2
    let rw = Math.max(1, Math.ceil(w / bloomStart))
    let rh = Math.max(1, Math.ceil(h / bloomStart))
    highPassRT.setSize(rw, rh)
    for (let i = 0; i < ITERATION; i++) {
      blurH[i].setSize(rw, rh)
      blurV[i].setSize(rw, rh)
      rw = Math.max(1, Math.ceil(rw / 2))
      rh = Math.max(1, Math.ceil(rh / 2))
    }
    highPassMat.uniforms.u_texelSize.value.set(1 / w, 1 / h)
    // Lusion aspect for halo: l = h/sqrt(w^2+h^2)*2
    const l = (h / Math.sqrt(w * w + h * h)) * 2
    highPassMat.uniforms.u_aspect.value.set((w / h) * l, l)
    efxMat.uniforms.u_aspect.value.set(w / Math.max(h, 1), 1)
  }

  /** Port of GoalTunnels.syncProperties bloom / halo curves (exact numbers). */
  const sync = ({
    blackFrameInRatio = 0,
    blackTitleRatio = 0,
    blackTunnelRatio = 0,
    whiteFrameRatio = 0,
    whiteTunnelWaitRatio = 0,
    astronautDropRatio = 0,
    isWhiteTunnelActive = false,
    isBlackTunnelActive = false,
    isMobile = false,
  } = {}) => {
    isMobileBloom = !!isMobile
    // Exact Lusion haloStrength
    let hs =
      blackFrameInRatio *
      (THREE.MathUtils.lerp(0, 0.15, blackTitleRatio) +
        THREE.MathUtils.clamp((blackTunnelRatio - 0.2) / 0.2, 0, 1) * 0.25)
    // fit(.65,.75, hs, .08)
    if (blackTunnelRatio >= 0.65) {
      const t = THREE.MathUtils.clamp((blackTunnelRatio - 0.65) / 0.1, 0, 1)
      hs = hs + (0.08 - hs) * t
    }
    if (isWhiteTunnelActive) hs = 0
    // Desktop Lusion USE_CONVOLUTION FFT bloom reads as a soft chromatic ring
    // around the astronaut during blackTitle. Our gaussian path needs an
    // explicit halo lift so the entry matches that ring (exact formula starts at 0).
    if (!isWhiteTunnelActive && blackFrameInRatio > 0.55 && blackTunnelRatio < 0.25) {
      // Stronger than Lusion's raw curve — FFT kernel otherwise reads as the ring
      const entryRing = THREE.MathUtils.lerp(
        isMobile ? 0.24 : 0.42,
        isMobile ? 0.12 : 0.18,
        THREE.MathUtils.clamp(blackTitleRatio / 0.5, 0, 1)
      )
      hs = Math.max(hs, entryRing * Math.min(1, blackFrameInRatio))
    }
    haloStrength = hs

    // bloomSaturation fit(blackTunnelRatio, 0, .7, 1, 3)
    bloomSaturation =
      blackTunnelRatio < 1
        ? THREE.MathUtils.lerp(1, 3, THREE.MathUtils.clamp(blackTunnelRatio / 0.7, 0, 1))
        : 1

    whiteTunnelBloom = !!isWhiteTunnelActive
    if (isWhiteTunnelActive) {
      // Exact Lusion: fit(whiteFrameRatio, 0, .05, 4, 2) then wait peak 20
      const waitBloomPeak = isMobile ? 12 : 20
      bloomAmount =
        astronautDropRatio < 1
          ? THREE.MathUtils.lerp(
              4,
              2,
              THREE.MathUtils.clamp(whiteFrameRatio / 0.05, 0, 1)
            )
          : THREE.MathUtils.lerp(
              0,
              waitBloomPeak,
              THREE.MathUtils.clamp(whiteTunnelWaitRatio / 0.1, 0, 1)
            )
      // Soft radius so cobalt walls wash into white like Lusion FFT star kernel
      bloomRadius = isMobile ? 0.45 : 0.62
      highPassMultiplier = isMobile ? 1.2 : 1.35
      // Gap clear must bloom: damp near 1 so white*clearAlpha reads as high-key wash
      whiteBloomDamp = isMobile ? 1.15 : 1.35
      // Exact Lusion: fit(whiteTunnelWaitRatio, 0, .1, .3, 0)
      clearAlpha = THREE.MathUtils.lerp(
        astronautDropRatio < 1 ? 0.38 : 0.3,
        0,
        THREE.MathUtils.clamp(whiteTunnelWaitRatio / 0.1, 0, 1)
      )
      // Exact Lusion: #fff while flying, #000 once dropped (wave wait)
      clearColor.set(astronautDropRatio < 1 ? '#ffffff' : '#000000')
    } else {
      whiteBloomDamp = 1
      // fit(blackTitleRatio, 0, .25, 30, 6) — stays at 6 through black tunnel
      const t = THREE.MathUtils.clamp(blackTitleRatio / 0.25, 0, 1)
      bloomAmount = THREE.MathUtils.lerp(isMobile ? 22 : 30, isMobile ? 5 : 6, t)
      clearAlpha = 0
      clearColor.set('#000000')
    }

    // Wider soft ring on entry title beat (Lusion FFT star reads as a large oval)
    const onEntryTitle =
      !isWhiteTunnelActive && blackFrameInRatio > 0.55 && blackTunnelRatio < 0.2
    haloWidth = onEntryTitle ? 0.85 : 0.6
    // Stage3D default haloRGBShift is 0.02 — entry needs more for the rainbow ring
    haloRGBShift = onEntryTitle ? 0.04 : isMobile ? 0.012 : 0.02
    haloMaskInner = onEntryTitle ? 0.15 : 0.3
    haloMaskOuter = onEntryTitle ? 0.75 : 0.5
    // Do NOT stomp white-tunnel bloomRadius/highPass — that killed the wash.
    if (!isWhiteTunnelActive) {
      bloomRadius = isMobile ? 0.15 : onEntryTitle ? 0.55 : 0.5
      highPassMultiplier = onEntryTitle ? 1.15 : 1
    }
    efxActive = isBlackTunnelActive || isWhiteTunnelActive
  }

  const setEfxOffset = (dz, rotZ = 0) => {
    offsetPosition.set(0, 0, dz)
    offsetRotation.set(0, 0, rotZ)
  }

  const markEfxSync = () => {
    efxNeedsSync = true
  }

  const renderFullscreen = (mat, target) => {
    const prevAuto = renderer.autoClear
    renderer.autoClear = true
    blit(mat, target)
    renderer.autoClear = prevAuto
  }

  const render = () => {
    if (!enabled) {
      renderer.setRenderTarget(null)
      renderer.render(scene, camera)
      return
    }

    // 1) Scene → RT (preserve alpha for Lusion bloom)
    const prevTarget = renderer.getRenderTarget()
    const prevAutoClear = renderer.autoClear
    renderer.setRenderTarget(sceneRT)
    renderer.autoClear = true
    // White tunnel: clear RGB must be #fff with clearAlpha≈0.3 so gaps bloom white.
    // Previously fell back to black (scene.background is null) and killed the wash.
    renderer.setClearColor(clearColor, clearAlpha)
    renderer.clear()
    const prevBg = scene.background
    scene.background = null
    // Hide glass for the base scene pass — drawn as a refraction overlay next
    const glassMesh = glassPass?.mesh
    const glassWasVisible = !!glassMesh?.visible
    if (glassWasVisible) glassMesh.visible = false
    renderer.render(scene, camera)
    scene.background = prevBg

    // 1b) GoalTunnelGlass — refract the just-rendered scene (Lusion preUfx)
    if (glassPass?.active && glassPass.overlayScene) {
      for (let i = 0; i < ITERATION; i++) {
        bloomWeights[i] = 0
        compositeMat.uniforms[`u_blurTexture${i}`].value = sceneRT.texture
      }
      compositeMat.uniforms.u_texture.value = sceneRT.texture
      compositeMat.uniforms.u_saturation.value = 1
      const prevPaint = compositeMat.uniforms.u_scrollPaint.value
      compositeMat.uniforms.u_scrollPaint.value = 0
      blit(compositeMat, glassBgRT)
      compositeMat.uniforms.u_scrollPaint.value = prevPaint

      glassPass.setBackground(glassBgRT.texture, glassBgRT.width, glassBgRT.height)
      glassPass.syncToCamera(camera, h)
      if (glassMesh) glassMesh.visible = true
      renderer.setRenderTarget(sceneRT)
      renderer.autoClear = false
      renderer.clearDepth()
      renderer.render(glassPass.overlayScene, camera)
      renderer.autoClear = true
    } else if (glassWasVisible && glassMesh) {
      glassMesh.visible = false
    }

    // 2) GoalTunnelEfx velocity blur
    let fromTex = sceneRT.texture
    projectionViewMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse)
    projectionViewInverseMatrix.copy(projectionViewMatrix).invert()

    if (efxActive && efxAmount > 0) {
      if (efxNeedsSync) {
        prevProjectionViewMatrix.copy(projectionViewMatrix)
        efxNeedsSync = false
      }
      extraTransformMatrix.compose(
        offsetPosition,
        _q.setFromEuler(offsetRotation),
        offsetScale
      )
      extraTransformMatrix.invert()
      finalPrevMatrix.copy(prevProjectionViewMatrix).multiply(extraTransformMatrix)

      efxMat.uniforms.u_texture.value = sceneRT.texture
      efxMat.uniforms.u_depthTexture.value = sceneRT.depthTexture
      efxMat.uniforms.u_projectionViewInverseMatrix.value.copy(projectionViewInverseMatrix)
      efxMat.uniforms.u_prevProjectionViewMatrix.value.copy(finalPrevMatrix)
      efxMat.uniforms.u_amount.value = efxAmount
      renderFullscreen(efxMat, efxRT)
      fromTex = efxRT.texture
      prevProjectionViewMatrix.copy(projectionViewMatrix)
    } else {
      prevProjectionViewMatrix.copy(projectionViewMatrix)
      efxNeedsSync = true
    }

    // Skip heavy bloom if nothing to glow
    if (bloomAmount < 0.05 && haloStrength < 0.005) {
      // just blit scene
      compositeMat.uniforms.u_texture.value = fromTex
      for (let i = 0; i < ITERATION; i++) {
        bloomWeights[i] = 0
        compositeMat.uniforms[`u_blurTexture${i}`].value = fromTex
      }
      compositeMat.uniforms.u_saturation.value = 1
      renderer.setRenderTarget(null)
      blit(compositeMat, null)
      renderer.autoClear = prevAutoClear
      renderer.setRenderTarget(prevTarget)
      return
    }

    // 3) High-pass + halo (Lusion: rgb * a * highPassMultiplier)
    highPassMat.uniforms.u_texture.value = fromTex
    highPassMat.uniforms.u_amount.value = highPassMultiplier
    highPassMat.uniforms.u_haloStrength.value = haloStrength
    highPassMat.uniforms.u_haloWidth.value = haloWidth
    highPassMat.uniforms.u_haloRGBShift.value = haloRGBShift
    highPassMat.uniforms.u_haloMaskInner.value = haloMaskInner
    highPassMat.uniforms.u_haloMaskOuter.value = haloMaskOuter
    renderFullscreen(highPassMat, highPassRT)

    // 4) Separable gaussian pyramid (mobile: 3 mips — enough glow, half the fill-rate)
    const bloomIters = isMobileBloom ? 3 : ITERATION
    let current = highPassRT
    for (let i = 0; i < bloomIters; i++) {
      const mat = blurMats[i]
      mat.uniforms.u_texture.value = current.texture
      mat.uniforms.u_resolution.value.set(current.width, current.height)
      mat.uniforms.u_direction.value = dirX
      renderFullscreen(mat, blurH[i])
      mat.uniforms.u_texture.value = blurH[i].texture
      mat.uniforms.u_resolution.value.set(blurH[i].width, blurH[i].height)
      mat.uniforms.u_direction.value = dirY
      renderFullscreen(mat, blurV[i])
      current = blurV[i]
    }

    // 5) Weights — Lusion desktop Bloom.USE_CONVOLUTION scales amount as
    //   amount*1024 / powerTwoCeilingBase(fftW*fftH)^4 * 0.85  (~0.31 at 30)
    // then FFT-convolves with a soft star kernel. Our gaussian pyramid must not
    // feed raw amount=30 into Unreal-style weights (that washes the entry suit).
    // Map desktop amounts through the FFT scale * soft gain so 30 ≈ gentle glow;
    // mobile Lusion already uses the non-FFT path with raw amounts.
    let amountForWeights = bloomAmount
    if (!isMobileBloom) {
      const fftW = powerTwoCeiling(w / 2) >> 1
      const fftH = powerTwoCeiling(h / 2) >> 1
      const fftBase = Math.max(1, Math.ceil(Math.log(fftW * fftH) / Math.log(2)))
      const convAmount = (bloomAmount * 1024) / Math.pow(fftBase, 4) * 0.85
      // Gaussian dissipates differently than the FFT star kernel — gain keeps a
      // visible soft halo/glint without the blown shoulder bloom.
      // White tunnel needs much less gain or the corridor washes to pure white.
      amountForWeights = convAmount * 48 * whiteBloomDamp
    } else {
      amountForWeights *= whiteBloomDamp
    }
    for (let u = 0; u < ITERATION; u++) {
      if (u >= bloomIters) {
        bloomWeights[u] = 0
        continue
      }
      const f = (bloomIters - u) / bloomIters
      let bw =
        amountForWeights *
        (f + (1.2 - f * 2) * bloomRadius) /
        Math.pow(2, bloomIters - u - 1)
      // Soften sharpest mips — FFT star kernel spreads specular energy wide.
      if (!isMobileBloom && u === 0) bw *= 0.15
      if (!isMobileBloom && u === 1) bw *= 0.45
      if (!isMobileBloom && u >= 3) bw *= 1.75
      bloomWeights[u] = bw
    }

    // 6) Composite to screen
    compositeMat.uniforms.u_texture.value = fromTex
    compositeMat.uniforms.u_saturation.value = bloomSaturation
    for (let i = 0; i < ITERATION; i++) {
      const src = i < bloomIters ? blurV[i].texture : blurV[bloomIters - 1].texture
      compositeMat.uniforms[`u_blurTexture${i}`].value = src
    }
    renderer.setRenderTarget(null)
    blit(compositeMat, null)
    renderer.autoClear = prevAutoClear
    renderer.setRenderTarget(prevTarget)
  }

  resize(size.x, size.y)

  return {
    resize,
    sync,
    render,
    setEfxOffset,
    markEfxSync,
    setGlassPass(api) {
      glassPass = api || null
    },
    setEfxAmount(v) {
      efxAmount = v
    },
    get clearAlpha() {
      return clearAlpha
    },
    setEnabled(v) {
      enabled = !!v
    },
    setScrollVelocity(v) {
      // Ease toward scroll energy — keep subtle so astronaut/halo stay readable
      const target = Math.min(1, Math.abs(v) * 0.12)
      scrollPaint += (target - scrollPaint) * 0.12
      compositeMat.uniforms.u_scrollPaint.value = scrollPaint
    },
    destroy() {
      sceneRT.dispose()
      glassBgRT.dispose()
      efxRT.dispose()
      highPassRT.dispose()
      blurH.forEach((r) => r.dispose())
      blurV.forEach((r) => r.dispose())
      highPassMat.dispose()
      compositeMat.dispose()
      efxMat.dispose()
      blurMats.forEach((m) => m.dispose())
      quad.geometry.dispose()
    },
  }
}
