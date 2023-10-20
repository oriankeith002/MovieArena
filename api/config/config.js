require('dotenv').config()


const config = {
    path:process.env.ROOT_DIR,
    port: process.env.PORT || 4000,
    jwtSecret: process.env.JWT_SECRET || "OUR_SECRET_KEY",
}


module.exports = config