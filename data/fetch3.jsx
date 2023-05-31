const headers = (token) => ({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: token ? `Bearer ${token}` : 'F08F4D18-4842-4818-878F-9812FFF086F9'
});


const get = async (url, token) => {
    const response = await fetch(url, {
        method: 'GET',
        headers: headers(token)
    });
    return await response.json();
};

const post = async (url, body, token) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: headers(token),
        body
    });
    return await response.json();
};


const put = async (url, body, token) => {
    const response = await fetch(url, {
        method: 'PUT',
        headers: headers(token),
        body
    });
    return await response.json();
};

const _delete = async (url, token) => {
    const response = await fetch(url, {
        method: 'DELETE',
        headers: headers(token)
    });
    return await response.json();
};

export const http3 = {
    get,
    post,
    put,
    delete: _delete,
};
