import { http2 } from "../data/fetch2";

const url = process.env.URL_BACK;
const urlAuth = process.env.NEXT_PUBLIC_URL_BACK;
// const urlLocal = "http://localhost:7000/api"
export const AuthService = {
  postSignIn: async (data) => {
    try {
      return await http2
        .post(`${urlAuth}/auth/login`, JSON.stringify(data))
        .then((res) => {  
          // console.log("respuesta de res",res);        
          return res;
        })
        .catch((ex) => {
          return {
            metadata: [
              { date: "Error servidor", code: "C001", type: "respuesta nok" },
            ],
          };
        });
    } catch (err) {
      throw Error("Error al obtener postSignIn");
    }
  },

  postValidarCF: async (data, code) => {
    try {
      return await http2
        .postValid(`${url}/validarCodeForm/validar`, JSON.stringify(data), code)
        .then((res) => {   
          // console.log("response fecht", res);       
          return res;
        })
        .catch((ex) => {
          return {
            metadata: [
              { date: "Error servidor", code: "C001", type: "respuesta nok" },
            ],
          };
        });
    } catch (err) {
      throw Error("Error al obtener postSignIn");
    }
  },

  };
