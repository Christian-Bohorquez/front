import React from 'react';

const Comment = ({ comment }) => {
    return (
        <div>
            <p><strong>{comment.usuario_id}:</strong> {comment.contenido}</p>
            <p>{new Date(comment.fecha).toLocaleString()}</p>
        </div>
    );
};

export default Comment;
