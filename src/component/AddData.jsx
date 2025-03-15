import React, { useState } from 'react';
import axiosInstance from '../Validation/axiosVali';// Import your Axios instance

const AddData = () => {
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState('');
    const [message, setMessage] = useState(null); // For success or error messages

    const handleAddItem = async (e) => {
        e.preventDefault(); // Prevent form refresh

        try {
            // Send data to backend using Axios
            const response = await axiosInstance.post('/addItem', {
                itemName,
                price,
            });

            // Display success message and clear inputs
            alert(response.data.message); // Show success alert
            setItemName('');
            setPrice('');
            setMessage(null); // Clear any error message
        } catch (err) {
            // Handle errors from the backend
            if (err.response && err.response.data.message) {
                setMessage({ type: 'error', text: err.response.data.message });
            } else {
                setMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-96">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Add Item</h1>
                
                {/* Display success or error message */}
                {message && (
                    <div
                        className={`text-center mb-4 ${
                            message.type === 'success' ? 'text-green-500' : 'text-red-500'
                        }`}
                    >
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleAddItem} className="flex flex-col">
                    <input
                        type="text"
                        placeholder="Item Name"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg mb-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        Add Item
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddData;
