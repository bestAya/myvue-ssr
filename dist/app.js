'use strict';

var _koa = require("koa");

var _koa2 = _interopRequireDefault(_koa);

var _koaStatic = require("koa-static");

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaSimpleRouter = require("koa-simple-router");

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _config = require("./config/config");

var _config2 = _interopRequireDefault(_config);

var _co = require("co");

var _co2 = _interopRequireDefault(_co);

var _controllerInit = require("./controllers/controllerInit");

var _controllerInit2 = _interopRequireDefault(_controllerInit);

var _errorHandler = require("./middleware/errorHandler");

var _errorHandler2 = _interopRequireDefault(_errorHandler);

var _koaSwig = require("koa-swig");

var _koaSwig2 = _interopRequireDefault(_koaSwig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const url = require('url');

const app = new _koa2.default();
app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
  root: _config2.default.viewDir,
  autoescape: true,
  cache: 'memory',
  // disable, set to false
  ext: 'html',
  writeBody: false
}));

_errorHandler2.default.error(app); //处理页面错误的处理句柄
// app.use(require('koa-bigpipe'));


_controllerInit2.default.getAllrouters(app, _koaSimpleRouter2.default); //初始化controllers
// app.use(historyApiFallback({index: '/'});


app.use((0, _koaStatic2.default)(_config2.default.staticDir)); // 静态资源文件
//监听端口🐂😊

const server = app.listen(_config2.default.port, () => {
  // server.keepAliveTimeout = 0;
  console.log('ydVueSystem listening on port %s', _config2.default.port);
});
module.exports = app;