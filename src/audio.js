/**
 * Lusion-style site audio — music beds + UI SFX.
 * Music cues match HomePageAudios.update from lusion.co.
 * Always on: unlocks on first user gesture, no mute toggle.
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
  const music = {}
  for (const [id, file] of Object.entries(MUSIC)) {
    music[id] = makeAudio(`${BASE}${file}`, { loop: true, volume: 0 })
  }
  const sfx = {}
  for (const [id, files] of Object.entries(SFX)) {
    sfx[id] = files.map((f) => makeAudio(`${BASE}${f}`, { loop: false, volume: 0.85 }))
  }

  let unlocked = false
  let currMusicId = null
  let fadeFrom = null
  let fadeTo = null
  let fadeT = 1
  let fadeDur = 1.2
  /** Outside goal section — hero / reel / featured */
  let outsideGoal = true
  const sfxIdx = { hover: 0, click: 0, focus: 0, page: 0, glass: 0 }
  let brokenGlassStep = 0

  const unlock = async () => {
    if (unlocked) return
    unlocked = true
    try {
      const probe = music.generic
      probe.volume = 0
      await probe.play()
      probe.pause()
      probe.currentTime = 0
      if (!currMusicId) fadeToMusic('generic', 0.01)
    } catch {
      unlocked = false
    }
  }

  const playSfx = (kind) => {
    if (!unlocked) return
    const list = sfx[kind]
    if (!list?.length) return
    const i = sfxIdx[kind] % list.length
    sfxIdx[kind] = i + 1
    const a = list[i].cloneNode()
    a.volume = kind === 'focus' ? 0.4 : kind === 'glass' ? 1 : 0.85
    a.play().catch(() => {})
  }

  const fadeToMusic = (id, dur = 1.2) => {
    // Match Lusion Audios.fadeBgMusic: only act when id changes
    if (!music[id] || currMusicId === id) return
    fadeFrom = currMusicId
    fadeTo = id
    fadeT = 0
    fadeDur = Math.max(0.05, dur)
    currMusicId = id
    const next = music[id]
    // Crossfade from current playback position (looping beds) — no seek reset
    if (next.volume > 0.01 && !next.paused) {
      // already audible somehow — keep going
    } else {
      next.volume = 0
    }
    if (unlocked) next.play().catch(() => {})
  }

  const update = (dt) => {
    if (!unlocked) return
    if (fadeTo && fadeT < 1) {
      fadeT = Math.min(1, fadeT + dt / fadeDur)
      const t = fadeT * fadeT * (3 - 2 * fadeT)
      if (fadeFrom && music[fadeFrom]) {
        music[fadeFrom].volume = Math.max(0, 1 - t)
        if (t >= 1) {
          music[fadeFrom].pause()
          try {
            music[fadeFrom].currentTime = 0
          } catch {
            /* ignore */
          }
        }
      }
      if (music[fadeTo]) {
        music[fadeTo].volume = t
        if (music[fadeTo].paused) music[fadeTo].play().catch(() => {})
      }
      if (t >= 1) {
        fadeFrom = null
        fadeTo = null
      }
    } else if (currMusicId && music[currMusicId]) {
      if (music[currMusicId].volume < 1) music[currMusicId].volume = 1
      if (music[currMusicId].paused) music[currMusicId].play().catch(() => {})
    }
  }

  /**
   * Phase hook kept for main.js; music is owned solely by syncTunnelAudio.
   */
  const syncGoalPhase = () => {}

  /**
   * Exact port of Lusion HomePageAudios.update music + glass SFX cues.
   * Ratios must be the live GoalTunnels values (not phase booleans).
   */
  const syncTunnelAudio = ({
    blackFrameInRatio = 0,
    blackTunnelRatio = 0,
    whiteTunnelRatio = 0,
    astronautDropRatio = 0,
  } = {}) => {
    outsideGoal = false

    const e = astronautDropRatio
    const t = blackFrameInRatio
    const r = blackTunnelRatio
    const n = whiteTunnelRatio

    // Nested ternary from Lusion HomePageAudios — track ids + fade times exact
    if (t > 0.5 && r === 0) {
      brokenGlassStep = 0
      fadeToMusic('cinematic_2', 0.5)
    } else if (r > 0 && n === 0) {
      fadeToMusic('cinematic_3', 0.5)
      brokenGlassStep = 0
    } else if (n > 0 && e === 0) {
      fadeToMusic('cinematic_2', 0.5)
    } else if (n > 0 && e <= 0.8) {
      fadeToMusic('cinematic_2', 0.5)
    } else if (n > 0 && e > 0.8) {
      fadeToMusic('generic_end', 1)
    } else {
      brokenGlassStep = 0
      fadeToMusic('generic', 1)
    }

    // Glass SFX: arm while drop==0, fire once on first frame drop>0
    if (e === 0) {
      brokenGlassStep = 1
    } else if (brokenGlassStep === 1) {
      playSfx('glass')
      brokenGlassStep = 2
    }
  }

  document
    .querySelectorAll('#header-right-talk-btn, #header-right-menu-btn, .header-menu-link')
    .forEach((el) => {
      el.addEventListener('mouseenter', () => playSfx('hover'))
      el.addEventListener('click', () => playSfx('click'))
    })

  const onceUnlock = () => {
    unlock()
  }
  window.addEventListener('pointerdown', onceUnlock, { passive: true })
  window.addEventListener('touchstart', onceUnlock, { passive: true })
  window.addEventListener('wheel', onceUnlock, { passive: true, once: true })
  window.addEventListener('keydown', onceUnlock, { passive: true, once: true })
  unlock()

  return {
    update,
    syncGoalPhase,
    syncTunnelAudio,
    playSfx,
    setEnabled() {},
    get enabled() {
      return true
    },
    destroy() {
      Object.values(music).forEach((a) => {
        a.pause()
        a.src = ''
      })
    },
  }
}
