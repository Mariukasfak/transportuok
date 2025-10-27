#!/usr/bin/env python3
from PIL import Image

# Atidaryti originalią nuotrauką
img = Image.open('images/Straipsnis.jpg')
print(f'✓ Originalaus dydis: {img.size} px')

# Konvertuoti į RGB jei reikia
if img.mode != 'RGB':
    img = img.convert('RGB')

# Pagrindinė nuotrauka (1920x1080)
main_img = img.copy()
main_img.thumbnail((1920, 1080), Image.Resampling.LANCZOS)
main_img.save('images/optimized/straipsnis-buitine-technika-network.webp', 'WebP', quality=85)
print(f'✓ Main: straipsnis-buitine-technika-network.webp ({main_img.size})')

# Large variant
large_img = img.copy()
large_img.thumbnail((1920, 1080), Image.Resampling.LANCZOS)
large_img.save('images/optimized/straipsnis-buitine-technika-network-large.webp', 'WebP', quality=85)
print(f'✓ Large: straipsnis-buitine-technika-network-large.webp ({large_img.size})')

# Medium variant (tablet)
medium_img = img.copy()
medium_img.thumbnail((1024, 576), Image.Resampling.LANCZOS)
medium_img.save('images/optimized/straipsnis-buitine-technika-network-medium.webp', 'WebP', quality=80)
print(f'✓ Medium: straipsnis-buitine-technika-network-medium.webp ({medium_img.size})')

# Small variant (mobile)
small_img = img.copy()
small_img.thumbnail((640, 360), Image.Resampling.LANCZOS)
small_img.save('images/optimized/straipsnis-buitine-technika-network-small.webp', 'WebP', quality=75)
print(f'✓ Small: straipsnis-buitine-technika-network-small.webp ({small_img.size})')

print('✓ Visos nuotraukos sėkmingai konvertuotos į WebP!')
