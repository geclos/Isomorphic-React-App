import {connect} from 'react-redux';
import classNames from 'classnames';
import React from 'react';
import withStyles from '../../decorators/withStyles';

@connect(state => ({loginState: state.loginState}))
export default class Home extends React.Component {
  static defaultProps = {
    loginState: {}
  };

  _onClick() {
    window.location = "https://dashboard.wide-eyes.it/signup.html";
  }

  render () {
    const {loginState, dispatch} = this.props

    let style = {
      height: '100%'
    }

    return (
      <section style={style} className={classNames("container", "flex", "h-center", "v-center")}>
        <section>
          <header>
            <h1 className="display-h3 text-light">
              Welcome,
              {typeof loginState === 'function' && loginState.get('isLoggedIn')
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
      </section>
    );
  }
}
