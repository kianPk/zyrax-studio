/**
 * Lusion HomeReelSection scroll extras — thumb→video reveal + PLAY REEL rollup.
 * (WebGL UfxMesh morph approximated with CSS clip/opacity/scale.)
 */
import { clamp, saturate, fit, easeLusion, getDomRange } from './scrollMath.js'

function useMobile() {
  return window.innerWidth < 812
}

function splitPlayWords(el) {
  if (!el || el._splitted) return
  const words = Array.from(el.querySelectorAll('.home-reel-video-title-word'))
  words.forEach((word) => {
    const text = word.textContent
    word.textContent = ''
    word._chars = []
    ;[...text].forEach((ch) => {
      const wrap = document.createElement('span')
      wrap.className = 'reel-char-wrap'
      wrap.style.display = 'inline-block'
      wrap.style.overflow = 'hidden'
      wrap.style.verticalAlign = 'top'
      const inner = document.createElement('span')
      inner.className = 'reel-char'
      inner.textContent = ch
      inner.style.display = 'inline-block'
      wrap.appendChild(inner)
      wrap._inner = inner
      word.appendChild(wrap)
      word._chars.push(wrap)
    })
    word._randCharIndex = 0
  })
  el._splitted = { words }
}

export function bindReelScroll() {
  const section = document.getElementById('home-reel')
  const thumb = document.getElementById('home-reel-thumb')
  const thumbVideo = document.getElementById('home-reel-thumb-video')
  const videoSection = document.getElementById('home-reel-video')
  const videoContainer = document.getElementById('home-reel-video-container')
  const videoEl = document.getElementById('home-reel-video-el')
  const videoTitle = document.getElementById('home-reel-video-title')
  const topCrosses = Array.from(
    document.querySelectorAll('#home-reel-video-container-top .home-reel-video-container-cross')
  )
  const bottomCrosses = Array.from(
    document.querySelectorAll('#home-reel-video-container-bottom .home-reel-video-container-cross')
  )

  if (videoTitle) splitPlayWords(videoTitle)

  const ROLLUP = 2
  let prevRollup = 0
  let currRollup = 0
  let videoTitleTime = 0
  let videoTitleShow = 0
  let videoTitleAnimating = false
  let videoTitleShowAnimating = false
  let topCrossTime = 0
  let bottomCrossTime = 0
  let topCrossAnimating = false
  let bottomCrossAnimating = false
  let morphRatio = 0

  const tryPlay = (el) => {
    if (!el) return
    const p = el.play?.()
    if (p && typeof p.catch === 'function') p.catch(() => {})
  }

  const update = (dt) => {
    if (!section) return
    const thumbRange = thumb ? getDomRange(thumb) : null
    const containerRange = videoContainer ? getDomRange(videoContainer) : null
    const mobile = useMobile()

    // Lusion: visible while thumb showing through reel container
    const visible = mobile
      ? !!containerRange?.isActive
      : !!thumbRange &&
        thumbRange.showScreenOffset > 0 &&
        (!!containerRange ? containerRange.hideScreenOffset < 1 : true)

    if (videoContainer) {
      videoContainer.classList.toggle('--is-visible', visible)
    }

    if (visible) {
      const thumbTop = thumbRange?.top ?? 0
      const thumbH = thumbRange?.height ?? 1
      const vh = window.innerHeight
      const p = thumbTop - (vh - thumbH) * 0.5
      const g = (containerRange?.top ?? 0) - (vh - (containerRange?.height ?? vh)) * 0.5
      morphRatio = saturate(fit(window.scrollY + thumbTop, p, g, 0, 1))
      // When using getBoundingClientRect tops, morph via show offsets:
      morphRatio = saturate(
        fit(thumbRange?.showScreenOffset ?? 0, 0.15, 1.1, 0, 1, easeLusion)
      )

      if (videoEl) {
        tryPlay(videoEl)
        videoEl.style.opacity = String(0.35 + morphRatio * 0.65)
      }
      if (thumbVideo) {
        tryPlay(thumbVideo)
        thumbVideo.style.opacity = String(1 - morphRatio * 0.85)
      }
      if (thumb) {
        const s = fit(morphRatio, 0, 1, 1, 1.08, easeLusion)
        thumb.style.transform = `scale(${s})`
        thumb.style.opacity = String(fit(morphRatio, 0.7, 1, 1, 0.15, easeLusion))
      }
      if (videoContainer) {
        const y = fit(morphRatio, 0, 1, 48, 0, easeLusion)
        const sc = fit(morphRatio, 0, 1, 0.94, 1, easeLusion)
        videoContainer.style.transform = `translate3d(0, ${y}px, 0) scale(${sc})`
        videoContainer.style.opacity = String(0.25 + morphRatio * 0.75)
      }

      if (morphRatio === 1 || morphRatio > 0.9) {
        videoTitleAnimating = true
        videoTitleShowAnimating = true
      } else {
        videoTitleShowAnimating = false
        videoTitleAnimating = false
      }

      topCrossAnimating = morphRatio > 0.85
      bottomCrossAnimating = morphRatio > 0.85
    } else {
      videoEl?.pause?.()
      morphRatio = 0
      videoTitleAnimating = false
      videoTitleShowAnimating = false
      topCrossAnimating = false
      bottomCrossAnimating = false
    }

    // PLAY / REEL rollup (Lusion HomeReelSection)
    videoTitleTime = clamp(videoTitleTime + (videoTitleAnimating ? dt : -dt), 0, 1e9)
    videoTitleShow = Math.min(
      morphRatio,
      saturate(videoTitleShow + (videoTitleShowAnimating ? dt : -dt))
    )
    currRollup = videoTitleTime % ROLLUP
    if (videoTitle?._splitted && !mobile) {
      const words = videoTitle._splitted.words
      for (let p = 0; p < words.length; p++) {
        const g = words[p]
        if (prevRollup - currRollup > ROLLUP - 1) {
          g._randCharIndex = Math.round(Math.random() * (g._chars.length - 1))
        }
        for (let v = 0; v < g._chars.length; v++) {
          const wrap = g._chars[v]
          let T = fit(videoTitleShow - p / 4 - v / 20, 0, 0.6, 200, 0, easeLusion)
          if (v === g._randCharIndex) {
            T += fit(currRollup - p / 10, 0.5, 1.3, 0, -100, easeLusion)
          }
          if (wrap._inner) wrap._inner.style.transform = `translate3d(0, ${T}%, 0)`
        }
      }
    }
    prevRollup = currRollup

    topCrossTime = clamp(topCrossTime + (topCrossAnimating ? dt : -dt * 2), 0, 1.4)
    bottomCrossTime = clamp(bottomCrossTime + (bottomCrossAnimating ? dt : -dt * 2), 0, 1.4)
    topCrosses.forEach((cross, f) => {
      const g = fit(topCrossTime - f / 10, 0, 0.6, 0, 1, easeLusion)
      const rot = fit(topCrossTime - f / 10, 0, 0.6, 0, 180, easeLusion)
      cross.style.transform = `scale(${g}) rotate(${rot}deg)`
    })
    bottomCrosses.forEach((cross, f) => {
      const g = fit(bottomCrossTime - f / 10, 0, 0.6, 0, 1, easeLusion)
      const rot = fit(bottomCrossTime - f / 10, 0, 0.6, 0, 180, easeLusion)
      cross.style.transform = `scale(${g}) rotate(${rot}deg)`
    })

    void videoSection
  }

  return { update, destroy() {} }
}
