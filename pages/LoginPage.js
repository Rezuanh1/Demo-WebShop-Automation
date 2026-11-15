
class LoginPage {
    constructor(page) {
        this.page = page;

        this.loginLink = page.getByRole('link', { name: 'Log in' });
        this.emailInput = page.locator('#Email');
        this.passwordInput = page.locator('#Password');
        this.loginButton = page.locator('input.button-1.login-button');
        this.errorMessage = page.locator('.validation-summary-errors');
    }

    async openLoginPage() {
        await this.page.goto('/');
        await this.loginLink.click();
    }

    async login(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}

module.exports = LoginPage;
