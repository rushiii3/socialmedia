const express = require("express");
const router = express.Router();
const asyncHandler = require('express-async-handler');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' });
const {createPost,getPost} =  require("../Controllers/PostController")
router.post("/add-post",upload.single('image'),createPost);
router.get("/get-post",getPost);
module.exports = router