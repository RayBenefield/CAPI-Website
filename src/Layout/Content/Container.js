import { connect } from 'react-redux';
import Content from '.';

const mapStateToProps = (state) => {
    return {
        files: state.get('files').toArray()
    };
};

const ContentContainer = connect(
    mapStateToProps
)(Content);

export default ContentContainer;
