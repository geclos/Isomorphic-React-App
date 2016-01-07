import { Route, Router, browserHistory } from 'react-router'
import App from '../shared/components/App.jsx';
import Home from '../shared/components/Home/Home.jsx';
import React from 'react';

export default (
  <Route path="/" component={App}>
    <Route path="home" component={Home} />
  </Route>
);
