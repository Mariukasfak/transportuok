import { ArrowUpRight } from 'lucide-react';
import partners from '../data/partners';

const formatHostname = (link: string) => {
  try {
    return new URL(link).hostname.replace(/^www\./, '');
  } catch (error) {
    console.warn('Invalid partner URL received', link, error);
    return link;
  }
};

const PartnersSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center rounded-full bg-green-100 text-green-700 px-4 py-1 text-sm font-semibold tracking-wide uppercase">
            Partnerystė
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-gray-900">Patikimi partneriai Lietuvoje</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Bendradarbiaujame su verslais, kurie papildo mūsų paslaugas – nuo itališkos kavos sprendimų iki baseinų ir eksterjero įrangos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partners.map((partner) => (
            <article
              key={partner.id}
              className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500" aria-hidden="true" />
              <div className="p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-gray-900">{partner.name}</h3>
                  <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-700">
                    Patikimas partneris
                  </span>
                </div>
                <p className="mt-4 text-gray-600">{partner.tagline}</p>
                <p className="mt-4 text-gray-700">{partner.description}</p>
                <p className="mt-4 text-gray-700">
                  Atraskite{' '}
                  <a
                    href={partner.url}
                    className="font-semibold text-green-700 underline decoration-2 underline-offset-4 transition-colors hover:text-green-800"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={partner.name}
                  >
                    {partner.anchorText}
                  </a>
                  . Partnerystės dėka klientams pasiūlome platesnį paslaugų spektrą ir aukštą aptarnavimo kokybę visoje Lietuvoje.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={partner.url}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-green-700 transition-colors hover:text-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apsilankyti svetainėje
                    <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                    <span className="sr-only">{partner.name}</span>
                  </a>
                  {partner.sameAs?.map((profileUrl) => (
                    <a
                      key={profileUrl}
                      href={profileUrl}
                      className="inline-flex items-center gap-1 text-sm text-gray-500 transition-colors hover:text-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {formatHostname(profileUrl)}
                      <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                      <span className="sr-only">{partner.name} social</span>
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
