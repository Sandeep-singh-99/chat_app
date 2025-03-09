import axios from 'axios'

export const axiosInstance = axios.create({
    // baseURL: "https://chat-app-jg1e.onrender.com/api",
    baseURL: "https://chat-app-7wb6.onrender.com/api",
    withCredentials: true
})