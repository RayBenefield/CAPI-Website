import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import './Content.css';
import layouts from './layouts';
import MapCard from './MapCard';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const Content = () => (
    <ResponsiveReactGridLayout
        className="layout"
        autoSize={false}
        layouts={layouts}
        breakpoints={{lg: 1800, md: 1350, sm: 900, xs: 450, xxs: 0}}
        cols={{lg: 10, md: 8, sm: 6, xs: 4, xxs: 2}}
        rowHeight={28}
    >
        <MapCard key={'a'} />
        <MapCard key={'b'} />
        <MapCard key={'c'} />
        <MapCard key={'d'} />
        <MapCard key={'e'} />
    </ResponsiveReactGridLayout>
);

export default Content;
