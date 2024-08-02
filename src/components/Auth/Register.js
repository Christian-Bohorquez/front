import React, { useState } from 'react';
import authService from '../services/authService';

const Register = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [carrera, setCarrera] = useState('');
    const [añoDeIngreso, setAñoDeIngreso] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        authService.register(nombre, email, contraseña, carrera, añoDeIngreso).then(
            (response) => {
                alert('Usuario registrado con éxito');
            },
            (error) => {
                alert('Error al registrar el usuario');
            }
        );
    };

    return (
        <div>
            <h2>Registro</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
                </div>
                <div>
                    <label>Carrera:</label>
                    <input type="text" value={carrera} onChange={(e) => setCarrera(e.target.value)} />
                </div>
                <div>
                    <label>Año de Ingreso:</label>
                    <input type="number" value={añoDeIngreso} onChange={(e) => setAñoDeIngreso(e.target.value)} />
                </div>
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default Register;
