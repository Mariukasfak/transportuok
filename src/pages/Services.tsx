import { Link } from 'react-router-dom';
import { Truck, Monitor, Touchpad as Couch, Recycle } from 'lucide-react';
import SEO from '../components/SEO';
import company from '../data/company';
import { buildCanonicalUrl, withSeoId } from '../lib/seo';

const Services = () => {
  const title = 'Buitinės technikos, baldų ir elektronikos išvežimas Kaune | Karavanas LT';
  const description = 'Profesionalus buitinės technikos, baldų, elektronikos ir metalo laužo išvežimas Kaune. Nemokamas išvežimas, greitas aptarnavimas ir ekologiškas utilizavimas.';
  const canonicalUrl = buildCanonicalUrl('/paslaugos');
  const homeCanonical = buildCanonicalUrl('/');
  const serviceUrls = {
    appliances: buildCanonicalUrl('/paslaugos/buitines-technikos-isvezimas'),
    electronics: buildCanonicalUrl('/paslaugos/elektronikos-atlieku-isvezimas'),
    furniture: buildCanonicalUrl('/paslaugos/baldu-isvezimas'),
    metal: buildCanonicalUrl('/paslaugos/metalo-lauzo-isvezimas')
  } as const;
  const serviceIds = {
    appliances: withSeoId(homeCanonical, 'service-buitines-technikos-isvezimas'),
    electronics: withSeoId(homeCanonical, 'service-elektronikos-atlieku-isvezimas'),
    furniture: withSeoId(homeCanonical, 'service-baldu-isvezimas'),
    metal: withSeoId(homeCanonical, 'service-metalo-lauzo-isvezimas')
  } as const;
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Pradžia', item: homeCanonical },
      { '@type': 'ListItem', position: 2, name: 'Paslaugos', item: canonicalUrl }
    ]
  } as const;

  const itemListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Paslaugų sąrašas',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: { '@type': 'Service', '@id': serviceIds.appliances, url: serviceUrls.appliances, name: 'Buitinės technikos išvežimas' }
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: { '@type': 'Service', '@id': serviceIds.electronics, url: serviceUrls.electronics, name: 'Elektronikos atliekų išvežimas' }
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: { '@type': 'Service', '@id': serviceIds.furniture, url: serviceUrls.furniture, name: 'Baldų išvežimas' }
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: { '@type': 'Service', '@id': serviceIds.metal, url: serviceUrls.metal, name: 'Metalo laužo išvežimas' }
      }
    ]
  } as const;

  return (
    <>
      <SEO title={title} description={description} canonicalUrl={canonicalUrl} structuredData={[breadcrumbLd, itemListLd]} />
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Mūsų teikiamos paslaugos</h1>
            <p className="text-xl text-gray-600">Profesionalus ir ekologiškas atliekų išvežimas Kaune ir apylinkėse</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Buitinės technikos išvežimas Kaune – nemokamai</h2>
              <div className="text-gray-600 space-y-4 mb-6">
                <p>
                  Išvežame senus buities prietaisus: šaldytuvus, skalbimo mašinas, virykles, indaploves, džiovykles ir kt.
                  Paslauga skirta tiek gyventojams, tiek įmonėms, kurie nori greitai atsikratyti nenaudojamos technikos.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Išvežimas nemokamas
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Atliekos perduodamos licencijuotam perdirbėjui
                  </li>
                </ul>
                <p className="font-medium">
                  Susisiekite – viską sutvarkysime greitai ir atsakingai.
                </p>
              </div>
              <Link
                to="/kontaktai#contact-form"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Gauti nemokamą išvežimą
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Monitor className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Elektronikos išvežimas Kaune – nemokamai</h2>
              <div className="text-gray-600 space-y-4 mb-6">
                <p>
                  Surenkame įvairią mažą ir didelę elektroniką: kompiuterius, monitorius, spausdintuvus, garso kolonėles, mikrobangų krosneles ir kt.
                  Tinka tiems, kas atsinaujina techniką ar tvarko namus / biurą.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Išvežame nemokamai
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Elektronikos atliekos utilizuojamos pagal ES reikalavimus
                  </li>
                </ul>
                <p className="font-medium">
                  Užpildykite užklausą internetu – atvyksime sutartu metu.
                </p>
              </div>
              <Link
                to="/kontaktai#contact-form"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Pateikti užklausą
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Couch className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Baldų išvežimas Kaune – greitai ir patikimai</h2>
              <div className="text-gray-600 space-y-4 mb-6">
                <p>
                  Išvežame įvairius nereikalingus baldus: sofas, lovas, čiužinius, spintas, stalus, kėdes ir kt.
                  Paslauga skirta tiems, kas keičia baldus, kraustosi ar atnaujina namus.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Greitas išvežimas tiesiai iš namų
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Už mažą mokestį, priklausantį nuo daiktų kiekio
                  </li>
                </ul>
                <p className="font-medium">
                  Susisiekite dėl kainos – pasiūlymą pateiksime per 1 darbo dieną.
                </p>
              </div>
              <Link
                to="/kontaktai#contact-form"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Gauti pasiūlymą
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Recycle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Metalo laužo išvežimas Kaune – nemokamai</h2>
              <div className="text-gray-600 space-y-4 mb-6">
                <p>
                  Surenkame ir išvežame metalo atliekas: metalines duris, vamzdžius, radiatorius, konstrukcijas, tvoras, automobilių dalis ir kt.
                  Aktualu tiems, kas tvarko kiemą, sandėlį ar renovuoja pastatą.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Išvežimas nemokamas
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Metalas saugiai pristatomas į perdirbimo aikšteles
                  </li>
                </ul>
                <p className="font-medium">
                  Parašykite mums – įvertinsime situaciją ir pasiūlysime sprendimą.
                </p>
              </div>
              <Link
                to="/kontaktai#contact-form"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Gauti nemokamą išvežimą
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;