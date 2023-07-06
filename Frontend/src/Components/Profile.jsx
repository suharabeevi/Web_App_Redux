import React, { useEffect, useState } from "react";
import ProfileImg from '../assets/img/profile.jpg';
import { Link, useNavigate, useParams } from 'react-router-dom';
import notes from "../data/notes";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from './ErrorMessage';
import { profilePhoto } from "../actions/ImageUpload";
import { editProfile, getProfileId, profileImageUpdate } from "../apiCalls/admin";
import { updateProfile } from '../actions/userActions'


const Profile = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pic, setPic] = useState('');
    const [picMessage, setPicMessage] = useState('');
    const [user, setUserData] = useState({})
    const [editRes, setEditRes] = useState()


    const navigate = useNavigate()
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    console.log("this is user data ====", userInfo)

    const userUpdate = useSelector((state) => state.userUpdate);
    const { error, success } = userUpdate;

    useEffect(() => {
        if (!userInfo) {
            navigate('/');
        } else {
            setName(userInfo.name);
            setEmail(userInfo.email);
            setPic(userInfo.pic);
        }
    }, [userInfo]);

    useEffect(() => {
        async function fetchUser() {
            const user = await axios.get(`http://localhost:5000/api/users/finduser/${userInfo._id}`)
            const { userData } = user.data
            // console.log(userData);
            setUserData(userData)
        }
        fetchUser()
    }, [editRes])


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(userInfo);
        console.log("submit");
        console.log(pic);
        const formdata = new FormData();
        formdata.append("image", pic);
        console.log(formdata);

        const res = await profileImageUpdate(userInfo._id, formdata)
        console.log(res);
        setEditRes(res)

    }
    return (
        <div className=" p-4 mt-20 ml-16 mr-16 w-140 h-auto flex justify-center ">
            <div className="flex flex-col justify-center">
                <form className=" w-96  bg-gray-900 p-8 px-8 rounded-lg" >
                    <img className="h-16 rounded-full ml-[140px]" src={user?.pic ? user?.pic : pic} alt="" />
                    <div className="text-gray-400 flex py-2  justify-center justify-items-center">
                        {/* <label>Profile Image</label> */}
                        <input
                            className="mt-2  w-24 bg-gray-700 rounded-lg focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                            type="file"
                            onChange={(e) => setPic(e.target.files[0])}
                        />
                    </div>
                    <h2 className="text-white text-xl font-bold text-center">MY PROFILE</h2>
                    <div className="text-gray-400 flex flex-col py-2">
                        <label>Full Name</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2  focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                            type="text" name="name" value={name} defaultValue={user.name} placeholder="Enter your name" onChange={(e) => setName(e.target.value)} disabled />
                    </div>
                    <div className="text-gray-400 flex flex-col py-2">
                        <label>Email</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2  focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                            type="email" name="email" value={email} defaultValue={user.email} placeholder="Enter your mail" onChange={(e) => setEmail(e.target.value)} disabled />
                    </div>


                    {" "}
                    {picMessage && (
                        <ErrorMessage>{picMessage}</ErrorMessage>
                    )}

                    <button className="w-full my-5 py-5 bg-yellow-600 shadow-lg shadow-yellow-600/50 hover:shadow-yellow-600/20 text-white font-semibold rounded-lg"
                     type="submit" onClick={handleSubmit}>SAVE</button>
                   
                </form>
            </div>


        </div>
    )
}

export default Profile;