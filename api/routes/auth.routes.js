const authCtrl = require('../controllers/auth.data.controller');
const express = require('express');
const router = express.Router();


router.post('/login', authCtrl.login);
router.get('/logout', authCtrl.logout);


module.exports = router;