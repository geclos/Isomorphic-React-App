import React from 'react';

const App = ({children}) =>
  <section className="ReactApp">
    { children }
  </section>

App.propTypes = { children: React.PropTypes.string };
App.defaultProps = { children: 'Hello World!' };

export default App;
