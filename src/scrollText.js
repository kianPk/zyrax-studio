/**
 * Lusion-style continuous scroll-time text reveals.
 * Uses _time / _animating + math.fit(..., ease.lusion) — not one-shot GSAP.
 */
import {
  clamp,
  saturate,
  fit,
  easeLusion,
  easeExpoOut,
  getDomRange,
} from './scrollMath.js'

function splitWords(el, className = 'scrub-word') {
  if (!el) return []
  const text = el.textContent.trim()
  const words = text.split(/\s+/)
  el.textContent = ''
  return words.map((w) => {
    const span = document.createElement('span')
    span.className = className
    span.textContent = w
    span.style.display = 'inline-block'
    span.style.willChange = 'transform, opacity'
    el.appendChild(span)
    el.appendChild(document.createTextNode(' '))
    return span
  })
}

function splitChars(el) {
  if (!el) return []
  const text = el.textContent
  el.textContent = ''
  // wrap words then chars (Lusion SplitType words, chars)
  const words = text.split(/(\s+)/)
  const chars = []
  words.forEach((part) => {
    if (/^\s+$/.test(part)) {
      el.appendChild(document.createTextNode(part))
      return
    }
    const word = document.createElement('span')
    word.className = 'word'
    word.style.display = 'inline-block'
    ;[...part].forEach((ch) => {
      const span = document.createElement('span')
      span.className = 'char'
      span.textContent = ch
      span.style.display = 'inline-block'
      span.style.willChange = 'transform'
      span.style.transform = 'translate3d(0, 1em, 0) rotate(10deg)'
      word.appendChild(span)
      chars.push(span)
    })
    el.appendChild(word)
  })
  return chars
}

function wrapOverflowLine(el) {
  if (!el) return el
  el.style.overflow = 'hidden'
  return el
}

function makeTimed(el, max = 2) {
  if (!el) return null
  el._time = 0
  el._animating = false
  el._maxTime = max
  return el
}

/**
 * Bind Bold Ideas / Featured Work (and related) continuous scroll reveals.
 * Call update(dt) every frame from the Lenis/gsap ticker.
 */
export function bindLusionScrollText() {
  const useMobile = () => window.innerWidth < 812

  // —— REEL TITLE: "Bold Ideas," + "Brought to Life" ——
  const reelSection = document.getElementById('home-reel')
  const reelTitle = makeTimed(document.getElementById('home-reel-title'), 2)
  const reelTitleInner = document.getElementById('home-reel-title-inner')
  const reelTitleLine1 = document.getElementById('home-reel-title-line-1')
  const reelTitleLine2 = document.getElementById('home-reel-title-line-2')
  const reelContent = document.getElementById('home-reel-content')
  const reelDesc = makeTimed(document.getElementById('home-reel-desc'), 2)
  const reelCta = makeTimed(document.getElementById('home-reel-cta'), 1)
  const reelThumb = document.getElementById('home-reel-thumb')
  const reelVideo = document.getElementById('home-reel-video-container')
  const reelVideoCrosses = Array.from(
    document.querySelectorAll('.home-reel-video-container-cross')
  )

  // Split title words across both lines (global word index like Lusion SplitType on #home-reel-title)
  let titleWords = []
  let paddingLeft = 0
  let descWords = []

  const splitReel = () => {
    if (!reelTitleLine1 || !reelTitleLine2) return
    wrapOverflowLine(reelTitleLine1)
    wrapOverflowLine(reelTitleLine2)
    titleWords = [...splitWords(reelTitleLine1), ...splitWords(reelTitleLine2)]
    titleWords.forEach((w, i) => {
      // initial: first two from below, rest from above
      w.style.transform = i < 2 ? 'translate3d(0, 100%, 0)' : 'translate3d(0, -100%, 0)'
      w.style.opacity = '1'
    })
    paddingLeft = parseFloat(getComputedStyle(reelTitleLine1).paddingLeft) || 0

    if (reelDesc) {
      descWords = splitWords(reelDesc, 'desc-word')
      descWords.forEach((w) => {
        w.style.transform = 'translate3d(0, 100%, 0)'
        w.style.opacity = '0'
      })
    }
    if (reelCta) {
      reelCta.style.transform = 'translate3d(0, 150%, 0) rotate(10deg)'
      reelCta.style.opacity = '0'
      reelCta._ratio = 0
      reelCta._animating = false
    }
  }
  splitReel()

  // —— FEATURED ——
  const featuredSection = document.getElementById('home-featured')
  const featuredTitle = makeTimed(document.getElementById('home-featured-title'), 2)
  const featuredDisclaimer = makeTimed(document.getElementById('home-featured-disclaimer'), 2)
  const featuredCta = makeTimed(document.getElementById('home-featured-cta'), 1)
  let featuredChars = []
  let disclaimerLines = []
  let projectItems = []
  let featuredNeedsReset = true

  const splitFeatured = () => {
    if (!featuredTitle) return
    wrapOverflowLine(featuredTitle.parentElement || featuredTitle)
    featuredChars = splitChars(featuredTitle)
    featuredChars.forEach((c) => {
      c.style.transform = 'translate3d(0, 1em, 0) rotate(10deg)'
    })

    if (featuredDisclaimer) {
      const text = featuredDisclaimer.textContent.trim()
      featuredDisclaimer.textContent = ''
      const line = document.createElement('div')
      line.className = 'line'
      line.textContent = text
      line.style.transform = 'translate3d(0, 100%, 0)'
      const wrap = document.createElement('div')
      wrap.style.position = 'relative'
      wrap.style.overflow = 'hidden'
      wrap.appendChild(line)
      featuredDisclaimer.appendChild(wrap)
      disclaimerLines = [line]
    }
    if (featuredCta) {
      featuredCta.style.transform = 'translate3d(0, 150%, 0) rotate(10deg)'
      featuredCta.style.opacity = '0'
    }

    projectItems = Array.from(document.querySelectorAll('.project-item')).map((el, i) => {
      el._time = 0
      el._animating = false
      el.style.transform = 'translate3d(0, 90px, 0)'
      el.style.opacity = '0'
      el.style.willChange = 'transform, opacity'
      el.dataset.projectIndex = String(i)
      return el
    })
  }
  splitFeatured()

  // —— GOAL context title ——
  const goalTitle = makeTimed(document.getElementById('home-goal-title'), 2)
  let goalTitleWords = []
  if (goalTitle) {
    goalTitleWords = splitWords(goalTitle, 'goal-ctx-word')
    goalTitleWords.forEach((w) => {
      w.style.transform = 'translate3d(0, 100%, 0)'
      w.style.opacity = '0'
    })
  }

  let videoCrossTime = 0
  let videoCrossAnimating = false
  let videoShowRatio = 0

  const resetFeatured = () => {
    featuredNeedsReset = false
    if (featuredTitle) {
      featuredTitle._time = 0
      featuredTitle._animating = false
    }
    if (featuredDisclaimer) {
      featuredDisclaimer._time = 0
      featuredDisclaimer._animating = false
    }
    if (featuredCta) {
      featuredCta._time = 0
      featuredCta._animating = false
    }
    if (!useMobile()) {
      disclaimerLines.forEach((l) => {
        l.style.transform = 'translate3d(0, 100%, 0)'
      })
      featuredChars.forEach((c) => {
        c.style.transform = 'translate3d(0, 1em, 0) rotate(10deg)'
      })
    }
  }

  const updateReel = (dt) => {
    if (!reelTitle) return
    const titleRange = getDomRange(reelTitle)
    const contentRange = getDomRange(reelContent || reelDesc)
    const vh = window.innerHeight
    const parallaxUnit = vh * 0.1

    // advance / rewind time
    reelTitle._time = clamp(
      reelTitle._time + (reelTitle._animating ? dt : -dt),
      0,
      2
    )
    if (reelDesc) {
      reelDesc._time = clamp(reelDesc._time + (reelDesc._animating ? dt : -dt), 0, 2)
    }
    if (reelCta) {
      reelCta._ratio = saturate(reelCta._ratio + (reelCta._animating ? dt : -dt))
    }

    if (titleRange.screenRatio > -1) {
      reelTitle._animating = true
      if (!useMobile()) {
        titleWords.forEach((word, p) => {
          let x
          let y
          if (p < 2) {
            x = fit(
              reelTitle._time - Math.abs(2 - p) / 10,
              0.5,
              1.2,
              -paddingLeft,
              0,
              easeLusion
            )
            y = fit(reelTitle._time - p / 10, 0, 1, 100, 0, easeLusion)
          } else {
            x = 0
            y = fit(reelTitle._time - p / 10, 0, 1, -100, 0, easeLusion)
          }
          word.style.transform = `translate3d(${x}px, ${y}%, 0)`
        })
      } else {
        titleWords.forEach((word) => {
          word.style.transform = 'translate3d(0, 0, 0)'
        })
      }
      if (reelTitleInner) {
        const f = titleRange.showScreenOffset * -parallaxUnit * 0.5
        reelTitleInner.style.transform = `translate3d(0,${f}px,0)`
      }
    }

    if (contentRange.screenRatio > -1) {
      if (reelDesc) reelDesc._animating = true
      if (reelCta) reelCta._animating = true

      const descParallax = contentRange.showScreenOffset * -parallaxUnit * 1.5
      if (reelDesc) {
        reelDesc.style.transform = `translate3d(0,${descParallax}px,0)`
        if (!useMobile()) {
          descWords.forEach((word, v) => {
            const op = fit(reelDesc._time - v / 100, 0, 1, 0.1, 1, easeExpoOut)
            const y = fit(reelDesc._time - v / 100, 0, 1, 100, 0, easeExpoOut)
            word.style.opacity = String(op)
            word.style.transform = `translate3d(0, ${y}%, 0)`
          })
        } else {
          descWords.forEach((word) => {
            word.style.opacity = '1'
            word.style.transform = 'translate3d(0, 0, 0)'
          })
        }
      }

      if (reelCta) {
        const btnParallax = contentRange.showScreenOffset * -parallaxUnit * 1.25
        if (window.innerWidth >= 812) {
          reelCta.style.transform = `translateY(${btnParallax}px) translate3d(0, ${fit(
            reelCta._ratio,
            0,
            1,
            150,
            0,
            easeLusion
          )}%, 0) rotate(${fit(reelCta._ratio, 0, 1, 10, 0, easeLusion)}deg)`
          reelCta.style.opacity = String(easeLusion(reelCta._ratio))
        } else {
          reelCta.style.transform = `translateY(${btnParallax}px)`
          reelCta.style.opacity = '1'
        }
      }
    }

    // thumb / video — scroll-linked show
    if (reelThumb) {
      const tr = getDomRange(reelThumb)
      const show = saturate(fit(tr.showScreenOffset, 0.05, 0.85, 0, 1, easeLusion))
      const y = fit(show, 0, 1, 80, 0, easeLusion)
      const s = fit(show, 0, 1, 0.96, 1, easeLusion)
      reelThumb.style.opacity = String(show)
      reelThumb.style.transform = `translate3d(0, ${y}px, 0) scale(${s})`
    }

    if (reelVideo) {
      const vr = getDomRange(reelVideo)
      videoShowRatio = saturate(fit(vr.showScreenOffset, 0.0, 0.7, 0, 1, easeLusion))
      const y = fit(videoShowRatio, 0, 1, 60, 0, easeLusion)
      const s = fit(videoShowRatio, 0, 1, 0.94, 1, easeLusion)
      reelVideo.style.opacity = String(0.4 + videoShowRatio * 0.6)
      reelVideo.style.transform = `translate3d(0, ${y}px, 0) scale(${s})`
      videoCrossAnimating = videoShowRatio > 0.9
      videoCrossTime = clamp(
        videoCrossTime + (videoCrossAnimating ? dt : -dt * 2),
        0,
        1.4
      )
      reelVideoCrosses.forEach((cross, f) => {
        const g = fit(videoCrossTime - f / 10, 0, 0.6, 0, 1, easeLusion)
        const rot = fit(videoCrossTime - f / 10, 0, 0.6, 0, 180, easeLusion)
        cross.style.transform = `scale(${g}) rotate(${rot}deg)`
        cross.style.display = 'inline-block'
      })
    }
  }

  const updateFeatured = (dt) => {
    if (!featuredSection || !featuredTitle) return
    const sectionRange = getDomRange(featuredSection)

    if (sectionRange.isActive) {
      if (featuredNeedsReset) resetFeatured()

      const titleRange = getDomRange(featuredTitle)
      const discRange = getDomRange(featuredDisclaimer)
      const ctaRange = getDomRange(featuredCta)

      featuredTitle._time = clamp(
        featuredTitle._time + (featuredTitle._animating ? dt : -dt),
        0,
        2
      )
      if (featuredDisclaimer) {
        featuredDisclaimer._time = clamp(
          featuredDisclaimer._time + (featuredDisclaimer._animating ? dt : -dt),
          0,
          2
        )
      }
      if (featuredCta) {
        featuredCta._time = clamp(
          featuredCta._time + (featuredCta._animating ? dt : -dt),
          0,
          1
        )
      }

      if (titleRange.screenRatio > -1) {
        featuredTitle._animating = true
        if (!useMobile()) {
          featuredChars.forEach((ch, c) => {
            const y = fit(featuredTitle._time * 1.5 - c / 20, 0, 1, 1, 0, easeLusion)
            const rot = fit(featuredTitle._time * 1.5 - c / 20, 0, 1, 10, 0, easeLusion)
            ch.style.transform = `translate3d(0, ${y}em, 0) rotate(${rot}deg)`
          })
        } else {
          featuredChars.forEach((ch) => {
            ch.style.transform = 'translate3d(0, 0, 0) rotate(0deg)'
          })
        }
      }

      if (discRange.screenRatio > -1 && featuredDisclaimer) {
        featuredDisclaimer._animating = true
        if (!useMobile()) {
          disclaimerLines.forEach((line, c) => {
            const y = fit(featuredDisclaimer._time * 1 - c / 20, 0, 1, 100, 0, easeLusion)
            line.style.transform = `translate3d(0, ${y}%, 0)`
          })
        } else {
          disclaimerLines.forEach((line) => {
            line.style.transform = 'translate3d(0, 0, 0)'
          })
        }
      }

      if (ctaRange.screenRatio > -1 && featuredCta) {
        if (useMobile()) {
          featuredCta.style.transform = 'translate3d(0, 0, 0) rotate(0deg)'
          featuredCta.style.opacity = '1'
        } else {
          featuredCta._animating = true
          featuredCta.style.transform = `translate3d(0, ${fit(
            featuredCta._time,
            0,
            1,
            150,
            0,
            easeLusion
          )}%, 0) rotate(${fit(featuredCta._time, 0, 1, 10, 0, easeLusion)}deg)`
          featuredCta.style.opacity = String(easeLusion(featuredCta._time))
        }
      }
    } else {
      featuredNeedsReset = true
    }

    // project items — scroll-time rise (DOM stand-in for Lusion UFX show)
    projectItems.forEach((el, i) => {
      const r = getDomRange(el)
      if (r.screenRatio > -1) el._animating = true
      el._time = clamp(el._time + (el._animating ? dt : -dt), 0, 1.2)
      const stagger = (i % 2) * 0.08
      const t = fit(el._time - stagger, 0, 1, 0, 1, easeLusion)
      el.style.opacity = String(t)
      el.style.transform = `translate3d(0, ${(1 - t) * 90}px, 0)`
    })
  }

  const updateGoalContext = (dt) => {
    if (!goalTitle) return
    const r = getDomRange(goalTitle)
    if (r.screenRatio > -1) goalTitle._animating = true
    goalTitle._time = clamp(goalTitle._time + (goalTitle._animating ? dt : -dt), 0, 2)
    goalTitleWords.forEach((w, i) => {
      const op = fit(goalTitle._time - i / 20, 0, 1, 0, 1, easeLusion)
      const y = fit(goalTitle._time - i / 20, 0, 1, 100, 0, easeLusion)
      w.style.opacity = String(op)
      w.style.transform = `translate3d(0, ${y}%, 0)`
    })
  }

  const onResize = () => {
    if (reelTitleLine1) {
      paddingLeft = parseFloat(getComputedStyle(reelTitleLine1).paddingLeft) || 0
    }
  }
  window.addEventListener('resize', onResize)

  return {
    update(dt) {
      updateReel(dt)
      updateFeatured(dt)
      updateGoalContext(dt)
    },
    destroy() {
      window.removeEventListener('resize', onResize)
    },
  }
}
