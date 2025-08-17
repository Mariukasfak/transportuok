import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
  /** Single JSON-LD object or array of objects */
  structuredData?: object | object[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage = '/images/hero-bg-appliances.webp',
  ogType = 'website',
  structuredData
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
      />
      <meta
        name="googlebot"
        content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
      />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="lt_LT" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {structuredData && (
        Array.isArray(structuredData)
          ? structuredData.map((sd, i) => (
            <script key={i} type="application/ld+json">
              {JSON.stringify(sd)}
            </script>
          ))
          : (
            <script type="application/ld+json">
              {JSON.stringify(structuredData)}
            </script>
          )
      )}
    </Helmet>
  );
};

export default SEO;