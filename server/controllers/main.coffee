user = require './user'
bid = require './bid'
company = require './company'
image = require './image'
payment = require './payment'
confirm = require './confirm'

module.exports = (() ->
  controllers = [
    user,
    bid,
    company,
    image,
    payment,
    confirm
  ]
  router = {};
  controllers.forEach (controller) ->
    router[controller.path] = controller.router
  return router
)()