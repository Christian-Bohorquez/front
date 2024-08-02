import React, { useEffect, useState } from 'react';
import postService from '../services/postService';
import Post from './Post';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getPosts().then(
            (response) => {
                setPosts(response.data);
            },
            (error) => {
                alert('Error al obtener publicaciones');
            }
        );
    }, []);

    return (
        <div>
            <h2>Publicaciones</h2>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostList;
