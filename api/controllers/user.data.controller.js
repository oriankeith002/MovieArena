import { PrismaClient } from '@prisma/client';
const asyncHandler = require('express-async-handler');



const create = asyncHandler(async(req,res) => {
    const email = req.body.email;
    // check if user provided email exists in the database 
    // const foundUser = '';


    if(!foundUser) {

    } else {
        throw new Error('User with email already exists')
    }
})



// get all users from database
const getAllUsers = asyncHandler(async(req,res) => {
    try {
        // returning all users in database in variable 

    } catch(error) {
        throw new Error(error)
    }
}) 

// get a single user from database 
const getAUser = asyncHandler(async(req,res) => {
    const {id} = req.params;
    try {
        // returning single user details here. 

    } catch(error) {
        throw new Error(error)
    }
}) 


// Delete a single user from database 
const deleteUser = asyncHandler(async(req,res) => {
    const {id} = req.params;

    try {
        // deleting user using id
    } catch(error) {
        throw new Error(error) 
    }
}) 

// Updating a user 

const updateAUser = asyncHandler(async(req,res) => {
    const {id} = req.user;

    try {

    } catch(error) {
        throw new Error(error);
    }
})


module.exports = {
    
    getAllUsers,
    getAUser,
    deleteUser,
    updateAUser,
}