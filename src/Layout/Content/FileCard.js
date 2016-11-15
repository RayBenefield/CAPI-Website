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
                    overlay={
                        <CardTitle title={file.name} titleStyle={{ 'font-size': '20px', 'line-height': '12px' }} />
                    }
                >
                    <img src={file.image} alt='nature' />
                </CardMedia>
            </Card>
            {props.children}
        </div>
    );
};

export default MapCard;
