
const config = require('../config/config');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({id}, config.jwtSecret, {expiresIn:"1d"});
}