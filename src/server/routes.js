import { Route, IndexRoute } from 'react-router'
import About from '../shared/components/About/About';
import App from '../shared/components/';
import Home from '../shared/components/Home/Home';
import React from 'react';

export default [
  <Route path="/" name="root" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
  </Route>
];
