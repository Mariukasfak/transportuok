import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, MapPin, Clock, CheckCircle, Home, Trash2, Loader2, HelpCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { trackFormSubmission } from '../utils/analytics';

const TOP_CITIES = [
  'Vilnius',
  'Kaunas',
  'Klaipėda',
  'Šiauliai',
  'Panevėžys',
  'Alytus',
  'Marijampolė',
  'Mažeikiai',
  'Jonava',
  'Utena',
  'Likusi Lietuva'
] as const;

const contactSchema = z.object({
  city: z.enum(TOP_CITIES, {
    errorMap: () => ({ message: 'Pasirinkite miestą' })
  }),
  address: z.string()
    .min(5, 'Adresas turi būti bent 5 simbolių ilgio')
    .max(200, 'Adresas negali būti ilgesnis nei 200 simbolių'),
  doorCode: z.string()
    .max(10, 'Durų kodas negali būti ilgesnis nei 10 simbolių')
    .optional(),
  phone: z.string()
    .min(9, 'Neteisingas telefono numerio formatas')
    .max(12, 'Neteisingas telefono numerio formatas')
    .regex(/^\+?[0-9]{9,12}$/, 'Neteisingas telefono numerio formatas'),
  items: z.string()
    .max(500, 'Daiktų aprašymas negali būti ilgesnis nei 500 simbolių')
    .optional(),
  additionalInfo: z.string()
    .max(1000, 'Papildoma informacija negali būti ilgesnė nei 1000 simbolių')
    .optional(),
  pickupLocation: z.array(z.string()).optional(),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  });

  useEffect(() => {
    document.title = 'Kontaktai | Elektronikos ir buitinės technikos išvežimas Lietuvoje | Karavanas LT';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Susisiekite dėl nemokamo buitinės technikos ir elektronikos išvežimo Vilniuje, Kaune ir visoje Lietuvoje. Užpildykite formą arba rašykite el. paštu info@transportuok.lt.');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');

    if (ogTitle) ogTitle.setAttribute('content', 'Kontaktai | Atliekų išvežimas Vilniuje, Kaune ir Lietuvoje | Karavanas LT');
    if (ogDescription) ogDescription.setAttribute('content', 'Greitas ir patikimas buitinės technikos bei elektronikos išvežimas Vilniuje, Kaune ir visoje Lietuvoje. Susisiekite – atsakome greitai.');
    if (ogUrl) ogUrl.setAttribute('content', 'https://transportuok.lt/kontaktai');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://transportuok.lt/kontaktai');
  }, []);

  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#contact-form') {
      const form = document.getElementById('contact-form');
      if (form) {
        setTimeout(() => {
          form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  // Prefill city from query string if provided
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cityParam = params.get('city');
    if (cityParam) {
      const normalized = cityParam
        .toLowerCase()
        .replace('kita lietuva', 'Likusi Lietuva')
        .replace('likusi lietuva', 'Likusi Lietuva')
        .replace(/\s+/g, ' ')
        .trim();
      const found = (TOP_CITIES as readonly string[]).find(
        c => c.toLowerCase() === normalized
      );
      if (found) setValue('city', found as any, { shouldValidate: true });
    }
  }, [setValue]);

  const onSubmit = async (data: ContactForm) => {
    try {
      // Initialize EmailJS (this ensures proper configuration)
      emailjs.init("F_bgx8N1D2rFvUIoM");

      await emailjs.send(
        'service_transportuok',
        'template_uzklausa',
        {
          subject: `Užklausa (${data.city}) iš ${data.address}`,
          city: data.city,
          address: data.address,
          doorCode: data.doorCode ?? '',
          phone: data.phone,
          items: data.items ?? '',
          additionalInfo: data.additionalInfo ?? '',
          pickupLocation: data.pickupLocation?.join(', ') ?? ''
        },
        'F_bgx8N1D2rFvUIoM'
      );

      // Track successful form submission
      trackFormSubmission('contact_form', true);

      setStatus('success');
      reset();
    } catch (error) {
      console.error('EmailJS error:', error);

      // Track form submission error
      trackFormSubmission('contact_form', false);

      setStatus('error');
    }
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Susisiekite su mumis</h1>
          <p className="text-xl text-gray-600">Dirbame Vilniuje, Kaune ir visoje Lietuvoje – pasiruošę padėti jums išvežti nereikalingus daiktus</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form Section First */}
          <div>
            {status === 'success' ? (
              <div className="bg-green-50 rounded-lg p-8">
                <div className="text-center mb-6">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-green-800 mb-2">Ačiū! Jūsų užklausa gauta.</h2>
                  <p className="text-green-700 mb-6">Susisieksime su jumis per 24 valandas.</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <p className="text-gray-700 mb-4 text-center">
                    Turite papildomų klausimų? Parašykite mums el. paštu:
                  </p>
                  <a
                    href="mailto:info@transportuok.lt"
                    className="block text-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    info@transportuok.lt
                  </a>
                  <p className="text-sm text-gray-500 text-center mt-3">
                    Atsakome darbo dienomis: 8:00 - 18:00
                  </p>
                </div>
              </div>
            ) : (
              <form
                id="contact-form"
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold mb-6">Užklausos forma</h2>

                {/* Quick category selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  <button
                    type="button"
                    onClick={() => setValue('city', 'Vilnius', { shouldValidate: true })}
                    className="w-full px-4 py-2 rounded-lg border border-green-200 text-green-700 hover:bg-green-50 transition-colors"
                  >
                    Vilniaus užsakymai
                  </button>
                  <button
                    type="button"
                    onClick={() => setValue('city', 'Kaunas', { shouldValidate: true })}
                    className="w-full px-4 py-2 rounded-lg border border-green-200 text-green-700 hover:bg-green-50 transition-colors"
                  >
                    Kauno užsakymai
                  </button>
                  <button
                    type="button"
                    onClick={() => setValue('city', 'Likusi Lietuva', { shouldValidate: true })}
                    className="w-full px-4 py-2 rounded-lg border border-green-200 text-green-700 hover:bg-green-50 transition-colors"
                  >
                    Likusi Lietuva
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      Miestas *
                    </label>
                    <select
                      id="city"
                      {...register('city')}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Pasirinkite miestą
                      </option>
                      {TOP_CITIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    {errors.city && (
                      <p className="mt-1 text-sm text-red-600">{errors.city.message as string}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Adresas *
                    </label>
                    <input
                      type="text"
                      id="address"
                      {...register('address')}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${errors.address ? 'border-red-500' : 'border-gray-300'
                        }`}
                      placeholder="Pvz.: Laisvės al. 1, Kaunas"
                    />
                    {errors.address && (
                      <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="doorCode" className="block text-sm font-medium text-gray-700 mb-1">
                      Laiptinės durų kodas
                    </label>
                    <input
                      type="text"
                      id="doorCode"
                      {...register('doorCode')}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${errors.doorCode ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.doorCode && (
                      <p className="mt-1 text-sm text-red-600">{errors.doorCode.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefono numeris *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone')}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                      placeholder="+37000000000"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="items" className="block text-sm font-medium text-gray-700 mb-1">
                      Daiktai
                    </label>
                    <textarea
                      id="items"
                      {...register('items')}
                      rows={2}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${errors.items ? 'border-red-500' : 'border-gray-300'
                        }`}
                      placeholder="Pvz.: šaldytuvas, skalbimo mašina"
                    />
                    {errors.items && (
                      <p className="mt-1 text-sm text-red-600">{errors.items.message}</p>
                    )}
                  </div>

                  {/* Pickup Location Section */}
                  <div className="border-t border-gray-200 pt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Kur paliksite daiktą išvežimui? <span className="text-gray-500">(neprivaloma)</span>
                    </label>
                    <div className="space-y-3">
                      <label className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                        <input
                          type="checkbox"
                          value="lauke"
                          {...register('pickupLocation')}
                          className="mt-1 h-4 w-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
                        />
                        <div className="flex items-center">
                          <Home className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                          <span>Lauke prie namo / šalia konteinerių</span>
                        </div>
                      </label>

                      <label className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                        <input
                          type="checkbox"
                          value="laiptineje"
                          {...register('pickupLocation')}
                          className="mt-1 h-4 w-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
                        />
                        <div className="flex items-center">
                          <Loader2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                          <span>Laiptinėje / koridoriuje</span>
                        </div>
                      </label>

                      <label className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                        <input
                          type="checkbox"
                          value="padeti"
                          {...register('pickupLocation')}
                          className="mt-1 h-4 w-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
                        />
                        <div className="flex items-center">
                          <Trash2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                          <span>Reikia padėti išnešti iš buto / namo</span>
                        </div>
                      </label>

                      <label className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                        <input
                          type="checkbox"
                          value="nezinau"
                          {...register('pickupLocation')}
                          className="mt-1 h-4 w-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
                        />
                        <div className="flex items-center">
                          <HelpCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                          <span>Dar nenusprendžiau / nežinau dabar</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
                      Papildoma informacija
                    </label>
                    <textarea
                      id="additionalInfo"
                      {...register('additionalInfo')}
                      rows={3}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${errors.additionalInfo ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.additionalInfo && (
                      <p className="mt-1 text-sm text-red-600">{errors.additionalInfo.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                  >
                    {isSubmitting ? 'Siunčiama...' : 'Siųsti užklausą'}
                  </button>

                  {status === 'error' && (
                    <p className="text-red-600 text-center mt-4">
                      Įvyko klaida. Bandykite dar kartą arba susisiekite telefonu.
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>

          {/* Contact Info and Map Section */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-xl font-bold mb-4">Kontaktinė informacija</h2>

              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 sm:w-6 sm:h-6 text-green-500 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">El. paštas</h3>
                    <a href="mailto:info@transportuok.lt" className="text-gray-600 hover:text-green-500 break-words">
                      info@transportuok.lt
                    </a>
                  </div>
                </div>

                {/* City phones (secondary) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.789 1.106l1.2 2.4a2 2 0 01-.45 2.31l-1.2 1.2a16 16 0 006.36 6.36l1.2-1.2a2 2 0 012.31-.45l2.4 1.2A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2h0z" /></svg>
                    <div>
                      <h3 className="font-semibold">Kaunas</h3>
                      <a href="tel:+37069925744" className="text-gray-600 hover:text-green-500">+370 699 25744</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.789 1.106l1.2 2.4a2 2 0 01-.45 2.31l-1.2 1.2a16 16 0 006.36 6.36l1.2-1.2a2 2 0 012.31-.45l2.4 1.2A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2h0z" /></svg>
                    <div>
                      <h3 className="font-semibold">Vilnius</h3>
                      <a href="tel:+37066424024" className="text-gray-600 hover:text-green-500">+370 664 24024</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="w-6 h-6 sm:w-6 sm:h-6 text-green-500 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Aptarnaujama teritorija</h3>
                    <p className="text-gray-600">Vilnius, Kaunas ir visa Lietuva</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Clock className="w-6 h-6 sm:w-6 sm:h-6 text-green-500 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Darbo laikas</h3>
                    <p className="text-gray-600">I–V: 8:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {status !== 'success' && (
              <div
                className="rounded-lg overflow-hidden shadow-lg"
                itemScope
                itemType="http://schema.org/Place"
              >
                <div className="relative">
                  <picture>
                    <source
                      srcSet="/images/map_output.webp"
                      type="image/webp"
                    />
                    <img
                      src="/images/map_output.webp"
                      alt="Karavanas LT aptarnaujama teritorija Kauno mieste ir rajone"
                      width="800"
                      height="400"
                      className="w-full h-[400px] object-cover"
                      loading="lazy"
                      decoding="async"
                      itemProp="image"
                    />
                  </picture>
                  <div
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <div className="text-center text-white p-4">
                      <h3 className="text-xl font-bold mb-2" itemProp="name">Karavanas LT</h3>
                      <p className="text-lg" itemProp="description">Aptarnaujame Vilnių, Kauną ir visą Lietuvą</p>
                      <meta itemProp="latitude" content="54.8985" />
                      <meta itemProp="longitude" content="23.9036" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;