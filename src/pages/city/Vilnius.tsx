import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import company from '../../data/company';
import SEO from '../../components/SEO';
import { buildAbsoluteUrl, buildCanonicalUrl, withSeoId } from '../../lib/seo';

const VilniusPage: React.FC = () => {
    const title = `Buitinės technikos ir elektronikos išvežimas Vilniuje | ${company.brandName}`;
    const description = 'Nemokamas buitinės technikos ir elektronikos išvežimas Vilniuje ir Vilniaus rajone. Greita rezervacija, patikimas aptarnavimas, aiškūs terminai.';
    const contact = company.contacts.vilnius;
    const { phone: tel, telHref, email, address, postalCode, directionsUrl } = contact;
    const canonicalUrl = buildCanonicalUrl('/vilnius');
    const logoUrl = buildAbsoluteUrl('/ikona_spalvotas.svg');
    const telNormalized = telHref.replace('tel:', '');
    const napId = withSeoId(canonicalUrl, 'nap');
    const serviceAreas = ['Senamiestis', 'Naujamiestis', 'Šnipiškės', 'Antakalnis', 'Pilaitė', 'Pašilaičiai', 'Šeškinė', 'Justiniškės', 'Lazdynai', 'Vilniaus rajonas'];
    const localBusinessLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': napId,
        name: `${company.brandName} – Vilnius`,
        url: canonicalUrl,
        image: logoUrl,
        telephone: telNormalized,
        email: email,
        address: {
            '@type': 'PostalAddress',
            streetAddress: address,
            addressLocality: 'Vilnius',
            postalCode: postalCode,
            addressCountry: 'LT'
        },
        areaServed: [{ '@type': 'City', name: 'Vilnius' }, { '@type': 'AdministrativeArea', name: 'Vilniaus rajonas' }],
        openingHoursSpecification: [{
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '18:00'
        }],
        priceRange: '€0-€€',
        contactPoint: [{
            '@type': 'ContactPoint',
            contactType: 'customer service',
            areaServed: ['Vilnius', 'Vilniaus rajonas'],
            availableLanguage: ['lt'],
            telephone: telNormalized,
            email: email
        }]
    } as const;
    const napStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'PostalAddress',
        '@id': withSeoId(canonicalUrl, 'nap-address'),
        name: `${company.brandName} Vilnius`,
        streetAddress: address,
        addressLocality: 'Vilnius',
        postalCode: postalCode,
        addressCountry: 'LT',
        telephone: telNormalized
    } as const;
    const breadcrumbLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Pradžia', item: `${company.domain}/` },
            { '@type': 'ListItem', position: 2, name: 'Vilnius', item: canonicalUrl }
        ]
    } as const;

    return (
        <div className="py-12">
            <SEO title={title} description={description} canonicalUrl={canonicalUrl} structuredData={[localBusinessLd, breadcrumbLd, napStructuredData]} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold mb-2">Išvežimas Vilniuje</h1>
                    <p className="text-gray-600">Buitinės technikos ir elektronikos išvežimas Vilniuje bei Vilniaus rajone.</p>
                </header>

                <section className="grid md:grid-cols-3 gap-6 mb-10">
                    <div className="md:col-span-2 bg-white rounded-lg p-6 shadow">
                        <h2 className="text-2xl font-semibold mb-4">Ką išvežame</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Šaldytuvai, skalbimo mašinos, viryklės</li>
                            <li>Kompiuteriai, monitoriai, TV ir kita elektronika</li>
                            <li>Stambūs daiktai pagal susitarimą</li>
                        </ul>
                        <div className="mt-6">
                            <h3 className="font-semibold mb-2">Procesas</h3>
                            <ol className="list-decimal pl-6 space-y-1 text-gray-700">
                                <li>Pateikite užklausą (forma ar telefonu)</li>
                                <li>Suderiname laiką</li>
                                <li>Atvykstame, išnešame ir išvežame</li>
                            </ol>
                        </div>
                    </div>
                    <aside className="bg-green-50 rounded-lg p-6 border border-green-200">
                        <h3 className="text-xl font-semibold mb-3">Kontaktai (Vilnius)</h3>
                        <p className="text-gray-700"><strong>Tel.:</strong> <a className="text-green-700 font-medium" href={telHref}>{tel}</a></p>
                        <p className="text-gray-700"><strong>El. paštas:</strong> {email}</p>
                        <p className="text-gray-700"><strong>Adresas:</strong> {address}</p>
                        <div className="mt-4 flex gap-2">
                            <a href={telHref} className="px-4 py-2 rounded bg-green-600 text-white">Skambinti</a>
                            <a href="/kontaktai#contact-form" className="px-4 py-2 rounded border border-green-600 text-green-700">Pateikti užklausą</a>
                            <a href={directionsUrl} target="_blank" rel="noopener" className="px-4 py-2 rounded border border-green-600 text-green-700">Directions</a>
                        </div>
                    </aside>
                </section>

                <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                  <div
                    className="bg-white rounded-lg shadow p-6 lg:p-8 border border-gray-100"
                    itemScope
                    itemType="https://schema.org/LocalBusiness"
                    itemID={napId}
                  >
                    <meta itemProp="name" content={`${company.brandName} – Vilnius`} />
                    <meta itemProp="url" content={canonicalUrl} />
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">NAP informacija Vilniuje</h2>
                    <dl className="space-y-4 text-gray-700">
                      <div>
                        <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Adresas</dt>
                        <dd>
                          <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                            <span itemProp="streetAddress">{address}</span>,{' '}
                            <span itemProp="postalCode">{postalCode}</span>{' '}
                            <span itemProp="addressLocality">Vilnius</span>
                          </span>
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Telefonas</dt>
                        <dd>
                          <a itemProp="telephone" href={telHref} className="font-semibold text-green-700 hover:text-green-800">
                            {tel}
                          </a>
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wide">El. paštas</dt>
                        <dd>
                          <a itemProp="email" href={`mailto:${email}`} className="text-green-700 hover:text-green-800">
                            {email}
                          </a>
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Darbo laikas</dt>
                        <dd className="space-y-1">
                          <span itemProp="openingHours" content="Mo-Fr 08:00-18:00">I–V: 8:00–18:00</span>
                          <span itemProp="openingHours" content="Sa 09:00-15:00">VI: 9:00–15:00</span>
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Įmonės rekvizitai</dt>
                        <dd className="text-sm">
                          Įm. kodas: {company.rekvizitai.imonesKodas}<br />
                          PVM kodas: {company.rekvizitai.pvmKodas}
                        </dd>
                      </div>
                    </dl>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={telHref}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                      >
                        Skambinti dabar
                      </a>
                      <a
                        href={directionsUrl}
                        className="px-4 py-2 border border-green-600 text-green-700 rounded-lg hover:bg-green-50 transition-colors"
                      >
                        Naviguoti į adresą
                      </a>
                      <Link
                        to="/kontaktai#contact-form"
                        className="px-4 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Greita užklausa
                      </Link>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 lg:p-8">
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">Vilniaus klientų privalumai</h2>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                        <span>Nemokamas elektronikos surinkimas visuose Vilniaus rajonuose ir priemiestyje.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                        <span>Saugus duomenų laikmenų sunaikinimas bei atliekų perdavimas licencijuotiems partneriams.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                        <span>Organizuojame maršrutus po visą Lietuvą – galima derinti regioninius surinkimus.</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <h3 className="text-sm font-semibold text-blue-800 tracking-wide uppercase mb-2">Aptarnaujami rajonai</h3>
                      <div className="flex flex-wrap gap-2">
                        {serviceAreas.map((area) => (
                          <span key={area} className="px-3 py-1 bg-white text-blue-800 border border-blue-200 rounded-full text-sm">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="mt-6 text-sm text-blue-900">
                      Dirbate Kaune ar kituose miestuose? Susipažinkite su{' '}
                      <Link to="/kaunas" className="font-semibold underline decoration-2 decoration-blue-500 hover:text-blue-700">
                        Kauno padalinio galimybėmis
                      </Link>{' '}
                      ir <Link to="/paslaugos/elektronikos-atlieku-isvezimas" className="font-semibold underline decoration-2 decoration-blue-500 hover:text-blue-700">
                        nacionaliniu elektronikos išvežimo sprendimu
                      </Link>.
                    </p>
                  </div>
                </section>
            </div>
        </div>
    );
};

export default VilniusPage;
