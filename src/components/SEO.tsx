import React from 'react';
import { Helmet } from 'react-helmet-async';
import { buildAbsoluteUrl, buildCanonicalUrl } from '../lib/seo';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  /** For ogType=article: ISO date strings */
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleAuthor?: string;
  articleSection?: string;
  /** Single JSON-LD object or array of objects */
  structuredData?: object | object[];
  /** Breadcrumb trail — auto-generates BreadcrumbList JSON-LD */
  breadcrumbs?: BreadcrumbItem[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage = '/images/hero-bg-appliances.webp',
  ogType = 'website',
  ogImageWidth = 1200,
  ogImageHeight = 630,
  articlePublishedTime,
  articleModifiedTime,
  articleAuthor,
  articleSection,
  structuredData,
  breadcrumbs
}) => {
  const resolvedCanonical = buildCanonicalUrl(canonicalUrl);
  const resolvedOgImage = buildAbsoluteUrl(ogImage);

  // Auto-generate BreadcrumbList JSON-LD from breadcrumbs prop
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: buildAbsoluteUrl(item.url)
    }))
  } : null;

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
      <link rel="canonical" href={resolvedCanonical} />

      {/* Open Graph */}
      <meta property="og:site_name" content="Transportuok.lt" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={resolvedCanonical} />
      <meta property="og:image" content={resolvedOgImage} />
      <meta property="og:image:width" content={String(ogImageWidth)} />
      <meta property="og:image:height" content={String(ogImageHeight)} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="lt_LT" />

      {/* Article-specific Open Graph (for blog posts / news) */}
      {ogType === 'article' && articlePublishedTime && (
        <meta property="article:published_time" content={articlePublishedTime} />
      )}
      {ogType === 'article' && articleModifiedTime && (
        <meta property="article:modified_time" content={articleModifiedTime} />
      )}
      {ogType === 'article' && articleAuthor && (
        <meta property="article:author" content={articleAuthor} />
      )}
      {ogType === 'article' && articleSection && (
        <meta property="article:section" content={articleSection} />
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={resolvedOgImage} />

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

      {/* BreadcrumbList */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
