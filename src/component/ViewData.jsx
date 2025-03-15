import React, { useEffect, useState } from 'react';
import axiosInstance from '../Validation/axiosVali'; // Import your Axios instance

const ViewData = () => {
    const [items, setItems] = useState([]); // State to hold fetched items
    const [error, setError] = useState(null); // State to handle errors

    // Fetch data from backend when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Try to fetch items from the backend
                const response = await axiosInstance.get('viewItems'); // Adjust endpoint accordingly
                setItems(response.data.items); // Save the items in state
            } catch (err) {
                // Catch errors during the fetch
                if (err.response && err.response.data.message) {
                    setError(err.response.data.message); // Set backend error message
                } else {
                    setError('Unable to fetch data. Please try again later.'); // General error
                }
            }
        };

        fetchData(); // Call the fetch function
    }, []); // Empty dependency array ensures it runs only once

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-96 max-h-96 overflow-y-auto">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">View Data</h1>

                {/* Display error if one occurs */}
                {error && (
                    <div className="text-red-500 text-center mb-4">
                        {error}
                    </div>
                )}

                {/* Render items if they are available */}
                {!error && items.length > 0 && (
                    <ul className="space-y-4">
                        {items.map((item, index) => (
                            <li
                                key={index}
                                className="bg-gray-100 px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
                            >
                                <p className="font-semibold">Item: {item.itemName}</p>
                                <p>Price: ${item.price}</p>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Show message if no data is available */}
                {!error && items.length === 0 && (
                    <p className="text-center text-gray-600">No data found.</p>
                )}
            </div>
        </div>
    );
};

export default ViewData;
