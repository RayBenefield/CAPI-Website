import React from 'react';
import Paper from 'material-ui/Paper';
import SearchFAB from '../SearchFAB/Container';
import logo from './logo.svg';
import './index.css';

const Header = ({ id, header }) => (
    <Paper
        id={id}
        className="App-header"
        zDepth={5}
        style={{
            height: `${header.height}px`,
            boxSizing: 'content-box',
            backgroundColor: '#212121',
            zIndex: 5,
            position: 'relative',
        }}
    >
        <div
            style={{
                width: '100%',
                position: 'absolute',
                bottom: '60px',
            }}
        >
            <img
                src={logo}
                className="App-logo"
                alt="logo"
            />
        </div>
        <h2
            style={{
                position: 'absolute',
                width: '100%',
                bottom: '0px',
                left: '0px',
            }}
        >Halo File Management</h2>
        <SearchFAB />
    </Paper>
);

export default Header;
