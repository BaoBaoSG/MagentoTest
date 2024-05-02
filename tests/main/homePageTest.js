const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://magento.softwaretestingboard.com/');
    await page.screenshot({ path: 'C:\\Users\\Admin\\Desktop\\MagentoTest\\tests\\reports\\screenshots\\homePageTest.png' });
    await browser.close();
})();
