import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import AbstractComponent from '/components/AbstractComponent';
import Footer from '/components/Footer';
import Header from '/components/Header';
import Navigation from '/components/Navigation';
import * as ROUTES from '/constants/routes';
import pages from '/routes/pages';
import { Main, Content } from './styles';

class App extends AbstractComponent {
  render() {
    return (
      <Main>
        <Content>
          <Header />
          <Route exact path={ROUTES.ROOT} component={pages.Home} />
          <Route exact path={ROUTES.REGISTER} component={pages.Register} />
          <Footer />
        </Content>
        <Navigation />
      </Main>
    );
  }
}

export default withRouter(App);