var user = require('./user');
var bid = require('./bid');
var company = require('./company');
var image = require('./image');
var payment = require('./payment');
var confirm = require('./confirm');

module.exports = (() => {
  var controllers = [
    user,
    bid,
    company,
    image,
    payment,
    confirm
  ];
  var router = {};
  controllers.forEach((controller) => {
    router[controller.path] = controller.router;
  });
  return router;
})();