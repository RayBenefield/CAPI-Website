import React from 'react';
import './Content.css';
import BreakpointWidthProvider from './BreakpointWidthProvider';
import Grid from '../Grid';
import muiThemeable from 'material-ui/styles/muiThemeable';

const FileGrid = BreakpointWidthProvider(Grid);

const Content = (props) => {
    return (
        <FileGrid style={{backgroundColor: props.muiTheme.palette.backgroundColor}} />
    );
}

export default muiThemeable()(Content);
