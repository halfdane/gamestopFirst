let params = new URLSearchParams(window.location.search);
let searchTerm = params.get("q")
chrome.runtime.sendMessage({text: searchTerm});
