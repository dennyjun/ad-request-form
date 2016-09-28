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

  router.get '/', (req, res, next) ->
    company = Storage[req.cookies.token]['company'] || {};
    res.status(200).json {company: company}

  return controller
)()