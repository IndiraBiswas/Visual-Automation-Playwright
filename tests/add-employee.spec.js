import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();
test('Add Employee form UI validation', async ({ page }) => {
    await page.goto(process.env.BASE_URL);
    await page.waitForSelector('input[name="username"]');
    await page.fill('input[name="username"]', process.env.USERNAME);
    await page.fill('input[name="password"]', process.env.PASSWORD);
    await page.click('button[type="submit"]'); 

    await page.click('a[href="/web/index.php/pim/addEmployee#"]'); // Open Add Employee page
    expect(await page.screenshot()).toMatchSnapshot('add-employee-form.png');

    const randomFirstName = `TestUser${Math.floor(Math.random() * 10000)}`;
    const randomLastName = `Last${Math.floor(Math.random() * 10000)}`;
    await page.getByPlaceholder('First Name').fill(randomFirstName);
    await page.getByPlaceholder('Last Name').fill(randomLastName);
    
    await page.click('button[type="submit"]'); // Save Employee

    // Validate Employee Details Page
    expect(await page.screenshot()).toMatchSnapshot('employee-details-page.png');
});
