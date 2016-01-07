import del from 'del';
import fs from 'fs';

/**
 * Cleans up the output (build) directory.
 */
async function clean() {
  await del(['build/*'], { dot: true });
  await fs.stat('build/public', function (err, stats) {
    if (err) fs.mkdir('build/public');
  })
}

export default clean;
