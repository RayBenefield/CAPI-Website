import React from 'react';
import FileGrid from '../StaticResponsiveGrid/Container';
import FileCard from '../FileCard';
import './index.css';

const Content = ({files, height, item }) => {
    const fileCards = files
        .map((file, id) => {
            return <FileCard key={id.toString()} file={file} />;
        });

    return (
        <div className={'content'} style={{ height: `${height}px` }}>
            <div style={{ height: `20px` }} />
            <FileGrid
                itemWidth={item.width}
                itemHeight={item.height}
                maxWidth={1600}
                items={fileCards}
            />
        </div>
    );
}

export default Content;
