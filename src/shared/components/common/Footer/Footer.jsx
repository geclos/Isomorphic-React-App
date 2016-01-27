import classNames from 'classnames';
import React, { PropTypes } from 'react'

export default class Footer extends React.Component {
  render () {
    let style = {
      position: 'fixed',
      width: '100%',
      bottom: '0'
    };
    
    return (
      <footer style={style}>
        <article className="container">
          <p className="text-muted">Made with &nbsp;<i className="fa fa-heart"></i>&nbsp; by Wide Eyes</p>
        </article>
      </footer>
    )
  }
}
