import { connect } from 'react-redux';
import App from '.';

const mapStateToProps = (state) => {
    return {
        window: state.getIn(['layout', 'window'])
    };
};

const AppContainer = connect(
    mapStateToProps,
)(App);

export default AppContainer;
