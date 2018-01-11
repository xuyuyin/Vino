/*
 * @Author: Tyreke.Xu 
 * @Date: 2018-01-11 16:52:18 
 * @Last Modified by: Tyreke.Xu
 * @Last Modified time: 2018-01-11 16:53:10
 * @Use 一级分类schema
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TopCategorySchema = new Schema({
  tcate_name: { type: String, default: "" },   // 顶层类别，也就是一级类别
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('TopCategory', TopCategorySchema);