// src/utils/axiosConfig.js

import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000', // Cambia esto según la URL de tu backend
    timeout: 10000,
});

// Interceptor para agregar el token de autorización
axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token'); // Cambia esto si guardas el token en otro lugar
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
