const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const socketIo = require('socket.io');
const http = require('http');

const mongoose = require("mongoose");
const MongoURl = process.env.MONGO_URL;
const port = process.env.PORT || 4000;
const cookieParser = require('cookie-parser');
const productRoute = require("./routes/ProductRoutes");
const errorHandler = require("./Middleware/ErrorHandler");
const UserRoutes = require('./routes/UserRoutes');
const bodyParser = require('body-parser');
const PostRoutes = require('./routes/PostRoutes');
const ChatRoutes = require('./routes/ChatRoutes');
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use("/api/v2", productRoute);
app.use("/api/v2/user", UserRoutes);
app.use("/api/v2/post", PostRoutes);
app.use("/api/v2/chat", ChatRoutes);
app.use('/t', (req,res) => {
  throw new Error("fake error");
  // res.send("Heyyy");
})

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: 'https://socialmedia-gilt.vercel.app/'
  }
});

const users = {};

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
  // Handle user authentication (replace with your actual authentication logic)
  socket.on('authenticate', (username) => {
    console.log('Received authentication request with username:', username);
    // console.log(users);
    users[username] = socket;
    console.log(`${username} authenticated.`);
  });
  socket.on('chat-message', (msg, recipientUsername) => {
    console.log(`Message from ${msg.username}: ${msg.message} to ${msg.recipient}`);
    // Check if the recipient is online
    const recipientSocket = users[msg.recipient];
    if (recipientSocket) {
      // Generate a unique private room name based on usernames
      const roomName = [msg.username, msg.recipient].sort().join('-');
      console.log(roomName);
      // Join the private room
      socket.join(roomName);
      recipientSocket.join(roomName);

      // Emit the message to the private room
      io.to(roomName).emit('private-message', {
        sender: socket.id,
        message: msg,
      });
    } else {
      console.log(`${recipientUsername} is not online.`);
    }
  });

  socket.on('disconnect', (reason) => {
    console.log(`Client disconnected: ${socket.id}, reason: ${reason}`);
    // Remove the user from the users object when they disconnect
    for (const [username, userSocket] of Object.entries(users)) {
      if (userSocket === socket) {
        delete users[username];
        break;
      }
    }
  });
});

mongoose
  .connect(MongoURl)
  .then(() => {
    console.log("Connected!");
    server.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
  app.use(errorHandler);
  module.exports = app;



