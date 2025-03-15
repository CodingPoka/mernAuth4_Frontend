

import React from 'react';
import About from './component/About';
import Login from './component/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './component/Navbar';
import Profile from './component/Profile';
import Dashboard from './component/Dashboard';
import AddData from './component/AddData';
import ViewData from './component/ViewData';
import Register from './component/Register';


//create browser router

const router=createBrowserRouter([
    {
        path:"/profile",
        element: <div>
            <Navbar/>
            <Profile/>
        </div>
    },
    {
        path:"/dashboard",
        element: <div>
            <Navbar/>
            <Dashboard/>
        </div>
    },
    {
        path:"/about",
        element: <div>
            <Navbar/>
            <About/>
        </div>
    },
    {
        path:"/addData",
        element: <div>
            <Navbar/>
            <AddData/>
        </div>
    },
    {
        path:"/viewData",
        element: <div>
            <Navbar/>
            <ViewData/>
        </div>
    },
    {
        path:"/",
        element: <div>
         
            <Login/>
        </div>
    },
    {
        path:"/register",
        element: <div>
          
            <Register/>
        </div>
    },
])
const App = () => {
    return (
        <div>
          <RouterProvider router={router}/>
        </div>
    );
};

export default App;