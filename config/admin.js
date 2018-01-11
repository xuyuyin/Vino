/*
 * @Author: Tyreke.Xu 
 * @Date: 2018-01-11 16:37:36 
 * @Last Modified by: Tyreke.Xu
 * @Last Modified time: 2018-01-11 16:40:12
 * @Use 后台默认管理员账户设置
 * @  密码需要MD5加密，如需修改密码，请按照格式： md5(密码)
 */
const md5 = require('md5');
module.exports = {
	name: 'Kobe',
	password: md5('700888')
}