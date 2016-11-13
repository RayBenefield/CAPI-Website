import React from 'react';
import { Responsive } from 'react-grid-layout';
import './Grid.css';
import layouts from './layouts';
import MapCard from './MapCard';

const Content = ({width}) => {
    return (
        <div className="layout" style={{ width: `${width}px` }}>
            <Responsive
                width={width}
                className="layout"
                autoSize={false}
                layouts={layouts}
                breakpoints={{lg: 1280, md: 960, sm: 640, xs: 320, xxs: 0}}
                cols={{lg: 5, md: 4, sm: 3, xs: 2, xxs: 1}}
                rowHeight={169}
            >
                <MapCard key={'a'} />
                <MapCard key={'b'} />
                <MapCard key={'c'} />
                <MapCard key={'d'} />
                <MapCard key={'e'} />
            </Responsive>
        </div>
    );
}

export default Content;
