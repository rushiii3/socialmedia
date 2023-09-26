const express = require("express");
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { createUser, loginUser, ActivationUser, getUser,logoutUser } = require("../Controllers/UserController");
const jwt = require('jsonwebtoken');
const { isAuthenticated } = require("../utlis/auth");
  router.post('/register',createUser);
  router.post('/activation',ActivationUser);
  router.post('/login',loginUser);
  router.get('/getuser',isAuthenticated,getUser);
  router.get('/logout',logoutUser)
 

  
  

  module.exports = router