import { decodeToken } from '../data/functions';
import { routes } from '../data/routes';
import { AuthService } from '../services/AuthService';
import { SIGN_IN, UI_ACTIVE_LOADER, UI_REMOVE_LOADER, LOGOUT, UI_ADD_MESSAGE } from '../type';
import { setCookie, destroyCookie, parseCookies  } from 'nookies';
const cookies = parseCookies();

export const signIn = async ({ dispatchAuth, formData, router }) => {
    const response = await AuthService.postSignIn(formData);
    if (response.code === 200) {
        const dataToken = decodeToken(response.token);
        dispatchAuth({
            type: SIGN_IN,
            payload: dataToken
        });
        let tempData = {
            data:dataToken,
            token:response.token,
            code:200
        }
        setCookie(null, "userJKMF", JSON.stringify(tempData)),{path: '/',expires: new Date(dataToken?.exp)};        
        return tempData;
    } else {
        return response;
    }
};

export const logOut = ({ dispatchAuth, router }) => { 
    destroyCookie(null, "userJKMF");  
    dispatchAuth({
        type: LOGOUT
    });
    router.push('/');
};
