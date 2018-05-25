/*
 * @Author: Tyreke.Xu 
 * @Date: 2018-01-16 14:30:57 
 * @Last Modified by: Tyreke.Xu
 * @Last Modified time: 2018-02-24 10:48:20
 * @Use 验证管理身份中间件
 */
// import { User } from "../models/index";

export default (ctx, next) => {
	if (ctx.session.isAuth == 2) {
		return next();
	} else {
		console.log('not auth');
		ctx.redirect('/');
	}
}