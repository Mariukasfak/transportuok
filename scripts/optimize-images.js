import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join, parse } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imagesDir = join(__dirname, '..', 'public/images');
const outputDir = join(imagesDir, 'optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const sizes = {
  small: { width: 300, height: 200 },
  medium: { width: 600, height: 400 },
  large: { width: 1200, height: 800 }
};

const images = [
  'hero-bg-appliances.webp',
  'metalo-lauzas.webp',
  'baldai.webp',
  'elektronika.webp',
  'buitine-technika.webp'
];

const optimizeImages = async () => {
  try {
    for (const image of images) {
      const imagePath = join(imagesDir, image);
      const fileNameBase = parse(imagePath).name;
      
      console.log(`Processing ${image}...`);
      
      // Optimize original image
      await sharp(imagePath)
        .webp({ quality: 80, effort: 6 })
        .toFile(join(outputDir, `${fileNameBase}.webp`));
      
      // Create responsive versions
      for (const [size, dimensions] of Object.entries(sizes)) {
        const outputPath = join(outputDir, `${fileNameBase}-${size}.webp`);
        
        await sharp(imagePath)
          .resize(dimensions.width, dimensions.height, { 
            fit: 'cover',
            withoutEnlargement: true
          })
          .webp({ 
            quality: 75,
            effort: 6,
            reductionEffort: 6
          })
          .toFile(outputPath);
        
        console.log(`Created: ${fileNameBase}-${size}.webp`);
      }
    }
    
    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
    process.exit(1);
  }
};

optimizeImages();