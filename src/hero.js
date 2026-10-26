import * as THREE from 'three'

function makeCrossGeometry() {
  const shape = new THREE.BoxGeometry(1, 0.28, 0.28)
  const arm = new THREE.BoxGeometry(0.28, 1, 0.28)
  // merge via group of meshes later — use a simple Lathe-like compound with CSG-free approach:
  // return a Group of two boxes instead, handled in mesh factory
  return { shape, arm }
}

function createCrossMesh(materials) {
  const group = new THREE.Group()
  const geo = makeCrossGeometry()
  const a = new THREE.Mesh(geo.shape, materials)
  const b = new THREE.Mesh(geo.arm, materials)
  a.castShadow = true
  b.castShadow = true
  a.receiveShadow = true
  b.receiveShadow = true
  group.add(a, b)
  // third axis for jack/plus look
  const c = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.28, 1), materials)
  c.castShadow = true
  c.receiveShadow = true
  group.add(c)
  return group
}

export function createHeroScene(canvas) {
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
  const scene = new THREE.Scene()
  scene.background = new THREE.Color('#0b0c10')
  scene.fog = new THREE.Fog('#0b0c10', 8, 18)

  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 50)
  camera.position.set(0, 1.2, 7.2)

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: !isMobile,
    powerPreference: 'high-performance',
  })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 1.75))
  renderer.shadowMap.enabled = !isMobile
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.05

  const hemi = new THREE.HemisphereLight(0xffffff, 0x1a1c28, 1.1)
  scene.add(hemi)
  const key = new THREE.DirectionalLight(0xffffff, 2.2)
  key.position.set(4, 8, 5)
  key.castShadow = !isMobile
  scene.add(key)
  const fill = new THREE.DirectionalLight(0x1a2ffb, 1.4)
  fill.position.set(-5, 2, -2)
  scene.add(fill)
  const rim = new THREE.DirectionalLight(0xffffff, 0.8)
  rim.position.set(0, -2, -6)
  scene.add(rim)

  const floor = new THREE.Mesh(
    new THREE.CircleGeometry(8, 64),
    new THREE.MeshStandardMaterial({ color: '#12141c', roughness: 0.85, metalness: 0.1 })
  )
  floor.rotation.x = -Math.PI / 2
  floor.position.y = -1.35
  floor.receiveShadow = true
  scene.add(floor)

  const mats = [
    new THREE.MeshPhysicalMaterial({
      color: '#f2f3f8',
      roughness: 0.35,
      metalness: 0.05,
      clearcoat: 0.6,
    }),
    new THREE.MeshPhysicalMaterial({
      color: '#0d0e12',
      roughness: 0.2,
      metalness: 0.85,
      clearcoat: 1,
    }),
    new THREE.MeshPhysicalMaterial({
      color: '#1a2ffb',
      roughness: 0.25,
      metalness: 0.35,
      clearcoat: 0.8,
      emissive: '#0a1466',
      emissiveIntensity: 0.25,
    }),
  ]

  const crosses = []
  const count = isMobile ? 10 : 16
  for (let i = 0; i < count; i++) {
    const mat = mats[i % mats.length]
    const cross = createCrossMesh(mat)
    const scale = 0.55 + Math.random() * 0.85
    cross.scale.setScalar(scale)
    cross.position.set(
      (Math.random() - 0.5) * 5.5,
      (Math.random() - 0.2) * 2.2,
      (Math.random() - 0.5) * 4.2
    )
    cross.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI)
    cross.userData = {
      spin: new THREE.Vector3(
        (Math.random() - 0.5) * 0.4,
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.4
      ),
      base: cross.position.clone(),
      phase: Math.random() * Math.PI * 2,
    }
    scene.add(cross)
    crosses.push(cross)
  }

  const mouse = new THREE.Vector2(0, 0)
  const targetCam = new THREE.Vector3(0, 1.2, 7.2)

  const onPointer = (e) => {
    const rect = canvas.getBoundingClientRect()
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
  }
  window.addEventListener('pointermove', onPointer)

  let accent = 0
  const accents = ['#1a2ffb', '#c1ff00', '#ff4c41', '#8832f7']
  canvas.addEventListener('click', () => {
    accent = (accent + 1) % accents.length
    mats[2].color.set(accents[accent])
    mats[2].emissive.set(accents[accent])
    fill.color.set(accents[accent])
  })

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = canvas.parentElement
    camera.aspect = w / Math.max(h, 1)
    camera.updateProjectionMatrix()
    renderer.setSize(w, h, false)
  }
  resize()
  window.addEventListener('resize', resize)

  let raf = 0
  let last = 0
  const minMs = isMobile ? 1000 / 30 : 0

  const tick = (t) => {
    raf = requestAnimationFrame(tick)
    if (minMs && t - last < minMs) return
    last = t
    const time = t * 0.001

    crosses.forEach((cross, i) => {
      const { spin, base, phase } = cross.userData
      cross.rotation.x += spin.x * 0.01
      cross.rotation.y += spin.y * 0.012
      cross.rotation.z += spin.z * 0.01
      cross.position.x = base.x + Math.sin(time * 0.6 + phase) * 0.15 + mouse.x * (0.35 + i * 0.01)
      cross.position.y = base.y + Math.cos(time * 0.7 + phase) * 0.18 + mouse.y * 0.2
      cross.position.z = base.z + mouse.x * -0.2
    })

    targetCam.x = mouse.x * 0.6
    targetCam.y = 1.2 + mouse.y * 0.25
    camera.position.x += (targetCam.x - camera.position.x) * 0.04
    camera.position.y += (targetCam.y - camera.position.y) * 0.04
    camera.lookAt(0, 0.2, 0)

    renderer.render(scene, camera)
  }
  raf = requestAnimationFrame(tick)

  return {
    destroy() {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onPointer)
      window.removeEventListener('resize', resize)
      renderer.dispose()
    },
  }
}

export function createMiniScene(canvas) {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color('#07080d')
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 20)
  camera.position.set(0, 0.4, 4.2)
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
  renderer.outputColorSpace = THREE.SRGBColorSpace

  scene.add(new THREE.AmbientLight(0xffffff, 0.7))
  const light = new THREE.DirectionalLight(0x8ea2ff, 2)
  light.position.set(2, 3, 4)
  scene.add(light)

  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.7, 1),
    new THREE.MeshStandardMaterial({
      color: '#1a2ffb',
      emissive: '#0b1460',
      metalness: 0.5,
      roughness: 0.25,
    })
  )
  scene.add(core)

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.2, 0.05, 12, 64),
    new THREE.MeshStandardMaterial({ color: '#c1ff00', metalness: 0.6, roughness: 0.3 })
  )
  ring.rotation.x = Math.PI / 2.5
  scene.add(ring)

  const resize = () => {
    const parent = canvas.parentElement
    const w = parent.clientWidth
    const h = parent.clientHeight || 360
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h, false)
  }
  resize()
  window.addEventListener('resize', resize)

  let raf = 0
  const tick = (t) => {
    raf = requestAnimationFrame(tick)
    const time = t * 0.001
    core.rotation.y = time * 0.5
    core.rotation.x = Math.sin(time * 0.4) * 0.3
    ring.rotation.z = time * 0.35
    camera.position.x = Math.sin(time * 0.2) * 0.3
    camera.lookAt(0, 0, 0)
    renderer.render(scene, camera)
  }
  raf = requestAnimationFrame(tick)

  return {
    destroy() {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      renderer.dispose()
    },
  }
}
