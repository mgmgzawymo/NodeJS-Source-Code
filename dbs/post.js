const mongoose = require('mongoose');
const {Schema} = mongoose;

// user data တွေနှင့်ချိတ်ဆက်ထားတာပါ
const PostSchema = new Schema({
    user: {type: Schema.Types.ObjectId, required: true, ref: "user"},
    title: {type: String, required: true},
    desc: {type: String, required: true},
    create: {type: Date, default: Date.now}
});

const Post = mongoose.model('post', PostSchema);
module.exports = Post;