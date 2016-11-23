import { connect } from 'react-redux';
import Header from '.';

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => {
    return {
        onAddClick: () => {
            dispatch({ type: 'LOAD_FILES' })
        }
    }
}

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;
