
const { test, expect } = require('@playwright/test');
const ProductPage = require('../pages/ProductPage');
const CheckoutPage = require('../pages/CheckoutPage');

test('Q3 - Search Product and Complete Checkout', async ({ page }) => {

    const productPage = new ProductPage(page);
    const checkoutPage = new CheckoutPage(page);

    
    await page.goto('/');

    await page.getByRole('link', { name: 'Log in' }).click();

    await page.locator('#Email').fill('rrm1@gmail.com');
    await page.locator('#Password').fill('12345678');

    await page.locator('input.button-1.login-button').click();

    await expect(
        page.getByRole('link', { name: 'Log out' })
    ).toBeVisible();

   
    await productPage.searchProduct('Computing and Internet');

    await expect(
        page.locator('.product-item').first()
    ).toContainText('Computing and Internet');

    
    await productPage.openProduct();

    await expect(
        page.locator('.product-name')
    ).toContainText('Computing and Internet');

    
    await productPage.addToCart();

    
    await page.getByRole('link', {
        name: 'Shopping cart',
        exact: true
    }).click();

    
    await page.locator('.qty-input').fill('2');

    await page.locator('.update-cart-button').click();

    await expect(
        page.locator('.qty-input')
    ).toHaveValue('2');

   
    await checkoutPage.placeOrder();

    
    await checkoutPage.fillBillingAddress();

    
    await checkoutPage.continueShipping();

    
    await page.locator('#shippingoption_0').check();
    await checkoutPage.continueShippingMethod();

    
    await page.locator('#paymentmethod_0').check();
    await checkoutPage.continuePaymentMethod();

    
    await checkoutPage.continuePaymentInfo();

    
    await checkoutPage.confirmOrder();

    
    await expect(
        page.locator('.section.order-completed')
    ).toContainText('Your order has been successfully processed!');

   
    await page.getByRole('link', {
        name: 'Click here for order details.'
    }).click();

    await expect(
        page.locator('.order-details-page')
    ).toBeVisible();

});
