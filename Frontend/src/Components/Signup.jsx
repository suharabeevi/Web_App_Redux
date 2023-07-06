import React, { useState } from "react";
import LoginImg from '../assets/img/login.jpg';
import { Link } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const[pic,setPic] = useState(
        'https://www.pngitem.com/pimgs/m/151-1516701_head-icon-png-blue-head-icon-png-transparent.png'
    );
    const[password, setPassword] = useState('');
    const[ConfirmPassword,setConfirmPassword] = useState('');
    const[message, setMessage] = useState('');
    const[error,setError] = useState(false);

    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault();
        if(password !== ConfirmPassword) {
            setMessage("Passwords do notmatch");
        }else{
            setMessage(null)
            try {
                const config ={
                    headers:{
                        "Content-type": "application/json"
                    }
                }
                const {data} = await axios.post(
                    "http://localhost:5000/api/users", {
                    name,
                    email,
                    password,
                },
                    config
                );
                console.log(data);
                localStorage.setItem("userInfo", JSON.stringify(data));
                navigate('/login')

            } catch (error) {
                setError(error.message);
            }
        }
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="hidden sm:block">
                <img className="w-full h-full object-cover" src={LoginImg} alt="" />
            </div>
            <div className="flex flex-col justify-center">
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {message && <ErrorMessage>{message}</ErrorMessage>}
                <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg" onSubmit={submitHandler}>
                    <h2 className="text-white text-4xl font-bold text-center">SIGN UP</h2>
                    <div className="text-gray-400 flex flex-col py-2">
                        <label>Name</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2  focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="text-gray-400 flex flex-col py-2">
                        <label>Email</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2  focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="text-gray-400 flex flex-col py-2">
                        <label>Password</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2  focus:border-blue-500 focus:bg-gray-800 focus:outline-none"  type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="text-gray-400 flex flex-col py-2">
                        <label>Confirm Password</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2  focus:border-blue-500 focus:bg-gray-800 focus:outline-none"  type="password" placeholder="Confirm password" value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <button className="w-full my-5 py-5 bg-yellow-600 shadow-lg shadow-yellow-600/50 hover:shadow-yellow-600/20 text-white font-semibold rounded-lg">SIGN UP</button>
                    
                    <div className="flex">
                    <Link to='/login'><div className="text-gray-500">Alreay have an account? Login</div></Link>
                    <Link to='/'><div className="text-gray-500 ml-16">Back</div></Link>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Signup;