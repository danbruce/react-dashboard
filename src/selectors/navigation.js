const getNavigation = (state) => ((state && state.navigation) || null);
export const getActiveRoute = state => ((getNavigation(state) && getNavigation(state).activeRoute) || null);