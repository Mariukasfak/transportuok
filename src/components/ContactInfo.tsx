import React from 'react';
import { Phone, Mail, MapPin, Building, Users, TrendingUp } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mūsų kontaktai ir rekvizitai
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Patikimi partneriai išvežimo paslaugų srityje Kaune, Vilniuje ir visoje Lietuvoje
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Karavanas LT - Kaunas */}
          <div className="bg-green-50 rounded-lg p-8 border border-green-200">
            <div className="flex items-center mb-6">
              <div className="bg-green-600 p-3 rounded-lg mr-4">
                <Building className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-900">Karavanas LT</h3>
                <p className="text-green-700">Kaunas ir Kauno regionas</p>
              </div>
            </div>

            {/* Services */}
            <div className="mb-6">
              <h4 className="font-semibold text-green-900 mb-3">Teikiamos paslaugos:</h4>
              <div className="space-y-2">
                <div className="flex items-center text-green-800">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Baldų išvežimas (tik Kauno regionas)
                </div>
                <div className="flex items-center text-green-800">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Buitinės technikos išvežimas
                </div>
                <div className="flex items-center text-green-800">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Elektronikos išvežimas
                </div>
                <div className="flex items-center text-green-800">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Metalo laužo surinkimas
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center text-green-800">
                <Phone className="h-5 w-5 mr-3" />
                <div>
                  <a href="tel:+37069925744" className="font-semibold text-lg hover:text-green-900">
                    +370 699 25 744
                  </a>
                  <p className="text-sm text-green-600">Skambinkite 24/7</p>
                </div>
              </div>

              <div className="flex items-center text-green-800">
                <Mail className="h-5 w-5 mr-3" />
                <div>
                  <a href="mailto:info@transportuok.lt" className="font-semibold hover:text-green-900">
                    info@transportuok.lt
                  </a>
                  <p className="text-sm text-green-600">Atsakysime per 2 valandas</p>
                </div>
              </div>

              <div className="flex items-center text-green-800">
                <MapPin className="h-5 w-5 mr-3" />
                <div>
                  <p className="font-semibold">Kaunas ir Kauno rajonas</p>
                  <p className="text-sm text-green-600">Visa Kauno apskritis</p>
                </div>
              </div>
            </div>
          </div>

          {/* UAB "Karavanas LT" - Vilnius */}
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 p-3 rounded-lg mr-4">
                <Building className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900">UAB "Karavanas LT"</h3>
                <p className="text-blue-700">Vilnius ir visa Lietuva</p>
              </div>
            </div>

            {/* Services */}
            <div className="mb-6">
              <h4 className="font-semibold text-blue-900 mb-3">Teikiamos paslaugos:</h4>
              <div className="space-y-2">
                <div className="flex items-center text-blue-800">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Elektronikos surinkimas ir išvežimas
                </div>
                <div className="flex items-center text-blue-800">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Buitinės technikos išvežimas
                </div>
                <div className="flex items-center text-blue-800">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Transporto paslaugos
                </div>
                <div className="flex items-center text-blue-800">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Atliekų tvarkymas
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center text-blue-800">
                <Phone className="h-5 w-5 mr-3" />
                <div>
                  <a href="tel:+37066424024" className="font-semibold text-lg hover:text-blue-900">
                    +370 664 24 024
                  </a>
                  <p className="text-sm text-blue-600">Darbo laikas: 8:00-20:00</p>
                </div>
              </div>

              <div className="flex items-center text-blue-800">
                <Mail className="h-5 w-5 mr-3" />
                <div>
                  <a href="mailto:karavanaslt@gmail.com" className="font-semibold hover:text-blue-900">
                    karavanaslt@gmail.com
                  </a>
                  <p className="text-sm text-blue-600">Oficialus el. paštas</p>
                </div>
              </div>

              <div className="flex items-center text-blue-800">
                <MapPin className="h-5 w-5 mr-3" />
                <div>
                  <p className="font-semibold">M. K. Čiurlionio g. 1-47, Vilnius</p>
                  <p className="text-sm text-blue-600">Visa Lietuvos teritorija</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Details - UAB Karavanas LT */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            UAB "Karavanas LT" oficialūs rekvizitai
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Company Code */}
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-lg mb-3">
                <Building className="h-8 w-8 text-blue-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Įmonės kodas</h4>
              <p className="text-gray-600">302705147</p>
            </div>

            {/* VAT Code */}
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-lg mb-3">
                <TrendingUp className="h-8 w-8 text-green-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">PVM kodas</h4>
              <p className="text-gray-600">LT100006580016</p>
            </div>

            {/* Employees */}
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-lg mb-3">
                <Users className="h-8 w-8 text-purple-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Darbuotojai</h4>
              <p className="text-gray-600">16 specialistų</p>
            </div>

            {/* Experience */}
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-lg mb-3">
                <TrendingUp className="h-8 w-8 text-orange-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Patirtis</h4>
              <p className="text-gray-600">13+ metų</p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Įmonės informacija</h4>
              <div className="space-y-2 text-gray-600">
                <p><strong>Įkūrimo data:</strong> 2011-12-30</p>
                <p><strong>Vadovas:</strong> Artūras Gudelevičius</p>
                <p><strong>Įstatinis kapitalas:</strong> 2,900 EUR</p>
                <p><strong>Transporto priemonės:</strong> 11 automobilių</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Finansiniai rodikliai (2024 m.)</h4>
              <div className="space-y-2 text-gray-600">
                <p><strong>Pardavimo pajamos:</strong> 759,505 EUR</p>
                <p><strong>Grynasis pelnas:</strong> 59,575 EUR</p>
                <p><strong>Vidutinis atlyginimas:</strong> 2,118 EUR</p>
                <p><strong>Kredito rizika:</strong> Žemiausia</p>
              </div>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="mt-8 p-4 bg-white rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              <strong>Veiklos sritys:</strong> Transporto paslaugos, automobilių prekyba,
              elektronikos ir buitinės technikos išvežimas, atliekų tvarkymas.
              Visi duomenys paimti iš oficialių šaltinių ir atitinka LR įstatymų reikalavimus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
