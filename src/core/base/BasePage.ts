import { Page } from '@playwright/test';
import { BrowserHelper } from '../helpers/browser.helper';

export class BasePage {
    protected page: Page;

    constructor() {
        this.page = BrowserHelper.getPage();
    }

    async navigate(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async waitForElement(selector: string, timeout?: number): Promise<void> {
        await this.page.waitForSelector(selector, { state: 'visible', timeout });
    }

    async click(selector: string): Promise<void> {
        await this.page.click(selector);
    }

    async fill(selector: string, value: string): Promise<void> {
        await this.page.fill(selector, value);
    }

    async getText(selector: string): Promise<string | null> {
        return await this.page.textContent(selector);
    }

    async isVisible(selector: string): Promise<boolean> {
        return await this.page.isVisible(selector);
    }

    async takeScreenshot(name: string): Promise<void> {
        await this.page.screenshot({ path: `./screenshots/${name}.png`, fullPage: true });
    }
}
