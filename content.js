chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg === 'url-update') {
        remove();
    }
});

function remove() {
    // Removes suggestions on home page
    const homeContainer = document.querySelector('ytd-two-column-browse-results-renderer');
    if (homeContainer) {
        homeContainer.remove();
    }

    // Removes recommended videos on sidebar
    const related = document.querySelector('#secondary');
    if (related) {
        related.remove();
    }
}