import _ from 'underscore';
import React from 'react';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import mapImg from './alpine.jpg';

const MapCard = (props) => {
    const cardProps = _.omit(props, 'children');
    return (
        <div {...cardProps}>
            <Card className="card">
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardMedia>
                    <img src={mapImg} alt='nature' />
                </CardMedia>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                </CardText>
            </Card>
            {props.children}
        </div>
    )
};

export default MapCard;
