var ControllerPrototype = require('./controller.prototype');
var Storage = require('../storage');

module.exports = (function() {
  var controller = ControllerPrototype.create({
    path: '/companies'
  });
  var router = controller.router;

  router.post('/', function(req, res, next) {
    Storage[req.cookies.token]['company'] = req.body.company;
    res.status(200).json({
      message: 'successfully added company ' + req.body.company.name
    });
  });

  return controller;
})();