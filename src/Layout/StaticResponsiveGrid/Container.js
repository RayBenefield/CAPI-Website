import { connect } from 'react-redux';
import StaticResponsiveGrid from '.';
import { loadFiles } from '../../data/actionCreators';

const mapStateToProps = (state) => {
    return {
        window: state.getIn(['layout', 'window'])
    };
};

const GridContainer = connect(
    mapStateToProps,
)(StaticResponsiveGrid);

export default GridContainer;
