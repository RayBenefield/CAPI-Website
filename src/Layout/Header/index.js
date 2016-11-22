import React from 'react';
import Paper from 'material-ui/Paper';
import logo from './logo.svg';
import './index.css';

const Header = () => (
    <Paper
        className="App-header"
        zDepth={4}
        style={{
            boxSizing: 'content-box',
            backgroundColor: '#212121',
        }}
    >
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Halo File Management</h2>
    </Paper>
);

export default Header;
