/* In this file, we have an event listener, which listens before we want to send a request. This event listener, will then check
where the request is going. If it is an unwanted URL, it will block the request */

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true}},
    /* To block more sites/ads, copy and paste the URL(s) like shown in the example below*/
    { urls: 
        ["*://*.adroll.com/*", "*://*.g2.com/*", "*://*.totaladblock.com/*"]},
        ["blocking"]
)
