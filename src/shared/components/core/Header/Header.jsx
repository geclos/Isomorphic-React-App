import { logOut } from '../../../actions/loginActions';
import { dispatch } from 'react-redux';
import React, { PropTypes } from 'react'
import s from './Header.scss'
import withStyles from '../../../decorators/withStyles'

@withStyles(s)
class Header extends React.Component {
  _logOut() {
    this.props.dispatch(logOut());
  }

  render () {
    let style = {
      position: 'fixed',
      top: '0',
      width: '100%'
    };

    return (
      <header style={style} className={s.root}>
        <section className="container">
          <section className="grid">
            <section className="row">
              <hgroup className="col-xs-1-2 col-md-1-3 col-lg-1-4">
                <img src="/images/wideeyes/we_logo_white.png" alt="we_logo"/>
              </hgroup>
              <hgroup className="col-xs-1-2 col-md-1-3 col-lg-1-4 pull-right">
                <button onClick={this._logOut.bind(this)} className="btn btn-default btn-outline pull-right">Log Out</button>
              </hgroup>
            </section>
          </section>
        </section>
      </header>
    )
  }
}

export default Header
