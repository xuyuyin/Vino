/*
 * @Author: Tyreke.Xu 
 * @Date: 2018-01-11 16:42:13 
 * @Last Modified by: Tyreke.Xu
 * @Last Modified time: 2018-03-27 16:06:44
 * TopCategory	一级分类schema
 * Category 	二级分类shcema
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const time = Date.parse(new Date());
const CategorySchema = new Schema({
  cate_name: { type: String, default: "" },                         // 文章类别
  cate_info: { type: String, default: "" },                         // 类别简述
  createdAt: { type: String, default: time },
  updatedAt: { type: String, default: time }
});

export default mongoose.model('Category', CategorySchema);