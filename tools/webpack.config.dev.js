import path from 'path';
import webpack from 'webpack';

const DEBUG = !process.argv.includes('--release');
const VERBOSE = process.argv.includes('--verbose');
const GLOBALS = {
  'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
  __DEV__: DEBUG,
};

const generalConfig = {
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json']
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        plugins: ["transform-decorators-legacy"],
        presets: ["es2015", "stage-1", "react"]
      }
    }, {
      test: /\.css$|\.scss$/,
      loaders: [
        'isomorphic-style-loader',
        'css-loader?modules&localIdentName=[name]_[local]_[hash:base64:3]',
        'postcss-loader'
      ]
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }, {
      test: /\.txt$/,
      loader: 'raw-loader',
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|otf)$/,
      loader: 'url-loader?limit=10000',
    }, {
      test: /\.(eot|ttf|wav|mp3)$/,
      loader: 'file-loader',
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  stats: {
    colors: true,
    reasons: DEBUG,
    hash: VERBOSE,
    version: VERBOSE,
    timings: true,
    chunks: VERBOSE,
    chunkModules: VERBOSE,
    cached: VERBOSE,
    cachedAssets: VERBOSE,
  },

  postcss: function() {
    return [require('autoprefixer'), require('precss')];
  },
};

// CLIENT CONFIG
const clientConfig = Object.assign({
  entry: './src/client/client.js',
  output: {
    filename: 'client.js',
    path: path.join(__dirname, '../build/public/js'),
    publicPath: '/js/'
  }
}, generalConfig);

// SERVER CONFIG
const serverConfig = Object.assign({
  entry: './src/server/server.js',
  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '../build')
  },
  target: 'node',
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  }
}, generalConfig);

export default [clientConfig, serverConfig];
