# Planas 2026: Transportuok.lt Sistemos Tobulinimas ir Priežiūra

Šiame dokumente pateikiamas išsamus planas svetainės optimizavimui, klaidų šalinimui ir SEO gerinimui 2026 metams.

## 1. Sisteminė Apžvalga ir Klaidų Taisymas
Atlikus pirminį auditą, nustatyta keletas sričių, kurias reikia sutvarkyti sisteminiame lygmenyje:

### Failų Sistemos Higiena (.gitignore)
Šiuo metu `git` sekimo sistemoje matomi failai, kurie turėtų būti ignoruojami (build'o failai, ataskaitos). Tai didina repozitorijos dydį ir kelia "triukšmą".
**Veiksmai:**
- [ ] Atnaujinti `.gitignore` failą įtraukiant:
    - `dist/` (sukurgi produkciniai failai)
    - `playwright-report/` (testavimo ataskaitos)
    - `test-results/`
    - `.env` (saugumo sumetimais)
    - `*.log`

### Nereikalingų Failų Šalinimas/Archyvavimas
Šakniniame kataloge (root) yra pagalbinių skriptų, kurie "teršia" struktūrą.
**Veiksmai:**
- [ ] Perkelti Python konvertavimo skriptus (`convert_100.py`, `create_holiday_image.py`, kt.) į `scripts/` arba `tools/` katalogą.
- [ ] Ištrinti `.autoconfirm.sh`, `enable-copilot-automation.sh` jei jie nebenaudojami, arba perkelti į `scripts/`.
- [ ] Ištrinti senus `convert.bat` failus.

## 2. Svetainės Greitaveika (Speed Insights)
Greitis yra kritinis faktorius SEO ir vartotojo patirčiai.

### Paveikslėlių Optimizavimas
Nors yra `optimize-images.js`, svarbu užtikrinti, kad:
- [ ] Visi nauji paveikslėliai būtų automatiškai konvertuojami į **WebP** formatą (mažesnis dydis, ta pati kokybė).
- [ ] Svetainėje naudojami paveikslėliai turėtų `loading="lazy"` atributą, kad krautųsi tik vartotojui slenkant žemyn.
- [ ] Peržiūrėti `assets` aplanką ir ištrinti nenaudojamus svg/png failus.

### Kodo Minifikavimas
- [ ] Užtikrinti, kad `vite build` komanda sėkmingai minifikuoja CSS ir JS failus (tai daroma automatiškai, bet reikia patikrinti `dist` dydžius).

## 3. SEO (Paieškos Sistemų Optimizavimas)
2026 metams orientuojamės į raktinius žodžius: "Nemokamas buitinės technikos išvežimas", "Kaunas", "Vilnius", "2026".

### Raktinių Žodžių Strategija
- [ ] Atnaujinti meta aprašymus (meta descriptions) pagrindiniuose puslapiuose intarpais su "2026".
- [ ] Sukurti naują turinį (Tinklaraščio įrašus), orientuotą į vietines paieškas (Local SEO) – pvz., "Buitinės technikos išvežimas Kaune 2026".

### Techninis SEO
- [ ] Patikrinti `sitemap.xml` generavimą – ar nauji straipsniai įtraukiami automatiškai?
- [ ] Patikrinti `robots.txt`, kad Google botai neturėtų kliūčių.
- [ ] Užtikrinti, kad kiekvienas puslapis turėtų unikalų `H1` tagą ir teisingą antraščių (H2, H3) hierarchiją.

## 4. 2026 Metų Veiksmų Planas
1. **Sausis**: "Pavasarinis" kodo valymas (gitignore, scripts perkėlimas).
2. **Vasaris**: SEO auditas su Google Search Console, klaidų taisymas.
3. **Kovas**: Turinio atnaujinimas (naujienos apie paslaugų tęstinumą).
4. **Nuolatinis**: Paveikslėlių optimizavimas kiekvieno atnaujinimo metu.

Šis planas užtikrins, kad "Transportuok.lt" išliktų greita, randama ir tvarkinga sistema.

## 5. Skubūs Klaidų Taisymai (CSP ir 'Atsiprašome, įvyko klaida')
Vartotojai susiduria su klaidos pranešimu "Atsiprašome, įvyko klaida", kurį dažnai išsprendžia puslapio perkrovimas.

**Diagnozė**: Google Chrome konsolėje matoma klaida `Use of eval is blocked by CSP`. Tai reiškia, kad tam tikri išoriniai skriptai (pvz., Google Maps arba GTM) bando vykdyti kodo evaluaciją, kurią blokuoja griežta saugumo politika.

**Taikomas Sprendimas**:
- [x] Atnaujinti `netlify.toml` failą, pridedant `'unsafe-eval'` į `Content-Security-Policy` -> `script-src` direktyvą. Tai leidžia legitimiems trečiųjų šalių skriptams veikti be klaidų.
