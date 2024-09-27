
export async function postApiCall(url, method, request) {
    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        });

        if (response.ok) {
            const responseData = await response.json();
            return responseData;
        } else {
            const responseData = await response.json();
            console.log(responseData);
            alert(responseData.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert(error);
    }
}

export async function getApiCall(url, headers, params) {

    const defaultHeaders = { 'Content-Type': 'application/json' }; // example default headers
    headers = headers ? { ...defaultHeaders, ...headers } : { ...defaultHeaders };

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: headers,
            body: params
        });
        if (response.ok) {
            const responseData = await response.json();
            return responseData;
        } else {
            const responseData = await response.json();
            console.log(responseData);
            alert(responseData.message);
        }

    } catch (error) {
        console.error('Error:', error);
        alert(error);
    }

}