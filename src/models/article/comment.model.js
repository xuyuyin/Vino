/*
 * @Author: Tyreke.Xu 
 * @Date: 2018-01-11 16:44:21 
 * @Last Modified by: Tyreke.Xu
 * @Last Modified time: 2018-01-11 16:45:55
 * @Use 评论schema
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  author: { type: Object },
  article_id: { type: Schema.Types.ObjectId, require: true },
  comment_title: { type: String },
  praise: { type: Number, default: 0 },  	//点赞数
  contents: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Comment', CommentSchema);