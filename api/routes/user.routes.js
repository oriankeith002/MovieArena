const userCtrl = require('../controllers/user.data.controller');
const express = require('express');
const router = express.Router();
const {authMiddleware} = require('../middlewares/authMiddleware');


router.post('/register', userCtrl.createUser);
router.get('/allusers', userCtrl.getAllUsers);
router.delete('/delete-user',authMiddleware, userCtrl.deleteUser);
router.get('/:id', userCtrl.getAUser);
router.put('/:id',authMiddleware, userCtrl.updateAUser)


module.exports = router;