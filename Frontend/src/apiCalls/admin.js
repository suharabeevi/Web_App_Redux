import axios from "axios";

export const getUser = async () => {
        try {
            return await axios.get('http://localhost:5000/api/admin/allUsers');
        } catch (error) {
            console.log("Error while calling getUsers API", error);
        }
    }
    
export const addUser = async (data) => {
        try {
            return await axios.post('http://localhost:5000/api/admin/addUsers', data)
    
        } catch (error) {
            console.log("Error while calling add User API", error);
        }
    }

export const getUserId = async (id) => {
    try {
        return await axios.get(`http://localhost:5000/api/admin/${id}`)
    } catch (error) {
        console.log("Error while calling getuser api", error);
    }
}
export const getProfileId = async (id) => {
    try {
        return await axios.get(`http://localhost:5000/api/user/${id}`)
    } catch (error) {
        console.log("Error while calling getuser api", error);
    }
}

export const editUser = async (user,id) => {
    try {
        return await axios.put(`http://localhost:5000/api/admin/${id}`, user)
    } catch (error) {
        console.log("Error while calling edit user api", error);
    }
}
export const editProfile = async (user,id) => {
    try {
        return await axios.put(`http://localhost:5000/api/users/update-profile/${id}`, user)
    } catch (error) {
        console.log("Error while calling edit user api", error);
    }
}

export const deleteUser = async (id) => {
    try {
        return await axios.delete(`http://localhost:5000/api/admin/${id}`);

    } catch (error) {
        console.log("Error while calling delete user api", error);
    }
}


export const profileImageUpdate = async(id,img) => {
    try {
        return await axios.post(`http://localhost:5000/api/users/set-profile-pic/${id}`,img);

    } catch (error) {
        console.log("Error while calling delete user api", error);
    }
}

// export default getUser;