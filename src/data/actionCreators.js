/* eslint-disable import/prefer-default-export */
import { LOAD_FILES } from './actions';

export function loadFiles(gamertag) {
    return {
        type: LOAD_FILES,
        gamertag,
    };
}
