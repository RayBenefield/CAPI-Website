import React from 'react';
import './Content.css';
import BreakpointWidthProvider from './BreakpointWidthProvider';
import Grid from '../Grid';

const FileGrid = BreakpointWidthProvider(Grid);

const Content = () => {
    return (
        <FileGrid />
    );
}

export default Content;
