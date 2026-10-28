/**
 * Lusion GoalSection tablet/desktop window framing.
 *
 * Like Lusion's fixed #canvas: during the window phase the sticky is a
 * full-viewport overlay. The bezel + screen-clip track the DOM tablet and
 * expand to fullscreen with blackFrameIn — so scrolling never leaves a
 * half-page white void under a small fixed tablet shell.
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

  let screenClip = stickyEl.querySelector('[data-goal-screen-clip]')
  if (!screenClip) {
    screenClip = document.createElement('div')
    screenClip.setAttribute('data-goal-screen-clip', '')
    screenClip.style.cssText =
      'position:absolute;left:0;top:0;width:100%;height:100%;overflow:hidden;border-radius:inherit;z-index:1;background:#000;'
    const kids = Array.from(stickyEl.childNodes)
    stickyEl.appendChild(screenClip)
    kids.forEach((n) => screenClip.appendChild(n))
  }

  let bezel = stickyEl.querySelector('#home-goal-frame-bezel')
  if (!bezel) {
    bezel = document.createElement('img')
    bezel.id = 'home-goal-frame-bezel'
    bezel.alt = ''
    bezel.setAttribute('aria-hidden', 'true')
    bezel.decoding = 'async'
    stickyEl.appendChild(bezel)
  }
  const syncBezelSrc = () => {
    const next = `${base}assets/textures/tunnels/tablet_bezel.png`
    if (bezel.getAttribute('src') !== next) bezel.src = next
  }
  syncBezelSrc()

  let lastMode = ''
  let frameRect = null

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
    const el = imgInInner || imgIn
    if (!el) return null
    const r = el.getBoundingClientRect()
    if (r.width < 8 || r.height < 8) return null
    return { left: r.left, top: r.top, width: r.width, height: r.height }
  }

  /** Visible viewport — visualViewport on mobile avoids iOS URL-bar letterboxing. */
  const viewSize = () => {
    const vv = window.visualViewport
    if (isMobile && vv) {
      return {
        vw: Math.round(vv.width) || window.innerWidth,
        vh: Math.round(vv.height) || window.innerHeight,
        top: Math.round(vv.offsetTop || 0),
        left: Math.round(vv.offsetLeft || 0),
      }
    }
    return {
      vw: window.innerWidth,
      vh: window.innerHeight,
      top: 0,
      left: 0,
    }
  }

  /** Full-viewport overlay; bezel + clip track the (expanding) device rect. */
  const applyWindowOverlay = (device, rotateRad = 0, holeCollapse = 0) => {
    if (!device) return
    stickyEl.classList.add('is-windowed')
    stickyEl.classList.remove('is-pinned')
    if (flowSpacer) flowSpacer.style.height = '0px'

    const { vw, vh, top, left } = viewSize()

    // Sticky always covers the viewport (Lusion #canvas) so page content
    // scrolling under the goal never flashes a white half-page void.
    stickyEl.style.position = 'fixed'
    stickyEl.style.left = `${left}px`
    stickyEl.style.top = `${top}px`
    stickyEl.style.width = `${vw}px`
    stickyEl.style.height = `${vh}px`
    stickyEl.style.right = 'auto'
    stickyEl.style.bottom = 'auto'
    stickyEl.style.borderRadius = '0'
    stickyEl.style.overflow = 'hidden'
    stickyEl.style.zIndex = '3'
    stickyEl.style.transform = 'none'
    stickyEl.style.background = 'transparent'
    stickyEl.style.boxShadow = 'none'

    const E = clamp(holeCollapse, 0, 1)
    // device.* is viewport-absolute; sticky is fixed at (left,top) — convert to local
    const holeLeft =
      device.left - left + device.width * HOLE.left * (1 - E)
    const holeTop =
      device.top - top + device.height * HOLE.top * (1 - E)
    const holeW = device.width * HOLE.width + (vw - device.width * HOLE.width) * E
    const holeH = device.height * HOLE.height + (vh - device.height * HOLE.height) * E

    if (screenClip) {
      screenClip.style.inset = 'unset'
      screenClip.style.left = `${holeLeft}px`
      screenClip.style.top = `${holeTop}px`
      screenClip.style.right = 'auto'
      screenClip.style.bottom = 'auto'
      screenClip.style.width = `${Math.max(1, holeW)}px`
      screenClip.style.height = `${Math.max(1, holeH)}px`
      screenClip.style.borderRadius =
        E > 0.85 ? '0px' : `${Math.min(device.width, device.height) * 0.03 * (1 - E)}px`
      screenClip.style.background = '#000'
      screenClip.style.transform = rotateRad ? `rotate(${rotateRad}rad)` : 'none'
      screenClip.style.transformOrigin = 'center center'
    }

    if (bezel) {
      bezel.style.position = 'absolute'
      bezel.style.inset = 'unset'
      bezel.style.left = `${device.left - left}px`
      bezel.style.top = `${device.top - top}px`
      bezel.style.width = `${device.width}px`
      bezel.style.height = `${device.height}px`
      bezel.style.objectFit = 'fill'
      bezel.style.zIndex = '6'
      bezel.style.pointerEvents = 'none'
      bezel.style.transform = rotateRad ? `rotate(${rotateRad}rad)` : 'none'
      bezel.style.transformOrigin = 'center center'
      bezel.style.boxShadow = '0 18px 60px rgba(0,0,0,0.28)'
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
      screenClip.style.right = '0'
      screenClip.style.bottom = '0'
      screenClip.style.width = '100%'
      screenClip.style.height = '100%'
      screenClip.style.inset = '0'
      screenClip.style.borderRadius = '0'
      screenClip.style.background = ''
      screenClip.style.transform = ''
    }
    if (bezel) {
      bezel.style.opacity = '0'
      bezel.style.visibility = 'hidden'
      bezel.style.transform = ''
      bezel.style.boxShadow = ''
    }
    scrollLines?.setGoalFrame?.({ active: false })
  }

  const update = () => {
    const blackFrameShow = ranges.range('blackFrameShow').ratio
    const blackFrameIn = ranges.range('blackFrameIn').ratio
    const blackTunnel = ranges.range('blackTunnel').ratio
    const whiteTunnel = ranges.between('whiteTunnel', 'whiteFrameOut').ratio
    const sectionRect = sectionEl.getBoundingClientRect()
    const { vw, vh, top: vvTop, left: vvLeft } = viewSize()
    const inView = sectionRect.bottom > 0 && sectionRect.top < vh

    frameRect = deviceRectFromAnchor()

    const inWindowPhase =
      inView && blackTunnel < 0.02 && whiteTunnel < 0.01 && blackFrameIn < 0.999

    if (inWindowPhase && frameRect) {
      let E = clamp(blackFrameIn, 0, 1)
      // Soft visual catch-up only — full catch-up snapped into astronaut too early
      if (frameRect.top < vh * 0.4) {
        const catchUp = clamp((vh * 0.4 - frameRect.top) / (vh * 0.65), 0, 1)
        E = Math.max(E, fit(catchUp, 0, 1, 0, 0.35))
      }

      // Expand toward the visible viewport origin (not layout 0,0 on iOS)
      const full = { left: vvLeft, top: vvTop, width: vw, height: vh }
      const device = {
        left: frameRect.left + (full.left - frameRect.left) * E,
        top: frameRect.top + (full.top - frameRect.top) * E,
        width: frameRect.width + (full.width - frameRect.width) * E,
        height: frameRect.height + (full.height - frameRect.height) * E,
      }
      const rotate = fit(E, 0, 1, 0, 0.35) * (1 - E)
      applyWindowOverlay(device, rotate, E)

      const show = Math.max(
        fit(blackFrameShow, 0, 0.2, 0.35, 1),
        sectionRect.top < vh * 0.85 ? 1 : 0
      )
      stickyEl.style.opacity = String(show)
      stickyEl.style.pointerEvents = 'none'
      document.documentElement.classList.add('is-goal-window')
      document.documentElement.style.background = ''
      document.body.style.background = ''

      if (bezel) {
        bezel.style.opacity = String(fit(E, 0, 0.75, 1, 0) * show)
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

      if (scrollLines?.setGoalFrame) {
        scrollLines.setGoalFrame({
          active: E > 0.01,
          scale: fit(E, 0, 1, 1, 2.4),
          rotation: rotate,
        })
      }

      if (lastMode !== 'window') {
        lastMode = 'window'
        // Do NOT dispatch resize — rebuilds 4200vh ranges mid-scroll and jumps.
      }
      return { mode: 'window', blackFrameIn: E, blackFrameShow, frameRect }
    }

    if (lastMode === 'window') {
      clearWindowed()
      document.documentElement.classList.remove('is-goal-window')
      stickyEl.style.opacity = ''
      stickyEl.style.pointerEvents = ''
      if (imgInOuter) imgInOuter.style.visibility = 'hidden'
      if (contextInner) contextInner.style.transform = ''
      if (titleEl) titleEl.style.visibility = ''
      // Hand off fullscreen — mark ownership so goalDom won't unpin via early slotTop
      stickyEl.dataset.goalOwned = 'full'
      stickyEl.classList.add('is-pinned')
      stickyEl.style.position = 'fixed'
      stickyEl.style.left = `${vvLeft}px`
      stickyEl.style.top = `${vvTop}px`
      stickyEl.style.width = `${vw}px`
      stickyEl.style.height = `${vh}px`
      stickyEl.style.right = 'auto'
      stickyEl.style.bottom = 'auto'
      stickyEl.style.zIndex = '4'
      stickyEl.style.background = '#000000'
      if (flowSpacer) flowSpacer.style.height = '0px'
      let spacerNode = stickyEl.previousElementSibling
      while (spacerNode) {
        if (
          spacerNode !== flowSpacer &&
          spacerNode.getAttribute('aria-hidden') === 'true'
        ) {
          spacerNode.style.height = '0px'
          break
        }
        spacerNode = spacerNode.previousElementSibling
      }
      if (stickyEl.parentElement !== document.body) {
        document.body.appendChild(stickyEl)
      }
      lastMode = 'full'
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
  // Native scroll too — on mobile Lenis syncTouch is off, so window scroll
  // must drive the tablet→fullscreen handoff (avoids letterbox after astronaut).
  window.addEventListener('resize', onResize)
  window.addEventListener('scroll', update, { passive: true })
  update()

  return {
    update,
    destroy() {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', update)
      bezel?.remove()
      clearWindowed()
    },
    getFrameRect: () => frameRect,
  }
}
