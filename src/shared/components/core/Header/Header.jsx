import React, { PropTypes } from 'react'
import s from './Header.scss'
import withStyles from '../../../decorators/withStyles'

@withStyles(s)
class Header extends React.Component {
  render () {
    return (
      <header className={s.root}>
        <section className="container">
          <section className="grid">
            <hgroup className="col-xs-1-2 col-md-1-3 col-lg-1-4">
              <img src="/images/wideeyes/we_logo_white.png" alt="we_logo"/>
            </hgroup>
          </section>
        </section>
      </header>
    )
  }
}

export default Header
