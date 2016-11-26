import _ from 'underscore';
import { Map } from 'immutable';
import { RESIZE_LAYOUT, RESIZE_ITEMS } from '../data/actions';

const layout = (state = Map(), action) => {
    switch (action.type) {
        case RESIZE_LAYOUT: {
            let newState = state;
            newState = newState.set('window', _.omit(action, 'type'));
            const shouldCollapse = newState.get('window').height < (160 + newState.get('item').height * 2);
            newState = newState.set('header', {
                height: shouldCollapse ? 64 : 160,
                width: newState.get('window').width,
            });
            return newState;
        }
        case RESIZE_ITEMS: {
            let newState = state;
            newState = newState.set('item', {
                width: action.width,
                height: action.width * 0.5635179153,
            });
            return newState;
        }
    }
    return state;
};

export default layout;
