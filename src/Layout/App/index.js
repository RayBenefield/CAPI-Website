import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from '../Header/Container';
import Content from '../Content/Container';
import './index.css';

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
