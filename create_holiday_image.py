#!/usr/bin/env python3
"""Sukurti šventinį paveikslėlį straipsniui"""

from PIL import Image, ImageDraw, ImageFont
import os

# Išvesties direktorija
output_dir = 'images/optimized'
public_dir = 'public/images/optimized'
base_name = 'sventes-2025-buitine-technika'

os.makedirs(output_dir, exist_ok=True)
os.makedirs(public_dir, exist_ok=True)

# Sukurti 1024x1024 paveikslėlį su šventiniu gradientu
width, height = 1024, 1024

# Sukurti bazinį paveikslėlį su tamsiai žaliu/raudonu gradientu
img = Image.new('RGB', (width, height), '#1a472a')  # Tamsiai žalia (kalėdinė)
draw = ImageDraw.Draw(img)

# Gradientas nuo tamsiai žalios iki tamsiai raudonos
for y in range(height):
    # Gradientas: žalia viršuje, raudona apačioje
    r = int(26 + (139 - 26) * (y / height))  # nuo 26 iki 139
    g = int(71 + (0 - 71) * (y / height))    # nuo 71 iki 0
    b = int(42 + (0 - 42) * (y / height))    # nuo 42 iki 0
    draw.line([(0, y), (width, y)], fill=(r, g, b))

# Pridėti dekoratyvinius elementus (snaigės efektas)
import random
random.seed(2025)  # Fiksuotas seed dėl pakartojimų

for _ in range(50):
    x = random.randint(0, width)
    y = random.randint(0, height)
    size = random.randint(2, 8)
    opacity = random.randint(30, 100)
    # Baltos snaigės
    draw.ellipse([x-size, y-size, x+size, y+size], fill=(255, 255, 255, opacity))

# Pridėti šventinius simbolius (tekstas)
# Bandome įkelti šriftą, jei nepavyksta - naudojame default
try:
    # Windows sistemoje
    title_font = ImageFont.truetype("arial.ttf", 72)
    subtitle_font = ImageFont.truetype("arial.ttf", 36)
    small_font = ImageFont.truetype("arial.ttf", 28)
except:
    title_font = ImageFont.load_default()
    subtitle_font = ImageFont.load_default()
    small_font = ImageFont.load_default()

# Centruotas tekstas
title = "🎄 Linksmų Švenčių!"
subtitle = "Nemokamas buitinės technikos"
subtitle2 = "išvežimas 2025"
footer = "Transportuok.lt"

# Piešti tekstą su šešėliu
def draw_text_centered(draw, text, y, font, fill, shadow=True):
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    x = (width - text_width) // 2
    if shadow:
        draw.text((x+3, y+3), text, font=font, fill=(0, 0, 0, 128))
    draw.text((x, y), text, font=font, fill=fill)

# Piešti tekstą
draw_text_centered(draw, "🎄", 150, title_font, (255, 215, 0))  # Auksinė
draw_text_centered(draw, "Linksmų Švenčių!", 250, title_font, (255, 255, 255))
draw_text_centered(draw, "━━━━━━━━━━━━━━━━━━━━", 340, small_font, (255, 215, 0))
draw_text_centered(draw, "Nemokamas buitinės technikos", 420, subtitle_font, (144, 238, 144))  # Šviesiai žalia
draw_text_centered(draw, "išvežimas visoje Lietuvoje", 480, subtitle_font, (144, 238, 144))
draw_text_centered(draw, "━━━━━━━━━━━━━━━━━━━━", 550, small_font, (255, 215, 0))

# Paslaugų sąrašas
services = ["✓ Šaldytuvai  ✓ Skalbyklės  ✓ TV", "✓ Viryklės  ✓ Elektronika  ✓ Metalas"]
draw_text_centered(draw, services[0], 620, small_font, (255, 255, 255))
draw_text_centered(draw, services[1], 660, small_font, (255, 255, 255))

# CTA
draw_text_centered(draw, "Užsakykite dabar – atvyksime greitai!", 750, small_font, (255, 215, 0))

# Footer
draw_text_centered(draw, "━━━━━━━━━━━━━━━━━━━━", 830, small_font, (255, 215, 0))
draw_text_centered(draw, "Transportuok.lt", 880, subtitle_font, (255, 255, 255))
draw_text_centered(draw, "Kaunas | Vilnius | Visa Lietuva", 930, small_font, (200, 200, 200))

# Pridėti dekoratyvinį rėmelį
border_color = (255, 215, 0)  # Auksinė
draw.rectangle([10, 10, width-10, height-10], outline=border_color, width=4)
draw.rectangle([20, 20, width-20, height-20], outline=(255, 255, 255, 100), width=2)

# Išsaugoti variantus
variants = [
    ('', 1024, 1024, 85),
    ('-large', 1024, 1024, 85),
    ('-medium', 576, 576, 80),
    ('-small', 360, 360, 75),
]

for suffix, w, h, quality in variants:
    filename = f'{base_name}{suffix}.webp'
    
    # Resize jei reikia
    if w != width or h != height:
        resized = img.resize((w, h), Image.Resampling.LANCZOS)
    else:
        resized = img
    
    # Išsaugoti į abi direktorijas
    for dir_path in [output_dir, public_dir]:
        filepath = os.path.join(dir_path, filename)
        resized.save(filepath, 'WEBP', quality=quality, method=6)
    
    file_size = os.path.getsize(os.path.join(output_dir, filename)) / 1024
    print(f'✓ {filename}: {w}x{h} ({quality}%) → {file_size:.2f} KB')

print(f'\n✓ Visos nuotraukos sėkmingai sukurtos!')
print(f'  → {output_dir}/{base_name}*.webp')
print(f'  → {public_dir}/{base_name}*.webp')
