const CACHE="bright-vision-v3";
const FILES=["./","./index.html","./styles.css","./app.js","./manifest.json","./assets/website-concept.png","./assets/website-moodboard.png","./assets/founder-workspace.jpg","./assets/founder-about.jpg","./assets/client-project.jpg","./assets/video-editing-workspace.jpg"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).catch(()=>caches.match("./index.html")))));
