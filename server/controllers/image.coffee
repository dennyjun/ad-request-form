path = require 'path'
ControllerPrototype = require path.resolve 'server/controllers/controller.prototype'
Storage = require path.resolve 'server/storage'

module.exports = (() ->
  controller = ControllerPrototype.create
    path: '/images'
  router = controller.router

  router.get '/', (req, res, next) ->
    data = Storage[req.cookies.token]['images'] || {}
    res.status(200).json data

  router.post '/:imageId', (req, res, next) ->
    if !Storage[req.cookies.token]['images']
      Storage[req.cookies.token]['images'] = {}
    Storage[req.cookies.token]['images'][req.params.imageId] = req.body.file
    res.status(200).json
      message: 'successfully added image' + req.params.imageId

  router.delete '/:imageId', (req, res, next) ->
    if !Storage[req.cookies.token]['images']
      res.state(200).json
        message: 'nothing to delete'
    else
      delete Storage[req.cookies.token]['images'][req.params.imageId]
      res.status(200).json
        message: 'successfully deleted image' + req.params.imageId

  return controller
)()