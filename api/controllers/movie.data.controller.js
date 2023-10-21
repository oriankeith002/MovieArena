const asyncHandler = require('express-async-handler');



const createMovie = asyncHandler(async(req,res) => {
    
    const movieData = req.body;

    try {
        const movie = await prisma.movie.create({
            data:movieData
        })
        res.json(movie)

    } catch(error) {
        throw new Error(error)
    }


})



// get all movies from database
const getAllMovies = asyncHandler(async(req,res) => {
    try {
        // returning all movies in database in variable 
        const allmovies = await prisma.movie.findMany()
        // returning JSON with all the movies
        res.json(allmovies) 

    } catch(error) {
        throw new Error(error)
    }
}) 

// get a single movie from database 
const getAMovie = asyncHandler(async(req,res) => {
    const {id} = req.params;
    try {
        // returning single movie details here. 
        const singleMovie = await prisma.movie.findUnique({
            where:{
                id:id,
            }
        })
        res.json(singleMovie)

    } catch(error) {
        throw new Error(error)
    }
}) 


// Delete a single Movie from database 
const deleteMovie = asyncHandler(async(req,res) => {
    const {id} = req.params;

    try {
        // deleting movie using id
        const movieToDelete = await prisma.movie.delete({
            where: {
                id:id,
            }
        })
        res.json({
            message:`Movie ${movieToDelete.title} uploaded by ${movieToDelete.uploader} has been deleted`,
            data:null
        })
    } catch(error) {
        throw new Error(error) 
    }
}) 

// Updating a movie

const updateAMovie = asyncHandler(async(req,res) => {
    const {id} = req.params;

    try {
        const movieToUpdate = await prisma.movie.update({
            where: {
                id:id,
            },
            data: req.body,
            
        })

    } catch(error) {
        throw new Error(error);
    }
})

// patching a movie 

module.exports = {
    createMovie,
    getAllMovies,
    getAMovie,
    deleteMovie,
    updateAMovie,
}