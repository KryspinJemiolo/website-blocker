chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true}},
    /* To block more sites/ads, copy and paste the URL(s) like shown in the example below*/
    { urls: 
        ["*://*.adroll.com/*", "*://*.g2.com/*", "*://*.totaladblock.com/*"]},
        ["blocking"]
)

