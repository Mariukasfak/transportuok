import React from 'react';
import { Helmet } from 'react-helmet-async';
import company from '../../data/company';

const KaunasPage: React.FC = () => {
    const tel = company.contacts.kaunas.phone;
    const telHref = company.contacts.kaunas.telHref;
    return (
        <div className="py-12">
            <Helmet>
                <title>Buitinės technikos ir elektronikos išvežimas Kaune | {company.brandName}</title>
                <meta name="description" content="Nemokamas buitinės technikos ir elektronikos išvežimas Kaune ir Kauno rajone. Greita rezervacija, aiškios kainos, patikimas aptarnavimas." />
                <link rel="canonical" href={`${company.domain}/kaunas`} />
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'LocalBusiness',
                        name: `${company.brandName} – Kaunas`,
                        url: `${company.domain}/kaunas`,
                        telephone: company.contacts.kaunas.phone,
                        email: company.contacts.kaunas.email,
                        address: {
                            '@type': 'PostalAddress',
                            streetAddress: company.contacts.kaunas.address,
                            addressLocality: 'Kaunas',
                            postalCode: company.contacts.kaunas.postalCode,
                            addressCountry: 'LT'
                        },
                        areaServed: 'Kaunas ir Kauno rajonas',
                        image: `${company.domain}/images/optimized/hero-bg-appliances.webp`,
                        openingHours: [
                            'Mo-Fr 08:00-18:00'
                        ]
                    })}
                </script>
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold mb-2">Išvežimas Kaune</h1>
                    <p className="text-gray-600">Greitas ir nemokamas buitinės technikos bei elektronikos išvežimas Kauno mieste ir rajone.</p>
                </header>

                <section className="grid md:grid-cols-3 gap-6 mb-10">
                    <div className="md:col-span-2 bg-white rounded-lg p-6 shadow">
                        <h2 className="text-2xl font-semibold mb-4">Ką išvežame</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Šaldytuvai, skalbimo mašinos, indaplovės, viryklės</li>
                            <li>Kompiuteriai, monitoriai, TV ir kita elektronika</li>
                            <li>Metalo laužas ir stambūs daiktai (pagal susitarimą)</li>
                        </ul>
                        <div className="mt-6">
                            <h3 className="font-semibold mb-2">Procesas</h3>
                            <ol className="list-decimal pl-6 space-y-1 text-gray-700">
                                <li>Pateikite užklausą (forma ar telefonu)</li>
                                <li>Suderiname laiką (dažniausiai tą pačią ar kitą dieną)</li>
                                <li>Atvykstame, išnešame ir išvežame</li>
                            </ol>
                        </div>
                    </div>
                    <aside className="bg-green-50 rounded-lg p-6 border border-green-200">
                        <h3 className="text-xl font-semibold mb-3">Kontaktai (Kaunas)</h3>
                        <p className="text-gray-700"><strong>Tel.:</strong> <a className="text-green-700 font-medium" href={telHref}>{tel}</a></p>
                        <p className="text-gray-700"><strong>El. paštas:</strong> {company.contacts.kaunas.email}</p>
                        <p className="text-gray-700"><strong>Adresas:</strong> {company.contacts.kaunas.address}</p>
                        <div className="mt-4 flex gap-2">
                            <a href={telHref} className="px-4 py-2 rounded bg-green-600 text-white">Skambinti</a>
                            <a href="/kontaktai#contact-form" className="px-4 py-2 rounded border border-green-600 text-green-700">Pateikti užklausą</a>
                            <a href={company.contacts.kaunas.directionsUrl} target="_blank" rel="noopener" className="px-4 py-2 rounded border border-green-600 text-green-700">Directions</a>
                        </div>
                    </aside>
                </section>
            </div>
        </div>
    );
};

export default KaunasPage;
