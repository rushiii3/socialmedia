const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const MongoURl = process.env.MONGO_URL;
const port = process.env.PORT || 4000;
const cookieParser = require("cookie-parser");
const productRoute = require("./routes/ProductRoutes");
const errorHandler = require("./Middleware/ErrorHandler");
const UserRoutes = require('./routes/UserRoutes');
const bodyParser = require('body-parser');
const PostRoutes = require('./routes/PostRoutes');
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["https://socialmedia-gilt.vercel.app"],
    credentials: true,
  })
);

app.use("/api/v2", productRoute);
app.use("/api/v2/user", UserRoutes);
app.use("/api/v2/post", PostRoutes);
app.use('/t', (req,res) => {
  throw new Error("fake error");
  // res.send("Heyyy");
})

mongoose
  .connect(MongoURl)
  .then(() => {
    console.log("Connected!");
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
  app.use(errorHandler);
  module.exports = app;



