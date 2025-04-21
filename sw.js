// Service Worker: Cache die wichtigen Ressourcen
self.addEventListener('install', (event) => {
  console.log('Service Worker installiert');
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/NefassCalender/NefassKalender.html',
        '/styles.css',
        '/app.js',
        '/192x192.png',
        '/512x512.png'
      ]);
    })
  );
});

// Event-Listener für "fetch" – Prüft den Cache und holt die Ressourcen entweder aus dem Cache oder vom Netzwerk
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Aktivieren des Service Workers
self.addEventListener('activate', (event) => {
  console.log('Service Worker aktiviert');
});