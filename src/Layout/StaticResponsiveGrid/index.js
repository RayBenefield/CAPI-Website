import _ from 'underscore';
import React from "react";
import { Responsive } from 'react-grid-layout';
import calculateLayout from './calculate-layout';
import './index.css';

/*
 * A simple HOC that provides facility for listening to container resizes.
 */
const StaticResponsiveGrid = (props) => {
    const layoutCount = props.maxWidth / props.itemWidth;
    const layoutConfig = calculateLayout(layoutCount, props.items.length, props.itemWidth);
    let width = props.window.width;
    const inRange = _.some(layoutConfig.widths, (layoutWidth) => {
        if (width > layoutWidth) {
            if (width !== layoutWidth) {
                width = layoutWidth;
            }
            return true;
        }
        return false;
    });
    if (!inRange && width !== props.itemWidth) {
        width = props.itemWidth;
    }
    return (
        <div className="layout" style={{ width: `${width}px` }}>
            <Responsive
                width={width}
                className="layout"
                autoSize={false}
                layouts={layoutConfig.layouts}
                breakpoints={layoutConfig.breakpoints}
                cols={layoutConfig.cols}
                rowHeight={props.itemHeight}
            >
                {props.items}
            </Responsive>
        </div>
    );
};

export default StaticResponsiveGrid;
