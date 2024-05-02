import { chromium } from 'playwright';
import { expect } from 'chai';

describe('Sign In Test', function() {
    this.timeout(100000);
    it('should sign in successfully and take a screenshot', async function() {
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
        const url = await page.url();
        await page.screenshot({ path: 'C:\\Users\\Admin\\Desktop\\MagentoTest\\reports\\screenshots\\signInTest.png' });
        await browser.close();
    });
});
