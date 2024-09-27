
export const authToken = () => {
    return localStorage.getItem('authToken');
};

export const redirectIfLoggedIn = (redirectUrl) => {
    if (authToken()) {
        window.location.href = redirectUrl;
        return true;
    }
    return false;
};


export const redirectIfNotLoggedIn = (redirectUrl) => {
    if (authToken()) {
        window.location.href = redirectUrl;
        return true;
    }
    return false;
};