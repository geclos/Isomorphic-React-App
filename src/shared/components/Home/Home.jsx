import {connect} from 'react-redux';
import {logIn} from '../../actions/loginActions';
import classNames from 'classnames';
import Footer from '../core/Footer/Footer.jsx';
import Header from '../core/Header/Header.jsx';
import React from 'react';

@connect(state => ({login: state.login}))
export default class Home extends React.Component {
  static defaultProps = {
    login: {}
  };

  componentDidMount() {
    if (typeof this.props.login.get === 'function' && !this.props.login.get('isLoggedIn')) {
      this.props.dispatch(logIn());
    }
  }

  _onClick() {
    window.location = "https://dashboard.wide-eyes.it/signup.html";
  }

  render() {
    const {login, dispatch} = this.props

    return (
      <section>
        <Header {...this.props}/>
        <section className="container">
          <header className="row row-center">
            <hgroup className="column col-center">
              <h1>
                Welcome,
                {typeof login.get === 'function' && login.get('isLoggedIn')
                  ? 'Gerard'
                  : 'User'}
              </h1>
              <h2>
                It is time to kickstart your Wide Eyes account.
              </h2>
              <button onClick={this._onClick.bind(this)}>
                Let's begin &rarr;
              </button>
            </hgroup>
          </header>
        </section>
        <Footer/>
      </section>
    );
  }
}
