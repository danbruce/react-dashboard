import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router, routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory'
import reducers from './reducers';
import App from '/routes/App';

const history = createHistory();
const routingMiddleware = routerMiddleware(history);
const store = createStore(
  reducers,
  (window.SERVER_STORE_STATE || {}),
  applyMiddleware(routingMiddleware, createLogger()),
);

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app'),
);