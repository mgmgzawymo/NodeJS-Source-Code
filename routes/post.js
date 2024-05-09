const router = require('express').Router();

router.get("/",(req,res)=>{
    res.json({msg:"All posts"})
});

router.post("/",(req,res)=>{
    res.json(req.body);
});

// ဒီနည်းဖြင့်ရေးလို့လည်းရပါတယ်
router.route("/:id")
.get((req,res)=>res.json({msg: "Get post id is "+ req.params.id}))
.patch((req,res)=>res.json({msg:" Edit post id is " + req.params.id}  ))
.delete((req,res)=>res.json({msg:"Delete id is " + req.params.id}))

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