/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, {Component, PropTypes} from 'react';

function withStyles(...styles) {
  return (BaseComponent) => {
    return class StyledComponent extends Component {
      componentWillMount() {
        if (typeof document !== 'undefined') {
          this.removeCss = this._insertCss(styles[0]);
        }
      }

      componentWillUnmount() {
        if (this.removeCss !== 'undefined') {
          this.removeCss();
        }
      }

      _insertCss(s) {
        let style = document.createElement('style');
        style.innerHTML += styles[0]._getCss();
        document.head.appendChild(style);
        return this._removeCss.bind(this, style);
      }

      _removeCss(s) {
        document.head.removeChild(s);
      }

      render() {
        return <BaseComponent {...this.props} />;
      }
    };
  }
}

export default withStyles;
