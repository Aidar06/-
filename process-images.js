import sharp from 'sharp';
import fs from 'fs';

async function removeBlackBackground(inputPath, outputPath, blackThreshold = 45) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // If pixel is blackish/very dark
    if (r < blackThreshold && g < blackThreshold && b < blackThreshold) {
      data[i + 3] = 0; // Alpha = 0 (Transparent)
    } else if (r < blackThreshold + 25 && g < blackThreshold + 25 && b < blackThreshold + 25) {
      // Feather/smooth edge
      const maxVal = Math.max(r, g, b);
      const alpha = Math.min(255, Math.max(0, Math.floor((maxVal - blackThreshold) * 10)));
      data[i + 3] = alpha;
    }
  }

  await sharp(data, { raw: { width, height, channels } })
    .png()
    .toFile(outputPath);

  console.log(`Processed black bg: ${outputPath}`);
}

async function removeWhiteBackground(inputPath, outputPath, whiteThreshold = 235) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // If pixel is whiteish
    if (r > whiteThreshold && g > whiteThreshold && b > whiteThreshold) {
      data[i + 3] = 0; // Alpha = 0 (Transparent)
    } else if (r > whiteThreshold - 25 && g > whiteThreshold - 25 && b > whiteThreshold - 25) {
      const minVal = Math.min(r, g, b);
      const alpha = Math.min(255, Math.max(0, Math.floor((whiteThreshold - minVal) * 10)));
      data[i + 3] = alpha;
    }
  }

  await sharp(data, { raw: { width, height, channels } })
    .png()
    .toFile(outputPath);

  console.log(`Processed white bg: ${outputPath}`);
}

async function run() {
  await removeBlackBackground('public/dariya-butterfly.jpg', 'public/dariya-butterfly.png');
  await removeBlackBackground('public/dariya-bear.jpg', 'public/dariya-bear.png');
  await removeWhiteBackground('public/dariya-lying.png', 'public/dariya-lying-trans.png');
  await removeWhiteBackground('public/dariya-running.png', 'public/dariya-running-trans.png');
  console.log('All 4 images processed to transparent PNGs successfully!');
}

run().catch(console.error);
