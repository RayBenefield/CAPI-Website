import React from 'react';
import Paper from 'material-ui/Paper';
import Fab from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import logo from './logo.svg';
import './index.css';

const Header = ({ id, onAddClick, header }) => (
    <Paper
        id={id}
        className="App-header"
        zDepth={5}
        style={{
            boxSizing: 'content-box',
            backgroundColor: '#212121',
            zIndex: 5,
            position: 'relative',
        }}
    >
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Halo File Management</h2>
        <Fab
            zDepth={4}
            style={{
                position: 'absolute',
                top: `${header.height - 28}px`,
                right: '50px',
            }}
            onClick={() => onAddClick()}
        >
            <ContentAdd />
        </Fab>
    </Paper>
);

export default Header;
