chrome.runtime.onMessage.addListener(function(msg) {
    chrome.tabs.create(
        {
            "active": false,
            "url": "https://www.gamestop.com/search/?q="+msg.text+"&lang=default"
        }
    )
});
