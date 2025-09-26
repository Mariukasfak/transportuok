import { test, expect, Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const routes = [
  { path: '/', canonical: 'https://transportuok.lt/' },
  { path: '/kaunas', canonical: 'https://transportuok.lt/kaunas', locality: 'Kaunas' },
  { path: '/vilnius', canonical: 'https://transportuok.lt/vilnius', locality: 'Vilnius' },
];

const getJsonLd = async (path: string, page: Page): Promise<Record<string, unknown>[]> => {
  await page.goto(path, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => document.querySelectorAll("script[type='application/ld+json']").length > 0);
  const entries = await page.evaluate(() => {
    return Array.from(document.querySelectorAll("script[type='application/ld+json']"))
      .map((node) => {
        try {
          return JSON.parse(node.textContent || '');
        } catch (error) {
          console.warn('Unable to parse JSON-LD', error);
          return null;
        }
      })
      .filter(Boolean);
  });
  return entries as Record<string, unknown>[];
};

test.describe('Canonical tags', () => {
  for (const { path, canonical } of routes) {
    test(`has canonical ${canonical} on ${path}`, async ({ page }) => {
      await page.goto(path);
      const href = await page.getAttribute('head link[rel="canonical"]', 'href');
      expect(href).toBe(canonical);
    });
  }
});

const cityRoutes = routes.filter((route) => route.locality);

test.describe('City structured data', () => {
  for (const { path, canonical, locality } of cityRoutes) {
    test(`embeds LocalBusiness schema for ${path}`, async ({ page }) => {
      const jsonLd = await getJsonLd(path, page);
      const localBusiness = jsonLd.find((entry) => entry['@type'] === 'LocalBusiness') as Record<string, unknown> | undefined;
      expect(localBusiness).toBeDefined();
      expect(localBusiness?.url).toBe(canonical);
      expect(localBusiness?.['@id']).toBe(`${canonical}#nap`);
      const address = (localBusiness?.address ?? {}) as Record<string, unknown>;
      expect(address.addressLocality).toBe(locality);
      expect(localBusiness?.telephone).toBeTruthy();
      const contactPoints = (localBusiness?.contactPoint ?? []) as Record<string, unknown>[];
      const contact = contactPoints[0] ?? {};
      expect(contact.telephone).toBeTruthy();
      expect(contact.areaServed).toBeTruthy();
    });
  }
});

test.describe('Accessibility', () => {
  for (const { path } of routes) {
    test(`axe scan passes on ${path}`, async ({ page }) => {
      await page.goto(path);
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa'])
        .analyze();
      expect(results.violations).toEqual([]);
    });
  }
});
