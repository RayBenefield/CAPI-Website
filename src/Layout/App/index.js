import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from '../Header/Container';
import Content from '../Content/Container';
import './index.css';

const App = (props) => {
    const header = document.getElementById('header')
    let headerHeight = 0;
    if (header) headerHeight = header.clientHeight;
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <div className="App">
                <Header id={'header'} />
                <Content height={props.window.height - headerHeight} />
            </div>
        </MuiThemeProvider>
    );
};

export default App;
