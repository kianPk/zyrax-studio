/**
 * Lusion Stage3D bloom + halo RGB-shift (exact halo fragment from hoisted.js).
 */
import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'

/** Port of Lusion USE_HALO high-pass bloom fragment (ghost + RGB shift ring). */
const HaloShader = {
  uniforms: {
    tDiffuse: { value: null },
    u_haloStrength: { value: 0 },
    u_haloRGBShift: { value: 0.015 },
    u_haloWidth: { value: 0.6 },
    u_haloMaskInner: { value: 0.3 },
    u_haloMaskOuter: { value: 0.5 },
    u_texelSize: { value: new THREE.Vector2(1, 1) },
    u_aspect: { value: new THREE.Vector2(1, 1) },
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
    uniform float u_haloWidth;
    uniform float u_haloMaskInner;
    uniform float u_haloMaskOuter;
    uniform vec2 u_texelSize;
    uniform vec2 u_aspect;
    varying vec2 v_uv;

    void main() {
      vec4 texel = texture2D(tDiffuse, v_uv);
      if (u_haloStrength < 0.001) {
        gl_FragColor = texel;
        return;
      }
      // Lusion halo: ghost UV + spectral ring
      vec2 toCenter = (v_uv - 0.5) * u_aspect;
      vec2 ghostUv = 1.0 - (toCenter + 0.5);
      vec2 ghostVec = (vec2(0.5) - ghostUv);
      vec2 direction = length(ghostVec) > 1e-5 ? normalize(ghostVec) : vec2(0.0);
      vec2 haloVec = direction * u_haloWidth;
      float weight = length(vec2(0.5) - fract(ghostUv + haloVec));
      weight = pow(1.0 - weight, 3.0);
      vec3 distortion = vec3(-u_texelSize.x, 0.0, u_texelSize.x) * u_haloRGBShift;
      float zoomBlurRatio = fract(atan(toCenter.y, toCenter.x) * 40.0) * 0.05 + 0.95;
      ghostUv *= zoomBlurRatio;
      vec2 haloUv = ghostUv + haloVec;
      vec3 halo = vec3(
        texture2D(tDiffuse, haloUv + direction * distortion.r).r,
        texture2D(tDiffuse, haloUv + direction * distortion.g).g,
        texture2D(tDiffuse, haloUv + direction * distortion.b).b
      );
      float mask = smoothstep(u_haloMaskInner, u_haloMaskOuter, length(toCenter));
      halo *= weight * mask * u_haloStrength;
      // subtle radial chromatic on base (lens feel)
      vec3 shifted = vec3(
        texture2D(tDiffuse, v_uv + direction * distortion.r * 0.5).r,
        texture2D(tDiffuse, v_uv).g,
        texture2D(tDiffuse, v_uv + direction * distortion.b * 0.5).b
      );
      vec3 color = mix(texel.rgb, shifted, clamp(u_haloStrength * 0.4, 0.0, 0.5));
      color += halo;
      gl_FragColor = vec4(color, texel.a);
    }
  `,
}

export function createTunnelPost(renderer, scene, camera) {
  const size = new THREE.Vector2()
  renderer.getSize(size)
  const composer = new EffectComposer(renderer)
  const renderPass = new RenderPass(scene, camera)
  composer.addPass(renderPass)

  const bloomPass = new UnrealBloomPass(size.clone(), 0.5, 0.55, 0.6)
  bloomPass.threshold = 0.55
  bloomPass.strength = 0
  bloomPass.radius = 0.55
  composer.addPass(bloomPass)

  const haloPass = new ShaderPass(HaloShader)
  haloPass.material.uniforms.u_texelSize.value.set(1 / Math.max(size.x, 1), 1 / Math.max(size.y, 1))
  haloPass.material.uniforms.u_aspect.value.set(size.x / Math.max(size.y, 1), 1)
  composer.addPass(haloPass)

  let bloomAmount = 0
  let haloStrength = 0
  let haloRGBShift = 0.015
  let enabled = true

  const resize = (w, h) => {
    composer.setSize(w, h)
    bloomPass.resolution.set(w, h)
    haloPass.material.uniforms.u_texelSize.value.set(1 / Math.max(w, 1), 1 / Math.max(h, 1))
    haloPass.material.uniforms.u_aspect.value.set(w / Math.max(h, 1), 1)
  }

  /** Port of GoalTunnels.syncProperties bloom / halo curves. */
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
    let hs =
      blackFrameInRatio *
      (THREE.MathUtils.lerp(0, 0.15, blackTitleRatio) +
        THREE.MathUtils.clamp((blackTunnelRatio - 0.2) / 0.2, 0, 1) * 0.25)
    if (blackTunnelRatio >= 0.65) {
      const t = THREE.MathUtils.clamp((blackTunnelRatio - 0.65) / 0.1, 0, 1)
      hs = hs + (0.08 - hs) * t
    }
    if (isWhiteTunnelActive) hs = 0
    haloStrength = hs

    let ba
    let thr
    if (isWhiteTunnelActive) {
      ba =
        astronautDropRatio < 1
          ? THREE.MathUtils.lerp(0.55, 0.35, THREE.MathUtils.clamp(whiteFrameRatio / 0.05, 0, 1))
          : THREE.MathUtils.lerp(0, 0.9, THREE.MathUtils.clamp(whiteTunnelWaitRatio / 0.1, 0, 1))
      thr = 0.45
    } else {
      // Lusion bloomAmount fit(0,.25,30,6) → UnrealBloom ~0.9→0.4
      const t = THREE.MathUtils.clamp(blackTitleRatio / 0.25, 0, 1)
      ba = THREE.MathUtils.lerp(0.95, 0.4, t)
      thr = THREE.MathUtils.lerp(0.45, 0.65, t)
      if (isBlackTunnelActive) {
        ba = THREE.MathUtils.lerp(0.5, 0.9, THREE.MathUtils.clamp(blackTunnelRatio / 0.45, 0, 1))
        thr = THREE.MathUtils.lerp(0.55, 0.3, THREE.MathUtils.clamp(blackTunnelRatio / 0.35, 0, 1))
        if (blackTunnelRatio > 0.65) {
          ba = THREE.MathUtils.lerp(ba, 0.4, THREE.MathUtils.clamp((blackTunnelRatio - 0.65) / 0.2, 0, 1))
        }
      }
    }
    bloomAmount = ba
    const bloomSaturation =
      blackTunnelRatio < 1
        ? THREE.MathUtils.lerp(1, 2.8, THREE.MathUtils.clamp(blackTunnelRatio / 0.7, 0, 1))
        : 1

    bloomPass.strength = bloomAmount
    bloomPass.radius = 0.5 + bloomSaturation * 0.15
    bloomPass.threshold = thr
    haloPass.material.uniforms.u_haloStrength.value = haloStrength
    haloPass.material.uniforms.u_haloRGBShift.value = haloRGBShift
    haloPass.material.uniforms.u_haloWidth.value = isBlackTunnelActive ? 0.72 : 0.6
    haloPass.material.uniforms.u_haloMaskInner.value = isBlackTunnelActive ? 0.2 : 0.3
    haloPass.material.uniforms.u_haloMaskOuter.value = isBlackTunnelActive ? 0.65 : 0.5
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
