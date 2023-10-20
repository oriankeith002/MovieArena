const movieCtrl = require('../controllers/movie.data.controller');
const express = require('express');
const router = express.Router();


router.post('/', movieCtrl.createMovie);
router.get('/', movieCtrl.getAllMovies);
router.get('/:id', movieCtrl.getAMovie);
router.put('/:id', movieCtrl.updateAMovie);
router.delete('/:id', movieCtrl.deleteMovie);

module.exports = router;