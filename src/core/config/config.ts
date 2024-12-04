import dotenv from 'dotenv';

dotenv.config();

export const config = {
    baseUrl: process.env.BASE_URL || 'http://localhost:8080',
    timeout: parseInt(process.env.TIMEOUT || '30000'),
    browser: process.env.BROWSER || 'chromium',
    headless: process.env.HEADLESS === 'true',
    slowMo: parseInt(process.env.SLOW_MO || '0'),
    viewport: {
        width: parseInt(process.env.VIEWPORT_WIDTH || '1280'),
        height: parseInt(process.env.VIEWPORT_HEIGHT || '720')
    },
    screenshot: {
        takeOnFail: true,
        fullPage: true
    }
};
