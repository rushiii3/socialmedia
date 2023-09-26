const express = require("express");
const router = express.Router();
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
// Import your controller functions
const { createPost, getPost } = require("../Controllers/PostController");
// Define routes


router.post("/add-post", upload.single("image"), createPost); // Single file upload with the field name 'image'
router.get("/get-post", getPost);
module.exports = router;
