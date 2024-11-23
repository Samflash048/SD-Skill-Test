document.addEventListener("DOMContentLoaded", () => {
    // Handle transfer confirmation  
    const confirmButton = document.getElementById("confirmTransfer");
    if (confirmButton) {
        confirmButton.addEventListener("click", () => {
            const userId = document.getElementById("userId").value;
            alert(`Transfer initiated to ${userId}`);
            window.location.href = "pin-entry.html"; // Redirect to PIN entry page  
        });
    }

    // Handle PIN submission  
    const submitButton = document.getElementById("submitPin");
    if (submitButton) {
        submitButton.addEventListener("click", () => {
            const pin = document.getElementById("pin").value;
            const errorMessage = document.getElementById("error-message");

            if (pin.length === 4 && !isNaN(pin)) {
                // Handle successful PIN entry (For example, redirect to success page)  
                alert("PIN accepted!");
                window.location.href = "success.html"; // Redirect to success page  
            } else {
                errorMessage.textContent = "Please enter a valid 4-digit PIN.";
            }
        });
    }
});