// Function to show the modal overlay
function showOverlay() {
    var overlay = document.getElementById('customPopupOverlay');
    overlay.style.display = 'flex'; // Use 'flex' to center the modal content
}

// Function to close the modal overlay
function closeOverlay() {
    var overlay = document.getElementById('customPopupOverlay');
    overlay.style.display = 'none';
}

// Example: Listen for a custom event named "customPopupEvent"
document.addEventListener('customPopupEvent', function () {
    // Code to show the modal overlay
    console.log("Custom Event Listener Registered: For Testing PopUps") 
    showOverlay();
});

// Dispatch the custom event when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    document.dispatchEvent(new Event('customPopupEvent'));
    console.log("Custom Event Triggered: For Testing PopUps")
});



