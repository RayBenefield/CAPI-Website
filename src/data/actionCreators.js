/* eslint-disable import/prefer-default-export */
import { LOAD_FILES, RESIZE_LAYOUT, RESIZE_ITEMS, REQUEST_SEARCH } from './actions';

export function loadFiles(gamertag) {
    return {
        type: LOAD_FILES,
        gamertag,
    };
}

export function resizeLayout() {
    return {
        type: RESIZE_LAYOUT,
        height: window.innerHeight,
        width: window.innerWidth,
    };
}

export function resizeItems(width = 320) {
    return {
        type: RESIZE_ITEMS,
        width,
    };
}

export function requestSearch() {
    return {
        type: REQUEST_SEARCH,
    };
}
