import classNames from 'classnames';
import React from 'react';
import s from './PageNotFound.scss';

class PageNotFound extends React.Component {
  render () {
    return (
      <html className="no-js" lang="">
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <title>{this.props.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="stylesheet" href="normalize.css" />
          <link rel="stylesheet" href="main.css" />
          <style type="text/css" dangerouslySetInnerHTML={{ __html: s._getCss() }} />
        </head>
        <body className={s.root}>
          <section className={classNames(s.container, s.hCenter, s.vCenter)}>
            <header>
              <h1>Page Not Found :(</h1>
              <h3 className={classNames(s.muted, s.normal)}>
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
