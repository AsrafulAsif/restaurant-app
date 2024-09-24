document.addEventListener("DOMContentLoaded", () => {
    // Function to get the auth token from localStorage
    const authToken = () => {
        return localStorage.getItem('authToken');
    };

    // Check if the user is already logged in
    if (authToken()) {
        // If auth token exists, redirect to the dashboard
        window.location.href = "home_page.html";
        return;  // Stop further execution of the script
    }

    // Proceed with login if not already logged in
    document.getElementById('submitBtn').addEventListener('click', async () => {
        const userName = document.getElementById('userName').value;
        const userPassword = document.getElementById('userPassword').value;

        if (userName === '' || userPassword === '') {
            alert('Enter user name or password.');
        } else {
            let data = await login(userName, userPassword);

            if (data && data.data && data.data.token) {
                console.log(data.data.token);  // Log the token (optional)
                localStorage.setItem('authToken', data.data.token);  // Store the token in localStorage
            }

            // Check if token is present and redirect
            if (authToken()) {
                window.location.href = "home_page.html";  // Redirect to the dashboard
            } else {
                console.error('Auth token is missing or invalid');
            }
        }
    });

    // Function to handle login request
    const login = async (userName, userPassword) => {
        const url = 'https://rms-starter.onrender.com/api/v1/auth/login';

        const request = {
            userName: userName,
            password: userPassword
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(request)
            });

            if (response.ok) {
                const responseData = await response.json();
                return responseData;
            } else {
                console.error('Login failed: Network response was not ok');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
});
