import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import PostList from './components/Posts/PostList';
import CreatePost from './components/Posts/CreatePost';
import CommentList from './components/Comments/CommentList';
import CreateComment from './components/Comments/CreateComment';
import FriendList from './components/Friends/FriendList';
import AddFriend from './components/Friends/AddFriend';
import Home from './components/Home/Home';
import DrawerMenu from './components/DrawerMenu/DrawerMenu';
import theme from './Theme';
import './App.css';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div className="container">
                    <DrawerMenu />
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/posts" element={<PostList />} />
                        <Route path="/create-post" element={<CreatePost />} />
                        <Route path="/comments" element={<CommentList />} />
                        <Route path="/create-comment" element={<CreateComment />} />
                        <Route path="/friends" element={<FriendList />} />
                        <Route path="/add-friend" element={<AddFriend />} />
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
};

export default App;
