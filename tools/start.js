import clean from './clean';
import copy from './copy';
import run from './run';
import runServer from './runServer';
import webpack from 'webpack';
import webpackConfig from './webpack.config.dev';

async function start() {
  await run(clean); // clean build directory
  await run(copy); // copy static contents from src to build/public

  await new Promise(resolve => {
    const compiler = webpack(webpackConfig);
    const watcher = compiler.watch({}, handleServerBundleComplete);

    function handleServerBundleComplete(err, stats) {
      if (err) return resolve(watcher.close());
      process.stdout.write(stats.toString({
        colors: true,
        reasons: true,
        hash: false,
        version: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        cached: false,
        cachedAssets: false,
      }) + '\n');
      runServer();
    }
  });
}

export default start;
