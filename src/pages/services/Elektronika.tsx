import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Truck, Clock, CheckCircle, Phone } from 'lucide-react';
import FAQ from '../../components/FAQ';
import { elektronikosFAQ } from '../../data/faqData';
import ServiceSchema from '../../components/ServiceSchema';
import SEO from '../../components/SEO';
import CityTabs from '../../components/CityTabs';

const cityConfigs = {
  kaunas: {
    name: 'Kaunas',
    locative: 'Kaune',
    phone: '+370 699 25 744',
    telHref: 'tel:+37069925744',
    email: 'info@transportuok.lt',
    chips: ['Centras', 'Žaliakalnis', 'Dainava', 'Kalniečiai', 'Šilainiai', 'Aleksotas', 'Vilijampolė', 'Šančiai', 'Petrašiūnai', 'Panemunė', 'Rokai', 'Lampėdžiai', 'Eiguliai', 'Gričiupis', 'Kleboniškis'],
    coverageText: 'Aptarnaujame visą Kauną'
  },
  vilnius: {
    name: 'Vilnius',
    locative: 'Vilniuje',
    phone: '+370 664 24 024',
    telHref: 'tel:+37066424024',
    email: 'karavanaslt@gmail.com',
    chips: ['Senamiestis', 'Naujamiestis', 'Šnipiškės', 'Antakalnis', 'Fabijoniškės', 'Justiniškės', 'Pašilaičiai', 'Pilaitė', 'Naujininkai', 'Lazdynai', 'Karoliniškės', 'Baltupiai', 'Viršuliškės', 'Žirmūnai', 'Naujoji Vilnia'],
    coverageText: 'Aptarnaujame visą Vilnių'
  },
  lietuva: {
    name: 'Visa Lietuva',
    locative: 'Lietuvoje',
    phone: '+370 664 24 024',
    telHref: 'tel:+37066424024',
    email: 'karavanaslt@gmail.com',
    chips: ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiauliai', 'Panevėžys', 'Alytus', 'Marijampolė', 'Mažeikiai', 'Jonava', 'Utena', 'Telšiai'],
    coverageText: 'Aptarnaujame visą Lietuvą'
  }
} as const;

const Elektronika = () => {
  const params = useParams();
  const cityKey = (params.city as keyof typeof cityConfigs) || 'kaunas';
  const city = cityConfigs[cityKey] || cityConfigs.kaunas;

  const basePath = '/paslaugos/elektronikos-atlieku-isvezimas';
  const canonicalUrl = `${'https://transportuok.lt'}${params.city ? `${basePath}/${params.city}` : basePath}`;

  useEffect(() => {
    // No imperative SEO updates needed; handled by SEO component
  }, [cityKey]);

  const provider = {
    name: 'UAB "Karavanas LT"',
    url: 'https://transportuok.lt',
    logo: '/ikona_spalvotas.svg',
    telephone: city.telHref.replace('tel:', ''),
    address: {
      streetAddress: cityKey === 'vilnius' || cityKey === 'lietuva' ? 'M. K. Čiurlionio g. 1-47' : 'Kauno g.',
      addressLocality: cityKey === 'vilnius' || cityKey === 'lietuva' ? 'Vilnius' : 'Kaunas',
      postalCode: cityKey === 'vilnius' || cityKey === 'lietuva' ? '01100' : '44000',
      addressCountry: 'LT'
    }
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Pradžia', item: 'https://transportuok.lt/' },
      { '@type': 'ListItem', position: 2, name: 'Paslaugos', item: 'https://transportuok.lt/paslaugos' },
      { '@type': 'ListItem', position: 3, name: `Elektronikos atliekų išvežimas ${city.locative}`, item: canonicalUrl }
    ]
  };

  // FAQ structured data now emitted by FAQ component; removed page-level duplicate

  // HowTo (adds eligibility for HowTo rich results)
  const howToLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `Kaip užsakyti elektronikos atliekų išvežimą ${city.locative}`,
    totalTime: 'PT30M',
    supply: ['Elektronikos prietaisai', 'Priėjimas prie daiktų'],
    tool: ['Transportas', 'Apsauginės priemonės'],
    step: [
      { '@type': 'HowToStep', name: 'Užklausa', text: 'Pateikite užklausą internetu arba telefonu nurodydami elektronikos tipą.' },
      { '@type': 'HowToStep', name: 'Laiko suderinimas', text: 'Per 24 val. suderiname patogų atvykimo laiką.' },
      { '@type': 'HowToStep', name: 'Surinkimas', text: 'Komanda atvyksta, saugiai išneša ir pakrauna elektroniką.' },
      { '@type': 'HowToStep', name: 'Perdirbimas', text: 'Atliekos perduodamos licencijuotiems perdirbėjams ir sunaikinami duomenys.' }
    ]
  } as const;

  // WebPage schema to strengthen context
  const title = `Elektronikos atliekų išvežimas ${city.locative} | Nemokamas surinkimas | Karavanas LT`;
  const description = `Nemokamas elektronikos atliekų surinkimas ${city.locative}: kompiuteriai, TV, monitoriai, spausdintuvai ir kt. Duomenų sunaikinimas ir ekologiškas perdirbimas.`;

  const webPageLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Elektronikos atliekų išvežimas ${city.locative}`,
    url: canonicalUrl,
    description: description,
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: 'https://transportuok.lt/images/elektronika.webp'
    },
    image: [
      'https://transportuok.lt/images/elektronika-small.webp',
      'https://transportuok.lt/images/elektronika-medium.webp',
      'https://transportuok.lt/images/elektronika-large.webp'
    ],
    about: {
      '@type': 'Service',
      name: `Elektronikos atliekų išvežimas ${city.locative}`
    }
  } as const;

  // Paruošiame FAQ elementus (vieną kartą panaudojame tiek UI tiek JSON-LD)
  const faqItems = elektronikosFAQ.map(i => {
    const localizedQ = cityKey === 'kaunas' ? i.question : `${i.question.replace('?', '')} ${city.locative}?`;
    const locationNote = `<p><strong>Regionas:</strong> Aptarnaujame ${city.name}${cityKey === 'lietuva' ? ' ir kitus Lietuvos miestus' : ' bei aplinkinius rajonus'}.</p>`;
    const answerWithLoc = i.answer.includes('Regionas:') ? i.answer : i.answer + locationNote;
    return { ...i, question: localizedQ, answer: answerWithLoc };
  });
  const stripTags = (html: string) => html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const slugify = (s: string) => s.toLowerCase().replace(/[^\p{L}0-9]+/gu, '-').replace(/^-|-$/g, '');
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${canonicalUrl}#faq`,
    'inLanguage': 'lt',
    mainEntity: faqItems.map(q => ({
      '@type': 'Question',
      '@id': `${canonicalUrl}#question-${slugify(q.question)}`,
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: stripTags(q.answer)
      }
    }))
  } as const;

  return (
    <>
      <SEO title={title} description={description} canonicalUrl={canonicalUrl} structuredData={[faqStructuredData]} />

      <ServiceSchema
        name={`Elektronikos atliekų išvežimas ${city.locative}`}
        description={`Profesionalus elektronikos atliekų surinkimas, saugus duomenų sunaikinimas ir ekologiškas perdirbimas ${city.locative}.`}
        image="https://transportuok.lt/images/elektronika.webp"
        serviceId="elektronikos-atlieku-isvezimas"
        provider={provider}
        areaServed={cityKey === 'lietuva' ? 'Visa Lietuva' : city.name}
      />

      <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      <script type="application/ld+json">{JSON.stringify(howToLd)}</script>
      <script type="application/ld+json">{JSON.stringify(webPageLd)}</script>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Elektronikos atliekų surinkimas {city.locative}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nemokamas surinkimas iš namų ir įmonių. Saugus duomenų sunaikinimas, perdavimo aktai ir tvarkymas pagal ES reikalavimus.
            </p>
            <div className="mt-5 flex items-center justify-center">
              <CityTabs basePath={basePath} current={cityKey as any} />
            </div>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={city.telHref} className="inline-flex items-center px-5 py-3 border-2 border-green-600 text-green-700 rounded-lg hover:bg-green-50 font-semibold">
                <Phone className="w-5 h-5 mr-2" /> Skambinti: {city.phone}
              </a>
              <Link to="/kontaktai#contact-form" className="inline-flex items-center px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold">
                Užsakyti internetu
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm text-gray-700">
              {city.chips.map((loc) => (
                <span key={loc} className="px-3 py-1 bg-gray-100 rounded-full border border-gray-200">{loc}</span>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              {/* Paslaugos aprašymas */}
              <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Kokią elektroniką išvežame?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Kompiuterinė technika</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span>Stacionarūs kompiuteriai</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span>Nešiojami kompiuteriai</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span>Monitoriai</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span>Spausdintuvai</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Buitinė elektronika</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span>Televizoriai</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span>Garso aparatūra</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span>Telefonai ir planšetės</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span>Ir kitą stambią buitinę techniką</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Elektronikos atliekų tvarkymo procesas</h2>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <span className="text-green-700 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Surinkimas</h3>
                      <p className="text-gray-600">
                        Atvykstame į nurodytą vietą ir profesionaliai surenkame elektronikos atliekas.
                        Pasirūpiname saugiu įrangos transportavimu.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <span className="text-green-700 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Rūšiavimas</h3>
                      <p className="text-gray-600">
                        Elektronikos atliekos rūšiuojamos pagal tipus ir medžiagas,
                        užtikrinant efektyvų perdirbimo procesą.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <span className="text-green-700 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Perdirbimas</h3>
                      <p className="text-gray-600">
                        Visos elektronikos atliekos perduodamos licencijuotiems perdirbėjams,
                        kurie užtikrina saugų ir ekologišką utilizavimą.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Mūsų privalumai</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Nemokamas išvežimas</h3>
                    <p className="text-gray-600">
                      Visą elektroniką išvežame nemokamai, nepriklausomai nuo jos kiekio.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Duomenų saugumas</h3>
                    <p className="text-gray-600">
                      Užtikriname saugų duomenų sunaikinimą iš kompiuterių ir kitų įrenginių.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Aplinkosauga</h3>
                    <p className="text-gray-600">
                      Laikomės visų ES aplinkosaugos reikalavimų ir standartų.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Patogus aptarnavimas</h3>
                    <p className="text-gray-600">
                      Dirbame visoje Kauno teritorijoje, prisitaikome prie jūsų grafiko.
                    </p>
                  </div>
                </div>

                <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-900">
                  Išvežimas paprastai yra nemokamas. Specialūs atvejai (pvz., ypač sudėtingas išnešimas) aptariami prieš darbą – jokių netikėtumų.
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Kontaktai */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">Susisiekite</h2>
                <div className="space-y-4">
                  <a href={city.telHref} className="flex items-center text-gray-600 hover:text-green-600">
                    <Phone className="w-5 h-5 mr-2" />
                    {city.phone}
                  </a>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    I–V: 8:00 - 18:00
                  </div>
                  <p className="text-xs text-gray-500">Atsakome darbo dienomis</p>
                  <div className="flex items-center text-gray-600">
                    <Truck className="w-5 h-5 mr-2" />
                    {city.coverageText}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-green-50 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Užsakyti išvežimą</h2>
                <p className="text-gray-600 mb-6">
                  Užpildykite užklausą dabar ir gaukite nemokamą elektronikos atliekų išvežimą!
                </p>
                <Link
                  to="/kontaktai#contact-form"
                  className="block w-full bg-green-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Pateikti užklausą
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div id="faq">
            <FAQ
              items={faqItems}
              title={`Dažniausiai užduodami klausimai apie elektronikos atliekų išvežimą ${city.locative}`}
              suppressSchema
            />
          </div>
          {/* Susijusios paslaugos */}
          <div className="mt-12 bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Susijusios paslaugos</h2>
            <div className="flex flex-wrap gap-3">
              <Link to="/paslaugos/buitines-technikos-isvezimas" className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">Buitinės technikos išvežimas</Link>
              <Link to="/paslaugos/baldu-isvezimas" className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">Baldų išvežimas</Link>
              <Link to="/paslaugos/metalo-lauzo-isvezimas" className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">Metalo laužo išvežimas</Link>
              <Link to="/naujienos" className="px-4 py-2 bg-green-50 text-green-700 border border-green-200 rounded-lg hover:bg-green-100">Straipsniai ir patarimai</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Elektronika;