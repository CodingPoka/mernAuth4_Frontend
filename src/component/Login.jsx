import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../Validation/axiosVali'; // Import your Axios instance

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // To display error messages
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent form refresh

        try {
            // Send login request to backend
            const response = await axiosInstance.post('/login', {
                email,
                password,
            });

            // If login is successful, navigate to the profile page
            alert(response.data.message); // Display success message from backend
            navigate('/profile');
        } catch (err) {
            // Handle errors from the backend
            if (err.response && err.response.data.message) {
                setError(err.response.data.message); // Set error from backend
            } else {
                setError('Something went wrong. Please try again.'); // Generic error
            }
        }
    };

    const handleRegister = () => {
        navigate('/register'); // Navigate to the Register page
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-96">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Login Page</h1>
                
                {/* Display error messages if present */}
                {error && (
                    <div className="text-red-500 text-center mb-4">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="flex flex-col">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit" // Submits the form and triggers handleLogin
                        className="w-full bg-blue-500 text-white py-2 rounded-lg mb-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        Login
                    </button>
                </form>

                <button
                    onClick={handleRegister}
                    className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                    Register
                </button>
            </div>
        </div>
    );
};

export default Login;
