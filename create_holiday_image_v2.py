#!/usr/bin/env python3
"""Sukurti šventinį paveikslėlį straipsniui (Atnaujintas dizainas)"""

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

# 1. Fonas: Tamsiai žalias su radialiniu gradientu
img = Image.new('RGB', (width, height), '#0f3d24')
draw = ImageDraw.Draw(img)

# Radialinis gradientas (šviesesnis centras)
center_x, center_y = width // 2, height // 2
max_dist = math.sqrt(center_x**2 + center_y**2)

for y in range(height):
    for x in range(width):
        dist = math.sqrt((x - center_x)**2 + (y - center_y)**2)
        factor = dist / max_dist
        # Spalvos interpoliacija: nuo #1a5c38 (centras) iki #051f11 (kampai)
        r = int(26 * (1 - factor) + 5 * factor)
        g = int(92 * (1 - factor) + 31 * factor)
        b = int(56 * (1 - factor) + 17 * factor)
        # Optimizacija: piešti tik kas kelintą pikselį arba naudoti Image.radial_gradient jei būtų
        # Čia paprastumo dėlei piešiame stačiakampį (lėta, bet veikia)
        # draw.point((x, y), fill=(r, g, b)) 
        pass 

# Greitesnis būdas fonui - tiesiog solid spalva su "noise" arba paprastas gradientas
# Naudojame vertikalų gradientą, bet gražesnį
for y in range(height):
    r = int(15 + (5 - 15) * (y / height))
    g = int(61 + (30 - 61) * (y / height))
    b = int(36 + (20 - 36) * (y / height))
    draw.line([(0, y), (width, y)], fill=(r, g, b))

# 2. Dekoracijos: Auksinės snaigės ir žvaigždės
random.seed(2026) 

def draw_star(draw, x, y, size, fill):
    points = []
    for i in range(10):
        angle = i * 36 * 3.14159 / 180
        r = size if i % 2 == 0 else size / 2
        px = x + r * math.cos(angle)
        py = y + r * math.sin(angle)
        points.append((px, py))
    draw.polygon(points, fill=fill)

for _ in range(80):
    x = random.randint(0, width)
    y = random.randint(0, height)
    size = random.randint(2, 6)
    opacity = random.randint(50, 200)
    if random.random() > 0.8:
        draw_star(draw, x, y, size, (255, 215, 0, opacity)) # Auksinė
    else:
        draw.ellipse([x-size/2, y-size/2, x+size/2, y+size/2], fill=(255, 255, 255, opacity))

# 3. Tekstas
try:
    # Bandome rasti geresnį šriftą jei yra
    font_path = "arialbd.ttf" # Bold
    title_font = ImageFont.truetype(font_path, 90)
    year_font = ImageFont.truetype(font_path, 140)
    subtitle_font = ImageFont.truetype("arial.ttf", 40)
    footer_font = ImageFont.truetype("arial.ttf", 30)
except:
    title_font = ImageFont.load_default()
    year_font = ImageFont.load_default()
    subtitle_font = ImageFont.load_default()
    footer_font = ImageFont.load_default()

def draw_text_centered(draw, text, y, font, fill, shadow_color=(0,0,0,100)):
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    x = (width - text_width) // 2
    # Šešėlis
    draw.text((x+4, y+4), text, font=font, fill=shadow_color)
    draw.text((x, y), text, font=font, fill=fill)

# Centrinė kompozicija
draw_text_centered(draw, "AČIŪ UŽ", 200, title_font, (255, 255, 255))
draw_text_centered(draw, "2025", 300, year_font, (255, 215, 0)) # Auksinė
draw_text_centered(draw, "METUS!", 450, title_font, (255, 255, 255))

# Linija
draw.line([(200, 560), (824, 560)], fill=(255, 215, 0), width=3)

# Subtitrai
draw_text_centered(draw, "Nemokamas buitinės technikos", 600, subtitle_font, (200, 255, 200))
draw_text_centered(draw, "išvežimas visoje Lietuvoje", 660, subtitle_font, (200, 255, 200))

# Dovanų dėžė (supaprastinta grafika)
box_x, box_y = width//2 - 50, 750
box_w, box_h = 100, 100
draw.rectangle([box_x, box_y, box_x+box_w, box_y+box_h], fill=(200, 50, 50)) # Raudona dėžė
draw.rectangle([box_x+40, box_y, box_x+60, box_y+box_h], fill=(255, 215, 0)) # Auksinis kaspinas vert
draw.rectangle([box_x, box_y+40, box_x+box_w, box_y+60], fill=(255, 215, 0)) # Auksinis kaspinas horiz

# Footer
draw_text_centered(draw, "Transportuok.lt", 900, footer_font, (255, 255, 255))

# Rėmelis
draw.rectangle([20, 20, width-20, height-20], outline=(255, 215, 0), width=5)

# Išsaugojimas
variants = [
    ('', 1024, 1024, 90),
    ('-large', 1024, 1024, 90),
    ('-medium', 576, 576, 85),
    ('-small', 360, 360, 80),
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
    
    print(f'✓ {filename}')

print('Done.')
