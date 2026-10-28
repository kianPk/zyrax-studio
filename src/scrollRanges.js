/**
 * Weighted + pixel scroll ranges — port of Lusion GoalSectionRanges.
 * blackFrameShow / astronautDrop / astronautWait are pixel-based from the
 * tablet & out-frame DOM; tunnel phases share the remaining pixel runway
 * by weight. This keeps the tablet entry short — not stretched across the
 * entire 4200vh goal padding.
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
  { id: 'blackFrameShow', isPixelBased: true },
  { id: 'blackFrameIn', weight: 1 },
  { id: 'blackTitle', weight: 5 },
  { id: 'blackTunnel', weight: 12 },
  { id: 'whiteTunnel', weight: 2 },
  { id: 'whiteFrameOut', weight: 1 },
  { id: 'whiteFrameBreak', weight: 1.5 },
  { id: 'astronautDrop', isPixelBased: true },
  { id: 'astronautWait', isPixelBased: true },
]

function domRange(el) {
  if (!el) return { top: 0, bottom: 0, height: 0, left: 0, width: 0 }
  const r = el.getBoundingClientRect()
  const top = r.top + window.scrollY
  return {
    top,
    bottom: top + r.height,
    height: r.height,
    left: r.left + window.scrollX,
    width: r.width,
  }
}

/** Intrinsic height for aspect-ratio boxes that may be CSS-collapsed. */
function intrinsicFrameHeight(el, fallbackRatio) {
  if (!el) return 0
  const h = el.getBoundingClientRect().height
  if (h > 8) return h
  const inner =
    el.querySelector?.('[id$="-inner"]') ||
    el.parentElement?.querySelector?.('[id$="-inner"]') ||
    el
  const w = inner?.getBoundingClientRect?.().width || el.getBoundingClientRect().width || window.innerWidth * 0.45
  return Math.max(8, w * fallbackRatio)
}

export function createGoalRanges(sectionEl) {
  const items = {}
  let totalTunnelWeight = 0
  for (const it of GOAL_ITEMS) {
    items[it.id] = { ...it, pixelFrom: 0, pixelTo: 0, pixelCount: 0 }
    if (it.weight) totalTunnelWeight += it.weight
  }

  let baseY = 0
  let totalPixelCount = 1
  let layoutTick = -1

  function rebuild() {
    if (!sectionEl) return
    const vh = window.innerHeight || 1
    const section = domRange(sectionEl)
    const imgInEl =
      sectionEl.querySelector('#home-goal-image-in') ||
      sectionEl.querySelector('#home-goal-image-in-inner')
    const imgOutEl =
      sectionEl.querySelector('#home-goal-image-out') ||
      sectionEl.querySelector('#home-goal-image-out-inner')
    const imgIn = domRange(imgInEl)
    const imgOut = domRange(imgOutEl)

    // If out-frame is CSS-collapsed (height:0), recover aspect height (1537/2000)
    const inH = Math.max(imgIn.height, intrinsicFrameHeight(imgInEl, 1080 / 1496))
    const outH = Math.max(imgOut.height, intrinsicFrameHeight(imgOutEl, 1537 / 2000))

    // Lusion: start when the tablet is just below the fold
    baseY = (imgIn.top || section.top) - vh

    const showPx = (vh + inH) * 0.5
    // Exact Lusion: astronautDrop.pixelCount = (vh + outH) * 0.5 + vh
    // Shorter local drop starved glass shatter + wave intro.
    const dropPx = Math.max((vh + outH) * 0.5 + vh, vh * 1.85)

    // Wait = wave + stickers while pinned, then end-section/footer
    const footer =
      document.getElementById('footer-section') ||
      document.getElementById('end-section') ||
      document.querySelector('footer')
    const docBottom = document.documentElement.scrollHeight
    const footerBottom = footer ? Math.max(domRange(footer).bottom, docBottom) : docBottom
    let waitPx = Math.max(vh * 1.35, footerBottom - section.bottom)

    // Max scroll progress we can actually reach (last viewport of the page)
    const maxProgress = Math.max(vh * 12, docBottom - vh - baseY)

    // Tunnel weight runway between show and drop (Lusion `c`)
    let tunnelSpan = Math.max(
      vh * 8,
      section.bottom - baseY - showPx - dropPx
    )

    // Fit ALL phases into scrollable page — otherwise drop/wave never finish
    // (drop stuck ~0.9 at document end, wave never loops on white).
    const fixedPx = showPx + dropPx + waitPx
    if (fixedPx + tunnelSpan > maxProgress) {
      tunnelSpan = Math.max(vh * 6, maxProgress - fixedPx)
    }
    if (fixedPx + tunnelSpan > maxProgress) {
      // Still too long — shrink wait first, then drop floor
      waitPx = Math.max(vh * 0.5, maxProgress - showPx - dropPx - tunnelSpan)
    }

    items.blackFrameShow.pixelCount = showPx
    items.astronautDrop.pixelCount = dropPx
    items.astronautWait.pixelCount = Math.max(vh * 0.5, waitPx)

    totalPixelCount = 0
    for (const it of GOAL_ITEMS) {
      const row = items[it.id]
      row.pixelFrom = totalPixelCount
      if (row.weight) {
        row.pixelCount = (tunnelSpan * row.weight) / totalTunnelWeight
      }
      // Keep tablet→fullscreen tight
      if (row.id === 'blackFrameIn') {
        row.pixelCount = Math.min(row.pixelCount, vh * 1.15)
      }
      totalPixelCount += row.pixelCount
      row.pixelTo = totalPixelCount
    }
  }

  function ensureLayout() {
    // Rebuild cheaply when viewport/layout may have changed
    const sig =
      (window.innerHeight | 0) * 1e6 +
      ((sectionEl?.offsetHeight | 0) % 1e6)
    if (sig !== layoutTick) {
      layoutTick = sig
      rebuild()
    }
  }

  function scrollPixel() {
    return window.scrollY || window.pageYOffset || 0
  }

  function progress() {
    ensureLayout()
    return scrollPixel() - baseY
  }

  function range(fromId, toId = fromId) {
    ensureLayout()
    const a = items[fromId]
    const b = items[toId]
    const pixelFrom = a.pixelFrom
    const pixelTo = b.pixelTo
    const pixelCount = Math.max(pixelTo - pixelFrom, 1e-6)
    const pixel = progress() - pixelFrom
    const ratio = pixel / pixelCount
    return {
      ratio: Math.max(0, Math.min(1, ratio)),
      raw: ratio,
      active: ratio >= 0 && ratio < 1,
      global: progress() / Math.max(totalPixelCount, 1),
      pixel,
      pixelCount,
    }
  }

  function between(fromId, toId) {
    return range(fromId, toId)
  }

  // Initial layout
  if (typeof window !== 'undefined') {
    rebuild()
    window.addEventListener('resize', () => {
      layoutTick = -1
      rebuild()
    })
  }

  return {
    items,
    progress: () => {
      ensureLayout()
      return Math.max(0, Math.min(1, progress() / Math.max(totalPixelCount, 1)))
    },
    range,
    between,
    totalWeight: totalTunnelWeight,
    rebuild,
  }
}
