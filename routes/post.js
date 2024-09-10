const router = require('express').Router();

const controller = require('../controllllers/post');

router.get("/", controller.all);

router.post("/",controller.post);

// ဒီနည်းဖြင့်ရေးလို့လည်းရပါတယ်
router.route("/:id")
.get(controller.get)
.patch(controller.patch)
.delete(controller.drop)

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