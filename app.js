/*
 * @Author: Tyreke.Xu 
 * @Date: 2018-01-11 11:35:28 
 * @Last Modified by: Tyreke.Xu
 * @Last Modified time: 2018-04-04 14:17:22
 * @Use 项目功能的入口
 */
const Koa = require('koa');
const app = new Koa();
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const session = require('koa-session');
const db = require('./rest/models/db');
const koaBody = require('koa-body');
const koaStatic = require('koa-static');
const views = require('koa-views');
const path = require('path');

const router = require('./rest/routes/index');
onerror(app);

//cookies
app.keys = ['kobebryant'];
const CONFIG = {
	key: 'koa:kobe',
	maxAge: 604800000,
	overwrite: true,
	sighed: true
};

app.use(bodyparser({
	enableTypes:['json', 'form', 'text']
  }));
app.use(json());
app.use(logger());
app.use(session(CONFIG, app));
app.use(koaStatic(path.join(__dirname, 'public')));
// app.use(koaBody({
// 	formLimit: 1048576,
// 	textLimit: 1048576, //将text body和form body 的最大字节数设置到1m，json body的最大字节数默认为1m
// 	multipart: true,
// 	formidable: {
// 		keepExtensions: true,
// 		onFileBegin(name, file) {
// 			file.path = __dirname + '/public/upload/' + file.name;
// 		},
// 		uploadDir: __dirname + '/public/upload'
// 	}
// }));
app.use(views(path.join(__dirname, 'views'), {
	extension: 'ejs'
}));

app.use(require('./rest/middlewares/response'));
app.use(require('./rest/middlewares/filter'));
app
	.use(router.routes())
	.use(router.allowedMethods());

app.on('error', function(err,ctx) {
	console.log(err);
	// logger.error('server error', err, ctx);
	ctx.render('error', {message: '服务器错误!', error: err});
});

process.on('unhandledRejection', (reason, p) => {
	// console.log(reason);
	console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
	// application specific logging, throwing an error, or other logic here
});

module.exports = app;