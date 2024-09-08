console.log('popup.js loaded');

document.addEventListener('COMContentLoaded', () => {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.message) {
            document.getElementById('msg').innerText = request.message;
        }
    });
});
