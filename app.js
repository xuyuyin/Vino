/*
 * @Author: Tyreke.Xu 
 * @Date: 2018-01-11 11:35:28 
 * @Last Modified by: Tyreke.Xu
 * @Last Modified time: 2018-01-11 15:55:40
 * @Use 项目功能的入口
 */
const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const session = require('koa-session');
const db = require('./src/models/db');
const koaBody = require('koa-body');
const koaStatic = require('koa-static');
const views = require('koa-views');

const {backendRouter, frontendRouter} = require('./src/routes/index');
onerror(app);

//cookies
app.keys = ['kobebryant'];
const CONFIG = {
	key: 'koa:kobe',
	maxAge: 604800000,
	overwrite: true,
	sighed: true
};

app.use(logger());
app.use(session(CONFIG, app));
app.use(koaStatic(__dirname + '/public'));
app.use(koaBody({
	formLimit: 1048576,
	textLimit: 1048576, //将text body和form body 的最大字节数设置到1m，json body的最大字节数默认为1m
	multipart: true,
	formidable: {
		keepExtensions: true,
		onFileBegin(name, file) {
			file.path = __dirname + '/public/images/' + file.name;
		},
		uploadDir: __dirname + '/public/images'
	}
}));
app.use(views(__dirname + '/views', {
	extension: 'ejs'
}));

const main = ctx => {
	if (ctx.path === '/favicon.ico') return;
	let n = ctx.session.views || 0;
	ctx.session.views = ++n;
	ctx.body = n + 'views';
}

const about = ctx => {
	ctx.response.type = 'json';
	ctx.response.body = {data: 'about'}
}
router.get('/', main);
router.get('/about', about);

app.use(require('./src/middlewares/response'));
app.use(require('./src/middlewares/filter'));
app
	.use(router.routes())
	.use(router.allowedMethods);

app.on('error', function(err,ctx) {
	console.log(err);
	logger.error('server error', err, ctx);
	ctx.render('error', {message: '服务器错误!', error: err});
});

module.exports = app;