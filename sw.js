const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/pico.min.css',
    '/js/app.js',
    '/images/logo.png',
    '/assets/apple-icon-180.png',
    '/assets/apple-splash-1242-2688.jpg',
    '/assets/apple-splash-1620-2160.jpg',
    '/assets/apple-splash-2048-2732.jpg',
    '/assets/apple-splash-2388-1668.jpg',
    '/assets/apple-splash-2778-1284.jpg',
    '/assets/manifest-icon-512.maskable.png',
    '/assets/apple-splash-1125-2436.jpg',
    '/assets/apple-splash-1284-2778.jpg',
    '/assets/apple-splash-1640-2360.jpg',
    '/assets/apple-splash-2160-1620.jpg',
    '/assets/apple-splash-2436-1125.jpg',
    '/assets/apple-splash-2796-1290.jpg',
    '/assets/apple-splash-1136-640.jpg',
    '/assets/apple-splash-1290-2796.jpg',
    '/assets/apple-splash-1668-2224.jpg',
    '/assets/apple-splash-2208-1242.jpg',
    '/assets/apple-splash-2532-1170.jpg',
    '/assets/apple-splash-640-1136.jpg',
    '/assets/apple-splash-1170-2532.jpg',
    '/assets/apple-splash-1334-750.jpg',
    '/assets/apple-splash-1668-2388.jpg',
    '/assets/apple-splash-2224-1668.jpg',
    '/assets/apple-splash-2556-1179.jpg',
    '/assets/apple-splash-750-1334.jpg',
    '/assets/apple-splash-1179-2556.jpg',
    '/assets/apple-splash-1488-2266.jpg',
    '/assets/apple-splash-1792-828.jpg',
    '/assets/apple-splash-2266-1488.jpg',
    '/assets/apple-splash-2688-1242.jpg',
    '/assets/apple-splash-828-1792.jpg',
    '/assets/apple-splash-1242-2208.jpg',
    '/assets/apple-splash-1536-2048.jpg',
    '/assets/apple-splash-2048-1536.jpg',
    '/assets/apple-splash-2360-1640.jpg',
    '/assets/apple-splash-2732-2048.jpg',
    '/assets/manifest-icon-192.maskable.png',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request)
            .then(response => {
                // Clone the response
                const responseClone = response.clone();

                // Open the cache
                caches.open(CACHE_NAME)
                    .then(cache => {
                        // Add the network response to the cache
                        cache.put(event.request, responseClone);
                    });

                return response;
            })
            .catch(() => {
                // If the network request failed, try to get it from the cache
                return caches.match(event.request);
            })
    );
});
