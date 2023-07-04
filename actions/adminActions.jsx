import { parseCookies } from 'nookies';
import { AdminSolicitarService } from '../services/AdminSolicitarService';


export const crearSolicitudForms = async (formData) => {
    const {  userJKMF } = parseCookies();
    const sendToken = JSON.parse(userJKMF)
    const response = await AdminSolicitarService.postCreateSolicitudF(formData,sendToken.token);   
    if (response.code === 201) {        
        return response;
    } else {
        return response;
    }
};


export const crearSolicitudSoporte = async (formData) => {
    const {  userJKMF } = parseCookies();
    const sendToken = JSON.parse(userJKMF)
    const response = await AdminSolicitarService.postCreateSolicitudS(formData,sendToken.token);   
    if (response.code === 201) {        
        return response;
    } else {
        return response;
    }
};