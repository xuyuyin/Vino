/*
 * @Author: Tyreke.Xu 
 * @Date: 2018-01-16 17:06:32 
 * @Last Modified by: Tyreke.Xu
 * @Last Modified time: 2018-01-16 17:09:22
 * @Use 用户登录等逻辑
 */
import { User } from "../../models/index";

class user {
	static async login(ctx) {
		ctx.body = {data: '用户登录'}
	}

	static async logout(ctx) {
		ctx.body = '用户登出'
	}

	static async registry(ctx) {
		ctx.body = {data: '用户注册'}
	}
}

export default user;