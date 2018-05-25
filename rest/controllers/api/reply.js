/*
 * @Author: Tyreke.Xu 
 * @Date: 2018-01-16 16:15:35 
 * @Last Modified by: Tyreke.Xu
 * @Last Modified time: 2018-01-16 17:03:12
 * @Use 回复接口逻辑 
 */
import { Reply } from "../../models/index";

class reply {
	static async index(ctx) {
		ctx.body = '查询全部回复'
	}

	static async add(ctx) {
		ctx.body = '添加回复'
	}
}

export default reply;