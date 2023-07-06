import { ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAIL, ADMIN_LOGOUT } from "../constants/adminConstants";

export const adminLoginReducer = ( state = {}, action) => {
    switch (action.type) {
        case ADMIN_LOGIN_SUCCESS:
            return { loading: true, adminInfo: action.payload};

        case ADMIN_LOGIN_FAIL:
            return { error: action.payload};

        case ADMIN_LOGOUT:
            return {};

        default:
            return state;
    }
}




