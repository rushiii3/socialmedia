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
    console.error(error);
    return res.status(500).json({ error: "Token verification failed" });
  }
});
const loginUser = asyncHandler(async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(404);
      throw new Error("Email or password should not be empty");
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      res.status(404);
      throw new Error("User doesn't exist! ");
    }
    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      res.status(400);
      throw new Error("Please provide the correct information");
    }
    console.log(JSON.stringify(user));
    const UserToken = jwt.sign(JSON.stringify(user), process.env.JWT_SECRET);
    sendToken(UserToken, 201, res);
  } catch (error) {
    console.log(error);
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
  console.log(req.body);
  const {token} = req.cookies;
  console.log(token)
  res.status(201).json({"token":token});
})

const getProfile = asyncHandler(async(req,res,next) => {
  const {id} = req.params;
  const profileInfo = await Post.find({ user: id }).populate('user', 'username'); // Populate 'user' field and select only 'username'
  res.status(201).json({"data":profileInfo});
})

const updateProfile = asyncHandler(async (req, res, next) => {
  try {
    console.log("write");
    const data = req.body;
    const user_id = data.user.user._id;
    const avatar_update = {
      username : data.Updateusername,
      url:data.image,
  }

    const updateProfile = await User.findByIdAndUpdate(user_id,avatar_update); 
    if(!updateProfile){
    res.status(500);
    throw new Error("Not updated some error errored");
    }

    res.status(201).json({ "message": true});


  } catch (error) {
    console.log(error.message);
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
