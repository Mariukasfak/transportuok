import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroBackground from '../assets/hero-bg-appliances.webp';
import GoogleReviews from '../components/GoogleReviews';

const Home = () => {
  useEffect(() => {
    // Update meta tags
    document.title = 'Nemokamas buitinės technikos išvežimas Kaune | Transportuok.lt';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Nemokamas šaldytuvų, skalbimo mašinų ir kitos buitinės technikos išvežimas Kaune. Atliekų surinkimas greitai ir patikimai. Užsakykite išvežimą dabar - atvykstame per 24 val.');
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    
    if (ogTitle) ogTitle.setAttribute('content', 'Nemokamas buitinės technikos išvežimas Kaune | Transportuok.lt');
    if (ogDescription) ogDescription.setAttribute('content', 'Greitas ir nemokamas buitinės technikos, elektronikos ir metalo laužo išvežimas Kaune. Užsakykite paslaugą internetu!');
    if (ogUrl) ogUrl.setAttribute('content', 'https://transportuok.lt');

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://transportuok.lt');
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[80vh] sm:h-[600px] pt-[96px] flex items-center justify-center bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Nemokamas buitinės technikos išvežimas Kaune
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 mb-6">
            Užpildykite užklausą bet kuriuo metu – susisieksime per 24 val.
          </p>
          <Link
            to="/kontaktai#contact-form"
            className="inline-block bg-[#167d36] hover:bg-[#0f5a26] text-white font-bold text-base px-6 py-3 rounded-lg shadow-md transition-colors"
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
              <picture>
                <source srcSet="/images/buitine-technika.webp" type="image/webp" />
                <img
                  src="/images/buitine-technika.png"
                  alt="Nemokamas šaldytuvų ir skalbimo mašinų išvežimas Kaune - Transportuok.lt specialistai"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  width="600"
                  height="192"
                  loading="lazy"
                />
              </picture>
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
              >
                Gauti nemokamą išvežimą
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <picture>
                <source srcSet="/images/elektronika.webp" type="image/webp" />
                <img
                  src="/images/elektronika.png"
                  alt="Elektronikos atliekų surinkimas ir perdirbimas Kaune - kompiuteriai, televizoriai"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  width="600"
                  height="192"
                  loading="lazy"
                />
              </picture>
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
              >
                Susisiekti dėl išvežimo
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <picture>
                <source srcSet="/images/baldai.webp" type="image/webp" />
                <img
                  src="/images/baldai.png"
                  alt="Senų baldų išvežimas Kaune - sofos, spintos, čiužiniai"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  width="600"
                  height="192"
                  loading="lazy"
                />
              </picture>
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
              >
                Užsakyti išvežimą
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <picture>
                <source srcSet="/images/metalo-lauzas.webp" type="image/webp" />
                <img
                  src="/images/metalo-lauzas.png"
                  alt="Metalo laužo surinkimas ir išvežimas Kaune - vamzdžiai, konstrukcijos"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  width="600"
                  height="192"
                  loading="lazy"
                />
              </picture>
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
              >
                Gauti pasiūlymą
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
          >
            Gauti nemokamą išvežimą
          </Link>
        </div>
      </section>

      {/* Reviews Section */}
      <GoogleReviews />
    </div>
  );
};

export default Home;