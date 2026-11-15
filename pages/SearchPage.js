
class SearchPage {
    constructor(page) {
        this.page = page;
        this.searchBox = page.locator('#small-searchterms');
        this.searchButton = page.locator('input.button-1.search-box-button');
        this.productLink = page.locator('a[href="/computing-and-internet"]');
    }

    async searchProduct(productName) {
        await this.searchBox.fill(productName);
        await this.searchButton.click();
    }

    async openProduct() {
        await this.productLink.last().click();
    }
}

module.exports = SearchPage;
