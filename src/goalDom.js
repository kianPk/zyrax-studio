import {
  createGoalRanges,
  fit,
  easeCubicIn,
  easeCubicInOut,
  easeCubicOut,
} from './scrollRanges.js'

/**
 * DOM-only goal scroll (title zoom / phase colors) — Lusion HomeGoalSectionTunnelTitle.
 */
export function bindGoalDomScroll(sectionEl, titleEl, stickyEl) {
  if (!sectionEl || !titleEl) return { updateScroll() {}, destroy() {} }

  const titleLines = Array.from(titleEl.querySelectorAll('.home-goal-tunnel-title-line'))
  titleLines.forEach((line) => {
    if (line.querySelector('.goal-word')) return
    const words = line.textContent.replace(/\s+/g, ' ').trim().split(' ')
    line.innerHTML = words.map((w) => `<span class="goal-word">${w}</span>`).join(' ')
  })

  const ranges = createGoalRanges(sectionEl)
  const isMobile = () => window.innerWidth < 812
  const paras = sectionEl.querySelector('.home-goal-texts-paragraph')
  const RATIO_FROM = 0.25
  const RATIO_TO = 1

  // Precompute word spread offsets (fill line width) like Lusion resize()
  const computeOffsets = () => {
    titleEl.style.transform = 'translate3d(-50%, -50%, 0)'
    const containerRect = titleEl.getBoundingClientRect()
    const width = containerRect.width
    const left = containerRect.left
    titleLines.forEach((line) => {
      const words = Array.from(line.querySelectorAll('.goal-word'))
      if (words.length < 2) {
        words.forEach((w) => {
          w._offsetX = 0
        })
        return
      }
      words.forEach((w) => {
        w.style.transform = 'translateZ(0)'
      })
      let remaining = width
      words.forEach((w) => {
        const r = w.getBoundingClientRect()
        w._domRect = r
        remaining -= r.width
      })
      let f = 0
      const gap = remaining / (words.length - 1)
      words.forEach((w) => {
        w._offsetX = -w._domRect.left + left + f
        f += w._domRect.width + gap
      })
    })
  }
  computeOffsets()
  window.addEventListener('resize', computeOffsets)

  // Spacer keeps layout height when sticky is position:fixed
  let pinSpacer = null
  if (stickyEl && stickyEl.parentElement) {
    pinSpacer = document.createElement('div')
    pinSpacer.setAttribute('aria-hidden', 'true')
    pinSpacer.style.width = '100%'
    pinSpacer.style.pointerEvents = 'none'
    stickyEl.parentElement.insertBefore(pinSpacer, stickyEl)
  }

  const updateScroll = () => {
    const blackTitleRatio = ranges.range('blackTitle').ratio
    const blackTunnelRatio = ranges.range('blackTunnel').ratio
    const whiteTunnelRatio = ranges.between('whiteTunnel', 'whiteFrameOut').ratio
    // Lusion: drop spans whiteFrameBreak → astronautDrop
    const astronautDropRatio = ranges.between('whiteFrameBreak', 'astronautDrop').ratio
    const toWhite = fit(whiteTunnelRatio, 0, 0.25, 0, 1)
    const global = ranges.progress()
    const vh = window.innerHeight

    // Pin tunnel viewport while goal scroll range is active (Lenis-safe)
    if (stickyEl) {
      const sectionRect = sectionEl.getBoundingClientRect()
      // pin while section top has reached viewport top and section still covers viewport
      const shouldPin = sectionRect.top <= 0 && sectionRect.bottom > vh
      stickyEl.classList.toggle('is-pinned', shouldPin)
      if (pinSpacer) {
        pinSpacer.style.height = shouldPin ? `${stickyEl.offsetHeight || vh}px` : '0px'
      }
      stickyEl.style.background = toWhite > 0.5 ? '#f0f1fa' : '#000000'
    }

    // Lusion: map blackTitle through RATIO_FROM..RATIO_TO
    let r = fit(blackTitleRatio, RATIO_FROM, RATIO_TO, 0, 1)
    const active = r > 0 && r < 1

    let scale = fit(r, 0.5, 1, 1, isMobile() ? 6 : 12, easeCubicIn)
    scale *= fit(r, 0, 0.15, 0.85, 1, easeCubicOut)
    let opacity = fit(r, 0.9, 1, 1, 0)
    opacity *= fit(r, 0, 0.05, 0, 1)
    // fade as black tunnel takes over
    opacity *= fit(blackTunnelRatio, 0, 0.12, 1, 0)
    const spread = fit(r, 0.4, 0.6, 0, 1, easeCubicInOut)

    titleEl.classList.toggle('is-on-black', toWhite < 0.5)
    titleEl.style.opacity = String(opacity)
    titleEl.style.transform = `translate3d(-50%, -50%, 0) scale(${scale})`
    titleEl.style.visibility = active && opacity > 0.02 ? 'visible' : 'hidden'

    titleEl.querySelectorAll('.goal-word').forEach((word) => {
      const ox = word._offsetX || 0
      word.style.transform = `translateX(${spread * ox}px)`
    })

    if (paras) {
      const pr = fit(astronautDropRatio, 0.15, 0.85, 0, 1)
      paras.style.opacity = String(pr)
      paras.style.transform = `translateY(${(1 - pr) * 48}px)`
    }

    sectionEl.dataset.goalPhase =
      whiteTunnelRatio > 0.01
        ? 'white'
        : blackTunnelRatio > 0.01
          ? 'black-tunnel'
          : 'title'

    return {
      blackTitleRatio,
      blackTunnelRatio,
      whiteTunnelRatio,
      astronautDropRatio,
      toWhite,
    }
  }

  window.addEventListener('scroll', updateScroll, { passive: true })
  updateScroll()

  return {
    updateScroll,
    ranges,
    destroy() {
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('resize', computeOffsets)
    },
  }
}
