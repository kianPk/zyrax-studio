import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from './projects.js'
import { createHeroScene, createMiniScene } from './hero.js'

gsap.registerPlugin(ScrollTrigger)

const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)

// Smooth scroll (lighter on mobile)
const lenis = new Lenis({
  duration: isMobile ? 0.9 : 1.15,
  smoothWheel: true,
  syncTouch: false,
})
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => lenis.raf(time * 1000))
gsap.ticker.lagSmoothing(0)

// Projects
const grid = document.getElementById('work-grid')
grid.innerHTML = projects
  .map(
    (p) => `
  <a class="project-card" href="${p.url}" target="_blank" rel="noreferrer" data-reveal>
    <div class="project-thumb" style="background:${p.hue}"><span>${p.title}</span></div>
    <div class="project-meta">
      <p class="project-tags">${p.tags}</p>
      <h3 class="project-name">${p.title}</h3>
    </div>
  </a>`
  )
  .join('')

// Hero 3D
const heroCanvas = document.getElementById('hero-canvas')
const miniCanvas = document.getElementById('mini-canvas')
createHeroScene(heroCanvas)
createMiniScene(miniCanvas)

// Split hero title into words for staggered reveal
const heroTitle = document.querySelector('.hero-title')
if (heroTitle) {
  const words = heroTitle.textContent.trim().split(/\s+/)
  heroTitle.textContent = ''
  words.forEach((word, i) => {
    const span = document.createElement('span')
    span.textContent = word + (i < words.length - 1 ? ' ' : '')
    span.style.display = 'inline-block'
    span.style.transitionDelay = `${i * 40}ms`
    heroTitle.appendChild(span)
  })
  requestAnimationFrame(() => heroTitle.classList.add('is-in'))
}

// Reveal on scroll
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

// Menu
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

// Reel fake play
document.querySelector('[data-reel]')?.addEventListener('click', (e) => {
  const btn = e.currentTarget
  btn.classList.toggle('is-playing')
  const label = btn.querySelector('span')
  if (label) label.textContent = btn.classList.contains('is-playing') ? 'PAUSE' : 'PLAY'
  window.open('https://kianpk.github.io/zyrax-drive/', '_blank', 'noreferrer')
})

// Back to top
document.querySelector('[data-top]')?.addEventListener('click', () => {
  lenis.scrollTo(0)
})

// Header contrast on dark sections
const header = document.querySelector('.site-header')
const end = document.querySelector('.end')
ScrollTrigger.create({
  trigger: end,
  start: 'top top',
  onEnter: () => header.style.mixBlendMode = 'normal',
  onLeaveBack: () => {
    if (!isMobile) header.style.mixBlendMode = 'difference'
  },
})
