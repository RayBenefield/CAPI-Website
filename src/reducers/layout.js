import _ from 'underscore';
import { Map } from 'immutable';
import { RESIZE_LAYOUT } from '../data/actions';

const layout = (state = Map(), action) => {
    switch (action.type) {
        case RESIZE_LAYOUT: {
            let newState = state;
            newState = state.set('window', _.omit(action, 'type'));
            const header = document.getElementById('header');
            newState = newState.set('header', {
                height: header ? header.clientHeight : 0,
                width: header ? header.clientWidth : 0,
            });
            return newState;
        }
    }
    return state;
};

export default layout;
