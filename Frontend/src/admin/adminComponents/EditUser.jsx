import React, { useEffect } from "react";
import { useState } from "react";
import { editUser, getUserId } from "../../apiCalls/admin";
import { useNavigate, useParams } from "react-router-dom";

const defaultValue = {
    name:'',
    email:'',
    password:''
}
const EditUser = () => {
    const [user, setuser] = useState(defaultValue);

    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        loadUserDetails()
    },[]);

    const loadUserDetails = async () => {
        const res = await getUserId(id);
        setuser(res.data);
    }

    const onValueChange = (e) => {
        //console.log(e.target.name, e.target.value);
        setuser({ ...user,[e.target.name]: e.target.value});
        console.log(user);
    }

    const editUserDetails = async () => {
        await editUser(user, id);
        navigate('/admin/allUsers')
    }

    return (
        <div className=" p-4 mt-80 ml-16 mr-16 w-140 h-14 flex justify-center ">
            <div className="flex flex-col justify-center">
                <form className=" w-96  bg-gray-900 p-8 px-8 rounded-lg">
                    <h2 className="text-white text-xl font-bold text-center">Edit User</h2>
                    <div className="text-gray-400 flex flex-col py-2">
                        <label>Full Name</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2  focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" onChange={(e) => onValueChange(e)} name="name" value={user.name} />
                    </div>
                    <div className="text-gray-400 flex flex-col py-2">
                        <label>Email</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2  focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="email" onChange={(e) => onValueChange(e)} name="email" value={user.email}/>
                    </div>
                    <div className="text-gray-400 flex flex-col py-2">
                        <label>Password</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2  focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="password" onChange={(e) => onValueChange(e)} name="password" value={user.password}/>
                    </div>
                    <button className="w-full my-5 py-5 bg-yellow-600 shadow-lg shadow-yellow-600/50 hover:shadow-yellow-600/20 text-white font-semibold rounded-lg" onClick={() => editUserDetails()}>EDIT</button>
                </form>
            </div>            
        </div>
    )
}

export default EditUser;