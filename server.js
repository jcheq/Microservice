// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables


const app = express();
const server = http.createServer(app);
const io = socketIo(server);

connectDB();

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/tickets', require('./routes/tickets'));

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
