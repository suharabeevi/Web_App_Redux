import React, { useEffect, useState } from "react";
import signinImg from '../assets/img/signin.jpg';
import { Link } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../src/actions/userActions';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const { error, userInfo }= userLogin;
 
    const navigate = useNavigate()
    
    useEffect(() => {
        if(userInfo) {
            navigate('/');
        }
    }, [navigate, userInfo]);

    const submitHandler = async(e) => {
        e.preventDefault();
        dispatch(login(email,password));
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="hidden sm:block">
                <img className="w-full h-full object-cover" src={signinImg} alt="" />
            </div>
            <div className="flex flex-col justify-center">
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg" onSubmit={submitHandler}>
                    <h2 className="text-white text-4xl font-bold text-center">LOGIN</h2>
                    <div className="text-gray-400 flex flex-col py-2">
                        <label>User Name</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2  focus:border-blue-500 focus:bg-gray-800 focus:outline-none" 
                        type="email" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="text-gray-400 flex flex-col py-2">
                        <label>Password</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2  focus:border-blue-500 focus:bg-gray-800 focus:outline-none"  
                        type="password" value={password} placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="w-full my-5 py-5 bg-yellow-600 shadow-lg shadow-yellow-600/50 hover:shadow-yellow-600/20 text-white font-semibold rounded-lg">LOGIN</button>
                    <div className="flex">
                    <Link to='/signup'><div className="text-gray-500">New? Create One.</div></Link>
                    <Link to='/'><div className="text-gray-500 ml-[165px]">Back</div></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;