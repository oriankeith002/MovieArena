const prisma = require('../services/prisma');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');

// generate a password salt
const bcryptSalt = bcrypt.genSaltSync(10);

const createUser = asyncHandler(async(req,res) => {
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

    if (!foundUser) {
        const newUser = await prisma.user.create({
            data:data
        }) 
        res.json({ 
            message: `User ${data.name} created.`
        });
    } else {
        throw new Error('User with email already exists')
    }
})

// get all users from database
const getAllUsers = asyncHandler(async(req,res) => {
    try {
        // returning all users in database in variable 
        const users = await prisma.user.findMany({
            select: {
                id:true,
                email:true,
                name:true,
            }
        });

        res.status(200).json({
            status:true,
            message: 'All Registered Users',
            data: users
        })

    } catch(error) {
        throw new Error(error)
    }
}) 

// get a single user from database 
const getAUser = asyncHandler(async(req,res) => {
    const {id} = req.params;
    try {
        // returning single user details here. 
        const user = await prisma.user.findUnique({
            where: {
                id:id,
            },
            select:{
                email: true,
                name:true,
            }
        })
        res.json(user)

    } catch(error) {
        throw new Error(error)
    }
}) 


// Delete a single user from database 
const deleteUser = asyncHandler(async(req,res) => {
    const {email} = req.body;
    try {
        const user = await prisma.user.delete({
            where: {
                email:email,
            }
        })
        res.json({
            message:`user of ${email} has been deleted`
        })
    } catch(error) {
        throw new Error(error) 
    }
}) 


// Updating a user 

const updateAUser = asyncHandler(async(req,res) => {
    const {id} = req.params; //change to user 

    try {
        const user = await prisma.user.update({
            where: {
                id:id,
            },
            data: req.body,
            select:{
                email: true,
                name:true,
            }
        })
        res.json(user)

    } catch(error) {
        throw new Error(error);
    }
})


module.exports = {
    createUser,
    getAllUsers,
    getAUser,
    deleteUser,
    updateAUser,
}