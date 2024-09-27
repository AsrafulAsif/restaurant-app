import {authToken,redirectIfLoggedIn} from './local_storage.js';
import { postApiCall } from './api_hendler.js';

document.addEventListener("DOMContentLoaded", () => {

    if (redirectIfLoggedIn("index.html")) return;

    // Proceed with login if not already logged in
    document.getElementById('submitBtn').addEventListener('click', async () => {
        const userName = document.getElementById('userName').value;
        const userPassword = document.getElementById('userPassword').value;

        if (userName === '' || userPassword === '') {
            alert('Enter user name or password.');
        } else {

            const url = 'http://localhost:8080/api/v1/auth/login';

            const request = {
                userName: userName,
                password: userPassword
            };
    

            let data = await postApiCall(url,'POST',request);

            if (data && data.data && data.data.token) {
                console.log(data.data.token);  // Log the token (optional)
                localStorage.setItem('authToken', data.data.token);  // Store the token in localStorage
            }

            // Check if token is present and redirect
            if (authToken()) {
                window.location.href = "index.html";  // Redirect to the dashboard
            } else {
                // console.error('Auth token is missing or invalid');
                return;
            }
        }
    });

    // Function to handle login request
    const login = async (userName, userPassword) => {
        const url = 'http://localhost:8080/api/v1/auth/login';

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
