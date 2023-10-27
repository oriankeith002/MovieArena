const asyncHandler = require('express-async-handler');
const prisma = require('../services/prisma');
const config = require('../config/config');
const { getUserDataFromRequest } = require('../helpers/jwtToken');


const createComment = asyncHandler(async(req,res) => {

    // get the commentor authentication data
    const userData = await getUserDataFromRequest(req) 
    const commentData = req.body;
    const movieId = req.params.id; 

    if(req.cookies.token) {
        try { 
            const comment = await prisma.comment.create({
                data:{
                    comment: commentData.comment,
                    commentedOnMovieId:+movieId,
                    commentorId:userData.userdata.id,
                }
            })
            res.json(comment)
        } catch(error) {
            throw new Error(error)
        }
    } else {
        res.json({
            message:"Please Login to add comment"
        })
    }

})


const getAllComments = asyncHandler(async(req,res) => {
    
    try {
        const allComments = await prisma.comment.findMany({
            select:{
                id:true,
                comment: true,
                commentedOnMovieId: true,
                commentorId: true,
                commentedAt: true,

            }
        })

        res.json(allComments)
    } catch(error) {
        throw new Error(error) 
    }
})



const getCommentsForSingleMovie = asyncHandler(async(req,res) => {
    try {
        const {id} = req.params;

        const movieComments = await prisma.comment.findMany({
            where:{
                commentedOnMovieId:+id,
            },
            include: {
                commentor: {
                    select: {
                        name:true,
                    }
                }
            }
            // select:{
            //     id:true,
            //     comment:true,
            //     commentedOnMovieId:true
            //     // movies:
            // }
        })

        res.json(movieComments)
        
    } catch(error) {
        throw new Error(error)
    }
}) 


const getUserMovieAndCommentDetail = asyncHandler

module.exports = {createComment, getAllComments, getCommentsForSingleMovie}