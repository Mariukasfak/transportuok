export interface Partner {
  id: string;
  name: string;
  url: string;
  description: string;
  anchorText: string;
  tagline: string;
  sameAs?: string[];
}

export const partners: Partner[] = [
  {
    id: 'kava1',
    name: 'Kava1.lt',
    url: 'https://kava1.lt/',
    description:
      'Itališka kava internetu – kapsulės, pupelės ir gurmaniškos arbatos, suderinamos su populiariausiomis kavos aparatų sistemomis.',
    anchorText: 'itališkos kavos kapsulės ir pupelės Kava1.lt parduotuvėje',
    tagline: 'Itališkos kavos ekspertai, tiekiantys oficialius Dolce Vita ir kitų prekės ženklų mišinius visoje Lietuvoje.',
    sameAs: ['https://www.facebook.com/kava1lt', 'https://www.instagram.com/kava1.lt/'],
  },
  {
    id: 'valmarket',
    name: 'Valmarket.lt',
    url: 'https://valmarket.lt/',
    description:
      'Lauko baseinai, SPA, lauko baldai ir sodo technika su profesionaliomis konsultacijomis bei montavimo paslaugomis.',
    anchorText: 'lauko baseinų ir SPA sprendimus Valmarket.lt kataloge',
    tagline: 'Baseinų, SPA ir eksterjero prekių centras – nuo chemijos iki kompleksiškų įrengimo sprendimų.',
    sameAs: ['https://www.facebook.com/uabVALmarket/'],
  },
  {
    id: 'siemka',
    name: 'Siemka.lt',
    url: 'https://siemka.lt/',
    description:
      'Kūrybiški džemperiai, marškinėliai ir reklaminė tekstilė mamoms, poroms ir vaikams su individualiais užrašais bei kokybiška spauda.',
    anchorText: 'kūrybiškus džemperius ir marškinėlius su spauda Siemka.lt el. parduotuvėje',
    tagline: 'Lietuviška kūrybinė tekstilė, padedanti dovanoti asmeninį stilių šeimai, kolektyvams ir partneriams.',
    sameAs: ['https://www.facebook.com/Siemka.Shop/', 'https://www.instagram.com/siemka.shop/'],
  },
  {
    id: 'katalizatoriu-supirkimas',
    name: 'Katalizatorių Supirkimas LT',
    url: 'https://katalizatoriu-supirkimas.lt/',
    description:
      'Katalizatorių ir dyzelinių DPF filtrų supirkimas visoje Lietuvoje su XRF analize, skaidriu įkainiu ir atsiskaitymu tą pačią dieną.',
    anchorText: 'katalizatorių ir DPF filtrų supirkimo pasiūlymus Katalizatorių Supirkimas LT svetainėje',
    tagline: 'Profesionali komanda, kuri padeda saugiai parduoti katalizatorių pagal realią tauriųjų metalų vertę be tarpininkų.',
  },
];

export default partners;
