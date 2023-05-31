
import { parseCookies } from 'nookies';
import { SuperAdminService } from '../services/SuperAdminService';
import { logOut } from './authActions';


export const crearUsersSA = async (formData, {dispatchAuth, router}) => {
    const {  userJKMF } = parseCookies();
    const sendToken = JSON.parse(userJKMF)
    const response = await SuperAdminService.postCrearUserForm(formData,sendToken.token);
    if(response.code === 3003){
        logOut(dispatchAuth,router)
    }
    if (response.code === 201) {        
        return response;
    } else {
        return response;
    }
};

export const crearFormsSA = async (formData, {dispatchAuth, router}) => {
    const {  userJKMF } = parseCookies();
    const sendToken = JSON.parse(userJKMF)
    const response = await SuperAdminService.postCrearFrom(formData,sendToken.token);
    if(response.code === 3003){
        logOut(dispatchAuth,router)
    }
    if (response.code === 201) {        
        return response;
    } else {
        return response;
    }
};


