const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  caption: {
    type: String,
    required: [true, "Please enter a caption"],
  },
  imageUrl: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    format: {
      type: String,
      required: true,
    },
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    // required: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
    },
  ],
  comments: [
    {
      text: {
        type: String,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to the User model
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now, // Default value is the current date and time
  },
});

module.exports = mongoose.model("Post", postSchema);
