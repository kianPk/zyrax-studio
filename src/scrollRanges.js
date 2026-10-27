/**
 * Weighted scroll ranges — port of Lusion GoalSectionRanges.
 * Weights match Lusion itemList (pixel-based phases approximated as weights).
 */
import {
  fit,
  clamp,
  cUnMix,
  easeCubicIn,
  easeCubicInOut,
  easeExpoIn,
  easeSineIn,
  easeSineOut,
} from './scrollMath.js'

export {
  fit,
  clamp,
  cUnMix,
  easeCubicIn,
  easeCubicInOut,
  easeExpoIn,
  easeSineIn,
  easeSineOut,
}

export function easeCubicOut(t) {
  return 1 - Math.pow(1 - t, 3)
}

export function easeQuartIn(t) {
  return t * t * t * t
}

/** Approximate ease.backInOut used for astronaut Y drop */
export function easeBackInOut(t) {
  const c1 = 1.70158
  const c2 = c1 * 1.525
  return t < 0.5
    ? (Math.pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2)) / 2
    : (Math.pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2
}

export function smoothstep(edge0, edge1, x) {
  const t = Math.max(0, Math.min(1, (x - edge0) / ((edge1 - edge0) || 1)))
  return t * t * (3 - 2 * t)
}

export const GOAL_ITEMS = [
  { id: 'blackFrameShow', weight: 0.55 },
  { id: 'blackFrameIn', weight: 1 },
  { id: 'blackTitle', weight: 5 },
  { id: 'blackTunnel', weight: 12 },
  { id: 'whiteTunnel', weight: 2 },
  { id: 'whiteFrameOut', weight: 1 },
  { id: 'whiteFrameBreak', weight: 1.5 },
  { id: 'astronautDrop', weight: 1.6 },
  { id: 'astronautWait', weight: 0.9 },
]

export function createGoalRanges(sectionEl) {
  const totalWeight = GOAL_ITEMS.reduce((s, i) => s + i.weight, 0)
  const items = {}
  let from = 0
  for (const it of GOAL_ITEMS) {
    const span = it.weight / totalWeight
    items[it.id] = { ...it, from, to: from + span }
    from += span
  }

  function progress() {
    const rect = sectionEl.getBoundingClientRect()
    const vh = window.innerHeight
    // section top hits viewport top → 0; when bottom leaves → 1
    const total = rect.height - vh
    const scrolled = Math.max(0, Math.min(1, -rect.top / Math.max(total, 1)))
    return scrolled
  }

  function range(fromId, toId = fromId) {
    const a = items[fromId]
    const b = items[toId]
    const p = progress()
    const start = a.from
    const end = b.to
    const ratio = (p - start) / Math.max(end - start, 1e-6)
    return {
      ratio: Math.max(0, Math.min(1, ratio)),
      raw: ratio,
      active: p >= start && p <= end,
      global: p,
    }
  }

  function between(fromId, toId) {
    return range(fromId, toId)
  }

  return { items, progress, range, between, totalWeight }
}
