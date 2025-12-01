#!/usr/bin/env python3
"""Sukurti šventinį paveikslėlį straipsniui (Atnaujintas dizainas - be vėliavos)"""

from PIL import Image, ImageDraw, ImageFont
import os
import random
import math

# Išvesties direktorija
output_dir = 'images/optimized'
public_dir = 'public/images/optimized'
base_name = 'sventes-2025-buitine-technika'

os.makedirs(output_dir, exist_ok=True)
os.makedirs(public_dir, exist_ok=True)

# Dydis
width, height = 1024, 1024

# Fonas: Tamsiai žalias su gradientu (nuo žalios viršuje iki tamsesnės apačioje)
img = Image.new('RGB', (width, height), '#0f3d24')
draw = ImageDraw.Draw(img)

# Gradientas: žalia viršuje, raudona apačioje
for y in range(height):
    # Interpoliacija: nuo žalios (#1a5c38) viršuje iki tamsiai raudonos (#5c1a1a) apačioje
    r = int(26 + (92 - 26) * (y / height))      # 26 -> 92
    g = int(92 + (20 - 92) * (y / height))      # 92 -> 20
    b = int(56 + (20 - 56) * (y / height))      # 56 -> 20
    draw.line([(0, y), (width, y)], fill=(r, g, b))

# Dekoracijos: Auksinės snaigės ir žvaigždės (be vėliavų)
random.seed(2026)

def draw_star(draw, x, y, size, fill):
    """Piešti žvaigždę"""
    points = []
    for i in range(10):
        angle = i * 36 * 3.14159 / 180
        r = size if i % 2 == 0 else size / 2
        px = x + r * math.cos(angle)
        py = y + r * math.sin(angle)
        points.append((px, py))
    draw.polygon(points, fill=fill)

# Piešti snaiges ir žvaigždes
for _ in range(100):
    x = random.randint(0, width)
    y = random.randint(0, height)
    size = random.randint(3, 7)
    
    if random.random() > 0.7:
        draw_star(draw, x, y, size, (255, 215, 0))  # Auksinė žvaigždė
    else:
        # Snaigė (balta)
        draw.ellipse([x-size/2, y-size/2, x+size/2, y+size/2], fill=(255, 255, 255))

# Tekstas
try:
    title_font = ImageFont.truetype("arialbd.ttf", 85)
    year_font = ImageFont.truetype("arialbd.ttf", 130)
    subtitle_font = ImageFont.truetype("arial.ttf", 42)
    footer_font = ImageFont.truetype("arial.ttf", 32)
    small_font = ImageFont.truetype("arial.ttf", 26)
except:
    title_font = ImageFont.load_default()
    year_font = ImageFont.load_default()
    subtitle_font = ImageFont.load_default()
    footer_font = ImageFont.load_default()
    small_font = ImageFont.load_default()

def draw_text_centered(draw, text, y, font, fill):
    """Piešti centruotą tekstą su šešėliu"""
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    x = (width - text_width) // 2
    # Šešėlis
    draw.text((x+3, y+3), text, font=font, fill=(0, 0, 0, 100))
    # Tekstas
    draw.text((x, y), text, font=font, fill=fill)

# Centrinė kompozicija - SU DIDELIAIS ŽODZIAIS
draw_text_centered(draw, "AČIŪ UŽ", 160, title_font, (255, 255, 255))
draw_text_centered(draw, "2025", 280, year_font, (255, 215, 0))  # Auksinė
draw_text_centered(draw, "METUS!", 420, title_font, (255, 255, 255))

# Dekoratyvinė linija
draw.line([(150, 520), (874, 520)], fill=(255, 215, 0), width=4)

# Subtitrai - NEMOKAMAS IŠVEŽIMAS
draw_text_centered(draw, "Nemokamas buitinės technikos", 580, subtitle_font, (200, 255, 200))
draw_text_centered(draw, "išvežimas visoje Lietuvoje", 640, subtitle_font, (200, 255, 200))

# Dėžė su auksinu kaspiniu (supaprastinta, be vėliavų)
box_x, box_y = width//2 - 60, 720
box_w, box_h = 120, 100
# Dėžutė
draw.rectangle([box_x, box_y, box_x+box_w, box_y+box_h], fill=(200, 50, 50), outline=(255, 215, 0), width=3)
# Auksinis kaspinas vertikaliai
draw.rectangle([box_x+50, box_y-10, box_x+70, box_y+box_h+10], fill=(255, 215, 0))
# Auksinis kaspinas horizontaliai
draw.rectangle([box_x-10, box_y+40, box_x+box_w+10, box_y+60], fill=(255, 215, 0))
# Bантик viršuje
draw.ellipse([box_x+45, box_y-25, box_x+75, box_y-5], fill=(255, 215, 0))

# Footer
draw_text_centered(draw, "Transportuok.lt", 870, footer_font, (255, 255, 255))
draw_text_centered(draw, "Greitas • Saugus • Atsakingas", 920, small_font, (200, 255, 200))

# Auksinė rėmelis
draw.rectangle([15, 15, width-15, height-15], outline=(255, 215, 0), width=5)
draw.rectangle([20, 20, width-20, height-20], outline=(255, 255, 255), width=2)

# Išsaugojimas su geresnės kokybės nustatyimais
variants = [
    ('', 1024, 1024, 92),
    ('-large', 1024, 1024, 92),
    ('-medium', 576, 576, 88),
    ('-small', 360, 360, 85),
]

for suffix, w, h, quality in variants:
    filename = f'{base_name}{suffix}.webp'
    if w != width or h != height:
        resized = img.resize((w, h), Image.Resampling.LANCZOS)
    else:
        resized = img
    
    for dir_path in [output_dir, public_dir]:
        filepath = os.path.join(dir_path, filename)
        resized.save(filepath, 'WEBP', quality=quality, method=6)
    
    size_kb = os.path.getsize(os.path.join(output_dir, filename)) / 1024
    print(f'✓ {filename} ({size_kb:.1f} KB)')

print('\n✓ Paveikslėlis atnaujintas - be vėliavų, tik šventinis dizainas!')
