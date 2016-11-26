import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from '../Header/Container';
import Content from '../Content/Container';
import './index.css';

const App = (props) => {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <div className="App">
                <Header id={'header'} />
                <Content height={props.window.height - props.header.height} />
            </div>
        </MuiThemeProvider>
    );
};

export default App;
