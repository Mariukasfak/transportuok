import { test, expect } from '@playwright/test';
declare var process: any;

// Simple crawler to check internal links and missing meta
test.describe('SEO Agent: Site Health Monitor', () => {
    const START_URL = process.env.TARGET_URL || 'http://localhost:5173';
    const VISITED = new Set<string>();
    const BROKEN_LINKS: string[] = [];

    test('Crawl and Check 404s + Meta', async ({ page }) => {
        const queue = [START_URL];

        while (queue.length > 0) {
            const url = queue.shift();
            if (!url || VISITED.has(url)) continue;

            VISITED.add(url);
            console.log(`Crawling: ${url}`);

            try {
                const response = await page.goto(url);
                if (response?.status() === 404) {
                    console.error(`❌ BROKEN LINK (404): ${url}`);
                    BROKEN_LINKS.push(url);
                    continue;
                }

                // CHECK SEO BASICS
                const title = await page.title();
                const desc = await page.getAttribute('meta[name="description"]', 'content');
                const h1Count = await page.locator('h1').count();

                if (!title) console.warn(`⚠️ MISSING TITLE: ${url}`);
                if (!desc) console.warn(`⚠️ MISSING DESC: ${url}`);
                if (h1Count === 0) console.warn(`⚠️ MISSING H1: ${url}`);
                if (h1Count > 1) console.warn(`⚠️ MULTIPLE H1: ${url}`);

                // FIND INTERNAL LINKS
                const links = await page.locator('a[href^="/"], a[href^="' + START_URL + '"]').all();
                for (const link of links) {
                    const href = await link.getAttribute('href');
                    if (href) {
                        // Normalize URL
                        const absoluteUrl = new URL(href, START_URL).href;
                        // Only stick to same domain and ignore assets/anchors
                        if (absoluteUrl.startsWith(START_URL) && !absoluteUrl.includes('#') && !VISITED.has(absoluteUrl)) {
                            // Limit crawling depth/count for demo
                            if (VISITED.size < 50 && !queue.includes(absoluteUrl)) {
                                queue.push(absoluteUrl);
                            }
                        }
                    }
                }

            } catch (e) {
                console.error(`Error crawling ${url}: ${e}`);
            }
        }

        console.log('--- CRAWL FINISHED ---');
        console.log(`Visited: ${VISITED.size} pages`);
        console.log(`Broken Links: ${BROKEN_LINKS.length}`);

        expect(BROKEN_LINKS.length).toBe(0);
    });
});
