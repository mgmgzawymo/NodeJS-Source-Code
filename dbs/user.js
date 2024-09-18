
//users အတွက် လိုအပ်တဲ့ table data များ

const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new  Schema({
    "name": {type: String, require: true, unique: true},
    "email": {type: String, require: true, unique: true},
    "phone": {type: String, require: true, unique: true},
    "password": {type: String, require: true},
    "created" : {type:Date, default:Date.now}
});

const User = mongoose.model("user", UserSchema);

module.exports = User;