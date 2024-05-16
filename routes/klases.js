const express = require('express');
const router = express.Router();
const KlasesController = require('../controllers/KlasesController')

router.route('/').get(KlasesController.getKlases);
router.route('/').post(KlasesController.postKlases);
router.route('/:id').get(KlasesController.getKlasesById);
module.exports = router;
