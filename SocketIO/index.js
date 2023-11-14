const express = require("express");
const app = express();
const socketIo = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:3000'
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

app.get('/test',(req,res) => {
    res.status(200).json({msg:true});
})
server.listen(3500, () => {
    console.log(`http://localhost:${3500}`);
  });