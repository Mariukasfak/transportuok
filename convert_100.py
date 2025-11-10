#!/usr/bin/env python3
"""Konvertuoti 100.jpg į WebP variantus su responsyviais dydžiais"""

from PIL import Image
import os

# Šaltinis ir kryptis
source_file = 'images/100.jpg'
output_dir = 'images/optimized'
base_name = '100-reviews-saligatvis'

# Ištirti originalios nuotraukos dydį
if not os.path.exists(source_file):
    print(f'❌ Failas nerastas: {source_file}')
    exit(1)

# Atidaryti originalią nuotrauką
original = Image.open(source_file)
print(f'✓ Originalaus dydis: {original.size} px')

# Konversija į RGB (jei reikalinga)
if original.mode in ('RGBA', 'P'):
    rgb = Image.new('RGB', original.size, (255, 255, 255))
    rgb.paste(original, mask=original.split()[-1] if original.mode == 'RGBA' else None)
    original = rgb

# Variantai: (pavadinimas, plotis, aukštis, kokybė)
variants = [
    ('', 1024, 1024, 85),           # Main/default
    ('-large', 1024, 1024, 85),     # Desktop
    ('-medium', 576, 576, 80),      # Tablet
    ('-small', 360, 360, 75),       # Mobile
]

os.makedirs(output_dir, exist_ok=True)

for suffix, width, height, quality in variants:
    filename = f'{base_name}{suffix}.webp'
    filepath = os.path.join(output_dir, filename)
    
    # Resize su LANCZOS
    resized = original.resize((width, height), Image.Resampling.LANCZOS)
    
    # Išsaugoti kaip WebP
    resized.save(
        filepath,
        'WEBP',
        quality=quality,
        method=6  # Nuodugnesnė kompresija
    )
    
    # Informacija apie dydį
    file_size = os.path.getsize(filepath) / 1024  # KB
    print(f'✓ {filename}: {width}x{height} ({quality}%) → {file_size:.2f} KB')

print(f'✓ Visos nuotraukos sėkmingai konvertuotos į WebP!')
