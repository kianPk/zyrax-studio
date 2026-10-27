import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from './projects.js'
import { createBalloonsHero } from './balloons.js'
import { createGoalTunnel } from './tunnel.js'
import { bindGoalDomScroll } from './goalDom.js'

gsap.registerPlugin(ScrollTrigger)

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
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => lenis.raf(time * 1000))
gsap.ticker.lagSmoothing(0)

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

document.querySelectorAll('[data-reveal]').forEach((el, i) => {
  ScrollTrigger.create({
    trigger: el,
    start: 'top 88%',
    onEnter: () => {
      el.style.transitionDelay = `${(i % 4) * 60}ms`
      el.classList.add('is-in')
    },
  })
})

// Lusion-like ease curve for text reveals
const easeLusion = 'power3.out'

const splitScrubWords = (el, className = 'scrub-word') => {
  if (!el) return []
  const words = el.textContent.trim().split(/\s+/)
  el.textContent = ''
  return words.map((w) => {
    const span = document.createElement('span')
    span.className = className
    span.textContent = w
    span.style.display = 'inline-block'
    span.style.transform = 'translate3d(0, 1.2em, 0)'
    span.style.opacity = '0'
    el.appendChild(span)
    el.appendChild(document.createTextNode(' '))
    return span
  })
}

const splitChars = (el) => {
  if (!el) return []
  const text = el.textContent
  el.textContent = ''
  return [...text].map((ch) => {
    const span = document.createElement('span')
    span.className = 'char'
    span.textContent = ch === ' ' ? '\u00a0' : ch
    span.style.transform = 'translate3d(0, 1em, 0) rotate(10deg)'
    el.appendChild(span)
    return span
  })
}

// Bold Ideas — word rise like Lusion reel title
;[document.querySelector('#home-reel-title-line-1'), document.querySelector('#home-reel-title-line-2')].forEach(
  (line, lineIdx) => {
    const words = splitScrubWords(line)
    words.forEach((w, i) => {
      gsap.to(w, {
        y: 0,
        opacity: 1,
        rotate: 0,
        duration: 1.15,
        ease: easeLusion,
        delay: lineIdx * 0.12 + i * 0.05,
        scrollTrigger: { trigger: '#home-reel-title', start: 'top 82%' },
      })
    })
  }
)

gsap.from('#home-reel-desc', {
  y: 56,
  opacity: 0,
  duration: 1.1,
  ease: easeLusion,
  scrollTrigger: { trigger: '#home-reel-desc', start: 'top 88%' },
})
gsap.from('#home-reel-cta', {
  y: 28,
  opacity: 0,
  duration: 0.9,
  ease: easeLusion,
  scrollTrigger: { trigger: '#home-reel-cta', start: 'top 90%' },
})
gsap.from('#home-reel-thumb', {
  y: 80,
  opacity: 0,
  scale: 0.96,
  duration: 1.2,
  ease: easeLusion,
  scrollTrigger: { trigger: '#home-reel-thumb', start: 'top 90%' },
})
gsap.from('#home-reel-video-container', {
  y: 60,
  scale: 0.94,
  opacity: 0.4,
  duration: 1.2,
  ease: easeLusion,
  scrollTrigger: { trigger: '#home-reel-video', start: 'top 85%' },
})

// Featured Work — character stagger (Lusion)
const featuredChars = splitChars(document.getElementById('home-featured-title'))
featuredChars.forEach((ch, i) => {
  gsap.to(ch, {
    y: 0,
    rotate: 0,
    duration: 1.05,
    ease: easeLusion,
    delay: i * 0.028,
    scrollTrigger: { trigger: '#home-featured-title', start: 'top 85%' },
  })
})

const disc = document.getElementById('home-featured-disclaimer')
if (disc) {
  const text = disc.textContent.trim()
  disc.innerHTML = `<span class="line">${text}</span>`
  gsap.from(disc.querySelector('.line'), {
    yPercent: 100,
    duration: 1,
    ease: easeLusion,
    scrollTrigger: { trigger: disc, start: 'top 88%' },
  })
}

gsap.utils.toArray('.project-item').forEach((el, i) => {
  gsap.from(el, {
    y: 90,
    opacity: 0,
    duration: 1.15,
    ease: easeLusion,
    delay: (i % 2) * 0.08,
    scrollTrigger: { trigger: el, start: 'top 92%' },
  })
})

gsap.from('#home-featured-cta', {
  y: 40,
  opacity: 0,
  duration: 1,
  ease: easeLusion,
  scrollTrigger: { trigger: '#home-featured-cta', start: 'top 92%' },
})

gsap.from('#home-goal-title', {
  y: 48,
  opacity: 0,
  duration: 1.1,
  ease: easeLusion,
  scrollTrigger: { trigger: '#home-goal-title', start: 'top 88%' },
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
