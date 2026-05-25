const sharp = require('sharp');

async function main() {
  const { data, info } = await sharp('public/logo.png').raw().toBuffer({ resolveWithObject: true });
  // Sample a pixel from the top-left corner
  console.log('Top left pixel:', data[0], data[1], data[2], data[3]);
  // Sample a pixel from 10,10
  const idx = (10 * info.width + 10) * info.channels;
  console.log('Pixel at 10,10:', data[idx], data[idx+1], data[idx+2], data[idx+3]);
}

main().catch(console.error);
