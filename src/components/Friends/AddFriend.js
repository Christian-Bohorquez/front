import React, { useState } from 'react';
import friendService from '../services/friendService';
const AddFriend = () => {
    const [usuarioId, setUsuarioId] = useState('');

    const handleAddFriend = (e) => {
        e.preventDefault();
        friendService.addFriend(usuarioId).then(
            (response) => {
                alert('Amigo agregado con éxito');
            },
            (error) => {
                alert('Error al agregar amigo');
            }
        );
    };

    return (
        <div>
            <h2>Agregar Amigo</h2>
            <form onSubmit={handleAddFriend}>
                <div>
                    <label>ID del Usuario:</label>
                    <input type="text" value={usuarioId} onChange={(e) => setUsuarioId(e.target.value)} />
                </div>
                <button type="submit">Agregar</button>
            </form>
        </div>
    );
};

export default AddFriend;
