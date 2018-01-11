/*
 * @Author: Tyreke.Xu 
 * @Date: 2018-01-11 16:46:16 
 * @Last Modified by: Tyreke.Xu
 * @Last Modified time: 2018-01-11 16:53:21
 * @Use 回复schema
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReplySchema = new Schema({
  author: { type: Schema.Types.ObjectId,ref:'User' },
  coment_title: { type: String },
  praise: { type: Number, default: 0 }, 
  reply: [{ type: Schema.Types.ObjectId,ref:'User' }], 
  contents: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Reply', ReplySchema);