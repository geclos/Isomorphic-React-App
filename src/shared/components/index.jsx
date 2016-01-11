import { createStore, combineReducers } from 'redux';
import { fromJS } from 'immutable';
import { Provider } from 'react-redux';
import Header from './core/Header/Header.jsx';
import Footer from './core/Footer/Footer.jsx';
import React, { PropTypes } from 'react';

const Index = (props) =>
  <section className="ReactApp">
    <Header />
    {props.children}
    <Footer />
  </section>


export default Index;
