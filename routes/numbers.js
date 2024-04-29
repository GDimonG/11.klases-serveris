const express = require('express');
const router = express.Router();
const numbersFormController = require('../controllers/numbersFormController')

router.route('/').get(numbersFormController.getNumbers);
router.route('/:id').get(numbersFormController.getNumberById);

module.exports = router;
