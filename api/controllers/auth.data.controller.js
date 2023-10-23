const prisma = require('../services/prisma');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../helpers/jwtToken');

// generate a password salt
const bcryptSalt = bcrypt.genSaltSync(10);

const login = asyncHandler(async(req,res) => {

    const {email, password} = req.body;
    
    // find user with email 
    const user = await prisma.user.findUnique({
        where: {
            email:email,
        },
    })

    if (user) {
        // check if password is okay 
        const passOk = bcrypt.compareSync(password,user.password)
        if (passOk) {  
            // generate accesstoken
            const accessToken = generateToken({email:user.email,id:user.id})
            res.cookie('token',accessToken).json({...user,accessToken})

        } else {
            throw new Error('Invalid Credentials')
        }

    } else {
        res.json('User with email not found')
    }

})



const getProfile = asyncHandler(async(req,res) => {

    const {token} = req.cookies;

    if (token) {

        jwtSecret.verify(token, config.jwtSecret, {}, async(err,userData) => {
            if (err) throw err;
            //grad user info from cookie 
            const {name,email,id} = await prisma.user.findUnique({
                where: {
                    email:userData.email
                }
            })
            res.json({name,email, id})
        })
    } else {
        res.json(null);
    }

})



const logout = asyncHandler(async(req,res) => {
    // setting access token to blank string.
    res.cookie('token','').json(true);

}) 




module.exports = {
    login,
    logout,
    getProfile
}