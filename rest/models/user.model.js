/*
 * @Author: Tyreke.Xu 
 * @Date: 2018-01-11 16:16:13 
 * @Last Modified by: Tyreke.Xu
 * @Last Modified time: 2018-01-18 17:04:31
 * @Use 用户schema
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const time = Date.parse(new Date());
const UserSchema = new Schema({
	name: { type: String, required: true }, // 用户名
	nickname: { type: String, required: true }, // 昵称
	email: { type: String, default: '' },
	avatar: { type: String,default:'' },    // 头像
	profile: { type: String,default:'' },   // 个人简介
	password: { type: String, required: true },
	createdAt: { type: String, default: time },
	updatedAt: { type: String, default: time },
	articles: { type: Schema.Types.ObjectId, ref: 'Article'},	//发布的文章
	comments: { type: Schema.Types.ObjectId, ref: 'Comment'}	//发布的评论
  });

module.exports = mongoose.model('User', UserSchema);