package com.yourcompany.tests;

import com.microsoft.playwright.*;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;
import java.nio.file.Paths;

public class SignInTest {

    @Test
    public void testSignIn() {
        try (Playwright playwright = Playwright.create()) {
            Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setHeadless(false));
            Page page = browser.newPage();
            page.navigate("https://magento.softwaretestingboard.com/");
            page.click("text='Sign In'");
            page.fill("input[name='login[username]']", "baotestexample@gmail.com");
            page.fill("input[name='login[password]']", "Bao123456aA@");
            // Sử dụng Promise.all tương đương trong Java, sử dụng waitForNavigation() cùng
            // với click()
            page.waitForNavigation(() -> {
                page.click("button[type='submit'].action.login.primary");
            });
            System.out.println("Sign In Successful");
            page.screenshot(new Page.ScreenshotOptions().setPath(Paths.get("screenshotjavatest/SignInTest.png")));
            browser.close();
        } catch (Exception e) {
            e.printStackTrace();
            Assertions.fail("Test failed with an exception: " + e.getMessage());
        }
    }
}
