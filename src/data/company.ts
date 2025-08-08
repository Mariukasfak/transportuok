export const company = {
    legalName: 'UAB "Karavanas LT"',
    brandName: 'Karavanas LT',
    domain: 'https://transportuok.lt',
    gbpUrl: 'https://share.google/9WVQWATF9SIcSLDEb',
    contacts: {
        vilnius: {
            phone: '+370 664 24 024',
            telHref: 'tel:+37066424024',
            email: 'karavanaslt@gmail.com',
            address: 'M. K. Čiurlionio g. 1-47, Vilnius',
            postalCode: '01100',
            directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Karavanas+LT,+Vilnius',
        },
        kaunas: {
            phone: '+370 699 25 744',
            telHref: 'tel:+37069925744',
            email: 'info@transportuok.lt',
            address: 'Kauno g., Kaunas',
            postalCode: '44000',
            directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Karavanas+LT,+Kaunas',
        },
    },
    rekvizitai: {
        imonesKodas: '302705147', // TODO: pakeisti į tikrą įmonės kodą
        pvmKodas: 'LT100006580016', // TODO: pakeisti į tikrą PVM kodą (jei taikoma)
    },
} as const;

export default company;
