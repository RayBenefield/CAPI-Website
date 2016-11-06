import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import './App.css';

export default () => {
    return (
        <div className="App">
            <Header />
            <Content />
        </div>
    );
};
