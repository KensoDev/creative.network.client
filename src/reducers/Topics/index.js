import * as actionTypes from '../../ActionTypes';

const initialState = {
  topics: [],
  loading: false,
};

export default function(state = initialState, action) {
  if (action.type === actionTypes.FETCH_ALL_TOPICS) {
    return {
      topics: action.topics,
      loading: false
    };
  }
  return initialState;
}
