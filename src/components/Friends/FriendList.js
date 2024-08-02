import React, { useState, useEffect } from 'react';
import friendService from '../services/friendService';
import './FriendList.css';

const FriendList = () => {
    const [friends, setFriends] = useState([]);
    const [userId2, setUserId2] = useState('');

    useEffect(() => {
        friendService.getFriends().then(
            (response) => {
                setFriends(response.data);
            },
            (error) => {
                alert('Error al obtener la lista de amigos');
            }
        );
    }, []);

    const handleAddFriend = (e) => {
        e.preventDefault();
        friendService.addFriend(userId2).then(
            (response) => {
                alert('Amigo agregado con éxito');
                setFriends([...friends, response.data]);
                setUserId2('');
            },
            (error) => {
                alert('Error al agregar amigo');
            }
        );
    };

    return (
        <div className="friend-list-container">
            <form className="friend-list-form" onSubmit={handleAddFriend}>
                <input
                    type="text"
                    value={userId2}
                    onChange={(e) => setUserId2(e.target.value)}
                    placeholder="ID del usuario"
                    required
                />
                <button type="submit">Agregar Amigo</button>
            </form>
            <ul className="friend-list">
                {friends.map((friend, index) => (
                    <li key={index}>Usuario ID: {friend.usuario_id_2}</li>
                ))}
            </ul>
        </div>
    );
};

export default FriendList;
