import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Crear una instancia de Axios
const axiosInstance = axios.create({
    baseURL: API_URL,
});

// Interceptor para agregar el token a cada solicitud
axiosInstance.interceptors.request.use(
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

const addFriend = (userId2) => {
    return axiosInstance.post('/friends', { usuario_id_2: userId2 });
};

const getFriends = () => {
    return axiosInstance.get('/friends');
};

export default { addFriend, getFriends };
