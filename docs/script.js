function showOverlay() {
    var overlay = document.getElementById('customPopupOverlay');
    overlay.style.display = 'flex'; 
}

function closeOverlay() {
    var overlay = document.getElementById('customPopupOverlay');
    overlay.style.display = 'none';
}

document.addEventListener('customPopupEvent', function () {
    console.log("Custom Event Listener Registered: For Testing PopUps") 
    showOverlay();
});

document.addEventListener('DOMContentLoaded', function () {
    document.dispatchEvent(new Event('customPopupEvent'));
    console.log("Custom Event Triggered: For Testing PopUps")
});



