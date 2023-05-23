import { Logger } from './logger.js'

export class ClientSocket {
  log = new Logger('ClientSocket')

  hostname = null
  port = null
  //
  socket = null

  constructor({
    hostname = 'localhost',
    port = '80',
  } = {}) {
    this.socket = new WebSocket(`ws://${hostname}:${port}`)
    //
    this.hostname = hostname
    this.port = port
  }

  getReadyState() {
    switch (this.socket.readyState) {
      case 0: return 'CONNECTING'
      case 1: return 'OPEN'
      case 2: return 'CLOSING'
      case 3: return 'CLOSED'
    }
  }

  addEventListener(key, fn = (() => { })) {
    const self = this
    //
    self.log.info('addEventListener', { key, fn })
    //
    return self.socket.addEventListener(key, (data) => {
      self.log.info(`event.${key}`, { data })
      //
      fn(data)
    })
  }

  send(key, value = {}) {
    this.log.info('send', { key, value })
    //
    return this.socket.send(JSON.stringify({ key, value }), Date.now())
  }
}
