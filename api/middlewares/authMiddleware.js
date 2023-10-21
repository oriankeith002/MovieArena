const prisma = require('../services/prisma');
const asyncHandler = require('express-async-handler');
const config = require('../config/config');
const jwt = require('jsonwebtoken');


const authMiddleware = asyncHandler(async(req,res,next) => {
    let token;

    if (req?.headers?.authorization?.startsWith("Bearer")){

        token = req.headers.authorization.split(" ")[1];

        try {
            if(token) {
                const decodedToken = jwt.verify(token,config.jwtSecret);
                console.log(decodedToken)
            }
        } catch(error) {
            throw new Error("Invalid Token. Login required again")
        }
    } else {
        throw new Error("Missing authentication token on header")
    }
}) 


module.exports = authMiddleware