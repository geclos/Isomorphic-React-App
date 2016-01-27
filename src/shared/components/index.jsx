import { createStore, combineReducers } from 'redux';
import { fromJS } from 'immutable';
import { Provider } from 'react-redux';
import Header from './common/Header/Header';
import React, { PropTypes } from 'react';

export default class Index extends React.Component {
  static childContextTypes = {
    insertCss: PropTypes.func
  };

  getChildContext() {
    return {insertCss: (styles) => styles._insertCss()};
  }

  render() {
    return (
      <section className="ReactApp">
        <Header />
        {this.props.children}
      </section>
    );
  }
}
