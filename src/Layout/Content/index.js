import React from 'react';
import FileGrid from '../StaticResponsiveGrid';
import FileCard from '../FileCard';

const Content = ({files}) => {
    const fileCards = files
        .map((file, id) => {
            return <FileCard key={id.toString()} file={file} />;
        });

    return (
        <FileGrid itemWidth={320} maxWidth={1600} items={fileCards} />
    );
}

export default Content;
