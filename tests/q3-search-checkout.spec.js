
const { test, expect } = require('@playwright/test');
const SearchPage = require('../pages/SearchPage');
const LoginPage = require('../pages/LoginPage');

test('Q3 - Search Product and Complete Checkout', async ({ page }) => {

    // 1. Open website
    await page.goto('https://demowebshop.tricentis.com/');

    // 2. Login
    await page.getByRole('link', { name: 'Log in' }).click();

    const loginPage = new LoginPage(page);
    await loginPage.login('rrm1@gmail.com', 'Test@1234');

    // 3. Search product
    const searchPage = new SearchPage(page);
    await searchPage.searchProduct('Computing and Internet');

    // 4. Verify search result
    await expect(
    page.locator('.product-item').filter({
        hasText: 'Computing and Internet'
    }).first()
).toBeVisible();

    // 5. Open product
    await searchPage.openProduct();

    // 6. Increase quantity to 2
    await page.locator('#product-details-form .qty-input')
        .fill('2');

    // 7. Add product to cart
    await page.locator('#add-to-cart-button-13').click();

    // 8. Open Shopping Cart
    await page.locator('a.ico-cart').last().click();

    // 9. Verify product and quantity
    await expect(page.locator('tr.cart-item-row'))
        .toContainText('Computing and Internet');

    await expect(page.locator('tr.cart-item-row .qty-input'))
        .toHaveValue('2');

});
