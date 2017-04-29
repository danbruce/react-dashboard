import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const NavWrapper = styled.div`
  display: none;
  position: fixed;
  left: 0;
  width: 200px;
`;

const StyledNavList = styled.ul`  
`;
StyledNavList.displayName = 'StyledNavList';
export const NavList = ({ children }) => (
  <StyledNavList className="nav flex-column">
    {children}
  </StyledNavList>
);
NavList.propTypes = {
  children: PropTypes.node.isRequired,
};

const StyledNavListItem = styled.li`
`;
StyledNavListItem.displayName = 'StyledNavListItem';
export const NavListItem = ({children}) => (
  <StyledNavListItem className="nav-item">
    {children}
  </StyledNavListItem>
);
NavListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export const NavLink = ({children, to, active}) => {
  let className = 'nav-link';
  if (active) {
    className = `${className} active`;
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};
NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};