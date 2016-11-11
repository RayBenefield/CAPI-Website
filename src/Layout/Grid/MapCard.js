import _ from 'underscore';
import React from 'react';
import { Card, CardMedia, CardText } from 'material-ui/Card';
import mapImg from './alpine.jpg';

const MapCard = (props) => {
    const cardProps = _.omit(props, 'children');
    return (
        <div {...cardProps}>
            <Card className="card">
                <CardMedia>
                    <img src={mapImg} alt='nature' />
                </CardMedia>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium.
                </CardText>
            </Card>
            {props.children}
        </div>
    )
};

export default MapCard;
