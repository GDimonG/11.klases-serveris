const express = require('express');
const router = express.Router();
const squareFormController = require('../controllers/squareFormController')

router.route('/').post(squareFormController.squareNumber);

module.exports = router;