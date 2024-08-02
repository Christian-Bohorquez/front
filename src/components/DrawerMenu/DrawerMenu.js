import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import CommentIcon from '@mui/icons-material/Comment';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import GroupIcon from '@mui/icons-material/Group';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import './DrawerMenu.css';

const DrawerMenu = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (state) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(state);
    };

    return (
        <div>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                <div className="drawer-container" role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                    <List>
                        <ListItem button component={Link} to="/home">
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button component={Link} to="/posts">
                            <ListItemIcon><PostAddIcon /></ListItemIcon>
                            <ListItemText primary="Posts" />
                        </ListItem>
                        <ListItem button component={Link} to="/comments">
                            <ListItemIcon><CommentIcon /></ListItemIcon>
                            <ListItemText primary="Comments" />
                        </ListItem>
                        <ListItem button component={Link} to="/add-friend">
                            <ListItemIcon><GroupAddIcon /></ListItemIcon>
                            <ListItemText primary="Add Friend" />
                        </ListItem>
                        <ListItem button component={Link} to="/friends">
                            <ListItemIcon><GroupIcon /></ListItemIcon>
                            <ListItemText primary="Friends" />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </div>
    );
};

export default DrawerMenu;
