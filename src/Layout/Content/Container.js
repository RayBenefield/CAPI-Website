import { connect } from 'react-redux';
import Content from '.';

const mapStateToProps = (state) => {
    return {
        files: state.get('files').toArray(),
        item: state.getIn(['layout', 'item']),
    };
};

const ContentContainer = connect(
    mapStateToProps
)(Content);

export default ContentContainer;
