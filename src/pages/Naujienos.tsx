
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, Share2, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import company from '../data/company';
import { buildAbsoluteUrl, buildCanonicalUrl } from '../lib/seo';
import { blogPosts } from '../data/blogPosts';

// Helper to convert simple Markdown to HTML for rendering
const markdownToHtml = (markdown: string) => {
  let html = markdown
    // Headers
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mb-6">$1</h1>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">$1</h2>')
    .replace(/^### (.*$)/gim, '<h3 class="font-semibold text-lg mb-3 text-gray-900">$1</h3>')
    // Bold
    .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
    // Lists
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    // Images
    .replace(/!\[(.*?)\]\((.*?)\)/gim, '<img src="$2" alt="$1" class="w-full rounded-lg my-6" />')
    // Paragraphs (double newline)
    .replace(/\n\n/gim, '</p><p class="text-gray-700 mb-4 text-lg leading-relaxed">')
    // Single newlines that aren't headers or lists
    .replace(/([^\n])\n([^\n])/gim, '$1<br/>$2');

  // Wrap lists in ul
  html = html.replace(/(<li>.*<\/li>)/gim, '<ul class="list-disc pl-6 space-y-2 text-gray-700 mb-6">$1</ul>');

  // Wrap header/content in initial p if needed (simple heuristic)
  if (!html.startsWith('<h') && !html.startsWith('<p')) {
    html = '<p class="text-gray-700 mb-4 text-lg leading-relaxed">' + html + '</p>';
  }

  return html;
};



const BlogPost = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const slug = currentPath.split('/').pop();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Straipsnis nerastas</h1>
          <button
            onClick={() => navigate('/naujienos')}
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Grįžti į naujienas
          </button>
        </div>
      </div>
    );
  }

  const canonicalUrl = buildCanonicalUrl(`/naujienos/${post.slug}`);
  const imageWidth = post.imageWidth || 1024;
  const imageHeight = post.imageHeight || 1024;

  const shareUrl = window.location.href;
  const shareText = post.title;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`,
  };

  // Determine valid meta fields
  const metaTitle = (post as any).metaTitle || post.title;
  const metaDescription = (post as any).metaDescription || post.excerpt;
  const ogImage = (post as any).ogImage || post.image;

  // BlogPosting + NewsArticle structured data (enhanced for GEO + Google News)
  const wordCount = post.content.replace(/<[^>]+>/g, '').split(/\s+/).filter(Boolean).length;
  // dateModified: use a date 1 day after publish date if not specified, or use today for recent posts
  const publishedDate = post.date;
  const authorName = (post as any).author || 'Marius, Vadovas';
  const personName = authorName.split(',')[0].trim(); // Extract just first name part
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': ['BlogPosting', 'NewsArticle'],
    headline: post.title,
    datePublished: publishedDate,
    dateModified: (post as any).dateModified || publishedDate,
    image: {
      '@type': 'ImageObject',
      url: buildAbsoluteUrl(ogImage),
      width: imageWidth,
      height: imageHeight
    },
    thumbnailUrl: buildAbsoluteUrl(ogImage),
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
    author: {
      '@type': 'Person',
      name: personName,
      worksFor: { '@type': 'Organization', name: company.brandName, url: company.domain }
    },
    publisher: {
      '@type': 'Organization',
      name: company.brandName,
      foundingDate: '2013',
      logo: { '@type': 'ImageObject', url: buildAbsoluteUrl('/ikona_spalvotas.svg'), width: 512, height: 512 }
    },
    description: metaDescription,
    wordCount,
    inLanguage: 'lt',
    articleSection: (post as any).category || 'Naujienos',
    keywords: (post as any).keywords ? (post as any).keywords.join(', ') : undefined,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.article-lead']
    }
  } as const;

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Pradžia', item: buildCanonicalUrl('/') },
      { '@type': 'ListItem', position: 2, name: 'Naujienos', item: buildCanonicalUrl('/naujienos') },
      { '@type': 'ListItem', position: 3, name: post.title, item: canonicalUrl }
    ]
  } as const;

  // Render content: if it looks like HTML (starts with <), use it directly, else parse markdown
  const contentHtml = post.content.trim().startsWith('<') ? post.content : markdownToHtml(post.content);

  return (
    <article className="py-12" itemScope itemType="http://schema.org/BlogPosting">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SEO
          title={metaTitle}
          description={metaDescription}
          canonicalUrl={canonicalUrl}
          ogImage={ogImage}
          ogImageWidth={imageWidth}
          ogImageHeight={imageHeight}
          ogType="article"
          articlePublishedTime={publishedDate}
          articleModifiedTime={(post as any).dateModified || publishedDate}
          articleAuthor={personName}
          articleSection={(post as any).category || 'Naujienos'}
          structuredData={[articleSchema, breadcrumbLd]}
        />
        <div className="mb-8">
          <button
            onClick={() => navigate('/naujienos')}
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Grįžti į straipsnių sąrašą
          </button>
        </div>

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
          loading="lazy"
          decoding="async"
          width={imageWidth}
          height={imageHeight}
          itemProp="image"
        />

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <Calendar className="w-4 h-4 mr-2" />
          <time itemProp="datePublished" dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('lt-LT')}
          </time>
        </div>

        <div
          className="prose prose-lg max-w-none text-gray-700"
          itemProp="articleBody"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
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
  );
};

const BlogList = () => {
  const title = 'Naujienos ir patarimai | Karavanas LT';
  const description = 'Naujausia informacija apie atliekų tvarkymą ir perdirbimą Kaune. Naudingos žinios apie buitinės technikos ir elektronikos utilizavimą.';
  const canonicalUrl = buildCanonicalUrl('/naujienos');
  const blogLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: title,
    url: canonicalUrl,
    blogPost: blogPosts.map(p => ({
      '@type': 'BlogPosting',
      headline: p.title,
      datePublished: p.date,
      mainEntityOfPage: buildCanonicalUrl(`/naujienos/${p.slug}`)
    }))
  } as const;
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Pradžia', item: buildCanonicalUrl('/') },
      { '@type': 'ListItem', position: 2, name: 'Naujienos', item: canonicalUrl }
    ]
  } as const;

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SEO title={title} description={description} canonicalUrl={canonicalUrl} structuredData={[blogLd, breadcrumbLd]} />
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Naujienos ir patarimai</h1>
          <p className="text-xl text-gray-600">Naujausia informacija apie atliekų tvarkymą ir perdirbimą</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => {
            const width = post.imageWidth || 1024;
            const height = post.imageHeight || 1024;
            return (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                itemScope
                itemType="http://schema.org/BlogPosting"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  decoding="async"
                  width={width}
                  height={height}
                  itemProp="image"
                />
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <time itemProp="datePublished" dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('lt-LT')}
                    </time>
                  </div>
                  <h2 className="text-xl font-bold mb-3" itemProp="headline">{post.title}</h2>
                  <p className="text-gray-600 mb-4" itemProp="description">{post.excerpt}</p>
                  <Link
                    to={`/naujienos/${post.slug}`}
                    className="text-green-600 font-semibold hover:text-green-700"
                  >
                    Skaityti daugiau →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Naujienos = () => {
  const currentPath = window.location.pathname;
  return currentPath === '/naujienos' ? <BlogList /> : <BlogPost />;
};

export default Naujienos;