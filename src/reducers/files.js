import { List } from 'immutable';
import { FILES_LOADED } from '../data/actions';

const files = (state = List(), action) => {
    switch (action.type) {
        case FILES_LOADED:
            return action.files;
    }
    return state;
};

export default files;
