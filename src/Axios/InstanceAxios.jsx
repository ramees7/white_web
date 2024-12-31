import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/", // Set the base URL for all requests
  timeout: 10000, // Optional: Set a timeout for requests
});

export default axiosInstance;