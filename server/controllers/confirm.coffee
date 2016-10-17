path = require 'path'
ControllerPrototype = require path.resolve 'server/controllers/controller.prototype'
Storage = require path.resolve 'server/storage'

module.exports = (() ->
  controller = ControllerPrototype.create
    path: '/confirms'
  router = controller.router

  router.get '/', (req, res, next) ->
    res.status(200).json
      form: Storage[req.cookies.token] 

  return controller;
)()