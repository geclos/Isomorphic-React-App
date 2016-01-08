let instance;

function cssFactory(styles) {
  if (instance) {
    return instance;
  } else {
    instance = _css();
    return instance;
  }

  function _css() {
    const css = [];

    return {
      css: css,
      insertCss: insertCss
    };

    function insertCss(styles) {
      let i = css.push(styles[0]._getCss());
      return removeCss.bind(i);
    }

    function removeCss() {
      // body...
    }
  }
}

export default cssFactory;
