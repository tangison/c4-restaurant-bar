// C4 offline safety net.
// - Install: cache the branded offline fallback page and its logo.
// - Fetch: pass everything straight to the network. If a navigation fails
//   (offline, dead connection), answer with the cached offline page.
// No cache-first strategy anywhere, so deployments can never go stale.

const OFFLINE_URL = "/offline.html";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("c4-offline-v1")
      .then((cache) => cache.addAll([OFFLINE_URL, "/brand/icon-knockout.svg"]))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== "c4-offline-v1").map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.mode !== "navigate") return;
  event.respondWith(
    fetch(req).catch(() =>
      caches.match(OFFLINE_URL).then(
        (hit) =>
          hit ||
          new Response("You are offline.", {
            status: 503,
            headers: { "Content-Type": "text/plain" },
          })
      )
    )
  );
});
