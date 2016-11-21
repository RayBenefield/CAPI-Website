import React from 'react';
import ReactDOM from 'react-dom';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './Layout/App';
import './index.css';
import findImage from './find-image';
import dataFile1 from './maps-list-page-1.json';
import dataFile2 from './maps-list-page-2.json';

const data = dataFile1.Results.concat(dataFile2.Results);

const store = createStore(() => {
    return data.map((map) => {
        return {
            name: map.Name,
            image: findImage(map.Identity.ResourceId),
        };
    })
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
