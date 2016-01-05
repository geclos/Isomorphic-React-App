var config = require('./webpack.config.dev.js');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var compiler = webpack(config);
var server = new WebpackDevServer(compiler);
server.listen(8080);
