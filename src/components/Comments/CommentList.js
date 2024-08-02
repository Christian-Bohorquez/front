import React, { useEffect, useState } from 'react';
import commentService from '../services/commentService';
import Comment from './Comment';
import './CommentList.css';

const CommentList = ({ postId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (postId) {
            commentService.getComments(postId).then(
                (response) => {
                    setComments(response.data);
                },
                (error) => {
                    alert('Error al obtener comentarios: ' + error.response.data.message);
                }
            );
        } else {
            alert('postId no está definido');
        }
    }, [postId]);

    return (
        <div className="comment-list">
            <h3>Comentarios</h3>
            {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    );
};

export default CommentList;
