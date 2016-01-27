import React, {PropTypes} from 'react'

export default (Component, css) => {
  class withStyles extends Component {
    static contextTypes = {
      insertCss: PropTypes.func,
    };

    componentDidMount() {
      if (css) this.context.insertCss(css);
    }

    componentWillUnmount() {}

    render() {
      return (
        <Component {...this.props} />
      )
    }
  }

  return withStyles;
}
