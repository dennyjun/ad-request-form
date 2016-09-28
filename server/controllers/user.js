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
    if(Storage[req.params.userId]['images']) {
      data = Storage[req.params.userId]['images'];
    }
    res.status(200).json(data);
  });

  router.post('/:userId/images/:imageId', function(req, res, next) {
    if(!Storage[req.params.userId]['images']) {
      Storage[req.params.userId]['images'] = {};
    }
    Storage[req.params.userId]['images'][req.params.imageId] = req.body.file
    res.status(200).json({
      message: 'successfully added image' + req.params.imageId
    });
  });

  router.delete('/:userId/images/:imageId', function(req, res, next) {
    if(!Storage[req.params.userId]['images']) {
      res.state(200).json({
        message: 'nothing to delete'
      })
    } else {
      Storage[req.params.userId]['images'][req.params.imageId] = undefined;
      res.status(200).json({
        message: 'successfully deleted image' + req.params.imageId
      });
    }
  });

  router.get('/:userId/bids', function(req, res, next) {
    if(Storage[req.params.userId]['bids']) {
      return res.status(200).json(Storage[req.params.userId]['bids']);
    }
    var images = {};
    if(Storage[req.params.userId]['images']) {
      images = Storage[req.params.userId]['images'];
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
    Storage[req.params.userId]['bids'] = data;
    res.status(200).json(data);
  });

  router.put('/:userId/bids', function(req, res, next) {
    Storage[req.params.userId]['bids'] = req.body.bids;
    res.status(200).json({
      message: 'successfully updated bids'
    });
  });

  router.post('/:userId/payment', function(req, res, next) {
    Storage[req.params.userId]['payment'] = req.body.payment;
    res.status(200).json({
      message: 'successfully added payment information'
    });
  });

  router.get('/:userId/confirm', function(req, res, next) {
    res.status(200).json({
      form: Storage[req.params.userId]  
    });
  });

  return controller;
})();