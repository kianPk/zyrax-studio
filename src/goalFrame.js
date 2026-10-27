/**
 * Lusion GoalSection tablet/desktop window framing.
 * Astronaut lives inside the device screen (#home-goal-image-in hole)
 * with a bezel overlay; blackFrameIn expands that window to full viewport.
 */
import { fit, clamp } from './scrollMath.js'

const isMobile =
  typeof window !== 'undefined' &&
  (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth < 812)

export function bindGoalFrame(sectionEl, stickyEl, ranges, scrollLines) {
  if (!sectionEl || !stickyEl) {
    return { update() {}, destroy() {}, getFrameRect: () => null }
  }

  const base = import.meta.env.BASE_URL
  const imgInOuter = sectionEl.querySelector('#home-goal-image-in-outer')
  const imgInInner = sectionEl.querySelector('#home-goal-image-in-inner')
  const imgIn = sectionEl.querySelector('#home-goal-image-in')
  const contextInner = sectionEl.querySelector('#home-goal-context-inner')
  const textsEl = sectionEl.querySelector('#home-goal-texts')
  const titleEl = sectionEl.querySelector('#home-goal-tunnel-title')

  // Screen hole inset relative to full tablet (matches CSS #home-goal-image-in)
  const HOLE = { left: 0.039, top: 0.054, width: 0.925, height: 0.895 }

  // Inner clip for the WebGL canvas — only the screen area
  let screenClip = stickyEl.querySelector('[data-goal-screen-clip]')
  if (!screenClip) {
    screenClip = document.createElement('div')
    screenClip.setAttribute('data-goal-screen-clip', '')
    screenClip.style.cssText =
      'position:absolute;inset:0;overflow:hidden;border-radius:inherit;z-index:1;'
    // Move existing canvas + title into the clip so bezel sits above the canvas
    const kids = Array.from(stickyEl.childNodes)
    stickyEl.appendChild(screenClip)
    kids.forEach((n) => screenClip.appendChild(n))
  }

  // Bezel overlay — full device PNG with transparent screen + outside
  let bezel = stickyEl.querySelector('#home-goal-frame-bezel')
  if (!bezel) {
    bezel = document.createElement('img')
    bezel.id = 'home-goal-frame-bezel'
    bezel.alt = ''
    bezel.setAttribute('aria-hidden', 'true')
    bezel.decoding = 'async'
    stickyEl.appendChild(bezel)
  }
  // Context window always uses the landscape tablet shell (Lusion image-in)
  const syncBezelSrc = () => {
    const next = `${base}assets/textures/tunnels/tablet_bezel.png`
    if (bezel.getAttribute('src') !== next) bezel.src = next
  }
  syncBezelSrc()

  let lastMode = ''
  let frameRect = null

  // Preserve layout height while sticky is position:fixed over the tablet
  let flowSpacer = stickyEl.parentElement?.querySelector('[data-goal-flow-spacer]')
  if (!flowSpacer && stickyEl.parentElement) {
    flowSpacer = document.createElement('div')
    flowSpacer.setAttribute('data-goal-flow-spacer', '')
    flowSpacer.setAttribute('aria-hidden', 'true')
    flowSpacer.style.width = '100%'
    flowSpacer.style.pointerEvents = 'none'
    flowSpacer.style.height = '0px'
    stickyEl.parentElement.insertBefore(flowSpacer, stickyEl)
  }

  const deviceRectFromAnchor = () => {
    // Prefer full device shell (inner); fall back to screen hole
    const el = imgInInner || imgIn
    if (!el) return null
    const r = el.getBoundingClientRect()
    if (r.width < 8 || r.height < 8) return null
    return { left: r.left, top: r.top, width: r.width, height: r.height }
  }

  const applyStickyToRect = (rect, rotateRad = 0) => {
    if (!rect) return
    stickyEl.classList.add('is-windowed')
    stickyEl.classList.remove('is-pinned')
    const layoutH = window.innerHeight
    if (flowSpacer) flowSpacer.style.height = `${layoutH}px`
    stickyEl.style.position = 'fixed'
    stickyEl.style.left = `${rect.left}px`
    stickyEl.style.top = `${rect.top}px`
    stickyEl.style.width = `${rect.width}px`
    stickyEl.style.height = `${rect.height}px`
    stickyEl.style.right = 'auto'
    stickyEl.style.bottom = 'auto'
    stickyEl.style.borderRadius = `${Math.min(rect.width, rect.height) * 0.055}px`
    stickyEl.style.overflow = 'hidden'
    stickyEl.style.zIndex = '3'
    stickyEl.style.transform = rotateRad ? `rotate(${rotateRad}rad)` : 'none'
    stickyEl.style.background = 'transparent'
    stickyEl.style.boxShadow = '0 18px 60px rgba(0,0,0,0.28)'

    // Canvas only fills the screen hole; bezel covers the rest
    if (screenClip) {
      screenClip.style.left = `${HOLE.left * 100}%`
      screenClip.style.top = `${HOLE.top * 100}%`
      screenClip.style.width = `${HOLE.width * 100}%`
      screenClip.style.height = `${HOLE.height * 100}%`
      screenClip.style.right = 'auto'
      screenClip.style.bottom = 'auto'
      screenClip.style.inset = ''
      screenClip.style.borderRadius = `${Math.min(rect.width, rect.height) * 0.03}px`
      screenClip.style.background = '#000'
    }
    if (bezel) {
      bezel.style.position = 'absolute'
      bezel.style.inset = '0'
      bezel.style.width = '100%'
      bezel.style.height = '100%'
      bezel.style.objectFit = 'fill'
      bezel.style.zIndex = '6'
      bezel.style.pointerEvents = 'none'
    }
  }

  const clearWindowed = () => {
    stickyEl.classList.remove('is-windowed')
    stickyEl.style.position = ''
    stickyEl.style.borderRadius = ''
    stickyEl.style.transform = ''
    stickyEl.style.width = ''
    stickyEl.style.height = ''
    stickyEl.style.left = ''
    stickyEl.style.top = ''
    stickyEl.style.right = ''
    stickyEl.style.bottom = ''
    stickyEl.style.zIndex = ''
    stickyEl.style.background = ''
    stickyEl.style.boxShadow = ''
    stickyEl.style.overflow = ''
    stickyEl.style.opacity = ''
    stickyEl.style.pointerEvents = ''
    if (flowSpacer) flowSpacer.style.height = '0px'
    if (screenClip) {
      screenClip.style.left = '0'
      screenClip.style.top = '0'
      screenClip.style.width = '100%'
      screenClip.style.height = '100%'
      screenClip.style.borderRadius = '0'
      screenClip.style.background = ''
    }
    if (bezel) {
      bezel.style.opacity = '0'
      bezel.style.visibility = 'hidden'
    }
    scrollLines?.setGoalFrame?.({ active: false })
  }

  const update = () => {
    const blackFrameShow = ranges.range('blackFrameShow').ratio
    const blackFrameIn = ranges.range('blackFrameIn').ratio
    const blackTunnel = ranges.range('blackTunnel').ratio
    const whiteTunnel = ranges.between('whiteTunnel', 'whiteFrameOut').ratio
    const sectionRect = sectionEl.getBoundingClientRect()
    const vh = window.innerHeight
    const inView = sectionRect.bottom > 0 && sectionRect.top < vh

    frameRect = deviceRectFromAnchor()

    // Window phase: framed device until blackFrameIn completes
    const inWindowPhase =
      inView && blackTunnel < 0.02 && whiteTunnel < 0.01 && blackFrameIn < 0.999

    if (inWindowPhase && frameRect) {
      const E = clamp(blackFrameIn, 0, 1)
      const vw = window.innerWidth
      const full = { left: 0, top: 0, width: vw, height: vh }
      // Expand device rect toward fullscreen
      const rect = {
        left: frameRect.left + (full.left - frameRect.left) * E,
        top: frameRect.top + (full.top - frameRect.top) * E,
        width: frameRect.width + (full.width - frameRect.width) * E,
        height: frameRect.height + (full.height - frameRect.height) * E,
      }
      const rotate = fit(E, 0, 1, 0, 0.35) * (1 - E)
      applyStickyToRect(rect, rotate)

      // Reveal as soon as context is on screen; blackFrameShow only softens early entry
      const show = Math.max(
        fit(blackFrameShow, 0, 0.2, 0.35, 1),
        sectionRect.top < vh * 0.85 ? 1 : 0
      )
      stickyEl.style.opacity = String(show)
      stickyEl.style.pointerEvents = 'none'
      // Keep Lusion light page behind the tablet (tunnel must not paint body black)
      document.documentElement.classList.add('is-goal-window')
      document.documentElement.style.background = ''
      document.body.style.background = ''

      if (bezel) {
        // Bezel visible until expand swallows the frame
        bezel.style.opacity = String(fit(E, 0.05, 0.75, 1, 0) * show)
        bezel.style.visibility = E > 0.92 ? 'hidden' : 'visible'
      }
      if (imgInOuter) imgInOuter.style.visibility = E > 0.98 ? 'hidden' : 'visible'
      if (titleEl) titleEl.style.visibility = E > 0.55 ? '' : 'hidden'

      if (contextInner && !isMobile) {
        const lift = fit(E, 0, 1, 0, vh * 0.12)
        contextInner.style.transform = `translate3d(0, ${-lift}px, 0)`
      }
      if (textsEl && !isMobile && frameRect) {
        const ctx = sectionEl.querySelector('#home-goal-context')
        const ctxTop = ctx?.getBoundingClientRect().top ?? 0
        const pad = ctx ? parseFloat(getComputedStyle(ctx).paddingTop) || 0 : 0
        const y = frameRect.top - ctxTop - pad + frameRect.height * 0.5
        textsEl.style.top = `${y}px`
        textsEl.style.transform = 'translateY(-50%)'
      }

      // Drive cyan goal line with the same expand (Lusion frame transform)
      if (scrollLines?.setGoalFrame) {
        scrollLines.setGoalFrame({
          active: E > 0.01,
          scale: fit(E, 0, 1, 1, 2.4),
          rotation: rotate,
        })
      }

      // As expand progresses, hole inset collapses to full sticky
      if (screenClip && E > 0.01) {
        const l = HOLE.left * (1 - E)
        const t = HOLE.top * (1 - E)
        const w = HOLE.width + (1 - HOLE.width) * E
        const h = HOLE.height + (1 - HOLE.height) * E
        screenClip.style.left = `${l * 100}%`
        screenClip.style.top = `${t * 100}%`
        screenClip.style.width = `${w * 100}%`
        screenClip.style.height = `${h * 100}%`
      }

      if (lastMode !== 'window') {
        lastMode = 'window'
        window.dispatchEvent(new Event('resize'))
      }
      return { mode: 'window', blackFrameIn, blackFrameShow, frameRect }
    }

    if (lastMode === 'window') {
      clearWindowed()
      document.documentElement.classList.remove('is-goal-window')
      stickyEl.style.opacity = ''
      stickyEl.style.pointerEvents = ''
      if (imgInOuter) imgInOuter.style.visibility = 'hidden'
      if (contextInner) contextInner.style.transform = ''
      if (titleEl) titleEl.style.visibility = ''
      lastMode = 'full'
      window.dispatchEvent(new Event('resize'))
    } else if (!inWindowPhase && imgInOuter && blackTunnel > 0.05) {
      imgInOuter.style.visibility = 'hidden'
      if (bezel) {
        bezel.style.opacity = '0'
        bezel.style.visibility = 'hidden'
      }
    }

    if (!inView || sectionRect.top > vh * 0.9) {
      if (bezel) {
        bezel.style.opacity = '0'
        bezel.style.visibility = 'hidden'
      }
    }

    return { mode: lastMode || 'full', blackFrameIn, blackFrameShow, frameRect }
  }

  const onResize = () => {
    syncBezelSrc()
    update()
  }
  window.addEventListener('resize', onResize)

  return {
    update,
    destroy() {
      window.removeEventListener('resize', onResize)
      bezel?.remove()
      clearWindowed()
    },
    getFrameRect: () => frameRect,
  }
}
