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
      // Lusion-style ghost / halo with per-channel RGB shift
      float ghost = 0.55;
      vec2 ghostUv = center + toCenter * ghost;
      float zoomBlurRatio = fract(atan(toCenter.y, toCenter.x) * 40.0) * 0.05 + 0.95;
      ghostUv = center + (ghostUv - center) * zoomBlurRatio;
      vec2 haloVec = dir * u_haloRGBShift * (0.35 + dist);
      vec2 haloUv = ghostUv + haloVec;
      vec3 distortion = vec3(-1.0, 0.0, 1.0) * u_haloRGBShift * 0.6;
      vec3 halo = vec3(
        texture2D(tDiffuse, haloUv + dir * distortion.r).r,
        texture2D(tDiffuse, haloUv + dir * distortion.g).g,
        texture2D(tDiffuse, haloUv + dir * distortion.b).b
      );
      float mask = smoothstep(u_haloMaskInner, u_haloMaskOuter, dist)
                 * (1.0 - smoothstep(0.85, 1.15, dist));
      halo *= u_haloStrength * mask;
      // subtle radial chromatic on the base as well
      vec3 shifted = vec3(
        texture2D(tDiffuse, v_uv + dir * distortion.r * dist * 0.4).r,
        texture2D(tDiffuse, v_uv + dir * distortion.g * dist * 0.4).g,
        texture2D(tDiffuse, v_uv + dir * distortion.b * dist * 0.4).b
      );
      vec3 color = mix(base.rgb, shifted, u_haloStrength * 0.35 * dist);
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

  const bloomPass = new UnrealBloomPass(size.clone(), 0.6, 0.85, 0.2)
  bloomPass.threshold = 0.15
  bloomPass.strength = 0
  bloomPass.radius = 0.85
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

    // bloomAmount — Lusion uses huge FFT bloom units; scale down for UnrealBloomPass
    let ba
    if (isWhiteTunnelActive) {
      ba =
        astronautDropRatio < 1
          ? THREE.MathUtils.clamp(1 - whiteFrameRatio / 0.05, 0, 1) * 2 + 2
          : THREE.MathUtils.clamp(whiteTunnelWaitRatio / 0.1, 0, 1) * 4
    } else {
      // fit(blackTitleRatio, 0, .25, 30, 6) → map to ~2.2 .. 0.55
      const t = THREE.MathUtils.clamp(blackTitleRatio / 0.25, 0, 1)
      ba = THREE.MathUtils.lerp(2.4, 0.55, t)
      if (isBlackTunnelActive && blackTunnelRatio > 0.5) {
        ba = Math.max(ba, 0.8)
      }
    }
    bloomAmount = ba
    bloomSaturation =
      blackTunnelRatio < 1
        ? THREE.MathUtils.lerp(1, 3, THREE.MathUtils.clamp(blackTunnelRatio / 0.7, 0, 1))
        : 1

    bloomPass.strength = bloomAmount
    bloomPass.radius = 0.7 + bloomSaturation * 0.15
    bloomPass.threshold = isWhiteTunnelActive ? 0.35 : 0.12
    haloPass.material.uniforms.u_haloStrength.value = haloStrength
    haloPass.material.uniforms.u_haloRGBShift.value = haloRGBShift
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
