import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './Content.css';
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const lgLayout = [
    {i: 'a', x: 0, y: 0, w: 3, h: 10, static: true},
    {i: 'b', x: 3, y: 0, w: 3, h: 10, static: true},
    {i: 'c', x: 6, y: 0, w: 3, h: 10, static: true},
    {i: 'd', x: 9, y: 0, w: 3, h: 10, static: true}
];

const mdLayout = [
    {i: 'a', x: 0, y: 0, w: 3, h: 10, static: true},
    {i: 'b', x: 3, y: 0, w: 3, h: 10, static: true},
    {i: 'c', x: 6, y: 0, w: 3, h: 10, static: true},
    {i: 'd', x: 0, y: 10, w: 3, h: 10, static: true}
];

const smLayout = [
    {i: 'a', x: 0, y: 0, w: 3, h: 10, static: true},
    {i: 'b', x: 3, y: 0, w: 3, h: 10, static: true},
    {i: 'c', x: 0, y: 10, w: 3, h: 10, static: true},
    {i: 'd', x: 3, y: 10, w: 3, h: 10, static: true}
];

const xsLayout = [
    {i: 'a', x: 0, y: 0, w: 3, h: 10, static: true},
    {i: 'b', x: 0, y: 10, w: 3, h: 10, static: true},
    {i: 'c', x: 0, y: 20, w: 3, h: 10, static: true},
    {i: 'd', x: 0, y: 30, w: 3, h: 10, static: true}
];

const xxsLayout = [
    {i: 'a', x: 0, y: 0, w: 3, h: 10, static: true},
    {i: 'b', x: 0, y: 10, w: 3, h: 10, static: true},
    {i: 'c', x: 0, y: 20, w: 3, h: 10, static: true},
    {i: 'd', x: 0, y: 30, w: 3, h: 10, static: true}
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
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 12, md: 9, sm: 6, xs: 3, xxs: 3}}
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
    </ResponsiveReactGridLayout>
);

export default Content;
