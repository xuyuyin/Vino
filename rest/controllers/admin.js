/*
 * @Author: Tyreke.Xu 
 * @Date: 2018-01-12 10:31:50 
 * @Last Modified by: Tyreke.Xu
 * @Last Modified time: 2018-04-04 14:52:15
 * @Use 管理后台文章相关的接口逻辑层
 */

import md5 from 'md5';
import AdminConfig from '../../config/admin';
import { Article, Category, Comment, Reply, TopCategory, Admin, User } from "../models/index";
import menu from "./config/menu";

class admin {
	static async showLogin(ctx) {
		return ctx.render('login', { title: 'Vino管理平台' })
	}

	static async login(ctx) {
		const {name, password} = ctx.request.body;
		if (!name || !password) {
			return ctx.render('error', {
				message: '信息填写错误',
				error: {status: 404}
			})
		}
		if (name == AdminConfig.name && md5(password) == AdminConfig.password) {
			ctx.session.user = {name, password}
			ctx.session.isAuth = 2;
			console.log('Kobe');
			return ctx.redirect('/admin/article');
		}
		const result = await Admin.findOne({name,password: md5(password)});
		if (!result) {
			return ctx.render('error', {
				message: '用户或密码错误',
				error: {status: 400}
			})
		}
		ctx.session.user = result;
		ctx.session.isAuth = 2;
		console.log('other admin');
		return ctx.redirect('/admin/article');
	}

	//博文的增删改查
	//博文首页
	static async article(ctx) {
		const user = ctx.session.user;
		const result = await Article.find().sort('-updatedAt').populate('category comments', 'cate_name _id').exec(function(err, doc) {})
		return ctx.render('home', {
			user,
			message: 'shouyebowen',
			title: 'Vino管理平台',
			docs: result,
		})
		
	}
	//新建文章
	static async showArticleAdd(ctx) {
		const user = ctx.session.user;
		const category = await Category.find({});

		return ctx.render('article/add', {
			user,
			category,
			title: 'Vino管理平台',
			message:'add a article',
		})
	}

	static async articleAdd(ctx) {
		const {title, content, category, cover} = ctx.request.body;
		await Article.create({ title, content, category, cover });
		return ctx.redirect('/admin/article')		
	}

	//修改文章
	static async showArticleEdit(ctx) {
		const _id = ctx.query.id;
		const user = ctx.session.user;
		const category = await Category.find({});
		const result = await Article.findOne({_id});
		return ctx.render('article/edit', {
			user,
			category,
			title: '修改文章',
			doc: result
		})
	}
	
	static async articleEdit(ctx) {
		const { title, content, category, cover, _id } = ctx.request.body;
		const updatedAt = Date.parse(new Date());
		console.log(title);
		console.log(content);
		console.log(cover);
		await Article.findOneAndUpdate({ _id }, { title, content, cover, category, updatedAt });
		return ctx.redirect('/admin/article');
	}

	static async articleDel(ctx) {
		const id = ctx.query.id;
		await Article.remove({
			_id: id
		})
		return ctx.redirect('/admin/article')
	}

	//一级分类的增删改查
	static async categoryIndex(ctx) {
		const user = ctx.session.user;
		const result = await Category.find().sort('-createdAt');
		return ctx.render('category/index', {
			user,
			title: '分类列表',
			cats: result
		})
	}

	static async categoryAdd(ctx) {
		const { cate_name, cate_info } = ctx.request.body;
		await Category.create({cate_name, cate_info});
		return ctx.redirect('/admin/category')
	}

	static async categoryEdit(ctx) {
		const { cate_name, cate_info, _id } = ctx.request.body;
		const updatedAt = Date.parse(new Date());
		await Category.findOneAndUpdate({ _id }, { cate_name, cate_info, updatedAt });
		return ctx.redirect('/admin/category');
	}

	static async categoryDel(ctx) {
		const id = ctx.query.id;
		await Category.remove({
			_id: id
		})
		return ctx.redirect('/admin/category')
	}
}

export default admin;