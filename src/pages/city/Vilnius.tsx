import company from '../../data/company';
import SEO from '../../components/SEO';

const VilniusPage: React.FC = () => {
    const tel = company.contacts.vilnius.phone;
    const telHref = company.contacts.vilnius.telHref;
    const title = `Buitinės technikos ir elektronikos išvežimas Vilniuje | ${company.brandName}`;
    const description = 'Nemokamas buitinės technikos ir elektronikos išvežimas Vilniuje ir Vilniaus rajone. Greita rezervacija, patikimas aptarnavimas, aiškūs terminai.';
    const canonicalUrl = `${company.domain}/vilnius`;
    const localBusinessLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: `${company.brandName} – Vilnius`,
        url: canonicalUrl,
        telephone: company.contacts.vilnius.phone,
        email: company.contacts.vilnius.email,
        image: `${company.domain}/ikona_spalvotas.svg`,
        address: {
            '@type': 'PostalAddress',
            streetAddress: company.contacts.vilnius.address,
            addressLocality: 'Vilnius',
            postalCode: company.contacts.vilnius.postalCode,
            addressCountry: 'LT'
        },
        areaServed: 'Vilnius ir Vilniaus rajonas',
        openingHoursSpecification: [{
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'],
            opens: '08:00',
            closes: '18:00'
        }]
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
            <SEO title={title} description={description} canonicalUrl={canonicalUrl} structuredData={[localBusinessLd, breadcrumbLd]} />

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
                        <p className="text-gray-700"><strong>El. paštas:</strong> {company.contacts.vilnius.email}</p>
                        <p className="text-gray-700"><strong>Adresas:</strong> {company.contacts.vilnius.address}</p>
                        <div className="mt-4 flex gap-2">
                            <a href={telHref} className="px-4 py-2 rounded bg-green-600 text-white">Skambinti</a>
                            <a href="/kontaktai#contact-form" className="px-4 py-2 rounded border border-green-600 text-green-700">Pateikti užklausą</a>
                            <a href={company.contacts.vilnius.directionsUrl} target="_blank" rel="noopener" className="px-4 py-2 rounded border border-green-600 text-green-700">Directions</a>
                        </div>
                    </aside>
                </section>
            </div>
        </div>
    );
};

export default VilniusPage;
