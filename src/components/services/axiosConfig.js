// src/services/axiosConfig.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Configurar el interceptor de solicitudes para incluir el token en las cabeceras
axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axios.create({
    baseURL: API_URL
});
