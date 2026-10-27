/**
 * Lightweight stand-in for Lusion Stage3D bloom + halo RGB-shift.
 * BloomAmount / haloStrength are driven from GoalTunnels.syncProperties.
 */
import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'

const HaloShader = {
  uniforms: {
    tDiffuse: { value: null },
    u_haloStrength: { value: 0 },
    u_haloRGBShift: { value: 0.015 },
    u_haloMaskInner: { value: 0.3 },
    u_haloMaskOuter: { value: 0.5 },
    u_resolution: { value: new THREE.Vector2(1, 1) },
  },
  vertexShader: /* glsl */ `
    varying vec2 v_uv;
    void main() {
      v_uv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float u_haloStrength;
    uniform float u_haloRGBShift;
    uniform float u_haloMaskInner;
    uniform float u_haloMaskOuter;
    uniform vec2 u_resolution;
    varying vec2 v_uv;

    void main() {
      vec4 base = texture2D(tDiffuse, v_uv);
      if (u_haloStrength < 0.001) {
        gl_FragColor = base;
        return;
      }
      vec2 center = vec2(0.5);
      vec2 toCenter = v_uv - center;
      float aspect = u_resolution.x / max(u_resolution.y, 1.0);
      vec2 toCenterA = toCenter * vec2(aspect, 1.0);
      float dist = length(toCenterA);
      vec2 dir = dist > 1e-5 ? normalize(toCenter) : vec2(0.0);
      // Lusion-style ghost / halo with per-channel RGB shift + circular ring
      float ghost = 0.55;
      vec2 ghostUv = center + toCenter * ghost;
      float zoomBlurRatio = fract(atan(toCenterA.y, toCenterA.x) * 40.0) * 0.05 + 0.95;
      ghostUv = center + (ghostUv - center) * zoomBlurRatio;
      vec2 haloVec = dir * u_haloRGBShift * (0.45 + dist * 1.2);
      vec2 haloUv = ghostUv + haloVec;
      vec3 distortion = vec3(-1.0, 0.0, 1.0) * u_haloRGBShift;
      vec3 halo = vec3(
        texture2D(tDiffuse, haloUv + dir * distortion.r).r,
        texture2D(tDiffuse, haloUv + dir * distortion.g).g,
        texture2D(tDiffuse, haloUv + dir * distortion.b).b
      );
      float ring = smoothstep(u_haloMaskInner, u_haloMaskOuter, dist)
                 * (1.0 - smoothstep(u_haloMaskOuter, u_haloMaskOuter + 0.35, dist));
      // spectral fringe on the ring itself
      vec3 spectrum = vec3(
        smoothstep(0.15, 0.45, dist),
        smoothstep(0.25, 0.55, dist) * (1.0 - smoothstep(0.55, 0.8, dist)),
        smoothstep(0.4, 0.75, dist)
      );
      halo = halo * 0.65 + spectrum * 0.55;
      halo *= u_haloStrength * ring;
      vec3 shifted = vec3(
        texture2D(tDiffuse, v_uv + dir * distortion.r * dist * 0.55).r,
        texture2D(tDiffuse, v_uv + dir * distortion.g * dist * 0.55).g,
        texture2D(tDiffuse, v_uv + dir * distortion.b * dist * 0.55).b
      );
      vec3 color = mix(base.rgb, shifted, clamp(u_haloStrength * 0.55 * dist, 0.0, 0.7));
      color += halo;
      gl_FragColor = vec4(color, base.a);
    }
  `,
}

export function createTunnelPost(renderer, scene, camera) {
  const size = new THREE.Vector2()
  renderer.getSize(size)
  const composer = new EffectComposer(renderer)
  const renderPass = new RenderPass(scene, camera)
  composer.addPass(renderPass)

  // UnrealBloomPass units ≠ Lusion FFT bloom — keep strength low
  const bloomPass = new UnrealBloomPass(size.clone(), 0.35, 0.6, 0.55)
  bloomPass.threshold = 0.55
  bloomPass.strength = 0
  bloomPass.radius = 0.6
  composer.addPass(bloomPass)

  const haloPass = new ShaderPass(HaloShader)
  haloPass.material.uniforms.u_resolution.value.copy(size)
  composer.addPass(haloPass)

  let bloomAmount = 0
  let bloomSaturation = 1
  let haloStrength = 0
  let haloRGBShift = 0.015
  let enabled = true

  const resize = (w, h) => {
    composer.setSize(w, h)
    bloomPass.resolution.set(w, h)
    haloPass.material.uniforms.u_resolution.value.set(w, h)
  }

  /**
   * Port of GoalTunnels.syncProperties bloom / halo curves.
   */
  const sync = ({
    blackFrameInRatio = 0,
    blackTitleRatio = 0,
    blackTunnelRatio = 0,
    whiteFrameRatio = 0,
    whiteTunnelWaitRatio = 0,
    astronautDropRatio = 0,
    isWhiteTunnelActive = false,
    isBlackTunnelActive = false,
  } = {}) => {
    // haloStrength
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
    haloStrength = hs

    // Map Lusion FFT bloomAmount (30→6 on title, ~2–4 on white) into UnrealBloomPass
    let ba
    let thr
    if (isWhiteTunnelActive) {
      ba =
        astronautDropRatio < 1
          ? THREE.MathUtils.lerp(0.55, 0.35, THREE.MathUtils.clamp(whiteFrameRatio / 0.05, 0, 1))
          : THREE.MathUtils.lerp(0, 0.9, THREE.MathUtils.clamp(whiteTunnelWaitRatio / 0.1, 0, 1))
      thr = 0.45
    } else {
      // title: soft rim + chromatic halo (Lusion bloom 30→6 maps gently)
      const t = THREE.MathUtils.clamp(blackTitleRatio / 0.25, 0, 1)
      ba = THREE.MathUtils.lerp(1.15, 0.55, t)
      thr = THREE.MathUtils.lerp(0.28, 0.45, t)
      if (isBlackTunnelActive) {
        // bigger circular glow mid-tunnel (matches Lusion rainbow ring)
        ba = THREE.MathUtils.lerp(0.7, 1.35, THREE.MathUtils.clamp(blackTunnelRatio / 0.45, 0, 1))
        thr = THREE.MathUtils.lerp(0.35, 0.18, THREE.MathUtils.clamp(blackTunnelRatio / 0.35, 0, 1))
        if (blackTunnelRatio > 0.65) {
          ba = THREE.MathUtils.lerp(ba, 0.55, THREE.MathUtils.clamp((blackTunnelRatio - 0.65) / 0.2, 0, 1))
        }
      }
    }
    bloomAmount = ba
    bloomSaturation =
      blackTunnelRatio < 1
        ? THREE.MathUtils.lerp(1, 2.8, THREE.MathUtils.clamp(blackTunnelRatio / 0.7, 0, 1))
        : 1

    bloomPass.strength = bloomAmount
    bloomPass.radius = 0.55 + bloomSaturation * 0.18
    bloomPass.threshold = thr
    // Lusion haloRGBShift 0.015 — amplify strength so the circular ring reads
    haloPass.material.uniforms.u_haloStrength.value = Math.min(0.45, Math.max(haloStrength * 1.6, isBlackTunnelActive ? 0.12 : 0))
    haloPass.material.uniforms.u_haloRGBShift.value = isBlackTunnelActive
      ? 0.028
      : haloRGBShift
    haloPass.material.uniforms.u_haloMaskInner.value = isBlackTunnelActive ? 0.18 : 0.3
    haloPass.material.uniforms.u_haloMaskOuter.value = isBlackTunnelActive ? 0.72 : 0.5
  }

  const render = () => {
    if (!enabled || (bloomAmount < 0.02 && haloStrength < 0.005)) {
      renderer.render(scene, camera)
      return
    }
    composer.render()
  }

  return {
    resize,
    sync,
    render,
    setEnabled(v) {
      enabled = !!v
    },
    destroy() {
      composer.dispose()
    },
  }
}
