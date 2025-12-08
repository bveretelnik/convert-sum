const STATIC_CACHE = 'convert-sum-static-v1';
const API_CACHE = 'convert-sum-api-v1';

const FILES_TO_CACHE = [
  '/convert-sum/',
  '/convert-sum/index.html',
  '/convert-sum/assets/index.js',
  '/convert-sum/assets/index.css',
];

self.addEventListener('install', event => {
  console.log('[SW] Install');
  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    }),
  );
});

self.addEventListener('activate', event => {
  console.log('[SW] Activate');
});

self.addEventListener('fetch', event => {
  const request = event.request;

  if (request.url.includes('/api/')) {
    event.respondWith(
      fetch(request)
        .then(response => {
          const cloned = response.clone();
          caches.open(API_CACHE).then(cache => {
            cache.put(request, cloned);
          });
          return response;
        })
        .catch(() => {
          return caches.match(request);
        }),
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => {
      return (
        cached ||
        fetch(request).then(response => {
          return response;
        })
      );
    }),
  );
});
