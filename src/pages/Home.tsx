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
        title="Nemokamas buitinės technikos išvežimas | Transportuok LT"
        description="Nemokamas buitinės technikos ir elektronikos išvežimas Kaune, Vilniuje ir visoje Lietuvoje. Išvežame šaldytuvus, skalbimo mašinas, televizorius ir kitą elektroniką. Taip pat baldų ir metalo laužo išvežimas."
        canonicalUrl={canonicalUrl}
        structuredData={[
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
            <h1 className="hero-title">Nemokamas buitinės technikos išvežimas Lietuvoje</h1>
            <p className="hero-description">Kaunas, Vilnius ir visa Lietuva. Nemokamai išvežame buitinę techniką ir elektroniką – greitai ir patikimai.</p>
            <Link
              to="/kontaktai#contact-form"
              className="inline-block bg-[#167d36] hover:bg-[#0f5a26] text-white font-bold text-base px-6 py-3 rounded-lg shadow-md transition-colors"
              onClick={() => handleCTAClick('hero_cta', 'Pateikti užklausą')}
            >
              Pateikti užklausą
            </Link>
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
                  Išvežame <Link to="/paslaugos/buitines-technikos-isvezimas" className="text-green-800 underline decoration-2 underline-offset-2 font-semibold hover:text-green-900">šaldytuvus, skalbimo mašinas, virykles</Link> ir kitus buities prietaisus – nemokamai.
                </p>
                <Link
                  to="/kontaktai#contact-form"
                  className="inline-block bg-[#167d36] hover:bg-[#0f5a26] text-white font-bold px-6 py-3 rounded-lg transition-colors"
                  onClick={() => handleCTAClick('service_cta_appliances', 'Gauti nemokamą išvežimą')}
                >
                  Gauti nemokamą išvežimą
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