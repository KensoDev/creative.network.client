import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import topics from './Topics'

export default combineReducers({
  routing: routerReducer,
  topics
});
