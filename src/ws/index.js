const { ws: { port } } = require('./config.js')

const { WebSocketServer } = require('ws')

const server = new WebSocketServer({ port  })

server.on('connection', (socket) => {
  console.log('connection', socket.id)

  socket.on('message', (data) => {
    console.log('message', socket.id, data.toString())
  })
})
