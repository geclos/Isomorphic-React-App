import classNames from 'classnames';
import React from 'react';

class PageNotFound extends React.Component {
  render () {
    return (
      <html className="no-js" lang="">
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <title>{this.props.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </head>
        <body>
          <section>
            <header>
              <h1>Page Not</h1>
              <h3>
                The page you were looking for is not here. <a href="/">Go home &rarr;.</a>
              </h3>
            </header>
          </section>
        </body>
      </html>

    );
  }
}
export default PageNotFound
