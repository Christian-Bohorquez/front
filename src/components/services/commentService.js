import axios from './axiosConfig';

const createComment = (postId, contenido) => {
    return axios.post('/comments', { publicacion_id: postId, contenido });
};

const getComments = (postId) => {
    return axios.get(`/comments?postId=${postId}`);
};

export default { createComment, getComments };
