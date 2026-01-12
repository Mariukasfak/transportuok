# SEO + GEO Agento Promptas: Pilnas Svetainės Auditas ir Optimizavimas

## 🎯 Tikslas

Tu esi ekspertinis SEO ir GEO (Generative Engine Optimization) agentas. Tavo užduotis – išanalizuoti svetainę `transportuok.lt` ir pataisyti visas kritines SEO/GEO klaidas, kad puslapis būtų:
- Tobulai indeksuojamas Google
- Optimizuotas AI paieškos varikliams (ChatGPT, Perplexity, Gemini)
- Techniškai švarūs ir greiti

---

## 📋 Audito Checklist

### 1. Techninė SEO Analizė

**Patikrink ir pataisyk:**
- [ ] `robots.txt` – ar leidžia indeksuoti svarbius puslapius, ar blokuoja nereikalingus
- [ ] `sitemap.xml` – ar visi puslapiai įtraukti, ar datos aktualios
- [ ] Canonical žymos – ar kiekvienas puslapis turi vienintelę canonical URL
- [ ] 301 redirects – ar nėra redirect grandininių, ar legacy URL peradresuoti
- [ ] 404 klaidos – ar nėra nutrūkusių nuorodų
- [ ] HTTPS – ar visur naudojamas saugus protokolas
- [ ] www vs non-www – ar yra aiški kanoninė versija

### 2. Schema.org Struktūrizuoti Duomenys

**Įdiek/patikrink šiuos schema tipus:**
- [ ] `LocalBusiness` – įmonės informacija (adresas, telefonas, darbo laikas)
- [ ] `Service` – kiekvienai paslaugai atskiras schema
- [ ] `BreadcrumbList` – navigacijos keliai
- [ ] `FAQPage` – DUK puslapiams
- [ ] `Article` / `BlogPosting` – naujienu/straipsniu puslapiams
- [ ] `Organization` – pagrindinė organizacijos schema
- [ ] `WebSite` – su SearchAction paieškos funkcionalumui
- [ ] `AggregateRating` – reviewCount ir ratingValue TURI BŪTI skaičiai (Number), NE stringai!

> ⚠️ **SVARBU**: `reviewCount` ir `ratingCount` turi būti **sveikieji skaičiai** (Integer), ne stringai kaip `'100+'` ar `'140'`. Google Rich Results atmes neteisingą formatą!

### 3. Core Web Vitals

**Patikrink ir optimizuok:**
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID/INP (Interaction to Next Paint) < 200ms
- [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] Lazy loading paveikslėliams
- [ ] Critical CSS inline
- [ ] JavaScript defer/async

### 4. On-Page SEO

**Kiekvienam puslapiui patikrink:**
- [ ] Title tag – unikalus, 50-60 simbolių, su raktažodžiais
- [ ] Meta description – unikalus, 150-160 simbolių, su CTA
- [ ] H1 – vienas per puslapį, su pagrindiniu raktažodžiu
- [ ] H2-H6 hierarchija – logiška struktūra
- [ ] Alt tekstai paveikslėliams
- [ ] Internal linking – susieti puslapiai tarpusavyje
- [ ] URL struktūra – trumpi, aiškūs, su raktažodžiais

### 5. Local SEO (Vietinė SEO)

**Optimizuok vietinei paieškai:**
- [ ] Google Business Profile – patikrink ar informacija sutampa
- [ ] NAP (Name, Address, Phone) – vienodi visur
- [ ] Miestų puslapiai – unikalus turinys kiekvienam miestui
- [ ] Lokalūs raktažodžiai – "Kaune", "Vilniuje", "Lietuvoje"
- [ ] Schema su geografinėmis koordinatėmis

### 6. GEO (Generative Engine Optimization)

**Optimizuok AI paieškoms:**
- [ ] Aiškūs, struktūrizuoti atsakymai į klausimus
- [ ] FAQ sekcijos su konkrečiais atsakymais
- [ ] "How-to" turinys su žingsnis-po-žingsnio instrukcijomis
- [ ] Faktiniai duomenys (skaičiai, statistika, kainos)
- [ ] Autoritetingas tonas ir ekspertizė
- [ ] Cituojamas turinys (bullet points, numeruoti sąrašai)

### 7. Google Search Console Integracija

**Patikrink ir ištaisyk:**
- [ ] Sitemap pateiktas ir priimtas
- [ ] Indeksavimo klaidos – išspręstos
- [ ] Mobile usability – be klaidų
- [ ] Core Web Vitals – žalios spalvos
- [ ] Security issues – 0
- [ ] Manual actions – 0

---

## 🔧 Veiksmai Pagal Prioritetą

### KRITINIAI (pirmas prioritetas):
1. Pataisyti visas 5xx serverio klaidas
2. Sutvarkyti dubliuotą turinį (canonical žymos)
3. Patikrinti ir atnaujinti sitemap.xml
4. Ištaisyti 404 klaidas

### SVARBŪS (antras prioritetas):
1. Pridėti trūkstamas Schema.org žymas
2. Optimizuoti Core Web Vitals
3. Patikrinti visus meta tagus
4. Atnaujinti robots.txt

### PAGERINIMAS (trečias prioritetas):
1. Pridėti daugiau internal links
2. Optimizuoti paveikslėlių alt tekstus
3. Sukurti daugiau FAQ turinio
4. Pagerintti E-E-A-T signalus

---

## 📑 Failų Lokacijos

| Failas | Kelias |
|--------|--------|
| Robots | `/robots.txt` |
| Sitemap | `/sitemap.xml` |
| SEO komponentas | `/src/components/SEO.tsx` |
| Schema komponentas | `/src/components/ServiceSchema.tsx` |
| Company data | `/src/data/company.ts` |
| Blog posts | `/src/data/blogPosts.ts` |
| Redirects | `/netlify.toml`, `/_redirects` |

---

## ✅ Pabaigos Tikrinimas

Po visų pataisymų:
1. Paleisti `npm run build` – be klaidų
2. Patikrinti [PageSpeed Insights](https://pagespeed.web.dev/)
3. Patikrinti [Rich Results Test](https://search.google.com/test/rich-results)
4. Patikrinti [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
5. Pateikti sitemap Google Search Console
6. Prašyti probleminių URL perindeksavimo

---

## 🎯 Sėkmės Kriterijai

- ✅ Google Search Console: 0 klaidų
- ✅ PageSpeed: >90 mobile, >95 desktop
- ✅ Rich Results: visi testai praėję
- ✅ Sitemap: priimtas, visi URL indeksuoti
- ✅ Schema: valid per Rich Results Test
