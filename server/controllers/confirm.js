var ControllerPrototype = require('./controller.prototype');
var Storage = require('../storage');

module.exports = (function() {
  var controller = ControllerPrototype.create({
    path: '/confirms'
  });
  var router = controller.router;

  router.get('/', function(req, res, next) {
    res.status(200).json({
      form: Storage[req.cookies.token] 
    });
  });

  return controller;
})();