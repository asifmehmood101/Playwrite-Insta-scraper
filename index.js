const playwright = require('playwright');
const windowObject = this;

(async () => {
  const browser = await playwright.chromium.launch({
    headless: false, // Show the browser.
  });
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/becycleberlin/');
  await page.waitForTimeout(1000); // wait for 1 seconds
  await page.locator('button._acan._acao._acas').click();
  await page
    .getByPlaceholder('Email address or phone number')
    .fill('03237853566');
  await page.getByPlaceholder('Password').fill('bushylove4u1');
  await page.locator('button#loginbutton').click();
  const allInstagramData = [];
  const instagramProfile = {
    numberOfPost: await page
      .locator(
        'li:first-of-type ._aacl._aacp._aacu._aacx._aad6._aade span._ac2a span',
      )
      .textContent(),
    ProfileName: await page
      .locator('h2._aacl._aacs._aact._aacx._aada')
      .textContent(),
    numberOfFollower: await page
      .locator('._aacl._aacp._aacu._aacx._aad6._aade span[title]')
      .textContent(),
    numberOfFollowing: await page
      .locator(
        'li:last-of-type ._aacl._aacp._aacu._aacx._aad6._aade span._ac2a span',
      )
      .textContent(),
  };

  await page
    .locator('li:nth-of-type(2).xl565be.x2pgyrj.x1m39q7l.x1uw6ca5')
    .click();
  const listOfFollower = await page.locator('._aano div div', {
    has: page.locator(
      'a.x1i10hfl.xjbqb8w.x6umtig.x1b1mbwd.xaqea5y.xav7gou.x9f619.x1ypdohk.xt0psk2.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x16tdsg8.x1hl2dhg.xggy1nq.x1a2a7pz.notranslate._a6hd span._aacl._aaco._aacw._aacx._aad7._aade div',
    ),
  });
  allInstagramData.push(instagramProfile);
  console.log(listOfFollower);
  console.log(allInstagramData);
  //   await browser.close();
})();
