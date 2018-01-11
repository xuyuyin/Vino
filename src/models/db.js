/*
 * @Author: Tyreke.Xu 
 * @Date: 2018-01-11 13:52:38 
 * @Last Modified by: Tyreke.Xu
 * @Last Modified time: 2018-01-11 14:00:47
 * @Use 数据库连接
 */
const mongoose = require('mongoose');
const config = require('../../config/common');
const dbConfig = config[process.env.NODE_ENV || 'development'];

mongoose.connect(dbConfig.mongo.uri);

mongoose.connection.on('connected', () => {
	console.log('Mongoose connection open to' + dbConfig.mongo.uri);
})

mongoose.connection.on('error', err => {
	console.log('Mongoose connection error:' + err);
})

mongoose.connection.on('disconnected', ()=> {
	console.log('Mongoose connection disconnected');
})