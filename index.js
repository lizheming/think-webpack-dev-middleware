var connect = require('http-connect');
var webpackDevMiddleware = require('webpack-dev-middleware');

module.exports = function(compiler, options) {
  return function(http) {
    var app = new connect(http);
    app.use(webpackDevMiddleware(compiler, options));
  };
}