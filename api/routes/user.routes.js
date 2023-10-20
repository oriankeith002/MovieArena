const userCtrl = require('../controllers/user.data.controller');
const express = require('express');
const router = express.Router();


router.post('/register', userCtrl.createUser);


module.exports = router;