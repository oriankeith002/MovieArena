const asyncHandler = require('express-async-handler');


const login = asyncHandler(async(req,res) => {

})


const logout = asyncHandler(async(req,res) => {
    const cookie = req.cookies;

}) 




module.exports = {
    login,
    logout,
}