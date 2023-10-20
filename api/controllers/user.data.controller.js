const prisma = require('../services/prisma');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');

// generate a password salt
const bcryptSalt = bcrypt.genSaltSync(10);

const create = asyncHandler(async(req,res) => {
    const data = req.body;
    const {email} = data;
    // check if user provided email exists in the database 
    const foundUser = await prisma.user.findUnique({
        where: {
            email:email,
        },
    })

    // Hashing user input password
    data.password = bcrypt.hashSync(data.password, bcryptSalt)

    console.log(data) // check the data object

    if (!foundUser) {
        const newUser = await prisma.user.create({
            data:data
        }) 
    } else {
        throw new Error('User with email already exists')
    }
})



// get all users from database
const getAllUsers = asyncHandler(async(req,res) => {
    try {
        // returning all users in database in variable 
        const users = await prisma.user.findMany();

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