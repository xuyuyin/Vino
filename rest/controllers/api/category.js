/*
 * @Author: Tyreke.Xu 
 * @Date: 2018-01-16 16:06:55 
 * @Last Modified by: Tyreke.Xu
 * @Last Modified time: 2018-01-16 16:11:30
 * @Use 
 */
import { Category } from "../../models/index";

class category {
	static async index(ctx) {
		ctx.body = '查询全部二级分类'
	}

	static async showOneCategory(ctx) {
		ctx.body = '查询单条二级分类'
	}
}

export default category;