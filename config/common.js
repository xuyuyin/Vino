/*
 * @Author: Tyreke.Xu 
 * @Date: 2018-01-11 11:03:55 
 * @Last Modified by: Tyreke.Xu
 * @Last Modified time: 2018-01-11 11:16:02
 * @Use 项目配置文件
 * @development 开发环境配置
 * @production	生产环境配置
 * @Mongo && port  数据库连接配置
 * @tCos	腾讯云对象存储配置
 */
module.exports = {
	development: {
		mongo: {
			uri : 'mongodb://localhost:27017/test'
		},
		port: '3222',
		tCos : {
			Url: 'https://sts.api.qcloud.com/v2/index.php',
			Domain: 'sts.api.qcloud.com',
			SecretId: 'AKIDxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
			SecretKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
			AppId: '1250000000',
			Bucket: 'test',
		}
	},
	production: {
		mongo: {
			uri : 'mongodb://localhost:27017/txblog'
		},
		port: '3222',
		tCos : {
			Url: 'https://sts.api.qcloud.com/v2/index.php',
			Domain: 'sts.api.qcloud.com',
			SecretId: 'AKIDxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
			SecretKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
			AppId: '1250000000',
			Bucket: 'test',
		}
	}
}