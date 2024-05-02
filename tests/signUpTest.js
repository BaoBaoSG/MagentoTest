import { chromium } from 'playwright';
import { expect } from 'chai';
import { randomBytes } from 'crypto';

// Hàm tạo ký tự ngẫu nhiên
function getRandomString(prefix) {
    return `${prefix}${randomBytes(3).toString('hex')}`;
}

// Hàm validate password của magento
function generateStrongPassword() {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digits = "0123456789";
    const specialChars = "!@#$%^&*()_+-=[]{}|;:',.<>?";
    return randomBytes(3).toString('hex') +
        lowerCase[Math.floor(Math.random() * lowerCase.length)] +
        upperCase[Math.floor(Math.random() * upperCase.length)] +
        digits[Math.floor(Math.random() * digits.length)] +
        specialChars[Math.floor(Math.random() * specialChars.length)];
}

describe('Sign Up Test', function() {
    this.timeout(100000);
    it('should sign up successfully and take a screenshot', async function() {
        const browser = await chromium.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto('https://magento.softwaretestingboard.com/');
        await page.click('text="Create an Account"');

        const username = getRandomString('user');
        const password = generateStrongPassword();

        await page.fill('input[name="firstname"]', 'Tran');
        await page.fill('input[name="lastname"]', 'Bao');
        await page.fill('input[name="email"]', `${username}@example.com`);
        await page.fill('input[name="password"]', password);
        await page.fill('input[name="password_confirmation"]', password);
        await page.click('button.submit.primary[type="submit"]:has-text("Create an Account")');
        const element = await page.waitForSelector('text="Thank you for registering with Main Website Store."');
        expect(await element.isVisible()).to.be.true;
        await page.screenshot({ path: 'C:\\Users\\Admin\\Desktop\\MagentoTest\\reports\\screenshots\\signUpTest.png' });
        await browser.close();
    });
});
