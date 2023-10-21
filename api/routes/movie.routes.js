const movieCtrl = require('../controllers/movie.data.controller');
const express = require('express');
const router = express.Router();


router.post('/create-movie', movieCtrl.createMovie);
router.get('/allmovies', movieCtrl.getAllMovies);
router.get('/:id', movieCtrl.getAMovie);
router.put('/:id', movieCtrl.updateAMovie);
router.delete('/:id', movieCtrl.deleteMovie);
router.post('/create-genre', movieCtrl.createGenre);

module.exports = router;