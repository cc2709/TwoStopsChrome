// Create context menu item
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "downloadLink",
        title: "DOWNLOAD-LINK",
        contexts: ["link"]
    });
});

// Handle context menu item click
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "downloadLink") {
        const downloadUrl = info.linkUrl;
        const formData = new FormData();
        formData.append('url', 'hello');
        formData.append('msg', 'hello!!!');

        console.log('msg sent')
        fetch('http://localhost:8000/health', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                chrome.storage.session.set({ 'linkUrl': downloadUrl }).then(() => { console.log('linkUrl saved') });
            })
            .catch((error) => console.error('Error:', error));
    }
});

