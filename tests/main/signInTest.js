const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://magento.softwaretestingboard.com/');
    await page.click('text="Sign In"');
    await page.fill('input[name="login[username]"]', 'baotestexample@gmail.com');
    await page.fill('input[name="login[password]"]', 'Bao123456aA@');
    await Promise.all([
        page.waitForNavigation(),
        page.click('button[type="submit"].action.login.primary')
    ]);
    await page.screenshot({ path: 'C:\\Users\\Admin\\Desktop\\MagentoTest\\tests\\reports\\screenshots\\signInTest.png' });
    await browser.close();
})();
