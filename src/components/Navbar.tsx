import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone, Calendar, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleRegistrationClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Left: Logo */}
          <div className="flex items-center flex-shrink-0 mr-2 lg:mr-4">
            <Link to="/" className="flex items-center">
              <img
                src="/ikona_spalvotas.svg"
                alt="Transportuok.lt logotipas"
                className="h-8 w-8 flex-shrink-0"
                width="32"
                height="32"
              />
              {/* Visible brand text on mobile */}
              <span className="ml-2 font-bold text-green-700 text-base sm:text-lg md:hidden">Transportuok.lt</span>
              {/* And again on very large screens */}
              <span className="hidden 2xl:inline ml-2 font-bold text-green-700 text-lg whitespace-nowrap">Transportuok.lt</span>
            </Link>
          </div>

          {/* Center: Primary navigation */}
          <div className="hidden md:flex items-center flex-1 pl-2 sm:pl-4 space-x-4 lg:space-x-8 whitespace-nowrap">
            <Link
              to="/"
              className={`${isActive('/') ? 'text-green-700 font-semibold' : 'text-gray-800'} hover:text-green-700 transition-colors`}
            >
              Pradžia
            </Link>
            <div className="relative group">
              <span className={`${location.pathname.includes('/paslaugos/') ? 'text-green-700 font-semibold' : 'text-gray-800'} hover:text-green-700 transition-colors cursor-pointer`}>
                Paslaugos
              </span>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    to="/paslaugos/buitines-technikos-isvezimas"
                    className="block px-4 py-2 text-gray-800 hover:bg-green-50 hover:text-green-700"
                  >
                    Buitinės technikos išvežimas
                  </Link>
                  <Link
                    to="/paslaugos/elektronikos-atlieku-isvezimas"
                    className="block px-4 py-2 text-gray-800 hover:bg-green-50 hover:text-green-700"
                  >
                    Elektronikos atliekų išvežimas
                  </Link>
                  <Link
                    to="/paslaugos/baldu-isvezimas"
                    className="block px-4 py-2 text-gray-800 hover:bg-green-50 hover:text-green-700"
                  >
                    Baldų išvežimas
                  </Link>
                  <Link
                    to="/paslaugos/metalo-lauzo-isvezimas"
                    className="block px-4 py-2 text-gray-800 hover:bg-green-50 hover:text-green-700"
                  >
                    Metalo laužo išvežimas
                  </Link>
                </div>
              </div>
            </div>
            <Link
              to="/apie-mus"
              className={`${isActive('/apie-mus') ? 'text-green-700 font-semibold' : 'text-gray-800'} hover:text-green-700 transition-colors`}
            >
              Apie mus
            </Link>
            <Link
              to="/naujienos"
              className={`${isActive('/naujienos') ? 'text-green-700 font-semibold' : 'text-gray-800'} hover:text-green-700 transition-colors`}
            >
              Naujienos
            </Link>
            <Link
              to="/kontaktai"
              className={`${isActive('/kontaktai') ? 'text-green-700 font-semibold' : 'text-gray-800'} hover:text-green-700 transition-colors`}
            >
              Kontaktai
            </Link>
          </div>

          {/* Right: Actions (phones + registration) */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3 ml-3 lg:ml-5">
            <a
              href="tel:+37069925744"
              className="flex items-center px-3 lg:px-4 py-2 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors text-sm whitespace-nowrap"
              aria-label="Skambinti Kaunas: +370 699 25744"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="hidden xl:inline text-xs font-medium mr-2">Kaunas</span>
              <span className="font-semibold">+370 699 25744</span>
            </a>
            <a
              href="tel:+37066424024"
              className="flex items-center px-3 lg:px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm whitespace-nowrap"
              aria-label="Skambinti Vilnius: +370 664 24024"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="hidden xl:inline text-xs font-medium mr-2">Vilnius</span>
              <span className="font-semibold">+370 664 24024</span>
            </a>
            <Link
              to="/kontaktai#contact-form"
              onClick={handleRegistrationClick}
              className="flex items-center px-3 lg:px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span className="hidden xl:inline">Registracija internetu</span>
              <span className="xl:hidden">Registracija</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-green-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2 text-base font-medium rounded-md ${isActive('/') ? 'text-green-700 bg-green-50' : 'text-gray-800 hover:text-green-700 hover:bg-gray-50'
                }`}
              onClick={() => setIsOpen(false)}
            >
              Pradžia
            </Link>
            <div className="space-y-1 pl-3">
              <div className="px-3 py-2 text-base font-medium text-gray-800">Paslaugos:</div>
              <Link
                to="/paslaugos/buitines-technikos-isvezimas"
                className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-green-700 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Buitinės technikos išvežimas
              </Link>
              <Link
                to="/paslaugos/elektronikos-atlieku-isvezimas"
                className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-green-700 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Elektronikos atliekų išvežimas
              </Link>
              <Link
                to="/paslaugos/baldu-isvezimas"
                className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-green-700 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Baldų išvežimas
              </Link>
              <Link
                to="/paslaugos/metalo-lauzo-isvezimas"
                className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-green-700 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Metalo laužo išvežimas
              </Link>
            </div>
            <Link
              to="/apie-mus"
              className={`block px-3 py-2 text-base font-medium rounded-md ${isActive('/apie-mus') ? 'text-green-700 bg-green-50' : 'text-gray-800 hover:text-green-700 hover:bg-gray-50'
                }`}
              onClick={() => setIsOpen(false)}
            >
              Apie mus
            </Link>
            <Link
              to="/naujienos"
              className={`block px-3 py-2 text-base font-medium rounded-md ${isActive('/naujienos') ? 'text-green-700 bg-green-50' : 'text-gray-800 hover:text-green-700 hover:bg-gray-50'
                }`}
              onClick={() => setIsOpen(false)}
            >
              Naujienos
            </Link>
            <Link
              to="/kontaktai"
              className={`block px-3 py-2 text-base font-medium rounded-md ${isActive('/kontaktai') ? 'text-green-700 bg-green-50' : 'text-gray-800 hover:text-green-700 hover:bg-gray-50'
                }`}
              onClick={() => setIsOpen(false)}
            >
              Kontaktai
            </Link>

            {/* Mobile booking options */}
            <div className="px-3 py-2 space-y-2">
              {/* Kaunas */}
              <a
                href="tel:+37069925744"
                className="flex items-center justify-center w-full px-4 py-2 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors"
                onClick={() => setIsOpen(false)}
                aria-label="Skambinti Kaunas: +370 699 25744"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span className="text-xs font-medium mr-2">Kaunas</span>
                <span className="font-semibold whitespace-nowrap">+370 699 25744</span>
              </a>
              {/* Vilnius */}
              <a
                href="tel:+37066424024"
                className="flex items-center justify-center w-full px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                onClick={() => setIsOpen(false)}
                aria-label="Skambinti Vilnius: +370 664 24024"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span className="text-xs font-medium mr-2">Vilnius</span>
                <span className="font-semibold whitespace-nowrap">+370 664 24024</span>
              </a>
              <Link
                to="/kontaktai#contact-form"
                onClick={handleRegistrationClick}
                className="flex items-center justify-center w-full px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Registracija internetu
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;