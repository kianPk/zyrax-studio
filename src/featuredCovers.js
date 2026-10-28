/**
 * Procedural animated Featured covers — no title placards.
 * Each project gets a unique live canvas → CanvasTexture.
 */
import * as THREE from 'three'

const W = 768
const H = 500

function hex(h) {
  const n = h.replace('#', '')
  return [
    parseInt(n.slice(0, 2), 16),
    parseInt(n.slice(2, 4), 16),
    parseInt(n.slice(4, 6), 16),
  ]
}

function rgba(c, a) {
  return `rgba(${c[0]},${c[1]},${c[2]},${a})`
}

function fillBg(ctx, bg, accent, t) {
  const g = ctx.createLinearGradient(0, 0, W, H)
  g.addColorStop(0, rgba(bg, 1))
  g.addColorStop(0.55, rgba(bg, 1))
  g.addColorStop(1, rgba(accent, 0.35))
  ctx.fillStyle = g
  ctx.fillRect(0, 0, W, H)
  // soft drifting glow
  const gx = W * (0.35 + 0.25 * Math.sin(t * 0.35))
  const gy = H * (0.4 + 0.2 * Math.cos(t * 0.28))
  const rg = ctx.createRadialGradient(gx, gy, 20, gx, gy, H * 0.7)
  rg.addColorStop(0, rgba(accent, 0.28))
  rg.addColorStop(1, rgba(accent, 0))
  ctx.fillStyle = rg
  ctx.fillRect(0, 0, W, H)
}

function drawDrive(ctx, bg, accent, t) {
  fillBg(ctx, bg, accent, t)
  ctx.save()
  ctx.translate(W * 0.5, H * 0.72)
  for (let i = 0; i < 18; i++) {
    const p = ((t * 0.35 + i / 18) % 1)
    const y = -p * H * 0.85
    const s = 0.15 + p * 1.6
    ctx.strokeStyle = rgba(accent, 0.15 + p * 0.55)
    ctx.lineWidth = 2 * s
    ctx.beginPath()
    ctx.moveTo(-40 * s, y)
    ctx.lineTo(40 * s, y)
    ctx.stroke()
  }
  // vanishing road
  ctx.strokeStyle = rgba(accent, 0.55)
  ctx.lineWidth = 3
  ctx.beginPath()
  ctx.moveTo(-W * 0.45, 40)
  ctx.lineTo(0, -H * 0.7)
  ctx.moveTo(W * 0.45, 40)
  ctx.lineTo(0, -H * 0.7)
  ctx.stroke()
  // speed streaks
  for (let i = 0; i < 24; i++) {
    const x = ((i * 97 + t * 220) % W) - W * 0.5
    const y = -((i * 53 + t * 380) % (H * 0.9))
    ctx.strokeStyle = rgba(accent, 0.35)
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x, y - 18 - (i % 5) * 6)
    ctx.stroke()
  }
  ctx.restore()
}

function drawOrbit(ctx, bg, accent, t) {
  fillBg(ctx, bg, accent, t)
  const cx = W * 0.5
  const cy = H * 0.48
  for (let r = 0; r < 5; r++) {
    const rad = 40 + r * 38
    ctx.strokeStyle = rgba(accent, 0.18 + r * 0.06)
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.ellipse(cx, cy, rad * 1.6, rad * 0.55, t * 0.15 + r * 0.2, 0, Math.PI * 2)
    ctx.stroke()
    const a = t * (0.6 + r * 0.15) + r
    const x = cx + Math.cos(a) * rad * 1.6
    const y = cy + Math.sin(a) * rad * 0.55
    ctx.fillStyle = rgba(accent, 0.85)
    ctx.beginPath()
    ctx.arc(x, y, 4 + (r % 2), 0, Math.PI * 2)
    ctx.fill()
  }
  // floating panel
  const px = cx + Math.sin(t * 0.4) * 30
  const py = cy + Math.cos(t * 0.35) * 18
  ctx.fillStyle = rgba(accent, 0.12)
  ctx.strokeStyle = rgba(accent, 0.5)
  ctx.lineWidth = 1.5
  ctx.fillRect(px - 70, py - 44, 140, 88)
  ctx.strokeRect(px - 70, py - 44, 140, 88)
}

function drawPlayfield(ctx, bg, accent, t) {
  fillBg(ctx, bg, accent, t)
  const balls = [
    [0.25, 0.35, 22, 1.1],
    [0.55, 0.55, 30, 0.8],
    [0.72, 0.3, 16, 1.4],
    [0.4, 0.7, 20, 1.0],
    [0.8, 0.65, 18, 1.25],
  ]
  for (const [bx, by, r, sp] of balls) {
    const x = bx * W + Math.sin(t * sp) * 40
    const y = by * H + Math.abs(Math.sin(t * sp * 1.3)) * -50
    const g = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, 2, x, y, r)
    g.addColorStop(0, rgba([255, 255, 255], 0.85))
    g.addColorStop(0.4, rgba(accent, 0.9))
    g.addColorStop(1, rgba(accent, 0.15))
    ctx.fillStyle = g
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
  }
  // floor grid
  ctx.strokeStyle = rgba(accent, 0.12)
  for (let i = 0; i < 10; i++) {
    const y = H * 0.55 + i * 18 + ((t * 40) % 18)
    ctx.beginPath()
    ctx.moveTo(40, y)
    ctx.lineTo(W - 40, y)
    ctx.stroke()
  }
}

function drawTrade(ctx, bg, accent, t) {
  fillBg(ctx, bg, accent, t)
  const bars = 28
  const bw = (W - 80) / bars
  for (let i = 0; i < bars; i++) {
    const h =
      40 +
      Math.abs(Math.sin(t * 1.2 + i * 0.45)) * 160 +
      Math.sin(t * 0.5 + i) * 30
    const x = 40 + i * bw
    const up = Math.sin(t + i * 0.7) > 0
    ctx.fillStyle = up ? rgba(accent, 0.75) : rgba([255, 90, 90], 0.55)
    ctx.fillRect(x + 2, H * 0.78 - h, bw - 4, h)
  }
  ctx.strokeStyle = rgba(accent, 0.5)
  ctx.lineWidth = 2
  ctx.beginPath()
  for (let i = 0; i < 60; i++) {
    const x = 40 + (i / 59) * (W - 80)
    const y = H * 0.35 + Math.sin(t * 1.5 + i * 0.2) * 50 + Math.sin(i * 0.4) * 20
    if (i === 0) ctx.moveTo(x, y)
    else ctx.lineTo(x, y)
  }
  ctx.stroke()
}

function drawVelocity(ctx, bg, accent, t) {
  fillBg(ctx, bg, accent, t)
  for (let lane = 0; lane < 5; lane++) {
    const y = H * 0.25 + lane * 55
    ctx.strokeStyle = rgba(accent, 0.2 + lane * 0.08)
    ctx.lineWidth = 3
    ctx.setLineDash([20, 28])
    ctx.lineDashOffset = -t * (120 + lane * 40)
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(W, y + Math.sin(t + lane) * 8)
    ctx.stroke()
    ctx.setLineDash([])
  }
  // racer blips
  for (let i = 0; i < 6; i++) {
    const x = ((t * (180 + i * 40) + i * 120) % (W + 40)) - 20
    const y = H * 0.28 + (i % 5) * 55
    ctx.fillStyle = rgba(accent, 0.9)
    ctx.shadowColor = rgba(accent, 0.8)
    ctx.shadowBlur = 16
    ctx.beginPath()
    ctx.ellipse(x, y, 18, 8, 0, 0, Math.PI * 2)
    ctx.fill()
    ctx.shadowBlur = 0
  }
}

function drawSerpent(ctx, bg, accent, t) {
  fillBg(ctx, bg, accent, t)
  const segs = 40
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  for (let s = 0; s < 2; s++) {
    ctx.beginPath()
    for (let i = 0; i < segs; i++) {
      const u = i / segs
      const x = W * (0.1 + u * 0.8)
      const y =
        H * 0.5 +
        Math.sin(u * Math.PI * 3 + t * 2 + s) * (60 - s * 20) +
        Math.cos(u * 8 + t + s) * 20
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.strokeStyle = rgba(accent, s === 0 ? 0.85 : 0.35)
    ctx.lineWidth = s === 0 ? 10 : 4
    ctx.shadowColor = rgba(accent, 0.6)
    ctx.shadowBlur = 18
    ctx.stroke()
  }
  ctx.shadowBlur = 0
  // head
  const hx = W * 0.9
  const hy = H * 0.5 + Math.sin(Math.PI * 3 + t * 2) * 60
  ctx.fillStyle = rgba(accent, 1)
  ctx.beginPath()
  ctx.arc(hx, hy, 12, 0, Math.PI * 2)
  ctx.fill()
}

function drawHex(ctx, bg, accent, t) {
  fillBg(ctx, bg, accent, t)
  const size = 28
  const h = size * Math.sqrt(3)
  for (let row = -1; row < 12; row++) {
    for (let col = -1; col < 16; col++) {
      const x = col * size * 1.5 + 40
      const y = row * h + (col % 2) * (h * 0.5) + 20
      const pulse = 0.15 + 0.55 * Math.abs(Math.sin(t * 1.2 + row * 0.4 + col * 0.25))
      ctx.strokeStyle = rgba(accent, pulse)
      ctx.lineWidth = 1.5
      ctx.beginPath()
      for (let k = 0; k < 6; k++) {
        const a = (Math.PI / 3) * k
        const px = x + Math.cos(a) * size
        const py = y + Math.sin(a) * size
        if (k === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      }
      ctx.closePath()
      ctx.stroke()
      if ((row + col + Math.floor(t * 2)) % 7 === 0) {
        ctx.fillStyle = rgba(accent, 0.25)
        ctx.fill()
      }
    }
  }
}

function drawBrick(ctx, bg, accent, t) {
  fillBg(ctx, bg, accent, t)
  const rows = 8
  const cols = 12
  const bw = (W - 80) / cols
  const bh = 28
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const hit = Math.sin(t * 2 + r * 1.7 + c * 0.9)
      if (hit > 0.65) continue
      const x = 40 + c * bw + (r % 2) * (bw * 0.5)
      const y = 50 + r * (bh + 6) + Math.sin(t + c) * 2
      ctx.fillStyle = rgba(accent, 0.35 + (r / rows) * 0.45)
      ctx.strokeStyle = rgba([255, 220, 200], 0.25)
      ctx.fillRect(x, y, bw - 4, bh)
      ctx.strokeRect(x, y, bw - 4, bh)
    }
  }
  // particles
  for (let i = 0; i < 30; i++) {
    const x = ((i * 73 + t * 40) % W)
    const y = ((i * 41 + t * 90) % H)
    ctx.fillStyle = rgba(accent, 0.5)
    ctx.fillRect(x, y, 3, 3)
  }
}

function drawStudio(ctx, bg, accent, t) {
  fillBg(ctx, bg, accent, t)
  const cx = W * 0.5
  const cy = H * 0.5
  for (let i = 0; i < 10; i++) {
    const p = ((t * 0.25 + i / 10) % 1)
    const r = 20 + p * 220
    ctx.strokeStyle = rgba(accent, (1 - p) * 0.55)
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.ellipse(cx, cy, r * 1.4, r * 0.55, 0, 0, Math.PI * 2)
    ctx.stroke()
  }
  // center figure hint
  ctx.fillStyle = rgba(accent, 0.35)
  ctx.beginPath()
  ctx.ellipse(cx, cy + 10, 18, 34, 0, 0, Math.PI * 2)
  ctx.fill()
  ctx.beginPath()
  ctx.arc(cx, cy - 28, 14, 0, Math.PI * 2)
  ctx.fill()
}

function drawPulse(ctx, bg, accent, t) {
  fillBg(ctx, bg, accent, t)
  // waveform
  ctx.strokeStyle = rgba(accent, 0.85)
  ctx.lineWidth = 2.5
  ctx.beginPath()
  for (let i = 0; i < W; i += 3) {
    const y =
      H * 0.5 +
      Math.sin(i * 0.04 + t * 4) * 40 * Math.sin(t * 2) +
      Math.sin(i * 0.12 + t * 6) * 12
    if (i === 0) ctx.moveTo(i, y)
    else ctx.lineTo(i, y)
  }
  ctx.stroke()
  // nodes
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2 + t * 0.4
    const x = W * 0.5 + Math.cos(a) * 160
    const y = H * 0.5 + Math.sin(a) * 90
    ctx.fillStyle = rgba(accent, 0.8)
    ctx.beginPath()
    ctx.arc(x, y, 5, 0, Math.PI * 2)
    ctx.fill()
    ctx.strokeStyle = rgba(accent, 0.25)
    ctx.beginPath()
    ctx.moveTo(W * 0.5, H * 0.5)
    ctx.lineTo(x, y)
    ctx.stroke()
  }
}

const THEMES = {
  zyrax_drive: drawDrive,
  orbit_desk: drawOrbit,
  playfield: drawPlayfield,
  tradeforge: drawTrade,
  velocity_arena: drawVelocity,
  neon_serpent: drawSerpent,
  hexsweep: drawHex,
  brickforge: drawBrick,
  zyrax_studio: drawStudio,
  server_pulse: drawPulse,
}

export function createAnimatedCover(project) {
  const canvas = document.createElement('canvas')
  canvas.width = W
  canvas.height = H
  const ctx = canvas.getContext('2d', { alpha: false })
  const bg = hex(project.colorBg || '#111111')
  const accent = hex(project.colorText || '#ffffff')
  // derive brighter accent from text color for glow
  const draw = THEMES[project.id] || drawStudio

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping
  texture.minFilter = THREE.LinearFilter
  texture.magFilter = THREE.LinearFilter
  texture.generateMipmaps = false

  let last = -1
  return {
    texture,
    size: new THREE.Vector2(W, H),
    update(time) {
      // ~30fps for covers — enough motion, cheaper than every frame
      if (time - last < 1 / 30) return
      last = time
      draw(ctx, bg, accent, time)
      texture.needsUpdate = true
    },
    dispose() {
      texture.dispose()
    },
  }
}

/** Soft depth for parallax — brighter = closer. */
export function createCoverDepthTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256
  const ctx = canvas.getContext('2d')
  const g = ctx.createRadialGradient(128, 120, 20, 128, 128, 140)
  g.addColorStop(0, '#e8e8e8')
  g.addColorStop(0.45, '#888888')
  g.addColorStop(1, '#222222')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, 256, 256)
  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.NoColorSpace
  texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping
  texture.minFilter = THREE.LinearFilter
  texture.magFilter = THREE.LinearFilter
  texture.generateMipmaps = false
  return texture
}
