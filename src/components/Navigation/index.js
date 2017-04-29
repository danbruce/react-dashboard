import React  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AbstractComponent from '/components/AbstractComponent';
import * as ROUTES from '/constants/routes';
import { getActiveRoute } from '/selectors/navigation';
import { NavWrapper, NavList, NavListItem, NavLink } from './styles';

const locationMatches = (location, route) => (
  location.indexOf(route) !== -1
);

class Navigation extends AbstractComponent {
  static propTypes = {
    activeRoute: PropTypes.string.isRequired,
  };
  render() {
    const { activeRoute } = this.props;
    return (
      <NavWrapper>
        <NavList>
          <NavListItem>
            <NavLink to={ROUTES.ROOT} active={activeRoute === ROUTES.ROOT}>
              Login
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to={ROUTES.REGISTER} active={activeRoute === ROUTES.REGISTER}>
              Register
            </NavLink>
          </NavListItem>
        </NavList>
      </NavWrapper>
    );
  }
}

export default connect(
  state => ({ activeRoute: getActiveRoute(state)}),
)(Navigation);