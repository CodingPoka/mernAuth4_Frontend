
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://mernauth4-backend.vercel.app/api', // Backend API URL
  withCredentials: true, // To send cookies (JWT token) with each request
});

export default axiosInstance;