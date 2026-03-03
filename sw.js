// sw.js
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  // 拦截请求并直接放行，告诉浏览器“我是一个合格的 PWA”
  e.respondWith(fetch(e.request).catch(() => new Response('OK')));
});
