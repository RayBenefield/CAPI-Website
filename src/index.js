import React from 'react';
import ReactDOM from 'react-dom';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './Layout/App';
import './index.css';

const store = createStore((state) => state);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
