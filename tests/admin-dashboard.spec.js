import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test('Admin Dashboard should match baseline', async ({ page }) => {
    await page.goto(process.env.BASE_URL);
    await page.waitForSelector('input[name="username"]');
    await page.fill('input[name="username"]', process.env.USERNAME);
    await page.fill('input[name="password"]', process.env.PASSWORD);
    await page.click('button[type="submit"]'); 


    // Increase the timeout for waiting for the dashboard to load
    await page.waitForLoadState('networkidle'); // Waits until no network requests are pending

    // Compare screenshot with baseline
    const screenshot = await page.screenshot();
    expect(screenshot).toMatchSnapshot('admin-dashboard.png');
});
