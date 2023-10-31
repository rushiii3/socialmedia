const asyncHandler = require("express-async-handler");
const User = require("../Models/User");
const jwt = require("jsonwebtoken");
const sendMail = require("../utlis/sendMail");
const sendToken = require("../utlis/sendToken");
require("dotenv").config();
const Post = require("../Models/PostModel");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dmuhioahv",
  api_key: "166273865775784",
  api_secret: "blcMAs-77T_1t1VGnRIlLia_RqM",
  secure: true,
});



const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  const UserName = await User.findOne({ username });
  if (UserName) {
    res.status(400);
    throw new Error("User name already exist! ");
  }
  const UserEmail = await User.findOne({ email });
  if (UserEmail) {
    res.status(400);
    throw new Error("User email already exist! ");
  }
  const user = {
    username,
    email,
    password,
  };
  const activationToken = createActivationToken(user);
  const activationURL = `https://socialmedia-gilt.vercel.app/activation/${activationToken}`;
  try {
    await sendMail({
      email: user.email,
      subject: "Activate your account",
      message: `Hello ${user.name} click the link to activate your account ${activationURL}`,
    });
    res.status(201).json({
      success: true,
      message: `Please check your email:- ${user.email} to activate your account`,
    });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
const createActivationToken = (user) => {
  return jwt.sign(user, `${process.env.ACTIVATION_SECRET}`, {
    expiresIn: "5m",
  });
};

const ActivationUser = asyncHandler(async (req, res, next) => {
  try {
    const { activation_token } = req.body;
    if (!activation_token) {
      return res.status(400).json({ error: "Activation token is missing" });
    }

    const newUser = jwt.verify(
      activation_token,
      `${process.env.ACTIVATION_SECRET}`,
      (err, decoded) => {
        if (err) {
          if (err.name === "TokenExpiredError") {
            res.status(500);
            throw new Error("Activation token has expired");
          }
          res.status(500);
          throw new Error("Invalid Activation Token");
        }
        return decoded;
      }
    );
    const { username, email, password } = newUser;
    const UserName = await User.findOne({ username });
    if (UserName) {
      return res.status(400).json({ error: "Username already exists" });
    }
    const UserEmail = await User.findOne({ email });
    if (UserEmail) {
      return res.status(400).json({ error: "User email already exist!" });
    }

    const user = User.create({
      username,
      email,
      password,
    });
    if (!user) {
      res.status(500);
      throw new Error("Internal error");
    }
    res.status(201).json({ message: "Registered Successful" });
  } catch (error) {
    return res.status(500).json({ error: "Token verification failed" });
  }
});
const loginUser = asyncHandler(async (req, res, next) => {
  try {
    console.log("1");
    const { email, password } = req.body;
    console.log("2");
    if (!email || !password) {
      console.log("3");
      res.status(404);
      throw new Error("Email or password should not be empty");
    }
    console.log("4");
    const user = await User.findOne({ email }).select("+password");
    console.log("5");
    if (!user) {
      console.log("6");
      res.status(404);
      throw new Error("User doesn't exist! ");
    }
    console.log("7");
    const isPasswordValid = await user.comparePassword(password);
    console.log("8");
    if (!isPasswordValid) {
      console.log("9");
      res.status(400);
      throw new Error("Please provide the correct information");
    }
    console.log("10");
    const UserToken = jwt.sign(JSON.stringify(user), process.env.JWT_SECRET);
    console.log("11");
    sendToken(UserToken, 201, res);
    console.log("12");
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const getUser = asyncHandler(async (req, res, next) => {
  try {
    
    const user = await User.findById(req.user).select('username email url');
    if (!user) {
      res.status(400);
      throw new Error("User doesn't exists");
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const logoutUser = asyncHandler(async (req, res, next) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    res.status(201).json({
      success: true,
      message: "Log out successful!",
    });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const getCookie = asyncHandler(async(req,res,next) => {
  const {token} = req.cookies;
  res.status(201).json({"token":token});
})

const getProfile = asyncHandler(async(req,res,next) => {
  const {id} = req.params;
  console.log("yesss");
  try {
    const user = await User.findOne({username:id});
    if(!user){
      res.status(404);
      throw new Error("No user found!");
    }
    const profileInfo = await Post.find({ user: user.id }).populate('user', 'username');// Populate 'user' field and select only 'username'
    if(!profileInfo){
      res.status(404);
      throw new Error("No user found!");
    }
  if (profileInfo.length===0){
    console.log("yes");
    res.status(404);
    throw new Error("No user found!");
  }
  res.status(201).json({"data":profileInfo});
  } catch (error) {
      res.status(500);
      throw new Error(error.message);
  }
  
  
})

const updateProfile = asyncHandler(async (req, res, next) => {
  try {
    const data = req.body;
    const user_id = data.user.user._id;
    const options = {
      use_filename: true,
      unique_filename: true,
      overwrite: true,
    };
    const image = data.image
    // Upload the image
    const result = await cloudinary.uploader.upload(image,{ width: 100, crop: "scale", fetch_format: "auto" }).catch((error) => {
      res.status(500);
      throw new Error(error.message);
    });
    if (!result) {
      res.status(500);
      throw new Error("Failed to upload the image");
    }


    const avatar_update = {
      username : data.Updateusername,
      url:result.secure_url,
  }

    const updateProfile = await User.findByIdAndUpdate(user_id,avatar_update); 
    if(!updateProfile){
    res.status(500);
    throw new Error("Not updated some error errored");
    }

    res.status(201).json({ "message": true});

  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(error.message);

  }
});

module.exports = {
  createUser,
  ActivationUser,
  loginUser,
  getUser,
  logoutUser,
  getCookie,
  getProfile,
  updateProfile
};
