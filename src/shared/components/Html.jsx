import React, {Component, PropTypes} from 'react';

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
      <html>
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <title>{this.props.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link href="normalize.css" rel="stylesheet" />
          <link href="main.css" rel="stylesheet" />
        </head>
        <body>
          <div id="ReactApp" dangerouslySetInnerHTML={{__html: this.props.body}}/>
          <script src={this.props.script}></script>
        </body>
      </html>
    );
  }
}

export default Html;
