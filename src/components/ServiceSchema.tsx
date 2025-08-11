import React from 'react';

interface ServiceSchemaProps {
  name: string;
  description: string;
  image?: string;
  /** Trumpas unikalus ID (slug), pvz.: 'baldu-isvezimas' – naudojamas @id susiejimui */
  serviceId?: string;
  provider: {
    name: string;
    url: string;
    logo: string;
    telephone: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      postalCode: string;
      addressCountry: string;
    };
  };
  areaServed: string;
  price?: string;
}

const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  name,
  description,
  image,
  serviceId,
  provider,
  areaServed,
  price = "0"
}) => {
  const isCountry = /Lietuva/i.test(areaServed);
  const baseDomain = provider.url.replace(/\/$/, '');
  const id = serviceId ? `${baseDomain}/#service-${serviceId}` : undefined;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    ...(id ? { "@id": id } : {}),
    "name": name,
    "description": description,
  ...(image ? { "image": [{ "@type": "ImageObject", "url": image }] } : {}),
    "provider": {
      "@type": "LocalBusiness",
      "name": provider.name,
      "url": provider.url,
      "logo": provider.logo,
      "telephone": provider.telephone,
      "address": {
        "@type": "PostalAddress",
        ...provider.address
      }
    },
    "isPartOf": { "@id": `${baseDomain}/#organization` },
    "areaServed": isCountry
      ? { "@type": "Country", "name": areaServed }
      : { "@type": "City", "name": areaServed },
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "EUR"
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  );
};

export default ServiceSchema;