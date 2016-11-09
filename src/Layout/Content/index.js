import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './Content.css';
import layouts from './layouts';
import mapImg from './alpine.jpg';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const Content = () => (
    <ResponsiveReactGridLayout
        className="layout"
        autoSize={false}
        layouts={layouts}
        breakpoints={{lg: 1800, md: 1350, sm: 900, xs: 450, xxs: 0}}
        cols={{lg: 10, md: 8, sm: 6, xs: 4, xxs: 2}}
        rowHeight={28}
    >
        <div key={'a'}>
            <Card className="card">
                <CardMedia>
                    <img src={mapImg} alt='nature' />
                </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                    <FlatButton label="Action1" />
                    <FlatButton label="Action2" />
                </CardActions>
            </Card>
        </div>
        <div key={'b'}>
            <Card className="card">
                <CardMedia>
                    <img src={mapImg} alt='nature' />
                </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                    <FlatButton label="Action1" />
                    <FlatButton label="Action2" />
                </CardActions>
            </Card>
        </div>
        <div key={'c'}>
            <Card key={'c'} className="card">
                <CardMedia>
                    <img src={mapImg} alt='nature' />
                </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                    <FlatButton label="Action1" />
                    <FlatButton label="Action2" />
                </CardActions>
            </Card>
        </div>
        <div key={'d'}>
            <Card className="card">
                <CardMedia>
                    <img src={mapImg} alt='nature' />
                </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                    <FlatButton label="Action1" />
                    <FlatButton label="Action2" />
                </CardActions>
            </Card>
        </div>
        <div key={'e'}>
            <Card className="card">
                <CardMedia>
                    <img src={mapImg} alt='nature' />
                </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                    <FlatButton label="Action1" />
                    <FlatButton label="Action2" />
                </CardActions>
            </Card>
        </div>
    </ResponsiveReactGridLayout>
);

export default Content;
