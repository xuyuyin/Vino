/*
 * @Author: Tyreke.Xu 
 * @Date: 2018-01-11 16:16:13 
 * @Last Modified by: Tyreke.Xu
 * @Last Modified time: 2018-01-11 16:36:00
 * @Use 用户schema
 */
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = new Schema({
	name: { type: String, required: true }, // 用户名
	nickname: { type: String, required: true }, // 昵称
	email: { type: String, default: '' },
	avatar: { type: String,default:'' },    // 头像
	profile: { type: String,default:'' },   // 个人简介
	password: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
  });

module.exports = mongoose.model('User', UserSchema);