
const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
        this.email = page.locator('#Email');
        this.password = page.locator('#Password');
        this.loginButton = page.locator('.login-button');
        this.errorMessage = page.locator('.message-error');
    }

    async open() {
        await this.page.goto('https://demowebshop.tricentis.com/login');
    }

    async login(email, password) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}

module.exports = LoginPage;
