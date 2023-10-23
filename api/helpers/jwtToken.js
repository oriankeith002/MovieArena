
const config = require('../config/config');
const jwt = require('jsonwebtoken');

const generateToken = (userdata) => {
    return jwt.sign({userdata}, config.jwtSecret, {expiresIn:"1d"});
}



const getUserDataFromRequest = (req) => {
    return new Promise((resolve,reject) => {
        jwt.verify(req.cookies.token, config.jwtSecret, {} , async(err, userData) => {
            if (err) throw err;
            resolve(userData)
        })
    })
}



module.exports = {generateToken, getUserDataFromRequest} 
