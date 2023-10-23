const config = require('../config/config');
const jwt = require('jsonwebtoken');
const prisma = require('../services/prisma');
const asyncHandler = require('express-async-handler');

const authMiddleware = asyncHandler(async(req,res,next) => {
    const {token} = req.cookies;

    if(token) {
        try {
            const decodedToken = jwt.verify(token, config.jwtSecret);
            // console.log(decodedToken)

            // extract the need user info 
            const user = await prisma.user.findUnique({
                where: {
                    email:decodedToken?.token
                },
                select:{
                    name:true,
                    email:true,
                    id:true

                }
            }) 

            req.user = user; // making req.user container our user detail. 
            next()

        }catch(error) {
            throw new Error("Invalid Token. Login required again")
        }

    } else {
        throw new Error("Missing authentication details")
    }
})


module.exports = authMiddleware