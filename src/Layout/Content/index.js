import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import './Content.css';
import FileGrid from './StaticResponsiveGrid';
import FileCard from './FileCard';

const Content = ({data}) => {
    const files = data
        .map((map, id) => {
            return <FileCard key={id.toString()} fileData={map} />;
        });

    return (
        <FileGrid itemWidth={320} maxWidth={1600} items={files} />
    );
}

export default muiThemeable()(Content);
