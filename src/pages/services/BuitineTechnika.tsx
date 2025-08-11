import { Link, useParams } from 'react-router-dom';
import { Truck, Clock, CheckCircle, Phone } from 'lucide-react';
import FAQ from '../../components/FAQ';
import { buitinesTechnikosFAQ } from '../../data/faqData';
import ServiceSchema from '../../components/ServiceSchema';
import SEO from '../../components/SEO';
import CityTabs from '../../components/CityTabs';

const btCityConfigs = {
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

const BuitineTechnika = () => {
  const params = useParams();
  const cityKey = (params.city as keyof typeof btCityConfigs) || 'kaunas';
  const city = btCityConfigs[cityKey] || btCityConfigs.kaunas;

  const basePath = '/paslaugos/buitines-technikos-isvezimas';
  const canonicalUrl = `${'https://transportuok.lt'}${params.city ? `${basePath}/${params.city}` : basePath}`;

  const serviceProvider = {
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

  // Build BreadcrumbList JSON-LD and FAQPage JSON-LD
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Pradžia', item: 'https://transportuok.lt/' },
      { '@type': 'ListItem', position: 2, name: 'Paslaugos', item: 'https://transportuok.lt/paslaugos' },
      { '@type': 'ListItem', position: 3, name: `Buitinės technikos išvežimas ${city.locative}`, item: canonicalUrl }
    ]
  };

  // FAQ structured data now emitted by FAQ component; remove page-level duplicate

  const howToLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `Kaip vyksta buitinės technikos išvežimas ${city.locative}`,
    totalTime: 'P1D',
    supply: ['Buitinės technikos prietaisas', 'Priėjimas iki objekto'],
    tool: ['Specializuotas transportas', 'Apsauginės priemonės'],
    step: [
      { '@type': 'HowToStep', name: 'Užklausos pateikimas', text: 'Užpildykite formą arba paskambinkite nurodytu telefonu.' },
      { '@type': 'HowToStep', name: 'Laiko suderinimas', text: 'Per 24 val. suderiname patogų išvežimo laiką.' },
      { '@type': 'HowToStep', name: 'Išvežimas', text: 'Atvykstame, išnešame ir išvežame prietaisą į perdirbimą.' }
    ]
  };

  const title = `Nemokamas buitinės technikos išvežimas ${city.locative} | Karavanas LT`;
  const description = `Nemokamas šaldytuvų, skalbimo mašinų ir kitos buitinės technikos išvežimas ${city.locative}. Greitas atvykimas, saugus išnešimas, ekologiškas utilizavimas.`;

  const webPageLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Buitinės technikos išvežimas ${city.locative}`,
    url: canonicalUrl,
    description,
    about: { '@type': 'Service', name: `Buitinės technikos išvežimas ${city.locative}` }
  } as const;

  return (
    <>
      <SEO title={title} description={description} canonicalUrl={canonicalUrl} />

      <ServiceSchema
        name={`Buitinės technikos išvežimas ${city.locative}`}
        description={`Nemokamas šaldytuvų, skalbimo mašinų ir kitų buitinių prietaisų išvežimas ${city.locative}. Greitas ir patikimas aptarnavimas.`}
        provider={serviceProvider}
        areaServed={cityKey === 'lietuva' ? 'Visa Lietuva' : city.name}
      />

      {/* Structured data */}
      <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      <script type="application/ld+json">{JSON.stringify(howToLd)}</script>
  <script type="application/ld+json">{JSON.stringify(webPageLd)}</script>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Nemokamas buitinės technikos išvežimas {city.locative}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesionalus ir greitas buitinės technikos išvežimas visame mieste.
              Išvežame šaldytuvus, skalbimo mašinas, virykles ir kitą buitinę techniką nemokamai.
              {' '}Norite nacionalinio vaizdo? Perskaitykite mūsų <Link to="/naujienos/buitines-technikos-isvezimas-lietuvoje-pilnas-gidas-2025" className="text-green-600 hover:text-green-700 font-semibold">2025 pilną išvežimo gidą</Link>.
            </p>
            <div className="mt-5 flex items-center justify-center">
              <CityTabs basePath={basePath} current={cityKey as any} />
            </div>
            {/* CTAs */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={city.telHref} className="inline-flex items-center px-5 py-3 border-2 border-green-600 text-green-700 rounded-lg hover:bg-green-50 font-semibold">
                <Phone className="w-5 h-5 mr-2" /> Skambinti: {city.phone}
              </a>
              <Link to="/kontaktai#contact-form" className="inline-flex items-center px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold">
                Užsakyti internetu
              </Link>
            </div>
            {/* Service area chips */}
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
                <h2 className="text-2xl font-bold mb-6">Kokią buitinę techniką išvežame?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Virtuvės technika</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span>Šaldytuvai ir šaldikliai</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span>Viryklės ir orkaitės</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span>Indaplovės</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span>Mikrobangų krosnelės</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Skalbimo technika</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span>Skalbimo mašinos</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span>Džiovyklės</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span>Skalbimo-džiovinimo mašinos</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span>Ir kiti elektronikos prietaisai</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Kaip vyksta išvežimas?</h2>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <span className="text-green-700 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Užklausos pateikimas</h3>
                      <p className="text-gray-600">
                        Užpildykite užklausos formą arba paskambinkite mums.
                        Nurodykite, kokią techniką reikia išvežti ir savo kontaktinius duomenis.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <span className="text-green-700 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Susitarimas dėl laiko</h3>
                      <p className="text-gray-600">
                        Susisieksime su jumis per 24 valandas ir sutarsime jums patogų išvežimo laiką.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <span className="text-green-700 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Išvežimas</h3>
                      <p className="text-gray-600">
                        Atvyksime sutartu laiku, profesionaliai išnešime ir išvešime techniką.
                        Jums nereikia rūpintis technikos atjungimu ar išnešimu.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Kodėl verta rinktis mus?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Nemokamas išvežimas</h3>
                    <p className="text-gray-600">
                      Visą buitinę techniką išvežame nemokamai, nepriklausomai nuo jos dydžio ar kiekio.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Profesionalus aptarnavimas</h3>
                    <p className="text-gray-600">
                      Mūsų komanda turi ilgametę patirtį ir visus reikiamus įrankius saugiam technikos išvežimui.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Ekologiškas utilizavimas</h3>
                    <p className="text-gray-600">
                      Visa išvežta technika perduodama licencijuotiems perdirbėjams ir utilizuojama pagal ES standartus.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Greitas aptarnavimas</h3>
                    <p className="text-gray-600">
                      Išvežimą organizuojame per 1-2 darbo dienas nuo užklausos gavimo.
                    </p>
                  </div>
                </div>

                {/* Sąlygos ir skaidrumas */}
                <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-900">
                  Dauguma išvežimų – nemokami. Galimos išlaidos priklauso nuo specifinių atvejų (pvz., nestandartinis privažiavimas, ypatingai sudėtingas išnešimas). Visada informuojame iš anksto.
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
                  Užpildykite užklausą dabar ir gaukite nemokamą buitinės technikos išvežimą!
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
        </div>

        <FAQ
          items={buitinesTechnikosFAQ}
          title={`Dažniausiai užduodami klausimai apie buitinės technikos išvežimą ${city.locative}`}
        />

        {/* Susijusios paslaugos ir straipsniai */}
        <div className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Susijusios paslaugos ir straipsniai</h2>
            <div className="flex flex-wrap gap-3">
              <Link to="/paslaugos/elektronikos-atlieku-isvezimas" className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">Elektronikos atliekų išvežimas</Link>
              <Link to="/paslaugos/baldu-isvezimas" className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">Baldų išvežimas</Link>
              <Link to="/paslaugos/metalo-lauzo-isvezimas" className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">Metalo laužo išvežimas</Link>
              <Link to="/naujienos" className="px-4 py-2 bg-green-50 text-green-700 border border-green-200 rounded-lg hover:bg-green-100">Naujienos ir patarimai</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuitineTechnika;