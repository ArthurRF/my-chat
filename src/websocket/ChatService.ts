import { io } from '../http';

io.on('connect', async socket => {

  socket.emit('start_chat', {
    message: 'Your chat is being executed!'
  })
})