'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "4456f5df998061af3150a4f763b31d50",
"splash/img/light-2x.png": "94eeeba227ff3f94f7e0b6ab66919140",
"splash/img/dark-4x.png": "2d070665e0ec286d053954cc0f972d38",
"splash/img/light-3x.png": "ab79d9b86a5815b547a7fabdd23d94e4",
"splash/img/dark-3x.png": "ab79d9b86a5815b547a7fabdd23d94e4",
"splash/img/light-4x.png": "2d070665e0ec286d053954cc0f972d38",
"splash/img/dark-2x.png": "94eeeba227ff3f94f7e0b6ab66919140",
"splash/img/dark-1x.png": "fa2ec076fde190a34bfb5df0dae7f523",
"splash/img/light-1x.png": "fa2ec076fde190a34bfb5df0dae7f523",
"index.html": "7c4938b45f9dff9d4724728a16f4c3a0",
"/": "7c4938b45f9dff9d4724728a16f4c3a0",
"main.dart.js": "01b6240ff34399ec5a21efec4783810a",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "db69006b06319e52efb670c080b44108",
"icons/Icon-192.png": "2cdaf91223537f2906d2a9f6f0826fa4",
"icons/Icon-maskable-192.png": "2cdaf91223537f2906d2a9f6f0826fa4",
"icons/Icon-maskable-512.png": "6b39bb7f1a0a4fefdeeae2b6473ad3e6",
"icons/Icon-512.png": "6b39bb7f1a0a4fefdeeae2b6473ad3e6",
"manifest.json": "eb353f631950d1ff5803fced3d9fb616",
"assets/asset/images/ic_avatar_default.png": "9db0d961f8a883cb286babbf6a49169d",
"assets/asset/images/ic_plash_web_image.png": "663789eefd84c225d96c17cf30f2f8c6",
"assets/asset/images/2.0x/ic_avatar_default.png": "07122bae3ff1f32e91a52a98af5a7807",
"assets/asset/images/2.0x/ic_tevi_admin_menu_header.png": "c534bfe16991ba4eb4f521f81921453d",
"assets/asset/images/2.0x/ic_nav_logo_center.png": "315859936ec1b4802d02c5947ba24bf0",
"assets/asset/images/2.0x/ic_logo_tevi_new.png": "04904349aacd50415af55c9587bfe7b4",
"assets/asset/images/3.0x/ic_avatar_default.png": "2d4d4f8f8bcc6b9d06e38e54eb4d4675",
"assets/asset/images/3.0x/ic_tevi_admin_menu_header.png": "fe014319602d154fd732fb92dc39cc29",
"assets/asset/images/3.0x/ic_nav_logo_center.png": "cfb873f253dda4f23ad98a5bd7aa836c",
"assets/asset/images/3.0x/ic_logo_tevi_new.png": "efbb968ca8a3f0f060c8838d05dff6d2",
"assets/asset/images/ic_tevi_admin_menu_header.png": "fd0fd353b1cd4a620c596145f4873ee1",
"assets/asset/images/ic_nav_logo_center.png": "96cd5bf1897d5416cd97763105c8c042",
"assets/asset/images/ic_logo_tevi_new.png": "f0fc640599835437ffe121d67a9762d6",
"assets/AssetManifest.json": "16b506f6f68d889095b306fe45e50a20",
"assets/NOTICES": "63a3a002e62f83dd679887c61b107ac9",
"assets/FontManifest.json": "ac3f70900a17dc2eb8830a3e27c653c3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "8ca816e8c64dd03baab802c3e97ebcff",
"assets/fonts/MaterialIcons-Regular.otf": "ca45d801bf31ecb2e8f0f615322f3ef0",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
