import { connect } from 'react-redux';
import Content from './Content';

const mapStateToProps = (state) => {
    return {
        data: state
    };
};

const ContentContainer = connect(
  mapStateToProps
)(Content);

export default ContentContainer;
