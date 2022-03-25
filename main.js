// In this file, we will be calling our crhome API's

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true}},
    /* To block more sites/ads, copy and paste the below example*/
    { urls: 
        ["*://*.adroll.com/*", "*://*.g2.com/*", "*://*.totaladblock.com/*"]},
        ["blocking"]
)