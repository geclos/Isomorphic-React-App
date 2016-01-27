import { Route, browserHistory, IndexRoute } from 'react-router'
import React from 'react';

import App from '../shared/components/';
import Feed from '../shared/components/Feed/Feed';
import Home from '../shared/components/Home/Home';
import Parser from '../shared/components/Parser/Parser';

export default [
  <Route path="/" history={browserHistory} component={App}>
    <IndexRoute component={Home} />
    <Route path="feed" component={Feed} />
    <Route path="parser" component={Parser} />
  </Route>
];
