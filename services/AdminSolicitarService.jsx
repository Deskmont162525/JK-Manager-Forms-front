import { http3 } from "../data/fetch3";
const url = process.env.URL_BACK;
const urlAuth = process.env.NEXT_PUBLIC_URL_BACK;
export const AdminSolicitarService = {  

    postCreateSolicitudF: async (data, token) => {
        try {
            return await http3
                .post(`${urlAuth}/solicitar/formulario`, JSON.stringify(data), token)
                .then((res) => {
                    // console.log('res', res);
                    return res;
                })
                .catch((ex) => {
                    return {
                        metadata: [{ date: 'Error servidor', code: 'C001', type: 'respuesta nok', error: ex }]
                    };
                });
        } catch (err) {
            throw Error('Error al obtener postCreateSolicitudF');
        }
    },

    postCreateSolicitudS: async (data, token) => {
        // console.log("llama y recibe ",data);
        try {
            return await http3
                .post(`${urlAuth}/solicitarS/soporte`, JSON.stringify(data), token)
                .then((res) => {
                    // console.log('res', res);
                    return res;
                })
                .catch((ex) => {
                    return {
                        metadata: [{ date: 'Error servidor', code: 'C001', type: 'respuesta nok', error: ex }]
                    };
                });
        } catch (err) {
            throw Error('Error al obtener postCreateSolicitudS');
        }
    },
//   getDataUserFormularioAll: async (token) => {
//     try {
//       return await http3
//         .get(`${url}/info_admins/datos-admin`,token)
//         .then((res) => {
//           // console.log("que tiene data all",res)
//           return res;
//         })
//         .catch((ex) => {
//           console.log(ex);
//           return { message: "Hubo un error en el servidor", code: 500 }
//         });
//     } catch (err) {
//       // console.log(err);
//       throw Error("Error al obtener getBeneficUserByRedimy");
//     }
//   },

//   getDataUserFormularioById: async (id,token) => {
//     try {
//       return await http3
//         .get(`${url}/info_admins/datos-admin/${id}`,token)
//         .then((res) => {
//           // console.log("que tiene",res)
//           return res;
//         })
//         .catch((ex) => {
//           console.log(ex);
//           return { message: "Hubo un error en el servidor", code: 500 }
//         });
//     } catch (err) {
//       // console.log(err);
//       throw Error("Error al obtener getBeneficUserByRedimy");
//     }
//   },

  
//   getDataFormularioById: async (id,token) => {
//     try {
//       return await http3
//         .get(`${url}/info_admins/datos-admin-form/${id}`,token)
//         .then((res) => {
//           console.log("que tiene",res)
//           return res;
//         })
//         .catch((ex) => {
//           console.log(ex);
//           return { message: "Hubo un error en el servidor", code: 500 }
//         });
//     } catch (err) {
//       // console.log(err);
//       throw Error("Error al obtener getBeneficUserByRedimy");
//     }
//   },
  };
  