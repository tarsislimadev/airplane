import { Logger } from './logger.js'

export class Scene {
  log = new Logger('Scene')

  add() {
    // FIXME
  }
}

export class GridHelper {
  log = new Logger('GridHelper')
}

export class Position {
  log = new Logger('Position')

  x = 0
  y = 0

  set(x, y) {
    this.x = x
    this.y = y

    return this
  }
}

export class WebGLRenderer {
  log = new Logger('WebGLRenderer')

  width = 100
  height = 100

  domElement = document.createElement('canvas')

  animationFunctions = []

  setSize(w, h) {
    this.log.info('setSize', { w, h })
    //
    this.width = w
    this.height = h
    //
    return this
  }

  setAnimationLoop(fn = (() => { })) {
    this.log.info('setAnimationLoop', { fn })
    //
    this.animationFunctions.push(fn(this))
    //
    this.runAnimationLoop()
    //
    return this
  }

  runAnimationLoop(t) {
    const { animationFunctions: [fn] } = this
    //
    return requestAnimationFrame((_t) => this.runAnimationLoop(_t))
  }

  render(scene) {
    // FIXME
  }
}
