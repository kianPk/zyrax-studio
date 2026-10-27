import Lenis from 'lenis'
import gsap from 'gsap'
import { projects } from './projects.js'
import { createBalloonsHero } from './balloons.js'
import { createGoalTunnel } from './tunnel.js'
import { bindGoalDomScroll } from './goalDom.js'
import { bindLusionScrollText } from './scrollText.js'

const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)

// Match Lusion --vh
const setVh = () => {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
}
setVh()
window.addEventListener('resize', setVh)

const lenis = new Lenis({
  duration: isMobile ? 0.95 : 1.2,
  smoothWheel: true,
  syncTouch: false,
})
window.lenis = lenis

// Featured projects — Lusion-style list
const list = document.getElementById('project-list')
if (list) {
  list.innerHTML = projects
    .map(
      (p) => `
    <a class="project-item" href="${p.url}" target="_blank" rel="noreferrer">
      <div class="project-item-main">
        <div class="project-item-image" style="background:${p.hue}"><span>${p.title}</span></div>
      </div>
      <div class="project-item-footer">
        <div class="project-item-line-1">${p.tags}</div>
        <div class="project-item-line-2">
          <div class="project-item-line-2-inner">${p.title}</div>
        </div>
      </div>
    </a>`
    )
    .join('')
}

const heroCanvas = document.getElementById('hero-canvas')
const visual = document.getElementById('home-hero-visual-container')
const homeHero = document.getElementById('home-hero')
const heroTitle = document.getElementById('home-hero-title')
const heroVisual = document.getElementById('home-hero-visual-container')
const heroScrollHint = document.getElementById('home-hero-scroll-container')

// Goal DOM scroll first (title zoom works without WebGL)
const goalSection = document.getElementById('home-goal')
const goalCanvas = document.getElementById('goal-tunnel-canvas')
const goalTitle = document.getElementById('home-goal-tunnel-title')
const goalSticky = document.getElementById('home-goal-tunnel-sticky')
const goalDom = bindGoalDomScroll(goalSection, goalTitle, goalSticky)
let goalTunnel = null

// Lusion continuous scroll-time text (Bold Ideas / Featured / etc.)
const scrollText = bindLusionScrollText()

let lastTick = performance.now()
gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
  const now = performance.now()
  const dt = Math.min(0.05, (now - lastTick) / 1000)
  lastTick = now
  scrollText.update(dt)
})
gsap.ticker.lagSmoothing(0)

lenis.on('scroll', () => {
  goalDom.updateScroll()
  goalTunnel?.updateScroll()
  if (!homeHero) return
  const rect = homeHero.getBoundingClientRect()
  const vh = window.innerHeight
  const ratio = Math.max(0, Math.min(1, -rect.top / Math.max(rect.height, 1)))
  const leave = Math.max(0, Math.min(1, (vh - rect.bottom) / vh))
  if (heroTitle) {
    heroTitle.style.transform = `translate3d(0, ${ratio * -12}vh, 0)`
    heroTitle.style.opacity = String(Math.max(0, 1 - ratio * 1.2))
  }
  if (heroVisual) {
    heroVisual.style.transform = `translate3d(0, ${ratio * 18}vh, 0) scale(${1 - ratio * 0.08})`
    heroVisual.style.opacity = String(Math.max(0, 1 - Math.max(ratio, leave) * 0.85))
  }
  if (heroScrollHint) {
    heroScrollHint.style.opacity = String(Math.max(0, 1 - ratio * 2))
  }
})

// Boot WebGL scenes: goal first (heavier), then balloons
createGoalTunnel(goalCanvas, goalSection, goalTitle)
  .then((api) => {
    goalTunnel = api
  })
  .catch((err) => {
    console.error('Goal tunnel failed', err)
  })
  .finally(() => {
    createBalloonsHero(heroCanvas, visual)
      .then(() => homeHero?.classList.add('is-in'))
      .catch((err) => {
        console.error('Balloons hero failed', err)
        homeHero?.classList.add('is-in')
      })
  })

function splitWords(el, className = 'word') {
  if (!el) return
  const text = el.textContent.trim()
  const words = text.split(/\s+/)
  el.textContent = ''
  words.forEach((word, i) => {
    const span = document.createElement('span')
    span.className = className
    span.textContent = word
    span.style.transitionDelay = `${i * 35}ms`
    el.appendChild(span)
    el.appendChild(document.createTextNode(' '))
  })
}

splitWords(document.getElementById('home-hero-title'))
splitWords(document.getElementById('home-hero-scroll'))

requestAnimationFrame(() => {
  document.getElementById('home-hero-title')?.classList.add('is-in')
})

// Scroll crosses reveal timing
const crosses = document.querySelectorAll('.home-hero-scroll-container-cross')
crosses.forEach((c, i) => {
  c.style.transitionDelay = `${0.15 + i * 0.08}s`
})

const menu = document.querySelector('[data-menu]')
document.querySelector('[data-menu-open]')?.addEventListener('click', () => {
  menu.hidden = false
  document.body.style.overflow = 'hidden'
})
document.querySelectorAll('[data-menu-close]').forEach((btn) => {
  btn.addEventListener('click', () => {
    menu.hidden = true
    document.body.style.overflow = ''
  })
})

document.querySelector('[data-reel]')?.addEventListener('click', (e) => {
  const btn = e.currentTarget
  btn.classList.toggle('is-playing')
  const words = btn.querySelectorAll('.home-reel-video-title-word')
  if (words[0]) words[0].textContent = btn.classList.contains('is-playing') ? 'PAUSE' : 'PLAY'
  window.open('https://kianpk.github.io/zyrax-drive/', '_blank', 'noreferrer')
})

document.querySelector('[data-sound]')?.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('is-on')
})

document.querySelector('#end-bottom')?.addEventListener('click', (e) => {
  e.preventDefault()
  lenis.scrollTo('#footer-section')
})
