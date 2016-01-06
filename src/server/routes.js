import App from '../shared/components/App.jsx';
import PageNotFound from '../shared/components/core/PageNotFound/PageNotFound.jsx';
import React from 'react';
import ReactDOM from 'react-dom/server';

const scriptSrc = process.env.DEBUG ? '/app.js' : '/js/app.js'
const cssSrc = '/css/base.css'
const title = 'React App Generator'

export default(app) => {
  app.get('/', (req, res) => {
    let ReactApp = ReactDOM.renderToString(<App />);
    res.render('index.jade', {
      content: ReactApp,
      scriptSrc: scriptSrc,
      title: title
    });
  });

  app.get('*', function(req, res) {
		let NotFound = ReactDOM.renderToString(<PageNotFound />);
    res.render('PageNotFound.jade', {
      content: NotFound,
      cssSrc: cssSrc,
      title: title
    });
  });
};
