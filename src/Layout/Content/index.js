import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import './Content.css';
import FileGrid from './StaticResponsiveGrid';
import FileCard from './FileCard';
import mapImg from './alpine.jpg';

const Content = () => {
    const data = {
        name: 'Alpine',
        image: mapImg,
    };

    const files = Array.apply(null, {length: 1000}).map(Number.call, Number).map((id) => {
        return <FileCard key={id.toString()} fileData={data} />;
    });

    return (
        <FileGrid itemWidth={320} maxWidth={1600} items={files} />
    );
}

export default muiThemeable()(Content);
