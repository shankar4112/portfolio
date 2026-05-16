import sharp from 'sharp';
import fs from 'fs';

async function optimizeImage() {
  const input = 'public/16693208299.png';
  const output = 'public/profile-optimized.webp';

  console.log('Optimizing image...');
  await sharp(input)
    .resize({ width: 800 })
    .webp({ quality: 80 })
    .toFile(output);
    
  console.log('Done! Optimized image saved to ' + output);
}

optimizeImage().catch(console.error);
