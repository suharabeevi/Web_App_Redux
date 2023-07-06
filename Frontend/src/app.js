import React from "react";
import  ReactDOM  from "react-dom/client";
import { createRoot } from 'react-dom/client';
import '/src/index.css';
import Home from "./Pages/HomePage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import AdminLogin from "./admin/adminPages/AdminLogin";
import AdminDashBoard from "./admin/adminPages/AdminDashboard";
import AllUsers from "./admin/adminPages/AllUsers";
import AddUsers from "./admin/adminPages/AddUsers";
import EditUser from "./admin/adminPages/EditUser";
//import EditUser from "./admin/adminPages/EditUser";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/signup" element={<Signup/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/profile" element={<Profile/>}></Route>
                    <Route path="/admin" element={<AdminDashBoard/>}></Route>
                    <Route path="/admin/login" element={<AdminLogin/>}></Route>
                    <Route path="/admin/allUsers" element={<AllUsers/>}></Route>
                    <Route path="/admin/addUsers" element={<AddUsers/>}></Route>
                    <Route path="/admin/EditUser/:id" element={<EditUser/>}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App;

// const App = () => {
//     return (
//         <>
//             <Header />
//             <Outlet />
//             <Footer />
//         </>
//     );
// };
// const appRouter = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />,
//         children: [
//             {
//                 path: "/",
//                 element: <Home />,
//             },
//             {
//                 path: "/login",
//                 element: <Login />,
//             },
//             {
//                 path: "/signup",
//                 element: <Signup />,
//             },
//             {
//                 path: "/profile",
//                 element: <Profile />,
//             },
//         ],
//     },
// ]);

// const appRouter = createBrowserRouter([
//     {
//         path: '/',
//         element: <Header/>,

//     }
// ])

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<RouterProvider router={appRouter} />)