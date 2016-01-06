import clean from './clean';
import copy from './copy';
import run from './run';
import server from '../src/server/server';

async function start() {
  await run(clean); // clean build directory
  await run(copy); // copy static contents from src to build/public
  await run(server); // start server
}

export default start;
