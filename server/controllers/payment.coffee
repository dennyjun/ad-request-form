ControllerPrototype = require './controller.prototype'
Storage = require '../storage'

module.exports = (() ->
  controller = ControllerPrototype.create
    path: '/payments'
  router = controller.router

  router.post '/', (req, res, next) ->
    Storage[req.cookies.token]['payment'] = req.body.payment
    res.status(200).json 
      message: 'successfully added payment information'

  router.get '/', (req, res, next) ->
    payment = Storage[req.cookies.token]['payment'] || {}
    res.status(200).json payment: payment

  return controller
)()