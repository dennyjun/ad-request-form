var ControllerPrototype = require('./controller.prototype');
var Storage = require('../storage');

module.exports = (function() {
  var controller = ControllerPrototype.create({
    path: '/bids'
  });
  var router = controller.router;

  router.get('/', function(req, res, next) {
    if(Storage[req.cookies.token]['bids']) {
      return res.status(200).json(Storage[req.cookies.token]['bids']);
    }
    var images = {};
    if(Storage[req.cookies.token]['images']) {
      images = Storage[req.cookies.token]['images'];
    }
    var data = {};
    var keys = Object.keys(images);
    for(var index in keys) {
      data[keys[index]] = {
        amt: 0,
        maxImpressions: 0,
        img: images[keys[index]]
      };
    }
    Storage[req.cookies.token]['bids'] = data;
    res.status(200).json(data);
  });

  router.put('/', function(req, res, next) {
    Storage[req.cookies.token]['bids'] = req.body.bids;
    res.status(200).json({
      message: 'successfully updated bids'
    });
  });

  return controller;
})();