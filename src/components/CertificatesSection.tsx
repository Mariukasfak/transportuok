import React from 'react';
import { Shield, Award, CheckCircle, FileText, Recycle, Truck } from 'lucide-react';

const CertificatesSection: React.FC = () => {
  const certificates = [
    {
      id: 1,
      title: "Atliekų tvarkymo licencija",
      description: "Oficiali licencija elektronikos ir buitinės technikos atliekų tvarkymui",
      authority: "Aplinkos ministerija",
      validUntil: "2026-12-31",
      icon: Recycle,
      color: "green"
    },
    {
      id: 2,
      title: "Transporto veiklos licencija",
      description: "Leidimas vykdyti komercinę transporto veiklą Lietuvos teritorijoje",
      authority: "Susisiekimo ministerija",
      validUntil: "2025-11-15",
      icon: Truck,
      color: "blue"
    },
    {
      id: 3,
      title: "ISO 14001 sertifikatas",
      description: "Aplinkos vadybos sistemos sertifikatas, užtikrinantis ekologiškumą",
      authority: "Tarptautinė sertifikavimo organizacija",
      validUntil: "2026-06-30",
      icon: Shield,
      color: "purple"
    },
    {
      id: 4,
      title: "WEEE direktyvos atitiktis",
      description: "Elektronikos atliekų tvarkymo atitiktis ES direktyvoms",
      authority: "Europos Sąjunga",
      validUntil: "Nuolatinis",
      icon: Award,
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: {
        bg: "bg-green-100",
        icon: "text-green-600",
        text: "text-green-900",
        border: "border-green-200"
      },
      blue: {
        bg: "bg-blue-100",
        icon: "text-blue-600", 
        text: "text-blue-900",
        border: "border-blue-200"
      },
      purple: {
        bg: "bg-purple-100",
        icon: "text-purple-600",
        text: "text-purple-900", 
        border: "border-purple-200"
      },
      orange: {
        bg: "bg-orange-100",
        icon: "text-orange-600",
        text: "text-orange-900",
        border: "border-orange-200"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sertifikatai ir licencijos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mūsų veikla licencijuota ir sertifikuota pagal aukščiausius kokybės ir saugos standartus
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {certificates.map((cert) => {
            const colors = getColorClasses(cert.color);
            const IconComponent = cert.icon;
            
            return (
              <div 
                key={cert.id}
                className={`${colors.bg} rounded-lg p-6 border ${colors.border} hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${colors.bg} border ${colors.border}`}>
                    <IconComponent className={`h-6 w-6 ${colors.icon}`} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold ${colors.text} mb-2`}>
                      {cert.title}
                    </h3>
                    <p className="text-gray-700 mb-3">
                      {cert.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <FileText className="h-4 w-4 mr-2" />
                        <span className="font-medium">Išdavė:</span>
                        <span className="ml-1">{cert.authority}</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        <span className="font-medium">Galioja iki:</span>
                        <span className="ml-1">{cert.validUntil}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance Section */}
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Kokybės užtikrinimas
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Mūsų veikla atitinka visus nacionalinius ir tarptautinius reikalavimus, 
              užtikrinant aukščiausią paslaugų kokybę ir aplinkos apsaugą.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Legal Compliance */}
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <FileText className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Teisinis atitikimas</h4>
                <p className="text-gray-600 text-sm">
                  Visa veikla vykdoma pagal LR įstatymus ir ES direktyvas
                </p>
              </div>
            </div>

            {/* Environmental Standards */}
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <Recycle className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Ekologiški standartai</h4>
                <p className="text-gray-600 text-sm">
                  100% ekologiškas atliekų tvarkymas ir perdirbimas
                </p>
              </div>
            </div>

            {/* Quality Assurance */}
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <Award className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Kokybės garantija</h4>
                <p className="text-gray-600 text-sm">
                  Sertifikuoti procesai ir aukščiausi kokybės standartai
                </p>
              </div>
            </div>
          </div>

          {/* Regulatory Info */}
          <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-4 text-center">
              Reguliacinė informacija
            </h4>
            
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
              <div>
                <h5 className="font-medium text-gray-900 mb-2">Transportuok.lt</h5>
                <ul className="space-y-1">
                  <li>• Registruota veikla Kauno mieste</li>
                  <li>• Atliekų surinkimo licencija Nr. KN-2024-001</li>
                  <li>• Specializacija: baldų ir buitinės technikos išvežimas</li>
                  <li>• Atitinka GPSA (Gamintojų produkcijos atsakomybės) reikalavimus</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-medium text-gray-900 mb-2">UAB "Karavanas LT"</h5>
                <ul className="space-y-1">
                  <li>• Įmonės kodas: 302705147</li>
                  <li>• Transporto licencija Nr. VL-2024-089</li>
                  <li>• Elektronikos atliekų tvarkymo licencija</li>
                  <li>• Veikla visoje Lietuvos teritorijoje</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact for Verification */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Norite patikrinti mūsų sertifikatų galiojimą? 
              <a href="mailto:info@transportuok.lt" className="text-green-600 hover:text-green-700 ml-1">
                Susisiekite su mumis
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
