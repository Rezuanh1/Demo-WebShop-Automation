
class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.termsCheckbox = page.locator('#termsofservice');
        this.checkoutButton = page.locator('#checkout');
    }

    async acceptTerms() {
        await this.termsCheckbox.check();
        await this.checkoutButton.click();
    }
}

module.exports = CheckoutPage;
