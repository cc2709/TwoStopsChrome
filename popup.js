console.log('popup.js loaded');

document.addEventListener('COMContentLoaded', () => {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.message) {
            document.getElementById('msg').innerText = request.message;
        }
    });
});

chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'session' && changes.linkUrl.newValue) {
        document.getElementById('msg').innerText = changes.linkUrl.newValue;
    }
});


