
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('Q1 - Invalid Login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login('invalid@example.com', 'WrongPassword123');

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(page).toHaveURL(/login/);
});
