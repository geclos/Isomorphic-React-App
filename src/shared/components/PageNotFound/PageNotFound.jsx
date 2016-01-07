import React from 'react';
import './PageNotFound.scss';

const PageNotFound = () =>
  <section className="PageNotFound container h-center">
    <header className="v-center text-center">
      <h1>Page Not</h1>
      <h3 className="text-muted">
        The page you were looking for is not here. <a href="/">Go home &rarr;.</a>
      </h3>
    </header>
  </section>

export default PageNotFound
