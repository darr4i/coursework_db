/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f17f557f7d751e707c0c91711df37c60"
  },
  {
    "url": "assets/css/0.styles.bf017dbb.css",
    "revision": "f5c625166c3e095ea21854e37039cad2"
  },
  {
    "url": "assets/img/relation-diagram.60415180.png",
    "revision": "604151805a60802b9e5d02489fbbe1d3"
  },
  {
    "url": "assets/img/screen_1.73fd763e.jpg",
    "revision": "73fd763e3f1bfb3d27b31263a3fab74d"
  },
  {
    "url": "assets/img/screen_10.83ff59f1.jpg",
    "revision": "83ff59f1aa0a06df63c273e2f69cce88"
  },
  {
    "url": "assets/img/screen_11.db87980f.jpg",
    "revision": "db87980fbca46483cd84bcc932253869"
  },
  {
    "url": "assets/img/screen_2.ff489bf0.jpg",
    "revision": "ff489bf037c0109fa1e5a2594f022e7d"
  },
  {
    "url": "assets/img/screen_3.b426c1a5.jpg",
    "revision": "b426c1a5237a864fe57517aded48c551"
  },
  {
    "url": "assets/img/screen_4.bdbfed88.jpg",
    "revision": "bdbfed88ed73841c564513d65fd08a34"
  },
  {
    "url": "assets/img/screen_5.6a21ebe9.jpg",
    "revision": "6a21ebe902b7e70a91e3db130212f66e"
  },
  {
    "url": "assets/img/screen_6.706dec5d.jpg",
    "revision": "706dec5d06ecb481357c16189917b456"
  },
  {
    "url": "assets/img/screen_7.85713d80.jpg",
    "revision": "85713d80d5089807311f4a4e58916f7e"
  },
  {
    "url": "assets/img/screen_8.abff0c19.jpg",
    "revision": "abff0c192be5e16d4b5e0e4b640e7745"
  },
  {
    "url": "assets/img/screen_9.65d5ce8d.jpg",
    "revision": "65d5ce8de107563834453c239d2a12d7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.6aaaad9b.js",
    "revision": "1e33e880b442985540e926ccc528401d"
  },
  {
    "url": "assets/js/10.1480a105.js",
    "revision": "a2c8d6dbd2c5534e06a0469f5e5be230"
  },
  {
    "url": "assets/js/13.56bd4528.js",
    "revision": "8e19a33127dd19300c7a35cc3607a9d3"
  },
  {
    "url": "assets/js/14.a58bf5bb.js",
    "revision": "311f31f96cef7ae80e2e0c584f11adf1"
  },
  {
    "url": "assets/js/15.aee6201b.js",
    "revision": "8da943fe0063a3d57aeb86ec297b96cb"
  },
  {
    "url": "assets/js/16.c3789647.js",
    "revision": "bd5ce2a5bc26cadd27b1d0a121531632"
  },
  {
    "url": "assets/js/17.30780419.js",
    "revision": "12d432854c455386bfc0854ab67760a3"
  },
  {
    "url": "assets/js/18.b1f54239.js",
    "revision": "2316f515067bf290ab70251d758ca5eb"
  },
  {
    "url": "assets/js/19.3b445db3.js",
    "revision": "04371a06d52f4b91a81b8f2c0b3943e7"
  },
  {
    "url": "assets/js/2.2614b801.js",
    "revision": "84692a453b4c0ca6a482eb4b5a2cf67b"
  },
  {
    "url": "assets/js/20.f3e93538.js",
    "revision": "c849d42d4a7f27083a869c869d99d6cc"
  },
  {
    "url": "assets/js/21.4a8d189d.js",
    "revision": "f386e9d86eccc3eb85be8d05cc495cb8"
  },
  {
    "url": "assets/js/22.33bb068b.js",
    "revision": "f17f1b3d1d62679d66de405fecc9b3fc"
  },
  {
    "url": "assets/js/23.43eea43d.js",
    "revision": "f5b463adffec4f9daa419d507c540289"
  },
  {
    "url": "assets/js/24.a463ff59.js",
    "revision": "0b6e98304c16c654b28ff711c252edd9"
  },
  {
    "url": "assets/js/25.3f7c5289.js",
    "revision": "b01819182f1ce9d4d6a8f43c9a71182d"
  },
  {
    "url": "assets/js/26.47f34268.js",
    "revision": "976e1ce622f242b6c05cbb6ad5d9c9af"
  },
  {
    "url": "assets/js/27.00d971dd.js",
    "revision": "d3e8dde9fbfb1dfa2c01d766ddc204ed"
  },
  {
    "url": "assets/js/28.ddbd2bdb.js",
    "revision": "909cb0ead924e808dccb7282b28e710b"
  },
  {
    "url": "assets/js/29.33804049.js",
    "revision": "d6ba9e3fe5e0dd99cf4bc9af9070aa15"
  },
  {
    "url": "assets/js/3.d7bf5bdc.js",
    "revision": "093e1728a001aac2def189fe2ccc139d"
  },
  {
    "url": "assets/js/30.b4ad3947.js",
    "revision": "4ddd510d56d7144c76a280d58564abd3"
  },
  {
    "url": "assets/js/31.b38fe75a.js",
    "revision": "b3340f7b99a0ba9da5825c7df9d5f914"
  },
  {
    "url": "assets/js/32.59ecc26b.js",
    "revision": "beb5362cba00d4feeeab8e444e3d80fa"
  },
  {
    "url": "assets/js/33.48b96b93.js",
    "revision": "86f3f745d5e8913d13cb11a7ff76f82c"
  },
  {
    "url": "assets/js/34.6c2c1110.js",
    "revision": "6125b3542b3016422edefa234abad285"
  },
  {
    "url": "assets/js/35.bb6536ec.js",
    "revision": "b6d21218fb1b60cf4c792e0478d97c30"
  },
  {
    "url": "assets/js/36.097f8c0e.js",
    "revision": "6eb273b1ce1adb95b10b52470535fdc8"
  },
  {
    "url": "assets/js/37.06cfdadf.js",
    "revision": "67ff8fe28167fea00701477d58379160"
  },
  {
    "url": "assets/js/38.518f22b5.js",
    "revision": "91827f596aeb35152b14170585bb636a"
  },
  {
    "url": "assets/js/39.9e66daf8.js",
    "revision": "c8a5cb5495aed2db8aa4aa18acdc89cd"
  },
  {
    "url": "assets/js/4.53f73050.js",
    "revision": "a5deb0174782d998c5d15069e71b124c"
  },
  {
    "url": "assets/js/41.f8eb18c3.js",
    "revision": "9c5146a9be29a7d120e4bd85bcfed24a"
  },
  {
    "url": "assets/js/5.6cf344f1.js",
    "revision": "aaa9d4914688249fdaa33107922e1897"
  },
  {
    "url": "assets/js/6.a641329f.js",
    "revision": "018baa9d061cb57937c3344248c84e53"
  },
  {
    "url": "assets/js/7.bc246118.js",
    "revision": "23adcf6f3e26f6f76d0cd8789c98536e"
  },
  {
    "url": "assets/js/8.1b5af52f.js",
    "revision": "bdb1d3ee0c6fc4b1d2814cc424a3102d"
  },
  {
    "url": "assets/js/9.ba694011.js",
    "revision": "7ae6a3f503420b73a1f70753ffdd5e9a"
  },
  {
    "url": "assets/js/app.ec0a4ad1.js",
    "revision": "1a6b43fb1c58f9067acfaf0b6161f85b"
  },
  {
    "url": "assets/js/vendors~docsearch.2184b1dd.js",
    "revision": "01042a29b434baef327ddd17f11933e9"
  },
  {
    "url": "conclusion/index.html",
    "revision": "e2a1df182bbeac0122ae28906c5e5be9"
  },
  {
    "url": "design/index.html",
    "revision": "04a1df10fbfabcd4f07a9f568bb0af4f"
  },
  {
    "url": "index.html",
    "revision": "58414a1ca0ca9602be3bda80d6f314f6"
  },
  {
    "url": "intro/index.html",
    "revision": "8e1b3886bbf9a967b0b3dc674f21d5fc"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "745f9394806ad5d8a0f352be66ae1a45"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "c3659f399c433314d6cbb55fff530245"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "159763abb7b78f63bafafb5e051e6ec0"
  },
  {
    "url": "software/index.html",
    "revision": "35b32d03bab489655b8f5419f85d57ad"
  },
  {
    "url": "test/index.html",
    "revision": "4f34486f4e95a4f0210785f2d5e6549a"
  },
  {
    "url": "use cases/index.html",
    "revision": "afab5518718230a1b160a1bee3473541"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
