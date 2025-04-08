const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function generateFavicons() {
  const inputImage = 'src/assets/profile.png'; // Your profile image
  const sizes = [16, 32, 192, 512];
  
  for (const size of sizes) {
    await sharp(inputImage)
      .resize(size, size)
      .toFile(path.join('public', `favicon-${size}x${size}.png`));
  }
  
  // Generate apple-touch-icon
  await sharp(inputImage)
    .resize(180, 180)
    .toFile(path.join('public', 'apple-touch-icon.png'));
}

generateFavicons().catch(console.error); 