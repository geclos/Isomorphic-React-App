var path = require('path');
var webpack = require('webpack');

console.log(__dirname);

module.exports = {
  entry: [
    './src/client/entry.js'
  ],
  output: {
    filename: 'entry.js',
    path: path.join(__dirname, '../build/js/'),
    publicPath: '/js/'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'shared'],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel']
    }, {
      test: /\.scss$|\.css$/,
      loaders: ["style", "css", "sass"]
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
