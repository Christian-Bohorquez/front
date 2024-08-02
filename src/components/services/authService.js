import axios from 'axios';

const API_URL = 'http://localhost:5000/api';
axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const login = (email, contraseña) => {
    return axios.post(`${API_URL}/login`, {
        email,
        contraseña,
    });
};

// Aquí puedes definir otras funciones para tu servicio de autenticación

const authService = {
    login,
};

const register = (nombre, email, contraseña, carrera, año_de_ingreso) => {
    return axios.post(`${API_URL}/register`, { nombre, email, contraseña: contraseña, carrera, año_de_ingreso });
};
export default { login, register };
