import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS, USER_UPDATE_FAIL, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, IMAGE_UPLOAD } from "../constants/userConstants";
import { USERPROFILE_UPDATE_FAIL, USERPROFILE_UPDATE_REQUEST, USERPROFILE_UPDATE_SUCCESS } from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        // case USER_LOGIN_REQUEST:
        //     return ;

        case USER_LOGIN_SUCCESS:
            return { loading: true, userInfo: action.payload };
        
        case USER_LOGIN_FAIL:
            return { error: action.payload};

        case USER_LOGOUT:
            return {};

        default:
            return state;
    }
}

export const adminUsersFetchReducer = ( state = {}, action ) => {
    switch(action.type) {
        case FETCH_USERS_SUCCESS:
            return { loading: true, detailsInfo: action.payload };

        case FETCH_USERS_FAILURE:
            return { error: action.payload};

        default:
            return state;
    }
}

export const userUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        // case USER_LOGIN_REQUEST:
        //     return ;

        case USER_UPDATE_SUCCESS:
            return { loading: true, userInfo: action.payload, success:true };
        
        case USER_UPDATE_FAIL:
            return { error: action.payload,  success:false};

        default:
            return state;
    }
}

export const imageUploadReducer = ( state = {}, action ) => {
    switch ( action.type) {
        case IMAGE_UPLOAD:
            return { userImage: action.payload};

        default:
            return state;
    }
}

export const useProfileUpdate = ( state = {}, action ) => {
    switch (action.type) {
        case USERPROFILE_UPDATE_SUCCESS:
            return { loading: true, userInfo: action.payload, success:true };
        
        case USERPROFILE_UPDATE_FAIL:
            return { error: action.payload,  success:false};

        default:
            return state; 
    }
}