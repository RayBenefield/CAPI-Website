import React from 'react';
import Paper from 'material-ui/Paper';
import Fab from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import logo from './logo.svg';
import './index.css';

const Header = ({ onAddClick }) => (
    <Paper
        className="App-header"
        zDepth={5}
        onClick={() => onAddClick()}
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
                top: '165px',
                right: '50px',
            }}
        >
            <ContentAdd />
        </Fab>
    </Paper>
);

export default Header;
