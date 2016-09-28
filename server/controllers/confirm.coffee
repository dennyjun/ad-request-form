ControllerPrototype = require './controller.prototype'
Storage = require '../storage'

module.exports = (() ->
  controller = ControllerPrototype.create
    path: '/confirms'
  router = controller.router

  router.get '/', (req, res, next) ->
    res.status(200).json
      form: Storage[req.cookies.token] 

  return controller;
)()