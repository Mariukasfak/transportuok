import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { buildCanonicalUrl } from '../lib/seo';
import partners from '../data/partners';
import PartnersSection from '../components/PartnersSection';

const Partners = () => {
  const title = 'Partneriai | Transportuok LT tinklas visoje Lietuvoje';
  const description = 'Atrinkti partneriai, papildantys Transportuok LT paslaugas: kavos tiekimas, SPA ir eksterjero sprendimai, pramoninės atliekų supirkimo komandos ir daugiau.';
  const canonicalUrl = buildCanonicalUrl('/partneriai');
  const homeUrl = buildCanonicalUrl('/');

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Pradžia', item: homeUrl },
      { '@type': 'ListItem', position: 2, name: 'Partneriai', item: canonicalUrl }
    ]
  } as const;

  const partnersLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Transportuok LT partneriai',
    description: 'Oficialūs Transportuok LT partneriai, papildantys mūsų logistikos, atliekų tvarkymo ir eksterjero sprendimus.',
    itemListElement: partners.map((partner, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Organization',
        name: partner.name,
        url: partner.url,
        description: partner.description,
        sameAs: partner.sameAs ?? []
      }
    }))
  } as const;

  return (
    <>
      <SEO title={title} description={description} canonicalUrl={canonicalUrl} structuredData={[breadcrumbLd, partnersLd]} />
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-green-100 text-green-700 px-4 py-1 text-sm font-semibold tracking-wide uppercase">Partnerystė</span>
            <h1 className="mt-6 text-3xl sm:text-4xl font-bold text-gray-900">Mūsų patikimų partnerių tinklas</h1>
            <p className="mt-4 text-lg text-gray-700">
              Transportuok LT projektus papildo stiprūs partneriai visoje Lietuvoje. Jie užtikrina, kad klientams galėtume pasiūlyti išplėstą paslaugų spektrą – pradedant kavos aparatais biurams ir baigiant pramoninių atliekų supirkimu.
            </p>
            <p className="mt-3 text-gray-600">
              Žemiau rasite organizacijas, kuriomis pasitikime. Kiekvienas iš jų – tai papildoma vertė mūsų klientams, tvarkantiems atliekas ar ieškantiems sprendimų namams ir verslui.
            </p>
          </div>
        </div>
      </section>

      <PartnersSection />

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900">Norite prisijungti prie partnerių tinklo?</h2>
              <p className="mt-3 text-gray-700">
                Dirbate srityje, kuri papildo mūsų paslaugas ar gali suteikti pridėtinę vertę Transportuok LT klientams? Parašykite mums ir aptarsime bendradarbiavimo galimybes.
              </p>
              <Link
                to="/kontaktai#contact-form"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#167d36] px-5 py-3 text-sm font-semibold text-white shadow transition-colors hover:bg-[#0f5a26]"
              >
                Siųsti pasiūlymą
                <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="rounded-2xl border border-blue-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900">Esamiems partneriams</h2>
              <p className="mt-3 text-gray-700">
                Jau bendradarbiaujate su Transportuok LT ir turite klausimų dėl projektų, komunikacijos ar medžiagos atnaujinimų? Susisiekite su mūsų komanda ir gausite operatyvų atsakymą.
              </p>
              <Link
                to="/kontaktai"
                className="mt-6 inline-flex items-center gap-2 rounded-lg border border-blue-600 px-5 py-3 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50"
              >
                Susisiekti su komanda
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
