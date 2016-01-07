import path from 'path';
import cp from 'child_process';
import webpackConfig from './webpack.config.dev';

// Launch or restart the Node.js server
function runServer(cb) {
  let server;
  const {
    output
  } = webpackConfig.find(x => x.target === 'node');
  const serverPath = path.join(output.path, output.filename);

  if (server) {
    server.kill('SIGTERM');
  }

  server = cp.spawn('node', [serverPath], {
    env: Object.assign({
      DEBUG: true
    }, process.env),
    silent: false,
  });

  server.stdout.on('data', x => process.stdout.write(x));
  server.stderr.on('data', x => process.stderr.write(x));
}

process.on('exit', () => {
  if (server) {
    server.kill('SIGTERM');
  }
});

export default runServer;
