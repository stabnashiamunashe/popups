// Function to show the popup
function showPopup() {
    var popup = document.getElementById('customPopup');
    popup.style.display = 'block';
}

// Function to close the popup
function closePopup() {
    var popup = document.getElementById('customPopup');
    popup.style.display = 'none';
}

// Example: Listen for a custom event named "customPopupEvent"
document.addEventListener('customPopupEvent', function () {
    // Code to show the popup
    console.log("Custom Event Listener Registered: For Testing PopUps")    
    showPopup();
});

// Example: Trigger the custom event when a button is clicked
document.addEventListener('DOMContentLoaded', function () {
    // Dispatch the custom event when the DOM is fully loaded
    document.dispatchEvent(new Event('customPopupEvent'));
    console.log("Custom Event Triggered: For Testing PopUps")
});


