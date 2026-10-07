import sharp from 'sharp';

// BFS Flood-Fill Background Removal Algorithm
// Only removes dark pixels connected to the image boundaries, leaving inner features (eyes, crown, eyelashes) 100% untouched!
async function removeExteriorBlackBG(inputPath, outputPath, blackThreshold = 55) {
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const width = metadata.width;
  const height = metadata.height;

  const { data } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const visited = new Uint8Array(width * height);
  const queue = [];

  // Helper to get index
  const getIdx = (x, y) => (y * width + x) * 4;

  const isDark = (x, y) => {
    const idx = getIdx(x, y);
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    return r < blackThreshold && g < blackThreshold && b < blackThreshold;
  };

  // Seed all border pixels that are dark
  for (let x = 0; x < width; x++) {
    if (isDark(x, 0)) { queue.push(x, 0); visited[0 * width + x] = 1; }
    if (isDark(x, height - 1)) { queue.push(x, height - 1); visited[(height - 1) * width + x] = 1; }
  }
  for (let y = 0; y < height; y++) {
    if (isDark(0, y)) { queue.push(0, y); visited[y * width + 0] = 1; }
    if (isDark(width - 1, y)) { queue.push(width - 1, y); visited[y * width + (width - 1)] = 1; }
  }

  // BFS Traversal
  let head = 0;
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  while (head < queue.length) {
    const cx = queue[head++];
    const cy = queue[head++];
    const cIdx = getIdx(cx, cy);

    // Make exterior background pixel transparent
    data[cIdx + 3] = 0;

    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const vIdx = ny * width + nx;
        if (!visited[vIdx] && isDark(nx, ny)) {
          visited[vIdx] = 1;
          queue.push(nx, ny);
        }
      }
    }
  }

  // Convert to highly optimized WebP format
  await sharp(data, { raw: { width, height, channels: 4 } })
    .webp({ quality: 85, compressionLevel: 6 })
    .toFile(outputPath);

  console.log(`Successfully generated clean WebP: ${outputPath}`);
}

// Flood Fill for White Background
async function removeExteriorWhiteBG(inputPath, outputPath, whiteThreshold = 225) {
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const width = metadata.width;
  const height = metadata.height;

  const { data } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const visited = new Uint8Array(width * height);
  const queue = [];

  const getIdx = (x, y) => (y * width + x) * 4;

  const isWhite = (x, y) => {
    const idx = getIdx(x, y);
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    return r > whiteThreshold && g > whiteThreshold && b > whiteThreshold;
  };

  for (let x = 0; x < width; x++) {
    if (isWhite(x, 0)) { queue.push(x, 0); visited[0 * width + x] = 1; }
    if (isWhite(x, height - 1)) { queue.push(x, height - 1); visited[(height - 1) * width + x] = 1; }
  }
  for (let y = 0; y < height; y++) {
    if (isWhite(0, y)) { queue.push(0, y); visited[y * width + 0] = 1; }
    if (isWhite(width - 1, y)) { queue.push(width - 1, y); visited[y * width + (width - 1)] = 1; }
  }

  let head = 0;
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  while (head < queue.length) {
    const cx = queue[head++];
    const cy = queue[head++];
    const cIdx = getIdx(cx, cy);

    data[cIdx + 3] = 0;

    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const vIdx = ny * width + nx;
        if (!visited[vIdx] && isWhite(nx, ny)) {
          visited[vIdx] = 1;
          queue.push(nx, ny);
        }
      }
    }
  }

  await sharp(data, { raw: { width, height, channels: 4 } })
    .webp({ quality: 85, compressionLevel: 6 })
    .toFile(outputPath);

  console.log(`Successfully generated clean WebP: ${outputPath}`);
}

async function run() {
  console.log('Processing images with Flood-Fill algorithm and WebP compression...');
  await removeExteriorBlackBG('public/dariya-butterfly.jpg', 'public/dariya-butterfly.webp');
  await removeExteriorBlackBG('public/dariya-bear.jpg', 'public/dariya-bear.webp');
  await removeExteriorWhiteBG('public/dariya-lying.png', 'public/dariya-lying.webp');
  await removeExteriorWhiteBG('public/dariya-running.png', 'public/dariya-running.webp');
  console.log('All 4 images processed cleanly into WebP format!');
}

run().catch(console.error);
