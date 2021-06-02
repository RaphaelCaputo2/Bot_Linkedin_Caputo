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
  await page.keyboard.press('Enter');
  await page.waitForSelector('input[placeholder="Pesquisar"]');
  await page.type('input[placeholder="Pesquisar"]', SEARCH);
  await page.keyboard.press('Enter');
  await page.waitForSelector('button[aria-label="Pessoas"]');
  await page.click('button[aria-label="Pessoas"]');

  let contador = 6;

for(let i = 0; i < 20; i++){
  contador += i
  const selector = await page.waitForSelector(
    ` #main > div > div > div:nth-child(2) > ul > li:nth-child(${contador}) > div > div > div.entity-result__content.entity-result__divider.pt3.pb3.t-12.t-black--light > div.mb1 > div > div.t-roman.t-sans > span > div > span.entity-result__title-line.flex-shrink-1.entity-result__title-text--black > span > a > span > span:nth-child(1)`,
  );
 if(!selector){
   return;
 }else{
  await page.click(
    ` #main > div > div > div:nth-child(2) > ul > li:nth-child(${contador}) > div > div > div.entity-result__content.entity-result__divider.pt3.pb3.t-12.t-black--light > div.mb1 > div > div.t-roman.t-sans > span > div > span.entity-result__title-line.flex-shrink-1.entity-result__title-text--black > span > a > span > span:nth-child(1)`,
  );
  await page.waitForSelector('button[data-control-name="connect"]');
  await page.click('button[data-control-name="connect"]');

  await page.waitForSelector('button[aria-label="Adicionar nota"]');
  await page.click('button[aria-label="Adicionar nota"]');

  await page.type('textarea[name="message"]', MESSAGE);
  await page.waitForSelector('button[aria-label="Enviar agora"]');
  await page.click('button[aria-label="Enviar agora"]');

  await page.waitForSelector('input[placeholder="Pesquisar"]');
  await page.type('input[placeholder="Pesquisar"]', SEARCH);
  await page.keyboard.press('Enter');
  await page.waitForSelector('button[aria-label="Pessoas"]');
  await page.click('button[aria-label="Pessoas"]');


 }



}
 
 

 // #main > div > div > div:nth-child(2) > ul > li:nth-child(2) > div > div > div.entity-result__content.entity-result__divider.pt3.pb3.t-12.t-black--light > div.mb1 > div > div.t-roman.t-sans > span > div > span.entity-result__title-line.flex-shrink-1.entity-result__title-text--black > span > a > span > span:nth-child(1)
  // #main > div > div > div:nth-child(2) > ul > li:nth-child(3) > div > div > div.entity-result__content.entity-result__divider.pt3.pb3.t-12.t-black--light > div.mb1 > div > div.t-roman.t-sans > span > div > span.entity-result__title-line.flex-shrink-1.entity-result__title-text--black > span > a > span > span:nth-child(1)
  // #main > div > div > div:nth-child(2) > ul > li:nth-child(4) > div > div > div.entity-result__content.entity-result__divider.pt3.pb3.t-12.t-black--light > div.mb1 > div > div.t-roman.t-sans > span > div > span.entity-result__title-line.flex-shrink-1.entity-result__title-text--black > span > a > span > span:nth-child(1)

    // for(let i = 0; i < 30; i++) {
    //   const contains = await page.waitForSelector('button[class="artdeco-button artdeco-button--2 artdeco-button--secondary ember-view"]');
    //   if(contains){
    //     console.log('Tem o botao conectar')
    //   }else{
    //     console.log('Nao tem o botao conectar')
    //   }



    // }





})();






// await page.waitForSelector('span:contains(Conectar)')

// await page.click('.pvs-profile-actions__action artdeco-button artdeco-button--2 artdeco-button--primary ember-view > span');
// await page.waitForSelector("")
// await page.click("//span[text(., 'Conectar')]")
// let contador = 0
// const buttonContent = '#content_area button'
// for(let i = 0; i < 5000; i++){
//   await page.select("#filter_sector", "41")
//   await page.waitFor(4000);
//   await page.click(buttonContent);
//   await page.mouse.down({clickCount: 10});
//   await page.click(buttonContent);

//     contador = contador + 1
//     console.log('Salvamos mais um cliente', contador)
//   }

{
  /* <button data-control-name="connect" aria-label="Conecte-se a Flavia Buarque" id="ember567" class="pvs-profile-actions__action artdeco-button artdeco-button--2 artdeco-button--primary ember-view" type="button">
<span class="">
    Conectar
</span></button>

main/div/section/div[2]/div[3]/div/button */
}
// await page.waitForSelector('.artdeco-button__text');
