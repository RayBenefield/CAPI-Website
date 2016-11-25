/* eslint-disable import/prefer-default-export */
import { LOAD_FILES, RESIZE_LAYOUT } from './actions';

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
