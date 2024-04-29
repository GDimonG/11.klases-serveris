const express = require('express');
const router = express.Router();
const postsFormController = require('../controllers/postsFormController')

router.route('/').get(postsFormController.getPosts);

router.route('/').post(postsFormController.postPosts);

router.route('/:id').get(postsFormController.getPostsById);

module.exports = router;
