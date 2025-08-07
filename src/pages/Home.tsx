import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { trackCTAClick } from '../utils/analytics';
import OptimizedImage from '../components/OptimizedImage';
import LazyGoogleReviews from '../components/LazyGoogleReviews';
import CitySelector from '../components/CitySelector';
import BlogSection from '../components/BlogSection';
import ContactInfo from '../components/ContactInfo';
import CertificatesSection from '../components/CertificatesSection';

const Home = () => {
  // Add a handler for CTA clicks
  const handleCTAClick = (ctaId: string, ctaText: string) => {
    trackCTAClick(ctaId, ctaText);
  };

  return (
    <>
      <Helmet>
        <title>Elektronikos ir buitinės technikos išvežimas Lietuvoje | Transportuok.lt</title>
        <meta name="description" content="Nemokamas elektronikos, buitinės technikos išvežimas Kaune, Vilniuje ir visoje Lietuvoje. Baldų išvežimas Kaune. Greitas surinkimas per 24 val. Transportuok.lt ir Karavanas.lt partnerystė." />
        <link rel="canonical" href="https://transportuok.lt" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section
          className="hero-section"
          style={{ backgroundImage: `url('/images/optimized/hero-bg-appliances.webp')` }}
        >
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1 className="hero-title">
              Elektronikos ir buitinės technikos išvežimas Lietuvoje
            </h1>
            <p className="hero-description">
              Kaunas, Vilnius ir visa Lietuva. Partnerių tinklas užtikrina greitą ir profesionalų aptarnavimą.
            </p>
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
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  width={600}
                  height={192}
                  loading="lazy"
                />
                <Link to="/paslaugos/buitines-technikos-isvezimas">
                  <h3 className="text-xl font-semibold mb-4 hover:text-green-600 transition-colors">
                    Buitinės technikos išvežimas
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4">
                  Išvežame <Link to="/paslaugos/buitines-technikos-isvezimas" className="text-green-600 hover:text-green-700">šaldytuvus, skalbimo mašinas, virykles</Link> ir kitus buities prietaisus – nemokamai.
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
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  width={600}
                  height={192}
                  loading="lazy"
                />
                <Link to="/paslaugos/elektronikos-atlieku-isvezimas">
                  <h3 className="text-xl font-semibold mb-4 hover:text-green-600 transition-colors">
                    Elektronikos išvežimas
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4">
                  <Link to="/paslaugos/elektronikos-atlieku-isvezimas" className="text-green-600 hover:text-green-700">Kompiuterių, monitorių, televizorių</Link> ir kitos elektronikos išvežimas bei utilizavimas.
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
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  width={600}
                  height={192}
                  loading="lazy"
                />
                <Link to="/paslaugos/baldu-isvezimas">
                  <h3 className="text-xl font-semibold mb-4 hover:text-green-600 transition-colors">
                    Baldų išvežimas
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4">
                  <Link to="/paslaugos/baldu-isvezimas" className="text-green-600 hover:text-green-700">Lovų, spintų, sofų, čiužinių</Link> ir kitų didelių daiktų išvežimas už simbolinį mokestį.
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
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  width={600}
                  height={192}
                  loading="lazy"
                />
                <Link to="/paslaugos/metalo-lauzo-isvezimas">
                  <h3 className="text-xl font-semibold mb-4 hover:text-green-600 transition-colors">
                    Metalo laužo išvežimas
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4">
                  Surenkame ir nemokamai išvežame <Link to="/paslaugos/metalo-lauzo-isvezimas" className="text-green-600 hover:text-green-700">metalo atliekas</Link> iš namų, garažų, sandėlių.
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

        {/* City Selector */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CitySelector />
          </div>
        </section>

        {/* Blog Section */}
        <BlogSection />

        {/* Contact Information */}
        <ContactInfo />

        {/* Certificates */}
        <CertificatesSection />

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