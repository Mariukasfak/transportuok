import React from 'react';
import { Calendar, Share2 } from 'lucide-react';
import SEO from './SEO';
import { buildAbsoluteUrl, buildCanonicalUrl } from '../lib/seo';

interface BlogPostProps {
  post: {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    content: string;
    imageUrl: string;
    author?: string;
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const canonicalUrl = buildCanonicalUrl(`/naujienos/${post.slug}`);
  const ogImage = buildAbsoluteUrl(post.imageUrl);
  const publisherLogo = buildAbsoluteUrl('/ikona_spalvotas.svg');
  const organizationUrl = buildCanonicalUrl('/');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "headline": post.title,
    "image": [ogImage],
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": "Karavanas LT",
      "url": organizationUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Karavanas LT",
      "logo": {
        "@type": "ImageObject",
        "url": publisherLogo
      }
    },
    "description": post.excerpt
  };

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonicalUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(canonicalUrl)}&text=${encodeURIComponent(post.title)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(canonicalUrl)}&title=${encodeURIComponent(post.title)}`
  };

  return (
    <>
      <SEO
        title={`${post.title} | Karavanas LT`}
        description={post.excerpt}
        canonicalUrl={canonicalUrl}
        ogImage={ogImage}
        ogType="article"
        structuredData={structuredData}
      />

      <article className="py-12" itemScope itemType="http://schema.org/BlogPosting">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src={ogImage}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
            loading="lazy"
            width="800"
            height="400"
            itemProp="image"
          />

          <div className="flex items-center text-gray-500 text-sm mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            <time itemProp="datePublished" dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('lt-LT')}
            </time>
          </div>

          <h1 className="text-4xl font-bold mb-6" itemProp="headline">
            {post.title}
          </h1>

          <div
            className="prose prose-lg max-w-none"
            itemProp="articleBody"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Dalintis straipsniu:</h3>
            <div className="flex space-x-4">
              {Object.entries(shareLinks).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-green-600"
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPost;