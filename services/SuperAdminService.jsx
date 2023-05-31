import { http3 } from "../data/fetch3";
const url = process.env.URL_BACK;
const urlAuth = process.env.NEXT_PUBLIC_URL_BACK;
export const SuperAdminService = {
  
  postCrearFrom: async (data, token) => {
    
    try {
      return await http3
        .post(`${urlAuth}/forms/form`, JSON.stringify(data), token)
        .then((res) => { 
          console.log("respuesta del fetch", res);         
          return res;
        })
        .catch((ex) => {
          console.log(ex);
          return { message: "Hubo un error en el servidor", code: 500 }
        });
    } catch (err) {
      throw Error("Error al obtener postSignIn");
    }
  },

  postCrearUserForm: async (data, token) => {
    try {
      return await http3
        .post(`${urlAuth}/users/user`, JSON.stringify(data), token)
        .then((res) => {  
          console.log("fetch", res);        
          return res;
        })
        .catch((ex) => {
          console.log(ex);
          return { message: "Hubo un error en el servidor", code: 500 }
        });
    } catch (err) {
      throw Error("Error al obtener postSignIn");
    }
  },

  getDataUserSAById: async (id,token) => {
    try {
      return await http3
        .get(`${url}/users/user/${id}`,token)
        .then((res) => {
          // console.log("que tiene",res)
          return res;
        })
        .catch((ex) => {
          console.log(ex);
          return { message: "Hubo un error en el servidor", code: 500 }
        });
    } catch (err) {
      // console.log(err);
      throw Error("Error al obtener getBeneficUserByRedimy");
    }
  },

  getDataUsersSA: async (token) => {
    try {
      return await http3
        .get(`${url}/users/user`,token)
        .then((res) => {
          // console.log("que tiene",res, token)
          return res;
        })
        .catch((ex) => {
          console.log(ex);
          return { message: "Hubo un error en el servidor", code: 500 }
        });
    } catch (err) {
      // console.log(err);
      throw Error("Error al obtener getBeneficUserByRedimy");
    }
  },

  getDataUserFormularioSAById: async (id,token) => {
    try {
      return await http3
        .get(`${url}/forms/form-users/${id}`,token)
        .then((res) => {
          // console.log("que tiene",res)
          return res;
        })
        .catch((ex) => {
          console.log(ex);
          return { message: "Hubo un error en el servidor", code: 500 }
        });
    } catch (err) {
      // console.log(err);
      throw Error("Error al obtener getBeneficUserByRedimy");
    }
  },

  };
