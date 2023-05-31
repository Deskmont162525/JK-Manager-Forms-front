import { infoStepState } from '../states/infoStepState';
import { ADD_INFO_CONTACTO, ADD_INFO_DOCUMENTOS, ADD_INFO_FAMILIAR, ADD_INFO_FINANCIERA, ADD_INFO_PERSONAL } from '../type';

const infoStepReducer = (state = infoStepState, action) => {
    switch (action?.type) {
        case ADD_INFO_PERSONAL:
            return {
                ...state,
                info_p: action.payload
            };
        case ADD_INFO_CONTACTO:
            return {
                ...state,
                info_uc: action.payload
            };
        case ADD_INFO_FINANCIERA:
            return {
                ...state,
                info_ilf: action.payload
            };
        case ADD_INFO_FAMILIAR:
            return {
                ...state,
                info_dgfb: action.payload
            };
        case ADD_INFO_DOCUMENTOS:
            return {
                ...state,
                info_images: action.payload
            };
        default:
            return state;
    }
};
export default infoStepReducer;
