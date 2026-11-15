
const { test, expect } = require('@playwright/test');
const RegisterPage = require('../pages/RegisterPage');

test('Q2 - Register, Login and Add Product to Cart', async ({ page }, testInfo) => {
    const registerPage = new RegisterPage(page);

    const email = `rrm1${Date.now()}@gmail.com`;
    const password = '12345678';

    // Registration
    await registerPage.openRegisterPage();
    await registerPage.registerUser(
        'Rr',
        'Mm',
        email,
        password
    );

    await expect(registerPage.successMessage)
        .toContainText('Your registration completed');

    
    await page.getByRole('link', { name: 'Log out' }).click();

    
    const loginPage = require('../pages/LoginPage');
    const login = new loginPage(page);

    await login.openLoginPage();
    await login.login(email, password);

    await expect(page.getByRole('link', { name: 'Log out' }))
        .toBeVisible();

   
   await page.getByRole('link', { name: 'Books' }).first().click();

    
   await page.getByRole('link', {
    name: 'Computing and Internet',
    exact: true
}).click();

    
    await page.locator('#add-to-cart-button-13').click();

    
  await page.getByRole('link', {
    name: 'Shopping cart',
    exact: true
}).click();

    await expect(page.locator('.cart-item-row')).toContainText(
        'Computing and Internet'
    );

    await expect(page.locator('.qty-input')).toHaveValue('1');

    
    await testInfo.attach('Q2 Register Cart Screenshot', {
        body: await page.screenshot({ fullPage: true }),
        contentType: 'image/png'
    });
});
