import { chromium } from 'playwright';
import { expect } from 'chai';

describe('Home Page Test', function() {
    this.timeout(100000);
    it('should open the homepage and take a screenshot', async function() {
        const browser = await chromium.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto('https://magento.softwaretestingboard.com/');
        const title = await page.title();
        await page.screenshot({ path: 'C:\\Users\\Admin\\Desktop\\MagentoTest\\reports\\screenshots\\homePageTest.png' });
        await browser.close();
    });
});
