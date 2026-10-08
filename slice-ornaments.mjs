import sharp from 'sharp';

async function sliceOrnaments() {
  const input = 'C:/Users/Aidar/.gemini/antigravity/brain/b9da264a-a191-4512-8605-78ccdf02e216/.user_uploaded/media_1791447898929.png';

  // 1024 x 459
  // 4 rows: heights roughly 110px.
  const boxes = [
    { name: 'public/ornament-1.webp', left: 10, top: 10, width: 490, height: 95 },
    { name: 'public/ornament-2.webp', left: 10, top: 120, width: 490, height: 90 },
    { name: 'public/ornament-3.webp', left: 10, top: 230, width: 490, height: 95 },
    { name: 'public/ornament-4.webp', left: 10, top: 340, width: 490, height: 95 },

    { name: 'public/ornament-5.webp', left: 520, top: 10, width: 490, height: 95 },
    { name: 'public/ornament-6.webp', left: 520, top: 120, width: 490, height: 90 },
    { name: 'public/ornament-7.webp', left: 520, top: 230, width: 490, height: 95 },
    { name: 'public/ornament-8.webp', left: 520, top: 340, width: 490, height: 95 },
  ];

  for (const b of boxes) {
    await sharp(input)
      .extract({ left: b.left, top: b.top, width: b.width, height: b.height })
      .webp({ quality: 95 })
      .toFile(b.name);
    console.log(`Exported without trim: ${b.name}`);
  }
}

sliceOrnaments().catch(console.error);
