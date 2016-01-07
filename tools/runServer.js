import cp from 'child_process';
import fs from 'fs';
import path from 'path';
import webpackConfig from './webpack.config.dev';

// Launch or restart the Node.js server
function runServer() {
  let server;
  const {output} = webpackConfig.find(x => x.target === 'node');
  const serverPath = path.join(output.path, output.filename);

  fs.stat(serverPath, function(err, stats) {
    if (err) return;

    if (server) {
      server.kill('SIGTERM');
    }

    server = cp.spawn('node', [serverPath], {
      env: Object.assign({DEBUG: true}, process.env),
      silent: false,
    });

    server.stdout.on('data', x => process.stdout.write('\n' + x));
    server.stderr.on('data', x => process.stderr.write('\n' + x));

    process.on('exit', () => {
      if (server) {
        server.kill('SIGTERM');
      }
    });
  });
}

export default runServer;
