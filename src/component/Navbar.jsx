import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axiosInstance from '../Validation/axiosVali';// Import your Axios instance

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            // Call the backend logout API
            const response = await axiosInstance.post('/logout'); // Adjust the endpoint as per your backend
            alert(response.data.message); // Display success message from backend
            navigate('/'); // Redirect to the home or login page
        } catch (error) {
            // Handle errors during logout
            if (error.response && error.response.data.message) {
                alert(`Error: ${error.response.data.message}`); // Show error message from backend
            } else {
                alert('Error: Something went wrong. Please try again.');
            }
        }
    };

    return (
        <div>
            <ul className="bg-sky-400 h-[60px] flex justify-center items-center gap-7">
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/addData">Add Data</NavLink>
                </li>
                <li>
                    <NavLink to="/viewData">View Data</NavLink>
                </li>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                >
                    Logout
                </button>
            </ul>
        </div>
    );
};

export default Navbar;
