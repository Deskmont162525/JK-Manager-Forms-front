import { authState } from '../states/authState';
import { LOGOUT, SIGN_IN } from '../type';

const authReducer = (state = authState, action) => {
    switch (action?.type) {
        case SIGN_IN:
            return action.payload;
        case LOGOUT:
            return {
                correo: '',
                estado: '',
                exp: '',
                iat: '',
                pago: '',
                tipo_pago: '',
                username: '',
                _id: ''
            };
        default:
            return state;
    }
};
export default authReducer;
