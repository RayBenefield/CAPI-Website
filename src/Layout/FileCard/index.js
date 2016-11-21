import React from 'react';
import { CardTitle, CardMedia } from 'material-ui/Card';
import Paper from 'material-ui/Paper';

const MapCard = ({ className, style, fileData: file }) => {
    return (
        <div className={className} style={style}>
            <Paper className="card">
                <CardMedia
                    overlay={
                        <CardTitle title={file.name} titleStyle={{ fontSize: '20px', lineHeight: '12px' }} />
                    }
                >
                    <img src={file.image} alt='nature' />
                </CardMedia>
            </Paper>
        </div>
    );
};

export default MapCard;
