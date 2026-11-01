import { createWorker } from 'tesseract.js';

async function testHeader() {
  const worker = await createWorker('por');
  const ret = await worker.recognize('C:/Users/dossa/.gemini/antigravity/scratch/envios-extra-calculator/header.png');
  console.log('--- HEADER TEXT ---');
  console.log(ret.data.text);
  console.log('--- END ---');
  await worker.terminate();
}

testHeader();
