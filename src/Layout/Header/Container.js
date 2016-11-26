import { connect } from 'react-redux';
import Header from '.';
import { loadFiles } from '../../data/actionCreators';

const mapStateToProps = (state) => ({
    header: state.getIn(['layout', 'header']),
    window: state.getIn(['layout', 'window']),
});
const mapDispatchToProps = (dispatch) => {
    return {
        onAddClick: () => {
            dispatch(loadFiles())
        }
    }
}

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;
