import classNames from 'classnames';
import React, { PropTypes } from 'react'
import s from './Footer.scss';
import withStyles from '../../../decorators/withStyles';

@withStyles(s)
export default class Footer extends React.Component {
  render () {
    return (
      <footer className={s.root}>
        <article className="container">
          <p className="text-muted">Made with &nbsp;<i className="fa fa-heart"></i>&nbsp; by Wide Eyes</p>
        </article>
      </footer>
    )
  }
}
