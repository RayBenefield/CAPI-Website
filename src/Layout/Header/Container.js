import { connect } from 'react-redux';
import Header from '.';

const mapStateToProps = (state) => ({
    header: state.getIn(['layout', 'header']),
});

const HeaderContainer = connect(
    mapStateToProps,
)(Header);

export default HeaderContainer;
