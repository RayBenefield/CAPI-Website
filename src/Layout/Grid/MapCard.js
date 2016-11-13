import _ from 'underscore';
import React from 'react';
import { Card, CardTitle, CardMedia, CardText } from 'material-ui/Card';
import mapImg from './alpine.jpg';

const MapCard = (props) => {
    const cardProps = _.omit(props, 'children');
    return (
        <div {...cardProps}>
            <Card className="card">
                <CardMedia
                    overlay={<CardTitle title="Alpine" style={{ 'font-size': '16px' }} />}
                >
                    <img src={mapImg} alt='nature' />
                </CardMedia>
            </Card>
            {props.children}
        </div>
    )
};

export default MapCard;
