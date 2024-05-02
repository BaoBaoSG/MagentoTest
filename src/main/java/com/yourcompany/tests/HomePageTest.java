package com.yourcompany.tests;

import com.microsoft.playwright.*;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;
import java.nio.file.Paths;

public class HomePageTest {

    @Test
    public void testHomePage() {
        try (Playwright playwright = Playwright.create()) {
            Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setHeadless(false));
            Page page = browser.newPage();
            page.navigate("https://magento.softwaretestingboard.com/");
            // Lấy tiêu đề trang và kiểm tra
            String title = page.title();
            Assertions.assertTrue(title.contains("Home Page"), "Page title should contain 'Home Page'");
            // Lưu ảnh chụp màn hình vào thư mục screenshots
            page.screenshot(new Page.ScreenshotOptions().setPath(Paths.get("screenshotjavatest/homepageTest.png")));
            browser.close();
        } catch (Exception e) {
            e.printStackTrace();
            Assertions.fail("Test failed with an exception: " + e.getMessage());
        }
    }
}
