/* eslint-disable import/prefer-default-export */
import { combineEpics } from 'redux-observable';
import files from './files';

export default combineEpics(files);
