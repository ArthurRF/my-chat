import 'reflect-metadata';
import express from 'express';
import path from 'path';
import { createServer } from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';

const app = express();

const server = createServer(app)

mongoose.connect('mongodb://localhost/my-socket-chat', {});

app.use(express.static(path.join(__dirname, "..", "public")));

const io = new Server(server);

io.on('connection', (socket) => {
  console.log('socket: ', socket.id);
})

app.get('/', (req, res) => {
  return res.json({
    message: 'Hello chat'
  })
});

export { server, io }