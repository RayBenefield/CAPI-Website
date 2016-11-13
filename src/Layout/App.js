import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Header from './Header';
import Content from './Content';
import './App.css';

darkBaseTheme.palette.backgroundColor = '#424242';
const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="App">
            <Header />
            <Content />
        </div>
    </MuiThemeProvider>
);

export default App;
