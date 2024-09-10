require('dotenv').config();

const path = require('path');// user သုံးလို့ရအောင်ခွင့်ပြုချက်ပေးခြင်း လမ်းကြောင်း
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');

mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`);

// get, post, put, patch, delete
//  192.168.45.131:3000/ <=> localhost:3000/

app.use(express.json());
app.use(fileUpload());

// user သုံးလို့ရအောင်ခွင့်ပြုချက်ပေးခြင်း
app.use('/uploads', express.static(path.join(__dirname,'uploads')));

const catRoute = require('./routes/cat');
const userRoute = require('./routes/user');
const postRoute = require('./routes/post');
// const {saveFile, saveFiles, deleteFile} = require('./utils/gallery');

// Middleware
// const funky = (req,res,next)=>{
//     console.log(req.warningMsg);
//     res.json({msg:"Comming with Get method"});
// }

// const isLogged = (req,res,next)=>{
//     if(1+1 == 2) {
//         req.successMsg = "We are good to go"
//         next();
//     } else{
//         next(new Error("You are not logged in"))
//     }
// }

// const isAdmin = (req,res,next)=>{
//     if(4==4){
//         console.log(req.successMsg);
//         req.warningMsg = "this is warning message";
//         next();
//     }else{
//         next(new Error(" Only Admin can access this route"));
//     }
// }

// app.get("/users", isLogged, isAdmin, funky);

// upload file
// app.post('/gallery', saveFiles, (req,res,next)=>{
//     res.status(200).json({msg: "Files Uploaded","filenames": req.body.images});
// })

// delete file
// app.post('/gallery',  async(req,res,next)=>{
//     await deleteFile(req.body.name);
//     res.status(200).json({msg: "File Deleted"});
// })

app.use('/cats',catRoute);
app.use("/posts", postRoute);
app.use("/users",userRoute);


app.use((err,req,res,next) => {
    err.status = err.sattus || 200;
    res.status(err.status).json({
        cons:false,
        msg:err.message
    })
})


app.listen(process.env.PORT, console.log(`Server is running at port  ${process.env.PORT}`))