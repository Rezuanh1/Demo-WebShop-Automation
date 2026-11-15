
class CheckoutPage {
    constructor(page) {
        this.page = page;

        // Billing Address
        this.billingCity = page.locator('#BillingNewAddress_City');
        this.billingAddress = page.locator('#BillingNewAddress_Address1');
        this.billingZip = page.locator('#BillingNewAddress_ZipPostalCode');
        this.billingPhone = page.locator('#BillingNewAddress_PhoneNumber');
        this.billingCountry = page.locator('#BillingNewAddress_CountryId');

        this.billingContinue = page.locator(
            '#billing-buttons-container .new-address-next-step-button'
        );

        
        this.shippingContinue = page.locator(
            '#shipping-buttons-container .new-address-next-step-button'
        );

        
        this.shippingMethodContinue = page.locator(
            '#shipping-method-buttons-container .shipping-method-next-step-button'
        );

       
        this.paymentMethodContinue = page.locator(
            '#payment-method-buttons-container .payment-method-next-step-button'
        );

        
        this.paymentInfoContinue = page.locator(
            '#payment-info-buttons-container .payment-info-next-step-button'
        );

      
        this.confirmOrderButton = page.locator(
            '#confirm-order-buttons-container .confirm-order-next-step-button'
        );
    }

    
    async fillBillingAddress() {
        if (await this.billingCity.isVisible()) {
            await this.billingCountry.selectOption('96');
            await this.billingCity.fill('Dhaka');
            await this.billingAddress.fill('Dhaka');
            await this.billingZip.fill('1207');
            await this.billingPhone.fill('01700000000');
        }

        await this.billingContinue.click();
    }

    
    async continueShipping() {
        await this.shippingContinue.click();
    }

    
    async continueShippingMethod() {
        await this.shippingMethodContinue.click();
    }

   
    async continuePaymentMethod() {
        await this.paymentMethodContinue.click();
    }

    
    async continuePaymentInfo() {
        await this.paymentInfoContinue.click();
    }

    
    async confirmOrder() {
        await this.confirmOrderButton.click();
    }

    
    async placeOrder() {
        await this.page.locator('input[name="termsofservice"]').check();
        await this.page.locator('button[name="checkout"]').click();
    }
}

module.exports = CheckoutPage;
