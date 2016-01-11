import {connect} from 'react-redux';
import {logIn} from '../../actions/loginActions';
import classNames from 'classnames';
import React from 'react';
import Header from '../core/Header/Header.jsx';
import Footer from '../core/Footer/Footer.jsx';
import withStyles from '../../decorators/withStyles';

@connect(state => ({loginState: state.loginState}))
export default class Home extends React.Component {
  static defaultProps = {
    loginState: {}
  };

  componentDidMount () {
    if (typeof this.props.loginState.get === 'function' && !this.props.loginState.get('isLoggedIn')) {
      this.props.dispatch(logIn());
    }
  }

  _onClick () {
    window.location = "https://dashboard.wide-eyes.it/signup.html";
  }

  render () {
    const {loginState, dispatch} = this.props

    let style = {
      height: '100%'
    }

    return (
      <section style={style}>
        <Header {...this.props} />
        <section style={style} className={classNames("container", "flex", "h-center", "v-center")}>
          <header>
            <h1 className="display-h3 text-light">
              Welcome, {typeof loginState.get === 'function' && loginState.get('isLoggedIn')
                ? 'Gerard'
                : 'User'}
            </h1>
            <h2 className="text-muted bottom-spaced">
              It is time to kickstart your Wide Eyes account.
            </h2>
            <button onClick={this._onClick.bind(this)} className="btn btn-primary btn-bg">
              <h4 className="no-margin">Let's begin &rarr;</h4>
            </button>
          </header>
        </section>
        <Footer />
      </section>
    );
  }
}
