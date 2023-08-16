document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple client-side validation (replace with server-side validation in real-world scenario)
    // For demonstration, the hardcoded username and password are "demo_user" and "demo_password"
    if (username === "demo_user" && password === "demo_password") {
        alert("Login successful!");
        // Add your redirect logic here (e.g., window.location.href = "dashboard.html");
    } else {
        alert("Invalid credentials. Please try again.");
    }
});

// Check if the user is already logged in
function checkLoginStatus() {
    const username = localStorage.getItem('username');
    if (username) {
        // User is logged in
        document.getElementById('login').style.display = 'none';
        document.getElementById('loggedInUser').textContent = `Logged in as: ${username}`;
        document.getElementById('logout').style.display = 'block';
    } else {
        // User is not logged in
        document.getElementById('login').style.display = 'block';
        document.getElementById('loggedInUser').textContent = '';
        document.getElementById('logout').style.display = 'none';
    }
}

// Handle login form submission
document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate a valid username and password (you should use a server-side validation)
    const validUsername = 'user';
    const validPassword = 'password';

    if (username === validUsername && password === validPassword) {
        localStorage.setItem('username', username);
        checkLoginStatus();
    } else {
        alert('Invalid credentials. Please try again.');
    }
});

// Handle logout
document.getElementById('logout').addEventListener('click', function() {
    localStorage.removeItem('username');
    checkLoginStatus();
});

// Initial check of login status
checkLoginStatus();