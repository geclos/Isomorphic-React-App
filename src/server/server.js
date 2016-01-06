import bodyParser from 'body-parser';
import config from '../../tools/webpack.config.dev.js';
import express from 'express';
import path from 'path';
import routes from './routes';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

async function server() {
  const app = express();
  const compiler = webpack(config);
  const port = 3000;

  app.use(bodyParser.json({limit: '50mb'}));
  app.use(express.static(path.join(__dirname, '../../build')));
  app.use(webpackDevMiddleware(compiler, {
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    },
    stats: {
      colors: true
    }
  }));

  app.set('views', path.join(__dirname, '/views'));
  app.set('view engine', 'jade');

  routes(app);

  await app.listen(port, function () {
    console.log('Server is Up and Running at Port : ' + port);
  });
}

export default server;
