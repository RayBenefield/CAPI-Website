import React from 'react';
import { Responsive } from 'react-grid-layout';
import './Grid.css';
import layouts from './layouts';
import FileCard from './FileCard';
import mapImg from './alpine.jpg';

const Content = ({width}) => {
    const data = {
        name: 'Alpine',
        image: mapImg,
    };

    const files = [0, 1, 2, 3, 4].map((id) => {
        return <FileCard key={id.toString()} fileData={data} />;
    });

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
                {files}
            </Responsive>
        </div>
    );
}

export default Content;
