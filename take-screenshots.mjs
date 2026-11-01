import puppeteer from 'puppeteer';

async function capture() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 }); // Formato iPhone/Android

  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });

  // 1. Tela 1: Leitor Print
  await page.screenshot({ path: 'C:/Users/dossa/.gemini/antigravity/brain/ad313f07-4f81-4471-be51-4e4940bdd849/tela_1_leitor.png' });

  // 2. Tela 2: Simulador
  const tabs = await page.$$('.nav-tab-btn');
  if (tabs[1]) {
    await tabs[1].click();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: 'C:/Users/dossa/.gemini/antigravity/brain/ad313f07-4f81-4471-be51-4e4940bdd849/tela_2_simulador.png' });
  }

  // 3. Tela 3: Diário de Rotas
  if (tabs[2]) {
    await tabs[2].click();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: 'C:/Users/dossa/.gemini/antigravity/brain/ad313f07-4f81-4471-be51-4e4940bdd849/tela_3_diario.png' });
  }

  await browser.close();
  console.log('Todas as telas capturadas com sucesso!');
}

capture();
