import { logOut } from '../../../actions/loginActions';
import { dispatch } from 'react-redux';
import React, { PropTypes } from 'react'

class Header extends React.Component {
  _logOut() {
    this.props.dispatch(logOut());
  }

  render () {
    return (
      <header>
        <section className="container">
          <section className="row">
            <section className="column">
              <section className="row">
                <hgroup className="column column-25">
                  <img src="/images/wideeyes/we_logo_white.png" width="100%" alt="we_logo"/>
                </hgroup>
                <hgroup className="column column-25 column-offset-50">
                  <button onClick={this._logOut.bind(this)}>Log Out</button>
                </hgroup>
              </section>
            </section>
          </section>
        </section>
      </header>
    )
  }
}

export default Header
