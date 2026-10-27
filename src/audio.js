/**
 * Lusion-style site audio — music beds + UI SFX, gated by the sound button.
 * Assets mirrored from https://lusion.dev/assets/audios/
 */
const BASE = `${import.meta.env.BASE_URL}assets/audios/`

const MUSIC = {
  generic: 'generic.ogg',
  cinematic_0: 'cinematic_0.ogg',
  cinematic_2: 'cinematic_2.ogg',
  cinematic_3: 'cinematic_3.ogg',
  generic_end: 'generic_end.ogg',
}

const SFX = {
  hover: ['hover_0.ogg', 'hover_1.ogg', 'hover_2.ogg'],
  click: ['click_0.ogg', 'click_1.ogg'],
  focus: ['focus_0.ogg', 'focus_1.ogg', 'focus_2.ogg'],
  page: ['page_0.ogg', 'page_1.ogg'],
  glass: ['glass_broken.ogg'],
}

function makeAudio(src, { loop = false, volume = 1 } = {}) {
  const el = new Audio(src)
  el.preload = 'auto'
  el.loop = loop
  el.volume = volume
  el.crossOrigin = 'anonymous'
  return el
}

export function createSiteAudio() {
  const btn = document.getElementById('header-right-sound-btn')
  const music = {}
  for (const [id, file] of Object.entries(MUSIC)) {
    music[id] = makeAudio(`${BASE}${file}`, { loop: true, volume: 0 })
  }
  const sfx = {}
  for (const [id, files] of Object.entries(SFX)) {
    sfx[id] = files.map((f) => makeAudio(`${BASE}${f}`, { loop: false, volume: 0.85 }))
  }

  let enabled = false
  let unlocked = false
  let currMusicId = null
  let fadeFrom = null
  let fadeTo = null
  let fadeT = 1
  let fadeDur = 1.2
  const sfxIdx = { hover: 0, click: 0, focus: 0, page: 0, glass: 0 }

  const unlock = async () => {
    if (unlocked) return
    unlocked = true
    // Warm decode with a silent play/pause on music bed
    try {
      const probe = music.generic
      probe.volume = 0
      await probe.play()
      probe.pause()
      probe.currentTime = 0
    } catch {
      /* autoplay policy — wait for next gesture */
      unlocked = false
    }
  }

  const playSfx = (kind) => {
    if (!enabled || !unlocked) return
    const list = sfx[kind]
    if (!list?.length) return
    const i = sfxIdx[kind] % list.length
    sfxIdx[kind] = i + 1
    const a = list[i].cloneNode()
    a.volume = kind === 'focus' ? 0.4 : kind === 'glass' ? 1 : 0.85
    a.play().catch(() => {})
  }

  const setEnabled = (on) => {
    enabled = !!on
    btn?.classList.toggle('is-on', enabled)
    if (enabled) {
      unlock().then(() => {
        if (!currMusicId) fadeToMusic('generic', 0.8)
      })
    } else if (currMusicId && music[currMusicId]) {
      music[currMusicId].volume = 0
    }
  }

  const fadeToMusic = (id, dur = 1.2) => {
    if (!music[id] || currMusicId === id) return
    fadeFrom = currMusicId
    fadeTo = id
    fadeT = 0
    fadeDur = Math.max(0.05, dur)
    currMusicId = id
    const next = music[id]
    next.volume = 0
    if (enabled && unlocked) {
      next.play().catch(() => {})
    }
  }

  const update = (dt) => {
    if (!unlocked) return
    if (fadeTo && fadeT < 1) {
      fadeT = Math.min(1, fadeT + dt / fadeDur)
      const t = fadeT * fadeT * (3 - 2 * fadeT)
      if (fadeFrom && music[fadeFrom]) {
        music[fadeFrom].volume = enabled ? (1 - t) : 0
        if (t >= 1) {
          music[fadeFrom].pause()
          music[fadeFrom].currentTime = 0
        }
      }
      if (music[fadeTo]) {
        music[fadeTo].volume = enabled ? t : 0
        if (enabled && music[fadeTo].paused) music[fadeTo].play().catch(() => {})
      }
      if (t >= 1) {
        fadeFrom = null
        fadeTo = null
      }
    } else if (currMusicId && music[currMusicId]) {
      music[currMusicId].volume = enabled ? 1 : 0
      if (enabled && music[currMusicId].paused) {
        music[currMusicId].play().catch(() => {})
      }
    }
  }

  let brokenGlassStep = 0

  /** Map goal phase → Lusion music bed */
  const syncGoalPhase = (phase) => {
    if (!enabled) return
    if (phase === 'window') fadeToMusic('generic', 1.0)
    else if (phase === 'title' || phase === 'black-tunnel') fadeToMusic('cinematic_0', 1.4)
    else if (phase === 'white') fadeToMusic('cinematic_3', 1.6)
    else fadeToMusic('generic', 1.2)
  }

  /**
   * Lusion HomePageAudios glass + end bed:
   * arm glass SFX on the rising edge of astronautDrop, then generic_end.
   */
  const syncTunnelAudio = ({
    blackFrameInRatio = 0,
    blackTunnelRatio = 0,
    whiteTunnelRatio = 0,
    astronautDropRatio = 0,
  } = {}) => {
    if (!enabled) return
    if (blackFrameInRatio > 0.5 && blackTunnelRatio === 0) {
      brokenGlassStep = 0
      fadeToMusic('cinematic_0', 0.8)
    } else if (blackTunnelRatio > 0 && whiteTunnelRatio === 0) {
      brokenGlassStep = 0
      fadeToMusic('cinematic_0', 0.8)
    } else if (whiteTunnelRatio > 0 && astronautDropRatio <= 0.8) {
      fadeToMusic('cinematic_3', 0.8)
    } else if (whiteTunnelRatio > 0 && astronautDropRatio > 0.8) {
      fadeToMusic('generic_end', 1.0)
    }

    if (astronautDropRatio === 0) {
      brokenGlassStep = 1
    } else if (brokenGlassStep === 1) {
      playSfx('glass')
      brokenGlassStep = 2
    }
  }

  btn?.addEventListener('click', async () => {
    await unlock()
    setEnabled(!enabled)
    playSfx('click')
  })

  // Hover/click SFX on primary chrome
  document.querySelectorAll('#header-right-talk-btn, #header-right-menu-btn, .header-menu-link').forEach((el) => {
    el.addEventListener('mouseenter', () => playSfx('hover'))
    el.addEventListener('click', () => playSfx('click'))
  })

  // First pointer unlocks AudioContext-like gesture
  const onceUnlock = () => {
    unlock()
    window.removeEventListener('pointerdown', onceUnlock)
  }
  window.addEventListener('pointerdown', onceUnlock, { passive: true })

  return {
    update,
    syncGoalPhase,
    syncTunnelAudio,
    playSfx,
    setEnabled,
    get enabled() {
      return enabled
    },
    destroy() {
      Object.values(music).forEach((a) => {
        a.pause()
        a.src = ''
      })
    },
  }
}
