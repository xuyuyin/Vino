/*
 * @Author: Tyreke.Xu 
 * @Date: 2018-01-12 11:41:08 
 * @Last Modified by: Tyreke.Xu
 * @Last Modified time: 2018-01-12 17:44:20
 * @Use 管理后台的路由
 */
import { BackendMain, BackendUser } from '../controllers/backend.export';
console.log(BackendUser.signIn);
const Router = require('koa-router');
const router = new Router();

router
  .get('/', BackendMain.index)                                                 // 管理后台首页
  
  // 用户相关
  .post('/server/login', BackendUser.signIn)                                   // 用户登录验证接口
//   .post('/server/user/create_user', BackendUser.create_user)                   // 添加管理员
//   .get('/server/signout', BackendUser.signOut)                                 // 退出登录
//   .get('/server/user', BackendMain.user)                                       // 用户管理主页
 
  // 文章相关
//   .get('/server/home', BackendMain.home)                                       // 管理后台主页
//   .get('/server/category', BackendMain.category)                               // 分类管理主页
//   .get('/server/article', BackendMain.article)                                 // 文章管理主页
//   .post('/server/article/create_tcate', BackendArticle.create_tcate)           // 创建一级分类
//   .post('/server/article/create_acate', BackendArticle.create_acate)           // 创建二级分类
//   .post('/server/article/put_tcate', BackendArticle.put_tcate)                 // 编辑一级分类
//   .post('/server/article/put_acate', BackendArticle.put_acate)                 // 编辑二级分类
//   .get('/server/article/delete_cate/:id', BackendArticle.delete_cate);         // 删除分类


module.exports = router;