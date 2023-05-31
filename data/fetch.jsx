const headers = (codigo) => ({
  Accept: "application/json",
  "Content-Type": "application/json",
  "codigo-autorizacion": `${codigo}` 
});

const headersToken = (token) => ({
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
});

// consultas
const get = async (url) => {  
  const response = await fetch(url, {
    method: "GET",
    headers: headers,
  });
  return await response.json();
};

const post = async (url, body, codigo) => {
  const response = await fetch(url, {
    method: "POST",
    headers: headers(codigo),
    body,
  });
  return await response.json();
};

const put = async (url, body) => {
  const response = await fetch(url, {
    method: "PUT",
    headers: headers,
    body,
  });
  return await response.json();
};



export const http = {
  get,
  post,
  put,  
};
