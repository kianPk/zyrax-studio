import { createGoalRanges, fit, easeCubicIn, easeCubicInOut } from './scrollRanges.js'

/**
 * DOM-only goal scroll (title zoom / phase colors) — runs even if WebGL fails.
 */
export function bindGoalDomScroll(sectionEl, titleEl, stickyEl) {
  if (!sectionEl || !titleEl) return { updateScroll() {}, destroy() {} }

  const titleLines = Array.from(titleEl.querySelectorAll('.home-goal-tunnel-title-line'))
  titleLines.forEach((line) => {
    if (line.querySelector('.goal-word')) return
    const words = line.textContent.trim().split(/\s+/)
    line.innerHTML = words.map((w) => `<span class="goal-word">${w}</span>`).join(' ')
  })

  const ranges = createGoalRanges(sectionEl)
  const isMobile = window.innerWidth < 812
  const paras = sectionEl.querySelector('.home-goal-texts-paragraph')

  const updateScroll = () => {
    const blackTitleRatio = ranges.range('blackTitle').ratio
    const blackTunnelRatio = ranges.range('blackTunnel').ratio
    const whiteTunnelRatio = ranges.between('whiteTunnel', 'whiteFrameOut').ratio
    const astronautDropRatio = ranges.range('astronautDrop').ratio
    const toWhite = fit(whiteTunnelRatio, 0, 0.25, 0, 1)

    const tr = blackTitleRatio
    const scale = fit(easeCubicIn(fit(tr, 0.5, 1, 0, 1)), 0, 1, 1, isMobile ? 6 : 12)
    const opacity =
      fit(tr, 0, 0.05, 0, 1) *
      fit(tr, 0.88, 1, 1, 0) *
      fit(blackTunnelRatio, 0, 0.15, 1, 0)
    const spread = easeCubicInOut(fit(tr, 0.35, 0.7, 0, 1))

    titleEl.classList.toggle('is-on-black', toWhite < 0.5)
    titleEl.style.opacity = String(opacity)
    titleEl.style.transform = `translate3d(-50%, -50%, 0) scale(${scale})`
    titleEl.style.visibility = opacity < 0.02 ? 'hidden' : 'visible'
    titleEl.querySelectorAll('.goal-word').forEach((word) => {
      const words = Array.from(word.parentElement.querySelectorAll('.goal-word'))
      const idx = words.indexOf(word)
      const mid = (words.length - 1) / 2
      word.style.transform = `translateX(${(idx - mid) * 1.35 * spread}em)`
    })

    if (stickyEl) {
      stickyEl.style.background = toWhite > 0.5 ? '#f0f1fa' : '#0b0b12'
    }

    if (paras) {
      const pr = fit(astronautDropRatio, 0.2, 0.9, 0, 1)
      paras.style.opacity = String(pr)
      paras.style.transform = `translateY(${(1 - pr) * 40}px)`
    }

    sectionEl.dataset.goalPhase =
      whiteTunnelRatio > 0.01 ? 'white' : blackTunnelRatio > 0.01 ? 'black-tunnel' : 'title'

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
    },
  }
}
