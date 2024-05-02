package com.yourcompany.tests;

import com.microsoft.playwright.*;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;
import java.nio.file.Paths;
import java.security.SecureRandom;

public class SignUpTest {

    // Hàm tạo email ngẫu nhiên
    private static String getRandomEmail(String prefix) {
        SecureRandom random = new SecureRandom();
        return prefix + random.nextInt(1000000) + "@example.com";
    }

    // Hàm tạo mật khẩu mạnh
    private static String generateStrongPassword() {
        String chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:',.<>?";
        SecureRandom random = new SecureRandom();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 12; i++) { // tạo mật khẩu dài 12 ký tự
            int randomIndex = random.nextInt(chars.length());
            sb.append(chars.charAt(randomIndex));
        }
        return sb.toString();
    }

    @Test
    public void testSignUp() {
        try (Playwright playwright = Playwright.create()) {
            Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setHeadless(false));
            Page page = browser.newPage();
            page.navigate("https://magento.softwaretestingboard.com/");
            page.click("text='Create an Account'");
            String randomEmail = getRandomEmail("user");
            String password = generateStrongPassword();

            page.fill("input[name='firstname']", "Tran");
            page.fill("input[name='lastname']", "Bao");
            page.fill("input[name='email']", randomEmail);
            page.fill("input[name='password']", password);
            page.fill("input[name='password_confirmation']", password);

            page.click("button[type='submit']:has-text('Create an Account')");
            page.waitForSelector("text='Thank you for registering with Main Website Store.'");
            System.out.println("Account Created for: " + randomEmail);

            page.screenshot(new Page.ScreenshotOptions().setPath(Paths.get("screenshotjavatest/SignUpTest.png")));
            browser.close();
        } catch (Exception e) {
            e.printStackTrace();
            Assertions.fail("Test failed with an exception: " + e.getMessage());
        }
    }
}
