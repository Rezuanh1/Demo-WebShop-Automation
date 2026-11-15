
class ProductPage {
    constructor(page) {
        this.page = page;

        this.searchBox = page.locator('#small-searchterms');
        this.searchButton = page.locator('input.button-1.search-box-button');

        this.productLink = page.getByRole('link', {
            name: 'Computing and Internet',
            exact: true
        });

 this.addToCartButton = page.locator('#add-to-cart-button-13');
    }

    async searchProduct(productName) {
        await this.searchBox.fill(productName);
        await this.searchButton.click();
    }

    async openProduct() {
        await this.productLink.click();
    }

    async addToCart() {
        await this.addToCartButton.click();
    }
}

module.exports = ProductPage;
