const Logger = require('../logger/')

class Route {
  method = 'GET'
  path = new RegExp('')

  setPath(path = new RegExp('')) {
    this.path = new RegExp(path, 'ig')
    return this
  }

  getPath() {
    return this.path
  }

  setMethod(method) {
    this.method = method
    return this
  }

  getMethod() {
    return this.method
  }

  isRequest(req) {
    const isMethod = this.method === req.method
    const isPath = this.path.test(req.path)
    
    return isMethod && isPath
  }
}

class Router {
  log = new Logger('Router')

  routes = {}

  post(path, action = () => { }) {
    this.log.info('post', { path, action })

    if (!this.routes[path])
      this.routes[path] = []

    this.routes[path].push(action)
  }

  run(req, res) {
    this.log.info('run', { req, res })

    if (this.routes[req.path]) {
      return this.routes[req.path]
        .reduce((_res, action) => action(req, _res), res)
    }

    return res
  }
}

module.exports = Router
