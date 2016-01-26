import React, {Component, PropTypes} from 'react';

class Html extends Component {
  static propTypes = {
    body: PropTypes.string.isRequired,
    initialState: PropTypes.object.isRequired,
    script: PropTypes.string,
    title: PropTypes.string.isRequired
  };

  static defaultProps = {
    title: ''
  };

  render () {
    let initState = 'window.__INITIAL_STATE__ = ' + JSON.stringify(this.props.initialState);
    return (
      <html>
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <title>{this.props.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link href="font-awesome.min.css" rel="stylesheet" />
          <link href="milligram.css" rel="stylesheet" />
          <script dangerouslySetInnerHTML={{__html: initState}} />
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
