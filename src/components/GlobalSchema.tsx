import React from 'react';
import { Helmet } from 'react-helmet-async';
import company from '../data/company';

const GlobalSchema: React.FC = () => {
    const org = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${company.domain}/#organization`,
        name: company.brandName,
        legalName: company.legalName,
        alternateName: company.brandAlternative,
        url: company.domain,
        logo: `${company.domain}/ikona_spalvotas.svg`,
        sameAs: [
            company.facebookUrl,
            company.gbpUrl,
            'https://rekvizitai.vz.lt/imone/karavanas_lt/',
            // Google Knowledge Graph ID if publicly available or claimed
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
        contactPoint: [
            {
                '@type': 'ContactPoint',
                telephone: company.contacts.vilnius.phone,
                contactType: 'customer service',
                areaServed: 'LT-Vilnius',
                availableLanguage: ['lt'],
            },
            {
                '@type': 'ContactPoint',
                telephone: company.contacts.kaunas.phone,
                contactType: 'customer service',
                areaServed: 'LT-Kaunas',
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
            <script type="application/ld+json">{JSON.stringify(org)}</script>
            <script type="application/ld+json">{JSON.stringify(website)}</script>
        </Helmet>
    );
};

export default GlobalSchema;
