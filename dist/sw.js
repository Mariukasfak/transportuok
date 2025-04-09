// Service worker version
const CACHE_VERSION = 'v1';
const CACHE_NAME = `transportuok-${CACHE_VERSION}`;

// Assets to cache on install
const STATIC_CACHE_URLS = [
  '/',
  '/index.html',
  '/assets/index.css',
  '/assets/index.js',
  '/assets/react-vendor.js',
  '/assets/icons.js',
  '/images/hero-bg-appliances-small.webp',
  '/images/hero-bg-appliances-medium.webp',
  '/images/hero-bg-appliances-large.webp',
  '/images/buitine-technika.webp',
  '/images/elektronika.webp',
  '/images/baldai.webp',
  '/images/metalo-lauzas.webp',
  '/ikona_spalvotas.svg'
];

// Install event - precache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_CACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => cacheName.startsWith('transportuok-') && cacheName !== CACHE_NAME)
            .map(cacheName => caches.delete(cacheName))
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip Google Maps and font requests
  if (
    event.request.url.includes('maps.googleapis.com') ||
    event.request.url.includes('fonts.googleapis.com')
  ) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request)
          .then(response => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          });
      })
  );
});