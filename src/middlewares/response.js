/*
 * @Author: Tyreke.Xu 
 * @Date: 2018-01-11 15:27:02 
 * @Last Modified by: Tyreke.Xu
 * @Last Modified time: 2018-01-11 15:31:06
 * @Use 统一响应请求中间件
 */
module.exports = async (ctx, next) => {
	ctx.error = ({data, msg, status, orror}) => {
		ctx.status = status || 400;
		ctx.body = {code: -200, msg, data, error};
	}
	ctx.success = ({data, msg}) => {
		ctx.body = {code: 200, msg, data};
	}
	await next();
}