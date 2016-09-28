var uuid = require('uuid');
var ControllerPrototype = require('./controller.prototype');
var Storage = require('../storage');

module.exports = (function() {
  var controller = ControllerPrototype.create({
    path: '/users'
  });
  var router = controller.router;

  router.post('/', function(req, res, next) {
    var token = uuid.v4();
    res.cookie('token', token, { maxAge: 600000 });
    if(!Storage[token]) {
      Storage[token] = {};
    }
    res.status(200).json({
      message: 'successfully returned cookie'
    });
  });

  router.delete('/', function(req, res, next) {
    Storage[req.cookies.token] = undefined;
    res.clearCookie('token');
    res.status(200).json({
      message: 'successfully cleared cookie'
    });
  });

  return controller;
})();