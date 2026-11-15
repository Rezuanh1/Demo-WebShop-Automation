
class RegisterPage {
    constructor(page) {
        this.page = page;

        this.registerLink = page.getByRole('link', { name: 'Register' });
        this.genderMale = page.locator('#gender-male');
        this.firstName = page.locator('#FirstName');
        this.lastName = page.locator('#LastName');
        this.email = page.locator('#Email');
        this.password = page.locator('#Password');
        this.confirmPassword = page.locator('#ConfirmPassword');
        this.registerButton = page.locator('#register-button');
        this.successMessage = page.locator('.result');
    }

    async openRegisterPage() {
        await this.page.goto('/');
        await this.registerLink.click();
    }

    async registerUser(firstName, lastName, email, password) {
        await this.genderMale.check();
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.email.fill(email);
        await this.password.fill(password);
        await this.confirmPassword.fill(password);
        await this.registerButton.click();
    }
}

module.exports = RegisterPage;
