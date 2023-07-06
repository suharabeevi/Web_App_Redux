import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';
import { SiYourtraveldottv } from 'react-icons/si';
import { Link , useNavigate} from "react-router-dom";

const AdminHeader = () => {

    const [scrolled, setScrolled] = useState(false);
    const [header, setHeader] = useState(false);
    const navigate = useNavigate();

    const data = JSON.parse(localStorage.getItem("adminInfo"));

    const handleHeader = () => {
        setHeader(!header)
    }

    const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

        <div className={`flex fixed  top-0 justify-between items-center h-24 w-[100%] mx-auto px-4 text-white transition-colors${scrolled ? ' bg-gray-900' : 'bg-transparent'}`}>
            <h1 className="w-1 text-3xl"><SiYourtraveldottv color="red" /></h1>
            <h1 className="w-full text-3xl font-bold text-green-800 ml-6">Admin</h1>
            <ul className="hidden md:flex">
          
         
            <Link to="/admin"><li className="p-4 mr-14">Home</li></Link>
            <Link to="/admin/allUsers"><li className="p-4 mr-14">AllUsers</li></Link>
            <Link to="/admin/addUsers"><li className="p-4 mr-14">AddUsers</li></Link>

                {data ? 
                    <li className="p-4 mr-7" onClick={() => {
                        localStorage.removeItem("adminInfo");
                        navigate('/admin/login')
                    }}>Logout</li>:
                    <Link to='/admin/login'><li className="p-4 mr-7">Login</li></Link>
                }
            </ul>
            <div onClick={handleHeader} className="block md:hidden">
                {header ? <AiOutlineCloseCircle size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <div className={header ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-900 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className="w-1 text-3xl h-0 pt-2"><SiYourtraveldottv color="red" /></h1>
                <h1 className="w-full text-3xl font-bold text-yellow-500 ml-7">Admin</h1>
                <ul className="uppercase p-4">
                    <Link to="/admin"><li className="p-4 border-b border-gray-600">Home</li></Link>
                    <Link to="/admin/allUsers"><li className="p-4 mr-14">AllUsers</li></Link>
                    <Link to="/admin/addUsers"><li className="p-4 mr-14">AddUsers</li></Link>
                    <Link to='/admin/login'><li className="p-4 border-b border-gray-600">Login</li></Link>

                </ul>
            </div>
        </div>
    )
}

export default AdminHeader;