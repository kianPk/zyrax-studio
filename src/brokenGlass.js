/**
 * Lusion GoalTunnelGlass — shattered pane the astronaut punches through
 * at whiteFrameBreak → astronautDrop.
 */
import * as THREE from 'three'
import { loadBuf } from './bufLoader.js'
import { fit, easeSineOut } from './scrollMath.js'

const PIECE_COUNT = 946
const END_CAMERA_DEPTH = 2

const glassVert = /* glsl */ `
attribute float piece;
uniform sampler2D u_positionTexture;
uniform sampler2D u_orientTexture;
uniform vec2 u_textureSize;
uniform float u_frameFrom;
uniform float u_frameTo;
uniform float u_frameRatio;
uniform float u_fragmentScale;
varying vec3 v_viewPosition;
varying vec3 v_localDir;
vec3 qrotate(vec4 q, vec3 v) {
  return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v);
}
void main() {
  vec4 animationUvs = (vec4(piece, u_frameFrom, piece, u_frameTo) + 0.5) / u_textureSize.xyxy;
  vec3 piecePosFrom = texture2D(u_positionTexture, animationUvs.xy).xyz;
  vec4 pieceOrientFrom = texture2D(u_orientTexture, animationUvs.xy);
  vec3 piecePosTo = texture2D(u_positionTexture, animationUvs.zw).xyz;
  vec4 pieceOrientTo = texture2D(u_orientTexture, animationUvs.zw);
  float radius = length(position) * u_fragmentScale;
  vec3 dir = position / max(radius, 1e-5);
  vec3 posFrom = qrotate(pieceOrientFrom, dir);
  vec3 posTo = qrotate(pieceOrientTo, dir);
  v_localDir = normalize(mix(posFrom, posTo, u_frameRatio));
  vec3 pos = v_localDir * radius + mix(piecePosFrom, piecePosTo, u_frameRatio);
  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  v_viewPosition = mvPosition.xyz;
  gl_Position = projectionMatrix * mvPosition;
}
`

const glassFrag = /* glsl */ `
uniform sampler2D u_backgroundTexture;
uniform vec2 u_resolution;
varying vec3 v_viewPosition;
varying vec3 v_localDir;
void main() {
  vec3 fdx = dFdx(v_viewPosition);
  vec3 fdy = dFdy(v_viewPosition);
  vec3 viewNormal = normalize(cross(fdx, fdy));
  float alpha = abs(1.0 - viewNormal.z);
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec3 bgColor = texture2D(u_backgroundTexture, uv).rgb;
  vec2 refl = reflect(normalize(v_viewPosition), viewNormal).xy;
  vec2 uvOffset = refl.xy * 0.2 * vec2(u_resolution.x / u_resolution.y, 1.0);
  vec3 color = texture2D(u_backgroundTexture, uv + uvOffset).rgb;
  color += clamp(abs(mod(alpha * 8.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0)
    * (1.0 - alpha) * (1.0 - bgColor);
  gl_FragColor = vec4(color, alpha);
}
`

function makeDataTex(data, width, height) {
  const tex = new THREE.DataTexture(data, width, height, THREE.RGBAFormat, THREE.FloatType)
  tex.magFilter = THREE.NearestFilter
  tex.minFilter = THREE.NearestFilter
  tex.wrapS = THREE.ClampToEdgeWrapping
  tex.wrapT = THREE.ClampToEdgeWrapping
  tex.needsUpdate = true
  tex.colorSpace = THREE.NoColorSpace
  return tex
}

export async function createBrokenGlass(scene, { base }) {
  const [geo, anim] = await Promise.all([
    loadBuf(`${base}assets/models/tunnels/broken_glass.buf`),
    loadBuf(`${base}assets/models/tunnels/broken_glass_animation.buf`),
  ])

  // Shader expects float piece ids
  const pieceAttr = geo.getAttribute('piece')
  if (pieceAttr && !(pieceAttr.array instanceof Float32Array)) {
    const f = new Float32Array(pieceAttr.array.length)
    f.set(pieceAttr.array)
    geo.setAttribute('piece', new THREE.BufferAttribute(f, 1))
  }

  const posArr = anim.attributes.position.array
  const orientArr = anim.attributes.orient.array
  const frameCount = posArr.length / (PIECE_COUNT * 3)

  const posRGBA = new Float32Array((posArr.length / 3) * 4)
  for (let a = 0, l = 0; a < posArr.length; a += 3, l += 4) {
    posRGBA[l] = posArr[a]
    posRGBA[l + 1] = posArr[a + 1]
    posRGBA[l + 2] = posArr[a + 2]
    posRGBA[l + 3] = 0
  }
  // Orient is already vec4 per piece-frame
  const orientRGBA = orientArr instanceof Float32Array ? orientArr : new Float32Array(orientArr)

  const positionTexture = makeDataTex(posRGBA, PIECE_COUNT, frameCount)
  const orientTexture = makeDataTex(orientRGBA, PIECE_COUNT, frameCount)

  const uniforms = {
    u_backgroundTexture: { value: null },
    u_resolution: { value: new THREE.Vector2(1, 1) },
    u_positionTexture: { value: positionTexture },
    u_orientTexture: { value: orientTexture },
    u_textureSize: { value: new THREE.Vector2(PIECE_COUNT, frameCount) },
    u_frameFrom: { value: 0 },
    u_frameTo: { value: 0 },
    u_frameRatio: { value: 0 },
    u_fragmentScale: { value: 1 },
  }

  const mat = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: glassVert,
    fragmentShader: glassFrag,
    transparent: true,
    depthWrite: false,
    depthTest: true,
    side: THREE.DoubleSide,
    toneMapped: false,
  })
  // derivatives for dFdx/dFdy — enabled by default in WebGL2

  const mesh = new THREE.Mesh(geo, mat)
  mesh.visible = false
  mesh.frustumCulled = false
  mesh.renderOrder = 1000
  mesh.name = 'goal-broken-glass'

  // Overlay scene keeps glass out of the main tunnel pass (Lusion preUfx)
  const overlayScene = new THREE.Scene()
  const container = new THREE.Group()
  container.add(mesh)
  overlayScene.add(container)
  // Keep a handle on the main scene graph only for dispose bookkeeping
  void scene

  let ratio = 0
  let fragmentScale = 1
  let domFrameHeight = 1
  let domFrameRotation = 0
  let domFrameScale = 1
  let active = false

  const _axis = new THREE.Vector3(0, 0, 1)
  const _q = new THREE.Quaternion()

  const updateFromScroll = ({
    whiteFrameBreakRatio = 0,
    astronautDropRatio = 0,
    frameHeight = 0,
    frameRotation = 0,
    frameScale = 1,
  } = {}) => {
    ratio = fit(whiteFrameBreakRatio, 0, 1, 0, 1, easeSineOut)
    fragmentScale = fit(astronautDropRatio, 0.75, 1, 1, 0)
    domFrameHeight = Math.max(1, frameHeight || window.innerHeight)
    domFrameRotation = frameRotation || 0
    domFrameScale = frameScale || 1
    active = ratio > 0.001 && astronautDropRatio < 1
    container.visible = active
    if (!active) mesh.visible = false
  }

  /** Position glass as a camera-facing pane (Lusion EndCameraDepthToFrame=2). */
  const syncToCamera = (camera, viewportH = window.innerHeight) => {
    if (!active || !camera) {
      mesh.visible = false
      return false
    }
    mesh.position.copy(camera.position)
    mesh.quaternion.copy(camera.quaternion)
    mesh.translateZ(-END_CAMERA_DEPTH)
    const worldH = Math.tan((camera.fov * Math.PI) / 360) * END_CAMERA_DEPTH * 2
    const n = (domFrameHeight / Math.max(viewportH, 1)) * worldH * domFrameScale
    _q.setFromAxisAngle(_axis, -domFrameRotation)
    mesh.quaternion.multiply(_q)
    mesh.scale.setScalar(Math.max(n, 1e-4))

    const a = ratio * (frameCount - 1)
    const from = Math.floor(a)
    const to = Math.min(from + 1, frameCount - 1)
    uniforms.u_frameFrom.value = from
    uniforms.u_frameTo.value = to
    uniforms.u_frameRatio.value = a - from
    uniforms.u_fragmentScale.value = fragmentScale
    mesh.visible = true
    return true
  }

  const setBackground = (texture, width, height) => {
    uniforms.u_backgroundTexture.value = texture
    uniforms.u_resolution.value.set(width, height)
  }

  return {
    container,
    overlayScene,
    mesh,
    get ratio() {
      return ratio
    },
    get active() {
      return active
    },
    updateFromScroll,
    syncToCamera,
    setBackground,
    dispose() {
      geo.dispose()
      anim.dispose()
      mat.dispose()
      positionTexture.dispose()
      orientTexture.dispose()
    },
  }
}
