import React, { useEffect, useState} from "react";
import adminImg from '../../assets/img/admin.jpg';
import ErrorMessage from "../../Components/ErrorMessage";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/adminActions";

const AdminLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const adminLogin = useSelector(state => state.adminLogin);
    const {error, adminInfo} = adminLogin;

    const navigate = useNavigate()

    useEffect(() => {
        if(adminInfo) {
            navigate('/admin');
        }
    },[navigate,adminInfo]);

    const submitHandler = async(e) => {
        e.preventDefault();
        dispatch(login(email,password));


        // try {
        //     const config = {
        //         headers: {
        //             "Content-type":"application/json"
        //         }
        //     }
        //     setLoading(true)

        //     const { data } = await axios.post('http://localhost:5000/api/admin/login', {
        //         email, 
        //         password,
        //     }, 
        //     config
        //     );

        //     console.log(data);
        //     localStorage.setItem('adminInfo', JSON.stringify(data));
        //     navigate('/admin')
        //     setLoading(false);


        // } catch (error) {
        //     // setError(error.message);
        //     setError("Invalid Email or Password");
        // }
    };



    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="hidden sm:block">
                <img className="w-full h-full object-cover" src={adminImg} alt="" />
            </div>
            <div className="flex flex-col justify-center">
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg" onSubmit={submitHandler}>
                    <h2 className="text-white text-4xl font-bold text-center">LOGIN</h2>
                    <div className="text-gray-400 flex flex-col py-2">
                        <label>User Name</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2  focus:border-blue-500 focus:bg-gray-800 focus:outline-none" 
                        type="email" value={email} placeholder="enter email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="text-gray-400 flex flex-col py-2">
                        <label>Password</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2  focus:border-blue-500 focus:bg-gray-800 focus:outline-none"  
                        type="password" value={password} placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="w-full my-5 py-5 bg-green-700 shadow-lg shadow-green-600/50 hover:shadow-yellow-600/20 text-white font-semibold rounded-lg">LOGIN</button>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin;