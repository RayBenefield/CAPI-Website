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

    const files = [0, 1, 2, 3, 4].map((id) => {
        return <FileCard key={id.toString()} fileData={data} />;
    });

    return (
        <FileGrid itemWidth={320} maxWidth={1600} items={files} />
    );
}

export default muiThemeable()(Content);
