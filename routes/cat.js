const router = require('express').Router();
const controller = require('../controllllers/cat');
const { saveFile } = require('../utils/gallery');
const {Schema} = require('../utils/schema');
const {validateBody, validateParam} = require('../utils/validator');

router.get('/',  controller.all);
router.post('/',saveFile, [validateBody(Schema.AddCat), controller.add]);

router.route('/:id')
    .get(validateParam(Schema.AllSchema.id,"id"),controller.get)
    // .patch(validateParam(Schema.AllSchema.id, "id"),controller.patch) // Update to Text
    .patch([saveFile,validateBody(Schema.AllSchema.image), controller.patch])
    .delete(validateParam(Schema.AllSchema.id, "id"),controller.drop)

module.exports = router;