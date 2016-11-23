import React from 'react';
import FileGrid from '../StaticResponsiveGrid';
import FileCard from '../FileCard';
import './index.css';

const Content = ({files, height}) => {
    const imageHeight = 320;
    const fileCards = files
        .map((file, id) => {
            return <FileCard key={id.toString()} file={file} />;
        });

    return (
        <div className={'content'} style={{ height: `${height}px` }}>
            <div style={{ height: `20px` }} />
            <FileGrid
                itemWidth={imageHeight}
                itemHeight={imageHeight * 0.5635179153}
                maxWidth={1600}
                items={fileCards}
            />
        </div>
    );
}

export default Content;
