import React from 'react';
import Paper from 'material-ui/Paper';
import Fab from 'material-ui/FloatingActionButton';
import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';

const SearchFAB = ({ onAddClick, header }) => (
    <div
        style={{
            position: 'absolute',
            top: `${(header.height < 100) ? window.height - 88 : header.height - 28}px`,
            right: '16px',
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
);

export default SearchFAB;

