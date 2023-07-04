import { http3 } from "../data/fetch3";
const url = process.env.URL_BACK;
const urlAuth = process.env.NEXT_PUBLIC_URL_BACK;
// const urlLocal = "http://localhost:7000/api"
export const AdminService = {  

  getDataUserFormularioAById: async (id,token) => {
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

  getDataUserFormularioAll: async (token) => {
    try {
      return await http3
        .get(`${url}/info_admins/datos-admin`,token)
        .then((res) => {
          // console.log("que tiene data all",res)
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

  getDataUserFormularioById: async (id,token) => {
    try {
      return await http3
        .get(`${url}/info_admins/datos-admin/${id}`,token)
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

  
  getDataFormularioById: async (id,token) => {
    try {
      return await http3
        .get(`${url}/info_admins/datos-admin-form/${id}`,token)
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
  getDataStadoCuentaById: async (id,token) => {
    try {
      return await http3
        .get(`${urlAuth}/data_importar/data-usuario/${id}`,token)
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
  