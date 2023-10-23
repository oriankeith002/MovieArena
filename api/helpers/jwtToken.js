
const config = require('../config/config');
const jwt = require('jsonwebtoken');

const generateToken = (userdata) => {
    return jwt.sign({userdata}, config.jwtSecret, {expiresIn:"1d"});
}

module.exports = {generateToken} 
