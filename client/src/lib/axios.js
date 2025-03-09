import axios from 'axios'

export const axiosInstance = axios.create({
    // baseURL: "https://chat-app-jg1e.onrender.com/api",
    baseURL: "http://localhost:5000/api",
    withCredentials: true
})