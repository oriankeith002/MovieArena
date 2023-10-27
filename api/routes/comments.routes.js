
const commentCtrl = require('../controllers/comment.data.controller');
const express = require('express');
const router = express.Router();

router.post('/addcomment/:id', commentCtrl.createComment);
router.get('/getallcomments',commentCtrl.getAllComments);
router.get('/:id',commentCtrl.getCommentsForSingleMovie);


module.exports = router;

