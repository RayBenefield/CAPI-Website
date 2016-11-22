import _ from 'underscore';
import React from "react";
import { Responsive } from 'react-grid-layout';
import calculateLayout from './calculate-layout';
import './index.css';

/*
 * A simple HOC that provides facility for listening to container resizes.
 */
const BreakpointWidthProvider = class BreakpointWidthProvider extends React.Component {
    constructor(props) {
        super(props);
        this.defaultProps = {
            measureBeforeMount: false,
        };
        const layoutCount = props.maxWidth / props.itemWidth;
        const layoutConfig = calculateLayout(layoutCount, props.items.length, props.itemWidth);
        this.state = {
            width: props.maxWidth,
            layoutConfig,
        };
        this.mounted = false;
    }

    componentDidMount() {
        this.mounted = true;

        window.addEventListener('resize', this.onWindowResize.bind(this));
        // Call to properly set the breakpoint and resize the elements.
        // Note that if you're doing a full-width element, this can get a little wonky if a scrollbar
        // appears because of the grid. In that case, fire your own resize event, or set `overflow: scroll` on your body.
        this.onWindowResize();
    }

    componentWillUnmount() {
        this.mounted = false;
        window.removeEventListener('resize', this.onWindowResize);
    }

    onWindowResize() {
        if (!this.mounted) return;

        const currentWidth = window.innerWidth;
        const inRange = _.some(this.state.layoutConfig.widths, (width) => {
            if (currentWidth > width) {
                if (this.state.width !== width) {
                    this.setState({ width });
                }
                return true;
            }
            return false;
        });
        if (!inRange && this.state.width !== this.props.itemWidth) {
            this.setState({width: this.props.itemWidth});
        }
    }

    render() {
        if (this.props.measureBeforeMount && !this.mounted) {
            return <div className={this.props.className} style={this.props.style} />;
        }

        return (
            <div className="layout" style={{ width: `${this.state.width}px` }}>
                <Responsive
                    width={this.state.width}
                    className="layout"
                    autoSize={false}
                    layouts={this.state.layoutConfig.layouts}
                    breakpoints={this.state.layoutConfig.breakpoints}
                    cols={this.state.layoutConfig.cols}
                    rowHeight={169}
                >
                    {this.props.items}
                </Responsive>
            </div>
        );
    }
};

export default BreakpointWidthProvider;
