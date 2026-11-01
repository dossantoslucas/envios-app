import { createWorker } from 'tesseract.js';
import fs from 'fs';

async function test() {
  const worker = await createWorker('por');
  const ret = await worker.recognize('C:/Users/dossa/.gemini/antigravity/brain/ad313f07-4f81-4471-be51-4e4940bdd849/.user_uploaded/media_1793398325924_ba10dc7c.png');
  console.log('--- RECOGNIZED TEXT ---');
  console.log(ret.data.text);
  console.log('--- END ---');
  await worker.terminate();
}

test();
