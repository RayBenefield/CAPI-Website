import React from 'react';
import { CardTitle, CardMedia } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import './index.css';

const FileCard = React.createClass({
    getInitialState() {
        return { depth: 2 };
    },
    onHover() {
        this.setState({ depth: 4 });
    },
    noHover() {
        this.setState({ depth: 2 });
    },
    render() {
        const { className, style, file } = this.props;
        return (
            <div className={className} style={style}>
                <Paper className="card" zDepth={this.state.depth} onMouseEnter={this.onHover} onMouseLeave={this.noHover} >
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
    }
});

export default FileCard;
