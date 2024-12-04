import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/business/pages/LoginPage';
import { User } from '../../src/models/UserModel';
import { BrowserHelper } from '../../src/core/helpers/browser.helper';

test.describe('Login Functionality', () => {
    let loginPage: LoginPage;

    test.beforeAll(async () => {
        await BrowserHelper.initBrowser();
        await BrowserHelper.createContext();
        await BrowserHelper.newPage();
    });

    test.beforeEach(async () => {
        loginPage = new LoginPage();
        await loginPage.navigateToLogin();
    });

    test.afterAll(async () => {
        await BrowserHelper.closeBrowser();
    });

    test('should login successfully with valid credentials', async () => {
        const user = User.createDefaultUser();
        await loginPage.login(user.username, user.password);
    });

    test('should show error message with invalid credentials', async () => {
        await loginPage.login('invalid_user', 'invalid_password');
        expect(await loginPage.isErrorDisplayed()).toBeTruthy();
    });
});
