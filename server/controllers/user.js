var ControllerPrototype = require('./controller.prototype');
var Storage = require('../storage');

module.exports = (function() {
  var controller = ControllerPrototype.create({
    path: '/users'
  });
  var router = controller.router;

  /**
  *
  */
  router.post('/:userId/company', function(req, res, next) {
    if(!Storage[req.params.userId]) {
      Storage[req.params.userId] = {};
    }
    Storage[req.params.userId]['company'] = req.body.company;
    res.status(200).json({
      message: 'successfully added company ' + req.body.company.name
    });
  });

  router.get('/:userId/images', function(req, res, next) {
    var data = {};
    if(Storage[req.params.userId]['company']['images']) {
      data = Storage[req.params.userId]['company']['images'];
    }
    res.status(200).json(data);
  });

  router.post('/:userId/images/:imageId', function(req, res, next) {
    if(!Storage[req.params.userId]['company']['images']) {
      Storage[req.params.userId]['company']['images'] = {};
    }
    Storage[req.params.userId]['company']['images'][req.params.imageId] = req.body.file
    res.status(200).json({
      message: 'successfully added image' + req.params.imageId
    });
  });

  router.delete('/:userId/images/:imageId', function(req, res, next) {
    if(!Storage[req.params.userId]['company']['images']) {
      res.state(200).json({
        message: 'nothing to delete'
      })
    } else {
      Storage[req.params.userId]['company']['images'][req.params.imageId] = undefined;
      res.status(200).json({
        message: 'successfully deleted image' + req.params.imageId
      });
    }
  });

  return controller;
})();