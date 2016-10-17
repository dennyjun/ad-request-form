path = require 'path'
user = require path.resolve 'server/controllers/user'
bid = require path.resolve 'server/controllers/bid'
company = require path.resolve 'server/controllers/company'
image = require path.resolve 'server/controllers/image'
payment = require path.resolve 'server/controllers/payment'
confirm = require path.resolve 'server/controllers/confirm'

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