import Promise from 'bluebird';
import fs from 'fs';

/**
 * Copies static files such as robots.txt, favicon.ico to the
 * output (build) folder.
 */
async function copy({watch} = {}) {
  const ncp = Promise.promisify(require('ncp'));
  await Promise.all([
    ncp('src/server/views', 'build/public')
  ]);
}

export default copy;
