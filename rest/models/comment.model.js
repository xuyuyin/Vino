/*
 * @Author: Tyreke.Xu 
 * @Date: 2018-01-11 16:44:21 
 * @Last Modified by: Tyreke.Xu
 * @Last Modified time: 2018-02-26 15:05:45
 * @Use 评论schema
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const time = Date.parse(new Date());
const CommentSchema = new Schema({
  author: { type: Object },
  article_id: { type: Schema.Types.ObjectId,  ref: 'Article', require: true },
  author_id: { type: Schema.Types.ObjectId, ref: 'User', require: true },
  praise: { type: Number, default: 0 },  	//点赞数
  contents: { type: String, required: true },
  createdAt: { type: String, default: time },
});

export default mongoose.model('Comment', CommentSchema);