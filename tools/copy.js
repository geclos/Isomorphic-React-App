/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import fs from 'fs';
import gaze from 'gaze';
import path from 'path';
import postcss from 'postcss';
import Promise from 'bluebird';
import replace from 'replace';
import syntax from 'postcss-import';

/**
 * Copies static files such as robots.txt, favicon.ico to the
 * output (build) folder.
 */
async function copy({
  watch
} = {}) {
  const ncp = Promise.promisify(require('ncp'));

  try {
    await processCSS();
  } catch (e) {
    throw e;
  }

  await Promise.all([
    ncp('node_modules/normalize.css/', 'build/public/'),
    ncp('node_modules/font-awesome/css/', 'build/public/'),
    ncp('node_modules/font-awesome/fonts/', 'build/public/fonts/'),
    ncp('src/shared/content/', 'build/public/'),
    ncp('package.json', 'build/package.json')
  ]);

  replace({
    regex: '"start".*',
    replacement: '"start": "node server.js"',
    paths: ['build/package.json'],
    recursive: false,
    silent: false,
  });

  if (watch) {
    const watcher = await new Promise((resolve, reject) => {
      gaze(['src/shared/content/**/*.*', 'src/shared/styles/**/*.*'], (err, val) =>
        err ? reject(err) : resolve(val)
      );
    });
    watcher.on('changed', async(file) => {
      await processCSS();
      await ncp('src/shared/content', 'build/public');
    });
  }
}

// Parse main.scss to /src/shared/content
function processCSS(argument) {
  return new Promise((resolve, reject) => {
    fs.readFile('src/shared/styles/main.scss', (err, data) => {
      if (err) reject(err);
      postcss([
        require('precss'),
        require('autoprefixer')
        ])
        .process(data, {
          from: 'src/shared/styles/main.scss',
          to: 'src/shared/styles/main.scss'
        }).then((result) => {
          fs.writeFileSync('src/shared/content/main.css', result.css);
          if (result.map) fs.writeFileSync('src/shared/content/main.css.map', result.map);
          resolve();
        }).catch((err) => {
          reject(err);
        });
    });
  })
}

export default copy;
