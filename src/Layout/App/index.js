import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from '../Header/Container';
import Content from '../Content/Container';
import './index.css';

const App = React.createClass({
    getInitialState() {
        return { state: 0 };
    },
    componentDidMount() {
        this.mounted = true;

        window.addEventListener('resize', this.onWindowResize.bind(this));
        // Call to properly set the breakpoint and resize the elements.
        // Note that if you're doing a full-width element, this can get a little wonky if a scrollbar
        // appears because of the grid. In that case, fire your own resize event, or set `overflow: scroll` on your body.
        this.onWindowResize();
    },
    componentWillUnmount() {
        if (!this.mounted) return;

        this.mounted = false;
        window.removeEventListener('resize', this.onWindowResize);
    },
    onWindowResize() {
        const height = document.getElementById('header').clientHeight;
        const windowHeight = window.innerHeight;
        this.setState({ height, windowHeight });
    },
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <div className="App">
                    <Header id={'header'} />
                    <Content height={this.state.windowHeight - this.state.height} />
                </div>
            </MuiThemeProvider>
        );
    },
});

export default App;
