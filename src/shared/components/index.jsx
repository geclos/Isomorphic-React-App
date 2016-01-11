import { createStore, combineReducers } from 'redux';
import { fromJS } from 'immutable';
import { Provider } from 'react-redux';
import React, { PropTypes } from 'react';

export default class Index extends React.Component {
  render() {
    return (
      <section className="ReactApp">
        {this.props.children}
      </section>
    );
  }
}
