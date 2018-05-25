/*
 * @Author: Tyreke.Xu 
 * @Date: 2018-01-11 16:31:02 
 * @Last Modified by: Tyreke.Xu
 * @Last Modified time: 2018-03-27 15:41:54
 * @Use 文章schema
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const time = Date.parse(new Date());
const ArticleSchema = new Schema({
  title: { type: String, required: true },
  category: { type: Schema.Types.ObjectId,required: true, ref: 'Category' },  // 文章类别
  cover: { type: String,default:null },                        // 文章封面图
  author: {type: Schema.Types.ObjectId,ref:'User' },
  review: { type: Number, default: 0 },                        // 浏览数量
  praise: { num: Number, user: Array },                        // 点赞 num为点赞数量，user为点赞的用户id
  content: { type: String, required: true },
  comments: [{ type: Schema.Types.ObjectId, ref:'Comment'}],   // 评论
  createdAt: { type: String, default: time },
  updatedAt: { type: String, default: time }
});

export default mongoose.model('Article', ArticleSchema);