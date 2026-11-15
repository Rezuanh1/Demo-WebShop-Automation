
const { test, expect } = require('@playwright/test');
const RegisterPage = require('../pages/RegisterPage');
const LoginPage = require('../pages/LoginPage');

test('Q2 - Register, Login and Add Product to Cart', async ({ page }) => {

    // 1. Open website
    await page.goto('https://demowebshop.tricentis.com/');

    // 2. Registration
    await page.getByRole('link', { name: 'Register' }).click();

    const registerPage = new RegisterPage(page);

    const user = {
        firstName: 'Rr',
        lastName: 'Mm',
        email: `rrm1${Date.now()}@gmail.com`,
        password: 'Test@12345'
    };

    await registerPage.registerUser(user);

    // 3. Verify registration
    await expect(page.locator('.result'))
        .toContainText('Your registration completed');

    // 4. Logout
    await page.getByRole('link', { name: 'Log out' }).click();

    // 5. Login
    await page.getByRole('link', { name: 'Log in' }).click();

    const loginPage = new LoginPage(page);
    await loginPage.login(user.email, user.password);

    // 6. Verify login
    await expect(
        page.getByRole('link', { name: 'Log out' })
    ).toBeVisible();

    // 7. Open Books category
    await page.getByRole('link', { name: 'Books' }).first().click();

    // 8. Open Computing and Internet
    await page.locator('a[href="/computing-and-internet"]').last().click();

    // 9. Add product to cart
    await page.locator('#add-to-cart-button-13').click();

    // 10. Verify notification
    await expect(page.locator('.bar-notification'))
        .toContainText('The product has been added');

    // 11. Open Shopping Cart
    await page.locator('a.ico-cart').last().click();

    // Verify product in cart
await expect(page.locator('tr.cart-item-row'))
    .toContainText('Computing and Internet');

// Verify quantity
await expect(page.locator('.qty-input'))
    .toHaveValue('1');

});
