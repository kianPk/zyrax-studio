import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from './projects.js'
import { createBalloonsHero } from './balloons.js'

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

// Soft fade-up for text sections
gsap.utils.toArray('#home-reel-title, #home-reel-desc, #home-featured-title, #home-goal-tunnel-title').forEach((el) => {
  gsap.from(el, {
    y: 48,
    opacity: 0,
    duration: 1.1,
    ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 85%' },
  })
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
