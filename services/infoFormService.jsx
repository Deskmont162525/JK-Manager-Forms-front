import { http } from '../data/fetch';
import { parseCookies } from 'nookies';

const cookies = parseCookies();
const codigo = cookies.usuario_invitado ? JSON.parse(cookies.usuario_invitado) : '';

const url = process.env.NEXT_PUBLIC_URL_BACK;
const urlLocal = "http://localhost:7000/api";


export const InfoFormService = {
    postInfoP: async (data) => {
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
            throw Error('Error al obtener postSignIn');
        }
    },
    postInfoUC: async (data) => {
        try {
            return await http
                .post(`${url}/info_2/infoUC`, JSON.stringify(data), codigo?.codigo)
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
            throw Error('Error al obtener postSignIn');
        }
    },
    postInfo_ilf: async (data) => {
        try {
            return await http
                .post(`${url}/info_3/infoILF`, JSON.stringify(data), codigo?.codigo)
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
            throw Error('Error al obtener postSignIn');
        }
    },
    postInfo_dgfb: async (data) => {
        try {
            return await http
                .post(`${url}/info_4/infoDGFB`, JSON.stringify(data), codigo?.codigo)
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
            throw Error('Error al obtener postSignIn');
        }
    },

    postInfo_images: async (data, image3) => {
        let dataSend = {
            id_formulario: data?.id_formulario,
            image: data?.image,
            image1: data?.image1,
            image2: image3
        };
        try {
            return await http
                .post(`${urlLocal}/info_5/info-images/infoIMG/${data?.id_usuario}`, JSON.stringify(dataSend), codigo?.codigo)
                .then((res) => {
                    console.log('res desde fect', res);
                    return res;
                })
                .catch((ex) => {
                    return {
                        metadata: [{ date: 'Error servidor', code: 'C001', type: 'respuesta nok', error: ex }]
                    };
                });
        } catch (err) {
            throw Error('Error al obtener postSignIn');
        }
    }
};
