import del from 'del';

/**
 * Cleans up the output (build) directory.
 */
async function clean() {
  await del(['../build/*'], { dot: true });
  // await fs.makeDir('build/public');
}

export default clean;
