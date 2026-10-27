import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from './projects.js'
import { createBalloonsHero } from './balloons.js'
import { createGoalTunnel } from './tunnel.js'

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
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => lenis.raf(time * 1000))
gsap.ticker.lagSmoothing(0)

// Featured projects — Lusion-style list
const list = document.getElementById('project-list')
if (list) {
  list.innerHTML = projects
    .map(
      (p) => `
    <a class="project-item" href="${p.url}" target="_blank" rel="noreferrer" data-reveal>
      <div class="project-item-main">
        <div class="project-item-image" style="background:${p.hue}"><span>${p.title}</span></div>
      </div>
      <div class="project-item-line-1">${p.tags}</div>
      <div class="project-item-line-2">${p.title}</div>
    </a>`
    )
    .join('')
}

// Hero balloons (exact Lusion cross.buf + packed matcap.exr)
const heroCanvas = document.getElementById('hero-canvas')
const visual = document.getElementById('home-hero-visual-container')
const homeHero = document.getElementById('home-hero')

createBalloonsHero(heroCanvas, visual)
  .then(() => {
    homeHero?.classList.add('is-in')
  })
  .catch((err) => {
    console.error('Balloons hero failed', err)
    homeHero?.classList.add('is-in')
  })

// Hero scroll parallax (Lusion: balloons.ratio fades as section leaves)
const heroTitle = document.getElementById('home-hero-title')
const heroVisual = document.getElementById('home-hero-visual-container')
const heroScrollHint = document.getElementById('home-hero-scroll-container')
lenis.on('scroll', () => {
  if (!homeHero) return
  const rect = homeHero.getBoundingClientRect()
  const vh = window.innerHeight
  const ratio = Math.max(0, Math.min(1, -rect.top / Math.max(rect.height, 1)))
  const leave = Math.max(0, Math.min(1, (vh - rect.bottom) / vh))
  if (heroTitle) {
    heroTitle.style.transform = `translate3d(0, ${ratio * -12}vh, 0)`
    heroTitle.style.opacity = String(1 - ratio * 1.2)
  }
  if (heroVisual) {
    heroVisual.style.transform = `translate3d(0, ${ratio * 18}vh, 0) scale(${1 - ratio * 0.08})`
    heroVisual.style.opacity = String(1 - Math.max(ratio, leave) * 0.85)
  }
  if (heroScrollHint) {
    heroScrollHint.style.opacity = String(1 - ratio * 2)
  }
})

// Goal tunnel + astronaut (Lusion home-goal)
const goalSection = document.getElementById('home-goal')
const goalCanvas = document.getElementById('goal-tunnel-canvas')
const goalTitle = document.getElementById('home-goal-tunnel-title')
let goalTunnel = null
createGoalTunnel(goalCanvas, goalSection, goalTitle)
  .then((api) => {
    goalTunnel = api
  })
  .catch((err) => {
    console.error('Goal tunnel failed', err)
  })
lenis.on('scroll', () => {
  goalTunnel?.updateScroll()
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

// Reel / featured — scrubbed scroll reveals (closer to Lusion feel)
const splitScrub = (el) => {
  if (!el) return []
  const words = el.textContent.trim().split(/\s+/)
  el.textContent = ''
  return words.map((w) => {
    const span = document.createElement('span')
    span.className = 'scrub-word'
    span.textContent = w
    span.style.display = 'inline-block'
    span.style.marginRight = '0.28em'
    span.style.opacity = '0'
    span.style.transform = 'translate3d(0, 1.1em, 0)'
    el.appendChild(span)
    return span
  })
}

const reelTitle1 = document.querySelector('#home-reel-title-line-1')
const reelTitle2 = document.querySelector('#home-reel-title-line-2')
;[reelTitle1, reelTitle2].forEach((line) => {
  const words = splitScrub(line)
  words.forEach((w, i) => {
    gsap.to(w, {
      y: 0,
      opacity: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '#home-reel',
        start: `top ${80 - i * 2}%`,
        end: `top ${55 - i * 2}%`,
        scrub: true,
      },
    })
  })
})

gsap.from('#home-reel-desc', {
  y: 64,
  opacity: 0,
  ease: 'none',
  scrollTrigger: { trigger: '#home-reel-desc', start: 'top 90%', end: 'top 55%', scrub: true },
})
gsap.from('#home-reel-cta', {
  y: 28,
  opacity: 0,
  ease: 'none',
  scrollTrigger: { trigger: '#home-reel-cta', start: 'top 92%', end: 'top 70%', scrub: true },
})
gsap.from('#home-reel-video-container', {
  scale: 0.92,
  opacity: 0.35,
  ease: 'none',
  scrollTrigger: {
    trigger: '#home-reel-video',
    start: 'top 90%',
    end: 'top 40%',
    scrub: true,
  },
})
gsap.from('#home-featured-title', {
  y: 72,
  opacity: 0,
  ease: 'none',
  scrollTrigger: { trigger: '#home-featured', start: 'top 85%', end: 'top 45%', scrub: true },
})
gsap.utils.toArray('.project-item').forEach((el, i) => {
  gsap.fromTo(
    el,
    { y: 80, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top 95%',
        end: 'top 60%',
        scrub: true,
      },
      delay: 0,
    }
  )
  // avoid fighting CSS .is-in
  el.classList.add('is-in')
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
