/*
 * @Author: Tyreke.Xu 
 * @Date: 2018-01-12 10:31:50 
 * @Last Modified by: Tyreke.Xu
 * @Last Modified time: 2018-01-12 17:51:48
 * @Use 管理后台文章相关的接口逻辑层
 */
import mongoose from 'mongoose';
import md5 from 'md5';
import AdminConfig from '../../../config/admin';
const AdminUserModel = mongoose.model('AdminUser');
const CategoryModel = mongoose.model('Category');
const TopCategoryModel = mongoose.model('TopCategory');

class BackendUser {
	static async signIn(ctx) {
		console.log(1);
		const {name, password} = ctx.request.body;
		if (!name || !password) {
			return ctx.render('error', {
				message: '信息填写错误',
				error: {status: 404}
			})
		}
		if (name == AdminConfig.name && md5(password) == AdminConfig.password) {
			ctx.session.user = {name, password}
			ctx.redirect('/server/home');
		}
		const result = await AdminUserModel.findOne({name,password: md5(password)});
		if (!result) {
			return ctx.render('error', {
				message: '用户或密码错误',
				error: {status: 400}
			})
		}
		ctx.session.user = result;
		ctx.redirect('/server/home');
	}
}

export default BackendUser;