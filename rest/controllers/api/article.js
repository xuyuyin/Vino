/*
 * @Author: Tyreke.Xu 
 * @Date: 2018-01-15 17:32:53 
 * @Last Modified by: Tyreke.Xu
 * @Last Modified time: 2018-01-16 16:11:25
 * @Use 文章逻辑
 */
import { User, Category, TopCategory } from "../../models/index";


class article {
	static async index(ctx) {
		ctx.body = '获取全部文章'
	}

	static async showOneArticle(ctx) {
		ctx.body = '查询单条文章'
	}
}

export default article;