var connect = require('http-connect');
var webpackDevMiddleware = require('webpack-dev-middleware');

module.exports = function(compiler, options) {
  return function(http) {
    return new Promise(function(resolve, reject) {
      var app = new connect(http);
      app.use(webpackDevMiddleware(compiler, options));
      app.use(resolve);
    });
  };
}