import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import authService from '../services/authService';
import './Auth.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        authService.login(email, contraseña).then(
            (response) => {
                alert('Inicio de sesión exitoso');
                localStorage.setItem('token', response.data.token);
                window.location.href = '/home';
            },
            (error) => {
                alert('Error al iniciar sesión: ' + error.response.data.message);
            }
        );
    };

    return (
        <Container maxWidth="xs">
            <Box mt={5}>
                <Typography variant="h4" align="center" gutterBottom>
                    Iniciar Sesión
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Correo electrónico"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <TextField
                        label="Contraseña"
                        variant="outlined"
                        type="password"
                        fullWidth
                        margin="normal"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                        required
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        style={{ marginTop: '16px' }}
                    >
                        Iniciar Sesión
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default Login;
