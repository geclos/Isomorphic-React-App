import { dispatch } from 'react-redux';
import { logOut } from '../../../actions/loginActions';
import React, { PropTypes } from 'react'
import s from './Header.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles'

class Header extends React.Component {
  static propTypes = {
    logout: PropTypes.func,
  };

  render () {
    const {logout} = this.props;
    const style = {
      paddingTop: s.su,
      paddingBottom: s.su,
      position: 'fixed',
      width: '100%',
      zIndex: 1,
    };

    return (
      <header className={s.root}>
        <section className="container">
          <section className="row">
            <section className="column">
              <section className="row">
                <hgroup className="column column-25">
                  <img src="/images/wideeyes/we_logo_white.png" width="100%" alt="we_logo"/>
                </hgroup>
                <hgroup className="column column-25 column-offset-50 text-right">
                  <button className="button button-clear" onClick={logout}>
                    Log Out
                  </button>
                </hgroup>
              </section>
            </section>
          </section>
        </section>
      </header>
    )
  }
}

export default withStyles(Header, s)
