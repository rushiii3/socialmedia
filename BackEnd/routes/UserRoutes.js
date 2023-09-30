const express = require("express");
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { createUser, loginUser, ActivationUser, getUser,logoutUser,getCookie,getProfile } = require("../Controllers/UserController");
const jwt = require('jsonwebtoken');
const { isAuthenticated } = require("../utlis/auth");
  router.post('/register',createUser);
  router.post('/activation',ActivationUser);
  router.post('/login',loginUser);
  router.post('/getuser',isAuthenticated,getUser);
  router.get('/logout',logoutUser);
  router.post('/cookie',getCookie);
  router.get('/profile/:id',getProfile);

  
  

  module.exports = router