/**
 * Lusion ProjectItem UfxMesh — WebGL depth-parallax cards + click-into zoom.
 */
import * as THREE from 'three'
import { SecondOrderDynamics } from './lusionMotion.js'
import { clamp, fit, easeExpoOut, easeCubicInOut, getDomRange } from './scrollMath.js'
import { createAnimatedCover, createCoverDepthTexture } from './featuredCovers.js'

const PARALLAX_SAMPLES = 12
const BLUR_SAMPLES = 6
const OPEN_DURATION = 1.35

const CardVert = /* glsl */ `
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

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
  float fw = max(fwidth(d), 0.001);
  return 1.0 - smoothstep(-fw, fw, d);
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
  }
}

export async function createFeaturedWebgl(projects) {
  const section = document.getElementById('home-featured')
  const list = document.getElementById('project-list')
  if (!section || !list) return { update() {}, resize() {}, destroy() {}, beginOpen() {} }

  const canvas = document.createElement('canvas')
  canvas.id = 'featured-webgl-canvas'
  canvas.setAttribute('aria-hidden', 'true')
  document.body.appendChild(canvas)

  let renderer
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      premultipliedAlpha: false,
      powerPreference: 'high-performance',
      failIfMajorPerformanceCaveat: false,
      preserveDrawingBuffer: true,
    })
  } catch (err) {
    canvas.remove()
    console.warn('Featured WebGL unavailable', err)
    return { update() {}, resize() {}, destroy() {}, beginOpen() {} }
  }
  document.documentElement.classList.add('has-featured-webgl')
  renderer.setPixelRatio(1)
  renderer.setClearColor(0x000000, 0)
  renderer.outputColorSpace = THREE.SRGBColorSpace

  const scene = new THREE.Scene()
  const camera = new THREE.OrthographicCamera(0, 1, 1, 0, -1000, 1000)
  camera.position.z = 10

  const mouse = { x: 0, y: 0 }
  const onMove = (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  }
  window.addEventListener('pointermove', onMove, { passive: true })

  const sharedGeo = new THREE.PlaneGeometry(1, 1)
  const sharedDepth = createCoverDepthTexture()
  const items = []
  const domItems = Array.from(list.querySelectorAll('.project-item'))

  // Click-into state (Lusion ProjectItemList zoom)
  let selectedId = null
  let pendingUrl = null
  let openProgress = 0
  let opening = false
  let openDone = false
  let listZoom = 0
  const baseLayout = new Map() // id → { cx, cy, w, h }

  await Promise.all(
    domItems.map(async (dom, index) => {
      const id = dom.dataset.id || projects[index]?.id
      const project = projects.find((p) => p.id === id) || projects[index] || {}
      const main = dom.querySelector('.project-item-main')
      const imgEl = dom.querySelector('.project-item-image img')
      if (imgEl) {
        imgEl.style.opacity = '0'
        imgEl.setAttribute('aria-hidden', 'true')
      }
      const colorBg = new THREE.Color(dom.dataset.colorBg || '#111111')

      const cover = createAnimatedCover({
        id,
        colorBg: dom.dataset.colorBg || project.colorBg,
        colorText: dom.dataset.colorText || project.colorText,
      })
      // seed first frame
      cover.update(index * 0.37)

      const focusPos = new THREE.Vector3(0, 0, -1)
      const focusDyn = new SecondOrderDynamics(new THREE.Vector3(), 1, 0.6, 2)
      const zoomDyn = makeScalarDynamics(1, 2.2, 0.7, 3)
      zoomDyn.target = 0
      const shiftXY = new THREE.Vector2()
      const shiftXYTarget = new THREE.Vector2()

      const uniforms = {
        u_texture: { value: cover.texture },
        u_depthTexture: { value: sharedDepth },
        u_colorBg: { value: colorBg },
        u_showRatio: { value: 0 },
        u_activeRatio: { value: 0 },
        u_textureSize: { value: cover.size.clone() },
        u_domWH: { value: new THREE.Vector2(1, 1) },
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
      }

      const mat = new THREE.ShaderMaterial({
        uniforms,
        vertexShader: CardVert,
        fragmentShader: CardFrag,
        transparent: true,
        depthTest: false,
        depthWrite: false,
        toneMapped: false,
      })
      const mesh = new THREE.Mesh(sharedGeo, mat)
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
          if (!opening) isHover = true
        })
        main?.addEventListener('mouseleave', () => {
          isHover = false
        })
      }

      // Intercept click → Lusion zoom-into then navigate
      dom.addEventListener('click', (e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
        if (opening) {
          e.preventDefault()
          return
        }
        const url = project.url || dom.getAttribute('href')
        if (!url) return
        e.preventDefault()
        beginOpen(id, url)
      })

      items.push({
        id,
        mesh,
        uniforms,
        cover,
        focusDyn,
        focusPos,
        zoomDyn,
        shiftXY,
        shiftXYTarget,
        index,
        main,
        dom,
        get isHover() {
          return isHover
        },
        set isHover(v) {
          isHover = v
        },
        update(dt, vw, vh, time, scrollStrength, zoomU, selected) {
          const isSelected = selected && selected === id
          const range = getDomRange(dom)
          const inView = range.ratio > -1 && range.ratio < 1
          if ((!inView && !opening) || !main) {
            showTime = 0
            mesh.visible = false
            uniforms.u_showRatio.value = 0
            return
          }
          showTime += dt
          cover.update(time + index)

          const rect = main.getBoundingClientRect()
          let w = Math.max(1, rect.width)
          let h = Math.max(1, rect.height)
          let cx = rect.left + w * 0.5
          let cy = vh - (rect.top + h * 0.5)

          // Store pre-zoom layout once when opening starts
          if (opening && !baseLayout.has(id)) {
            baseLayout.set(id, { cx, cy, w, h })
          }
          const base = baseLayout.get(id) || { cx, cy, w, h }

          // Lusion container zoom around selected card
          if (opening && zoomU > 0 && selected) {
            const sel = baseLayout.get(selected)
            if (sel) {
              const coverScale = Math.max(vw / sel.w, vh / sel.h) * 1.2
              const s = THREE.MathUtils.lerp(1, coverScale, zoomU)
              const ox = THREE.MathUtils.lerp(0, vw * 0.5 - sel.cx, zoomU)
              const oy = THREE.MathUtils.lerp(0, vh * 0.5 - sel.cy, zoomU)
              cx = (base.cx - sel.cx) * s + sel.cx + ox
              cy = (base.cy - sel.cy) * s + sel.cy + oy
              w = base.w * s
              h = base.h * s
              // slight tilt like Lusion
              mesh.rotation.y = zoomU * 0.3 * ((sel.cx - vw * 0.5) / vw)
              mesh.rotation.z = -zoomU * 0.3 * ((sel.cx - vw * 0.5) / vw)
            }
          } else {
            mesh.rotation.y = 0
            mesh.rotation.z = 0
          }

          // Keep UV/mask on original card size while mesh scales to fill viewport
          uniforms.u_domWH.value.set(base.w, base.h)
          uniforms.u_resolution.value.set(vw, vh)
          uniforms.u_time.value = time
          uniforms.u_rippleStrength.value = opening
            ? Math.min(0.2, zoomU * 0.12)
            : Math.min(0.15, scrollStrength * 0.5)
          uniforms.u_globalRadius.value = opening
            ? Math.min(base.w, base.h) * THREE.MathUtils.lerp(0.04, 0.0, zoomU)
            : Math.min(base.w, base.h) * 0.04

          const C = fit(showTime, 0, 2, 0, 1, easeExpoOut)
          const side = index % 2 - 0.5
          const slideX = opening ? 0 : (1 - C) * side * -vw * 0.1
          const rotZ = opening ? mesh.rotation.z : (1 - C) * side * 0.1

          mesh.position.set(cx + slideX, cy, isSelected ? 2 : 0)
          mesh.scale.set(w, h, 1)
          if (!opening) mesh.rotation.z = -rotZ

          const b = fit(showTime, 0, 1.5, 0, 1, easeExpoOut)
          uniforms.u_showRatio.value = opening ? Math.max(b, 1) : b
          mesh.visible = uniforms.u_showRatio.value > 0.01
          mesh.renderOrder = isSelected ? 100 : 10 + index

          const prevHover = hoverRatio
          hoverRatio = clamp(hoverRatio + (isHover && !opening ? 1 : -1) * dt, 0, 1)
          if (prevHover < hoverRatio) {
            const a = findThreshold(prevHover)
            const R = findThreshold(hoverRatio)
            if (R !== a) {
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
          const activeBoost = isSelected ? zoomU : 0
          if ((isHover && !opening) || activeBoost > 0.01) {
            if (isHover && !opening) {
              const R = hoverRatio > 0 ? fit(hoverRatio, 0, 0.3, 1, 0) * h * 0.75 : 0
              T.x = ((mouse.x - rect.left - rect.width * 0.5 + Math.cos(time * 20) * R) / rect.width) * -rect.height
              T.y = ((mouse.y - rect.top - rect.height * 0.5 - Math.sin(time * 30) * R) / rect.height) * rect.height
            } else {
              T.x = 0
              T.y = 0
            }
            T.z = 0.5
          } else {
            T.x = 0
            T.y = 0
            T.z = -1
          }
          focusDyn.update(dt)
          focusPos.copy(focusDyn.value)

          zoomDyn.target = isHover || isSelected ? 1 : 0
          zoomDyn.update(dt)
          uniforms.u_zoomRatio.value = zoomDyn.value

          dofRangeOffsetRatio = clamp(
            dofRangeOffsetRatio + ((isHover || isSelected) ? 0.75 : -1) * dt,
            0,
            1
          )
          uniforms.u_dofRangeOffset.value = THREE.MathUtils.lerp(0, -0.5, dofRangeOffsetRatio)
          uniforms.u_saturation.value = 0
          uniforms.u_brightness.value = 0

          // Lusion: selected → zoom² fog dive; others get pushed away
          if (opening) {
            if (isSelected) {
              uniforms.u_activeRatio.value = zoomU * zoomU
            } else {
              uniforms.u_activeRatio.value = Math.min(1, zoomU * 1.2)
              uniforms.u_showRatio.value = Math.max(0, 1 - zoomU * 1.4)
            }
          } else {
            uniforms.u_activeRatio.value = 0
          }
        },
      })
    })
  )

  let w = 1
  let h = 1
  let time = 0
  let lastScroll = window.scrollY
  let scrollStrength = 0

  function freezeScroll(on) {
    const lenis = window.lenis
    if (on) {
      document.documentElement.classList.add('featured-opening')
      lenis?.stop?.()
    } else {
      document.documentElement.classList.remove('featured-opening')
      lenis?.start?.()
    }
  }

  function beginOpen(id, url) {
    if (opening) return
    selectedId = id
    pendingUrl = url
    opening = true
    openDone = false
    openProgress = 0
    listZoom = 0
    baseLayout.clear()
    freezeScroll(true)
    // Capture layout immediately
    for (const item of items) {
      if (!item.main) continue
      const rect = item.main.getBoundingClientRect()
      baseLayout.set(item.id, {
        cx: rect.left + rect.width * 0.5,
        cy: h - (rect.top + rect.height * 0.5),
        w: Math.max(1, rect.width),
        h: Math.max(1, rect.height),
      })
      item.isHover = false
    }
  }

  const resize = () => {
    w = window.innerWidth
    h = window.innerHeight
    renderer.setSize(w, h, false)
    camera.left = 0
    camera.right = w
    camera.top = h
    camera.bottom = 0
    camera.updateProjectionMatrix()
  }
  resize()
  window.addEventListener('resize', resize)

  return {
    beginOpen,
    update(dt) {
      time += dt
      if (opening) {
        openProgress = Math.min(1, openProgress + dt / OPEN_DURATION)
        listZoom = easeCubicInOut(openProgress)
        if (openProgress >= 1 && !openDone) {
          openDone = true
          const url = pendingUrl
          // brief hold on full zoom then navigate
          setTimeout(() => {
            if (url) window.open(url, '_blank', 'noopener,noreferrer')
            // soft reset so returning to tab isn't stuck zoomed
            setTimeout(() => {
              opening = false
              selectedId = null
              pendingUrl = null
              openProgress = 0
              listZoom = 0
              baseLayout.clear()
              freezeScroll(false)
            }, 400)
          }, 180)
        }
      }

      const sy = window.scrollY
      const vel = Math.abs(sy - lastScroll) / Math.max(dt, 1e-3)
      lastScroll = sy
      scrollStrength += (Math.min(1, vel * 0.002) - scrollStrength) * 0.15
      const sectionRange = getDomRange(section)
      const on = sectionRange.isActive || opening
      canvas.style.visibility = on ? 'visible' : 'hidden'
      canvas.style.zIndex = opening ? '40' : ''
      if (!on) return
      for (const item of items) item.update(dt, w, h, time, scrollStrength, listZoom, selectedId)
      renderer.render(scene, camera)
    },
    resize,
    destroy() {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('resize', resize)
      document.documentElement.classList.remove('has-featured-webgl', 'featured-opening')
      items.forEach((it) => {
        it.cover?.dispose()
        it.mesh.material.dispose()
      })
      sharedDepth.dispose()
      sharedGeo.dispose()
      renderer.dispose()
      canvas.remove()
    },
  }
}
