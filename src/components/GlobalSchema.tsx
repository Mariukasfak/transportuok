import React from 'react';
import { Helmet } from 'react-helmet-async';
import company from '../data/company';

const GlobalSchema: React.FC = () => {
    const org = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: company.brandName,
        legalName: company.legalName,
        url: company.domain,
        logo: `${company.domain}/ikona_spalvotas.svg`,
        sameAs: [
            'https://facebook.com/karavanaslt',
            'https://instagram.com/karavanaslt',
            company.gbpUrl,
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
