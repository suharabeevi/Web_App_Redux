import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_UPDATE_FAIL, USER_UPDATE_REQUEST,USER_UPDATE_SUCCESS } from "../constants/userConstants";
import axios from "axios";
import { USERPROFILE_UPDATE_FAIL, USERPROFILE_UPDATE_REQUEST, USERPROFILE_UPDATE_SUCCESS } from "../constants/userConstants";

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST});

        const config = {
            headers: {
                "Content-type":"application/json"
            },
        };
        
        const { data } = await axios.post('http://localhost:5000/api/users/login', 
        {
            email, 
            password,
        }, 
        config
        );

        dispatch({ type: USER_LOGIN_SUCCESS, payload: data});
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};

export const logout = () => async (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGOUT});
};

export const updateProfile = (name, email) => async (dispatch) => { 
    try {
        dispatch({ type: USERPROFILE_UPDATE_REQUEST});

        // const {
        //     userLogin: { userInfo },
        // } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

    const { data } = await axios.post("https://localhost:5000/api/users/profile", {name,email}, config);

        dispatch({ type: USERPROFILE_UPDATE_SUCCESS, payload: data});
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data});
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch ({
            type: USERPROFILE_UPDATE_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        });
    }
};