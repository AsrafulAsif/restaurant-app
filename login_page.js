document.addEventListener("DOMContentLoaded", () => {

    document.getElementById('submitBtn').addEventListener('click', () => {
        const userName = document.getElementById('userName').value;
        const userPassword = document.getElementById('userPassword').value;
        if (userName == '' || userPassword == '') {
            alert('Enter user name or password.')
        } else {
            loginUser(userName, userPassword);
        }
    });

    function loginUser(userName, userPassword) {
        const url = 'http://localhost:8080/api/v1/auth/login';

        const data = {
            userName: userName,
            password: userPassword
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

}); 