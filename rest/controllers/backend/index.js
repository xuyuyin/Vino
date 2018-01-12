/*
 * @Author: Tyreke.Xu 
 * @Date: 2018-01-12 13:15:52 
 * @Last Modified by: Tyreke.Xu
 * @Last Modified time: 2018-01-12 17:23:38
 * @Use 管理后台文章相关接口逻辑层
 */
import { UserModel } from '../../models/index';
import mongoose from 'mongoose';
import menu from '../config/menu';
import moment from 'moment';
const CategoryModel = mongoose.model('Category');
const TopCategoryModel = mongoose.model('TopCategory');

class BackendMain {
	//登录页面
	static async index(ctx) {
		return ctx.render('login', {title: 'TxBlog后台管理'})
	}
	//首页
	static async home(ctx) {
		console.log(ctx.flash);
		const user = ctx.session.user;
		return ctx.response.body = user;
	}
}

export default BackendMain;