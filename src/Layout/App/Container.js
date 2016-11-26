import { connect } from 'react-redux';
import App from '.';

const mapStateToProps = (state) => {
    return state.get('layout').toObject();
};

const AppContainer = connect(
    mapStateToProps,
)(App);

export default AppContainer;
