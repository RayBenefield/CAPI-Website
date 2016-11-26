import React from 'react';
import ReactDOM from 'react-dom';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { resizeLayout } from './data/actionCreators';
import * as reducers from './reducers';
import App from './Layout/App/Container';
import './index.css';

const allReducers = combineReducers(reducers);
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.addEventListener('resize', () => store.dispatch(resizeLayout()));
store.dispatch(resizeLayout());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
    () => store.dispatch(resizeLayout())
);
