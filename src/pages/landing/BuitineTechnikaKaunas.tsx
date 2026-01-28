import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, CheckCircle, Phone, MapPin, Star } from 'lucide-react';
import SEO from '../../components/SEO';
import ServiceSchema from '../../components/ServiceSchema';
import FAQ from '../../components/FAQ';
import company from '../../data/company';
import { buildAbsoluteUrl, buildCanonicalUrl, withSeoId } from '../../lib/seo';

// Dedicated Kaunas landing page optimized for keyword:
// "nemokamas buitinės technikos išvežimas kaune"

const BuitineTechnikaKaunas: React.FC = () => {
    const contact = company.contacts.kaunas;
    const { phone, telHref, email, address, postalCode, directionsUrl } = contact;

    // Primary keyword-optimized SEO
    const title = 'Nemokamas buitinės technikos išvežimas Kaune | Šaldytuvų, skalbimo mašinų išvežimas';
    const description = 'Nemokamas buitinės technikos išvežimas Kaune ✓ Šaldytuvai ✓ Skalbimo mašinos ✓ Viryklės ✓ Indaplovės. Greitas atvykimas per 24 val. Profesionalus išnešimas ir utilizavimas. Skambinkite dabar!';
    const canonicalUrl = buildCanonicalUrl('/buitines-technikos-isvezimas-kaune');
    const homeCanonical = buildCanonicalUrl('/');
    const servicesCanonical = buildCanonicalUrl('/paslaugos');
    const logoUrl = buildAbsoluteUrl('/ikona_spalvotas.svg');
    const primaryImage = buildAbsoluteUrl('/images/buitine-technika.webp');

    // Schema.org structured data - GEO optimized for AI search engines
    const localBusinessLd = {
        '@context': 'https://schema.org',
        '@type': ['LocalBusiness', 'RecyclingCenter'],
        '@id': withSeoId(canonicalUrl, 'local-business'),
        name: 'Transportuok.lt – Nemokamas Buitinės Technikos Išvežimas Kaune',
        alternateName: company.brandName,
        description: 'Nemokamas šaldytuvų, skalbimo mašinų ir kitos buitinės technikos išvežimas Kaune. 100% nemokama paslauga Kauno mieste ir rajone.',
        url: canonicalUrl,
        image: primaryImage,
        telephone: phone,
        email: email,
        // Parent organization for trust linking
        parentOrganization: {
            '@type': 'Organization',
            name: company.legalName,
            url: company.rekvizitaiUrl
        },
        address: {
            '@type': 'PostalAddress',
            streetAddress: address,
            addressLocality: 'Kaunas',
            postalCode: postalCode,
            addressRegion: 'Kauno apskritis',
            addressCountry: 'LT'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 54.8985,
            longitude: 23.9036
        },
        areaServed: [
            { '@type': 'City', name: 'Kaunas' },
            { '@type': 'AdministrativeArea', name: 'Kauno rajonas' }
        ],
        // Google Maps CID for location verification
        hasMap: company.googleMapsUrl,
        // Trust signals - critical for AI search
        sameAs: [
            company.rekvizitaiUrl,
            company.facebookUrl,
            company.gbpUrl
        ],
        priceRange: '€0 (nemokama)',
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: 5.0,
            reviewCount: 114,
            bestRating: 5,
            worstRating: 1
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '18:00'
            },
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '09:00',
                closes: '15:00'
            }
        ]
    } as const;

    const breadcrumbLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Pradžia', item: homeCanonical },
            { '@type': 'ListItem', position: 2, name: 'Paslaugos', item: servicesCanonical },
            { '@type': 'ListItem', position: 3, name: 'Buitinės technikos išvežimas Kaune', item: canonicalUrl }
        ]
    } as const;

    const howToLd = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Kaip užsakyti nemokamą buitinės technikos išvežimą Kaune',
        totalTime: 'PT30M',
        estimatedCost: { '@type': 'MonetaryAmount', currency: 'EUR', value: '0' },
        step: [
            { '@type': 'HowToStep', position: 1, name: 'Susisiekite', text: 'Paskambinkite +370 699 25744 arba užpildykite formą svetainėje.' },
            { '@type': 'HowToStep', position: 2, name: 'Suderinkite laiką', text: 'Per 24 val. suderinsime patogų atvykimo laiką Kaune.' },
            { '@type': 'HowToStep', position: 3, name: 'Išvežimas', text: 'Atvykstame, išnešame techniką ir išvežame utilizuoti.' }
        ]
    } as const;

    // Service areas in Kaunas
    const kaunoRajonai = [
        'Centras', 'Žaliakalnis', 'Dainava', 'Kalniečiai', 'Šilainiai',
        'Aleksotas', 'Vilijampolė', 'Šančiai', 'Petrašiūnai', 'Panemunė',
        'Eiguliai', 'Rokai', 'Garliava', 'Karmėlava', 'Akademija'
    ];

    // FAQ specifically for Kaunas
    const kaunasFAQ = [
        {
            question: 'Ar tikrai nemokamas buitinės technikos išvežimas Kaune?',
            answer: '<p>Taip, <strong>buitinės technikos išvežimas Kaune yra nemokamas</strong>. Išvežame šaldytuvus, skalbimo mašinas, virykles, indaploves ir kitą buitinę techniką be jokio mokesčio. Mokama gali būti tik už ypač sudėtingus atvejus (pvz., išnešimas iš rūsio be lifto), bet visada informuojame iš anksto.</p>'
        },
        {
            question: 'Kaip greitai atvykstate išvežti buitinės technikos Kaune?',
            answer: '<p>Kauno mieste ir rajone <strong>atvykstame per 24 valandas</strong> nuo užklausos gavimo. Skubiais atvejais galime atvykti net tą pačią dieną. Dirbame I-V 8:00-18:00.</p>'
        },
        {
            question: 'Kokią buitinę techniką išvežate Kaune?',
            answer: '<p>Išvežame visų rūšių buitinę techniką: <strong>šaldytuvus, šaldiklius, skalbimo mašinas, džiovykles, virykles, orkaitės, indaploves, mikrobangų krosneles</strong> ir kt. Taip pat priimame didelę elektroniką (TV, monitorius).</p>'
        },
        {
            question: 'Ar išnešate buitinę techniką iš aukštų be lifto Kaune?',
            answer: '<p>Taip, <strong>profesionaliai išnešame iš bet kurio aukšto</strong> Kaune ir Kauno rajone. Mūsų komanda turi patirties ir reikiamų įrankių saugiam technikos pernešimui. Standartinis išnešimas yra nemokamas.</p>'
        },
        {
            question: 'Kuriuose Kauno rajonuose dirbate?',
            answer: '<p>Aptarnaujame <strong>visą Kauno miestą ir rajoną</strong>: Centrą, Žaliakalnis, Dainava, Šilainiai, Aleksotas, Vilijampolė, Šančiai, Petrašiūnai, Panemunė, Garliava, Karmėlava, Akademija ir kt.</p>'
        }
    ];

    const stripTags = (html: string) => html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    const slugify = (s: string) => s.toLowerCase().replace(/[^\p{L}0-9]+/gu, '-').replace(/^-|-$/g, '');

    const faqStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': withSeoId(canonicalUrl, 'faq'),
        mainEntity: kaunasFAQ.map(q => ({
            '@type': 'Question',
            '@id': withSeoId(canonicalUrl, `question-${slugify(q.question)}`),
            name: q.question,
            acceptedAnswer: { '@type': 'Answer', text: stripTags(q.answer) }
        }))
    } as const;

    const provider = {
        name: company.legalName,
        url: homeCanonical,
        logo: logoUrl,
        telephone: phone,
        address: {
            streetAddress: address,
            addressLocality: 'Kaunas',
            postalCode: postalCode,
            addressCountry: 'LT'
        }
    };

    return (
        <>
            <SEO
                title={title}
                description={description}
                canonicalUrl={canonicalUrl}
                structuredData={[localBusinessLd, breadcrumbLd, howToLd, faqStructuredData]}
            />
            <ServiceSchema
                name="Nemokamas buitinės technikos išvežimas Kaune"
                description="Nemokamas šaldytuvų, skalbimo mašinų ir kitos buitinės technikos išvežimas Kaune. Greitas atvykimas per 24 val."
                image={primaryImage}
                serviceId="buitines-technikos-isvezimas-kaune"
                provider={provider}
                areaServed="Kaunas"
            />

            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Hero Section - Primary keyword in H1 */}
                    <header className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Nemokamas buitinės technikos išvežimas Kaune
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                            Šaldytuvų, skalbimo mašinų, viryklių ir kitos buitinės technikos išvežimas
                            <strong> nemokamai</strong> Kauno mieste ir rajone. Atvykstame per 24 val.
                        </p>

                        {/* Trust signals */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div className="flex items-center bg-green-50 px-4 py-2 rounded-full border border-green-200">
                                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                                <span className="text-green-800 font-medium">Nemokamas išvežimas</span>
                            </div>
                            <div className="flex items-center bg-green-50 px-4 py-2 rounded-full border border-green-200">
                                <Clock className="w-5 h-5 text-green-600 mr-2" />
                                <span className="text-green-800 font-medium">Atvykimas per 24 val.</span>
                            </div>
                            <div className="flex items-center bg-yellow-50 px-4 py-2 rounded-full border border-yellow-200">
                                <Star className="w-5 h-5 text-yellow-600 mr-2" />
                                <span className="text-yellow-800 font-medium">5.0 ★ (114+ atsiliepimai)</span>
                            </div>
                        </div>

                        {/* CTA buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href={telHref}
                                className="inline-flex items-center px-8 py-4 bg-green-600 text-white text-lg font-bold rounded-lg hover:bg-green-700 transition-colors shadow-lg"
                            >
                                <Phone className="w-6 h-6 mr-2" />
                                Skambinti: {phone}
                            </a>
                            <Link
                                to="/kontaktai#contact-form"
                                className="inline-flex items-center px-8 py-4 border-2 border-green-600 text-green-700 text-lg font-bold rounded-lg hover:bg-green-50 transition-colors"
                            >
                                Užsakyti internetu
                            </Link>
                        </div>
                    </header>

                    {/* Main content grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">

                        {/* Content column */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* What we pick up */}
                            <section className="bg-white rounded-lg shadow-lg p-8">
                                <h2 className="text-2xl font-bold mb-6">Kokią buitinę techniką išvežame Kaune</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-green-50 p-5 rounded-lg">
                                        <h3 className="font-semibold text-lg mb-3">Virtuvės technika</h3>
                                        <ul className="space-y-2">
                                            {['Šaldytuvai ir šaldikliai', 'Viryklės ir orkaitės', 'Indaplovės', 'Mikrobangų krosnelės'].map(item => (
                                                <li key={item} className="flex items-center">
                                                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-green-50 p-5 rounded-lg">
                                        <h3 className="font-semibold text-lg mb-3">Skalbimo technika</h3>
                                        <ul className="space-y-2">
                                            {['Skalbimo mašinos', 'Džiovyklės', 'Skalbimo-džiovinimo mašinos', 'Kita buitinė technika'].map(item => (
                                                <li key={item} className="flex items-center">
                                                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* How it works */}
                            <section className="bg-white rounded-lg shadow-lg p-8">
                                <h2 className="text-2xl font-bold mb-6">Kaip vyksta buitinės technikos išvežimas Kaune</h2>
                                <div className="space-y-6">
                                    {[
                                        { step: 1, title: 'Susisiekite su mumis', desc: 'Paskambinkite arba užpildykite formą. Nurodykite, kokią techniką reikia išvežti.' },
                                        { step: 2, title: 'Suderinkite laiką', desc: 'Per 24 val. susisieksime ir sutarsime jums patogų atvykimo laiką Kaune.' },
                                        { step: 3, title: 'Nemokamas išvežimas', desc: 'Atvykstame, profesionaliai išnešame ir išvežame techniką utilizuoti.' }
                                    ].map(({ step, title, desc }) => (
                                        <div key={step} className="flex items-start">
                                            <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                                                {step}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg mb-1">{title}</h3>
                                                <p className="text-gray-600">{desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Why choose us */}
                            <section className="bg-white rounded-lg shadow-lg p-8">
                                <h2 className="text-2xl font-bold mb-6">Kodėl rinktis mus buitinės technikos išvežimui Kaune</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { title: 'Nemokama paslauga', desc: 'Visą buitinę techniką išvežame nemokamai Kaune ir rajone.' },
                                        { title: 'Greitas atvykimas', desc: 'Atvykstame per 24 val. Skubiais atvejais – tą pačią dieną.' },
                                        { title: 'Profesionalus išnešimas', desc: 'Išnešame iš bet kurio aukšto, pasirūpiname visu procesu.' },
                                        { title: 'Ekologiškas utilizavimas', desc: 'Technika perduodama licencijuotiems perdirbėjams.' }
                                    ].map(({ title, desc }) => (
                                        <div key={title} className="bg-gray-50 p-4 rounded-lg">
                                            <h3 className="font-semibold mb-2">{title}</h3>
                                            <p className="text-gray-600 text-sm">{desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">

                            {/* Contact card */}
                            <div className="bg-green-50 rounded-lg p-6 border border-green-200 sticky top-4">
                                <h3 className="text-xl font-bold mb-4">Kontaktai Kaune</h3>
                                <div className="space-y-3 mb-6">
                                    <a href={telHref} className="flex items-center text-gray-700 hover:text-green-600">
                                        <Phone className="w-5 h-5 mr-3 text-green-600" />
                                        <span className="font-semibold">{phone}</span>
                                    </a>
                                    <div className="flex items-center text-gray-700">
                                        <Clock className="w-5 h-5 mr-3 text-green-600" />
                                        <span>I–V: 8:00 - 18:00</span>
                                    </div>
                                    <div className="flex items-center text-gray-700">
                                        <MapPin className="w-5 h-5 mr-3 text-green-600" />
                                        <span>{address}</span>
                                    </div>
                                </div>
                                <Link
                                    to="/kontaktai#contact-form"
                                    className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                                >
                                    Užsakyti išvežimą dabar
                                </Link>
                                <a
                                    href={directionsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full mt-3 border border-green-600 text-green-700 text-center py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                                >
                                    Rodyti žemėlapyje
                                </a>
                            </div>

                            {/* Service areas */}
                            <div className="bg-white rounded-lg shadow p-6">
                                <h3 className="font-bold mb-3">Aptarnaujami rajonai</h3>
                                <div className="flex flex-wrap gap-2">
                                    {kaunoRajonai.map(area => (
                                        <span key={area} className="px-3 py-1 bg-gray-100 rounded-full text-sm border">
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <section className="mb-16">
                        <FAQ
                            items={kaunasFAQ}
                            title="Dažniausiai užduodami klausimai apie buitinės technikos išvežimą Kaune"
                            suppressSchema
                        />
                    </section>

                    {/* Related services */}
                    <section className="bg-white rounded-lg shadow p-8">
                        <h2 className="text-2xl font-bold mb-4">Susijusios paslaugos Kaune</h2>
                        <div className="flex flex-wrap gap-3">
                            <Link to="/paslaugos/elektronikos-atlieku-isvezimas/kaunas" className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                                Elektronikos išvežimas Kaune
                            </Link>
                            <Link to="/paslaugos/baldu-isvezimas" className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                                Baldų išvežimas Kaune
                            </Link>
                            <Link to="/paslaugos/metalo-lauzo-isvezimas" className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                                Metalo laužo išvežimas
                            </Link>
                            <Link to="/kaunas" className="px-4 py-2 bg-green-50 text-green-700 border border-green-200 rounded-lg hover:bg-green-100">
                                Visos paslaugos Kaune
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default BuitineTechnikaKaunas;
