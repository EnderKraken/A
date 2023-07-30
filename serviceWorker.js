self.addEventListener('fetch', function (event) {
    console.log('Intercepting: ' + event.request.url);
})