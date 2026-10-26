import * as THREE from 'three'
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js'
import { loadBuf } from './bufLoader.js'

const COLORS = ['#061dfb', '#ADFF00', '#f6000e', '#7e09f5', '#ffc000']
const PHYS = { density: 1, friction: 2, restitution: 0.8 }
const GRAVITY_FACTOR = 40
const NEIGHBOUR_COUNT = 8

const balloonVert = /* glsl */ `
attribute vec3 daoN;
attribute vec3 daoP;
attribute float ao;
attribute float thickness;
attribute vec3 SN;
uniform vec3 u_lightPosition;
uniform vec4 u_selfPositionRadius;
uniform vec4 u_selfRotation;
varying vec3 v_viewPosition;
varying vec3 v_worldPosition;
varying vec3 v_viewNormal;
varying vec3 v_smoothViewNormal;
varying float v_ao;
varying float v_thickness;
varying float v_selfShadow;

vec3 qrotate(vec3 v, vec4 q) {
  return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v);
}

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  vec3 worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  v_worldPosition = worldPosition;
  vec4 invertedQuat = vec4(-u_selfRotation.xyz, u_selfRotation.w);
  vec3 L = (u_lightPosition - worldPosition) / max(u_selfPositionRadius.w, 0.001);
  L = normalize(qrotate(L, invertedQuat));
  vec3 dao = mix(daoN, daoP, sign(L) * 0.5 + 0.5);
  vec3 absDir = abs(L);
  float selfShadow = dot(absDir, dao) / max(absDir.x + absDir.y + absDir.z, 1e-4);
  selfShadow = min(pow(selfShadow * 3.0, 0.3) * 1.45, 1.0);
  v_viewNormal = normalMatrix * normal;
  v_smoothViewNormal = normalMatrix * SN;
  v_viewPosition = -mvPosition.xyz;
  v_ao = ao;
  v_thickness = thickness;
  v_selfShadow = selfShadow;
}
`

const balloonFrag = /* glsl */ `
varying vec3 v_viewNormal;
varying vec3 v_smoothViewNormal;
varying vec3 v_viewPosition;
varying vec3 v_worldPosition;
varying float v_ao;
varying float v_thickness;
varying float v_selfShadow;
uniform float u_roughness;
uniform vec3 u_bgColor;
uniform vec3 u_color;
uniform sampler2D u_matcap;
uniform vec3 u_lightPosition;
uniform vec4 u_nearPositionRadiusList[${NEIGHBOUR_COUNT}];
uniform vec3 u_nearColorList[${NEIGHBOUR_COUNT}];

#ifndef saturate
#define saturate(a) clamp(a, 0.0, 1.0)
#endif

vec3 filmicToneMapping(vec3 color) {
  color = max(vec3(0.0), color - vec3(0.004));
  color = (color * (6.2 * color + 0.5)) / (color * (6.2 * color + 1.7) + 0.06);
  return color;
}

void main() {
  float roughness = u_roughness;
  vec3 viewNormal = normalize(v_viewNormal);
  vec3 N = normalize((vec4(viewNormal, 0.0) * viewMatrix).xyz);
  vec3 V = normalize(cameraPosition - v_worldPosition);
  vec3 worldToLight = normalize(u_lightPosition - v_worldPosition);
  vec3 reflectView = reflect(-V, N);

  vec3 gi = vec3(0.0);
  vec4 reflections = vec4(0.0, 0.0, 0.0, 100.0);
  float ao = 1.0;
  float shadow = 1.0;

  for (int i = 0; i < ${NEIGHBOUR_COUNT}; i++) {
    vec4 near = u_nearPositionRadiusList[i];
    vec3 nearColor = u_nearColorList[i];
    vec3 toNear = near.xyz - v_worldPosition;
    float dist = length(toNear);
    float rSum = near.w + 0.15;
    float soft = saturate(1.0 - dist / (rSum * 3.5));
    float _ao = 1.0 - soft * soft * 0.55;
    ao *= _ao;
    shadow *= mix(1.0, 0.72, soft * saturate(dot(normalize(toNear), worldToLight)));
    gi += nearColor * 3.0 * min(1.0, (1.0 - _ao * _ao) / 0.7);

    // fake reflection: sphere hit along reflect ray
    vec3 oc = v_worldPosition - near.xyz;
    float b = dot(oc, reflectView);
    float c = dot(oc, oc) - near.w * near.w * 0.85;
    float h = b * b - c;
    if (h > 0.0) {
      float t = -b - sqrt(h);
      if (t > 0.0001 && t < reflections.w) {
        reflections = vec4(nearColor, t);
      }
    }
  }
  reflections.rgb *= 1.0 / ((0.2 + roughness * 0.8) * reflections.w * 10.0 + 4.0);
  reflections.rgb *= ao * mix(0.55, 1.0, v_ao);
  gi /= float(${NEIGHBOUR_COUNT});

  vec3 albedo = u_color;
  vec3 viewDir = normalize(v_viewPosition);
  vec3 x = normalize(vec3(viewDir.z, 0.0, -viewDir.x));
  vec3 y = cross(viewDir, x);
  vec2 uvPerturbed = vec2(dot(x, viewNormal), dot(y, viewNormal)) * 0.5 + 0.5;
  vec3 matcapMap = texture2D(u_matcap, uvPerturbed).rgb;
  vec3 matcapDiff = vec3(0.25 + 0.75 * matcapMap.r);
  // Lusion packs rough→G / hard→B as specular; keep HDR punch so black jacks rim-light
  float specChan = roughness > 0.5 ? matcapMap.g : matcapMap.b;
  vec3 matcapSpec = vec3(specChan) * (roughness > 0.5 ? 1.15 : 1.65);

  reflections.rgb *= 0.75 + 0.25 * shadow * v_selfShadow;
  shadow = 0.6 + 0.4 * shadow;

  vec3 color = albedo * matcapDiff + matcapSpec;
  color += reflections.rgb;
  color *= mix(0.55, 1.0, v_ao) * ao;
  color += gi * 0.45;
  color *= mix(0.72, 1.0, v_selfShadow);
  color *= shadow;
  color += u_bgColor * 0.02 * (1.0 - matcapDiff);

  gl_FragColor.rgb = filmicToneMapping(pow(max(color, vec3(0.0)), vec3(2.2)));
  gl_FragColor.a = 1.0;
}
`

const bgVert = /* glsl */ `
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const bgFrag = /* glsl */ `
uniform vec3 u_color0;
uniform vec3 u_color1;
uniform float u_aspect;
varying vec2 v_uv;
void main() {
  vec2 q = v_uv - 0.5;
  q.x *= u_aspect;
  float dst = smoothstep(0.0, 1.15, length(q));
  vec3 color = mix(u_color0, u_color1, 0.88 + 0.12 * dst);
  // keep mostly dark like Lusion, with a tint of the accent
  color = mix(u_color1, color, 0.35);
  gl_FragColor = vec4(color, 1.0);
}
`

function buildSphereData(fancyColor) {
  const soft = { ...PHYS }
  const hard = { ...PHYS }
  const stone = { ...PHYS }
  return [
    { color: fancyColor, isRough: true, isColored: true, radius: 1, ...soft },
    { color: fancyColor, isRough: true, isColored: true, radius: 1, ...soft },
    { color: fancyColor, isRough: false, isColored: true, radius: 1, ...hard },
    { color: '#ffffff', isRough: true, isColored: false, radius: 1, ...soft },
    { color: '#ffffff', isRough: true, isColored: false, radius: 1, ...soft },
    { color: '#ffffff', isRough: true, isColored: false, radius: 1, ...soft },
    { color: '#ffffff', isRough: false, isColored: false, radius: 1, ...hard },
    { color: '#111111', isRough: true, isColored: false, radius: 1, ...stone },
    { color: '#111111', isRough: true, isColored: false, radius: 1, ...stone },
    { color: '#111111', isRough: true, isColored: false, radius: 1, ...stone },
    { color: '#111111', isRough: false, isColored: false, radius: 1, ...hard },
    { color: fancyColor, isRough: true, isColored: true, radius: 1, ...soft },
    { color: fancyColor, isRough: true, isColored: true, radius: 1, ...soft },
    { color: fancyColor, isRough: false, isColored: true, radius: 1, ...hard },
    { color: '#ffffff', isRough: true, isColored: false, radius: 1, ...soft },
    { color: '#ffffff', isRough: true, isColored: false, radius: 1, ...soft },
    { color: '#ffffff', isRough: true, isColored: false, radius: 1, ...soft },
    { color: '#ffffff', isRough: false, isColored: false, radius: 1, ...hard },
    { color: '#111111', isRough: true, isColored: false, radius: 1, ...stone },
    { color: '#111111', isRough: true, isColored: false, radius: 1, ...stone },
    { color: '#111111', isRough: true, isColored: false, radius: 1, ...stone },
    { color: '#111111', isRough: false, isColored: false, radius: 1, ...hard },
  ]
}

function seeded(seed) {
  let s = 0
  for (let i = 0; i < seed.length; i++) s = (s * 31 + seed.charCodeAt(i)) >>> 0
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0
    return s / 0xffffffff
  }
}

function fit(v, a, b, c, d) {
  const t = Math.max(0, Math.min(1, (v - a) / (b - a || 1)))
  return c + (d - c) * t
}

class Body {
  constructor(radius, density, friction, restitution, seedRand, isGlass = false) {
    this.position = new THREE.Vector3(
      (seedRand() - 0.5) * 12,
      (seedRand() - 0.5) * 12,
      isGlass ? 7 + seedRand() : (seedRand() - 0.5) * 6
    )
    this.velocity = this.position.clone().multiplyScalar(-2)
    this.quaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(seedRand() * Math.PI, seedRand() * Math.PI, seedRand() * Math.PI)
    )
    this.radius = 1.05 * radius
    this.density = density
    this.friction = friction
    this.restitution = restitution
    this.volume = Math.PI * this.radius * 1.333333
    this.mass = this.volume * this.radius * this.radius * this.density
    this.inertia = this.mass * this.radius * this.radius * 0.4
    this.frictionTot = 0
    this.gravityForce = new THREE.Vector3()
    this.gravityAcc = new THREE.Vector3()
  }

  applyImpulse() {
    this.velocity.add(
      new THREE.Vector3((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 5)
    )
  }

  updateGravity(dt) {
    this.gravityForce.copy(this.position).negate().multiplyScalar(GRAVITY_FACTOR)
    this.gravityAcc.copy(this.gravityForce).multiplyScalar(1 / this.mass)
    this.gravityAcc.multiplyScalar(1 / (1 + this.frictionTot))
    this.velocity.addScaledVector(this.gravityAcc, dt)
    this.frictionTot *= 0.5
  }

  update(dt) {
    this.position.addScaledVector(this.velocity, dt)
    this.velocity.multiplyScalar(Math.pow(0.2, dt))
  }
}

export async function createBalloonsHero(canvas, visualEl) {
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth < 812
  let balloonsColorIndex = Math.floor(Math.random() * COLORS.length)
  let fancyColor = COLORS[balloonsColorIndex]

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(25, 1, 0.1, 100)
  camera.position.set(0, 0, 25)

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: !isMobile,
    alpha: false,
    powerPreference: 'high-performance',
  })
  renderer.setClearColor(0x141515, 1)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 1.75))
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace
  renderer.toneMapping = THREE.NoToneMapping

  const base = import.meta.env.BASE_URL
  const modelUrl = `${base}assets/models/home/${isMobile ? 'cross_ld' : 'cross'}.buf`
  const matcapUrl = `${base}assets/textures/home/${isMobile ? 'matcap_ld' : 'matcap'}.exr`

  const [geometry, matcap] = await Promise.all([
    loadBuf(modelUrl),
    new Promise((resolve, reject) => {
      new EXRLoader().load(matcapUrl, resolve, undefined, reject)
    }),
  ])
  matcap.minFilter = THREE.LinearFilter
  matcap.magFilter = THREE.LinearFilter
  matcap.generateMipmaps = false
  matcap.colorSpace = THREE.NoColorSpace

  const lightPosition = new THREE.Vector3(10, 10, 5)
  const sphereData = buildSphereData(fancyColor)
  const rand = seeded('balloonBody-25')
  const bodies = []
  const meshes = []
  const materials = []
  const sorted = []

  const emptyNearPos = Array.from({ length: NEIGHBOUR_COUNT }, () => new THREE.Vector4(0, 0, -999, 0.01))
  const emptyNearCol = Array.from({ length: NEIGHBOUR_COUNT }, () => new THREE.Color(0x111111))

  const makeMat = (cfg) =>
    new THREE.ShaderMaterial({
      uniforms: {
        u_matcap: { value: matcap },
        u_color: { value: new THREE.Color(cfg.color) },
        u_bgColor: { value: new THREE.Color(0x141515) },
        u_roughness: { value: cfg.isRough ? 0.8 : 0.1 },
        u_lightPosition: { value: lightPosition },
        u_selfPositionRadius: { value: new THREE.Vector4(0, 0, 0, 1) },
        u_selfRotation: { value: new THREE.Vector4(0, 0, 0, 1) },
        u_nearPositionRadiusList: { value: emptyNearPos.map((v) => v.clone()) },
        u_nearColorList: { value: emptyNearCol.map((c) => c.clone()) },
      },
      vertexShader: balloonVert,
      fragmentShader: balloonFrag,
    })

  for (const cfg of sphereData) {
    const mat = makeMat(cfg)
    const mesh = new THREE.Mesh(geometry, mat)
    mesh.frustumCulled = false
    mesh.scale.setScalar(cfg.radius)
    scene.add(mesh)
    meshes.push(mesh)
    materials.push(mat)
    bodies.push(new Body(cfg.radius, cfg.density, cfg.friction, cfg.restitution, rand, false))
    sorted.push({ i: meshes.length - 1, d2: 0 })
  }

  const bgMat = new THREE.ShaderMaterial({
    uniforms: {
      u_color0: { value: new THREE.Color(fancyColor) },
      u_color1: { value: new THREE.Color(0x141515) },
      u_aspect: { value: 1 },
    },
    vertexShader: bgVert,
    fragmentShader: bgFrag,
    depthWrite: false,
  })
  const bg = new THREE.Mesh(new THREE.PlaneGeometry(90, 60), bgMat)
  bg.position.z = -12
  bg.renderOrder = -1000
  scene.add(bg)

  const mouse = new THREE.Vector2(0, 0)
  const mouse3 = new THREE.Vector3()
  const mousePrev = new THREE.Vector3()
  const mousePush = new THREE.Vector3()
  const mouseBA = new THREE.Vector3()
  const _normal = new THREE.Vector3()
  const _vel = new THREE.Vector3()
  const _pos = new THREE.Vector3()
  const _v0 = new THREE.Vector3()
  const _v1 = new THREE.Vector3()
  const _p1 = new THREE.Vector3()
  const _q = new THREE.Quaternion()
  const MOUSE_RADIUS = 0.025
  const MOUSE_INFLUENCE = 0.1
  const MOUSE_PUSH_FORCE = 0.12

  const onPointer = (e) => {
    const rect = (visualEl || canvas).getBoundingClientRect()
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
  }
  window.addEventListener('pointermove', onPointer)

  const cycleColor = () => {
    balloonsColorIndex = (balloonsColorIndex + 1) % COLORS.length
    fancyColor = COLORS[balloonsColorIndex]
    meshes.forEach((m, i) => {
      const cfg = sphereData[i]
      if (cfg.isColored) {
        m.material.uniforms.u_color.value.set(fancyColor)
        cfg.color = fancyColor
      }
    })
    bgMat.uniforms.u_color0.value.set(fancyColor)
    bodies.forEach((b) => b.applyImpulse())
  }
  const onClick = () => cycleColor()
  canvas.addEventListener('click', onClick)
  visualEl?.addEventListener('click', onClick)

  const resize = () => {
    const el = visualEl || canvas.parentElement
    const w = el.clientWidth
    const h = el.clientHeight
    const aspect = w / Math.max(h, 1)
    // Lusion: fit(aspect, 2.2, 2/3, 18, 30)
    camera.fov = fit(aspect, 2.2, 2 / 3, 18, 30)
    camera.aspect = aspect
    camera.updateProjectionMatrix()
    renderer.setSize(w, h, false)
    bgMat.uniforms.u_aspect.value = aspect
  }
  resize()
  window.addEventListener('resize', resize)

  let raf = 0
  let last = performance.now()
  const start = performance.now()

  const tick = (now) => {
    raf = requestAnimationFrame(tick)
    let dt = Math.min(0.05, (now - last) / 1000)
    last = now
    const steps = isMobile ? 1 : 2
    dt /= steps

    // Lusion intro: camera z 25 → 17.5
    const t = (now - start) / 1000
    const camZ = fit(t, 0.3, 2.0, 25, 17.5)
    camera.position.z = camZ

    for (let s = 0; s < steps; s++) {
      const v = new THREE.Vector3(mouse.x, mouse.y, 0.5).unproject(camera)
      v.sub(camera.position).normalize()
      const r = (0 - camera.position.z) / v.z
      mouse3.copy(camera.position).addScaledVector(v, r)
      mousePush.copy(mouse3).sub(mousePrev).multiplyScalar(MOUSE_PUSH_FORCE / Math.max(dt, 0.001))
      mouseBA.copy(mouse3).sub(camera.position)
      const n = mouseBA.lengthSq() || 1
      mousePrev.copy(mouse3)

      for (let a = 0; a < bodies.length; a++) {
        const A = bodies[a]
        A.updateGravity(dt)
        _vel.copy(A.velocity)
        _pos.copy(A.position)

        for (let p = a + 1; p < bodies.length; p++) {
          const B = bodies[p]
          _v1.copy(B.velocity)
          _p1.copy(B.position)
          _normal.copy(_pos).sub(_p1)
          const vlen = _normal.length()
          const minD = A.radius + B.radius
          if (vlen < minD && vlen > 1e-6) {
            const T = Math.sqrt(A.friction * B.friction)
            A.frictionTot += T
            B.frictionTot += T
            _normal.normalize()
            _normal.multiplyScalar(0.5 * (vlen - minD))
            _pos.sub(_normal)
            _p1.add(_normal)
            _normal.normalize()
            const M = _vel.dot(_normal)
            const S = _v1.dot(_normal)
            const b = A.mass
            const C = B.mass
            const E = (b * M + C * S - C * (M - S) * A.restitution) / (b + C)
            const I = (b * M + C * S - b * (S - M) * B.restitution) / (b + C)
            _vel.addScaledVector(_normal, (E - M) / (1 + T))
            _v1.addScaledVector(_normal, (I - S) / (1 + T))
            B.position.copy(_p1)
            B.velocity.copy(_v1)
          }
        }

        _v0.copy(_pos).sub(camera.position)
        let c = _v0.dot(mouseBA) / n
        c = _v0.sub(_v1.copy(mouseBA).multiplyScalar(c)).length() - A.radius - MOUSE_RADIUS
        if (c < 0) {
          _v0.copy(_pos).sub(camera.position).cross(mouseBA).normalize()
          _v1.copy(mouseBA).cross(_v0).normalize()
          _pos.sub(_v1.multiplyScalar(MOUSE_INFLUENCE * c))
          _v1.multiplyScalar(-MOUSE_PUSH_FORCE / Math.max(dt, 0.001))
          _vel.add(_v1)
          _vel.add(mousePush)
        }

        let u = _pos.length()
        if (u > 0) {
          _v0.set(1, 1, 1).normalize()
          let p = 1 - Math.abs(_v0.dot(_v1.copy(_pos).normalize()))
          p *= dt * Math.min(1, Math.max(0, u / 2)) * 0.5
          p *= (a % 2) * 2 - 1
          _q.setFromAxisAngle(_v0, p)
          _v1.copy(_pos).applyQuaternion(_q).sub(_v0.copy(_pos))
          _vel.add(_v1)
        }

        _v0.crossVectors(_pos, _vel)
        let f = _v0.length()
        f /= A.inertia
        if (f > 0) {
          _v0.normalize()
          _q.setFromAxisAngle(_v0, f * dt)
          A.quaternion.premultiply(_q)
        }

        A.position.copy(_pos)
        A.velocity.copy(_vel)
        A.update(dt)

        ;['x', 'y', 'z'].forEach((axis) => {
          const lim = axis === 'z' ? 5.5 : 7.5
          if (A.position[axis] > lim) {
            A.position[axis] = lim
            A.velocity[axis] *= -0.55
          }
          if (A.position[axis] < -lim) {
            A.position[axis] = -lim
            A.velocity[axis] *= -0.55
          }
        })
      }
    }

    for (let i = 0; i < meshes.length; i++) {
      const mesh = meshes[i]
      const body = bodies[i]
      mesh.position.copy(body.position)
      mesh.quaternion.copy(body.quaternion)
      const u = materials[i].uniforms
      u.u_selfPositionRadius.value.set(body.position.x, body.position.y, body.position.z, body.radius)
      u.u_selfRotation.value.set(body.quaternion.x, body.quaternion.y, body.quaternion.z, body.quaternion.w)
      u.u_bgColor.value.copy(bgMat.uniforms.u_color1.value)
    }

    // nearest-neighbour fill for AO / bounce / reflections
    for (let i = 0; i < meshes.length; i++) {
      for (let j = 0; j < meshes.length; j++) {
        sorted[j].i = j
        sorted[j].d2 = i === j ? 0 : bodies[i].position.distanceToSquared(bodies[j].position)
      }
      sorted.sort((a, b) => a.d2 - b.d2)
      const nearPos = materials[i].uniforms.u_nearPositionRadiusList.value
      const nearCol = materials[i].uniforms.u_nearColorList.value
      for (let k = 0; k < NEIGHBOUR_COUNT; k++) {
        const idx = sorted[k + 1] ? sorted[k + 1].i : sorted[0].i
        const b = bodies[idx]
        nearPos[k].set(b.position.x, b.position.y, b.position.z, b.radius)
        nearCol[k].copy(materials[idx].uniforms.u_color.value)
      }
    }

    camera.position.x += (mouse.x * 0.9 - camera.position.x) * 0.04
    camera.position.y += (mouse.y * 0.55 - camera.position.y) * 0.04
    camera.lookAt(0, 0, 0)

    renderer.render(scene, camera)
  }
  raf = requestAnimationFrame(tick)

  return {
    cycleColor,
    destroy() {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onPointer)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('click', onClick)
      visualEl?.removeEventListener('click', onClick)
      materials.forEach((m) => m.dispose())
      bgMat.dispose()
      renderer.dispose()
    },
  }
}
