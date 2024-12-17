document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Perform login validation here
        // You will send these values to the backend for authentication

        // Example response simulation
        fetch('/login.php', {
            method: 'POST',
            body: new URLSearchParams({
                'username': username,
                'password': password
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = '/client_dashboard.html'; // Redirect to a dashboard page
            } else {
                document.getElementById('error-message').innerText = data.message;
            }
        })
        .catch(error => {
            document.getElementById('error-message').innerText = "Error during login!";
        });
    }
});
document.getElementById('login-btn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    console.log(`Username: ${username}, Password: ${password}, Role: ${role}`);

    if (username && password) {
        if (role === 'client') {
            console.log('Redirecting to Client Dashboard...');
            window.location.href = 'client-dashboard.html';
        } else if (role === 'admin') {
            console.log('Redirecting to Admin Panel...');
            window.location.href = 'admin-panel.html';
        }
    } else {
        console.log('Error: Missing fields');
        alert('Please fill in all fields.');
    }
});
