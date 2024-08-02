// src/components/Comments/CreateComment.js
import React, { useState } from 'react';
import commentService from '../services/commentService';
import './CreateComment.css';

const CreateComment = ({ postId }) => {
    const [contenido, setContenido] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        commentService.createComment(postId, contenido).then(
            (response) => {
                alert('Comentario agregado con éxito');
                setContenido('');
            },
            (error) => {
                alert('Error al agregar comentario');
            }
        );
    };

    return (
        <form onSubmit={handleSubmit} className="create-comment-form">
            <textarea
                value={contenido}
                onChange={(e) => setContenido(e.target.value)}
                placeholder="Escribe un comentario..."
                required
            />
            <button type="submit">Agregar Comentario</button>
        </form>
    );
};

export default CreateComment;
