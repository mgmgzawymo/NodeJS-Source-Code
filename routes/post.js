const router = require('express').Router();

const controller = require('../controllllers/post');
const {validateToken,validateBody} = require('../utils/validator');
const {Schema} = require('../utils/schema');
const {saveFile} = require('../utils/gallery');

router.get("/", controller.all);

router.post("/",validateToken,saveFile,validateBody(Schema.PostSchema),controller.post);

router.get('/bycat/:id',controller.byCatId);
router.get('/byuser/:id', controller.byUserId);

// ဒီနည်းဖြင့်ရေးလို့လည်းရပါတယ်
router.route("/:id")
.get(controller.get)
.patch(validateToken,controller.patch)
.delete(validateToken,controller.drop)

// router.get("/:id",(req,res)=>{
//     let id = req.params.id;
//     res.json({msg: "Get post id is "+ id})
// });

// router.patch("/:id", (req,res)=>{
//     res.json({msg:" Edit post id is " + req.params.id}  )
// })

// router.delete("/:id",(req,res)=>{
//     let id = req.params.id;
//     res.json({msg:"Delete id is " + id})
// });

module.exports = router;