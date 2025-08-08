# SEO/Local/AI Search Audit (initial)

Punktas | Dabartinė būsena | Pataisymai | Failai/commit
---|---|---|---
Robots.txt | Yra, leidžia /, blokuoja /admin,/private,/api; sitemap nuoroda yra | OK (peržiūrėti po deploy) | robots.txt
Sitemap | Generuojama per scriptą; įtraukia paslaugas ir naujienas | Patikrinti tik 200/kanoniniai URL, pridėti jei trūksta /kaunas, /vilnius | scripts/generate-sitemap.js
Canonical | Pagrindiniame index.html yra; puslapiuose dalis nustato dinamiškai | Patikrinti visus puslapius; suvienodinti per SEO komponentą; pridėti miestų puslapiams | index.html, src/components/SEO.tsx, src/pages/city/*
Hreflang | Nenaudojama (1 kalba) | Nereikia | -
HTTP/2/3 | Priklauso Netlify; H2/H3 įjungtas | OK | netlify
LCP | LCP hero webp preloaded; SW necache’ina GA/GTM; Tailwind | Patikrinti Lighthouse; galimas hero dimensijų rezervavimas | index.html, images
JS sumažinimas | Vite + code-split; lazy GoogleReviews | Tęsti lazy kur galima | src/components/Lazy*
CLS | Daugelyje img trūksta width/height | Pridėti dimensijas pagr. img | src/pages/Home.tsx ir kt. TODO
Schema | LocalBusiness, Breadcrumbs, FAQ yra paslaugų puslapiuose | Pridėtas Global Organization/WebSite schema; pridėti miestų LocalBusiness + NAP | src/components/GlobalSchema.tsx, src/pages/city/*
Content | LT rinkai, Kaunas/Vilnius akcentai | Sukurti /kaunas ir /vilnius landingus | src/pages/city/*.tsx TODO
Kontaktai | Logika su miestu pasirinkimu yra; skirtingi tel. per cityConfigs | Pridėtas Directions + NAP blokas; žemėlapis nebūtinas kol kas | src/pages/Contact.tsx
CRO/CTA | CTA yra; reikia sticky CTA su call/whatsapp | Įdiegta StickyCTA su GA4 eventais, WhatsApp QR nuoroda | src/components/StickyCTA.tsx
GA4/GTM | GA4 + Consent + SPA pageview suvesti; GTM po sutikimo | Pridėti custom events: call_click, whatsapp_click, form_submit | src/lib/analytics.ts TODO
UTM | Nėra standartizacijos | Parašyti docs/utm-convention.md | docs/utm-convention.md
CI/Lighthouse | Nėra LHCI workflow | Įdiegti .github/workflows/lhci.yml | .github/workflows/lhci.yml
A11y/Testai | Nėra automatinių testų | Pridėti Playwright E2E ir axe a11y | tests/e2e/*, tests/a11y/* TODO
CSP | Sustiprintas, be unsafe-eval; pridėta clarity/doubleclick | Stebėti GTM/Clarity; nenaudoti unsafe-eval | netlify.toml
Google Reviews | Serverless proxy + statinis fallback | OK, reikia GOOGLE_MAPS_API_KEY env | netlify/functions/google-reviews.js, GoogleReviews.tsx

Verslo duomenys (TODO):
- Kaunas (tik Kauno išvežimai): TODO:<kaunas_phone>
- Vilnius/visa Lietuva: TODO:<vilnius_phone>
- Pagrindinis domenas: TODO:<primary_domain>
- Prekės ženklas: TODO:<brand_name>
- GBP URL: https://share.google/9WVQWATF9SIcSLDEb
- GSC property: TODO:<gsc_property>
