import {createStore, combineReducers} from 'redux';
import {fromJS} from 'immutable';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import * as reducers from '../shared/reducers';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import routes from '../server/routes';

const history = createBrowserHistory();

let initialState = window.__INITIAL_STATE__;
let initComponent;

if (initialState) {
  Object.keys(initialState).forEach(key => {
    initialState[key] = fromJS(initialState[key]);
  });

  const reducer = combineReducers(reducers);
  const store = createStore(reducer, initialState);

  initComponent = (
    <Provider store={store}>
      <Router children={routes} history={history}/>
    </Provider>
  );
} else {
  console.log('Redux could not be loaded');
  initComponent = <Router children={routes} history={history}/>
}

ReactDOM.render(initComponent, document.getElementById('ReactApp'));
