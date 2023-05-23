import * as TWO from 'two'
import { ClientSocket } from 'webSocket'

const __ = {
  getWidth: () => window.innerWidth,
  getHeight: () => window.innerHeight,
  getAspect: () => __.getWidth() / __.getHeight(),
}

const COLORS = {
  YELLOW: 0xFFFF00,
  WHITE: 0xFFFFFF,
}

// //

const scene = new TWO.Scene()

const grid = new TWO.GridHelper(100, 100, COLORS.WHITE)
scene.add(grid)

// //

const renderer = new TWO.WebGLRenderer()
renderer.setSize(__.getWidth(), __.getHeight())
document.body.appendChild(renderer.domElement)

document.body.style.margin = '0'

renderer.setAnimationLoop(() => renderer.render(scene))

//

const socket = new ClientSocket({ port: '8000' })

socket.addEventListener('error', console.error)

socket.addEventListener('open', (data) => {
  socket.send('hello', 'server')
})

socket.addEventListener('message', (data) => {
  console.log('message', { data })
})
