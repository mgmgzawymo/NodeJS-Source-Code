const DB = require('../dbs/user');
const Helper = require('../utils/helper');

const all = async(req,res,next)=>{
    let users = await DB.find();
    Helper.fMsg(res, "All Users", users);

    // res.status(200).json({
    //     con:true,
    //     msg:"All Users",
    //     result:[]
    // });
}

const add = async(req,res,next)=>{
    let saveUser = new DB (req.body);
    let result = await saveUser.save();
    Helper.fMsg(res, "User Added", result);
    // res.status(200).json({
    //     con: true,
    //     msg:"New Post",
    //      result: req.body
    // });
}

const get = async(req,res,next)=>{
    let id = req.params.id;
    let user = await DB.findById(id);
    Helper.fMsg(res, "Single User Get", user);
    // res.json({msg: "Single User Get"});
}

const patch = async(req,res,next)=>{
    let user =await DB.findById(req.params.id);
    if(user) {
        await DB.findByIdAndUpdate(user._id, req.body);
        let retUser = await DB.findById(user._id);
        Helper.fMsg(res, "User Updated", retUser);
    }else {
       next(new Error("Error, No user with that id")) // error ဖမ်းတာပါ
    }
    // res.json({msg:"Update user", result:req.body});
}

const drop = async(req,res,next)=>{
    await DB.findByIdAndDelete(req.params.id);
    Helper.fMsg(res, "User Deleted");
    // res.json({msg:"Drop user", id : req.params.id});
}

module.exports  = {
    all,
    add,
    get,
    patch,
    drop
}