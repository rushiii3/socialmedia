const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const MongoURl = process.env.MONGO_URL;
const port = process.env.PORT || 4000;
const productRoute = require("./routes/ProductRoutes");
const errorHandler = require("./Middleware/ErrorHandler");
const UserRoutes = require('./routes/UserRoutes');
app.use(express.json());
app.use(
  cors({
    origin: ["http://192.168.1.101:3000"],
    credentials: true,
  })
);

app.use("/api/v2", productRoute);
app.use("/api/v2", UserRoutes);
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



