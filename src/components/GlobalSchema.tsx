import React from 'react';
import { Helmet } from 'react-helmet-async';
import company from '../data/company';

const GlobalSchema: React.FC = () => {
    // Shared opening hours – both string (for quick parsing) and structured (for semantic richness)
    const openingHoursStrings = ['Mo-Fr 08:00-18:00', 'Sa 09:00-15:00'];
    const openingHoursSpecification = [
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
    ];

    // PRIMARY – Kaunas LocalBusiness
    // Name matches exact brand (no keyword stuffing – GBP compliant)
    const localBusinessKaunas = {
        '@context': 'https://schema.org',
        '@type': ['LocalBusiness', 'RecyclingCenter'],
        '@id': `${company.domain}/#local-business-kaunas`,
        name: company.brandName,   // "Transportuok.lt" – exact brand name only
        legalName: company.legalName,
        description: 'Nemokamas buitinės technikos, elektronikos atliekų ir metalo laužo išvežimas Kaune. Ekologiškas utilizavimas pagal ES WEEE direktyvą.',
        url: company.domain,
        logo: `${company.domain}/ikona_spalvotas.svg`,
        image: `${company.domain}/images/optimized/buitine-technika.webp`,
        telephone: company.contacts.kaunas.phone,
        email: company.contacts.kaunas.email,
        priceRange: '€0',
        paymentAccepted: 'Cash, Bank Transfer',
        currenciesAccepted: 'EUR',
        // Primary physical address – Kaunas
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
        // Service area business – covers all of Lithuania from Kaunas base
        areaServed: [
            { '@type': 'City', name: 'Kaunas' },
            { '@type': 'City', name: 'Vilnius' },
            { '@type': 'AdministrativeArea', name: 'Kauno rajonas' },
            { '@type': 'AdministrativeArea', name: 'Vilniaus rajonas' },
            { '@type': 'Country', name: 'Lietuva' }
        ],
        hasMap: company.googleMapsUrl,
        sameAs: [
            company.rekvizitaiUrl,
            company.facebookUrl,
            company.gbpUrl,
            'https://rekvizitai.vz.lt/imone/karavanas_lt/'
        ],
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: 5.0,
            reviewCount: 140,
            bestRating: 5,
            worstRating: 1
        },
        openingHours: openingHoursStrings,
        openingHoursSpecification,
        knowsAbout: [
            'Buitinės technikos išvežimas',
            'Elektronikos atliekų tvarkymas',
            'Metalo laužo surinkimas',
            'WEEE direktyva 2012/19/ES',
            'ES atliekų tvarkymo reikalavimai',
            'Ekologiškas utilizavimas',
            'Žiedinė ekonomika'
        ],
        parentOrganization: {
            '@type': 'Organization',
            '@id': `${company.domain}/#organization`,
            name: company.legalName
        }
    } as const;

    // SECONDARY – Vilnius LocalBusiness (separate SAB location)
    const localBusinessVilnius = {
        '@context': 'https://schema.org',
        '@type': ['LocalBusiness', 'RecyclingCenter'],
        '@id': `${company.domain}/#local-business-vilnius`,
        name: company.brandName,
        legalName: company.legalName,
        description: 'Nemokamas buitinės technikos, elektronikos atliekų ir metalo laužo išvežimas Vilniuje. Ekologiškas utilizavimas pagal ES WEEE direktyvą.',
        url: company.domain,
        logo: `${company.domain}/ikona_spalvotas.svg`,
        image: `${company.domain}/images/optimized/elektronika.webp`,
        telephone: company.contacts.vilnius.phone,
        email: company.contacts.vilnius.email,
        priceRange: '€0',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Vilnius',
            addressRegion: 'Vilniaus apskritis',
            addressCountry: 'LT'
        },
        areaServed: [
            { '@type': 'City', name: 'Vilnius' },
            { '@type': 'AdministrativeArea', name: 'Vilniaus rajonas' }
        ],
        sameAs: [
            company.rekvizitaiUrl,
            company.facebookUrl
        ],
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: 5.0,
            reviewCount: 140,
            bestRating: 5,
            worstRating: 1
        },
        openingHours: openingHoursStrings,
        openingHoursSpecification,
        parentOrganization: {
            '@type': 'Organization',
            '@id': `${company.domain}/#organization`,
            name: company.legalName
        }
    } as const;

    // Organization entity
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
            'https://rekvizitai.vz.lt/imone/karavanas_lt/'
        ],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Išvežimo paslaugų katalogas',
            itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', '@id': `${company.domain}/#service-buitines-technikos-isvezimas`, name: 'Buitinės technikos išvežimas', url: `${company.domain}/paslaugos/buitines-technikos-isvezimas` } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', '@id': `${company.domain}/#service-elektronikos-atlieku-isvezimas`, name: 'Elektronikos atliekų išvežimas', url: `${company.domain}/paslaugos/elektronikos-atlieku-isvezimas` } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', '@id': `${company.domain}/#service-baldu-isvezimas`, name: 'Baldų išvežimas', url: `${company.domain}/paslaugos/baldu-isvezimas` } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', '@id': `${company.domain}/#service-metalo-lauzo-isvezimas`, name: 'Metalo laužo išvežimas', url: `${company.domain}/paslaugos/metalo-lauzo-isvezimas` } }
            ]
        },
        contactPoint: [
            {
                '@type': 'ContactPoint',
                telephone: company.contacts.kaunas.phone,
                email: company.contacts.kaunas.email,
                contactType: 'customer service',
                areaServed: 'LT',
                availableLanguage: ['lt']
            },
            {
                '@type': 'ContactPoint',
                telephone: company.contacts.vilnius.phone,
                email: company.contacts.vilnius.email,
                contactType: 'customer service',
                areaServed: 'LT',
                availableLanguage: ['lt']
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
            <script type="application/ld+json">{JSON.stringify(localBusinessKaunas)}</script>
            <script type="application/ld+json">{JSON.stringify(localBusinessVilnius)}</script>
            <script type="application/ld+json">{JSON.stringify(org)}</script>
            <script type="application/ld+json">{JSON.stringify(website)}</script>
        </Helmet>
    );
};

export default GlobalSchema;
