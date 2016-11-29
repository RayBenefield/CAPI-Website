import { connect } from 'react-redux';
import SearchFAB from '.';
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

const SearchFABContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchFAB);

export default SearchFABContainer;
