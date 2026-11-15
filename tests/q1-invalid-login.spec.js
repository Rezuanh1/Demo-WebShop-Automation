
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('Q1 - Invalid Login', async ({ page }, testInfo) => {
    const loginPage = new LoginPage(page);

    await loginPage.openLoginPage();
    await loginPage.login('invaliduser@gmail.com', 'WrongPassword123');

    await expect(loginPage.errorMessage).toBeVisible();

    await expect(page.locator('.validation-summary-errors'))
        .toContainText('Login was unsuccessful');

    await expect(page.getByRole('link', { name: 'Log in' }))
        .toBeVisible();

    await expect(page.getByRole('link', { name: 'Log out' }))
        .toHaveCount(0);

    await testInfo.attach('Q1 Invalid Login Screenshot', {
        body: await page.screenshot({ fullPage: true }),
        contentType: 'image/png'
    });
});
