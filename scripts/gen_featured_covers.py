"""Generate branded Featured Work covers + soft depth maps for Zyrax projects."""
from __future__ import annotations

import math
import random
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'public' / 'assets' / 'projects'
W, H = 1280, 832

PROJECTS = [
    ('zyrax_drive', '#0a0c12', '#5b7cff', '#e8ecff', 'ZYRAX DRIVE', '3D WORLD'),
    ('orbit_desk', '#10131a', '#7a8cff', '#f0f3ff', 'ORBIT DESK', 'PORTFOLIO'),
    ('playfield', '#0d1520', '#3ec7ff', '#d9f0ff', 'PLAYFIELD', 'PHYSICS'),
    ('tradeforge', '#0b1210', '#3dff9a', '#c8ffd8', 'TRADEFORGE', 'DEFI'),
    ('velocity_arena', '#120a14', '#ff4db8', '#ffd6f0', 'VELOCITY', 'ARENA'),
    ('neon_serpent', '#060b12', '#2bffc8', '#9dffe8', 'NEON', 'SERPENT'),
    ('hexsweep', '#101018', '#8b9dff', '#e4e8ff', 'HEXSWEEP', 'PUZZLE'),
    ('brickforge', '#140c0a', '#ff6b3d', '#ffe0d0', 'BRICKFORGE', 'ARCADE'),
    ('zyrax_studio', '#0e1016', '#1a2ffb', '#f0f1fa', 'ZYRAX', 'STUDIO'),
    ('server_pulse', '#0a1014', '#4db8ff', '#cde8ff', 'SERVER', 'PULSE'),
]


def hex_rgb(h: str) -> tuple[int, int, int]:
    h = h.lstrip('#')
    return tuple(int(h[i : i + 2], 16) for i in (0, 2, 4))  # type: ignore


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def font(size: int):
    for name in (
        'C:/Windows/Fonts/arialbd.ttf',
        'C:/Windows/Fonts/segoeuib.ttf',
        'C:/Windows/Fonts/arial.ttf',
    ):
        p = Path(name)
        if p.exists():
            return ImageFont.truetype(str(p), size)
    return ImageFont.load_default()


def cover(bg, accent, text, line1, line2, seed: int) -> Image.Image:
    rnd = random.Random(seed)
    img = Image.new('RGB', (W, H), bg)
    px = img.load()
    # Atmospheric gradient + noise
    for y in range(H):
        for x in range(W):
            t = y / H
            n = (rnd.random() - 0.5) * 10
            c = lerp(bg, accent, 0.08 + 0.22 * t)
            c = tuple(max(0, min(255, int(v + n))) for v in c)
            px[x, y] = c

    draw = ImageDraw.Draw(img, 'RGBA')
    # Abstract geometry unique per project
    for i in range(18):
        x = rnd.randint(-80, W + 80)
        y = rnd.randint(-80, H + 80)
        r = rnd.randint(40, 220)
        col = (*accent, rnd.randint(28, 70))
        shape = rnd.choice(['ellipse', 'rect', 'line'])
        if shape == 'ellipse':
            draw.ellipse((x - r, y - r, x + r, y + r), outline=col, width=rnd.randint(2, 6))
        elif shape == 'rect':
            draw.rectangle((x - r, y - r // 2, x + r, y + r // 2), outline=col, width=3)
        else:
            x2, y2 = x + rnd.randint(-300, 300), y + rnd.randint(-200, 200)
            draw.line((x, y, x2, y2), fill=col, width=rnd.randint(2, 5))

    # Soft vignette
    vig = Image.new('L', (W, H), 0)
    vd = ImageDraw.Draw(vig)
    for i in range(40):
        a = int(i * 4.5)
        vd.rectangle((i * 4, i * 3, W - i * 4, H - i * 3), outline=a)
    vig = vig.filter(ImageFilter.GaussianBlur(24))
    dark = Image.new('RGB', (W, H), (0, 0, 0))
    img = Image.composite(dark, img, vig.point(lambda v: int(v * 0.55)))

    draw = ImageDraw.Draw(img)
    f1 = font(92)
    f2 = font(42)
    # Title block
    tw = draw.textbbox((0, 0), line1, font=f1)[2]
    draw.text(((W - tw) // 2, H * 0.38), line1, fill=text, font=f1)
    tw2 = draw.textbbox((0, 0), line2, font=f2)[2]
    draw.text(((W - tw2) // 2, H * 0.52), line2, fill=(*accent, 255), font=f2)
    # Brand chip
    chip = 'KIAN · ZYRAX'
    fc = font(22)
    cw = draw.textbbox((0, 0), chip, font=fc)[2]
    draw.text(((W - cw) // 2, H * 0.86), chip, fill=(*text, 180), font=fc)
    return img.filter(ImageFilter.GaussianBlur(0.4))


def depth_map(seed: int) -> Image.Image:
    rnd = random.Random(seed + 99)
    img = Image.new('L', (W, H), 40)
    draw = ImageDraw.Draw(img)
    # Center blob brighter (closer) for parallax
    for i in range(12, 0, -1):
        r = int(80 + i * 38)
        v = 40 + i * 14
        cx, cy = W // 2 + rnd.randint(-40, 40), int(H * 0.48) + rnd.randint(-30, 30)
        draw.ellipse((cx - r, cy - r, cx + r, cy + r), fill=v)
    return img.filter(ImageFilter.GaussianBlur(28))


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for i, (pid, bg, accent, text, a, b) in enumerate(PROJECTS):
        folder = OUT / pid
        folder.mkdir(parents=True, exist_ok=True)
        bg_rgb = hex_rgb(bg)
        accent_rgb = hex_rgb(accent)
        text_rgb = hex_rgb(text)
        cover(bg_rgb, accent_rgb, text_rgb, a, b, seed=1000 + i).save(
            folder / 'home.webp', 'WEBP', quality=86, method=6
        )
        depth_map(1000 + i).convert('RGB').save(
            folder / 'home_depth.webp', 'WEBP', quality=80, method=6
        )
        print('wrote', pid)
    print('done', OUT)


if __name__ == '__main__':
    main()
