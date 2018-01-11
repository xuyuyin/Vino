/*
 * @Author: Tyreke.Xu 
 * @Date: 2018-01-11 11:22:19 
 * @Last Modified by: Tyreke.Xu
 * @Last Modified time: 2018-01-11 11:42:40
 * @Use 使用runkoa启动koa
 */
const current_path = process.cwd();

require('runkoa')(current_path + '/bin/www.js');
