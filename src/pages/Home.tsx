import React from 'react';
import { Link } from 'react-router-dom';
import heroBackground from '../assets/hero-bg-appliances.webp';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[80vh] sm:h-[600px] pt-[96px] flex items-center justify-center bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: `url(${heroBackground})` }}
        role="banner"
        aria-label="Pagrindinis puslapis"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Nemokamas buitinės technikos, elektronikos ir metalo laužo išvežimas Kaune
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 mb-6">
            Užpildykite užklausą bet kuriuo metu – susisieksime per 24 val.
          </p>
          <Link
            to="/contact#contact-form"
            className="inline-block bg-[#167d36] hover:bg-[#0f5a26] text-white font-bold text-base px-6 py-3 rounded-lg shadow-md transition-colors"
            aria-label="Pateikti užklausą dėl daiktų išvežimo"
          >
            Pateikti užklausą
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50" aria-label="Mūsų paslaugos">
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
                  alt="Išvežama buitinė technika – šaldytuvas, skalbimo mašina, viryklė"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  width="600"
                  height="192"
                  loading="lazy"
                />
              </picture>
              <h3 className="text-xl font-semibold mb-4">Buitinės technikos išvežimas</h3>
              <p className="text-gray-600 mb-4">
                Išvežame šaldytuvus, skalbimo mašinas, virykles ir kitus buities prietaisus – nemokamai.
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-[#167d36] hover:bg-[#0f5a26] text-white font-bold px-6 py-3 rounded-lg transition-colors"
                aria-label="Gauti nemokamą buitinės technikos išvežimą"
              >
                Gauti nemokamą išvežimą
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <picture>
                <source srcSet="/images/elektronika.webp" type="image/webp" />
                <img
                  src="/images/elektronika.png"
                  alt="Išvežama smulki elektronika – kompiuteriai, telefonai, televizoriai"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  width="600"
                  height="192"
                  loading="lazy"
                />
              </picture>
              <h3 className="text-xl font-semibold mb-4">Elektronikos išvežimas</h3>
              <p className="text-gray-600 mb-4">
                Kompiuterių, monitorių, televizorių ir kitos elektronikos išvežimas bei utilizavimas.
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-[#167d36] hover:bg-[#0f5a26] text-white font-bold px-6 py-3 rounded-lg transition-colors"
                aria-label="Susisiekti dėl elektronikos išvežimo"
              >
                Susisiekti dėl išvežimo
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <picture>
                <source srcSet="/images/baldai.webp" type="image/webp" />
                <img
                  src="/images/baldai.png"
                  alt="Senų baldų išvežimas – sofa, spinta, čiužinys"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  width="600"
                  height="192"
                  loading="lazy"
                />
              </picture>
              <h3 className="text-xl font-semibold mb-4">Baldų išvežimas</h3>
              <p className="text-gray-600 mb-4">
                Lovų, spintų, sofų, čiužinių ir kitų didelių daiktų išvežimas už simbolinį mokestį.
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-[#167d36] hover:bg-[#0f5a26] text-white font-bold px-6 py-3 rounded-lg transition-colors"
                aria-label="Užsakyti baldų išvežimą"
              >
                Užsakyti išvežimą
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <picture>
                <source srcSet="/images/metalo-lauzas.webp" type="image/webp" />
                <img
                  src="/images/metalo-lauzas.png"
                  alt="Surinktas metalo laužas iš garažo ir kiemo – vamzdžiai, dalys"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  width="600"
                  height="192"
                  loading="lazy"
                />
              </picture>
              <h3 className="text-xl font-semibold mb-4">Metalo laužo išvežimas</h3>
              <p className="text-gray-600 mb-4">
                Surenkame ir nemokamai išvežame metalo atliekas iš namų, garažų, sandėlių.
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-[#167d36] hover:bg-[#0f5a26] text-white font-bold px-6 py-3 rounded-lg transition-colors"
                aria-label="Gauti pasiūlymą dėl metalo laužo išvežimo"
              >
                Gauti pasiūlymą
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-[#167d36]" aria-label="Užsakymo kvietimas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Reikia išvežti seną buitinę techniką ar elektronikos atliekas?
          </h2>
          <p className="text-base sm:text-xl text-white mb-8">
            Užpildykite užklausą dabar ir gaukite nemokamą išvežimą!
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#167d36] px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold hover:bg-gray-100 transition-colors transform hover:scale-105 shadow-lg"
            aria-label="Gauti nemokamą daiktų išvežimą"
          >
            Gauti nemokamą išvežimą
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50" aria-label="Klientų atsiliepimai">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Klientų atsiliepimai
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-xl font-semibold text-[#167d36]">T</span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-semibold">Tomas Petrauskas</p>
                  <p className="text-gray-500">Kaunas</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Labai operatyvus ir profesionalus aptarnavimas. Atvyko laiku ir greitai išnešė seną šaldytuvą."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-xl font-semibold text-[#167d36]">L</span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-semibold">Laura Kazlauskienė</p>
                  <p className="text-gray-500">Kaunas</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Puiki paslauga! Išvežė seną skalbimo mašiną ir indaplovę. Rekomenduoju visiems."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-xl font-semibold text-[#167d36]">M</span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-semibold">Marius Jonaitis</p>
                  <p className="text-gray-500">Kaunas</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Greitai ir kokybiškai išvežė senus baldus. Labai patenkinti paslaugomis."
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <a 
              href="https://g.page/r/CX7p6Kq_HZ-pEB0/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#167d36] px-6 py-3 rounded-lg font-bold border-2 border-[#167d36] hover:bg-[#167d36] hover:text-white transition-colors"
              aria-label="Palikite atsiliepimą Google platformoje"
            >
              Palikite atsiliepimą
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;