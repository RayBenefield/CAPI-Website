import _ from 'underscore';
import React from 'react';
import { Card, CardTitle, CardMedia } from 'material-ui/Card';

const MapCard = (props) => {
    const cardProps = _.omit(props, 'children', 'fileData');
    const { fileData: file } = props;
    return (
        <div {...cardProps}>
            <Card className="card">
                <CardMedia
                    overlay={<CardTitle title={file.name} style={{ 'font-size': '16px' }} />}
                >
                    <img src={file.image} alt='nature' />
                </CardMedia>
            </Card>
            {props.children}
        </div>
    )
};

export default MapCard;
