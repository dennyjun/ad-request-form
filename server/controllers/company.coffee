ControllerPrototype = require './controller.prototype'
Storage = require '../storage'

module.exports = (() ->
  controller = ControllerPrototype.create 
    path: '/companies'
  router = controller.router

  router.post '/', (req, res, next) ->
    Storage[req.cookies.token]['company'] = req.body.company;
    res.status(200).json 
      message: 'successfully added company ' + req.body.company.name

  return controller
)()