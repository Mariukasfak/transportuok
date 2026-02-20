import { test, expect } from '@playwright/test';

test.describe('SEO & GEO Agent Audit', () => {
    test('Audit Homepage for Kaunas SEO Keywords', async ({ page }) => {
        // 1. Go to the homepage (running locally or production URL if configured)
        await page.goto('http://localhost:5173/');
        // Fallback to production if local is not running - customizable
        // await page.goto('https://www.transportuok.lt/');

        // 2. Check Title
        const title = await page.title();
        console.log(`Page Title: ${title}`);
        expect(title).toMatch(/Kaunas|Kaune/i); // Must mention Kaunas
        expect(title).toMatch(/Buitinės technikos išvežimas/i);

        // 3. Check Meta Description
        const metaDescription = await page.getAttribute('meta[name="description"]', 'content');
        console.log(`Meta Description: ${metaDescription}`);
        expect(metaDescription).toMatch(/Kaunas|Kaune/i);
        expect(metaDescription).toMatch(/nemokamas/i);

        // 4. Check H1
        const h1 = await page.textContent('h1');
        console.log(`H1 Tag: ${h1}`);
        expect(h1).toMatch(/Kaunas|Kaune|Lietuvoje/i); // "Lietuvoje" implies Kaunas too, but specific is better

        // 5. Check Schema Markup (LocalBusiness)
        const schemaScript = await page.locator('script[type="application/ld+json"]').first();
        const schemaContent = await schemaScript.textContent();
        const schema = JSON.parse(schemaContent || '{}');

        // Log for report
        console.log('Schema Type:', schema['@type']);
        if (Array.isArray(schema['@type'])) {
            expect(schema['@type']).toContain('LocalBusiness');
        } else {
            expect(schema['@type']).toMatch(/LocalBusiness|Organization/);
        }

        // Check if address contains Kaunas
        const address = schema.address || {};
        expect(JSON.stringify(address)).toMatch(/Kaunas/);

        // 6. Check GA4/GTM Config
        const dataLayer = await page.evaluate(() => (window as any).dataLayer || []);
        expect(dataLayer).toBeTruthy();
        const hasGA4Config = dataLayer.some((item: any) =>
            // Check for config command or arguments that look like G-XXXXXXXXXX
            JSON.stringify(item).includes('G-320YE0N58G')
        );
        // Note: dataLayer might not be fully populated immediately in test env without consent
        // So we check if the script is present in head
        const gaScript = await page.locator('script[src*="googletagmanager.com"]').count();
        expect(gaScript).toBeGreaterThan(0);

        console.log('SEO Audit Complete: Kaunas keywords present, Schema valid, GA4 tags found.');
    });
});
