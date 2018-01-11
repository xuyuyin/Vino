/*
 * @Author: Tyreke.Xu 
 * @Date: 2018-01-11 16:42:13 
 * @Last Modified by: Tyreke.Xu
 * @Last Modified time: 2018-01-11 16:43:38
 * TopCategory	一级分类schema
 * Category 	二级分类shcema
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  cate_name: { type: String, default: "" },                         // 文章类别
  cate_info: { type: String, default: "" },                         // 类别简述
  cate_parent: { type: Schema.Types.ObjectId, ref: 'TopCategory' }, // 所属顶层分类
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Category', CategorySchema);