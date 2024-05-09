const router = require('express').Router();

router.get("/", (req,res)=> {
    res.json({msg: "All Users"});
});

router.get("/:id", (req, res)=>{
    let id = req.params.id;
    res.json({msg:"Request id is " + id})
});

router.post("/", (req,res)=>{
    res.json(req.body);
});

router.patch("/:id", (req,res) => {
    let id = req.params.id;
    res.json({msg:"Edit id is " + id})
});

router.delete("/:id", (req,res)=>{
    let id = req.params.id;
    res.json({msg:"Delete id is " + id})
})


module.exports = router;