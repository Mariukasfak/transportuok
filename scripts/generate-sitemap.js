import fs from 'fs';
import path from 'path';

// Extract structured post info (slug, date, image) for richer sitemap entries
const extractPosts = () => {
  const sources = [
    path.join(process.cwd(), 'src/pages/Naujienos.tsx'),
    path.join(process.cwd(), 'src/pages/Blog.tsx')
  ];
  const posts = [];
  const pattern = /slug:\s*'([^']+)'[\s\S]*?date:\s*'([^']+)'[\s\S]*?imageUrl:\s*'([^']+)'/g;
  sources.forEach(file => {
    if (!fs.existsSync(file)) return;
    const content = fs.readFileSync(file, 'utf8');
    let m;
    while ((m = pattern.exec(content)) !== null) {
      posts.push({ slug: m[1], date: m[2], image: m[3] });
    }
  });
  // Deduplicate by slug keeping first occurrence
  const map = new Map();
  posts.forEach(p => { if (!map.has(p.slug)) map.set(p.slug, p); });
  return Array.from(map.values());
};

const formatUrl = ({ loc, lastmod, changefreq, priority, images }) => {
  const imgXml = (images || []).map(img => `\n    <image:image>\n      <image:loc>${img}</image:loc>\n    </image:image>`).join('');
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>${changefreq ? `\n    <changefreq>${changefreq}</changefreq>` : ''}${priority ? `\n    <priority>${priority}</priority>` : ''}${imgXml}\n  </url>`;
};

const generateSitemap = () => {
  const baseUrl = 'https://transportuok.lt';
  const today = new Date();
  const isoDate = today.toISOString().split('T')[0];

  // Core pages
  const staticPages = [
    { loc: `${baseUrl}/`, priority: 1.0, changefreq: 'daily' },
    { loc: `${baseUrl}/paslaugos/buitines-technikos-isvezimas`, priority: 0.9, changefreq: 'weekly' },
    { loc: `${baseUrl}/paslaugos/elektronikos-atlieku-isvezimas`, priority: 0.9, changefreq: 'weekly' },
    { loc: `${baseUrl}/paslaugos/baldu-isvezimas`, priority: 0.9, changefreq: 'weekly' },
    { loc: `${baseUrl}/paslaugos/metalo-lauzo-isvezimas`, priority: 0.9, changefreq: 'weekly' },
    { loc: `${baseUrl}/naujienos`, priority: 0.8, changefreq: 'daily' },
    { loc: `${baseUrl}/apie-mus`, priority: 0.6, changefreq: 'monthly' },
    { loc: `${baseUrl}/kontaktai`, priority: 0.8, changefreq: 'monthly' },
    { loc: `${baseUrl}/kaunas`, priority: 0.8, changefreq: 'monthly' },
    { loc: `${baseUrl}/vilnius`, priority: 0.8, changefreq: 'monthly' }
  ];

  // Blog/news posts (from code) – include individual lastmod + image
  const posts = extractPosts();
  const postEntries = posts.map(p => ({
    loc: `${baseUrl}/naujienos/${p.slug}`,
    priority: 0.7,
    changefreq: 'monthly',
    lastmod: /^\d{4}-\d{2}-\d{2}$/.test(p.date) ? p.date : undefined,
    images: p.image ? [`${baseUrl}${p.image.startsWith('/') ? p.image : `/${p.image}`}`] : []
  }));

  const urls = [...staticPages, ...postEntries]
    .map(u => formatUrl({ ...u, lastmod: u.lastmod || isoDate, images: u.images }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
<!-- Generated: ${new Date().toISOString()} -->
${urls.join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(process.cwd(), 'public/sitemap.xml'), xml);
  console.log(`Sitemap generated (${urls.length} URLs).`);
};

generateSitemap();