const router = require('express').Router();

const controller = require('../controllllers/user');
const {Schema,RegisterSchema} = require('../utils/schema');// Schema တစ်ခုထည့်လိုက်ရင်ရပါပြီ
const {validateBody} = require('../utils/validator');


router.post("/", controller.login);
router.post("/register", [validateBody(Schema.RegisterSchema),controller.register]);








module.exports = router;