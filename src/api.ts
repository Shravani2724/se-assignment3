// src/api.ts
import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
    // baseURL: 'http://localhost:5000/api', 
    baseURL :  'http://localhost:4000/api',
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;