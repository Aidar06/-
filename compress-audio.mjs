import { execSync } from 'child_process';
import { createRequire } from 'module';
import fs from 'fs';

const require = createRequire(import.meta.url);
const ffmpegPath = require('ffmpeg-static');

const inputFile = 'public/music.mp3';
const outputFile = 'public/music-optimized.mp3';

const beforeSize = fs.statSync(inputFile).size;
console.log(`Original: ${(beforeSize / 1024 / 1024).toFixed(2)} MB`);

// VBR V4 = ~165kbps average, best quality/size ratio without perceptible loss
const cmd = `"${ffmpegPath}" -i "${inputFile}" -c:a libmp3lame -q:a 4 -y "${outputFile}"`;
console.log('Compressing...');
execSync(cmd, { stdio: 'inherit' });

const afterSize = fs.statSync(outputFile).size;
const savings = (((beforeSize - afterSize) / beforeSize) * 100).toFixed(1);
console.log(`Compressed: ${(afterSize / 1024 / 1024).toFixed(2)} MB`);
console.log(`Savings: ${savings}%`);

// Replace original with optimized version
fs.renameSync(outputFile, inputFile);
console.log('Done! music.mp3 replaced with optimized version.');
