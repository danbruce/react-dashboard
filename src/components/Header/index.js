import React from 'react';
import AbstractComponent from '/components/AbstractComponent';

import { StyledHeader } from './styles';

class Header extends AbstractComponent {
  render() {
    return (
      <StyledHeader>
        <div className="container">
          <div className="row">
            <div className="col align-self-center">
              Header goes here.
            </div>
          </div>
        </div>
      </StyledHeader>
    );
  }
}

export default Header;