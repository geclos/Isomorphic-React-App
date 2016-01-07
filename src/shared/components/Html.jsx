import React, { Component, PropTypes } from 'react';
import '../styles/base.scss';

class Html extends Component {

  static propTypes = {
    title: PropTypes.string,
    script: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  };

  static defaultProps = {
    title: '',
    description: '',
  };

  trackingCode() {
    return ({ __html:
      `(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=` +
      `function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;` +
      `e=o.createElement(i);r=o.getElementsByTagName(i)[0];` +
      `e.src='https://www.google-analytics.com/analytics.js';` +
      `r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));` +
      `ga('create','${googleAnalyticsId}','auto');ga('send','pageview');`,
    });
  }

  render() {
    return (
      <html className="no-js" lang="">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{this.props.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div id="ReactApp" dangerouslySetInnerHTML={{ __html: this.props.body }} />
        <script src={this.props.script}></script>
      </body>
      </html>
    );
  }

}

export default Html;
