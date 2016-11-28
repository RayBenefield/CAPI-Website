import React from 'react';
import Paper from 'material-ui/Paper';
import Fab from 'material-ui/FloatingActionButton';
import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import muiThemeable from 'material-ui/styles/muiThemeable';
import logo from './logo.svg';
import './index.css';

const Header = ({ id, onAddClick, header, window, muiTheme }) => (
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
        <div
            style={{
                position: 'absolute',
                top: `${(header.height < 100) ? window.height - 88 : header.height - 28}px`,
                right: '50px',
            }}
        >
            <Paper
                style={{
                    width: '280px',
                    background: '#006575',
                    borderRadius: '20px',
                    paddingTop: '0px',
                    paddingLeft: '15px',
                    position: 'absolute',
                    top: '5px',
                    right: '28px',
                }}
            >
                <TextField
                    hintText='Gamertag'
                    style={{
                        height: '42px',
                        lineHeight: '18px',
                        width: '280px',
                    }}
                />
            </Paper>
            <Fab zDepth={4} onClick={() => onAddClick()} >
                <Search />
            </Fab>
        </div>
    </Paper>
);

export default muiThemeable()(Header);
