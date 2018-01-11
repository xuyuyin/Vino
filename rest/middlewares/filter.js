/*
 * @Author: Tyreke.Xu 
 * @Date: 2018-01-11 15:40:19 
 * @Last Modified by: Tyreke.Xu
 * @Last Modified time: 2018-01-11 15:53:38
 * @Use 统一try catch 处理中间件
 * @tracer用于捕获内部错误，输出日志信息 https://www.npmjs.com/package/tracer
 */
const tracer = require('tracer');
const logger = tracer.colorConsole({
	lever: 'warn',
	format: '{{timestamp}} <{{title}}> {{file}}(#{{line}}): {{message}}',
	file: 'error.log',
	path: __dirname,
	dateformat: "HH:MM:ss.L" 
})

module.exports = async (ctx, next) => {
	try {
		await next();
	} catch (err) {
		if (!err) {
			return ctx.error({msg: new Error('未知错误！')});
		}
		if (typeof(err) == 'string') {
			return ctx.error({msg: new Error(err)});
		}
		logger.error(err.stack);
		ctx.error({msg: '服务器错误！', error: err, status: ctx.status})
	}
}