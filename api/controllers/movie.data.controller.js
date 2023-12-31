const asyncHandler = require('express-async-handler');
const prisma = require('../services/prisma');
const download = require('image-downloader');
const config = require('../config/config');
const { getUserDataFromRequest } = require('../helpers/jwtToken');


const createMovie = asyncHandler(async(req,res) => {
    const userData = await getUserDataFromRequest(req)
    const movieData = req.body; 

    console.log(userData.userdata.id)

    try {
        const movie = await prisma.movie.create({
            data:{
                title:movieData.title,
                thumbnail:movieData.thumbnail.join(),
                releaseDate:new Date(movieData.releaseDate),
                releaseYear:movieData.releaseYear,
                rating:+movieData.rating,
                plot:movieData.plot,
                uploaderId:userData.userdata.id,
                genres:{
                    connect: movieData.genres.map(genre => ({
                        name:genre
                    }))
                }
            }
        })
        res.json(movie)

    } catch(error) {
        throw new Error(error)
    }


})



// get all movies with functionality Filter , sort and pagination

const getAllMovies = asyncHandler(async(req,res) => {

    try {


        const {title, releaseYear, sortBy, sortOrder, page, limit} = req.query;

        console.log(req.query)

        const query = {
            select : {
                id:true,
                title:true,
                thumbnail:true,
                releaseDate:true,
                releaseYear:true,
                rating:true,
                plot:true,
                uploaderId:true,
                genres:true,
                uploadedAt:true,
            },
            where:{},
            orderBy: {},
            skip: 0,
            take: 10,
        };

        if (title) {
            query.where.title = {
                contains: title.toLowerCase(),
            };
        }

        if (releaseYear) {
            query.where.releaseYear = parseInt(releaseYear);
        }


        if (sortBy && sortOrder) {
            query.orderBy[sortBy] = sortOrder.toLowerCase() === 'asc' ? 'asc' : 'desc';
        }

        if (page && limit) {
            query.skip = (parseInt(page) - 1) * parseInt(limit)
            query.take = parseInt(limit);
        } 

        let allmovies;

        if (Object.keys(query.where).length === 0) {
            // No search queries return all movies
            
            console.log('----------------------')
            console.log(query)
            console.log('----------------------')
    
            allmovies = await prisma.movie.findMany(query);

        } else {
            console.log('----------------------')
            console.log(query)
            console.log('----------------------')
            allmovies = await prisma.movie.findMany({
                select: query.select,
                where: query.where,
                orderBy: query.orderBy,
                skip: query.skip,
                take:query.take,
            })
        }

        // const allmovies = await prisma.movie.findMany(query);

        res.json(allmovies)

    } catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error'});
    }
})

















// // get all movies from database
// const getAllMovies = asyncHandler(async(req,res) => {
//     try {
//         // returning all movies in database in variable 
//         const allmovies = await prisma.movie.findMany({
//             select: {
//                 id:true,
//                 title:true,
//                 thumbnail:true,
//                 releaseDate:true,
//                 releaseYear:true,
//                 rating:true,
//                 plot:true,
//                 uploaderId:true,
//                 genres:true,
//             }
//         })
//         // returning JSON with all the movies
//         res.json(allmovies) 

//     } catch(error) {
//         throw new Error(error)
//     }
// }) 

// get a single movie from database 
const getAMovie = asyncHandler(async(req,res) => {
    const {id} = req.params;
    try {
        // returning single movie details here. 
        const singleMovie = await prisma.movie.findUnique({
            where:{
                id:+id,
            },
            select: {
                id:true,
                title:true,
                thumbnail:true,
                releaseDate:true,
                releaseYear:true,
                rating:true,
                plot:true,
                uploaderId:true,
                genres:true,
            }
        })
        res.json(singleMovie)

    } catch(error) {
        throw new Error(error)
    }
}) 


// Delete a single Movie from database 
const deleteMovie = asyncHandler(async(req,res) => { 
    if (req.cookies.token) {

    
        const id = req.params.id;
        const userData = await getUserDataFromRequest(req)

        try {
            // deleting movie using id
            const movieToDelete = await prisma.movie.delete({
                where: {
                    id:+id,
                    uploaderId:userData.userdata.id
                }
            })

            res.json({
                message:`Movie ${movieToDelete.title} belonging to ${userData.name} has been deleted`,
                data:null
            })
        } catch(error) {
            throw new Error('Ensure that you own the movie') 
        } 
    } else {
        res.json(null)
    }
}) 

// Updating a movie

const updateAMovie = asyncHandler(async(req,res) => {
    
    if (req.cookies.token) {
        const {id} = req.params;
        const userData = await getUserDataFromRequest(req);
        const updateData = req.body;
    
        // define new genre list 
        console.log('---------------------------------------------')
        const newGenreList = [...new Set(updateData.genres.map((genre) => (typeof genre === 'object' ? genre.name : genre )))]
        console.log(newGenreList)
        console.log('----------------------------------------------')



        try {
            const movieToUpdate = await prisma.movie.update({
                where: {
                    id:+id,
                    uploaderId:userData.userdata.id
                },
                data:{
                    title:updateData.title,
                    thumbnail:updateData.thumbnail.join(),
                    releaseDate:new Date(updateData.releaseDate),
                    releaseYear:updateData.releaseYear,
                    rating:+updateData.rating,
                    plot:updateData.plot,
                    uploaderId:userData.userdata.id,
                    genres:{
                        connect: newGenreList.map(genre => ({
                            name:genre
                        }))
                    }
                }
                
            })
            
            res.json(movieToUpdate)

        } catch(error) {
            throw new Error(error)
            // throw new Error('You do not have the rights to update movie');
        }
    } else {
        console.log('An Error occured')
    }
})

const createGenre = asyncHandler(async(req,res) => {
    const genreData = req.body; 
    try {
        const genre = await prisma.genre.create({
            data:genreData
        })
        res.json(genre)
    } catch(error) {
        throw new Error(error)
    }
})


const uploadByLink = asyncHandler(async(req,res) => {
    const {link} = req.body;
    const newName = 'photo' + Date.now() + '.jpg'
    await download.image({
        url: link,
        dest: config.path + 'api/uploads/' + newName
    })

    res.json(newName);
})




module.exports = {
    createMovie,
    getAllMovies,
    getAMovie,
    deleteMovie,
    updateAMovie,
    createGenre,
    uploadByLink,

}