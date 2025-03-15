import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Using React Router for navigation
import axiosInstance from '../Validation/axiosVali'; // Import the Axios instance

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // To handle errors
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault(); // Prevents form from refreshing the page

        try {
            // Send data to backend using Axios
            const response = await axiosInstance.post('/register', {
                name,
                email,
                password,
            });

            // Success message and navigation
            alert(response.data.message); // Display success message from backend
            navigate('/'); // Redirect to Login page
        } catch (err) {
            // Handle errors from the backend
            if (err.response && err.response.data.message) {
                setError(err.response.data.message); // Display error message from backend
            } else {
                setError('Something went wrong. Please try again.');
            }
        }
    };

    const handleLogin = () => {
        navigate('/'); // Navigates to the Login page
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-96">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Register Page</h1>
                
                {/* Display error message if present */}
                {error && (
                    <div className="text-red-500 text-center mb-4">
                        {error}
                    </div>
                )}
                
                <form onSubmit={handleRegister} className="flex flex-col">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button
                        type="submit" // Trigger the form's onSubmit handler
                        className="w-full bg-green-500 text-white py-2 rounded-lg mb-4 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                    >
                        Register
                    </button>
                </form>
                <button
                    onClick={handleLogin}
                    className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default Register;
