import React, {PropTypes} from 'react';

class App extends React.Component {
  static propTypes = {
    children: PropTypes.object
  };

  render () {
    return (
      <div id="App">
        <h1>Hello world</h1>
        {this.props.children}
      </div>
    );
  }
}

export default App;
