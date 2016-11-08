import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import Content from './Content';
import './App.css';

const App = () => (
    <MuiThemeProvider>
        <div className="App">
            <Header />
            <Content />
        </div>
    </MuiThemeProvider>
);

export default App;
