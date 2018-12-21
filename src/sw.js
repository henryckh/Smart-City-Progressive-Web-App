var cacheName = 'smart-city-app';
var filesToCache = [
  '/',
  '/index.html',
  '/smart-city.css'
];

// Your app shell here
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    }) 
  );
});

// actived, can start fetch data
self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

// fetch data
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});
