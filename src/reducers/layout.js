import _ from 'underscore';
import { Map } from 'immutable';
import { RESIZE_LAYOUT } from '../data/actions';

const layout = (state = Map(), action) => {
    switch (action.type) {
        case RESIZE_LAYOUT:
            return state.set('window', _.omit(action, 'type'));
    }
    return state;
};

export default layout;
