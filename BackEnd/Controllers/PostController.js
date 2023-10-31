const asyncHandler = require("express-async-handler");
const User = require("../Models/User");
const Post = require("../Models/PostModel");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dmuhioahv",
  api_key: "166273865775784",
  api_secret: "blcMAs-77T_1t1VGnRIlLia_RqM",
  secure: true,
});
const createPost = asyncHandler(async (req, res, next) => {
  try {
    const { caption, image, user } = req.body;
    const options = {
      use_filename: true,
      unique_filename: true,
      overwrite: true,
    };
    // Upload the image
    const result = await cloudinary.uploader.upload(image,{transformation: [
      {width: 500, crop: "scale"},
      {fetch_format: "auto"}
      ]}).catch((error) => {
      res.status(500);
      throw new Error(error.message);
    });
    if (!result) {
      res.status(500);
      throw new Error("Failed to upload the image");
    }
    // console.log(
    //   cloudinary.url("" + result.public_id + "." + result.format + "")
    // );
    console.log("yee2");
    const postschmea = {
      caption: caption,
      imageUrl: {
        public_id: result.public_id,
        url: result.secure_url,
        format: result.format,
      },
      user: user.user._id,
      likes: [],
      comments: [],
    };
    const post = await Post.create(postschmea);
    console.log("yee3");
    console.log(post);
    if (!post) {
      res.status(500);
      throw new Error("Failed to create the post");
    }
    // const postId = "6506a4c4b65db5907c6ce679";
    // const userId = "6501fd3622a29bf5289c69c6";
    // const updatedPost = await Post.findOneAndUpdate(
    //   { _id: postId },
    //   { $push: { likes: userId } }, // Add the user ID to the likes array
    //   { new: true } // This option returns the updated post
    // );

    // if (!updatedPost) {
    //   return res.status(404).json({ error: 'Post not found' });
    // }
    res.status(201).json({ success: true, message: "Post added successfully" });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
const getPost = asyncHandler(async (req, res, next) => {
  const posts = await Post.find({})
  .populate({
    path: "user",
    select: "username url", // Only select the username field from the user data
  })
    .sort({ createdAt: -1 });
  res.json(posts);
});
module.exports = {
  createPost,
  getPost,
};
