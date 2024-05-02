const { chromium } = require('playwright');
const crypto = require('crypto');

function getRandomString(prefix) {
    return `${prefix}${crypto.randomBytes(3).toString('hex')}`;
}

function generateStrongPassword() {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digits = "0123456789";
    const specialChars = "!@#$%^&*()_+-=[]{}|;:',.<>?";
    return crypto.randomBytes(3).toString('hex') +
        lowerCase[Math.floor(Math.random() * lowerCase.length)] +
        upperCase[Math.floor(Math.random() * upperCase.length)] +
        digits[Math.floor(Math.random() * digits.length)] +
        specialChars[Math.floor(Math.random() * specialChars.length)];
}

(async () => {
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
    await page.screenshot({ path: 'C:\\Users\\Admin\\Desktop\\MagentoTest\\tests\\reports\\screenshots\\signUpTest.png' });
    await browser.close();
})();
