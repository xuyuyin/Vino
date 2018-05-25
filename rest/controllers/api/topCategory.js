/*
 * @Author: Tyreke.Xu 
 * @Date: 2018-01-16 16:01:29 
 * @Last Modified by: Tyreke.Xu
 * @Last Modified time: 2018-01-16 16:11:34
 * @Use 一级分类的接口逻辑
 */
import { TopCategory } from "../../models/index";

class topCategory {
	static async index(ctx) {
		ctx.body = '查询全部一级分类'
	}

	static async showOneTopCategory(ctx) {
		ctx.body = '查询单条一级分类'
	}
}

export default topCategory;