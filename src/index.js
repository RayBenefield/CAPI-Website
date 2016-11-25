import React from 'react';
import ReactDOM from 'react-dom';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Map, List } from 'immutable';
import { resizeLayout } from './data/actionCreators';
import files from './reducers/files';
import layout from './reducers/layout';
import App from './Layout/App';
import './index.css';

const reducers = combineReducers({
    files,
    layout,
});
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.addEventListener('resize', () => store.dispatch(resizeLayout()));
store.dispatch(resizeLayout())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
