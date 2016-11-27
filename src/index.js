import React from 'react';
import ReactDOM from 'react-dom';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import 'rxjs';
import { resizeLayout, resizeItems } from './data/actionCreators';
import * as reducers from './reducers';
import App from './Layout/App/Container';
import './index.css';
import epics from './epics';

const allReducers = combineReducers(reducers);
const epicMiddleware = createEpicMiddleware(epics);
const store = createStore(allReducers, composeWithDevTools(
    applyMiddleware(epicMiddleware)
));

window.addEventListener('resize', () => store.dispatch(resizeLayout()));
store.dispatch(resizeItems());
store.dispatch(resizeLayout());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
    () => store.dispatch(resizeLayout())
);
