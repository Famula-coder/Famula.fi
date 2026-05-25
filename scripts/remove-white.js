const sharp = require('sharp');
const fs = require('fs');

async function processImage(filename) {
  if (!fs.existsSync(filename)) {
    console.log(`File not found: ${filename}`);
    return;
  }
  
  console.log(`Processing ${filename}...`);
  const { data, info } = await sharp(filename).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  
  for (let i = 0; i < data.length; i += info.channels) {
    const r = data[i];
    const g = data[i+1];
    const b = data[i+2];
    
    // If pixel is very close to white, make it transparent
    if (r > 240 && g > 240 && b > 240) {
      data[i+3] = 0; // Alpha channel
    }
  }
  
  const outputName = filename.replace('.png', '_tmp.png');
  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: info.channels
    }
  }).png().toFile(outputName);
  
  // Replace original
  fs.renameSync(outputName, filename);
  console.log(`Done processing ${filename}`);
}

async function main() {
  await processImage('public/Famulasydan.png');
  await processImage('public/logo.png');
  await processImage('public/favicon.png');
}

main().catch(console.error);
