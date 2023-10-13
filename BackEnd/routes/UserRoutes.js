const express = require("express");
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { createUser, loginUser, ActivationUser, getUser,logoutUser,getCookie,getProfile,updateProfile } = require("../Controllers/UserController");
const jwt = require('jsonwebtoken');
const { isAuthenticated } = require("../utlis/auth");
const multer = require("multer");
// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Specify the directory where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    const timestamp = Date.now(); // Add a timestamp to the filename to make it unique
    cb(null, timestamp + "_" + file.originalname); // Define the filename format
  },
});
const upload = multer({ storage: storage });

  router.post('/register',createUser);
  router.post('/activation',ActivationUser);
  router.post('/login',loginUser);
  router.post('/getuser',isAuthenticated,getUser);
  router.get('/logout',logoutUser);
  router.post('/cookie',getCookie);
  router.get('/profile/:id',getProfile);
  router.post('/edit',upload.single("image"),updateProfile);
  
  

  module.exports = router