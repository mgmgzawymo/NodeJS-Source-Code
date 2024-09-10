const DB = require('../dbs/post');
const Helper = require('../utils/helper');


const { json } = require("express")

const all = async(req,res,next)=>{
    let posts = await DB.find().populate('user','-password -__v'); // - ထည့်ပြီးမလိုချင်တဲ့ဟာကိုဖျက်ထားလို့ရပါတယ်
    Helper.fMsg(res, "All Posts", posts);
}

const get = async(req,res,next)=>{
    let post = await DB.findById(req.params.id).populate("user");
    if(post){
        Helper.fMsg(res,"Single Post", post);
    }else{
        next(new Error("No Post with that id sir!"))
    }
}

const post = async(req,res,next)=>{
    let result = await new DB(req.body).save();
    Helper.fMsg(res,"Post Added", result);
}

const patch = async(req,res,next)=>{
    res,json({msg:"Update post"})
}
const drop = async(req,res,next)=>{
    res.json({msg:"Delete post"})
}

module.exports = {
    all,
    get,
    post,
    patch,
    drop
}