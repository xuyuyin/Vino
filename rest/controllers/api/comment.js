/*
 * @Author: Tyreke.Xu 
 * @Date: 2018-01-16 16:12:38 
 * @Last Modified by: Tyreke.Xu
 * @Last Modified time: 2018-01-23 15:27:56
 * @Use 评论接口逻辑
 */
import { Comment } from "../../models/index";

class comment {
	static async index(ctx) {
		ctx.body = '查询全部评论'
	}

	static async add(ctx) {
		const article_id = ctx.query.id;
		const {contents} = ctx.request.body;
		const author = ctx.session.user;
		await Comment.create({
			article_id,
			contents,
			author
		})
		console.log(article_id);
		console.log(contents);
	}
}

export default comment;