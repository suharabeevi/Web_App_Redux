import { ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAIL, ADMIN_LOGOUT , ADMIN_LOGIN_REQUEST} from "../constants/adminConstants";
import { FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS, FETCH_USERS_REQUEST } from "../constants/userConstants";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_LOGIN_REQUEST});

        const config = {
            headers: {
                "Content-type": "application/json"
            },
        };
        const { data } = await axios.post('http://localhost:5000/api/admin/login',
        {
            email,
            password,
        },
        config
        );

        dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: data});
        localStorage.setItem('adminInfo', JSON.stringify(data));
    }catch(error) {
        dispatch({
            type: ADMIN_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};

export const logout = () => async ( dispatch ) => {
    localStorage.removeItem("adminInfo");
    dispatch({ type: ADMIN_LOGOUT });
};


export const getUsers = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: FETCH_USERS_REQUEST});

        const config = {
            headers: {
                "Content-type": "application/json"
            },
        };
        const { data } = await axios.get('http://localhost:5000/api/admin/allUsers',
        config
        );

        dispatch({ type: FETCH_USERS_SUCCESS, payload: data});
        localStorage.setItem('userInfo', JSON.stringify(data));
    }catch(error) {
        dispatch({
            type: FETCH_USERS_FAILURE,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};


