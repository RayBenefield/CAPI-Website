import React from 'react';
import FileGrid from '../StaticResponsiveGrid';
import FileCard from '../FileCard';

const Content = ({files}) => {
    const imageHeight = 320;
    const fileCards = files
        .map((file, id) => {
            return <FileCard key={id.toString()} file={file} />;
        });

    return (
        <FileGrid itemWidth={imageHeight} itemHeight={imageHeight * 0.5635179153} maxWidth={1600} items={fileCards} />
    );
}

export default Content;
