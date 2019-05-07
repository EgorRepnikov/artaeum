const Router = require('koa-router')

const comments = require('./comment')
const health = require('./health')

const router = new Router().prefix('/media')

router.use(comments, health)

module.exports = router
