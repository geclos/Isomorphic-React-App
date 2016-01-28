import { Route, IndexRoute } from 'react-router'
import App from '../shared/components/';
import Home from '../shared/components/Home/Home';
import React from 'react';

export default [
  <Route path="/" name="root" component={App}>
    <IndexRoute component={Home} />
  </Route>
];
