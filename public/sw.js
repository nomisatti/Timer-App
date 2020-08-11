let cacheData = "timerAppV1";

this.addEventListener("install", (event) => {

    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                "/static/js/bundle.js",
                "/static/js/main.chunk.js",
                "/static/js/0.chunk.js",
                "/static/css/main.157a0fcd.chunk.css",
                "/static/js/2.5d424655.chunk.js",
                "/static/js/main.d6b663ed.chunk.js",
                "https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css",
                "https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/fonts/fontawesome-webfont.woff2?v=4.6.1",
                "/main.708d841cbc4641fc9ee6.hot-update.js",
                "/static/media/timerLogo.5c999e8d.png",
                "/static/media/timerImage.5de9b5ad.jpg",
                "/logo192.png",
                "/static/js/0.chunk.js.map",
                "/manifest.json",
                "/favicon.png",
                "/fmkadmapgofadopljbjfkapdkoienihi/build/react_devtools_backend.js",
                "/"
            ])
        })
    )
})

this.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((result) => {

            return result

        })
    )
})