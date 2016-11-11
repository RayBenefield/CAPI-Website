import React from "react";

/*
 * A simple HOC that provides facility for listening to container resizes.
 */
const BreakpointWidthProvider = (ComposedComponent) => class BreakpointWidthProvider extends React.Component {
    constructor(props) {
        super(props);
        this.defaultProps = {
            measureBeforeMount: false
        };
        this.state = {
            width: 1280
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
        if (currentWidth > 1280 && this.state !== 1280) {
            this.setState({width: 1280});
        } else if (currentWidth > 960 && this.state !== 960) {
            this.setState({width: 960});
        } else if (currentWidth > 640 && this.state !== 640) {
            this.setState({width: 640});
        } else if (currentWidth > 320 && this.state !== 320) {
            this.setState({width: 320});
        }
    }

    render() {
        if (this.props.measureBeforeMount && !this.mounted) {
            return <div className={this.props.className} style={this.props.style} />;
        }

        return <ComposedComponent {...this.props} {...this.state} />;
    }
};

export default BreakpointWidthProvider;
