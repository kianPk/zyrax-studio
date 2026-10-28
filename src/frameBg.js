/**
 * Lusion GoalSection frameBgMesh — rounded frame + bezel + blue glow
 * around the pane the astronaut punches through.
 */
import * as THREE from 'three'
import { fit, clamp } from './scrollMath.js'

const frameBgVert = /* glsl */ `
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
`

const frameBgFrag = /* glsl */ `
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
`

function loadTexture(url) {
  return new Promise((resolve) => {
    new THREE.TextureLoader().load(
      url,
      (tex) => {
        tex.colorSpace = THREE.NoColorSpace
        tex.flipY = false
        tex.minFilter = THREE.LinearFilter
        tex.magFilter = THREE.LinearFilter
        tex.needsUpdate = true
        resolve(tex)
      },
      undefined,
      () => resolve(null)
    )
  })
}

export async function createFrameBg({ base }) {
  const [tabletTex, desktopTex] = await Promise.all([
    loadTexture(`${base}assets/textures/tunnels/tablet.png`),
    loadTexture(`${base}assets/textures/tunnels/desktop.png`),
  ])

  const blackTex = (() => {
    const data = new Uint8Array([0, 0, 0, 255])
    const t = new THREE.DataTexture(data, 1, 1)
    t.needsUpdate = true
    return t
  })()

  const uniforms = {
    u_bgColor: { value: new THREE.Color('#000000') },
    u_frameOffset: { value: new THREE.Vector2() },
    u_frameScale: { value: 1 },
    u_frameRotate: { value: 0 },
    u_radiusScale: { value: 1 },
    u_glowColor: { value: new THREE.Color(0, 0, 0) },
    u_glowRadius: { value: 0.11 },
    u_glowUpperBound: { value: 0.5 },
    u_glowPow: { value: 0.1 },
    u_glowTint: { value: 0 },
    u_domXY: { value: new THREE.Vector2() },
    u_domWH: { value: new THREE.Vector2(1, 1) },
    u_dom2Offset: { value: new THREE.Vector2() },
    u_dom2WH: { value: new THREE.Vector2(1, 1) },
    u_dom2Texture: { value: blackTex },
    u_viewportResolution: { value: new THREE.Vector2(1, 1) },
    u_globalRadius: { value: 24 },
  }

  const geo = new THREE.PlaneGeometry(2, 2)
  const mat = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: frameBgVert,
    fragmentShader: frameBgFrag,
    depthTest: false,
    depthWrite: false,
    transparent: true,
    blending: THREE.NormalBlending,
    toneMapped: false,
  })

  const mesh = new THREE.Mesh(geo, mat)
  mesh.frustumCulled = false
  mesh.renderOrder = -1
  mesh.visible = false
  mesh.name = 'goal-frame-bg'

  const overlayScene = new THREE.Scene()
  overlayScene.add(mesh)

  const _blue = new THREE.Color('#1a2ffb')
  const _black = new THREE.Color('#000000')
  const _offWhite = new THREE.Color('#f0f1fa')
  const _tmp = new THREE.Color()

  let _domX = 0
  let _domY = 0
  let _capturedOffsetY = 0

  const updateFromScroll = ({
    isBlackSide = false,
    blackFrameInRatio = 0,
    whiteFrameOutRatio = 0,
    glassBreakRatio = 0,
    astronautDropRatio = 0,
    blackFrameShowRatio = 0,
    frameRect = null,
    innerRect = null,
    viewportW = window.innerWidth,
    viewportH = window.innerHeight,
    globalRadius = 24,
  } = {}) => {
    uniforms.u_viewportResolution.value.set(viewportW, viewportH)
    uniforms.u_globalRadius.value = globalRadius

    const w = frameRect
    const R = innerRect || frameRect
    if (!w || w.width < 4 || w.height < 4) {
      mesh.visible = false
      return null
    }

    let E
    let f
    let I
    let F = 0
    let k = 0
    let L = 0
    let D = 0
    const ne = uniforms.u_glowColor.value

    if (isBlackSide) {
      E = clamp(blackFrameInRatio, 0, 1)
      f = E * 0.4
      I = 1
      F = fit(E, 0, 1, 0.11, -0.5)
      k = fit(E, 0, 1, 0.25, 2)
      L = fit(E, 0, 1, 0.06, 0.3)
      ne.copy(_black).lerp(_offWhite, E)
      uniforms.u_dom2Texture.value = tabletTex?.image?.width ? tabletTex : blackTex
      uniforms.u_bgColor.value.set('#000000')
    } else {
      // Exact Lusion: E = fit(offsetY, whiteFrameOut.from, to, 1, 0)
      E = 1 - clamp(whiteFrameOutRatio, 0, 1)
      f = E * -0.3
      I = 0
      const oe = glassBreakRatio
      if (oe < 0) {
        D = 0.8
        ne.copy(_black)
      } else {
        F = -0.5
        k = fit(oe, 0, 0.15, 0, 0.8)
        k = fit(oe, 0.15, 0.3, k, 2)
        L = fit(oe, 0, 0.1, 0.3, 1)
        L = fit(oe, 0.1, 1, L, 0.2)
        D = 0.5
        let ee = fit(oe, 0, 0.1, 1, 0)
        ee = fit(oe, 0.1, 0.8, ee, 0.85)
        ne.copy(_blue).lerp(_tmp.copy(_black), ee)
      }
      uniforms.u_dom2Texture.value = desktopTex?.image?.width ? desktopTex : blackTex
      uniforms.u_bgColor.value.set(
        astronautDropRatio > 0.001 ? '#000000' : '#f0f1fa'
      )
    }

    const K = viewportH * 0.2 * (1 - clamp(blackFrameShowRatio, 0, 1))
    const G = Math.hypot(viewportW, viewportH)
    const p = THREE.MathUtils.lerp(1, G / Math.min(w.width, w.height), E)
    const te = astronautDropRatio

    // Exact Lusion: visible = E < 1 && te < 1
    mesh.visible = E < 0.999 && te < 1
    if (!mesh.visible) return null

    _domX = w.left
    _domY = w.top + K
    _capturedOffsetY = 0
    uniforms.u_domWH.value.set(
      Math.max(1, Math.ceil(w.width)),
      Math.max(1, Math.ceil(w.height))
    )
    uniforms.u_domXY.value.set(_domX, _domY - _capturedOffsetY)

    if (R) {
      uniforms.u_dom2Offset.value.set(
        R.left + R.width * 0.5 - w.left - w.width * 0.5,
        R.top + R.height * 0.5 - (w.top + K) - w.height * 0.5
      )
      uniforms.u_dom2WH.value.set(Math.max(1, R.width), Math.max(1, R.height))
    } else {
      uniforms.u_dom2Offset.value.set(0, 0)
      uniforms.u_dom2WH.value.set(w.width, w.height)
    }

    const g = te < 1 ? viewportW * 0.5 - w.left - w.width * 0.5 : 0
    const v = -(w.top + K + w.height * 0.5 - viewportH * 0.5)
    uniforms.u_frameOffset.value.set(g * E, v * E)
    uniforms.u_frameScale.value = p
    uniforms.u_frameRotate.value = f
    uniforms.u_radiusScale.value = I
    uniforms.u_glowRadius.value = F
    uniforms.u_glowUpperBound.value = k
    uniforms.u_glowPow.value = L
    uniforms.u_glowTint.value = D

    return {
      frameScale: p,
      frameRotation: f,
      cameraViewportOffsetX: g * (1 - E),
      cameraViewportOffsetY: v * (1 - E),
    }
  }

  return {
    mesh,
    overlayScene,
    updateFromScroll,
    resize(w, h) {
      uniforms.u_viewportResolution.value.set(w, h)
    },
    get visible() {
      return mesh.visible
    },
    dispose() {
      geo.dispose()
      mat.dispose()
      tabletTex?.dispose()
      desktopTex?.dispose()
      blackTex.dispose()
    },
  }
}
