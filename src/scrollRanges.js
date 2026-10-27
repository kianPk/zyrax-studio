/**
 * Weighted scroll ranges — port of Lusion GoalSectionRanges (simplified).
 */
export const GOAL_ITEMS = [
  { id: 'blackFrameShow', weight: 0.25 },
  { id: 'blackFrameIn', weight: 0.4 },
  { id: 'blackTitle', weight: 3.2 },
  { id: 'blackTunnel', weight: 6 },
  { id: 'whiteTunnel', weight: 2.2 },
  { id: 'whiteFrameOut', weight: 0.9 },
  { id: 'whiteFrameBreak', weight: 1 },
  { id: 'astronautDrop', weight: 1.2 },
  { id: 'astronautWait', weight: 0.5 },
]

export function fit(v, a, b, c, d) {
  const t = Math.max(0, Math.min(1, (v - a) / ((b - a) || 1)))
  return c + (d - c) * t
}

export function easeCubicIn(t) {
  return t * t * t
}

export function easeCubicInOut(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

export function easeQuartIn(t) {
  return t * t * t * t
}

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
