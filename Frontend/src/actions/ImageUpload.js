import axios from "axios";
import { IMAGE_UPLOAD  } from "../constants/userConstants";
import { Form } from "react-router-dom";

export const profilePhoto = (profilePic) => async ( dispatch ) => {
    try {
        console.log("Profile Picccc", profilePic);
        const formData = new FormData();
        formData.append('image', profilePic);
        console.log(formData);

        const response = await axios.post('/update-profile-photo', formData);
        console.log(response.data);
        dispatch( {type: IMAGE_UPLOAD, payload: response.data});
    } catch (error) {
        console.log("errorrrr");
    }
}