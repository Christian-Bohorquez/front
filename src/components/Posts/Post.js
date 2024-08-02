import React from 'react';

const Post = () => {
  return (
    <div className="post">
      <div className="post-header">
        <div className="post-id">1</div>
        <div className="post-info">
          <span className="post-title">11</span>
          <span className="post-date">1/8/2024, 9:41:16</span>
        </div>
      </div>
      <div className="post-content">
        <p>asdasd</p>
      </div>
      <div className="post-comments">
        <h3>Comentarios</h3>
        <textarea placeholder="Escribe un comentario..."></textarea>
      </div>
    </div>
  );
}

export default Post;
