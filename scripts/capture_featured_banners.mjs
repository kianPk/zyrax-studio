/**
 * Capture live demo screenshots → public/assets/projects/{id}/home.webp + depth.
 * Run: node scripts/capture_featured_banners.mjs
 */
import { chromium } from 'playwright'
import { spawnSync } from 'node:child_process'
import { mkdirSync, existsSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const OUT = join(ROOT, 'public', 'assets', 'projects')
const TMP = join(ROOT, 'tmp_banners')

const PROJECTS = [
  { id: 'zyrax_drive', url: 'https://kianpk.github.io/zyrax-drive/', wait: 3500 },
  { id: 'orbit_desk', url: 'https://kianpk.github.io/orbit-desk/', wait: 3500 },
  { id: 'playfield', url: 'https://kianpk.github.io/playfield/', wait: 3000 },
  { id: 'tradeforge', url: 'https://kianpk.github.io/tradeforge/', wait: 2500 },
  { id: 'velocity_arena', url: 'https://kianpk.github.io/velocity-arena/', wait: 3000 },
  { id: 'neon_serpent', url: 'https://kianpk.github.io/neon-serpent/', wait: 2500 },
  { id: 'hexsweep', url: 'https://kianpk.github.io/hexsweep/', wait: 2000 },
  { id: 'brickforge', url: 'https://kianpk.github.io/brickforge/', wait: 2500 },
  { id: 'zyrax_studio', url: 'https://kianpk.github.io/zyrax-studio/', wait: 4000 },
  { id: 'server_pulse', url: 'https://kianpk.github.io/server-pulse/', wait: 2500 },
]

const W = 1280
const H = 832

mkdirSync(TMP, { recursive: true })

const browser = await chromium.launch({
  headless: true,
  channel: 'chrome', // use system Chrome — no playwright browser download
})
const page = await browser.newPage({
  viewport: { width: W, height: H },
  deviceScaleFactor: 1,
})

for (const p of PROJECTS) {
  const png = join(TMP, `${p.id}.png`)
  console.log('capturing', p.id, p.url)
  try {
    await page.goto(p.url, { waitUntil: 'domcontentloaded', timeout: 45000 })
    await page.waitForTimeout(p.wait)
    // Dismiss common overlays / click canvas if needed
    await page.evaluate(() => {
      document.querySelectorAll('button, [role="button"], .start, .play, #start').forEach((el, i) => {
        if (i < 2) try { el.click() } catch {}
      })
    }).catch(() => {})
    await page.waitForTimeout(800)
    await page.screenshot({ path: png, type: 'png', clip: { x: 0, y: 0, width: W, height: H } })
    console.log('  ok', png)
  } catch (err) {
    console.error('  fail', p.id, err.message)
  }
}

await browser.close()

// Convert PNG → webp + depth via Pillow
const py = `
from pathlib import Path
from PIL import Image, ImageFilter, ImageEnhance, ImageOps
import sys

TMP = Path(r'''${TMP.replace(/\\/g, '/')}''')
OUT = Path(r'''${OUT.replace(/\\/g, '/')}''')
W, H = ${W}, ${H}

for png in sorted(TMP.glob('*.png')):
    pid = png.stem
    folder = OUT / pid
    folder.mkdir(parents=True, exist_ok=True)
    img = Image.open(png).convert('RGB')
    # Crop/center to banner aspect if needed
    img = ImageOps.fit(img, (W, H), Image.Resampling.LANCZOS)
    # Slight contrast for punch
    img = ImageEnhance.Contrast(img).enhance(1.08)
    img = ImageEnhance.Color(img).enhance(1.06)
    img.save(folder / 'home.webp', 'WEBP', quality=88, method=6)

    # Soft depth from luminance (brighter ≈ closer) + center bias
    gray = img.convert('L')
    gray = ImageOps.autocontrast(gray)
    depth = Image.new('L', (W, H))
    gp = gray.load()
    dp = depth.load()
    cx, cy = W / 2, H * 0.48
    for y in range(H):
        for x in range(W):
            g = gp[x, y]
            d = ((x - cx) / cx) ** 2 + ((y - cy) / cy) ** 2
            center = max(0, 1.0 - d * 0.55)
            v = int(g * 0.55 + center * 110)
            dp[x, y] = max(20, min(240, v))
    depth = depth.filter(ImageFilter.GaussianBlur(18))
    depth.convert('RGB').save(folder / 'home_depth.webp', 'WEBP', quality=82, method=6)
    print('wrote', pid)
print('done')
`
writeFileSync(join(TMP, 'convert.py'), py)
const r = spawnSync('python', [join(TMP, 'convert.py')], { encoding: 'utf8', shell: true })
console.log(r.stdout || '')
if (r.stderr) console.error(r.stderr)
if (r.status !== 0) process.exit(r.status || 1)
console.log('all banners ready')
