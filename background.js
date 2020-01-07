var rxLookfor = /^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.?be)\/.+$/;
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log(changeInfo);
    
    if ((changeInfo.url && rxLookfor.test(changeInfo.url) || changeInfo.status === 'complete')) {
        chrome.tabs.sendMessage(tabId, 'url-update');
    }
});