import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './Content.css';
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const lgLayout = [
    {i: 'a', x: 0, y: 0, w: 2, h: 10, static: true},
    {i: 'b', x: 2, y: 0, w: 2, h: 10, static: true},
    {i: 'c', x: 4, y: 0, w: 2, h: 10, static: true},
    {i: 'd', x: 6, y: 0, w: 2, h: 10, static: true},
    {i: 'e', x: 8, y: 0, w: 2, h: 10, static: true},
];

const mdLayout = [
    {i: 'a', x: 0, y: 0, w: 2, h: 10, static: true},
    {i: 'b', x: 2, y: 0, w: 2, h: 10, static: true},
    {i: 'c', x: 4, y: 0, w: 2, h: 10, static: true},
    {i: 'd', x: 6, y: 0, w: 2, h: 10, static: true},
    {i: 'e', x: 0, y: 10, w: 2, h: 10, static: true},
];

const smLayout = [
    {i: 'a', x: 0, y: 0, w: 2, h: 10, static: true},
    {i: 'b', x: 2, y: 0, w: 2, h: 10, static: true},
    {i: 'c', x: 4, y: 0, w: 2, h: 10, static: true},
    {i: 'd', x: 0, y: 10, w: 2, h: 10, static: true},
    {i: 'e', x: 2, y: 10, w: 2, h: 10, static: true},
];

const xsLayout = [
    {i: 'a', x: 0, y: 0, w: 2, h: 10, static: true},
    {i: 'b', x: 2, y: 0, w: 2, h: 10, static: true},
    {i: 'c', x: 0, y: 10, w: 2, h: 10, static: true},
    {i: 'd', x: 2, y: 10, w: 2, h: 10, static: true},
    {i: 'e', x: 0, y: 20, w: 2, h: 10, static: true},
];

const xxsLayout = [
    {i: 'a', x: 0, y: 0, w: 2, h: 10, static: true},
    {i: 'b', x: 0, y: 10, w: 2, h: 10, static: true},
    {i: 'c', x: 0, y: 20, w: 2, h: 10, static: true},
    {i: 'd', x: 0, y: 30, w: 2, h: 10, static: true},
    {i: 'e', x: 0, y: 40, w: 2, h: 10, static: true},
];

const layouts = {
    lg: lgLayout,
    md: mdLayout,
    sm: smLayout,
    xs: xsLayout,
    xxs: xxsLayout,
};

const Content = () => (
    <ResponsiveReactGridLayout className="layout" autoSize={false} layouts={layouts}
        breakpoints={{lg: 1800, md: 1350, sm: 900, xs: 450, xxs: 0}}
        cols={{lg: 10, md: 8, sm: 6, xs: 4, xxs: 2}}
        rowHeight={28}>
        <div key={'a'}>
            <Card className="card">
                <CardHeader
                    title="URL Avatar"
                    subtitle="Subtitle"
                    avatar="images/jsa-128.jpg"
                />
                <CardMedia
                    //overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                >
                    <img src='images/nature-600-337.jpg' alt='nature'/>
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
                <CardHeader
                    title="URL Avatar"
                    subtitle="Subtitle"
                    avatar="images/jsa-128.jpg"
                />
                <CardMedia
                    //overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                >
                    <img src='images/nature-600-337.jpg' alt='nature'/>
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
                <CardHeader
                    title="URL Avatar"
                    subtitle="Subtitle"
                    avatar="images/jsa-128.jpg"
                />
                <CardMedia
                    //overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                >
                    <img src='images/nature-600-337.jpg' alt='nature'/>
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
                <CardHeader
                    title="URL Avatar"
                    subtitle="Subtitle"
                    avatar="images/jsa-128.jpg"
                />
                <CardMedia
                    //overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                >
                    <img src='images/nature-600-337.jpg' alt='nature'/>
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
                <CardHeader
                    title="URL Avatar"
                    subtitle="Subtitle"
                    avatar="images/jsa-128.jpg"
                />
                <CardMedia
                    //overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                >
                    <img src='images/nature-600-337.jpg' alt='nature'/>
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
