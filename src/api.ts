// src/api.ts
import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api', // Replace with your actual backend URL
});

export default api;