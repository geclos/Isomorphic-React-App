import React, {Component, PropTypes} from 'react';
import s from '../styles/base.scss';

class Html extends Component {
  static propTypes = {
    body: PropTypes.string.isRequired,
    script: PropTypes.string,
    title: PropTypes.string.isRequired
  };

  static defaultProps = {
    title: ''
  };

  render () {
    return (
      <html className="no-js" lang="">
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <title>{this.props.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <style type="text/css" dangerouslySetInnerHTML={{ __html: s._getCss() }} />
        </head>
        <body className={s.body}>
          <div id="ReactApp" dangerouslySetInnerHTML={{__html: this.props.body}}/>
          <script src={this.props.script}></script>
        </body>
      </html>
    );
  }
}

export default Html;
