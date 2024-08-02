import React, { useState } from 'react';
import postService from '../services/postService';
const CreatePost = () => {
    const [contenido, setContenido] = useState('');

    const handleCreatePost = (e) => {
        e.preventDefault();
        postService.createPost(contenido).then(
            (response) => {
                alert('Publicación creada con éxito');
            },
            (error) => {
                alert('Error al crear publicación');
            }
        );
    };

    return (
        <div>
            <h2>Crear Publicación</h2>
            <form onSubmit={handleCreatePost}>
                <div>
                    <label>Contenido:</label>
                    <textarea value={contenido} onChange={(e) => setContenido(e.target.value)}></textarea>
                </div>
                <button type="submit">Publicar</button>
            </form>
        </div>
    );
};

export default CreatePost;
