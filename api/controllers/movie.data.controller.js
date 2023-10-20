const asyncHandler = require('express-async-handler');



const createMovie = asyncHandler(async(req,res) => {
    


})



// get all movies from database
const getAllMovies = asyncHandler(async(req,res) => {
    try {
        // returning all movies in database in variable 

    } catch(error) {
        throw new Error(error)
    }
}) 

// get a single movie from database 
const getAMovie = asyncHandler(async(req,res) => {
    const {id} = req.params;
    try {
        // returning single movie details here. 

    } catch(error) {
        throw new Error(error)
    }
}) 


// Delete a single Movie from database 
const deleteMovie = asyncHandler(async(req,res) => {
    const {id} = req.params;

    try {
        // deleting movie using id
    } catch(error) {
        throw new Error(error) 
    }
}) 

// Updating a movie

const updateAMovie = asyncHandler(async(req,res) => {
    const {id} = req.params;

    try {

    } catch(error) {
        throw new Error(error);
    }
})


module.exports = {
    createMovie,
    getAllMovies,
    getAMovie,
    deleteMovie,
    updateAMovie,
}