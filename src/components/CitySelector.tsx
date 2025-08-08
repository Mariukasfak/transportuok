import React, { useState } from 'react';
import { MapPin, Phone, Mail, Building } from 'lucide-react';

interface CityData {
  name: string;
  region: string;
  services: string[];
  contacts: {
    phone: string;
    email: string;
    company: string;
  };
  coverage: string;
}

const cityData: Record<string, CityData> = {
  kaunas: {
    name: 'Kaunas',
    region: 'Kauno region',
    services: [
      'Baldų išvežimas',
      'Buitinės technikos išvežimas',
      'Elektronikos išvežimas',
      'Metalo laužo išvežimas'
    ],
    contacts: {
      phone: '+370 699 25 744',
      email: 'info@transportuok.lt',
      company: 'UAB "Karavanas LT"'
    },
    coverage: 'Kaunas ir Kauno rajonas'
  },
  vilnius: {
    name: 'Vilnius',
    region: 'Vilniaus region',
    services: [
      'Elektronikos surinkimas ir išvežimas',
      'Buitinės technikos išvežimas',
      'Transporto paslaugos',
      'Atliekų tvarkymas'
    ],
    contacts: {
      phone: '+370 664 24 024',
      email: 'karavanaslt@gmail.com',
      company: 'UAB "Karavanas LT"'
    },
    coverage: 'Vilnius ir Vilniaus rajonas'
  },
  lietuva: {
    name: 'Visa Lietuva',
    region: 'Visos Lietuvos apskritys',
    services: [
      'Elektronikos surinkimas visoje Lietuvoje',
      'Buitinės technikos išvežimas',
      'Transporto paslaugos',
      'Elektronikos atliekų surinkimas ir utilizavimas'
    ],
    contacts: {
      phone: '+370 664 24 024',
      email: 'karavanaslt@gmail.com',
      company: 'UAB "Karavanas LT"'
    },
    coverage: 'Visa Lietuva'
  }
};

const CitySelector: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [showContactForm, setShowContactForm] = useState(false);

  const handleCitySelect = (cityKey: string) => {
    setSelectedCity(cityKey);
    setShowContactForm(true);
  };

  const selectedData = selectedCity ? cityData[selectedCity] : null;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Pasirinkite savo miestą arba regioną
        </h2>
        <p className="text-lg text-gray-600">
          Teikiame paslaugas visoje Lietuvoje
        </p>
      </div>

      {/* City Selection */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {Object.entries(cityData).map(([key, data]) => (
          <div
            key={key}
            onClick={() => handleCitySelect(key)}
            className={`cursor-pointer p-6 rounded-lg border-2 transition-all duration-300 hover:shadow-lg ${selectedCity === key
              ? 'border-green-500 bg-green-50'
              : 'border-gray-200 hover:border-green-300'
              }`}
          >
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-green-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">{data.name}</h3>
            </div>

            <p className="text-gray-600 mb-4">{data.coverage}</p>

            <div className="space-y-2">
              {data.services.slice(0, 2).map((service, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-700">{service}</span>
                </div>
              ))}
              {data.services.length > 2 && (
                <p className="text-sm text-green-600 font-medium">
                  +{data.services.length - 2} daugiau paslaugų
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Contact Information */}
      {showContactForm && selectedData && (
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <div className="flex items-center mb-6">
            <Building className="h-6 w-6 text-green-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">
              {selectedData.name} - Kontaktai
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Susisiekite su mumis
              </h4>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-green-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">{selectedData.contacts.phone}</p>
                    <p className="text-sm text-gray-600">Atsakome darbo dienomis</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-green-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">{selectedData.contacts.email}</p>
                    <p className="text-sm text-gray-600">Atsakome darbo dienomis</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Building className="h-5 w-5 text-green-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">{selectedData.contacts.company}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services List */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Teikiamos paslaugos
              </h4>

              <div className="space-y-3">
                {selectedData.services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-green-100 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Aptarnavimo zona:</strong> {selectedData.coverage}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${selectedData.contacts.phone.replace(/\s/g, '')}`}
              className="flex-1 bg-green-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Skambinti dabar
            </a>
            <a
              href={`mailto:${selectedData.contacts.email}?subject=${encodeURIComponent(`Užklausa iš ${selectedData.name}`)}&body=${encodeURIComponent(`Sveiki, norėčiau gauti informacijos apie jūsų teikiamas paslaugas ${selectedData.name} mieste.`)}`}
              className="flex-1 bg-white text-green-600 text-center py-3 px-6 rounded-lg font-semibold border-2 border-green-600 hover:bg-green-50 transition-colors"
            >
              Rašyti el. laišką
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default CitySelector;
