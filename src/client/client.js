import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import routes from '../server/routes';

const history = createBrowserHistory();

ReactDOM.render(
  <Router children={routes} history={history} />,
  document.getElementById('ReactApp')
);
