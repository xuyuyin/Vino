/*
 * @Author: Tyreke.Xu 
 * @Date: 2018-01-12 11:41:08 
 * @Last Modified by: Tyreke.Xu
 * @Last Modified time: 2018-04-03 18:13:02
 * @Use 路由文件
 */
import admin from "../controllers/admin";
import article from "../controllers/api/article";
import category from "../controllers/api/category";
import comment from "../controllers/api/comment";
import reply from "../controllers/api/reply";
import topCategory from "../controllers/api/topCategory";
import user from "../controllers/api/user";
import ueditor from 'koa2-ueditor';
import auth from '../middlewares/auth';
import path from 'path';

const Router = require('koa-router');
const router = new Router();

router
	// 后台管理
	.get('/admin/', admin.showLogin)
	.post('/admin/login', admin.login)

	//博文的增删改查
	.get('/admin/article', auth, admin.article)
	.get('/admin/article/add', auth, admin.showArticleAdd)
	.post('/admin/article/add', auth, admin.articleAdd)
	.get('/admin/article/del', auth, admin.articleDel)
	.get('/admin/article/edit', auth, admin.showArticleEdit)
	.post('/admin/article/edit', auth, admin.articleEdit)

	//分类的增删改查
	.get('/admin/category', auth, admin.categoryIndex)
	.post('/admin/category/add', auth, admin.categoryAdd)
	.get('/admin/category/del', auth, admin.categoryDel)
	.post('/admin/category/edit', auth, admin.categoryEdit)
	
	//以下是前台接口
	//博文展示
	.get('/article', article.index)
	.get('/article/one', article.showOneArticle)
	//评论
	.get('/comment', comment.index)
	.post('/comment/add', comment.add)
	//回复
	.get('/reply', reply.index)
	.post('/reply.add', reply.add)
	//用户登录
	.post('/login', user.login)
	.get('/logout', user.logout)
	.post('/registry', user.registry)

	.all('/ueditor/ue', ueditor())

module.exports = router;