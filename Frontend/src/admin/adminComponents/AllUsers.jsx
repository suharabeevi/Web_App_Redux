import React, { useEffect, useState } from "react";
import {getUser, deleteUser} from '../../apiCalls/admin';
import axios from "axios";
import {FiEdit} from 'react-icons/fi';
import {RiDeleteBin5Fill} from 'react-icons/ri';
import { Link , useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from '../../actions/adminActions';


const AllUsers = () => {

    const [users, setUsers] = useState([]);
    const [deleteUpdate, setDeleteUpdate] = useState();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const usersGet = useSelector(state => state.usersGet);
    const {error, detailsInfo} = usersGet;
    

    // const getAllUsers = async () => {
    //     let {data} = await axios.get('http://localhost:5000/api/admin/allUsers');
    //     setUsers(data)
    //     console.log(data, "00000000000000000000");
    // }

    const deleteUserDetails = async (id) => {
        await deleteUser(id);
        console.log("iddddddddddd", id);
        setUsers(prevUsers => prevUsers.filter(user => user._id !== id));
        // getAllUsers();
    }

    // useEffect(() => {
    //     const getAllUsers = async () => {
    //       try {
    //         const { data } = await axios.get('http://localhost:5000/api/admin/allUsers');
    //         setUsers(data);
    //       } catch (error) {
    //         console.error(error);
    //       }
    //     };
      
    //     getAllUsers();
    //     dispatch(getUsers());
    //   }, [dispatch]);

    useEffect(() => {
        const getAllUsers = async () => {
          try {
            const { data } = await axios.get('http://localhost:5000/api/admin/allUsers');
            setDeleteUpdate(data);
          } catch (error) {
            console.error(error);
          }
        };
      
        getAllUsers();
        dispatch(getUsers());
      }, [deleteUpdate]);

    return (
        
        <div class="flex flex-col text-yellow-50 mt-[150px]">
            <div className="max-w-[800px] mt-[-96px] mx-auto text-center flex flex-col justify-center">
                <h1 className="md:text-2xl sm:text-2xl text-2xl font-bold md:py-6">All Users</h1>
            </div>
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        {/* <table class="min-w-10 ml-[490px] text-left text-sm font-light"> */}
                        <table class=" ml-[400px] w-[50%] text-left text-sm font-light justify-center">
                            <thead class="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    {/* <th scope="col" class="px-6 py-4">No</th> */}
                                    <th scope="col" class="px-6 py-4">Index</th>
                                    <th scope="col" class="px-6 py-4">Name</th>
                                    <th scope="col" class="px-6 py-4">Email</th>
                                    <th scope="col" class="px-6 py-4">Edit</th>
                                    <th scope="col" class="px-6 py-4">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                   console.log(users,"kljiou8y")
                                }
                                {
                                     detailsInfo?.map((user,index) => {
                                        return(
                                            <tr class="border-b dark:border-neutral-500" key={user._id}>
                                            <td class="whitespace-nowrap px-6 py-4 font-medium">{index+1}</td>
                                            <td class="whitespace-nowrap px-6 py-4 text-white" key={user._id}>{user?.name}</td>
                                            <td class="whitespace-nowrap px-6 py-4">{user?.email}</td>
                                             <td class="whitespace-nowrap px-6 py-4"><Link to={`/admin/EditUser/${user._id}`}><FiEdit color="blue"></FiEdit></Link></td>
                                             <td class="whitespace-nowrap px-6 py-4" onClick={() => deleteUserDetails(user._id)}><RiDeleteBin5Fill color="red"></RiDeleteBin5Fill></td>
                                           </tr>
                                        )
                                    })
                                }                                                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllUsers;