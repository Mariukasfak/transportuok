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
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/ikona_spalvotas.svg"
                alt="Transportuok.lt logotipas"
                className="h-8 w-8"
                width="32"
                height="32"
              />
              <span className="text-lg sm:text-xl font-bold text-green-700 ml-2">Transportuok.lt</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-green-700 font-semibold' : 'text-gray-800'} hover:text-green-700 transition-colors`}
            >
              Pradžia
            </Link>
            <Link 
              to="/services" 
              className={`${isActive('/services') ? 'text-green-700 font-semibold' : 'text-gray-800'} hover:text-green-700 transition-colors`}
            >
              Paslaugos
            </Link>
            <Link 
              to="/about" 
              className={`${isActive('/about') ? 'text-green-700 font-semibold' : 'text-gray-800'} hover:text-green-700 transition-colors`}
            >
              Apie mus
            </Link>
            <Link 
              to="/blog" 
              className={`${isActive('/blog') ? 'text-green-700 font-semibold' : 'text-gray-800'} hover:text-green-700 transition-colors`}
            >
              Naujienos
            </Link>
            <Link 
              to="/contact" 
              className={`${isActive('/contact') ? 'text-green-700 font-semibold' : 'text-gray-800'} hover:text-green-700 transition-colors`}
            >
              Kontaktai
            </Link>

            {/* Booking options */}
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+37069925744" 
                className="flex items-center px-4 py-2 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-semibold">+370 699 25744</span>
              </a>
              <Link
                to="/contact#contact-form"
                onClick={handleRegistrationClick}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Registracija internetu
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
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
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                isActive('/') ? 'text-green-700 bg-green-50' : 'text-gray-800 hover:text-green-700 hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Pradžia
            </Link>
            <Link 
              to="/services" 
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                isActive('/services') ? 'text-green-700 bg-green-50' : 'text-gray-800 hover:text-green-700 hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Paslaugos
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                isActive('/about') ? 'text-green-700 bg-green-50' : 'text-gray-800 hover:text-green-700 hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Apie mus
            </Link>
            <Link 
              to="/blog" 
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                isActive('/blog') ? 'text-green-700 bg-green-50' : 'text-gray-800 hover:text-green-700 hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Naujienos
            </Link>
            <Link 
              to="/contact" 
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                isActive('/contact') ? 'text-green-700 bg-green-50' : 'text-gray-800 hover:text-green-700 hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Kontaktai
            </Link>

            {/* Mobile booking options */}
            <div className="px-3 py-2 space-y-2">
              <a 
                href="tel:+37069925744" 
                className="flex items-center justify-center w-full px-4 py-2 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-5 h-5 mr-2" />
                <span className="font-semibold">+370 699 25744</span>
              </a>
              <Link
                to="/contact#contact-form"
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