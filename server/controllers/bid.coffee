ControllerPrototype = require './controller.prototype'
Storage = require '../storage'

module.exports = (() ->
  controller = ControllerPrototype.create
    path: '/bids'
  router = controller.router;

  router.get '/', (req, res, next) ->
    data = Storage[req.cookies.token]['bids']
    if data
      return res.status(200).json(data)
    images = Storage[req.cookies.token]['images'] || {};
    keys = Object.keys images
    data = {}
    for index of keys
      data[keys[index]] =
        amt: 0
        maxImpressions: 0
        img: images[keys[index]]
    Storage[req.cookies.token]['bids'] = data;
    res.status(200).json(data)

  router.put '/', (req, res, next) ->
    Storage[req.cookies.token]['bids'] = req.body.bids
    res.status(200).json
      message: 'successfully updated bids'

  return controller
)()