const express = require('express');
const router = express.Router();
const StudentsController = require('../controllers/StudentsController')

router.route('/').get(StudentsController.getStudents);

router.route('/').post(StudentsController.postStudents);

router.route('/:id').get(StudentsController.getStudentsById);


module.exports = router;