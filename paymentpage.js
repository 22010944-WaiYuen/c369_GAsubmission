// Get references to the form elements
const paymentForm = document.getElementById("payment-form");
const otpInput = document.getElementById("otp");

// Add an event listener to the form submission
paymentForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Generate a random OTP
    const generatedOTP = generateOTP();

    // Display the generated OTP in the OTP input field
    otpInput.value = generatedOTP;

    // Show an alert to indicate that the payment has been made
    alert("Payment has been made successfully!");

    // You can optionally submit the form to your server here
    // paymentForm.submit();
});

// Function to generate a random OTP
function generateOTP() {
    const otpLength = 6;
    const otpChars = "0123456789";
    let otp = "";

    for (let i = 0; i < otpLength; i++) {
        const randomIndex = Math.floor(Math.random() * otpChars.length);
        otp += otpChars[randomIndex];
    }

    return otp;
}
