var ControllerPrototype = require('./controller.prototype');
var Storage = require('../storage');

module.exports = (function() {
  var controller = ControllerPrototype.create({
    path: '/payments'
  });
  var router = controller.router;

  router.post('/', function(req, res, next) {
    Storage[req.cookies.token]['payment'] = req.body.payment;
    res.status(200).json({
      message: 'successfully added payment information'
    });
  });

  return controller;
})();