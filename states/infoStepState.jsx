import { parseCookies } from "nookies";
import { formattedDate } from "../data/functions";


const cookies = parseCookies();
const dataUsuario = cookies.usuario_invitado ? JSON.parse(cookies?.usuario_invitado):"";


export const infoStepState = {
    info_p: {
        id_usuario: dataUsuario?.idUserInvi,
        ciudad: '',
        fecha_diligencia: formattedDate,
        nombres: '',
        apellidos: '',
        tipo_documento: '',
        numero_documento: '',
        fecha_expedi_docu: '',
        ciudad_expedi_docu: '',
        fecha_naci: '',
        estado_civil: '',
        profecion_ocupacion: '',
        email: '',
        id_formulario: dataUsuario?.idform
    },
    info_uc: {
        id_usuario: dataUsuario?.idUserInvi,
        telefono: '',
        cantidad_hijos: '',
        ciudad_residencia: '',
        direccion_residencia: '',
        estrato: '',
        tipo_vivienda: '',
        id_formulario: dataUsuario?.idform
    },
    info_ilf: {
        id_usuario: dataUsuario?.idUserInvi,
        trans_moneda_e: '',
        detalle_trans_moneda_e: '',
        empresa_usuario: '',
        empresa_contratante: '',
        cargo: '',
        salario_basico: '',
        otros_ingresos: '',
        recusos_publicos: '',
        banco: '',
        tipo_cuenta: '',
        num_cuenta: '',
        id_formulario: dataUsuario?.idform
    },
    info_dgfb: {
        id_usuario: dataUsuario?.idUserInvi,
        familiares: [
            {
                nombre: '',
                cedula: '',
                parente: '',
                porcent: ''
            }
        ],
        valor_ahorro: '',
        periodo_nomina: '',
        termino_condiciones: false,
        id_formulario: dataUsuario?.idform
    },
    info_images: {
        id_usuario: dataUsuario?.idUserInvi,
        image: '',
        image1: '',
        image2: '',
        id_formulario: dataUsuario?.idform
    }
};
