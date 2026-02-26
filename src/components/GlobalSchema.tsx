import React from 'react';
import { Helmet } from 'react-helmet-async';
import company from '../data/company';

const GlobalSchema: React.FC = () => {
    // LocalBusiness + RecyclingCenter for GEO optimization
    const localBusiness = {
        '@context': 'https://schema.org',
        '@type': ['LocalBusiness', 'RecyclingCenter'],
        '@id': `${company.domain}/#local-business`,
        name: 'Transportuok.lt – Nemokamas Buitinės Technikos Išvežimas',
        alternateName: company.brandName,
        description: 'Nemokamas buitinės technikos, elektronikos ir baldų išvežimas Kaune, Vilniuje ir visoje Lietuvoje. Ekologiškas utilizavimas.',
        url: company.domain,
        logo: `${company.domain}/ikona_spalvotas.svg`,
        image: `${company.domain}/images/buitine-technika.webp`,
        telephone: company.contacts.kaunas.phone, // Primary Kaunas phone
        email: company.contacts.kaunas.email,
        priceRange: '€0 (nemokama)',
        currenciesAccepted: 'EUR',
        paymentAccepted: 'Cash, Bank Transfer',
        // Parent organization for trust
        parentOrganization: {
            '@type': 'Organization',
            name: company.legalName,
            url: company.rekvizitaiUrl
        },
        // Kaunas as primary address
        address: {
            '@type': 'PostalAddress',
            streetAddress: company.contacts.kaunas.address,
            addressLocality: 'Kaunas',
            postalCode: company.contacts.kaunas.postalCode,
            addressRegion: 'Kauno apskritis',
            addressCountry: 'LT'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 54.9253215,
            longitude: 23.9260707
        },
        // Multiple area served - Kaunas first for priority
        areaServed: [
            { '@type': 'City', name: 'Kaunas' },
            { '@type': 'City', name: 'Vilnius' },
            { '@type': 'AdministrativeArea', name: 'Kauno rajonas' },
            { '@type': 'AdministrativeArea', name: 'Vilniaus rajonas' },
            { '@type': 'Country', name: 'Lietuva' }
        ],
        // Google Maps CID for location verification
        hasMap: company.googleMapsUrl,
        // Trust signals - Rekvizitai URL critical for AI
        sameAs: [
            company.rekvizitaiUrl,
            company.facebookUrl,
            company.gbpUrl,
            'https://rekvizitai.vz.lt/imone/karavanas_lt/'
        ],
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
        ,
        knowsAbout: [
            'Buitinės technikos išvežimas',
            'Elektronikos atliekų tvarkymas',
            'Metalo laužo surinkimas',
            'WEEE direktyva',
            'ES atliekų tvarkymo reikalavimai',
            'Ekologiškas utilizavimas',
            'Žiedinė ekonomika'
        ]
    } as const;

    const org = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${company.domain}/#organization`,
        name: company.brandName,
        legalName: company.legalName,
        alternateName: company.brandAlternative,
        url: company.domain,
        logo: `${company.domain}/ikona_spalvotas.svg`,
        foundingDate: '2013',
        numberOfEmployees: { '@type': 'QuantitativeValue', value: 16 },
        knowsAbout: [
            'Buitinės technikos išvežimas ir utilizavimas',
            'Elektronikos atliekų surinkimas (WEEE)',
            'Metalo laužo surinkimas ir perdirbimas',
            'Baldų išvežimas',
            'ES aplinkosaugos direktyvų laikymasis',
            'Žiedinė ekonomika Lietuvoje'
        ],
        sameAs: [
            company.rekvizitaiUrl,
            company.facebookUrl,
            company.gbpUrl,
            'https://rekvizitai.vz.lt/imone/karavanas_lt/',
        ],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Išvežimo paslaugų katalogas',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: { '@type': 'Service', '@id': `${company.domain}/#service-buitines-technikos-isvezimas`, name: 'Buitinės technikos išvežimas', url: `${company.domain}/paslaugos/buitines-technikos-isvezimas` }
                },
                {
                    '@type': 'Offer',
                    itemOffered: { '@type': 'Service', '@id': `${company.domain}/#service-elektronikos-atlieku-isvezimas`, name: 'Elektronikos atliekų išvežimas', url: `${company.domain}/paslaugos/elektronikos-atlieku-isvezimas` }
                },
                {
                    '@type': 'Offer',
                    itemOffered: { '@type': 'Service', '@id': `${company.domain}/#service-baldu-isvezimas`, name: 'Baldų išvežimas', url: `${company.domain}/paslaugos/baldu-isvezimas` }
                },
                {
                    '@type': 'Offer',
                    itemOffered: { '@type': 'Service', '@id': `${company.domain}/#service-metalo-lauzo-isvezimas`, name: 'Metalo laužo išvežimas', url: `${company.domain}/paslaugos/metalo-lauzo-isvezimas` }
                }
            ]
        },
        makesOffer: [
            { '@type': 'Offer', itemOffered: { '@id': `${company.domain}/#service-buitines-technikos-isvezimas` } },
            { '@type': 'Offer', itemOffered: { '@id': `${company.domain}/#service-elektronikos-atlieku-isvezimas` } },
            { '@type': 'Offer', itemOffered: { '@id': `${company.domain}/#service-baldu-isvezimas` } },
            { '@type': 'Offer', itemOffered: { '@id': `${company.domain}/#service-metalo-lauzo-isvezimas` } }
        ],
        // Kaunas contact listed first for priority
        contactPoint: [
            {
                '@type': 'ContactPoint',
                telephone: company.contacts.kaunas.phone,
                contactType: 'customer service',
                areaServed: 'LT-Kaunas',
                availableLanguage: ['lt'],
            },
            {
                '@type': 'ContactPoint',
                telephone: company.contacts.vilnius.phone,
                contactType: 'customer service',
                areaServed: 'LT-Vilnius',
                availableLanguage: ['lt'],
            }
        ]
    } as const;

    const website = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: company.brandName,
        url: company.domain,
        potentialAction: {
            '@type': 'SearchAction',
            target: `${company.domain}/naujienos?query={search_term_string}`,
            'query-input': 'required name=search_term_string'
        }
    } as const;

    return (
        <Helmet>
            <script type="application/ld+json">{JSON.stringify(localBusiness)}</script>
            <script type="application/ld+json">{JSON.stringify(org)}</script>
            <script type="application/ld+json">{JSON.stringify(website)}</script>
        </Helmet>
    );
};

export default GlobalSchema;
