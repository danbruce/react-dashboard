import { combineReducers } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';

import * as ROUTES from '/constants/routes';
import { INITIAL_LOCATION } from '/constants/actions/navigation';

const getActiveRoute = (location) => {
  switch (location) {
    case ROUTES.ROOT:
      return ROUTES.ROOT;
    case ROUTES.REGISTER:
      return ROUTES.REGISTER;
    default:
      return ROUTES.ROOT;
  }
};

const activeRoute = (state = ROUTES.ROOT, { type, payload }) => {
  switch (type) {
    case LOCATION_CHANGE:
    case INITIAL_LOCATION:
      return getActiveRoute(payload.pathname || ROUTES.ROOT);
    default:
      return state;
  }
};

export default combineReducers({
  activeRoute,
});

