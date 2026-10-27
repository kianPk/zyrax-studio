/**
 * Port of Lusion Line drawings (line_reel / line_goal) — scroll-revealed
 * blue/cyan strokes with end-cap circle.
 */
import * as THREE from 'three'
import { loadBuf } from './bufLoader.js'
import { clamp, fit, saturate, easeQuadInOut } from './scrollMath.js'

const LINES = [
  {
    id: 'reel',
    fileName: 'line_reel',
    aoThreshold: 0.555,
    margin: { x: -0.05, y: -0.8 },
    scrollToRatioFactors: [0.4, 1.3],
    boxMin: new THREE.Vector3(-0.0112049, -0.0141946, 0),
    boxMax: new THREE.Vector3(1.01357, 0.718671, 0),
    color0: '#5a90ff',
    color1: '#2a38ee',
    sectionSelector: '#home-reel',
  },
  {
    id: 'goal',
    fileName: 'line_goal',
    aoThreshold: 1e-4,
    margin: { x: 0.2, y: -0.6 },
    scrollToRatioFactors: [1.2, 2],
    boxMin: new THREE.Vector3(-0.0180006, -0.00963629, 0),
    boxMax: new THREE.Vector3(1.01777, 0.850395, 0),
    color0: '#94fffb',
    color1: '#1285dc',
    sectionSelector: '#home-goal',
  },
]

const lineVert = /* glsl */ `
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
`

const lineFrag = /* glsl */ `
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
`

const endVert = /* glsl */ `
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
`

const endFrag = /* glsl */ `
varying vec3 v_color;
varying vec2 v_uv;
void main() {
  float d = length(v_uv - 0.5) * 2.0;
  gl_FragColor.rgb = v_color;
  gl_FragColor.a = smoothstep(1.0, 1.0 - fwidth(d), d);
}
`

function ensureLinesCanvas() {
  let canvas = document.getElementById('lines-canvas')
  if (canvas) return canvas
  canvas = document.createElement('canvas')
  canvas.id = 'lines-canvas'
  canvas.setAttribute('aria-hidden', 'true')
  Object.assign(canvas.style, {
    position: 'fixed',
    inset: '0',
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: '4',
  })
  document.body.appendChild(canvas)
  return canvas
}

export async function createScrollLines() {
  const canvas = ensureLinesCanvas()
  const base = import.meta.env.BASE_URL
  const geos = await Promise.all(
    LINES.map((d) => loadBuf(`${base}assets/models/lines/${d.fileName}.buf`))
  )

  const scene = new THREE.Scene()
  const camera = new THREE.OrthographicCamera(0, 1, 0, -1, -100, 100)
  camera.position.z = 10

  let renderer
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      premultipliedAlpha: false,
    })
  } catch (err) {
    console.error('Lines WebGL unavailable', err)
    return { update() {}, resize() {}, destroy() {} }
  }
  renderer.setClearColor(0x000000, 0)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5))
  renderer.autoClear = true

  const lines = []
  const _v0 = new THREE.Vector3()
  const _v1 = new THREE.Vector3()
  const _box = new THREE.Box3()

  for (let i = 0; i < LINES.length; i++) {
    const data = LINES[i]
    const geo = geos[i]
    const sectionEl = document.querySelector(data.sectionSelector)
    if (!sectionEl || !geo) continue

    const container = new THREE.Group()
    const inner = new THREE.Group()
    container.add(inner)
    scene.add(container)

    const mat = new THREE.ShaderMaterial({
      uniforms: {
        u_showRatio: { value: 0 },
        u_aoThreshold: { value: data.aoThreshold },
        u_color0: { value: new THREE.Color(data.color0) },
        u_color1: { value: new THREE.Color(data.color1) },
        u_radius: { value: 0.008 },
      },
      vertexShader: lineVert,
      fragmentShader: lineFrag,
      depthTest: false,
      depthWrite: false,
      transparent: true,
      extensions: { derivatives: true },
    })
    const mesh = new THREE.Mesh(geo, mat)
    mesh.frustumCulled = false
    inner.add(mesh)

    const circleMat = new THREE.ShaderMaterial({
      uniforms: {
        u_color0: { value: new THREE.Color(data.color0) },
        u_color1: { value: new THREE.Color(data.color1) },
        u_ao: { value: 1 },
        u_mixRatio: { value: 0 },
      },
      vertexShader: endVert,
      fragmentShader: endFrag,
      side: THREE.DoubleSide,
      depthTest: false,
      depthWrite: false,
      transparent: true,
      extensions: { derivatives: true },
    })
    const circle = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), circleMat)
    circle.frustumCulled = false
    inner.add(circle)

    const posArr = geo.attributes.position.array
    const count = geo.attributes.position.count
    const lineRatioArray = new Float32Array(count)
    for (let r = 0; r < count; r++) lineRatioArray[r] = posArr[r * 3 + 2]

    const cpAttr = geo.attributes.CP
    const cdAttr = geo.attributes.Cd

    lines.push({
      data,
      sectionEl,
      container,
      inner,
      mesh,
      mat,
      circle,
      circleMat,
      lineRatioArray,
      cpAttr,
      cdAttr,
      count,
      offsetY: 0,
    })
  }

  let w = 1
  let h = 1
  let diag = 1

  const resize = () => {
    w = window.innerWidth || 1
    h = window.innerHeight || 1
    diag = Math.sqrt(w * w + h * h)
    camera.left = 0
    camera.right = w
    camera.top = 0
    camera.bottom = -h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h, false)
  }
  resize()
  window.addEventListener('resize', resize)

  const updateLine = (line) => {
    const { data, sectionEl, container, inner, mat, circle, circleMat, lineRatioArray, cpAttr, cdAttr, count } =
      line
    const rect = sectionEl.getBoundingClientRect()
    // Lusion screenY ≈ viewport top of section
    const screenY = rect.top + line.offsetY
    const vh = h
    const factors = data.scrollToRatioFactors
    let a = saturate(-(screenY - factors[0] * vh) / (factors[1] * vh))
    a = easeQuadInOut(a)

    const radius = 0.008 * fit(w, 540, 1920, 2, 1)
    // Lusion: after aspect trick both scales equal the viewport diagonal
    const scale = diag
    inner.position.x = data.margin.x * scale
    inner.position.y = data.margin.y * scale - screenY
    inner.scale.set(scale, scale, 1)

    mat.uniforms.u_showRatio.value = a
    mat.uniforms.u_radius.value = radius

    // Hide goal stroke once astronaut tunnel takes over (Lusion frames it away)
    const goalPhase = sectionEl.dataset?.goalPhase
    const hideForTunnel =
      data.id === 'goal' && (goalPhase === 'black-tunnel' || goalPhase === 'white')

    // visibility via world AABB of unit box
    container.updateMatrixWorld(true)
    _box.min.copy(data.boxMin)
    _box.max.copy(data.boxMax)
    _box.applyMatrix4(inner.matrixWorld)
    container.visible =
      !hideForTunnel && _box.max.y > -h && _box.min.y < 0 && a > 0.001

    // end-cap along revealed stroke
    let v = 0
    let blend = 0
    for (let r = 0; r < count; r++) {
      if (a >= lineRatioArray[r]) {
        v = r
        if (r === count - 1) blend = 0
        else blend = (a - lineRatioArray[r]) / (lineRatioArray[r + 1] - lineRatioArray[r] || 1)
      }
    }
    const T = v
    const M = Math.min(v + 1, count - 1)
    _v0.fromArray(cpAttr.array, v * 3)
    _v1.fromArray(cpAttr.array, M * 3)
    _v0.lerp(_v1, blend)
    const cdArr = cdAttr.array
    let b = cdArr[T] * (1 - blend) + cdArr[M] * blend
    b = 0.9 + 0.1 * b
    const C = saturate((a - (data.aoThreshold - 0.02)) / 0.04)
    circle.position.copy(_v0)
    circle.scale.set(radius, radius, 1)
    circleMat.uniforms.u_ao.value = Math.min(1, b + 1 - C)
    let wRatio = lineRatioArray[T] * (1 - blend) + lineRatioArray[M] * blend
    wRatio = 1 - Math.pow(1 - clamp(wRatio, 0, 1), 2)
    circleMat.uniforms.u_mixRatio.value = wRatio
  }

  const update = () => {
    for (const line of lines) updateLine(line)
    renderer.render(scene, camera)
  }

  // first paint
  update()

  return {
    update,
    resize,
    /** Goal section can shift line with tunnel frame offset (px). */
    setGoalOffset(px) {
      const goal = lines.find((l) => l.data.id === 'goal')
      if (goal) goal.offsetY = px || 0
    },
    destroy() {
      window.removeEventListener('resize', resize)
      renderer.dispose()
      canvas.remove()
    },
  }
}
