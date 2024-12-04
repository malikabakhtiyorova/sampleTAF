const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',
    timeout: 30 * 1000,
    retries: 2,
    use: {
        headless: true,
        baseURL: 'https://example.com',
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
    },
});
