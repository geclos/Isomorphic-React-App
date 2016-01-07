import clean from './clean';
import copy from './copy';
import run from './run';
import runServer from './runServer';
import webpack from 'webpack';
import webpackConfig from './webpack.config.dev';
import webpackMiddleware from 'webpack-middleware';


async function start() {
  await run(clean); // clean build directory
  await run(copy); // copy static contents from src to build/public

  await new Promise(resolve => {
    const bundler = webpack(webpackConfig);
    const wpMiddleware = webpackMiddleware(bundler, {
      publicPath: webpackConfig[0].output.publicPath,
      stats: webpackConfig[1].stats
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
