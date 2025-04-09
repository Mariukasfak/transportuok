import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Transportuok.lt</h3>
            <p className="text-gray-400">
              Profesionalus buitinės technikos ir elektronikos atliekų išvežimas Kaune ir apylinkėse.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontaktai</h4>
            <div className="space-y-2">
              <a href="tel:+37069925744" className="flex items-center text-gray-400 hover:text-white">
                <Phone className="w-4 h-4 mr-2" />
                +370 699 25744
              </a>
              <a href="mailto:info@transportuok.lt" className="flex items-center text-gray-400 hover:text-white">
                <Mail className="w-4 h-4 mr-2" />
                info@transportuok.lt
              </a>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                Kaunas, Lietuva
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigacija</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white">Pradžia</Link>
              <Link to="/paslaugos/buitines-technikos-isvezimas" className="block text-gray-400 hover:text-white">Buitinės technikos išvežimas</Link>
              <Link to="/paslaugos/elektronikos-atlieku-isvezimas" className="block text-gray-400 hover:text-white">Elektronikos išvežimas</Link>
              <Link to="/paslaugos/baldu-isvezimas" className="block text-gray-400 hover:text-white">Baldų išvežimas</Link>
              <Link to="/paslaugos/metalo-lauzo-isvezimas" className="block text-gray-400 hover:text-white">Metalo laužo išvežimas</Link>
              <Link to="/apie-mus" className="block text-gray-400 hover:text-white">Apie mus</Link>
              <Link to="/naujienos" className="block text-gray-400 hover:text-white">Naujienos</Link>
              <Link to="/kontaktai" className="block text-gray-400 hover:text-white">Kontaktai</Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Darbo laikas</h4>
            <div className="space-y-2 text-gray-400">
              <p>Pirm - Penkt: 8:00 - 18:00</p>
              <p>Šešt: 9:00 - 15:00</p>
              <p>Sekm: Nedirbame</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Transportuok.lt. Visos teisės saugomos.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;