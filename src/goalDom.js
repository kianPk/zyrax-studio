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
  const textsEl =
    sectionEl.querySelector('#home-goal-texts') ||
    sectionEl.querySelector('.home-goal-texts-paragraph')
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

  // Marker for the sticky's flow slot. Sticky itself is height:0 in document
  // flow (Lusion canvas is fixed) — never inflate this to 100vh or scroll jumps.
  let pinSpacer = null
  let stickyHomeParent = null
  let stickyHomeNext = null
  if (stickyEl && stickyEl.parentElement) {
    stickyHomeParent = stickyEl.parentElement
    stickyHomeNext = stickyEl.nextSibling
    pinSpacer = document.createElement('div')
    pinSpacer.setAttribute('aria-hidden', 'true')
    pinSpacer.style.width = '100%'
    pinSpacer.style.height = '0px'
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
    const vv = window.visualViewport
    const vh = Math.round(vv?.height || window.innerHeight)
    const vvTop = Math.round(vv?.offsetTop || 0)

    // Pin tunnel once sticky reaches viewport top (after context + cyan line).
    // Skip while goalFrame has the sticky in tablet-window mode.
    if (stickyEl && !stickyEl.classList.contains('is-windowed')) {
      const sectionRect = sectionEl.getBoundingClientRect()
      const scrollY = window.scrollY || 0
      const vvLeft = Math.round(vv?.offsetLeft || 0)
      const vw = Math.round(vv?.width || window.innerWidth)
      const slotEl = stickyEl.classList.contains('is-pinned') && pinSpacer ? pinSpacer : stickyEl
      const slotTop = slotEl.getBoundingClientRect().top + scrollY
      const blackFrameIn = ranges.range('blackFrameIn').ratio
      const blackTitle = ranges.range('blackTitle').ratio
      // Must actually intersect the viewport. `bottom > 0` alone is true for the
      // whole 4200vh runway while you're back on the hero — that left a black
      // astronaut overlay stuck over the top of the page after scrolling up.
      const sectionInView = sectionRect.bottom > 0 && sectionRect.top < vh
      const frameOwned = stickyEl.dataset.goalOwned === 'full'
      const pastSlot = scrollY >= slotTop - 1
      // Goal scroll ratios drop to ~0 above the section — use that to release pin
      // when scrolling back to the hero (frameOwned alone was sticky forever).
      const goalActive =
        blackFrameIn > 0.02 ||
        blackTitle > 0.02 ||
        blackTunnelRatio > 0.01 ||
        whiteTunnelRatio > 0.01 ||
        astronautDropRatio > 0.01
      const shouldPin =
        sectionInView && goalActive && (frameOwned || pastSlot || blackFrameIn >= 0.999)
      const wasPinned = stickyEl.classList.contains('is-pinned')
      stickyEl.classList.toggle('is-pinned', shouldPin)
      if (pinSpacer) pinSpacer.style.height = '0px'
      if (shouldPin && !wasPinned) {
        if (stickyEl.parentElement !== document.body) {
          document.body.appendChild(stickyEl)
        }
      } else if (!shouldPin && wasPinned && stickyHomeParent) {
        if (stickyHomeNext && stickyHomeNext.parentNode === stickyHomeParent) {
          stickyHomeParent.insertBefore(stickyEl, stickyHomeNext)
        } else if (pinSpacer && pinSpacer.parentNode === stickyHomeParent) {
          stickyHomeParent.insertBefore(stickyEl, pinSpacer.nextSibling)
        } else {
          stickyHomeParent.appendChild(stickyEl)
        }
        delete stickyEl.dataset.goalOwned
        stickyEl.style.position = ''
        stickyEl.style.top = ''
        stickyEl.style.left = ''
        stickyEl.style.width = ''
        stickyEl.style.height = ''
        stickyEl.style.right = ''
        stickyEl.style.bottom = ''
        stickyEl.style.zIndex = ''
        stickyEl.style.background = ''
        stickyEl.style.opacity = ''
        stickyEl.style.visibility = ''
        stickyEl.style.transform = ''
        stickyEl.style.overflow = ''
        stickyEl.style.borderRadius = ''
        stickyEl.style.pointerEvents = ''
        stickyEl.classList.remove('is-windowed')
      }
      if (shouldPin) {
        stickyEl.style.position = 'fixed'
        stickyEl.style.top = `${vvTop}px`
        stickyEl.style.left = `${vvLeft}px`
        stickyEl.style.width = `${vw}px`
        stickyEl.style.height = `${vh}px`
        stickyEl.style.right = 'auto'
        stickyEl.style.bottom = 'auto'
        stickyEl.style.zIndex = '4'
        stickyEl.style.visibility = 'visible'
        stickyEl.style.opacity = '1'
        stickyEl.style.background =
          toWhite > 0.05 || whiteTunnelRatio > 0.01 ? '#ffffff' : '#000000'
      }
    }

    // Lusion: map blackTitle through RATIO_FROM..RATIO_TO
    let r = fit(blackTitleRatio, RATIO_FROM, RATIO_TO, 0, 1)
    const active = r > 0 && r < 1

    // Mobile needs a bigger zoom so "STEP INTO…" fills the portrait viewport like Lusion
    let scale = fit(r, 0.5, 1, 1, isMobile() ? 9 : 12, easeCubicIn)
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

    // Context paras stay readable during cyan-line phase (Lusion); soft fade only deep in tunnel
    if (textsEl) {
      const fade = fit(blackTunnelRatio, 0.02, 0.15, 1, 0)
      textsEl.style.opacity = String(fade)
      // goalFrame owns vertical align during tablet-window mode
      if (!stickyEl?.classList.contains('is-windowed')) {
        textsEl.style.transform = 'none'
      }
    }

    const blackFrameInRatio = ranges.range('blackFrameIn').ratio
    sectionEl.dataset.goalPhase =
      whiteTunnelRatio > 0.01
        ? 'white'
        : blackTunnelRatio > 0.01
          ? 'black-tunnel'
          : blackFrameInRatio < 0.98
            ? 'window'
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
