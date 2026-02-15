import { test, chromium } from '@playwright/test';

// Run this with "npx playwright test scripts/seo-agent/auth-setup.spec.ts --headed"
// This is a manual-assist script. It will open a browser, let you login, and save cookies.

test('Setup Google Auth State', async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    // 1. Navigate to Google Search Console
    await page.goto('https://search.google.com/search-console');

    console.log('PLEASE LOG IN MANUALLY WITHIN 60 SECONDS...');

    // 2. Wait for manual login (adjust timeout if needed)
    try {
        // Wait for a selector that appears only after login, e.g., the property list or navigation
        await page.waitForSelector('.sc-resource-selector', { timeout: 60000 });
    } catch (e) {
        console.log('Timeout waiting for manual login. Saving state anyway (might be partial).');
    }

    // 3. Save storage state (cookies/local storage)
    await context.storageState({ path: 'scripts/seo-agent/auth.json' });
    console.log('Auth state saved to scripts/seo-agent/auth.json');

    await browser.close();
});
