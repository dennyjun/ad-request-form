var ControllerPrototype = require('./controller.prototype');

module.exports = (function() {
  var controller = ControllerPrototype.create({
    path: '/users'
  });
  var router = controller.router;

  /**
  *
  */
  router.post('/:userId/company', function(req, res, next) {
    console.log('yup');
    res.status(200).json('yup');
  });

  router.post('/:userId/images/:imageId', function(req, res, next) {
    console.log('image id', req.params.imageId);
    res.status(200).json('yup');
  });

  return controller;
})();