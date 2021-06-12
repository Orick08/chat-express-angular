const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
  console.log('New connection');
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log('Server is running on ' + PORT);
});
