import {RoutingContext, match} from 'react-router';
import express from 'express';
import Html from '../shared/components/Html.jsx';
import path from 'path';
import React from 'react';
import ReactDOM from 'react-dom/server';
import routes from './routes';

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res) => {
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      return res.status(500).end('Internal server error');
    } else if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (!renderProps) {
      return res.status(404).end('Not found.');
    }

    let data = {
      title: 'Isomorphic React App',
      body: ReactDOM.renderToString(<RoutingContext {...renderProps}/>)
    };

    let html = ReactDOM.renderToStaticMarkup(<Html {...data} />);

    res.status(200).send('<!doctype html>\n' + html)
  });
});

let server = app.listen(port, () => {
  console.log(`The server is running at http://localhost`, port);
});

// Close server on error
process.on('uncaughtException', (err) => {
  if (server)
    server.close();
  }
)

// Close server when process is terminated
process.on('exit', () => {
  if (server)
    server.close();
  }
);
