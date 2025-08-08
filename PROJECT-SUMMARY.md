# 🚀 Transportuok.lt + Karavanas.lt Integration v1.1

## 📋 Projekto aprašymas

Šis projektas integruoja **Transportuok.lt** (Kaunas) ir **UAB "Karavanas LT"** (Vilnius) paslaugas į vieną bendrą platformą, kuri aptarnauja visą Lietuvą.

## 🏢 Verslo modelis

### 🔧 Kauno regionas (Transportuok.lt)
- **Specializacija:** Baldų išvežimas (tik Kaunas)
- **Papildomai:** Buitinė technika, elektronika, metalo laužas
- **Kontaktai:** +370 699 25 744, info@transportuok.lt
- **Zona:** Kaunas ir Kauno rajonas

### 🚛 Vilnius + Visa Lietuva (UAB "Karavanas LT")
- **Specializacija:** Elektronikos surinkimas ir išvežimas
- **Papildomai:** Buitinė technika, transporto paslaugos
- **Kontaktai:** +370 664 24 024, karavanaslt@gmail.com
- **Zona:** Vilnius ir visa Lietuvos teritorija

## 🎯 Pagrindinės funkcijos

### 1. **Miestų pasirinkimo sistema**
- Interaktyvus miestų/regionų pasirinkimas
- Automatinis kontaktų nukreipimas
- Specifinės paslaugos pagal vietą

### 2. **SEO optimizacija**
- Geografinis targeting skirtingiems miestams
- Lokalūs raktažodžiai kiekvienam regionui
- Strukturuotas content pagal paslaugas

### 3. **Blog sistema**
- 3 detalūs straipsniai apie išvežimo paslaugas
- Miestų/regionų specifinis turinys
- SEO optimizuoti tekstai

### 4. **Sertifikatų sekcija**
- Oficialūs UAB "Karavanas LT" rekvizitai
- Licencijų ir sertifikatų informacija
- Kompanijos patikimumo įrodymai

## 📊 UAB "Karavanas LT" rekvizitai

```
Įmonės kodas: 302705147
PVM kodas: LT100006580016
Adresas: M. K. Čiurlionio g. 1-47, Vilnius
Vadovas: Artūras Gudelevičius
Darbuotojai: 16 specialistų
Patirtis: 13+ metų
Transporto priemonės: 11 automobilių
Pajamos 2024: 759,505 EUR
Pelnas 2024: 59,575 EUR
```

## 🛠 Technologijos

- **Frontend:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Routing:** React Router
- **SEO:** React Helmet Async
- **Build:** Optimized for Netlify

## 📁 Projekto struktūra

```
src/
├── components/
│   ├── CitySelector.tsx        # Miestų pasirinkimo komponentas
│   ├── BlogSection.tsx         # Blog straipsnių sekcija
│   ├── ContactInfo.tsx         # Kontaktų ir rekvizitų info
│   ├── CertificatesSection.tsx # Sertifikatų sekcija
│   └── ...
├── data/
│   └── blogPosts.ts           # Blog straipsnių duomenys
├── pages/
│   ├── Home.tsx               # Pagrindinis puslapis
│   └── ...
└── ...
```

## 🎨 Dizaino principai

### Spalvų schema:
- **Kaunas (Transportuok.lt):** Žalia (#167d36)
- **Vilnius (Karavanas LT):** Mėlyna (#2563eb)
- **Bendri:** Pilki atspalviai neutralumui

### UX/UI:
- Mobile-first responsive design
- Intuitive navigation by city/region
- Clear contact segregation
- Professional business presentation

## 📈 SEO strategija

### Meta duomenys:
- **Pagrindinis title:** "Elektronikos ir buitinės technikos išvežimas Lietuvoje"
- **Geografinis targeting:** Kaunas, Vilnius, visa Lietuva
- **Keywords:** miestu specifiniai raktažodžiai

### Content strategy:
- Lokalus turinys kiekvienam regionui
- Praktiniai patarimai blog straipsniuose
- Profesionalūs įmonės duomenys

## 🚀 Deployment

### Netlify konfigūracija:
```
Command: npm run build
Publish directory: dist
Node version: 18
```

### Environment variables:
```
REACT_APP_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
REACT_APP_GOOGLE_TAG_MANAGER_ID=GTM-XXXXXXX
```

## 📞 Kontaktų logika

### Automatinis nukreipimas:
1. **Naudotojas pasirenka Kauną** → Transportuok.lt kontaktai
2. **Naudotojas pasirenka Vilnių** → Karavanas.lt kontaktai  
3. **Naudotojas pasirenka "Visa Lietuva"** → Karavanas.lt kontaktai

### Tel. numerių specifika:
- **+370 699 25 744** - Kaunas, baldai, buitinė technika
- **+370 664 24 024** - Vilnius, elektronika, visa Lietuva

## 📋 Tolimesni planai

### Phase 2:
- [ ] Online užklausų forma su automatiniu nukreipimu
- [ ] Realus laikas availability checker
- [ ] Customer portal su užklausų tracking
- [ ] Photo upload for better quotes

### Phase 3:
- [ ] Mobile app development
- [ ] IOT integration for smart collection
- [ ] AI-powered route optimization
- [ ] Customer loyalty program

## 🔧 Development komandos

```bash
# Development serveris
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Linting
npm run lint

# Type checking  
npm run type-check
```

## 📊 Analytics

### Stebimi metriksi:
- City selection conversion rates
- Contact click-through rates per region
- Blog engagement per article
- Geographic user distribution

### Tools:
- Google Analytics 4
- Google Tag Manager
- Search Console
- Netlify Analytics

## 🤝 Verslo partnerystė

**Transportuok.lt** ir **UAB "Karavanas LT"** veikia kaip strateginiai partneriai:

- ✅ Nekonkurencinė geografinė specializacija
- ✅ Papildantys paslaugų portfoliai  
- ✅ Bendras marketing ir branding
- ✅ Clientų nukreipimas tarp partnerių
- ✅ Žinių ir patirties dalijimasis

---

## 📧 Kontaktai projektui

**Development & Maintenance:**
- 📞 **+370 699 25 744** (Kaunas)
- 📞 **+370 664 24 024** (Vilnius)
- 📧 **info@transportuok.lt**
- 📧 **karavanaslt@gmail.com**

**Paskutinis atnaujinimas:** 2025-08-07
**Versija:** v1.1
