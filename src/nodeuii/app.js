'use strict';
import Koa from 'koa';
import serve from 'koa-static';
import router from 'koa-simple-router';
import config from './config/config';
import co from 'co';
import controllers from './controllers/controllerInit';
import errorHandler from './middleware/errorHandler';
import render from 'koa-swig';
const url = require('url')
const app = new Koa();
app.context.render = co.wrap(render({
    root: config.viewDir,
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',
    writeBody: false
}));
errorHandler.error(app); //处理页面错误的处理句柄
// app.use(require('koa-bigpipe'));
controllers.getAllrouters(app, router); //初始化controllers
// app.use(historyApiFallback({index: '/'});
app.use(serve(config.staticDir)); // 静态资源文件
//监听端口🐂😊
const server = app.listen(config.port, () => {
  // server.keepAliveTimeout = 0;
  console.log('ydVueSystem listening on port %s', config.port);
});
module.exports = app;