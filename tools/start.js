import clean from './clean';
import copy from './copy';
import run from './run';
import runServer from './runServer';
import webpack from 'webpack';
import webpackConfig from './webpack.config.dev.js';
import webpackMiddleware from 'webpack-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';


async function start() {
  await run(clean); // clean build directory
  await run(copy); // copy static contents from src to build/public

  await new Promise(resolve => {
    const bundler = webpack(webpackConfig);
    const wpMiddleware = webpackMiddleware(bundler, {
      // IMPORTANT: webpack middleware can't access config,
      // so we should provide publicPath by ourselves
      publicPath: webpackConfig[0].output.publicPath,
      // Pretty colored output
      stats: webpackConfig[0].stats
    });

    // const hotMiddlewares = bundler.compilers
    //   .filter(compiler => compiler.options.target !== 'node')
    //   .map(compiler => webpackHotMiddleware(compiler));

    bundler.plugin('done', handleServerBundleComplete);

    function handleServerBundleComplete() {
      runServer((err, time) => {
        if (err) {
          resolve();
        } else {
          console.log(time);
        }
      });
    }
  });
}

export default start;
