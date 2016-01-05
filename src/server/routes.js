import App from '../shared/components/App.jsx';
// import NotFoundPage from '../shared/components/core/NotFoundPage/NotFoundPage.jsx';
import React from 'react';
import ReactDOM from 'react-dom/server';

const title = 'React App Generator'

export default(app) => {
  app.get('/', (req, res) => {
    let ReactApp = ReactDOM.renderToString(< App />);
    res.render('index.jade', {
      content: ReactApp,
      title: title
    });
  });

  // app.get('*', function(req, res) {
	// 	let ReactApp = ReactDOM.renderToString(<NotFoundPage />);
  //   res.render('index.jade', {
  //     content: ReactApp,
  //     title: title
  //   });
  // });
};
