const headers = () => ({
    Accept: "application/json",
    "Content-Type": "application/json",
  });

  const headers2 = (code) => ({
    Accept: "application/json",
    "Content-Type": "application/json",
    "codigo-autorizacion": code,
  });
    
  // consultas
  const get = async (url) => {  
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });
    return await response.json();
  };
  
  const post = async (url, body) => {
    const response = await fetch(url, {
      method: "POST",
      headers: headers(),
      body,
    });
    return await response.json();
  };

  const postValid = async (url, body, code) => {
    const response = await fetch(url, {
      method: "POST",
      headers: headers2(code),
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
  
  
  
  export const http2 = {
    get,
    post,
    postValid,
    put,  
  };
  