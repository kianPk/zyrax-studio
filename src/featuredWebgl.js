/**
 * Lusion ProjectItem UfxMesh — WebGL depth-parallax cards synced to DOM.
 * home.webp + home_depth.webp with showRatio / hover focus / side slide-in.
 */
import * as THREE from 'three'
import { SecondOrderDynamics } from './lusionMotion.js'
import { clamp, fit, easeExpoOut, getDomRange } from './scrollMath.js'

const PARALLAX_SAMPLES = 12
const BLUR_SAMPLES = 6

const CardVert = /* glsl */ `
uniform vec2 u_resolution;
uniform vec2 u_domXY;
uniform vec2 u_domWH;
uniform vec3 u_meshOffset;
uniform float u_rotZ;
varying vec2 v_uv;
void main() {
  v_uv = uv;
  vec2 local = position.xy; // PlaneGeometry -0.5..0.5
  float c = cos(u_rotZ);
  float s = sin(u_rotZ);
  vec2 rotated = vec2(local.x * c - local.y * s, local.x * s + local.y * c);
  vec2 px = u_domXY + (rotated + 0.5) * u_domWH + u_meshOffset.xy;
  vec2 ndc = vec2(
    (px.x / u_resolution.x) * 2.0 - 1.0,
    -(px.y / u_resolution.y) * 2.0 + 1.0
  );
  gl_Position = vec4(ndc, 0.0, 1.0);
}
`

// Exact Lusion frag$l (ProjectItem) — blue-noise via hash stand-in
const CardFrag = /* glsl */ `
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
  return smoothstep(0., 0. - fwidth(d), d);
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
  float stepDist = dist / float(${PARALLAX_SAMPLES});
  vec3 rayStep = rayDir * stepDist;
  vec3 rayPos = rayOri + rayDir * (skipDist + stepDist * noise.x);
  for (int i = 0; i < ${PARALLAX_SAMPLES}; i++) {
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
  float numSampleInv = 1.0 / float(${BLUR_SAMPLES});
  for (int i = 0; i < ${BLUR_SAMPLES}; i++) {
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
`

/** Scalar SecondOrderDynamics — Lusion number path (zoomMotion). */
function makeScalarDynamics(initial, f, z, r) {
  const w = Math.PI * 2 * f
  const k1 = z / (Math.PI * f)
  const k2 = 1 / (w * w)
  const k3 = (r * z) / w
  let value = initial
  let valueVel = 0
  let prevTarget = initial
  let target = initial
  return {
    get value() {
      return value
    },
    set target(v) {
      target = v
    },
    get target() {
      return target
    },
    update(dt) {
      if (dt <= 0) return value
      const targetVel = (target - prevTarget) / dt
      prevTarget = target
      const k2s = Math.max(k2, (dt * dt) / 2 + (dt * k1) / 2, dt * k1)
      value += valueVel * dt
      valueVel += ((target + k3 * targetVel - value - k1 * valueVel) * dt) / k2s
      return value
    },
    reset(v = initial) {
      value = v
      valueVel = 0
      prevTarget = v
      target = v
    },
  }
}

export async function createFeaturedWebgl(projects) {
  const section = document.getElementById('home-featured')
  const list = document.getElementById('project-list')
  if (!section || !list) return { update() {}, resize() {}, destroy() {} }

  const canvas = document.createElement('canvas')
  canvas.id = 'featured-webgl-canvas'
  canvas.setAttribute('aria-hidden', 'true')
  document.body.appendChild(canvas)
  document.documentElement.classList.add('has-featured-webgl')

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    premultipliedAlpha: false,
  })
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1))
  renderer.setClearColor(0x000000, 0)
  renderer.outputColorSpace = THREE.SRGBColorSpace

  const scene = new THREE.Scene()
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

  const loader = new THREE.TextureLoader()
  const base = `${import.meta.env.BASE_URL}assets/projects/`
  const mouse = { x: 0, y: 0 }
  const onMove = (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  }
  window.addEventListener('pointermove', onMove, { passive: true })

  const items = []
  const domItems = Array.from(list.querySelectorAll('.project-item'))

  await Promise.all(
    domItems.map(async (dom, index) => {
      const id = dom.dataset.id || projects[index]?.id
      const main = dom.querySelector('.project-item-main')
      const imgEl = dom.querySelector('.project-item-image img')
      if (imgEl) {
        imgEl.style.opacity = '0'
        imgEl.setAttribute('aria-hidden', 'true')
      }
      const colorBg = new THREE.Color(dom.dataset.colorBg || '#111111')

      let colorMap
      let depthMap
      try {
        ;[colorMap, depthMap] = await Promise.all([
          loader.loadAsync(`${base}${id}/home.webp`),
          loader.loadAsync(`${base}${id}/home_depth.webp`),
        ])
      } catch (err) {
        console.warn('Featured WebGL textures failed for', id, err)
        if (imgEl) imgEl.style.opacity = '1'
        return
      }
      colorMap.colorSpace = THREE.SRGBColorSpace
      colorMap.wrapS = colorMap.wrapT = THREE.ClampToEdgeWrapping
      depthMap.colorSpace = THREE.NoColorSpace
      depthMap.wrapS = depthMap.wrapT = THREE.ClampToEdgeWrapping
      depthMap.minFilter = THREE.LinearFilter
      depthMap.magFilter = THREE.LinearFilter
      depthMap.generateMipmaps = false

      const texSize = new THREE.Vector2(
        colorMap.image?.width || 1024,
        colorMap.image?.height || 1024
      )
      const focusPos = new THREE.Vector3(0, 0, -1)
      const focusDyn = new SecondOrderDynamics(new THREE.Vector3(), 1, 0.6, 2)
      // Lusion: zoomMotion starts at 1, eases to 0
      const zoomDyn = makeScalarDynamics(1, 2.2, 0.7, 3)
      zoomDyn.target = 0
      const shiftXY = new THREE.Vector2()
      const shiftXYTarget = new THREE.Vector2()

      const uniforms = {
        u_texture: { value: colorMap },
        u_depthTexture: { value: depthMap },
        u_colorBg: { value: colorBg },
        u_showRatio: { value: 0 },
        u_activeRatio: { value: 0 },
        u_textureSize: { value: texSize },
        u_domWH: { value: new THREE.Vector2(1, 1) },
        u_domXY: { value: new THREE.Vector2(0, 0) },
        u_shiftXY: { value: shiftXY },
        u_focusPos: { value: focusPos },
        u_zoomRatio: { value: 1 },
        u_dofRangeOffset: { value: 0 },
        u_saturation: { value: 0 },
        u_brightness: { value: 0 },
        u_rippleStrength: { value: 0 },
        u_resolution: { value: new THREE.Vector2(1, 1) },
        u_globalRadius: { value: 15 },
        u_time: { value: 0 },
        u_meshOffset: { value: new THREE.Vector3() },
        u_rotZ: { value: 0 },
      }

      const mat = new THREE.ShaderMaterial({
        uniforms,
        vertexShader: CardVert,
        fragmentShader: CardFrag,
        transparent: true,
        depthTest: false,
        depthWrite: false,
      })
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mat)
      mesh.frustumCulled = false
      mesh.renderOrder = 10 + index
      mesh.visible = false
      scene.add(mesh)

      let isHover = false
      let hoverRatio = 0
      let showTime = 0
      let dofRangeOffsetRatio = 0
      const hoverThresholds = [0, 0.2, 0.3]
      const findThreshold = (v) => {
        for (let i = 0; i < hoverThresholds.length; i++) if (v < hoverThresholds[i]) return i
        return hoverThresholds.length
      }

      if (window.innerWidth >= 812) {
        main?.addEventListener('mouseenter', () => {
          isHover = true
        })
        main?.addEventListener('mouseleave', () => {
          isHover = false
        })
      }

      items.push({
        mesh,
        uniforms,
        focusDyn,
        focusPos,
        zoomDyn,
        shiftXY,
        shiftXYTarget,
        index,
        main,
        dom,
        update(dt, vw, vh, time, scrollStrength) {
          const range = getDomRange(dom)
          const inView = range.ratio > -1 && range.ratio < 1
          if (!inView) {
            showTime = 0
            mesh.visible = false
            uniforms.u_showRatio.value = 0
            return
          }
          showTime += dt

          const rect = main.getBoundingClientRect()
          uniforms.u_domXY.value.set(rect.left, rect.top)
          uniforms.u_domWH.value.set(Math.max(1, rect.width), Math.max(1, rect.height))
          uniforms.u_resolution.value.set(vw, vh)
          uniforms.u_time.value = time
          uniforms.u_rippleStrength.value = Math.min(0.15, scrollStrength * 0.5)
          uniforms.u_globalRadius.value = Math.min(rect.width, rect.height) * 0.04

          // Lusion enter: slide from sides + rotate
          const C = fit(showTime, 0, 2, 0, 1, easeExpoOut)
          const side = index % 2 - 0.5
          uniforms.u_meshOffset.value.set((1 - C) * side * -vw * 0.1, 0, 0)
          uniforms.u_rotZ.value = (1 - C) * side * 0.1

          const b = fit(showTime, 0, 1.5, 0, 1, easeExpoOut)
          uniforms.u_showRatio.value = b
          mesh.visible = b > 0.01

          const prevHover = hoverRatio
          hoverRatio = clamp(hoverRatio + (isHover ? 1 : -1) * dt, 0, 1)
          if (prevHover < hoverRatio) {
            const w = findThreshold(prevHover)
            const R = findThreshold(hoverRatio)
            if (R !== w) {
              shiftXYTarget
                .set(Math.random() - 0.5, Math.random() - 0.5)
                .normalize()
                .multiplyScalar(fit(hoverRatio, 0, 0.6, 1, 0))
            }
            if (R === hoverThresholds.length) shiftXYTarget.multiplyScalar(0.5)
          } else {
            shiftXYTarget.multiplyScalar(0.95)
          }
          shiftXY.lerp(shiftXYTarget, 0.2)

          const T = focusDyn.target
          if (isHover) {
            const g = rect.width
            const v = rect.height
            const f = rect.left
            const p = rect.top
            const c = mouse.x
            const u = mouse.y
            const R = hoverRatio > 0 ? fit(hoverRatio, 0, 0.3, 1, 0) * v * 0.75 : 0
            const w = 1
            T.x = ((c - f - g * 0.5 + Math.cos(time * 20) * R) / g) * -v * w
            T.y = ((u - p - v * 0.5 - Math.sin(time * 30) * R) / v) * v * w
            T.z = 0.5
          } else {
            T.x = 0
            T.y = 0
            T.z = -1
          }
          focusDyn.update(dt)
          focusPos.copy(focusDyn.value)

          zoomDyn.target = isHover ? 1 : 0
          zoomDyn.update(dt)
          uniforms.u_zoomRatio.value = zoomDyn.value

          dofRangeOffsetRatio = clamp(dofRangeOffsetRatio + (isHover ? 0.75 : -1) * dt, 0, 1)
          uniforms.u_dofRangeOffset.value = THREE.MathUtils.lerp(0, -0.5, dofRangeOffsetRatio)
          uniforms.u_saturation.value = 0
          uniforms.u_brightness.value = 0
          uniforms.u_activeRatio.value = 0
        },
      })
    })
  )

  let w = 1
  let h = 1
  let time = 0
  let lastScroll = window.scrollY
  let scrollStrength = 0

  const resize = () => {
    w = window.innerWidth
    h = window.innerHeight
    renderer.setSize(w, h, false)
  }
  resize()
  window.addEventListener('resize', resize)

  return {
    update(dt) {
      time += dt
      const sy = window.scrollY
      const vel = Math.abs(sy - lastScroll) / Math.max(dt, 1e-3)
      lastScroll = sy
      scrollStrength += (Math.min(1, vel * 0.002) - scrollStrength) * 0.15
      const sectionRange = getDomRange(section)
      const on = sectionRange.isActive
      canvas.style.visibility = on ? 'visible' : 'hidden'
      if (!on) return
      for (const item of items) item.update(dt, w, h, time, scrollStrength)
      renderer.render(scene, camera)
    },
    resize,
    destroy() {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('resize', resize)
      document.documentElement.classList.remove('has-featured-webgl')
      items.forEach((it) => {
        it.mesh.geometry.dispose()
        it.mesh.material.dispose()
      })
      renderer.dispose()
      canvas.remove()
    },
  }
}
