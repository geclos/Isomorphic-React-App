import React, {PropTypes} from 'react';

class Index extends React.Component {
  render () {
    return (
      <section className="Index">
        {this.props.children}
      </section>
    );
  }
}

export default Index;
