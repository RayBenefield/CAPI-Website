import { connect } from 'react-redux';
import Content from './Content';

const mapStateToProps = (state) => {
    return {
        files: state
    };
};

const ContentContainer = connect(
  mapStateToProps
)(Content);

export default ContentContainer;
