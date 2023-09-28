const jwt = require('jsonwebtoken');
const User = require('../Models/User');
const asynchandler = require('express-async-handler');
exports.isAuthenticated = asynchandler(async(req,res,next) => {
    const {token} = req.body;
    if(!token){
        res.status(401);
        throw new Error("Please login to continue");
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded._id);
    next();
})