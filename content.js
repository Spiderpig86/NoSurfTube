chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg === 'url-update') {
        removeSuggestedVideos();
    }
});

function removeSuggestedVideos() {
    // Removes suggestions on home page
    const homeContainer = document.querySelector('ytd-two-column-browse-results-renderer');
    if (homeContainer) {
        homeContainer.remove();
    }

    // Removes recommended videos on sidebar
    const secondary = document.querySelector('#secondary');
    if (secondary) {
        document.querySelector('#related').remove();
        secondary.remove();
    }
}