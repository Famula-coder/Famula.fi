import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '..', 'FULLRESO');
const outputDir = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImages() {
  const files = fs.readdirSync(inputDir);
  
  for (const file of files) {
    if (file.startsWith('.')) continue; // Skip .DS_Store
    
    const inputPath = path.join(inputDir, file);
    const filenameWithoutExt = path.parse(file).name;
    // Replace spaces and special characters for web safety
    const safeFilename = filenameWithoutExt
      .toLowerCase()
      .replace(/ä/g, 'a')
      .replace(/ö/g, 'o')
      .replace(/[^a-z0-9]/g, '');
      
    const outputPath = path.join(outputDir, `${safeFilename}.webp`);
    
    console.log(`Processing ${file} -> ${safeFilename}.webp`);
    
    try {
      await sharp(inputPath)
        .resize({ width: 1200, withoutEnlargement: true }) // reasonable max width
        .webp({ quality: 80 })
        .toFile(outputPath);
      console.log(`✓ Saved ${safeFilename}.webp`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }
}

optimizeImages().catch(console.error);
