import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const createPost = (contenido) => {
    return axios.post(`${API_URL}/posts`, { contenido });
};

const getPosts = () => {
    return axios.get(`${API_URL}/posts`);
};

export default { createPost, getPosts };
