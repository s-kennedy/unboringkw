if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const t=e=>c(e,n),d={module:{uri:n},exports:r,require:t};s[n]=Promise.all(a.map((e=>d[e]||t(e)))).then((e=>(i(...e),r)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/MXbZwnH257av4YNHXpoie/_buildManifest.js",revision:"a95c3ecf3e69b31194fc933080bf6544"},{url:"/_next/static/MXbZwnH257av4YNHXpoie/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/110-5c339372899c19ad.js",revision:"5c339372899c19ad"},{url:"/_next/static/chunks/120-1ab4bf34d66a64c0.js",revision:"1ab4bf34d66a64c0"},{url:"/_next/static/chunks/169-6a78718036c1907f.js",revision:"6a78718036c1907f"},{url:"/_next/static/chunks/253-8e553519e27edec7.js",revision:"8e553519e27edec7"},{url:"/_next/static/chunks/312.de63f71769258a80.js",revision:"de63f71769258a80"},{url:"/_next/static/chunks/356.ce260ee63f15b78b.js",revision:"ce260ee63f15b78b"},{url:"/_next/static/chunks/380-bf91a87756385d11.js",revision:"bf91a87756385d11"},{url:"/_next/static/chunks/463-5b090c312afba56f.js",revision:"5b090c312afba56f"},{url:"/_next/static/chunks/469.0439919d98f4176f.js",revision:"0439919d98f4176f"},{url:"/_next/static/chunks/476.41aca766cb64b4fd.js",revision:"41aca766cb64b4fd"},{url:"/_next/static/chunks/494.38dcea936201f1f8.js",revision:"38dcea936201f1f8"},{url:"/_next/static/chunks/536-b9f6b4abc3e845ec.js",revision:"b9f6b4abc3e845ec"},{url:"/_next/static/chunks/692.bc06a13da7980835.js",revision:"bc06a13da7980835"},{url:"/_next/static/chunks/744.81dc66bf33358b0b.js",revision:"81dc66bf33358b0b"},{url:"/_next/static/chunks/753-1a561309ad6db0d9.js",revision:"1a561309ad6db0d9"},{url:"/_next/static/chunks/768-f39f80a3d702e5d0.js",revision:"f39f80a3d702e5d0"},{url:"/_next/static/chunks/77.30b8c03399ae5b14.js",revision:"30b8c03399ae5b14"},{url:"/_next/static/chunks/790-52907c1e6cae0f50.js",revision:"52907c1e6cae0f50"},{url:"/_next/static/chunks/83.bcc60baa2b7ce6c9.js",revision:"bcc60baa2b7ce6c9"},{url:"/_next/static/chunks/935.cdcfce4eeb58f39c.js",revision:"cdcfce4eeb58f39c"},{url:"/_next/static/chunks/947c8574-6f11c316423a3cac.js",revision:"6f11c316423a3cac"},{url:"/_next/static/chunks/95-dce688555fa89942.js",revision:"dce688555fa89942"},{url:"/_next/static/chunks/98f61148.72351bdcc9110c24.js",revision:"72351bdcc9110c24"},{url:"/_next/static/chunks/framework-0c7baedefba6b077.js",revision:"0c7baedefba6b077"},{url:"/_next/static/chunks/main-4f47d01c93d005c1.js",revision:"4f47d01c93d005c1"},{url:"/_next/static/chunks/pages/_app-4d799fda4fbf382c.js",revision:"4d799fda4fbf382c"},{url:"/_next/static/chunks/pages/_error-ee5b5fb91d29d86f.js",revision:"ee5b5fb91d29d86f"},{url:"/_next/static/chunks/pages/activities-79cad7937aa5aebd.js",revision:"79cad7937aa5aebd"},{url:"/_next/static/chunks/pages/activities/%5Bslug%5D-ea4c10ce2d4fe231.js",revision:"ea4c10ce2d4fe231"},{url:"/_next/static/chunks/pages/articles-de464e7cd2889bc4.js",revision:"de464e7cd2889bc4"},{url:"/_next/static/chunks/pages/articles/%5Bslug%5D-7f16be155f02ea68.js",revision:"7f16be155f02ea68"},{url:"/_next/static/chunks/pages/articles/summer-camps-2024-1da0cd731b450e10.js",revision:"1da0cd731b450e10"},{url:"/_next/static/chunks/pages/collections/%5Bslug%5D-87e5282e05b134ce.js",revision:"87e5282e05b134ce"},{url:"/_next/static/chunks/pages/events-49b7430a91ea34dd.js",revision:"49b7430a91ea34dd"},{url:"/_next/static/chunks/pages/events/%5Bslug%5D-f481a9688a530c47.js",revision:"f481a9688a530c47"},{url:"/_next/static/chunks/pages/events/calendar.ics-0a8f59f1cdbf698b.js",revision:"0a8f59f1cdbf698b"},{url:"/_next/static/chunks/pages/index-1e5072f8387ba311.js",revision:"1e5072f8387ba311"},{url:"/_next/static/chunks/pages/maps-959fff06a8796dc5.js",revision:"959fff06a8796dc5"},{url:"/_next/static/chunks/pages/maps/%5Bslug%5D-8370d0ecab0da7f4.js",revision:"8370d0ecab0da7f4"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-094626e677a81a1a.js",revision:"094626e677a81a1a"},{url:"/_next/static/css/12cddb9c2e414a6d.css",revision:"12cddb9c2e414a6d"},{url:"/_next/static/css/87494935ba21e408.css",revision:"87494935ba21e408"},{url:"/_next/static/css/c07d15e3e28a6fd5.css",revision:"c07d15e3e28a6fd5"},{url:"/_next/static/css/df93bb96b4341116.css",revision:"df93bb96b4341116"},{url:"/_next/static/css/e8e157112469d467.css",revision:"e8e157112469d467"},{url:"/_next/static/media/2f84e5905207234f-s.p.ttf",revision:"24a99cad963490334804f40f3f5300be"},{url:"/_next/static/media/Outfit.a007c2d8.ttf",revision:"a007c2d8"},{url:"/articles/brunch.png",revision:"ba3fa6ccd0f8119ce9b308f0a68886c0"},{url:"/articles/dive-drag.png",revision:"9a0bcc853782d5591247bfbc2af18c9e"},{url:"/articles/emonight.png",revision:"60fd2a7ba3487b855a2758b1ceef4c2d"},{url:"/articles/jazz-hip-hop.png",revision:"68e0b68066458fd2e0ee24ed6572043a"},{url:"/articles/prom.png",revision:"3272e3c8e1fbd30302c231cf4e62a252"},{url:"/articles/rave.png",revision:"7ae4c0dead262a1cec8c96473d7f302a"},{url:"/articles/schedule.png",revision:"9a2c22045c5df31e6127cf1f7208c3e0"},{url:"/articles/stay-home.jpg",revision:"e0c443bec6d309f1eb82d10d9474f3a7"},{url:"/articles/summer-camps-2024.jpg",revision:"e5c2aa5a04536db63e5b05781eeb57ad"},{url:"/articles/tacofarm.png",revision:"f13421b59a3af183e0138aa7cbdda5cd"},{url:"/articles/yeti.png",revision:"71b7e21fa76e4c7cabf4db102902320e"},{url:"/background-bw.svg",revision:"1a433fd390a2631b0795ceefc515c2d5"},{url:"/biking-girl.png",revision:"171f33baa64901d5e4f72d1d0c1d1792"},{url:"/blob-green.svg",revision:"895ad6f1ebea3d478de74575f9a145b9"},{url:"/blob.svg",revision:"455b4999be3889d40cd7235092c6767c"},{url:"/calendar-laptop.png",revision:"986920ab94251c7b9785af6a3adb893c"},{url:"/calendar-square.png",revision:"dc81df1c0362ba8597f7955bfd58b363"},{url:"/clock-tower.png",revision:"af01fd4de123556f576c6fdddbaf4351"},{url:"/events-phone-mockup.mp4",revision:"a097b0647791a900f6392dcd2d35d0e9"},{url:"/events-phone-mockup.png",revision:"4348bd9237b209e55510e50bb7d2d61a"},{url:"/events-phone-mockup.webm",revision:"059cfb0f9a2d16a3a4c0368063ceb1fd"},{url:"/favicon-16x16.png",revision:"5374b0e51f83882774603276af1350fb"},{url:"/favicon-32x32.png",revision:"7d5c66bf247922d7ebfdbba5504377a6"},{url:"/favicon.ico",revision:"45effe83ced1ebf62c4497cfa63d64ad"},{url:"/favicon.png",revision:"c0a1616dfb7aadf4eefa5a6383831ebd"},{url:"/goose-flipped.png",revision:"a14438065a048bd02fa8fd957fdf88b1"},{url:"/goose.png",revision:"5a87edbc7b42ed484027fc322f8fe348"},{url:"/highlights-01.svg",revision:"b13439d18fa2cdb06809783777ca6578"},{url:"/highlights-02.svg",revision:"8fe3e0497468fc4adb2562a3e6a699e2"},{url:"/highlights.svg",revision:"929c7c7f9d61e30c3ad5294378b00cd1"},{url:"/home-icon.svg",revision:"c7fe0c92f22dde6fcdd2486f34d4aebe"},{url:"/icon-01.png",revision:"29e6b602f84cb9a82bc6dc6b096ff2d0"},{url:"/icon-01.svg",revision:"df72e0ed88474e25f57d973a996dec63"},{url:"/icon-02.png",revision:"ab438680f86bfd9e7042d84e33c4583d"},{url:"/icon-02.svg",revision:"eded004d3f63b950cb5b476c92f5cbf1"},{url:"/icon-03.png",revision:"962446d39f6f6b73e2845670f04656a2"},{url:"/icon-03.svg",revision:"e98e2bce74064eda4941f3a19ecc99f4"},{url:"/icon-04.png",revision:"3089b432ecef325844852f646c82bfca"},{url:"/icon-04.svg",revision:"748b4af302b9fb4f2c3f501a6d9be8d8"},{url:"/icon-maskable-512.png",revision:"4869603fd004772fbe8c54fbde6e4950"},{url:"/icon.png",revision:"80e51e41610f7f9ea55c39994d51f7fa"},{url:"/ion-icon.png",revision:"04ff9a2fa4ade6afc3f4a6ec32daccdc"},{url:"/ion-illustrated.png",revision:"b6ff19c1d698dbf09acc60c13b6571c7"},{url:"/loading.svg",revision:"a76facee33c9d267eaa29ac69b083a8c"},{url:"/logo-01.svg",revision:"a3326f455462907fedac7834c88e7387"},{url:"/logo-02.svg",revision:"0957dab41e741c3e7243ae512dc095bc"},{url:"/logo-03.svg",revision:"b7f48713c1b64dbaeae4fd232e7b1eb5"},{url:"/logo.png",revision:"7a7e5a5a1dcd197070cc291e66ea1103"},{url:"/logo.svg",revision:"cbbfaea471014b312c3f81ea5097cb64"},{url:"/manifest.json",revision:"0483ca83068abb8de7d18a4deafa7fae"},{url:"/map-laptop-mockup.png",revision:"47cb9c76e50c3f2c2f69c3174a641ec3"},{url:"/map-thumbnail.jpg",revision:"7d6c95b1f8fb79bf43e4e91a079d1492"},{url:"/new-years.jpg",revision:"cf9f1ef095382003c26ea619ddc97425"},{url:"/playgrounds-map-thumbnail.webp",revision:"63a8378095d35d4ebea200768821fd5a"},{url:"/screenshot-activities.png",revision:"5fbac8a9e7fac3fdd4bb12df0b83f038"},{url:"/screenshot-events.png",revision:"306a063d6afb910ce81a9de947cc4cbf"},{url:"/screenshot-maps.png",revision:"fefbfed78bc4c22ae1772957a3b408e7"},{url:"/share-image.jpg",revision:"e96b4610f6d69fdcfc33f8ce3aa87d4a"},{url:"/sparkle.svg",revision:"8e6b124e7e1dd458bb0b5c001264bbaf"},{url:"/splashpads.gif",revision:"041e018fe87afe28cb773c8ff111d46e"},{url:"/twitter.svg",revision:"e45100f3d2def3605318ca61d72a4056"},{url:"/unboring-kw-logo-512.png",revision:"404ad0f15f6cd4a70dbd204057830e19"},{url:"/unboring-kw-logo-alt.svg",revision:"29f8510dd8765058c1a5a5cefeea040e"},{url:"/unboring-kw-logo-wordmark.png",revision:"0f4f16fde916199125c686b560c983de"},{url:"/unboring-kw-logo-wordmark.svg",revision:"d36e341275fe66d13112571b8d023ad1"},{url:"/unboring-kw-logo.png",revision:"23d6179c2811d7297d3ebdc86190aca8"},{url:"/unboring-kw-logo.svg",revision:"897effeafb297e10ef854a85671ebd02"},{url:"/unboring-outline.png",revision:"0d3d9f1a20049d6cab56fde4ca3b0aac"},{url:"/unboring-outline.svg",revision:"5cfebd4038d2fc8960f9e32947941ded"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"},{url:"/via-tracks-shape.png",revision:"aeaa93ab2912b951742ca1dd87641649"},{url:"/via-tracks.png",revision:"1405213e4c3416994b27a7782860a2e7"},{url:"/walper-hotel.jpg",revision:"c35c5186240455362ef8dc2b37cb79e4"},{url:"/walper-shape.png",revision:"e3915dfc9776da757be5b49676fdca87"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
