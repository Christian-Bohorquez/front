import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import PostList from '../Posts/PostList';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="md">
            <Box mt={5}>
                <Typography variant="h4" align="center" gutterBottom>
                    Bienvenido a la Red Social
                </Typography>
                <Box display="flex" justifyContent="center" mb={3}>
                    <Button variant="contained" color="primary" onClick={() => navigate('/create-post')}>
                        Crear Nueva Publicación
                    </Button>
                </Box>
                <PostList />
            </Box>
        </Container>
    );
};

export default Home;
