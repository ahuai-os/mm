self.addEventListener('install', function(event) {
    self.skipWaiting();
});

self.addEventListener('fetch', function(event) {
    // 这里留空即可，但必须存在这个监听器
});
