import { connect } from 'react-redux';
import Header from '.';
import { loadFiles, requestSearch } from '../../data/actionCreators';

const mapStateToProps = (state) => ({
    header: state.getIn(['layout', 'header']),
    window: state.getIn(['layout', 'window']),
    searching: state.getIn(['layout', 'searching']),
});
const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(requestSearch())
        },
        onChange: () => {
            dispatch(loadFiles())
        },
    }
}

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;
