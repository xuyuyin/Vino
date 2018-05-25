/*
 * @Author: Tyreke.Xu 
 * @Date: 2018-01-12 13:15:52 
 * @Last Modified by: Tyreke.Xu
 * @Last Modified time: 2018-01-16 15:55:28
 * @Use 前台接口逻辑层 
 */
import { UserModel } from '../../models/index';
import mongoose from 'mongoose';
import menu from '../config/menu';
import moment from 'moment';
const CategoryModel = mongoose.model('Category');
const TopCategoryModel = mongoose.model('TopCategory');

class index {
	//网站
	static async index(ctx, next) {
		ctx.redirect('/article');
		await next();
	}
	//首页
	static async showLogin(ctx) {
		
	}
	//文章管理
	static async article(ctx) {
		let index = 1;
		const { type, item } = ctx.query;
		if (item) {
			index = item;
		}
		const user = ctx.session.user;
		return ctx.render('article', {
			title: 'Vino管理平台',
			message: '文章管理',
			user,
			index,
			menu: menu[type]
		});
	}
}

export default index;