import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();
test('Employee List page UI validation', async ({ page }) => {
    await page.goto(process.env.BASE_URL);
    await page.waitForSelector('input[name="username"]');
    await page.fill('input[name="username"]', process.env.USERNAME);
    await page.fill('input[name="password"]', process.env.PASSWORD);
    await page.click('button[type="submit"]'); 


    await page.click('a[href="/web/index.php/pim/viewPimModule"]'); // Navigate to Employee List
    await page.getByPlaceholder('Type for hints...').fill('Joy Smith');  // Search for an employee
    await page.click('button[name="search"]');

    // Compare screenshot with baseline
    expect(await page.screenshot()).toMatchSnapshot('employee-search-results.png');
});
