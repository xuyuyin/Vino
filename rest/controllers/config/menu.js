/*
 * @Author: Tyreke.Xu 
 * @Date: 2018-01-12 11:21:00 
 * @Last Modified by: Tyreke.Xu
 * @Last Modified time: 2018-01-12 11:25:54
 * @Use 管理后台侧边栏菜单配置文件
 */
export default {
	// 分类管理
	category: [
	 { 
	   label:'一级分类',
	   route: '/server/category?type=category&model=TopCategory&item=1'
	 },{ 
	   label:'二级分类',
	   route: '/server/category?type=category&model=Category&item=2'
	 }],
	 // 文章管理
	 article: [
	 { 
	   label:'文章列表',
	   route: '/server/article?type=article&item=1'
	 },{ 
	   label:'评论管理',
	   route: '/server/article?type=article&item=2'
	 }],
	 // 用户管理
	 user: [
	 { 
	   label:'用户列表',
	   route: '/server/user?type=user&item=1'
	 },{ 
	   label:'权限管理',
	   route: '/server/user?type=user&item=2'
	 }],
 }
 