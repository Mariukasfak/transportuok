import company from '../data/company';

const SITE_ORIGIN = company.domain.replace(/\/$/, '');

const ABSOLUTE_URL_REGEX = /^https?:\/\//i;

const stripTrailingSlash = (input: string) => input.replace(/\/+$/, '');

export const buildAbsoluteUrl = (target = ''): string => {
  if (!target) {
    return `${SITE_ORIGIN}/`;
  }

  if (ABSOLUTE_URL_REGEX.test(target)) {
    return target;
  }

  const normalizedPath = target.startsWith('/') ? target : `/${target}`;
  return `${SITE_ORIGIN}${normalizedPath}`;
};

export const buildCanonicalUrl = (input = '/'): string => {
  if (ABSOLUTE_URL_REGEX.test(input)) {
    const url = new URL(input);
    url.hash = '';
    if (url.pathname !== '/' && url.pathname.endsWith('/')) {
      url.pathname = stripTrailingSlash(url.pathname);
    }
    return url.toString();
  }

  const normalizedPath = input && input !== '/' ? (input.startsWith('/') ? input : `/${input}`) : '/';

  if (normalizedPath === '/') {
    return `${SITE_ORIGIN}/`;
  }

  return `${SITE_ORIGIN}${stripTrailingSlash(normalizedPath)}`;
};

export const withSeoId = (canonical: string, fragment: string) => {
  const resolved = buildCanonicalUrl(canonical);
  return `${resolved}${fragment.startsWith('#') ? fragment : `#${fragment}`}`;
};

export const getSiteOrigin = () => `${SITE_ORIGIN}/`;
