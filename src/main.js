import Lenis from 'lenis'
import gsap from 'gsap'
import { API_URL, loadProjects, sendContact, TELEGRAM_FALLBACK } from './api.js'
import { bindGoalDomScroll } from './goalDom.js'
import { bindLusionScrollText } from './scrollText.js'
import { bindFeaturedProjects } from './featuredProjects.js'
import { bindReelScroll } from './reelScroll.js'
import { bindGoalFrame } from './goalFrame.js'
import { createSiteAudio } from './audio.js'
import { createGoalRanges } from './scrollRanges.js'

const isMobile =
  /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth < 812

// Preconnect Worker origin when configured (build-time VITE_API_URL)
if (API_URL) {
  const link = document.createElement('link')
  link.rel = 'preconnect'
  link.href = API_URL
  link.crossOrigin = 'anonymous'
  document.head.appendChild(link)
}

// Match Lusion --vh — use visualViewport on mobile so address-bar show/hide
// doesn't leave 100vh gaps / clipped sticky tunnels.
let lastVhPx = 0
const setVh = ({ notifyResize = false } = {}) => {
  const h = window.visualViewport?.height || window.innerHeight
  const next = h * 0.01
  document.documentElement.style.setProperty('--vh', `${next}px`)
  if (notifyResize && isMobile && Math.abs(h - lastVhPx) > 1) {
    lastVhPx = h
    window.dispatchEvent(new Event('resize'))
  } else {
    lastVhPx = h
  }
}
setVh()
window.addEventListener('resize', () => setVh())
let vvVhTimer = 0
let onVisualViewportSync = () => {}
const onVisualViewport = () => {
  if (vvVhTimer) return
  vvVhTimer = window.setTimeout(() => {
    vvVhTimer = 0
    setVh({ notifyResize: true })
    onVisualViewportSync()
  }, isMobile ? 48 : 0)
}
window.visualViewport?.addEventListener('resize', onVisualViewport)
window.visualViewport?.addEventListener('scroll', onVisualViewport)

const lenis = new Lenis({
  duration: isMobile ? 0.7 : 1.35,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: !isMobile,
  syncTouch: false,
  syncTouchLerp: 0,
  touchInertiaMultiplier: 0,
  wheelMultiplier: isMobile ? 0.9 : 0.82,
  touchMultiplier: isMobile ? 1 : 1.1,
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

const assetBase = `${import.meta.env.BASE_URL}assets/projects/`
const list = document.getElementById('project-list')

function renderProjects(projectList) {
  if (!list) return
  list.innerHTML = projectList
    .map(
      (p) => `
    <a class="project-item project-type-website" href="${p.url}" rel="noreferrer"
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

const goalSection = document.getElementById('home-goal')
const goalCanvas = document.getElementById('goal-tunnel-canvas')
const goalTitle = document.getElementById('home-goal-tunnel-title')
const goalSticky = document.getElementById('home-goal-tunnel-sticky')
const goalDom = bindGoalDomScroll(goalSection, goalTitle, goalSticky)
const goalRanges = goalSection ? createGoalRanges(goalSection) : null
const siteAudio = createSiteAudio()
let goalTunnel = null
let lastGoalPhase = ''

const scrollText = bindLusionScrollText()
let featuredProjects = { update() {} }
const reelScroll = bindReelScroll()
let scrollLines = null
let featuredWebgl = null
const goalFrame = goalSection
  ? bindGoalFrame(goalSection, goalSticky, goalRanges, {
      setGoalFrame: (...args) => scrollLines?.setGoalFrame?.(...args),
    })
  : { update() {} }

onVisualViewportSync = () => {
  goalFrame.update()
  goalDom.updateScroll()
  goalTunnel?.updateScroll?.()
}

let lastTick = performance.now()
gsap.ticker.add((time) => {
  const now = performance.now()
  const dt = Math.min(0.05, (now - lastTick) / 1000)
  lastTick = now

  if (!isMobile) {
    if (goalTunnel?.getAutoScrollSpeed) {
      goalAutoScrollSpeed = goalTunnel.getAutoScrollSpeed()
    }
    const wheelIdle = now - lastWheelTime > 1400 && !lenis.isScrolling
    if (!wheelIdle) {
      goalSkipAutoScroll = true
    } else if (Math.abs(goalAutoScrollSpeed) > 0.01) {
      goalSkipAutoScroll = false
    }
    goalAutoScrollRatio += Math.abs(goalAutoScrollSpeed) > 0 && !goalSkipAutoScroll ? dt * 0.35 : -1.2
    goalAutoScrollRatio = Math.max(0, Math.min(1, goalAutoScrollRatio))
    if (!goalSkipAutoScroll && goalAutoScrollRatio > 0.15 && Math.abs(goalAutoScrollSpeed) > 0.01) {
      const vh = window.innerHeight
      const deltaPx = goalAutoScrollSpeed * vh * dt * goalAutoScrollRatio * 0.22
      const next = (lenis.animatedScroll ?? lenis.scroll ?? window.scrollY) + deltaPx
      lenis.scrollTo(next, { immediate: true, force: true })
    }
  }

  lenis.raf(time * 1000)
  scrollText.update(dt)
  featuredProjects.update(dt)
  featuredWebgl?.update(dt)
  reelScroll.update(dt)
  scrollLines?.update()
  goalTunnel?.tickFrame?.(dt)
  siteAudio.update(dt)
  const phase = goalSection?.dataset?.goalPhase || ''
  if (phase && phase !== lastGoalPhase) {
    lastGoalPhase = phase
    siteAudio.syncGoalPhase(phase)
    scrollLines?.setPaused?.(
      isMobile && (phase === 'black-tunnel' || phase === 'white')
    )
  }
  if (goalTunnel?.getAstronautDropRatio) {
    siteAudio.syncTunnelAudio({
      blackFrameInRatio: goalTunnel.getBlackFrameInRatio?.() ?? 0,
      blackTunnelRatio: goalTunnel.getBlackTunnelRatio?.() ?? 0,
      whiteTunnelRatio: goalTunnel.getWhiteTunnelRatio?.() ?? 0,
      astronautDropRatio: goalTunnel.getAstronautDropRatio?.() ?? 0,
    })
  }
})
gsap.ticker.lagSmoothing(0)

lenis.on('scroll', () => {
  goalFrame.update()
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

/** Boot a WebGL module once when `el` is near the viewport */
function whenNearViewport(el, boot, { rootMargin = '40% 0px' } = {}) {
  if (!el) {
    boot()
    return
  }
  let done = false
  const run = () => {
    if (done) return
    done = true
    obs?.disconnect()
    boot()
  }
  if (typeof IntersectionObserver === 'undefined') {
    run()
    return
  }
  const obs = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) run()
    },
    { root: null, rootMargin, threshold: 0 }
  )
  obs.observe(el)
}

// Scroll lines first (signature look) — dynamic import, then balloons
import('./scrollLines.js')
  .then(({ createScrollLines }) => createScrollLines())
  .then((api) => {
    scrollLines = api
  })
  .catch((err) => console.error('Scroll lines failed', err))
  .finally(() => {
    import('./balloons.js')
      .then(({ createBalloonsHero }) => createBalloonsHero(heroCanvas, visual))
      .then(() => homeHero?.classList.add('is-in'))
      .catch((err) => {
        console.error('Balloons hero failed', err)
        homeHero?.classList.add('is-in')
      })
  })

// Goal tunnel — only when the section approaches the viewport
whenNearViewport(goalSection, () => {
  import('./tunnel.js')
    .then(({ createGoalTunnel }) => createGoalTunnel(goalCanvas, goalSection, goalTitle))
    .then((api) => {
      goalTunnel = api
    })
    .catch((err) => console.error('Goal tunnel failed', err))
}, { rootMargin: '60% 0px' })

// Featured list: API → static fallback, then bind + deferred WebGL
loadProjects().then((projectList) => {
  renderProjects(projectList)
  featuredProjects = bindFeaturedProjects()

  if (isMobile) return
  const featuredSection =
    document.getElementById('home-featured') ||
    document.querySelector('.project-list') ||
    list
  whenNearViewport(featuredSection, () => {
    import('./featuredWebgl.js')
      .then(({ createFeaturedWebgl }) => createFeaturedWebgl(projectList))
      .then((api) => {
        featuredWebgl = api
      })
      .catch((err) => console.error('Featured WebGL failed', err))
  }, { rootMargin: '50% 0px' })
})

function splitWords(el, className = 'word') {
  if (!el) return
  const nameNodes = Array.from(el.querySelectorAll('.hero-name')).map((n) =>
    n.textContent.trim()
  )
  const text = el.textContent.trim()
  const words = text.split(/\s+/)
  el.textContent = ''
  words.forEach((word, i) => {
    const span = document.createElement('span')
    span.className = className
    if (nameNodes.includes(word)) span.classList.add('hero-name')
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

const crosses = document.querySelectorAll('.home-hero-scroll-container-cross')
crosses.forEach((c, i) => {
  c.style.transitionDelay = `${0.15 + i * 0.08}s`
})

const headerEl = document.getElementById('header')
const headerContainer = document.getElementById('header-container')
const headerBackground = document.getElementById('header-background')
const headerMenu = document.getElementById('header-menu')
const menuBtn = document.getElementById('header-right-menu-btn')
let menuOpened = false

const enableMenu = (open) => {
  menuOpened = !!open
  headerEl?.classList.toggle('--menu-opened', menuOpened)
  headerContainer?.classList.toggle('--opened', menuOpened)
  headerBackground?.classList.toggle('--opened', menuOpened)
  headerMenu?.classList.toggle('--opened', menuOpened)
  menuBtn?.classList.toggle('--opened', menuOpened)
  if (headerBackground) {
    headerBackground.style.opacity = menuOpened
      ? window.innerWidth >= 1000
        ? '0.2'
        : '1'
      : '0'
  }
}

menuBtn?.addEventListener('click', (e) => {
  e.stopPropagation()
  enableMenu(!menuOpened)
})
headerBackground?.addEventListener('click', () => enableMenu(false))
document.querySelectorAll('[data-menu-close]').forEach((el) => {
  el.addEventListener('click', (e) => {
    const scrollTo = el.getAttribute('data-scroll-to')
    const href = el.getAttribute('href')
    enableMenu(false)
    if (scrollTo === 'contact') {
      e.preventDefault()
      lenis.scrollTo('#footer-section')
    } else if (href && href.startsWith('#')) {
      e.preventDefault()
      lenis.scrollTo(href === '#top' ? 0 : href)
    }
  })
})
document.addEventListener('click', (e) => {
  if (!menuOpened) return
  const t = e.target
  if (t?.closest?.('#header-menu') || t?.closest?.('#header-right-menu-btn')) return
  enableMenu(false)
})
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') enableMenu(false)
})

document.querySelector('[data-reel]')?.addEventListener('click', (e) => {
  const btn = e.currentTarget
  btn.classList.toggle('is-playing')
  const words = btn.querySelectorAll('.home-reel-video-title-word')
  if (words[0]) words[0].textContent = btn.classList.contains('is-playing') ? 'PAUSE' : 'PLAY'
  window.open('https://kianpk.github.io/zyrax-drive/', '_blank', 'noreferrer')
})

document.querySelector('#end-bottom')?.addEventListener('click', (e) => {
  e.preventDefault()
  lenis.scrollTo('#footer-section')
})

document.querySelector('#footer-bottom-up')?.addEventListener('click', (e) => {
  e.preventDefault()
  lenis.scrollTo(0)
})

// Contact form → Worker / Telegram fallback
const contactForm = document.getElementById('footer-contact-form')
const contactStatus = document.getElementById('footer-contact-status')
const contactSubmit = document.getElementById('footer-contact-submit')
const contactTelegram = document.getElementById('footer-contact-telegram')
if (contactTelegram) contactTelegram.href = TELEGRAM_FALLBACK

function setContactStatus(text, kind) {
  if (!contactStatus) return
  contactStatus.hidden = !text
  contactStatus.textContent = text || ''
  contactStatus.classList.toggle('is-ok', kind === 'ok')
  contactStatus.classList.toggle('is-err', kind === 'err')
}

contactForm?.addEventListener('submit', async (e) => {
  e.preventDefault()
  const name = document.getElementById('footer-contact-name')?.value?.trim() || ''
  const email = document.getElementById('footer-contact-email')?.value?.trim() || ''
  const message = document.getElementById('footer-contact-message')?.value?.trim() || ''
  if (!name || !email || !message) {
    setContactStatus('Please fill in all fields.', 'err')
    return
  }
  if (contactSubmit) contactSubmit.disabled = true
  setContactStatus('Sending…', null)
  const result = await sendContact({ name, email, message })
  if (contactSubmit) contactSubmit.disabled = false
  if (result.ok) {
    contactForm.reset()
    setContactStatus('Sent — I’ll get back to you soon.', 'ok')
    return
  }
  const fallback = result.fallback || TELEGRAM_FALLBACK
  if (contactTelegram) contactTelegram.href = fallback
  setContactStatus(
    `Couldn’t reach the server. Message me on Telegram instead.`,
    'err'
  )
})
