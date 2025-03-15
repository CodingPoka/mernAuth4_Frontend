
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3423/api', // Backend API URL
  withCredentials: true, // To send cookies (JWT token) with each request
});

export default axiosInstance;