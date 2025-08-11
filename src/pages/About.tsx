import { Shield, Users, BadgeCheck, Building2, MapPin, Phone, Mail, Calendar } from 'lucide-react';
import company from '../data/company';
import SEO from '../components/SEO';

const About = () => {
  const years = new Date().getFullYear() - 2012; // pvz. start year 2012
  const title = `Apie ${company.legalName} | Nemokamas elektronikos ir buitinės technikos išvežimas`;
  const description = 'UAB "Karavanas LT" – profesionalus elektronikos ir buitinės technikos išvežimas Lietuvoje. Patirtis, patikimumas, rekvizitai ir kontaktai vienoje vietoje.';
  const canonicalUrl = `${company.domain}/apie-mus`;

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Pradžia', item: `${company.domain}/` },
      { '@type': 'ListItem', position: 2, name: 'Apie mus', item: canonicalUrl }
    ]
  } as const;

  return (
    <>
      <SEO title={title} description={description} canonicalUrl={canonicalUrl} structuredData={breadcrumbLd} />
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">Apie {company.legalName}</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Nemokamas elektronikos ir buitinės technikos išvežimas Vilniuje ir visoje Lietuvoje. Dirbame skaidriai, greitai ir atsakingai – jau daugiau nei {years} metų.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BadgeCheck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Patirtis</h3>
              <p className="text-gray-600">{years}+ metų patirtis išvežimo ir logistikos srityje. Tūkstančiai patenkintų klientų.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Komanda</h3>
              <p className="text-gray-600">16 kvalifikuotų darbuotojų, pasirengusių padėti nuo konsultacijos iki išvežimo ir dokumentų.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Patikimumas</h3>
              <p className="text-gray-600">Turime visus reikalingus leidimus ir užtikriname atsakingą atliekų tvarkymą.</p>
            </div>
          </div>

          {/* What we do */}
          <div className="bg-white rounded-lg shadow p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">Ką darome?</h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>Elektronikos atliekų surinkimas ir utilizavimas</li>
                <li>Buitinės technikos išvežimas (šaldytuvai, skalbimo mašinos, viryklės ir kt.)</li>
                <li>Smulkios elektronikos surinkimas (kompiuteriai, monitoriai, TV)</li>
                <li>Transporto sprendimai nestandartiniams atvejams</li>
              </ul>
              <ul className="list-disc list-inside space-y-2">
                <li>Greitas atvykimas didmiesčiuose</li>
                <li>Nemokamos paslaugos pagal atliekų tipą/kiekį</li>
                <li>Dokumentų sutvarkymas ir perdavimo aktai</li>
                <li>Darbai pagal ESG ir atliekų tvarkymo reikalavimus</li>
              </ul>
            </div>
          </div>

          {/* Coverage & Contacts */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 rounded-lg p-8 border border-green-200">
              <h3 className="text-xl font-semibold mb-3 flex items-center"><MapPin className="w-5 h-5 mr-2 text-green-700" />Aptarnavimo teritorija</h3>
              <p className="text-gray-700 mb-3">Vilnius, Kaunas ir visa Lietuva. Maršrutai planuojami taip, kad būtų greita ir patogu.</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Didmiesčiai – atvykimas per 24 val.</li>
                <li>Rajonų centrai – 2–3 d. pagal grafiką</li>
                <li>Kaimo vietovės – pagal susitarimą</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 flex items-center"><Building2 className="w-5 h-5 mr-2 text-blue-700" />Įmonės rekvizitai</h3>
              <div className="text-gray-700 space-y-1">
                <p><strong>{company.legalName}</strong></p>
                <p>Įmonės kodas: {company.rekvizitai.imonesKodas}</p>
                <p>PVM kodas: {company.rekvizitai.pvmKodas}</p>
                <p>Adresas: {company.contacts.vilnius.address}</p>
              </div>
            </div>
          </div>

          {/* Contacts */}
          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-bold mb-4">Kontaktai</h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h3 className="font-semibold mb-2">Vilnius ir visa Lietuva</h3>
                <p className="flex items-center mb-1"><Phone className="w-4 h-4 mr-2 text-blue-700" />{company.contacts.vilnius.phone}</p>
                <p className="flex items-center"><Mail className="w-4 h-4 mr-2 text-blue-700" />{company.contacts.vilnius.email}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Kaunas ir regionas</h3>
                <p className="flex items-center mb-1"><Phone className="w-4 h-4 mr-2 text-green-700" />{company.contacts.kaunas.phone}</p>
                <p className="flex items-center"><Mail className="w-4 h-4 mr-2 text-green-700" />{company.contacts.kaunas.email}</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4 flex items-center"><Calendar className="w-4 h-4 mr-2" />Atsakome darbo dienomis</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;