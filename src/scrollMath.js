/**
 * Lusion scroll math — math.fit + ease.lusion (cubic-bezier .35,0,0,1)
 * and getDomRange screenRatio / showScreenOffset.
 */

export function clamp(v, a = 0, b = 1) {
  return Math.max(a, Math.min(b, v))
}

export function saturate(v) {
  return clamp(v, 0, 1)
}

export function unMix(a, b, v) {
  return (v - a) / ((b - a) || 1)
}

export function cUnMix(a, b, v) {
  return clamp(unMix(a, b, v), 0, 1)
}

/** Optional 6th arg: ease function applied to normalized t */
export function fit(v, a, b, c, d, easeFn) {
  let t = cUnMix(a, b, v)
  if (easeFn) t = easeFn(t)
  return c + t * (d - c)
}

export function unClampedFit(v, a, b, c, d, easeFn) {
  let t = unMix(a, b, v)
  if (easeFn) t = easeFn(t)
  return c + t * (d - c)
}

/** CSS cubic-bezier(x1,y1,x2,y2) evaluated at t ∈ [0,1] (Lusion Ease.cubicBezier) */
export function cubicBezierEase(t, x1, y1, x2, y2) {
  if (t <= 0) return 0
  if (t >= 1) return 1
  if (x1 === y1 && x2 === y2) return t

  const sampleCurveDerivativeX = (x, a, b, c) => 1 / (3 * a * x * x + 2 * b * x + c)
  const sampleCurveX = (x, a, b, c, d) => a * (x * x * x) + b * (x * x) + c * x + d
  const sampleCurveY = (x, a, b, c, d) => {
    const x2 = x * x
    return a * (x2 * x) + b * x2 + c * x + d
  }

  const ax = 1 - 3 * x2 + 3 * x1
  const bx = 3 * x2 - 6 * x1
  const cx = 3 * x1
  const ay = 1 - 3 * y2 + 3 * y1
  const by = 3 * y2 - 6 * y1
  const cy = 3 * y1

  let x = t
  for (let i = 0; i < 100; i++) {
    const xEst = sampleCurveX(x, ax, bx, cx, 0)
    let d = sampleCurveDerivativeX(x, ax, bx, cx)
    if (d === Infinity) d = t
    x -= (xEst - t) * d
    x = Math.min(Math.max(x, 0), 1)
  }
  return sampleCurveY(x, ay, by, cy, 0)
}

/** ease.lusion */
export function easeLusion(t) {
  return cubicBezierEase(t, 0.35, 0, 0, 1)
}

export function easeExpoOut(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

export function easeExpoIn(t) {
  return t === 0 ? 0 : Math.pow(1024, t - 1)
}

export function easeExpoInOut(t) {
  if (t === 0) return 0
  if (t === 1) return 1
  t *= 2
  return t < 1 ? 0.5 * Math.pow(1024, t - 1) : 0.5 * (-Math.pow(2, -10 * (t - 1)) + 2)
}

export function easeSineIn(t) {
  return 1 - Math.cos((t * Math.PI) / 2)
}

export function easeSineOut(t) {
  return Math.sin((t * Math.PI) / 2)
}

export function easeCubicIn(t) {
  return t * t * t
}

export function easeCubicInOut(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

/**
 * Port of Lusion DomBound / scrollManager.getDomRange for vertical scroll.
 * Uses getBoundingClientRect (viewport space) — equivalent to their screenY after scroll.
 */
export function getDomRange(el) {
  if (!el) {
    return {
      top: 0,
      bottom: 0,
      height: 0,
      ratio: 1,
      screenRatio: 1,
      showScreenOffset: 0,
      hideScreenOffset: 0,
      isActive: false,
    }
  }
  const rect = el.getBoundingClientRect()
  const vh = window.innerHeight || 1
  const top = rect.top
  const height = rect.height
  const bottom = rect.bottom

  // ratio: -1 above, 0 fully in view span, 1 below (Lusion DomBound)
  let ratio = Math.min(0, unClampedFit(top, vh, vh - height, -1, 0))
  ratio += Math.max(0, unClampedFit(top, 0, -height, 0, 1))

  const screenRatio = fit(top, vh, -height, -1, 1)
  const showScreenOffset = -(top - vh) / vh
  const hideScreenOffset = -(top + height) / vh
  const isActive = ratio >= -1 && ratio <= 1

  return {
    top,
    bottom,
    height,
    width: rect.width,
    ratio,
    screenRatio,
    showScreenOffset,
    hideScreenOffset,
    isActive,
  }
}
