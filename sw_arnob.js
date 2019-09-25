self.addEventListener('install', async e => {
    console.log('sw install')
})

self.addEventListener('activate', event => {
    event.waitUntil(
      caches.open('pwa-static').then(cache => {
        return cache.addAll([
            "./",
            "./index.html",
            "./cache.js",
            "./noconn.json"
        ])
      })
    );
})


self.addEventListener('fetch', async event => {

    event.respondWith(
        caches.match(event.request).then(function(response) {
          return response || fetch(event.request);
        })
    );

})



