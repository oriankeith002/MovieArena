
const config = require('../config/config');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const expressAsyncHandler = require('express-async-handler');




const generateToken = (userdata) => {
    return jwt.sign({userdata}, config.jwtSecret, {expiresIn:"1d"});
}



const getUserDataFromRequest = expressAsyncHandler(async(req) => {
    try {
        const userData = await new Promise((resolve,reject) => {
            jwt.verify(req.cookies.token,config.jwtSecret,{}, async(err,userData) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(userData)
                }
            })
        })
        // return userData;
        if (userData) {
            return userData
        } else {
            res.json(null);
        }
    } catch(err) {
        throw new Error("Failed to fetch user data from request")
    }
})


module.exports = {generateToken, getUserDataFromRequest} 
