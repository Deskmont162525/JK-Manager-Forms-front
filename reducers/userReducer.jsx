import { userState } from '../states/userState';
import { ADD_USER } from '../type';

const userReducer = (state = userState, action) => {
    switch (action?.type) {
        case ADD_USER:
            return {
                state: action.payload
            };
        default:
            return state;
    }
};
export default userReducer;
