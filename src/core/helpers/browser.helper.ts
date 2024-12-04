import { Browser, BrowserContext, Page, chromium, firefox, webkit } from '@playwright/test';
import { config } from '../config/config';

export class BrowserHelper {
    private static browser: Browser;
    private static context: BrowserContext;
    private static page: Page;

    static async initBrowser(): Promise<void> {
        const browserType = config.browser.toLowerCase();
        switch (browserType) {
            case 'chromium':
                this.browser = await chromium.launch({
                    headless: config.headless,
                    slowMo: config.slowMo
                });
                break;
            case 'firefox':
                this.browser = await firefox.launch({
                    headless: config.headless,
                    slowMo: config.slowMo
                });
                break;
            case 'webkit':
                this.browser = await webkit.launch({
                    headless: config.headless,
                    slowMo: config.slowMo
                });
                break;
            default:
                throw new Error(`Browser type ${browserType} is not supported`);
        }
    }

    static async createContext(): Promise<void> {
        this.context = await this.browser.newContext({
            viewport: config.viewport
        });
    }

    static async newPage(): Promise<Page> {
        this.page = await this.context.newPage();
        return this.page;
    }

    static async closeBrowser(): Promise<void> {
        await this.browser?.close();
    }

    static getPage(): Page {
        return this.page;
    }
}
