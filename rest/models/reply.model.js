/*
 * @Author: Tyreke.Xu 
 * @Date: 2018-01-11 16:46:16 
 * @Last Modified by: Tyreke.Xu
 * @Last Modified time: 2018-01-18 17:01:59
 * @Use 回复schema
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const time = Date.parse(new Date());
const ReplySchema = new Schema({
  author: { type: Schema.Types.ObjectId,ref:'User' },
  praise: { type: Number, default: 0 }, 
  reply: [{ type: Schema.Types.ObjectId,ref:'User' }], 
  contents: { type: String, required: true },
  createdAt: { type: String, default: time },
});

export default mongoose.model('Reply', ReplySchema);