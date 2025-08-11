import { Link } from 'react-router-dom';
import { Truck, Clock, CheckCircle, Phone } from 'lucide-react';
import FAQ from '../../components/FAQ';
import { balduFAQ } from '../../data/faqData';
import SEO from '../../components/SEO';
import ServiceSchema from '../../components/ServiceSchema';
import company from '../../data/company';

const Baldai = () => {
  const canonicalUrl = 'https://transportuok.lt/paslaugos/baldu-isvezimas';
  const title = 'Baldų išvežimas Kaune | Baldų utilizavimas | Karavanas LT';
  const description = 'Profesionalus senų baldų išvežimas Kaune: sofų, spintų, lovų, virtuvės baldų išmontavimas ir utilizavimas. Greitas aptarnavimas.';

  const webPageLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Baldų išvežimas Kaune',
    url: canonicalUrl,
    description,
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: 'https://transportuok.lt/images/baldai.webp'
    },
    image: [
      'https://transportuok.lt/images/baldai-small.webp',
      'https://transportuok.lt/images/baldai-medium.webp',
      'https://transportuok.lt/images/baldai-large.webp'
    ],
    about: { '@type': 'Service', name: 'Baldų išvežimas Kaune' }
  } as const;

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Pradžia', item: 'https://transportuok.lt/' },
      { '@type': 'ListItem', position: 2, name: 'Paslaugos', item: 'https://transportuok.lt/paslaugos' },
      { '@type': 'ListItem', position: 3, name: 'Baldų išvežimas Kaune', item: canonicalUrl }
    ]
  } as const;

  const howToLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Kaip vyksta baldų išvežimas Kaune',
    totalTime: 'PT1H',
    supply: ['Baldai išvežimui'],
    tool: ['Transportas', 'Išmontavimo įrankiai'],
    step: [
      { '@type': 'HowToStep', name: 'Užklausa', text: 'Pateikite internetu arba telefonu kokius baldus reikia išvežti.' },
      { '@type': 'HowToStep', name: 'Laiko suderinimas', text: 'Suderiname patogų atvykimo laiką per 24 val.' },
      { '@type': 'HowToStep', name: 'Išmontavimas ir išnešimas', text: 'Komanda išardo (jei reikia) ir saugiai išneša.' },
      { '@type': 'HowToStep', name: 'Pakrovimas ir utilizavimas', text: 'Baldai pakraunami ir išvežami perdirbimui / utilizavimui.' }
    ]
  } as const;

  const provider = {
    name: company.legalName,
    url: company.domain,
    logo: '/ikona_spalvotas.svg',
    telephone: company.contacts.kaunas.phone,
    address: {
      streetAddress: 'Kauno g.',
      addressLocality: 'Kaunas',
      postalCode: company.contacts.kaunas.postalCode,
      addressCountry: 'LT'
    }
  };

  const faqItems = balduFAQ.map(q => {
    const question = q.question.includes('Kaune') ? q.question : q.question.replace('?', ' Kaune?');
    const extra = q.answer.includes('Regionas:') ? '' : `<p><strong>Regionas:</strong> Aptarnaujame Kauną ir priemiesčius (Garliava, Domeikava ir kt.).</p>`;
    return { ...q, question, answer: q.answer + extra };
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
      acceptedAnswer: { '@type': 'Answer', text: stripTags(q.answer) }
    }))
  } as const;

  return (
    <>
      <SEO title={title} description={description} canonicalUrl={canonicalUrl} structuredData={[faqStructuredData]} />
      <ServiceSchema
        name="Baldų išvežimas Kaune"
        description={description}
        image="https://transportuok.lt/images/baldai.webp"
        serviceId="baldu-isvezimas"
        provider={provider}
        areaServed="Kaunas"
      />
      <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      <script type="application/ld+json">{JSON.stringify(howToLd)}</script>
      <script type="application/ld+json">{JSON.stringify(webPageLd)}</script>
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Baldų išvežimas Kaune
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesionalus ir patogus senų baldų išvežimas visame Kauno mieste.
              Išvežame visų tipų baldus už prieinamą kainą.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              {/* Paslaugos aprašymas */}
              <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Kokius baldus išvežame?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Minkšti baldai</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span>Sofos ir kampai</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span>Foteliai</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span>Čiužiniai</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span>Lovos</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Korpusiniai baldai</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span>Spintos ir komodos</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span>Stalai ir kėdės</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span>Virtuvės baldai</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span>Sekcijos</span>
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
                        Nurodykite, kokius baldus reikia išvežti ir savo kontaktinius duomenis.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <span className="text-green-700 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Kainos pasiūlymas</h3>
                      <p className="text-gray-600">
                        Pateiksime tikslią kainą pagal baldų kiekį ir tipą.
                        Kaina priklauso nuo baldų dydžio ir išnešimo sudėtingumo.
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
                        Atvyksime sutartu laiku, profesionaliai išnešime ir išvešime baldus.
                        Pasirūpiname visu išvežimo procesu.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Mūsų privalumai</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Prieinamos kainos</h3>
                    <p className="text-gray-600">
                      Siūlome konkurencingas kainas, pritaikytas pagal baldų kiekį.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Profesionalus išnešimas</h3>
                    <p className="text-gray-600">
                      Mūsų komanda turi visus reikiamus įrankius ir patirtį saugiam baldų išnešimui.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Ekologiškas utilizavimas</h3>
                    <p className="text-gray-600">
                      Baldai perduodami perdirbimui arba pakartotiniam naudojimui.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Greitas aptarnavimas</h3>
                    <p className="text-gray-600">
                      Išvežimą organizuojame per 1-2 darbo dienas nuo užklausos gavimo.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Kontaktai */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">Susisiekite</h2>
                <div className="space-y-4">
                  <a
                    href="tel:+37069925744"
                    className="flex items-center text-gray-600 hover:text-green-600"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    +370 699 25744
                  </a>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    I–V: 8:00 - 18:00
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Truck className="w-5 h-5 mr-2" />
                    Aptarnaujame visą Kauną
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-green-50 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Užsakyti išvežimą</h2>
                <p className="text-gray-600 mb-6">
                  Užpildykite užklausą dabar ir gaukite baldų išvežimo pasiūlymą!
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
          <FAQ
            items={faqItems}
            title="Dažniausiai užduodami klausimai apie baldų išvežimą Kaune"
            suppressSchema
          />

          {/* Susijusios paslaugos */}
          <div className="mt-12 bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Susijusios paslaugos</h2>
            <div className="flex flex-wrap gap-3">
              <Link to="/paslaugos/buitines-technikos-isvezimas" className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">Buitinės technikos išvežimas</Link>
              <Link to="/paslaugos/elektronikos-atlieku-isvezimas" className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">Elektronikos atliekų išvežimas</Link>
              <Link to="/paslaugos/metalo-lauzo-isvezimas" className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">Metalo laužo išvežimas</Link>
              <Link to="/naujienos" className="px-4 py-2 bg-green-50 text-green-700 border border-green-200 rounded-lg hover:bg-green-100">Straipsniai ir patarimai</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Baldai;