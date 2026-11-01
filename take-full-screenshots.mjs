import puppeteer from 'puppeteer';

async function captureFull() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 400, height: 850, deviceScaleFactor: 2 });

  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });

  // 1. Tela 1 completa
  await page.screenshot({ 
    path: 'C:/Users/dossa/.gemini/antigravity/brain/ad313f07-4f81-4471-be51-4e4940bdd849/tela_1_completa.png',
    fullPage: true 
  });

  const tabs = await page.$$('.nav-tab-btn');

  // 2. Tela 2 completa (Simulador)
  if (tabs[1]) {
    await tabs[1].click();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ 
      path: 'C:/Users/dossa/.gemini/antigravity/brain/ad313f07-4f81-4471-be51-4e4940bdd849/tela_2_completa.png',
      fullPage: true 
    });
  }

  // 3. Tela 3 completa (Diário de Rotas)
  if (tabs[2]) {
    await tabs[2].click();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ 
      path: 'C:/Users/dossa/.gemini/antigravity/brain/ad313f07-4f81-4471-be51-4e4940bdd849/tela_3_completa.png',
      fullPage: true 
    });
  }

  await browser.close();
  console.log('Capturas fullPage concluídas!');
}

captureFull();
