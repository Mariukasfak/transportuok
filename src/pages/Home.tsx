import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { buildAbsoluteUrl, buildCanonicalUrl } from '../lib/seo';
import { trackCTAClick } from '../utils/analytics';
import OptimizedImage from '../components/OptimizedImage';
import LazyGoogleReviews from '../components/LazyGoogleReviews';
// Below-the-fold bundles split to reduce initial JS and speed LCP
const CitySelector = React.lazy(() => import('../components/CitySelector'));
const BlogSection = React.lazy(() => import('../components/BlogSection'));
const FAQ = React.lazy(() => import('../components/FAQ'));
import { homeFAQ } from '../data/faqData';
import { withSeoId } from '../lib/seo';

const Home = () => {
  const canonicalUrl = buildCanonicalUrl('/');
  const heroImage = buildAbsoluteUrl('/images/hero-bg-appliances.webp');
  // Add a handler for CTA clicks
  const handleCTAClick = (ctaId: string, ctaText: string) => {
    trackCTAClick(ctaId, ctaText);
  };

  return (
    <>
      <SEO
        title="Nemokamas buitinės technikos išvežimas Kaune ir Lietuvoje | Transportuok LT"
        description="Nemokamas buitinės technikos išvežimas Kaune. Išvežame šaldytuvus, skalbimo mašinas, televizorius ir kitą elektroniką Kaune, Vilniuje ir visoje Lietuvoje. Nemokama paslauga."
        canonicalUrl={canonicalUrl}
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': canonicalUrl,
            name: 'Transportuok.lt',
            description: 'Nemokamas buitinės technikos ir elektronikos išvežimas',
            url: canonicalUrl,
            telephone: '+370 699 25 744',
            areaServed: 'LT',
            image: heroImage,
            priceRange: 'Free',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Sukilėlių pr. 69',
              addressLocality: 'Kaunas',
              postalCode: '49336',
              addressCountry: 'LT',
              addressRegion: 'Kauno m. sav.'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 54.9253215,
              longitude: 23.9260707
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: 5.0,
              reviewCount: 114,
              bestRating: 5,
              worstRating: 1
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '18:00'
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Saturday', 'Sunday'],
                opens: '10:00',
                closes: '16:00'
              }
            ],
            sameAs: [
              'https://www.facebook.com/transportuoklt',
              'https://share.google/JCaKlktWGK8ffzJkp',
              'https://www.google.com/maps/place/Nemokamas+buitin%C4%97s+technikos+i%C5%A1ve%C5%BEimas+Lietuvoje+%7C+Transportuok.lt/@54.9336882,23.9215899,4990m/data=!3m1!1e3!4m6!3m5!1s0x46e7199566a10751:0x43765a5d67a55030!8m2!3d54.9253215!4d23.9260707!16s%2Fg%2F11gtzcck0t?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D'
            ]
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Nemokamas elektronikos ir buitinės technikos išvežimas',
            url: canonicalUrl,
            description: 'Nemokamas elektronikos ir buitinės technikos išvežimas Kaune, Vilniuje ir visoje Lietuvoje.',
            primaryImageOfPage: {
              '@type': 'ImageObject',
              url: heroImage
            },
            image: [
              heroImage
            ]
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Pradžia', item: canonicalUrl }
            ]
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            '@id': withSeoId(canonicalUrl, 'faq'),
            'inLanguage': 'lt',
            mainEntity: homeFAQ.map(q => ({
              '@type': 'Question',
              '@id': withSeoId(canonicalUrl, `question-${q.question.toLowerCase().replace(/[^\w]+/g, '-')}`),
              name: q.question,
              acceptedAnswer: { '@type': 'Answer', text: q.answer.replace(/<[^>]+>/g, '') }
            }))
          }
        ]}
      />

      <div className="min-h-screen">
        {/* Hero Section (explicit <img> for clearer LCP targeting & priority loading) */}
        <section className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
          <picture>
            {/* Responsive hero sources */}
            <source
              type="image/webp"
              srcSet="/images/optimized/hero-bg-appliances-small.webp 640w, /images/optimized/hero-bg-appliances-medium.webp 1280w, /images/optimized/hero-bg-appliances-large.webp 1600w, /images/optimized/hero-bg-appliances.webp 1920w"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            />
            <img
              src="/images/optimized/hero-bg-appliances-medium.webp"
              alt="Nemokamas buitinės technikos išvežimas Lietuvoje"
              fetchPriority="high"
              decoding="async"
              loading="eager"
              width={1920}
              height={1080}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </picture>
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1 className="hero-title">Buitinės technikos išvežimas iš namų – nemokamai</h1>
            <p className="hero-description">Kaunas, Vilnius ir visa Lietuva. Seno šaldytuvo, skalbimo mašinos ar elektronikos utilizavimas – greitai ir ekologiškai.</p>
            <Link
              to="/kontaktai#contact-form"
              className="inline-block bg-[#167d36] hover:bg-[#0f5a26] text-white font-bold text-base px-6 py-3 rounded-lg shadow-md transition-colors"
              onClick={() => handleCTAClick('hero_cta', 'Nemokamas išvežimas')}
            >
              Nemokamas išvežimas
            </Link>
          </div>
        </section>

        {/* GEO: Conclusion First summary block – AI search scannable */}
        <section className="bg-white py-10 border-b border-gray-100" aria-labelledby="summary-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="summary-heading" className="text-xl font-bold text-gray-900 mb-4">Trumpai: kas, kur ir kaip?</h2>
            <ul className="space-y-2 text-gray-700 text-base">
              <li>✅ <strong>Kas išvežama nemokamai:</strong> šaldytuvai, skalbimo mašinos, viryklės, orkaitės, indaplovės, televizoriai, kompiuteriai, metalo laužas</li>
              <li>✅ <strong>Kur:</strong> Kaunas, Vilnius ir visa Lietuva – atvykstame į namus, išnešame iš bet kurio aukšto</li>
              <li>✅ <strong>Kaina:</strong> 0 € – buitinė technika, elektronika ir metalo laužas (nuo 100 kg) išvežami visiškai nemokamai</li>
              <li>⏱ <strong>Atvykimo laikas:</strong> vidutiniškai 12–24 val. po registracijos Kaune; 24–48 val. Vilniuje</li>
              <li>⭐ <strong>Patikimumas:</strong> 140+ Google atsiliepimų, 5.0 įvertinimas – UAB „Karavanas LT", veikia nuo 2013 m.</li>
              <li>♻️ <strong>Utilizavimas:</strong> 100 % ekologiškas, pagal ES WEEE direktyvą 2012/19/ES – surinkta technika perduodama licencijuotiems perdirbimo centrams</li>
            </ul>
            <div className="mt-5">
              <Link
                to="/kontaktai#contact-form"
                className="inline-block bg-[#167d36] hover:bg-[#0f5a26] text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
                onClick={() => handleCTAClick('summary_cta', 'Užsakyti nemokamą išvežimą')}
              >
                Užsakyti nemokamą išvežimą →
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Mūsų teikiamos paslaugos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <OptimizedImage
                  src="/images/optimized/buitine-technika"
                  alt="Nemokamas šaldytuvų ir skalbimo mašinų išvežimas Kaune"
                  className="w-full h-48 rounded-lg mb-4"
                  width={600}
                  height={192}
                  loading="lazy"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
                <Link to="/paslaugos/buitines-technikos-isvezimas">
                  <h3 className="text-xl font-semibold mb-4 hover:text-green-600 transition-colors">
                    Buitinės technikos išvežimas
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4">
                  Išvežame <Link to="/buitines-technikos-isvezimas-kaune" className="text-green-800 underline decoration-2 underline-offset-2 font-semibold hover:text-green-900">šaldytuvus, skalbimo mašinas, virykles Kaune</Link> ir <Link to="/paslaugos/buitines-technikos-isvezimas/vilnius" className="text-green-700 hover:text-green-900">Vilniuje</Link> – nemokamai.
                </p>
                <Link
                  to="/buitines-technikos-isvezimas-kaune"
                  className="inline-block bg-[#167d36] hover:bg-[#0f5a26] text-white font-bold px-6 py-3 rounded-lg transition-colors"
                  onClick={() => handleCTAClick('service_cta_appliances', 'Gauti nemokamą išvežimą')}
                >
                  Išvežimas Kaune
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <OptimizedImage
                  src="/images/optimized/elektronika"
                  alt="Elektronikos atliekų surinkimas ir perdirbimas Kaune"
                  className="w-full h-48 rounded-lg mb-4"
                  width={600}
                  height={192}
                  loading="lazy"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
                <Link to="/paslaugos/elektronikos-atlieku-isvezimas">
                  <h3 className="text-xl font-semibold mb-4 hover:text-green-600 transition-colors">
                    Elektronikos išvežimas
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4">
                  <Link to="/paslaugos/elektronikos-atlieku-isvezimas" className="text-green-800 underline decoration-2 underline-offset-2 font-semibold hover:text-green-900">Kompiuterių, monitorių, televizorių</Link> ir kitos elektronikos išvežimas bei utilizavimas.
                </p>
                <Link
                  to="/kontaktai#contact-form"
                  className="inline-block bg-[#167d36] hover:bg-[#0f5a26] text-white font-bold px-6 py-3 rounded-lg transition-colors"
                  onClick={() => handleCTAClick('service_cta_electronics', 'Susisiekti dėl išvežimo')}
                >
                  Susisiekti dėl išvežimo
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <OptimizedImage
                  src="/images/optimized/baldai"
                  alt="Senų baldų išvežimas Kaune"
                  className="w-full h-48 rounded-lg mb-4"
                  width={600}
                  height={192}
                  loading="lazy"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
                <Link to="/paslaugos/baldu-isvezimas">
                  <h3 className="text-xl font-semibold mb-4 hover:text-green-600 transition-colors">
                    Baldų išvežimas
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4">
                  <Link to="/paslaugos/baldu-isvezimas" className="text-green-800 underline decoration-2 underline-offset-2 font-semibold hover:text-green-900">Lovų, spintų, sofų, čiužinių</Link> ir kitų didelių daiktų išvežimas už simbolinį mokestį.
                </p>
                <Link
                  to="/kontaktai#contact-form"
                  className="inline-block bg-[#167d36] hover:bg-[#0f5a26] text-white font-bold px-6 py-3 rounded-lg transition-colors"
                  onClick={() => handleCTAClick('service_cta_furniture', 'Užsakyti išvežimą')}
                >
                  Užsakyti išvežimą
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <OptimizedImage
                  src="/images/optimized/metalo-lauzas"
                  alt="Metalo laužo surinkimas ir išvežimas Kaune"
                  className="w-full h-48 rounded-lg mb-4"
                  width={600}
                  height={192}
                  loading="lazy"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
                <Link to="/paslaugos/metalo-lauzo-isvezimas">
                  <h3 className="text-xl font-semibold mb-4 hover:text-green-600 transition-colors">
                    Metalo laužo išvežimas
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4">
                  Surenkame ir nemokamai išvežame <Link to="/paslaugos/metalo-lauzo-isvezimas" className="text-green-800 underline decoration-2 underline-offset-2 font-semibold hover:text-green-900">metalo atliekas</Link> iš namų, garažų, sandėlių.
                </p>
                <Link
                  to="/kontaktai#contact-form"
                  className="inline-block bg-[#167d36] hover:bg-[#0f5a26] text-white font-bold px-6 py-3 rounded-lg transition-colors"
                  onClick={() => handleCTAClick('service_cta_metal', 'Užsakyti išvežimą')}
                >
                  Užsakyti išvežimą
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* GEO: Comparison table – AI search scannable structured data */}
        <section className="py-12 bg-white" aria-labelledby="comparison-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="comparison-heading" className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Kaip skiriasi turimos galimybės?
            </h2>
            <p className="text-gray-500 text-sm text-center mb-6">Seną šaldytuvą, skalbimo mašiną ar elektroniką galimybės išvežti</p>
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-gray-600 uppercase text-xs font-semibold">
                  <tr>
                    <th className="px-4 py-3">Galimybė</th>
                    <th className="px-4 py-3">Kaina</th>
                    <th className="px-4 py-3">Laukimo laikas</th>
                    <th className="px-4 py-3">Išneša iš aukšto?</th>
                    <th className="px-4 py-3">Legalu?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-green-50 font-medium">
                    <td className="px-4 py-3 text-green-800">✅ Transportuok.lt</td>
                    <td className="px-4 py-3 text-green-700 font-bold">Nemokama</td>
                    <td className="px-4 py-3">12–24 val. (Kaunas)</td>
                    <td className="px-4 py-3 text-green-700">Taip, bet kuris aukštas</td>
                    <td className="px-4 py-3 text-green-700">Taip – ES WEEE</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 text-gray-700">Savivaldybės surinkimo aikštelė</td>
                    <td className="px-4 py-3">Nemokama</td>
                    <td className="px-4 py-3">Pats turi atvežti</td>
                    <td className="px-4 py-3 text-red-600">Ne – pats privalo atvežti</td>
                    <td className="px-4 py-3 text-green-700">Taip</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-gray-700">Parduotuvių paėmimas</td>
                    <td className="px-4 py-3">Nemokama</td>
                    <td className="px-4 py-3">Tik perkant naują</td>
                    <td className="px-4 py-3 text-yellow-700">Paprastai taip</td>
                    <td className="px-4 py-3 text-green-700">Taip</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 text-gray-700">Privatūs vežėjai</td>
                    <td className="px-4 py-3 text-red-700">30–80 €</td>
                    <td className="px-4 py-3">1–3 d.d.</td>
                    <td className="px-4 py-3 text-yellow-700">Mokamas priedas</td>
                    <td className="px-4 py-3 text-yellow-700">Kartais</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-gray-700">Išmesti į konteinerį</td>
                    <td className="px-4 py-3">Nemokama</td>
                    <td className="px-4 py-3">Iš karto</td>
                    <td className="px-4 py-3 text-red-600">Ne</td>
                    <td className="px-4 py-3 text-red-700 font-semibold">Ne – bauda iki 500 €</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">* Buitinė technika priskiriama EEĮA atliekoms pagal ES direktyvą 2012/19/ES – draudžiama mesti į buitinių atliekų konteinerius.</p>
          </div>
        </section>

        {/* CTA Section */}

        <section className="py-12 sm:py-16 bg-[#167d36]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Reikia išvežti seną buitinę techniką ar elektronikos atliekas?
            </h2>
            <p className="text-base sm:text-xl text-white mb-8">
              Užpildykite užklausą dabar ir gaukite nemokamą išvežimą!
            </p>
            <Link
              to="/kontaktai#contact-form"
              className="inline-block bg-white text-[#167d36] px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold hover:bg-gray-100 transition-colors transform hover:scale-105 shadow-lg"
              onClick={() => handleCTAClick('cta_section', 'Gauti nemokamą išvežimą')}
            >
              Gauti nemokamą išvežimą
            </Link>
          </div>
        </section>

        {/* Partners teaser */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-gray-200 bg-gradient-to-r from-green-50 to-emerald-50 p-8 sm:p-12 shadow-sm">
              <div className="max-w-3xl">
                <span className="inline-flex items-center rounded-full bg-green-100 text-green-700 px-3 py-1 text-xs font-semibold tracking-wide uppercase">Partnerystė</span>
                <h2 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">Atraskite mūsų partnerius</h2>
                <p className="mt-3 text-gray-700">
                  Dirbame su atrinktais partneriais, kurie papildo mūsų išvežimo paslaugas – nuo itališkos kavos tiekėjų iki eksterjero sprendimų ir pramoninių utilizavimo specialistų.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  to="/partneriai"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#167d36] px-5 py-3 text-sm font-semibold text-white shadow transition-colors hover:bg-[#0f5a26]"
                >
                  Peržiūrėti partnerius
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* City Selector (lazy) */}
        <React.Suspense fallback={<div className="py-20 text-center text-gray-500">Įkeliami miestai...</div>}>
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <CitySelector />
            </div>
          </section>
        </React.Suspense>

        {/* Blog Section (lazy) */}
        <React.Suspense fallback={<div className="py-20 text-center text-gray-500">Įkeliami straipsniai...</div>}>
          <BlogSection />
        </React.Suspense>

        {/* FAQ Section */}
        <React.Suspense fallback={null}>
          <div className="bg-gray-50 py-12">
            <FAQ items={homeFAQ} title="Dažniausiai užduodami klausimai" suppressSchema />
          </div>
        </React.Suspense>

        {/* Reviews Section */}
        <React.Suspense fallback={
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Klientų atsiliepimai</h2>
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#167d36]"></div>
              </div>
            </div>
          </section>
        }>
          <LazyGoogleReviews />
        </React.Suspense>
      </div>
    </>
  );
};

export default Home;