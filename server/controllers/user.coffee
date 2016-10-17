uuid = require 'uuid'
path = require 'path'
ControllerPrototype = require path.resolve 'server/controllers/controller.prototype'
Storage = require path.resolve 'server/storage'

module.exports = (() ->
  controller = ControllerPrototype.create
    path: '/users'
  router = controller.router

  router.post '/', (req, res, next) ->
    token = uuid.v4()
    res.cookie 'token', token, {maxAge: 600000}
    if !Storage[token]
      Storage[token] = {}
    res.status(200).json
      message: 'successfully returned cookie'

  router.delete '/', (req, res, next) ->
    Storage[req.cookies.token] = undefined
    res.clearCookie 'token'
    res.status(200).json
      message: 'successfully cleared cookie'

  return controller
)()