import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import navigation from './navigation';

export default combineReducers({
  navigation,
  router,
});