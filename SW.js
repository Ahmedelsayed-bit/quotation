// sw.js
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // كود بسيط لمرور البيانات بدون كاش معقد
  e.respondWith(fetch(e.request).catch(() => console.log('Offline mode not fully configured yet.')));
});