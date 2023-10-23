const movieCtrl = require('../controllers/movie.data.controller');
const {authMiddleware} = require('../middlewares/authMiddleware');
const express = require('express');
const router = express.Router();
const multer = require('multer');


const photosMiddleware = multer({dest:'uploads/'})

router.post("/upload-by-link", movieCtrl.uploadByLink);
router.post('/create-movie',authMiddleware, movieCtrl.createMovie);
router.get('/allmovies', movieCtrl.getAllMovies);
router.get('/:id', movieCtrl.getAMovie);
router.put('/:id',authMiddleware, movieCtrl.updateAMovie);
router.delete('/:id',authMiddleware, movieCtrl.deleteMovie);
router.post('/create-genre', movieCtrl.createGenre);
router.get('user-movies',authMiddleware,movieCtrl.userMoviesView);

module.exports = router;