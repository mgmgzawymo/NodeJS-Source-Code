const router = require('express').Router();

const controller = require('../controllllers/user');


router.get("/", controller.all);
router.post("/", controller.add);


router.route("/:id")
.get(controller.get)
.patch(controller.patch)
.delete(controller.drop)




module.exports = router;