const userCtrl = require('../controllers/user.data.controller');
const express = require('express');
const router = express.Router();


router.post('/register', userCtrl.createUser);
router.get('/allusers', userCtrl.getAllUsers);
router.delete('/delete-user', userCtrl.deleteUser);
router.get('/:id', userCtrl.getAUser);
router.put('/:id', userCtrl.updateAUser)


module.exports = router;