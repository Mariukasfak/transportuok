import { test, expect } from '@playwright/test';

test.describe('SEO Agent: SERP Rank Checker', () => {
    // Keywords to track
    const KEYWORDS = [
        'nemokamas buitinės technikos išvežimas kaunas',
        'buitinės technikos išvežimas kaune',
        'šaldytuvų išvežimas kaunas'
    ];

    const TARGET_DOMAIN = 'transportuok.lt';

    KEYWORDS.forEach(keyword => {
        test(`Check rank for: "${keyword}"`, async ({ page }) => {
            console.log(`Searching for: ${keyword}`);

            // Go to Google
            await page.goto('https://www.google.lt/search?q=' + encodeURIComponent(keyword));

            // Accept cookies if popped up (generic handler)
            try {
                const cookieButton = page.locator('button:has-text("Sutinku"), button:has-text("Priimti visus")').first();
                if (await cookieButton.isVisible()) {
                    await cookieButton.click();
                }
            } catch (e) {
                // Ignore if no cookie banner
            }

            // Get all search result links
            // Note: Selectors change frequent, using a broad one for robustness
            const searchResults = await page.locator('#search .g a[href^="http"]').all();

            let found = false;
            let rank = 0;

            for (let i = 0; i < searchResults.length; i++) {
                const href = await searchResults[i].getAttribute('href');
                if (href && href.includes(TARGET_DOMAIN)) {
                    rank = i + 1;
                    found = true;
                    console.log(`✅ FOUND at rank #${rank} for "${keyword}"`);
                    break;
                }
            }

            if (!found) {
                console.log(`⚠️ NOT FOUND in top results for "${keyword}"`);
            }

            // Optional: Assert found (can be flaky if site is new/not indexed)
            // expect(found).toBeTruthy(); 
        });
    });
});
