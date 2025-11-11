#!/usr/bin/env node
// scripts/generate-highres.js
// ESLint: this is a Node-only utility script that uses CommonJS require and Node globals
/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
// Scans the repository's public/ directory for PNG/JPEG images and generates @2x and @3x variants.
// Usage: node scripts/generate-highres.js

const fs = require('fs');
const path = require('path');

async function main() {
  const sharp = require('sharp');
  const projectRoot = path.resolve(__dirname, '..');
  const publicDir = path.join(projectRoot, 'public');

  if (!fs.existsSync(publicDir)) {
    console.error('public/ directory not found at', publicDir);
    process.exit(1);
  }

  const entries = fs.readdirSync(publicDir).filter(f => /\.(png|jpe?g)$/i.test(f));
  if (entries.length === 0) {
    console.log('No PNG/JPEG files found in public/. Nothing to do.');
    return;
  }

  console.log('Found', entries.length, 'image(s) in public/:');
  entries.forEach(e => console.log(' -', e));

  let generated = 0;

  for (const fileName of entries) {
    if (/@2x|@3x/.test(fileName)) {
      // already a variant; skip
      continue;
    }

    const inputPath = path.join(publicDir, fileName);
    const ext = path.extname(fileName);
    const base = path.basename(fileName, ext);

    try {
      const img = sharp(inputPath);
      const meta = await img.metadata();

      // If metadata has width/height, use them to compute sizes; otherwise, scale by 2x/3x using metadata if available
      const width = meta.width || null;
      const height = meta.height || null;

      // Prepare targets
      const targets = [
        { suffix: '@2x', factor: 2 },
        { suffix: '@3x', factor: 3 }
      ];

      for (const t of targets) {
        const outName = `${base}${t.suffix}${ext}`;
        const outPath = path.join(publicDir, outName);

        if (fs.existsSync(outPath)) {
          console.log(`Skipping existing ${outName}`);
          continue;
        }

        // If we have dimensions, explicitly resize to maintain expected pixel ratios; otherwise, use sharp.resize with multiplier
        if (width && height) {
          const newW = Math.round(width * t.factor);
          const newH = Math.round(height * t.factor);
          await img
            .resize(newW, newH, { kernel: sharp.kernel.lanczos3 })
            .toFile(outPath);
        } else {
          // No metadata: use resize by percentage via the density option if it's SVG; for raster fallback to doubling
          await img
            .resize({ width: Math.round((meta.width || 100) * t.factor) })
            .toFile(outPath);
        }

        console.log('Generated', outName);
        generated++;
      }
    } catch (err) {
      console.error('Error processing', fileName, err.message || err);
    }
  }

  console.log('\nDone. Generated', generated, 'files.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
