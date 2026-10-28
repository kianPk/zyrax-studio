"""Static fallback covers (no title text) + soft depth for Featured Work."""
from __future__ import annotations

import math
import random
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'public' / 'assets' / 'projects'
W, H = 1280, 832

PROJECTS = [
    ('zyrax_drive', '#0a0c12', '#5b7cff'),
    ('orbit_desk', '#10131a', '#7a8cff'),
    ('playfield', '#0d1520', '#3ec7ff'),
    ('tradeforge', '#0b1210', '#3dff9a'),
    ('velocity_arena', '#120a14', '#ff4db8'),
    ('neon_serpent', '#060b12', '#2bffc8'),
    ('hexsweep', '#101018', '#8b9dff'),
    ('brickforge', '#140c0a', '#ff6b3d'),
    ('zyrax_studio', '#0e1016', '#1a2ffb'),
    ('server_pulse', '#0a1014', '#4db8ff'),
]


def hex_rgb(h: str):
    h = h.lstrip('#')
    return tuple(int(h[i : i + 2], 16) for i in (0, 2, 4))


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def cover(bg, accent, seed: int) -> Image.Image:
    rnd = random.Random(seed)
    img = Image.new('RGB', (W, H), bg)
    px = img.load()
    for y in range(H):
        for x in range(0, W, 2):
            t = y / H
            n = (rnd.random() - 0.5) * 8
            c = lerp(bg, accent, 0.06 + 0.28 * t)
            c = tuple(max(0, min(255, int(v + n))) for v in c)
            px[x, y] = c
            if x + 1 < W:
                px[x + 1, y] = c
    draw = ImageDraw.Draw(img, 'RGBA')
    for _ in range(22):
        x = rnd.randint(-80, W + 80)
        y = rnd.randint(-80, H + 80)
        r = rnd.randint(50, 260)
        col = (*accent, rnd.randint(30, 80))
        if rnd.random() < 0.5:
            draw.ellipse((x - r, y - r, x + r, y + r), outline=col, width=rnd.randint(2, 7))
        else:
            draw.line((x, y, x + rnd.randint(-280, 280), y + rnd.randint(-180, 180)), fill=col, width=3)
    # center glow orb (reads as subject for depth)
    orb = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(orb)
    cx, cy = W // 2, int(H * 0.48)
    for i in range(12, 0, -1):
        rr = 30 + i * 22
        a = int(10 + i * 8)
        od.ellipse((cx - rr, cy - rr, cx + rr, cy + rr), fill=(*accent, a))
    img = Image.alpha_composite(img.convert('RGBA'), orb).convert('RGB')
    return img.filter(ImageFilter.GaussianBlur(0.6))


def depth_map(seed: int) -> Image.Image:
    rnd = random.Random(seed + 99)
    img = Image.new('L', (W, H), 40)
    draw = ImageDraw.Draw(img)
    for i in range(12, 0, -1):
        r = int(80 + i * 38)
        v = 40 + i * 14
        cx, cy = W // 2 + rnd.randint(-40, 40), int(H * 0.48) + rnd.randint(-30, 30)
        draw.ellipse((cx - r, cy - r, cx + r, cy + r), fill=v)
    return img.filter(ImageFilter.GaussianBlur(28))


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for i, (pid, bg, accent) in enumerate(PROJECTS):
        folder = OUT / pid
        folder.mkdir(parents=True, exist_ok=True)
        cover(hex_rgb(bg), hex_rgb(accent), 2000 + i).save(folder / 'home.webp', 'WEBP', quality=86, method=6)
        depth_map(2000 + i).convert('RGB').save(folder / 'home_depth.webp', 'WEBP', quality=80, method=6)
        print('wrote', pid)
    print('done')


if __name__ == '__main__':
    main()
