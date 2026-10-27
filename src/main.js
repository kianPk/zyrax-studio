import Lenis from 'lenis'
import gsap from 'gsap'
import { projects } from './projects.js'
import { createBalloonsHero } from './balloons.js'
import { createGoalTunnel } from './tunnel.js'
import { bindGoalDomScroll } from './goalDom.js'
import { bindLusionScrollText } from './scrollText.js'
import { bindFeaturedProjects } from './featuredProjects.js'
import { bindReelScroll } from './reelScroll.js'
import { createScrollLines } from './scrollLines.js'

const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)

// Match Lusion --vh
const setVh = () => {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
}
setVh()
window.addEventListener('resize', setVh)

// Softer wheel than default Lenis — closer to Lusion ScrollPane (wheelEaseCoeff 12)
const lenis = new Lenis({
  duration: isMobile ? 1.05 : 1.35,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  syncTouch: false,
  wheelMultiplier: isMobile ? 0.9 : 0.82,
  touchMultiplier: 1.1,
})
window.lenis = lenis
let goalAutoScrollSpeed = 0
let goalAutoScrollRatio = 0
let goalSkipAutoScroll = false
let lastWheelTime = 0
window.addEventListener(
  'wheel',
  () => {
    lastWheelTime = performance.now()
    goalSkipAutoScroll = true
  },
  { passive: true }
)
window.addEventListener(
  'pointerdown',
  () => {
    goalSkipAutoScroll = true
  },
  { passive: true }
)

// Featured projects — exact Lusion lineup + assets, Zyrax brand chrome
const assetBase = `${import.meta.env.BASE_URL}assets/projects/`
const list = document.getElementById('project-list')
if (list) {
  list.innerHTML = projects
    .map(
      (p) => `
    <a class="project-item project-type-website" href="${p.url}" target="_blank" rel="noreferrer"
       data-id="${p.id}" data-color-bg="${p.colorBg}" data-color-text="${p.colorText}">
      <div class="project-item-main">
        <div class="project-item-image" style="background:${p.colorBg}">
          <img src="${assetBase}${p.id}/home.webp" alt="${p.title}" loading="lazy" decoding="async" />
        </div>
      </div>
      <div class="project-item-footer">
        <div class="project-item-line-1">${p.tags}</div>
        <div class="project-item-line-2">
          <div class="project-item-line-2-icon" aria-hidden="true">↗</div>
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
const featuredProjects = bindFeaturedProjects()
const reelScroll = bindReelScroll()
let scrollLines = null

let lastTick = performance.now()
gsap.ticker.add((time) => {
  const now = performance.now()
  const dt = Math.min(0.05, (now - lastTick) / 1000)
  lastTick = now

  // Lusion GoalTunnels autoScroll — keeps tunnel cinematic when wheel stops
  if (goalTunnel?.getAutoScrollSpeed) {
    goalAutoScrollSpeed = goalTunnel.getAutoScrollSpeed()
  }
  const wheelIdle = now - lastWheelTime > 80
  if (wheelIdle && Math.abs(goalAutoScrollSpeed) > 0.01) {
    goalSkipAutoScroll = false
  }
  goalAutoScrollRatio += Math.abs(goalAutoScrollSpeed) > 0 && !goalSkipAutoScroll ? dt : -1
  goalAutoScrollRatio = Math.max(0, Math.min(1, goalAutoScrollRatio))
  if (!goalSkipAutoScroll && goalAutoScrollRatio > 0 && Math.abs(goalAutoScrollSpeed) > 0.01) {
    const vh = window.innerHeight
    // Soften vs raw Lusion 2.5 vh/s — still cinematic, less runaway
    const deltaPx = goalAutoScrollSpeed * vh * dt * goalAutoScrollRatio * 0.55
    const next = (lenis.animatedScroll ?? lenis.scroll ?? window.scrollY) + deltaPx
    lenis.scrollTo(next, { immediate: true, force: true })
  }

  lenis.raf(time * 1000)
  scrollText.update(dt)
  featuredProjects.update(dt)
  reelScroll.update(dt)
  scrollLines?.update()
  goalTunnel?.tickFrame?.(dt)
})
gsap.ticker.lagSmoothing(0)

lenis.on('scroll', () => {
  goalDom.updateScroll()
  goalTunnel?.updateScroll()
  scrollLines?.update()
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

// Boot WebGL: scroll lines (light) + goal tunnel, then balloons
createScrollLines()
  .then((api) => {
    scrollLines = api
  })
  .catch((err) => console.error('Scroll lines failed', err))

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
