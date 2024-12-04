import { BasePage } from '../../core/base/BasePage';

export class LoginPage extends BasePage {
    // Selectors
    private readonly usernameInput = '#username';
    private readonly passwordInput = '#password';
    private readonly loginButton = 'button[type="submit"]';
    private readonly errorMessage = '.error-message';

    async navigateToLogin(): Promise<void> {
        await this.navigate('/login');
    }

    async login(username: string, password: string): Promise<void> {
        await this.fill(this.usernameInput, username);
        await this.fill(this.passwordInput, password);
        await this.click(this.loginButton);
    }

    async getErrorMessage(): Promise<string | null> {
        await this.waitForElement(this.errorMessage);
        return await this.getText(this.errorMessage);
    }

    async isErrorDisplayed(): Promise<boolean> {
        return await this.isVisible(this.errorMessage);
    }
}
