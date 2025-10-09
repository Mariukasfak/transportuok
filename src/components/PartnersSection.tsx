import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import partners from '../data/partners';

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
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-gray-900">{partner.name}</h3>
                  <a
                    href={partner.url}
                    className="inline-flex items-center gap-1 text-green-700 hover:text-green-800 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apsilankyti
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">{partner.name}</span>
                  </a>
                </div>
                <p className="mt-4 text-gray-600">{partner.tagline}</p>
                <p className="mt-4 text-gray-700">
                  Atraskite {partner.anchorText}. Partnerystės dėka klientams galime pasiūlyti platesnį paslaugų spektrą ir aukščiausią aptarnavimo kokybę visoje Lietuvoje.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
