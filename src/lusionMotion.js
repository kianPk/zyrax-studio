/**
 * Exact ports of Lusion Simple1DNoise, BrownianMotion, SecondOrderDynamics.
 */
import * as THREE from 'three'

function mix(a, b, t) {
  return a + (b - a) * t
}

export class Simple1DNoise {
  static MAX_VERTICES = 512
  static MAX_VERTICES_MASK = Simple1DNoise.MAX_VERTICES - 1

  constructor() {
    this._scale = 1
    this._amplitude = 1
    this._r = []
    for (let i = 0; i < Simple1DNoise.MAX_VERTICES; i++) this._r.push(Math.random() - 0.5)
  }

  getVal(x) {
    const t = x * this._scale
    const r = Math.floor(t)
    const n = t - r
    const a = n * n * (3 - 2 * n)
    const l = r & Simple1DNoise.MAX_VERTICES_MASK
    const c = (l + 1) & Simple1DNoise.MAX_VERTICES_MASK
    return mix(this._r[l], this._r[c], a) * this._amplitude
  }

  getFbm(x, octaves) {
    let sum = 0
    let amp = 0.5
    for (let i = 0; i < octaves; i++) {
      sum += amp * this.getVal(x)
      x *= 2
      amp *= 0.5
    }
    return sum
  }
}

const _vBm = new THREE.Vector3()

export class BrownianMotion {
  static FBM_NORM = 1 / 0.75

  constructor() {
    this._position = new THREE.Vector3()
    this._rotation = new THREE.Quaternion()
    this._euler = new THREE.Euler()
    this._scale = new THREE.Vector3(1, 1, 1)
    this._matrix = new THREE.Matrix4()
    this._enablePositionNoise = true
    this._enableRotationNoise = true
    this._positionFrequency = 0.25
    this._rotationFrequency = 0.25
    this._positionAmplitude = 0.3
    this._rotationAmplitude = 0.003
    this._positionScale = new THREE.Vector3(1, 1, 1)
    this._rotationScale = new THREE.Vector3(1, 1, 0)
    this._positionFractalLevel = 3
    this._rotationFractalLevel = 3
    this._times = new Float32Array(6)
    this._noise = new Simple1DNoise()
    this.rehash()
  }

  rehash() {
    for (let i = 0; i < 6; i++) this._times[i] = Math.random() * -10000
  }

  update(dt) {
    const t = dt === undefined ? 1 / 60 : dt
    if (this._enablePositionNoise) {
      for (let i = 0; i < 3; i++) this._times[i] += this._positionFrequency * t
      _vBm.set(
        this._noise.getFbm(this._times[0], this._positionFractalLevel),
        this._noise.getFbm(this._times[1], this._positionFractalLevel),
        this._noise.getFbm(this._times[2], this._positionFractalLevel)
      )
      _vBm.multiply(this._positionScale)
      _vBm.multiplyScalar(this._positionAmplitude * BrownianMotion.FBM_NORM)
      this._position.copy(_vBm)
    }
    if (this._enableRotationNoise) {
      for (let i = 0; i < 3; i++) this._times[i + 3] += this._rotationFrequency * t
      _vBm.set(
        this._noise.getFbm(this._times[3], this._rotationFractalLevel),
        this._noise.getFbm(this._times[4], this._rotationFractalLevel),
        this._noise.getFbm(this._times[5], this._rotationFractalLevel)
      )
      _vBm.multiply(this._rotationScale)
      _vBm.multiplyScalar(this._rotationAmplitude * BrownianMotion.FBM_NORM)
      this._euler.set(_vBm.x, _vBm.y, _vBm.z)
      this._rotation.setFromEuler(this._euler)
    }
    this._matrix.compose(this._position, this._rotation, this._scale)
  }

  get positionAmplitude() {
    return this._positionAmplitude
  }
  set positionAmplitude(v) {
    this._positionAmplitude = v
  }
  get positionFrequency() {
    return this._positionFrequency
  }
  set positionFrequency(v) {
    this._positionFrequency = v
  }
  get rotationAmplitude() {
    return this._rotationAmplitude
  }
  set rotationAmplitude(v) {
    this._rotationAmplitude = v
  }
  get rotationFrequency() {
    return this._rotationFrequency
  }
  set rotationFrequency(v) {
    this._rotationFrequency = v
  }
  get matrix() {
    return this._matrix
  }
  get euler() {
    return this._euler
  }
  get position() {
    return this._position
  }
}

/** Lusion SecondOrderDynamics (vector path). */
export class SecondOrderDynamics {
  constructor(initial, f = 1.5, z = 0.8, r = 2, robust = true) {
    this.isRobust = robust
    this.setFZR(f, z, r)
    this.target = initial.clone()
    this.target0 = initial.clone()
    this.prevTarget = initial.clone()
    this.value = initial.clone()
    this.valueVel = initial.clone().setScalar(0)
    this._targetVelCache = this.valueVel.clone()
    this._cache1 = this.valueVel.clone()
    this._cache2 = this.valueVel.clone()
  }

  setFZR(f = this._f, z = this._z, r = this._r) {
    this._f = f
    this._z = z
    this._r = r
    const w = Math.PI * 2 * f
    if (this.isRobust) {
      this._w = w
      this._d = this._w * Math.sqrt(Math.abs(this._z * this._z - 1))
    }
    this.k1 = z / (Math.PI * f)
    this.k2 = 1 / (w * w)
    this.k3 = (r * z) / w
  }

  _computeRobustStableCoefficients(e) {
    if (this._w * e < this._z) {
      this._k1Stable = this.k1
      this._k2Stable = Math.max(this.k2, (e * e) / 2 + (e * this.k1) / 2, e * this.k1)
    } else {
      const t = Math.exp(-this._z * this._w * e)
      const r =
        2 *
        t *
        (this._z <= 1 ? Math.cos(e * this._d) : Math.cosh(e * this._d))
      const n = t * t
      const a = e / (1 + n - r)
      this._k1Stable = (1 - n) * a
      this._k2Stable = e * a
    }
  }

  update(dt, target = this.target) {
    if (dt <= 0) return this.value
    this._targetVelCache.copy(target).sub(this.prevTarget).divideScalar(dt)
    this.prevTarget.copy(target)
    this._computeRobustStableCoefficients(dt)
    this.value.add(this._cache1.copy(this.valueVel).multiplyScalar(dt))
    this._cache1
      .copy(target)
      .add(this._targetVelCache.multiplyScalar(this.k3))
      .sub(this.value)
      .sub(this._cache2.copy(this.valueVel).multiplyScalar(this._k1Stable))
      .multiplyScalar(dt / this._k2Stable)
    this.valueVel.add(this._cache1)
    return this.value
  }

  reset(e = this.target0) {
    this.valueVel.setScalar(0)
    this.prevTarget.copy(e)
    this.target.copy(e)
    this.value.copy(e)
  }
}
