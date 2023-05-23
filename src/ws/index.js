const { ws: { port } } = require('./config.js')
const { Logger } = require('./logger.js')
const log = new Logger('ws')

const { WebSocketServer } = require('ws')

const server = new WebSocketServer({ port })

server.on('connection', (socket) => {
  log.info('connection', socket.id)

  socket.on('message', (data) => {
    log.info({ data })
    //
    const { key, value } = data.toString()
    //
    log.info({ key, value })
  })
})
