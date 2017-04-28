import { connect } from 'react-redux';
import Home from './presenter';
import { getTopics } from './actions/getTopics';

function mapStateToProps(state) {
  const { topics } = state.topics;

  return {
    topics
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTopics: () => {
      dispatch(getTopics());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
