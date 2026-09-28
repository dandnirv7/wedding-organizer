import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve('src/assets/wedding');
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.png'));

if (files.length === 0) {
  console.log('No .png files found in src/assets/wedding.');
  process.exit(0);
}

console.log(`Optimizing ${files.length} images in ${dir}...`);
let totalOrig = 0;
let totalNew = 0;

for (const file of files) {
  const pngPath = path.join(dir, file);
  const webpName = file.replace(/\.png$/, '.webp');
  const webpPath = path.join(dir, webpName);

  const origStat = fs.statSync(pngPath);
  totalOrig += origStat.size;

  await sharp(pngPath)
    .webp({ quality: 85, effort: 6 })
    .toFile(webpPath);

  const newStat = fs.statSync(webpPath);
  totalNew += newStat.size;

  const pct = ((1 - newStat.size / origStat.size) * 100).toFixed(1);
  console.log(`✓ ${file} (${(origStat.size / 1024).toFixed(1)} KB) -> ${webpName} (${(newStat.size / 1024).toFixed(1)} KB) [-${pct}%]`);

  // Remove the uncompressed png
  fs.unlinkSync(pngPath);
}

const savedMb = ((totalOrig - totalNew) / 1024 / 1024).toFixed(2);
const totalPct = ((1 - totalNew / totalOrig) * 100).toFixed(1);
console.log(`\nDone! Total size reduced from ${(totalOrig / 1024 / 1024).toFixed(2)} MB to ${(totalNew / 1024 / 1024).toFixed(2)} MB (saved ${savedMb} MB, -${totalPct}%).`);
