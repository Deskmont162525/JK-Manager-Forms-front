import { http } from '../data/fetch';

const url = process.env.NEXT_PUBLIC_URL_BACK;

export const InfoUserService = {
    postCreateUser: async (data) => {
        try {
            return await http
                .post(`${url}/info_1/infoP`, JSON.stringify(data), codigo?.codigo)
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
            throw Error('Error al obtener postCreateUser');
        }
    },

    getSendEmailById: async (id) => {
        try {
            return await http
                .get(`${url}/email/enviar-email/${id}`)
                .then((res) => {
                    // console.log('que tiene esto es el email', res);
                    return res;
                })
                .catch((ex) => {
                    console.log(ex);
                    return { message: 'Hubo un error en el servidor', code: 500 };
                });
        } catch (err) {
            // console.log(err);
            throw Error('Error al obtener getSendEmailById');
        }
    },

    getAcriveUsuById: async (id) => {
        try {
            return await http
                .get(`${url}/users/user-active/${id}`)
                .then((res) => {
                    // console.log("que tiene esto es el email",res)
                    return res;
                })
                .catch((ex) => {
                    console.log(ex);
                    return { message: 'Hubo un error en el servidor', code: 500 };
                });
        } catch (err) {
            // console.log(err);
            throw Error('Error al obtener getAcriveUsuById');
        }
    },
    
    getGraciasUsuById: async (id) => {
      try {
          return await http
              .get(`${url}/users/user/${id}`)
              .then((res) => {
                  // console.log("que tiene esto es el email",res)
                  return res;
              })
              .catch((ex) => {
                  console.log(ex);
                  return { message: 'Hubo un error en el servidor', code: 500 };
              });
      } catch (err) {
          // console.log(err);
          throw Error('Error al obtener getAcriveUsuById');
      }
  },
};
