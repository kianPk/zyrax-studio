/**
 * Lusion ProjectItemList / ProjectItem — DOM text/footer anims.
 * Image depth-parallax lives in featuredWebgl.js (UfxMesh port).
 */
import { clamp, saturate, fit, easeLusion, easeExpoInOut, getDomRange } from './scrollMath.js'

const LETTER_PER_SECOND = 28
const MAX_RAND_LETTER_COUNT = 4
const TEXT_STAGGER = 8

function useMobile() {
  return window.innerWidth < 812
}

export function bindFeaturedProjects(root = document) {
  const items = Array.from(root.querySelectorAll('.project-item')).map((dom, index) => {
    const main = dom.querySelector('.project-item-main')
    const image = dom.querySelector('.project-item-image')
    const line1 = dom.querySelector('.project-item-line-1')
    const line2Inner = dom.querySelector('.project-item-line-2-inner')
    const line2Icon = dom.querySelector('.project-item-line-2-icon')
    const tags = line1?.textContent?.trim() || ''
    const title = line2Inner?.textContent?.trim() || ''

    // Lusion: split title into vertical letter stacks (4 copies) for roll-up
    const letterCols = []
    if (line2Inner) {
      line2Inner.textContent = ''
      ;[...title].forEach((ch) => {
        const col = document.createElement('div')
        col.className = 'project-item-line-2-inner-list'
        col.style.transform = 'translateY(-400%)'
        if (ch === ' ') {
          col.style.width = '0.3em'
        } else {
          for (let g = 0; g < 4; g++) {
            const span = document.createElement('span')
            span.textContent = ch
            col.appendChild(span)
          }
        }
        line2Inner.appendChild(col)
        letterCols.push(col)
      })
    }

    if (line1) line1.textContent = ''

    let isHover = false
    let isHoverDom = false
    let hoverRatio = 0
    let footerHoverRatio = 0
    let showTime = 0
    let line1Time = 0
    let line2Time = 0
    let visible = false
    let shiftX = 0
    let shiftY = 0
    let shiftTX = 0
    let shiftTY = 0

    if (!useMobile()) {
      dom.addEventListener('mouseenter', () => {
        isHoverDom = true
      })
      dom.addEventListener('mouseleave', () => {
        isHoverDom = false
      })
      main?.addEventListener('mouseenter', () => {
        isHover = true
      })
      main?.addEventListener('mouseleave', () => {
        isHover = false
      })
    }

    return {
      dom,
      main,
      image,
      line1,
      line2Icon,
      tags,
      letterCols,
      index,
      update(dt) {
        const range = getDomRange(dom)
        const inView = range.ratio > -1 && range.ratio < 1
        if (inView) visible = true

        // Entrance
        if (visible) showTime += dt
        const show = saturate(fit(showTime, 0, 0.85, 0, 1, easeLusion))
        const enterY = fit(show, 0, 1, 90, 0, easeLusion)
        dom.style.opacity = String(show)
        dom.style.transform = `translate3d(0, ${enterY}px, 0)`

        // Tag scramble (Lusion LETTER_PER_SECOND)
        if (line1 && inView) {
          line1Time += dt
          const n = Math.min(
            tags.length,
            Math.floor(LETTER_PER_SECOND * line1Time) - MAX_RAND_LETTER_COUNT
          )
          const a = Math.min(tags.length, Math.floor(LETTER_PER_SECOND * line1Time))
          let out = ''
          for (let c = 0; c < Math.max(0, n); c++) out += tags[c]
          for (let c = 0; c < a - Math.max(0, n); c++) {
            out += String.fromCharCode(33 + Math.floor(Math.random() * 93))
          }
          line1.textContent = out
        }

        // Title letter stacks
        if (inView) line2Time += dt * 0.8
        footerHoverRatio = saturate(footerHoverRatio + (isHoverDom ? 1 : -1) * dt * 2.5)

        if (useMobile()) {
          letterCols.forEach((col, u) => {
            const f = saturate(footerHoverRatio - Math.abs(u - letterCols.length - 1) / 100)
            const p = fit(f, 0, 1, 0, 1.5, easeLusion)
            col.style.transform = `translate3d(1.5em, 0, 0) translateX(${p}em)`
          })
          if (line2Icon) line2Icon.style.transform = 'translateX(1em)'
        } else {
          letterCols.forEach((col, f) => {
            const p = fit(f, 0, Math.max(1, letterCols.length - 1), Math.PI / 2, (3 * Math.PI) / 2)
            const g = saturate(line2Time - Math.cos(p) / TEXT_STAGGER)
            const v = fit(g, 0, 1, 500, 0, easeExpoInOut)
            const _ = saturate(footerHoverRatio - Math.abs(f - letterCols.length - 1) / 100)
            const T = fit(_, 0, 1, 0, 1.5, easeLusion)
            col.style.transform = `translate3d(${T}em, -${v}%, 0)`
          })
          if (line2Icon) {
            const c = fit(footerHoverRatio, 0.3, 1, 0, 1, easeLusion)
            line2Icon.style.transform = `translateX(${c}em)`
          }
        }

        // Image hover is handled by featuredWebgl.js — keep DOM image still
        hoverRatio = clamp(hoverRatio + (isHover ? 1 : -1) * dt, 0, 1)
        if (image && !document.documentElement.classList.contains('has-featured-webgl')) {
          if (isHover) {
            shiftTX = (Math.random() - 0.5) * fit(hoverRatio, 0, 0.6, 1, 0) * 8
            shiftTY = (Math.random() - 0.5) * fit(hoverRatio, 0, 0.6, 1, 0) * 8
          } else {
            shiftTX *= 0.92
            shiftTY *= 0.92
          }
          shiftX += (shiftTX - shiftX) * 0.2
          shiftY += (shiftTY - shiftY) * 0.2
          const zoom = fit(hoverRatio, 0, 1, 1, 1.06, easeLusion)
          image.style.transform = `translate3d(${shiftX}px, ${shiftY}px, 0) scale(${zoom})`
        }
      },
    }
  })

  return {
    update(dt) {
      for (const item of items) item.update(dt)
    },
    destroy() {},
  }
}
