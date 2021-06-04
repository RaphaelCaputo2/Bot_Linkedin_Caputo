const puppeters = require('puppeteer');
const { EMAIL, PASSWORD, SEARCH, MESSAGE } = require('./login');
(async () => {
  const browser = await puppeters.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1396,
    height: 878,
    deviceScaleFactor: 1,
  });
  await page.goto('https://www.linkedin.com/home');
  await page.waitForSelector('input[name="session_key"]');
  await page.type('input[name="session_key"]', EMAIL);
  await page.type('input[name="session_password"]', PASSWORD);
  await page.keyboard.press('Enter', { delay: 4000 });
  await page.waitForSelector('input[placeholder="Pesquisar"]');
  await page.type('input[placeholder="Pesquisar"]', SEARCH);
  await page.keyboard.press('Enter');
  await page.waitForSelector('button[aria-label="Pessoas"]');
  await page.click('button[aria-label="Pessoas"]');

  let contador = 1;

 
  console.log(contador)
  for (let i = 0; i < 50; i++) {
    contador += 1;
    console.log('Vamos começar a adicionar')
   if(contador <= 10){
     try{
       const selector = await page.waitForSelector(
      ` #main > div > div > div:nth-child(2) > ul > li:nth-child(${contador}) > div > div > div.entity-result__content.entity-result__divider.pt3.pb3.t-12.t-black--light > div.mb1 > div > div.t-roman.t-sans > span > div > span.entity-result__title-line.flex-shrink-1.entity-result__title-text--black > span > a > span > span:nth-child(1)`,
      );
      
      if (!selector) {
        return;
      }
      
      await page.click(
        ` #main > div > div > div:nth-child(2) > ul > li:nth-child(${contador}) > div > div > div.entity-result__content.entity-result__divider.pt3.pb3.t-12.t-black--light > div.mb1 > div > div.t-roman.t-sans > span > div > span.entity-result__title-line.flex-shrink-1.entity-result__title-text--black > span > a > span > span:nth-child(1)`,
        );
       
        await page.waitForSelector('button[data-control-name="connect"]');
        await page.click('button[data-control-name="connect"]');
        
        await page.waitForSelector('button[aria-label="Adicionar nota"]')
        await page.click('button[aria-label="Adicionar nota"]');
        
        await page.type('textarea[name="message"]', MESSAGE);
        await page.waitForSelector('button[aria-label="Enviar agora"]');
        await page.click('button[aria-label="Enviar agora"]');
        await page.waitForSelector('input[placeholder="Pesquisar"]');
        await page.type('input[placeholder="Pesquisar"]', SEARCH);
        await page.keyboard.press('Enter');
        await page.waitForSelector('button[aria-label="Pessoas"]');
        await page.click('button[aria-label="Pessoas"]'); 
      }catch{
        await page.waitForSelector('input[placeholder="Pesquisar"]');
        await page.type('input[placeholder="Pesquisar"]', SEARCH);
        await page.keyboard.press('Enter');
        await page.waitForSelector('button[aria-label="Pessoas"]');
        await page.click('button[aria-label="Pessoas"]');
        
      }
      console.log('O primeiro acabou, vamos de novo!')
    }else if(contador >= 11 && contador < 20 ) {
      for(let j = 1; j <= 10; j++){
      await page.keyboard.press("PageDown");
          try{
            await page.waitForSelector('button[aria-label="Avançar"]')
            await page.click('button[aria-label="Avançar"]');
           
            await page.waitForSelector(
              `#main > div > div > div.ph0.pv2.artdeco-card.mb2 > ul > li:nth-child(${j}) > div > div > div.entity-result__content.entity-result__divider.pt3.pb3.t-12.t-black--light > div.mb1 > div > div.t-roman.t-sans > span > div > span.entity-result__title-line.flex-shrink-1.entity-result__title-text--black > span > a > span > span:nth-child(1)`,
              );
            
              await page.click(
                `#main > div > div > div.ph0.pv2.artdeco-card.mb2 > ul > li:nth-child(${j}) > div > div > div.entity-result__content.entity-result__divider.pt3.pb3.t-12.t-black--light > div.mb1 > div > div.t-roman.t-sans > span > div > span.entity-result__title-line.flex-shrink-1.entity-result__title-text--black > span > a > span > span:nth-child(1)`,
                );
               
                await page.waitForSelector('button[data-control-name="connect"]');
                await page.click('button[data-control-name="connect"]');
                
                await page.waitForSelector('button[aria-label="Adicionar nota"]')
                await page.click('button[aria-label="Adicionar nota"]');
                
                await page.type('textarea[name="message"]', MESSAGE);
                await page.waitForSelector('button[aria-label="Enviar agora"]');
                await page.click('button[aria-label="Enviar agora"]');
                await page.waitForSelector('input[placeholder="Pesquisar"]');
                await page.type('input[placeholder="Pesquisar"]', SEARCH);
                await page.keyboard.press('Enter');
                await page.waitForSelector('button[aria-label="Pessoas"]');
                await page.click('button[aria-label="Pessoas"]');
              }catch{
                await page.waitForSelector('input[placeholder="Pesquisar"]');
                
                await page.keyboard.press('Enter');
                await page.waitForSelector('button[aria-label="Pessoas"]');
                await page.click('button[aria-label="Pessoas"]');

                await page.keyboard.press("PageDown");

                await page.waitForSelector('button[aria-label="Avançar"]')
                await page.click('button[aria-label="Avançar"]');

              } 
          }
          
          
          
        
    }else if(contador >= 20 && contador < 30 ) {
      for(let k = 1; k <= 10; k++){
      await page.keyboard.press("PageDown");

          try{
            await page.waitForSelector('button[aria-label="Avançar"]')
            await page.click('button[aria-label="Avançar"]');

      await page.keyboard.press("PageDown");
      await page.waitForSelector('button[aria-label="Avançar"]')
      await page.click('button[aria-label="Avançar"]');

      await page.waitForSelector(
        `#main > div > div > div.ph0.pv2.artdeco-card.mb2 > ul > li:nth-child(${k}) > div > div > div.entity-result__content.entity-result__divider.pt3.pb3.t-12.t-black--light > div.mb1 > div > div.t-roman.t-sans > span > div > span.entity-result__title-line.flex-shrink-1.entity-result__title-text--black > span > a > span > span:nth-child(1)`,
        );
      
        await page.click(
          `#main > div > div > div.ph0.pv2.artdeco-card.mb2 > ul > li:nth-child(${k}) > div > div > div.entity-result__content.entity-result__divider.pt3.pb3.t-12.t-black--light > div.mb1 > div > div.t-roman.t-sans > span > div > span.entity-result__title-line.flex-shrink-1.entity-result__title-text--black > span > a > span > span:nth-child(1)`,
          );
         
          await page.waitForSelector('button[data-control-name="connect"]');
          await page.click('button[data-control-name="connect"]');
          
          await page.waitForSelector('button[aria-label="Adicionar nota"]')
          await page.click('button[aria-label="Adicionar nota"]');
          
          await page.type('textarea[name="message"]', MESSAGE);
          await page.waitForSelector('button[aria-label="Enviar agora"]');
          await page.click('button[aria-label="Enviar agora"]');
          await page.waitForSelector('input[placeholder="Pesquisar"]');
          await page.type('input[placeholder="Pesquisar"]', SEARCH);
        
          await page.keyboard.press('Enter');
          await page.waitForSelector('button[aria-label="Pessoas"]');
          await page.click('button[aria-label="Pessoas"]');


          }catch{
            await page.waitForSelector('input[placeholder="Pesquisar"]');
          await page.type('input[placeholder="Pesquisar"]', SEARCH);
        
          await page.keyboard.press('Enter');
          await page.waitForSelector('button[aria-label="Pessoas"]');
          await page.click('button[aria-label="Pessoas"]');    
          }

      }



    }
    }
})();

