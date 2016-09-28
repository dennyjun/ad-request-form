var ControllerPrototype = require('./controller.prototype');
var Storage = require('../storage');

module.exports = (function() {
  var controller = ControllerPrototype.create({
    path: '/images'
  });
  var router = controller.router;

  router.get('/', function(req, res, next) {
    var data = Storage[req.cookies.token]['images'];
    res.status(200).json(data || {});
  });

  router.post('/:imageId', function(req, res, next) {
    if(!Storage[req.cookies.token]['images']) {
      Storage[req.cookies.token]['images'] = {};
    }
    Storage[req.cookies.token]['images'][req.params.imageId] = req.body.file
    res.status(200).json({
      message: 'successfully added image' + req.params.imageId
    });
  });

  router.delete('/:imageId', function(req, res, next) {
    if(!Storage[req.cookies.token]['images']) {
      res.state(200).json({
        message: 'nothing to delete'
      })
    } else {
      Storage[req.cookies.token]['images'][req.params.imageId] = undefined;
      res.status(200).json({
        message: 'successfully deleted image' + req.params.imageId
      });
    }
  });

  return controller;
})();