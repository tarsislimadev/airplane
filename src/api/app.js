const Router = require('./libs/router/')
const Logger = require('./libs/logger/')

const pack = require('./package.json')

const router = new Router()
const log = new Logger('API')

router.post('/info', (_, res) => {
  log.info('info', { req: null, res: null })
  const { name, version, license } = pack
  return res.setJSON({ name, version, license })
})

module.exports = router
