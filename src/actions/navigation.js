import { INITIAL_LOCATION } from '/constants/actions/navigation';

export const setInitialLocation = url => ({
  type: INITIAL_LOCATION,
  payload: {
    pathname: url,
  },
});