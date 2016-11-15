import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import './Content.css';
import FileGrid from './StaticResponsiveGrid';
import FileCard from './FileCard';
import dataFile from './maps-list-page-1.json';
import findImage from './find-image';

const data = dataFile.Results;

const Content = () => {
    const files = data
        .map((map) => {
            return {
                name: map.Name,
                image: findImage(map.Identity.ResourceId),
            };
        })
        .map((map, id) => {
            return <FileCard key={id.toString()} fileData={map} />;
        });

    return (
        <FileGrid itemWidth={320} maxWidth={1600} items={files} />
    );
}

export default muiThemeable()(Content);
