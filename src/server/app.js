import express from 'express';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter as Router } from 'react-router-dom';
import { routerReducer } from 'react-router-redux';
import { renderToString } from 'react-dom/server';
import reducers from '/reducers';
import App from '/routes/App';
import { setInitialLocation } from '/actions/navigation';

const app = express();
app.use(express.static('./web'));
app.get('*', (req, res, next) => {
  const store = createStore(reducers);
  store.dispatch(setInitialLocation(req.url));
  res.locals.store = store;
  next();
});
app.get('*', (req,res) => {
  const { locals: { store }} = res;
  const contents = renderToString(
    <Provider store={store}>
      <Router location={req.url} context={{}}>
        <App />
      </Router>
    </Provider>,
  );
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Stripe Subscription Manager</title>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
        integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ"
        crossorigin="anonymous">
    </head>
    <body>
    <div id="app">${contents}</div>
    <script>window.SERVER_STORE_STATE = ${JSON.stringify(store.getState())};</script>
    <script src="/assets/js/bundle.js"></script>
    </body>
    </html>
  `);
});
app.listen(3000, () => {
  console.log('App listening on port 3000.')
});