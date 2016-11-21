import _ from 'underscore';
import React from 'react';
import { CardTitle, CardMedia } from 'material-ui/Card';
import Paper from 'material-ui/Paper';

const MapCard = (props) => {
    const cardProps = _.omit(props, 'fileData');
    const { fileData: file } = props;
    return (
        <div {...cardProps}>
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
