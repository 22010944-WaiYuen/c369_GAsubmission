function checkPasswordStrength(password) {
    const strengthText = document.getElementById("strength-text");

    if (password.length === 0) {
        strengthText.textContent = "";
        return;
    }

    if (password.length < 6) {
        strengthText.textContent = "Weak";
        strengthText.style.color = "red";
    } else if (password.length < 10) {
        strengthText.textContent = "Moderate";
        strengthText.style.color = "orange";
    } else {
        strengthText.textContent = "Strong";
        strengthText.style.color = "green";
    }
}